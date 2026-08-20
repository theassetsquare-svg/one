/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * 썸네일 렌더러 — 1200x1200 PNG, 좌우 안전여백 60px(사용 폭 1080px).
 *
 * 고정 px 를 쓰지 않습니다. opentype.js 로 글자 path 의 실제 bbox 폭을 재고,
 * 목표 폭에 정확히 맞도록 폰트 크기를 역산합니다. 시스템 한글 폰트에 의존하지 않도록
 * tools/fonts/Pretendard-Black.ttf 를 path 로 변환해 넣습니다(텍스트 요소 0개).
 *
 * 세로 크기 규칙(주인공이 가장 큰 글자여야 한다)을 만족시키기 위해 필요한 줄에만
 * 세로 방향 스케일을 겁니다. 가로 폭은 언제나 목표 폭 그대로 유지됩니다.
 */
const fs = require('fs');
const path = require('path');
const opentype = require('opentype.js');
const { Resvg } = require('@resvg/resvg-js');
const sharp = require('sharp');

const ROOT = path.join(__dirname, '..');
const FONT_PATH = path.join(ROOT, 'tools', 'fonts', 'Pretendard-Black.ttf');
const OUT_OG = path.join(ROOT, 'public', 'og');

const SIZE = 1200;
const MARGIN = 60;
const USABLE = SIZE - MARGIN * 2; // 1080
const TOP = 70;
const BOTTOM = SIZE - 70;
const LIMIT = 300 * 1024;

if (!fs.existsSync(FONT_PATH)) {
  console.error('❌ 한글 볼드 폰트 없음:', FONT_PATH);
  process.exit(1);
}
const buf = fs.readFileSync(FONT_PATH);
const font = opentype.parse(buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength));

/** 글자 path 의 실측 bbox. size=1 기준으로 재서 선형 확대합니다. */
const BASE = 200;
function inkAt(text, size) {
  const p = font.getPath(text, 0, 0, size);
  const b = p.getBoundingBox();
  return { p, b, w: b.x2 - b.x1, h: b.y2 - b.y1 };
}
/** 목표 폭에 정확히 맞는 폰트 크기를 역산합니다(선형이므로 1회 계산으로 끝납니다). */
function fitWidth(text, targetW) {
  const m0 = inkAt(text, BASE);
  const size = (targetW / m0.w) * BASE;
  return { size, ...inkAt(text, size) };
}

/**
 * 한 장 렌더. 반환값이 곧 manifest 항목입니다.
 */
function layout(card) {
  const lines = card.lines.map((l) => ({ ...l }));

  // 1) 가로 폭 확정
  for (const l of lines) {
    if (l.pctRange) {
      // 최소 높이를 만족하는 가장 작은 폭을 범위 안에서 찾습니다(없으면 상한).
      let chosen = l.pctRange[1];
      for (let p = l.pctRange[0]; p <= l.pctRange[1] + 1e-9; p += 0.005) {
        const t = fitWidth(l.text, USABLE * p);
        if (!l.minH || t.h >= l.minH) {
          chosen = p;
          break;
        }
      }
      l.pct = Math.min(chosen, l.pctRange[1]);
    }
    const f = fitWidth(l.text, USABLE * l.pct);
    l.size = f.size;
    l.path = f.p;
    l.bbox = f.b;
    l.w = f.w;
    l.hNat = f.h;
    l.sy = 1;
  }

  // 2) 최소 높이 보정 (가로 폭은 건드리지 않고 세로만 늘립니다)
  for (const l of lines) if (l.minH && l.hNat * l.sy < l.minH) l.sy = l.minH / l.hNat;

  // 3) 주인공은 언제나 가장 큰(높은) 글자여야 합니다.
  const hero = lines.find((l) => l.hero);
  if (hero) {
    const others = lines.filter((l) => l !== hero).map((l) => l.hNat * l.sy);
    const need = Math.max(hero.minH || 0, (others.length ? Math.max(...others) : 0) * 1.12 + 12);
    if (hero.hNat * hero.sy < need) hero.sy = need / hero.hNat;
  }

  for (const l of lines) l.h = l.hNat * l.sy;

  // 4) 세로 배치 — 남는 공간을 줄 사이에 고르게 나눕니다.
  const totalInk = lines.reduce((a, l) => a + l.h, 0);
  const slots = lines.length + 1;
  const gap = Math.max(18, (BOTTOM - TOP - totalInk) / slots);
  let y = TOP + Math.max(0, (BOTTOM - TOP - totalInk - gap * slots) / 2) + gap;
  for (const l of lines) {
    l.x = MARGIN + (USABLE - l.w) / 2;
    l.y = y;
    y += l.h + gap;
  }
  return lines;
}

function svgOf(card, lines) {
  const parts = [`<rect width="${SIZE}" height="${SIZE}" fill="${card.bg}"/>`];
  // 상·하단 얇은 형광 띠 — 텍스트가 아니라 도형이라 규칙에 걸리지 않습니다.
  parts.push(`<rect x="0" y="0" width="${SIZE}" height="14" fill="#C8FF00"/>`);
  parts.push(`<rect x="0" y="${SIZE - 14}" width="${SIZE}" height="14" fill="#C8FF00"/>`);
  for (const l of lines) {
    if (l.box) {
      const px = 26;
      const py = 22;
      parts.push(
        `<rect x="${(l.x - px).toFixed(1)}" y="${(l.y - py).toFixed(1)}" width="${(l.w + px * 2).toFixed(1)}" height="${(l.h + py * 2).toFixed(1)}" rx="26" fill="#000000" fill-opacity="0.55"/>`
      );
    }
    const d = l.path.toPathData(2);
    const tx = (l.x - l.bbox.x1).toFixed(2);
    parts.push(
      `<g transform="translate(${tx} ${l.y.toFixed(2)}) scale(1 ${l.sy.toFixed(5)}) translate(0 ${(-l.bbox.y1).toFixed(2)})"><path d="${d}" fill="${l.color}"/></g>`
    );
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${SIZE}" height="${SIZE}" viewBox="0 0 ${SIZE} ${SIZE}">${parts.join('')}</svg>`;
}

/** 1200x1200 을 유지한 채 300KB 이하로만 낮춥니다(선명도 우선). */
async function writePng(svg, outPath) {
  const raw = new Resvg(svg, { font: { loadSystemFonts: false } }).render().asPng();
  let png = await sharp(raw).png({ compressionLevel: 9, palette: true, colors: 128, effort: 10 }).toBuffer();
  let colors = 128;
  while (png.length > LIMIT && colors > 16) {
    colors = Math.floor(colors / 2);
    png = await sharp(raw).png({ compressionLevel: 9, palette: true, colors, effort: 10 }).toBuffer();
  }
  fs.writeFileSync(outPath, png);
  return png.length;
}

async function main() {
  const { build, SITE } = require('./thumb-spec');
  fs.mkdirSync(OUT_OG, { recursive: true });
  const cards = build();
  const manifest = [];
  let fail = 0;
  for (const card of cards) {
    const lines = layout(card);
    const bytes = await writePng(svgOf(card, lines), path.join(OUT_OG, card.file));
    const heroLine = lines.find((l) => l.hero);
    manifest.push({
      file: card.file,
      pageUrl: `${SITE}${card.url}`,
      pageType: { home: '홈', hub: '허브', own: '가게', venue: '가게', area: '지역' }[card.kind],
      rule: card.rule || card.kind,
      subject: card.subject,
      advertiser: card.ad ? { nick: card.ad.nick, tel: card.ad.tel } : null,
      texts: lines.map((l) => l.text),
      metrics: lines.map((l) => ({
        text: l.text,
        widthPx: +l.w.toFixed(1),
        heightPx: +l.h.toFixed(1),
        widthPct: +((l.w / USABLE) * 100).toFixed(1),
        fontSizePx: +l.size.toFixed(1),
        yScale: +l.sy.toFixed(3),
        hero: !!l.hero,
      })),
      hero: heroLine ? heroLine.text : null,
      bytes,
      width: SIZE,
      height: SIZE,
    });
    if (bytes > LIMIT) {
      console.error('❌ 300KB 초과:', card.file, bytes);
      fail++;
    }
  }
  fs.writeFileSync(path.join(OUT_OG, 'manifest.json'), JSON.stringify(manifest, null, 1));
  console.log(`✅ ${cards.length}장 생성 · manifest.json 기록 · 초과 ${fail}건`);
  if (fail) process.exit(1);
}

module.exports = { layout, svgOf, writePng, font, inkAt, fitWidth, USABLE, SIZE };
if (require.main === module) main();

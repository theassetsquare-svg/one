/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * /night/{지역}-night 13개 2차 페이지 OG 이미지 생성기 — 1200x1200 정사각 PNG.
 *
 * 기존 scripts/generate-images.js 는 손대지 않습니다 (대전원나이트/불광동 전용).
 * 실행: node scripts/generate-area-og.js
 *
 * A그룹(광고주 있음) 4장 — 하단 검은 띠 위에 담당자 닉네임 + 전화번호.
 * B그룹(광고주 없음) 9장 — 업소명 + 지역명 + 사이트 브랜드명. 전화번호·besta12 없음.
 * 연령 배지는 창원룰루랄라나이트 / 대전원나이트 2장만, 완전문으로.
 */
const { Resvg } = require('@resvg/resvg-js');
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const FONT_PATH = path.join(ROOT, 'assets', 'fonts', 'NotoSansKR-VF.ttf');
const OUT_OG = path.join(ROOT, 'public', 'og');
fs.mkdirSync(OUT_OG, { recursive: true });
if (!fs.existsSync(FONT_PATH)) {
  console.error('폰트 없음:', FONT_PATH);
  process.exit(1);
}

const SIZE = 1200;
const BRAND = 'oned-a0q.pages.dev';
const FONT_OPTS = { font: { fontFiles: [FONT_PATH], loadSystemFonts: false, defaultFontFamily: 'Noto Sans KR' } };

// ── 대비 계산 (WCAG) ────────────────────────────────────────────
const lin = (c) => {
  const s = c / 255;
  return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
};
const relLum = (hex) => {
  const n = parseInt(hex.replace('#', ''), 16);
  return 0.2126 * lin((n >> 16) & 255) + 0.7152 * lin((n >> 8) & 255) + 0.0722 * lin(n & 255);
};
const contrast = (a, b) => {
  const [x, y] = [relLum(a), relLum(b)].sort((p, q) => q - p);
  return (x + 0.05) / (y + 0.05);
};
const pickInk = (bg) => (contrast('#FFFFFF', bg) >= contrast('#111111', bg) ? '#FFFFFF' : '#111111');

// ── 업소 정의 (lib/night.ts 와 동일한 값) ───────────────────────
const VENUES = [
  { no: 1, slug: 'eunpyeong-night', lines: ['은평', '나이트'], region: '서울 은평구', bg: '#B3261E', group: 'A', nick: '손흥민', tel: '010-2221-1937' },
  { no: 2, slug: 'changwon-night', lines: ['창원', '나이트'], region: '경남 창원시', bg: '#145C4B', group: 'A', nick: '로또', tel: '010-7528-4936', age: '만 27세 이상' },
  { no: 3, slug: 'ulsan-night', lines: ['울산', '나이트'], region: '울산 남구', bg: '#6E2C8F', group: 'A', nick: '춘자', tel: '010-5653-0069' },
  { no: 4, slug: 'gangnam-night', lines: ['강남', '나이트'], region: '서울 강남구', bg: '#0D3B66', group: 'A', nick: '펩시맨', tel: '010-5655-4866' },
  { no: 5, slug: 'daejeon-night', lines: ['대전', '나이트'], region: '대전광역시', bg: '#7A3B00', group: 'B', age: '만 38세 이상' },
  { no: 6, slug: 'sillim-night', lines: ['신림', '나이트'], region: '서울 관악구', bg: '#244B7A', group: 'B' },
  { no: 7, slug: 'sangbong-night', lines: ['상봉동', '나이트'], region: '서울 중랑구', bg: '#5A0F3C', group: 'B' },
  { no: 8, slug: 'suyu-night', lines: ['수유', '나이트'], region: '서울 강북구', bg: '#2E5C1F', group: 'B' },
  { no: 9, slug: 'busan-night', lines: ['부산', '나이트'], region: '부산 동래구', bg: '#0A5A73', group: 'B' },
  { no: 10, slug: 'suwon-night', lines: ['수원', '나이트'], region: '경기 수원시', bg: '#6B4A00', group: 'B' },
  { no: 11, slug: 'ansan-night', lines: ['안산', '나이트'], region: '경기 안산시', bg: '#3A1F7A', group: 'B' },
  { no: 12, slug: 'yucheon-night', lines: ['유천동', '나이트'], region: '대전 중구 유천동', bg: '#8A2B00', group: 'B' },
  { no: 13, slug: 'ilsan-night', lines: ['일산', '나이트'], region: '경기 고양 일산동구', bg: '#14304A', group: 'B' },
];

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/**
 * NotoSansKR-VF 는 가변 폰트라 resvg 가 font-weight 축을 적용하지 못하고 기본 굵기로만
 * 렌더합니다. 같은 색 스트로크를 덧대 굵기를 만들어 줍니다 (합성 볼드).
 */
const bold = (px) => `stroke-width="${(px).toFixed(2)}" stroke-linejoin="round" paint-order="stroke"`;

/** 한글은 1em, 라틴 숫자·기호는 근사치로 폭을 잡습니다. */
function emWidth(text) {
  let w = 0;
  for (const ch of text) {
    const c = ch.codePointAt(0);
    if (ch === ' ') w += 0.3;
    else if (ch === '-' || ch === '.') w += 0.34;
    else if (c >= 0x30 && c <= 0x39) w += 0.56;
    else if (c < 0x2000) w += 0.55;
    else w += 1.0;
  }
  return w;
}

function fitFont(text, maxWidthPx, cap) {
  return Math.min(cap, Math.floor(maxWidthPx / emWidth(text)));
}

function buildSvg(v) {
  const ink = pickInk(v.bg);
  const inkContrast = contrast(ink, v.bg);
  const sideMargin = 110;
  const nameMax = SIZE - sideMargin * 2; // 980
  const nameFont = Math.min(...v.lines.map((l) => fitFont(l, nameMax, 190)));
  const nameBlockH = v.lines.length * nameFont * 1.18;
  const nameTop = 330 - nameBlockH / 2;

  const parts = [`<rect width="${SIZE}" height="${SIZE}" fill="${v.bg}"/>`];

  // 업소명 (상단 0~55%)
  v.lines.forEach((l, i) => {
    const y = nameTop + nameFont * 0.86 + i * nameFont * 1.18;
    parts.push(
      `<text x="600" y="${Math.round(y)}" font-family="Noto Sans KR" font-size="${nameFont}" font-weight="900" fill="${ink}" stroke="${ink}" ${bold(nameFont * 0.034)} text-anchor="middle" letter-spacing="-2">${esc(l)}</text>`
    );
  });

  // 지역명 (55~60%)
  const regionFont = fitFont(v.region, nameMax, 52);
  parts.push(
    `<rect x="${sideMargin}" y="632" width="${nameMax}" height="3" fill="${ink}" opacity="0.35"/>`,
    `<text x="600" y="705" font-family="Noto Sans KR" font-size="${regionFont}" font-weight="700" fill="${ink}" stroke="${ink}" ${bold(regionFont * 0.03)} text-anchor="middle" opacity="0.95">${esc(v.region)}</text>`
  );

  // 연령 배지 (우측 상단) — 완전문만
  let badgeContrast = null;
  if (v.age) {
    const bf = 44;
    const bw = Math.ceil(emWidth(v.age) * bf) + 56;
    const bx = SIZE - 60 - bw;
    badgeContrast = contrast('#111111', '#FFD700');
    parts.push(
      `<rect x="${bx}" y="52" width="${bw}" height="86" rx="43" fill="#FFD700"/>`,
      `<text x="${bx + bw / 2}" y="110" font-family="Noto Sans KR" font-size="${bf}" font-weight="900" fill="#111111" stroke="#111111" ${bold(bf * 0.035)} text-anchor="middle">${esc(v.age)}</text>`
    );
  }

  let telFont = null;
  let bandContrast = null;

  if (v.group === 'A') {
    // 하단 60~100% 검은 띠 + 흰 글씨 2줄
    bandContrast = contrast('#FFFFFF', '#000000');
    const nickFont = 100;
    telFont = fitFont(v.tel, SIZE - 120, 152);
    parts.push(
      `<rect x="0" y="720" width="${SIZE}" height="480" fill="#000000"/>`,
      `<text x="600" y="875" font-family="Noto Sans KR" font-size="${nickFont}" font-weight="700" fill="#FFFFFF" stroke="#FFFFFF" ${bold(nickFont * 0.03)} text-anchor="middle">${esc(v.nick)}</text>`,
      `<text x="600" y="1055" font-family="Noto Sans KR" font-size="${telFont}" font-weight="900" fill="#FFFFFF" stroke="#FFFFFF" ${bold(telFont * 0.036)} text-anchor="middle" letter-spacing="1">${esc(v.tel)}</text>`
    );
  } else {
    // B그룹 — 브랜드명. 전화번호도 besta12 도 넣지 않습니다.
    const brandFont = fitFont(BRAND, 760, 54);
    parts.push(
      `<rect x="180" y="930" width="840" height="120" rx="60" fill="${ink}" opacity="0.14"/>`,
      `<text x="600" y="1005" font-family="Noto Sans KR" font-size="${brandFont}" font-weight="800" fill="${ink}" stroke="${ink}" ${bold(brandFont * 0.03)} text-anchor="middle" letter-spacing="1">${esc(BRAND)}</text>`,
      `<text x="600" y="1140" font-family="Noto Sans KR" font-size="40" font-weight="700" fill="${ink}" stroke="${ink}" ${bold(1.3)} text-anchor="middle" opacity="0.9">나이트 안내 페이지</text>`
    );
  }

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${SIZE}" height="${SIZE}" viewBox="0 0 ${SIZE} ${SIZE}">${parts.join('')}</svg>`;
  return { svg, ink, inkContrast, nameFont, telFont, bandContrast, badgeContrast };
}

/** 렌더된 PNG에서 특정 색의 잉크 바운딩 박스를 실측합니다. */
async function inkBox(buf, region, isWhite) {
  const { data, info } = await sharp(buf)
    .extract(region)
    .raw()
    .toBuffer({ resolveWithObject: true });
  const ch = info.channels;
  let minX = 1e9, minY = 1e9, maxX = -1, maxY = -1;
  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      const i = (y * info.width + x) * ch;
      const v = (data[i] + data[i + 1] + data[i + 2]) / 3;
      const hit = isWhite ? v > 170 : v < 90;
      if (hit) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  if (maxX < 0) return null;
  return { x: minX, y: minY, w: maxX - minX + 1, h: maxY - minY + 1 };
}

(async () => {
  const report = [];
  for (const v of VENUES) {
    const built = buildSvg(v);
    const png = new Resvg(built.svg, FONT_OPTS).render().asPng();
    const file = path.join(OUT_OG, `${v.slug}-og.png`);
    fs.writeFileSync(file, png);
    const meta = await sharp(file).metadata();

    let telBox = null;
    if (v.group === 'A') {
      // 전화번호 줄만 잘라 흰 글씨 실측 (띠 안쪽, 닉네임 줄 아래)
      telBox = await inkBox(fs.readFileSync(file), { left: 0, top: 920, width: SIZE, height: 200 }, true);
    }

    report.push({
      no: v.no,
      file: path.basename(file),
      size: `${meta.width}x${meta.height}`,
      bytes: fs.statSync(file).size,
      group: v.group,
      bg: v.bg,
      ink: built.ink,
      inkContrast: built.inkContrast.toFixed(2),
      nameFont: built.nameFont,
      nick: v.nick || '-',
      tel: v.tel || '-',
      telFont: built.telFont || '-',
      telGlyphH: telBox ? telBox.h : '-',
      telRenderW: telBox ? telBox.w : '-',
      telClipped: telBox ? (telBox.x <= 1 || telBox.x + telBox.w >= SIZE - 1 ? 'YES' : 'no') : '-',
      bandContrast: built.bandContrast ? built.bandContrast.toFixed(2) : '-',
      age: v.age || '-',
      badgeContrast: built.badgeContrast ? built.badgeContrast.toFixed(2) : '-',
    });
  }
  console.log(JSON.stringify(report, null, 1));
})();

/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * ⛔ 사용 중지 (2026-08-20) — scripts/thumb-render.js 로 대체되었습니다.
 *
 * 이 생성기는 글자 폭을 근사치로 계산해 새 크기 규칙(주인공 글자 폭·높이 하한, G15)을
 * 만족시키지 못하고, 지역 페이지 카드에 가게이름을 넣어 G13/G14 에도 걸립니다.
 * 되살리려면 아래 가드를 지우기 전에 게이트부터 다시 맞추세요.
 */
console.error('⛔ 이 생성기는 사용 중지되었습니다. node scripts/thumb-render.js 를 쓰세요.');
process.exit(1);

/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * /pick/* 썸네일 생성기 — 1200x1200 정사각 PNG, 차콜 + 오렌지.
 *
 * 실행: node scripts/generate-pick-og.js
 *
 * 규칙
 *  - 홈(pick-home): "광고문의" 최대 + "카카오톡 besta12". 배경 단색 차콜.
 *  - 광고주 3곳: 각자 닉네임 + 전화번호 최대 (하단 오렌지 띠).
 *  - 나머지 37곳 + 허브: 업소명 + 지역 + 하단 오렌지 띠 "광고문의 카톡 besta12".
 *  - 다른 업소의 전화번호를 다른 카드에 절대 넣지 않습니다.
 *
 * 기존 generate-images.js / generate-night-og.js 는 손대지 않습니다.
 */
const { Resvg } = require('@resvg/resvg-js');
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const FONT_PATH = path.join(ROOT, 'assets', 'fonts', 'NotoSansKR-VF.ttf');
const OUT_OG = path.join(ROOT, 'public', 'og');
fs.mkdirSync(OUT_OG, { recursive: true });
if (!fs.existsSync(FONT_PATH)) {
  console.error('폰트 없음:', FONT_PATH);
  process.exit(1);
}

const SIZE = 1200;
const ORANGE = '#F2600C';
const CHARCOAL = '#16181C';
const FONT_OPTS = { font: { fontFiles: [FONT_PATH], loadSystemFonts: false, defaultFontFamily: 'Noto Sans KR' } };

/** lib/pick.ts 를 그대로 읽어 씁니다 (데이터 이중 관리 방지). */
function loadVenues() {
  const code = `import { VENUES } from ${JSON.stringify(path.join(ROOT, 'lib', 'pick.ts'))};
console.log(JSON.stringify(VENUES.map((v) => ({
  slug: v.slug, lines: v.ogLines, region: v.ogRegion,
  nick: v.contact ? v.contact.nick : null, tel: v.contact ? v.contact.display : null,
  age: v.ageFull || null,
}))));`;
  const tmp = path.join(ROOT, '.pick-og-load.mjs');
  fs.writeFileSync(tmp, code);
  try {
    const out = execFileSync(process.execPath, ['--experimental-strip-types', tmp], { encoding: 'utf8' });
    return JSON.parse(out.trim().split('\n').pop());
  } finally {
    fs.unlinkSync(tmp);
  }
}

// 40개 차콜 계열 단색 배경 — 서로 다른 값, 모두 흰 글씨 대비 확보
const BGS = [
  '#16181C', '#1A1D22', '#1E2127', '#22262C', '#191C21', '#1D2026', '#21252B', '#252930',
  '#1B1E24', '#1F2329', '#23272E', '#272B33', '#1C2025', '#20242A', '#242830', '#282D35',
  '#1A1E25', '#1E222A', '#22272F', '#262B34', '#181C22', '#1C2128', '#20252D', '#242A32',
  '#171B20', '#1B2026', '#1F242B', '#232930', '#151A1F', '#1A1F25', '#1E242A', '#22282F',
  '#141A1E', '#191F24', '#1D2329', '#21282E', '#131920', '#181E26', '#1C232B', '#202730',
];

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** NotoSansKR-VF 는 가변 폰트라 resvg 가 굵기 축을 못 씁니다. 같은 색 스트로크로 합성 볼드. */
const bold = (px) => `stroke-width="${px.toFixed(2)}" stroke-linejoin="round" paint-order="stroke"`;

function emWidth(text) {
  let w = 0;
  for (const ch of String(text)) {
    const c = ch.codePointAt(0);
    if (ch === ' ') w += 0.3;
    else if (ch === '-' || ch === '.') w += 0.34;
    else if (c >= 0x30 && c <= 0x39) w += 0.56;
    else if (c < 0x2000) w += 0.55;
    else w += 1.0;
  }
  return w;
}
const fit = (text, maxPx, cap) => Math.min(cap, Math.floor(maxPx / emWidth(text)));

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

const MARGIN = 110;
const MAXW = SIZE - MARGIN * 2;

/** 홈 — "광고문의"를 가장 크게. */
function homeSvg() {
  const l1 = '광고문의';
  const f1 = fit(l1, MAXW, 300);
  const l2 = '카카오톡';
  const f2 = fit(l2, MAXW, 120);
  const l3 = 'besta12';
  const f3 = fit(l3, MAXW, 200);
  const parts = [
    `<rect width="${SIZE}" height="${SIZE}" fill="${CHARCOAL}"/>`,
    `<text x="600" y="470" font-family="Noto Sans KR" font-size="${f1}" fill="${ORANGE}" stroke="${ORANGE}" ${bold(f1 * 0.035)} text-anchor="middle" letter-spacing="-4">${esc(l1)}</text>`,
    `<rect x="${MARGIN}" y="590" width="${MAXW}" height="4" fill="#FFFFFF" opacity="0.25"/>`,
    `<text x="600" y="740" font-family="Noto Sans KR" font-size="${f2}" fill="#FFFFFF" stroke="#FFFFFF" ${bold(f2 * 0.03)} text-anchor="middle">${esc(l2)}</text>`,
    `<text x="600" y="920" font-family="Noto Sans KR" font-size="${f3}" fill="#FFFFFF" stroke="#FFFFFF" ${bold(f3 * 0.035)} text-anchor="middle" letter-spacing="2">${esc(l3)}</text>`,
    `<text x="600" y="1080" font-family="Noto Sans KR" font-size="46" fill="#FFFFFF" stroke="#FFFFFF" ${bold(1.4)} text-anchor="middle" opacity="0.82">전국 나이트, 고르는 기준</text>`,
  ];
  return {
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="${SIZE}" height="${SIZE}" viewBox="0 0 ${SIZE} ${SIZE}">${parts.join('')}</svg>`,
    contrast: contrast(ORANGE, CHARCOAL),
    maxFont: f1,
  };
}

/** 업소·허브 공용 카드 */
function cardSvg({ lines, region, bg, nick, tel, age }) {
  const nameFont = Math.min(...lines.map((l) => fit(l, MAXW, 175)));
  const blockH = lines.length * nameFont * 1.18;
  const top = 300 - blockH / 2;
  const parts = [`<rect width="${SIZE}" height="${SIZE}" fill="${bg}"/>`];

  lines.forEach((l, i) => {
    const y = top + nameFont * 0.86 + i * nameFont * 1.18;
    parts.push(
      `<text x="600" y="${Math.round(y)}" font-family="Noto Sans KR" font-size="${nameFont}" fill="#FFFFFF" stroke="#FFFFFF" ${bold(nameFont * 0.034)} text-anchor="middle" letter-spacing="-2">${esc(l)}</text>`
    );
  });

  const regionFont = fit(region, MAXW, 52);
  parts.push(
    `<rect x="${MARGIN}" y="560" width="${MAXW}" height="4" fill="${ORANGE}"/>`,
    `<text x="600" y="650" font-family="Noto Sans KR" font-size="${regionFont}" fill="#FFFFFF" stroke="#FFFFFF" ${bold(regionFont * 0.03)} text-anchor="middle" opacity="0.9">${esc(region)}</text>`
  );

  if (age) {
    const bf = 44;
    const bw = Math.ceil(emWidth(age) * bf) + 56;
    parts.push(
      `<rect x="${SIZE - 60 - bw}" y="52" width="${bw}" height="86" rx="43" fill="${ORANGE}"/>`,
      `<text x="${SIZE - 60 - bw / 2}" y="110" font-family="Noto Sans KR" font-size="${bf}" fill="#FFFFFF" stroke="#FFFFFF" ${bold(bf * 0.035)} text-anchor="middle">${esc(age)}</text>`
    );
  }

  // 하단 오렌지 띠
  parts.push(`<rect x="0" y="760" width="${SIZE}" height="440" fill="${ORANGE}"/>`);
  let maxFont;
  if (tel) {
    const nickFont = fit(nick, SIZE - 200, 104);
    const telFont = fit(tel, SIZE - 120, 158);
    maxFont = telFont;
    parts.push(
      `<text x="600" y="905" font-family="Noto Sans KR" font-size="${nickFont}" fill="#FFFFFF" stroke="#FFFFFF" ${bold(nickFont * 0.03)} text-anchor="middle">${esc(nick)}</text>`,
      `<text x="600" y="1090" font-family="Noto Sans KR" font-size="${telFont}" fill="#FFFFFF" stroke="#FFFFFF" ${bold(telFont * 0.036)} text-anchor="middle" letter-spacing="1">${esc(tel)}</text>`
    );
  } else {
    const l1 = '광고문의 카톡';
    const f1 = fit(l1, SIZE - 200, 96);
    const l2 = 'besta12';
    const f2 = fit(l2, SIZE - 160, 150);
    maxFont = f2;
    parts.push(
      `<text x="600" y="905" font-family="Noto Sans KR" font-size="${f1}" fill="#FFFFFF" stroke="#FFFFFF" ${bold(f1 * 0.03)} text-anchor="middle">${esc(l1)}</text>`,
      `<text x="600" y="1085" font-family="Noto Sans KR" font-size="${f2}" fill="#FFFFFF" stroke="#FFFFFF" ${bold(f2 * 0.035)} text-anchor="middle" letter-spacing="2">${esc(l2)}</text>`
    );
  }
  return {
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="${SIZE}" height="${SIZE}" viewBox="0 0 ${SIZE} ${SIZE}">${parts.join('')}</svg>`,
    contrast: contrast('#FFFFFF', bg),
    bandContrast: contrast('#FFFFFF', ORANGE),
    maxFont,
  };
}

(async () => {
  const venues = loadVenues();
  const report = [];

  const write = async (file, built, extra) => {
    const png = new Resvg(built.svg, FONT_OPTS).render().asPng();
    const full = path.join(OUT_OG, file);
    fs.writeFileSync(full, png);
    const meta = await sharp(full).metadata();
    report.push({
      file,
      size: `${meta.width}x${meta.height}`,
      bytes: fs.statSync(full).size,
      inkContrast: built.contrast.toFixed(2),
      bandContrast: built.bandContrast ? built.bandContrast.toFixed(2) : '-',
      maxFont: built.maxFont,
      ...extra,
    });
  };

  await write('pick-home.png', homeSvg(), { kind: 'home', tel: '-' });
  await write(
    'pick-hub.png',
    cardSvg({ lines: ['전국 나이트', '고르기 40'], region: '지역별 선택 기준', bg: CHARCOAL }),
    { kind: 'hub', tel: '-' }
  );

  venues.forEach((v, i) => {
    v.bg = BGS[i % BGS.length];
  });
  for (const v of venues) {
    await write(`pick-${v.slug}.png`, cardSvg(v), {
      kind: v.tel ? 'advertiser' : 'ad-inquiry',
      tel: v.tel || '-',
      bg: v.bg,
    });
  }

  console.log(JSON.stringify(report, null, 1));
  console.log(`총 ${report.length}장 (배경 고유값 ${new Set(BGS).size}종)`);
})();

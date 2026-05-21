/* eslint-disable @typescript-eslint/no-var-requires */
const { Resvg } = require('@resvg/resvg-js');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const FONT_PATH = path.join(ROOT, 'assets', 'fonts', 'NotoSansKR-VF.ttf');
const OUT_OG = path.join(ROOT, 'public', 'og');
const OUT_ICONS = path.join(ROOT, 'public', 'icons');
const OUT_PUBLIC = path.join(ROOT, 'public');
fs.mkdirSync(OUT_OG, { recursive: true });
fs.mkdirSync(OUT_ICONS, { recursive: true });

if (!fs.existsSync(FONT_PATH)) {
  console.error('❌ Font missing:', FONT_PATH);
  process.exit(1);
}

const FONT_OPTS = {
  font: {
    fontFiles: [FONT_PATH],
    loadSystemFonts: false,
    defaultFontFamily: 'Noto Sans KR',
  },
};

function svgToPng(svg, outPath, width) {
  const opts = { ...FONT_OPTS };
  if (width) opts.fitTo = { mode: 'width', value: width };
  const r = new Resvg(svg, opts);
  const png = r.render().asPng();
  fs.writeFileSync(outPath, png);
  console.log('✅', path.relative(ROOT, outPath));
}

// 1:1 Search thumbnail 1080x1080 — 대전원나이트 막내 풀버전 (이모지 없는 깔끔한 디자인)
const ogThumbSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1080" viewBox="0 0 1080 1080">
<defs>
<linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
<stop offset="0%" stop-color="#FF1744"/>
<stop offset="50%" stop-color="#FF6B35"/>
<stop offset="100%" stop-color="#FFD700"/>
</linearGradient>
<linearGradient id="dark" x1="0%" y1="0%" x2="100%" y2="100%">
<stop offset="0%" stop-color="#000000"/>
<stop offset="100%" stop-color="#1a1a1a"/>
</linearGradient>
</defs>
<rect width="1080" height="1080" fill="url(#bg)"/>

<rect x="0" y="0" width="1080" height="230" fill="url(#dark)"/>
<text x="540" y="115" font-family="Noto Sans KR" font-size="86" font-weight="900" fill="#FFD700" text-anchor="middle">대전원나이트 막내</text>
<text x="540" y="180" font-family="Noto Sans KR" font-size="34" font-weight="700" fill="#FFFFFF" text-anchor="middle">대전나이트 · 대전 나이트클럽</text>

<rect x="50" y="250" width="980" height="110" rx="22" fill="rgba(0,0,0,0.88)"/>
<text x="540" y="302" font-family="Noto Sans KR" font-size="46" font-weight="900" fill="#FFD700" text-anchor="middle">38세 이상 손님 입장</text>
<text x="540" y="343" font-family="Noto Sans KR" font-size="28" font-weight="700" fill="#FFFFFF" text-anchor="middle">막내 웨이터가 직접 응대 · 신분증 필수</text>

<rect x="30" y="380" width="1020" height="340" rx="26" fill="#FFFFFF"/>
<text x="540" y="438" font-family="Noto Sans KR" font-size="46" font-weight="900" fill="#FF1744" text-anchor="middle">10시 이전 입장 여성 손님</text>
<text x="540" y="498" font-family="Noto Sans KR" font-size="54" font-weight="900" fill="#000000" text-anchor="middle">2가지 모두 보장</text>
<rect x="70" y="525" width="940" height="80" rx="16" fill="#FFE082"/>
<text x="540" y="582" font-family="Noto Sans KR" font-size="40" font-weight="900" fill="#000000" text-anchor="middle">① 차비 3만원 지급</text>
<rect x="70" y="620" width="940" height="80" rx="16" fill="#FFD54F"/>
<text x="540" y="677" font-family="Noto Sans KR" font-size="40" font-weight="900" fill="#000000" text-anchor="middle">② 맥주 기본 서비스</text>

<rect x="50" y="740" width="980" height="100" rx="20" fill="rgba(0,0,0,0.85)"/>
<text x="540" y="788" font-family="Noto Sans KR" font-size="34" font-weight="900" fill="#FFD700" text-anchor="middle">대전 시내 · 청주 · 세종 30분 거리</text>
<text x="540" y="824" font-family="Noto Sans KR" font-size="22" font-weight="600" fill="#FFFFFF" text-anchor="middle">매일 20:00 ~ 05:00 영업</text>

<rect x="30" y="860" width="1020" height="100" rx="22" fill="#000000"/>
<text x="540" y="910" font-family="Noto Sans KR" font-size="46" font-weight="900" fill="#FFFFFF" text-anchor="middle">막내 직통 010-8677-1258</text>
<text x="540" y="947" font-family="Noto Sans KR" font-size="22" font-weight="600" fill="#FFD700" text-anchor="middle">예약 · VIP · 단체 · 길안내 한 통이면 끝</text>

<text x="540" y="1015" font-family="Noto Sans KR" font-size="26" font-weight="700" fill="#1a1a1a" text-anchor="middle">one-5ei.pages.dev</text>
<text x="540" y="1052" font-family="Noto Sans KR" font-size="22" font-weight="600" fill="#2a1a00" text-anchor="middle">대전원나이트 막내 · 38세+ 안전 운영</text>
</svg>`;

svgToPng(ogThumbSvg, path.join(OUT_OG, 'og-search-thumb.png'));

// PWA Icon master SVG (512x512)
const iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
<defs><linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#FF1744"/><stop offset="100%" stop-color="#FFD700"/></linearGradient></defs>
<rect width="512" height="512" fill="url(#bg)" rx="80"/>
<text x="256" y="180" font-family="Noto Sans KR" font-size="100" font-weight="900" fill="#000000" text-anchor="middle">막내</text>
<text x="256" y="290" font-family="Noto Sans KR" font-size="80" font-weight="900" fill="#FFFFFF" text-anchor="middle">38+</text>
<text x="256" y="400" font-family="Noto Sans KR" font-size="42" font-weight="700" fill="#000000" text-anchor="middle">대전원나이트</text>
</svg>`;

svgToPng(iconSvg, path.join(OUT_ICONS, 'icon-512.png'), 512);
svgToPng(iconSvg, path.join(OUT_ICONS, 'icon-192.png'), 192);
svgToPng(iconSvg, path.join(OUT_ICONS, 'apple-touch-icon.png'), 180);
svgToPng(iconSvg, path.join(OUT_PUBLIC, 'favicon-32x32.png'), 32);
svgToPng(iconSvg, path.join(OUT_PUBLIC, 'favicon-16x16.png'), 16);

// Page-level OG images (1200x630)
const pages = [
  { name: 'home',        title: '대전원나이트 막내',        sub: '38세 이상 + 여성 손님 2가지 혜택',     bg1: '#FF1744', bg2: '#FFD700' },
  { name: 'event',       title: '10시 이전 여성 혜택',      sub: '차비 3만원 + 맥주 기본 서비스',         bg1: '#E91E63', bg2: '#FFD700' },
  { name: 'story',       title: '막내 이야기',              sub: '대전 나이트라이프 기준점',              bg1: '#9C27B0', bg2: '#FF6B35' },
  { name: 'atmosphere',  title: '대전원나이트 분위기',      sub: '38세 이상 안전한 공간',                 bg1: '#3F51B5', bg2: '#FFD700' },
  { name: 'first-visit', title: '첫 방문 가이드',           sub: '38세 이상 처음 가는 사람을 위해',       bg1: '#673AB7', bg2: '#FF6B35' },
  { name: 'access',      title: '오시는 길',                sub: '대전 시내 + 청주 세종 30분',            bg1: '#009688', bg2: '#FFD700' },
  { name: 'faq',         title: '자주 묻는 질문',           sub: '12가지 답변 한 번에',                   bg1: '#FF9800', bg2: '#FFD700' },
  { name: 'review',      title: '후기',                     sub: '직접 가본 사람들 이야기',               bg1: '#4CAF50', bg2: '#FFD700' },
  { name: 'contact',     title: '예약 문의',                sub: '막내 010-8677-1258 직통',               bg1: '#000000', bg2: '#FF1744' },
];

pages.forEach((p) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<defs><linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="${p.bg1}"/><stop offset="100%" stop-color="${p.bg2}"/></linearGradient></defs>
<rect width="1200" height="630" fill="url(#bg)"/>
<rect x="40" y="40" width="1120" height="550" rx="24" fill="rgba(0,0,0,0.78)"/>
<text x="600" y="220" font-family="Noto Sans KR" font-size="84" font-weight="900" fill="#FFD700" text-anchor="middle">${p.title}</text>
<text x="600" y="320" font-family="Noto Sans KR" font-size="44" font-weight="700" fill="#FFFFFF" text-anchor="middle">${p.sub}</text>
<rect x="300" y="420" width="600" height="100" rx="20" fill="#FFD700"/>
<text x="600" y="485" font-family="Noto Sans KR" font-size="40" font-weight="900" fill="#000000" text-anchor="middle">막내 010-8677-1258</text>
</svg>`;
  svgToPng(svg, path.join(OUT_OG, `${p.name}.png`));
});

console.log('\n🎉 Done.');

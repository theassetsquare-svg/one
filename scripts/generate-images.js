/* eslint-disable @typescript-eslint/no-var-requires */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const OUT_OG = path.join(__dirname, '..', 'public', 'og');
const OUT_ICONS = path.join(__dirname, '..', 'public', 'icons');
const OUT_PUBLIC = path.join(__dirname, '..', 'public');
fs.mkdirSync(OUT_OG, { recursive: true });
fs.mkdirSync(OUT_ICONS, { recursive: true });

const tasks = [];

// 1:1 Search thumbnail 1080x1080
const ogThumbSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1080" viewBox="0 0 1080 1080">
<defs>
<linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
<stop offset="0%" style="stop-color:#FF1744"/>
<stop offset="50%" style="stop-color:#FF6B35"/>
<stop offset="100%" style="stop-color:#FFD700"/>
</linearGradient>
<linearGradient id="dark" x1="0%" y1="0%" x2="100%" y2="100%">
<stop offset="0%" style="stop-color:#000000"/>
<stop offset="100%" style="stop-color:#1a1a1a"/>
</linearGradient>
<filter id="shadow"><feDropShadow dx="0" dy="6" stdDeviation="10" flood-opacity="0.5"/></filter>
</defs>
<rect width="1080" height="1080" fill="url(#bg)"/>
<rect x="0" y="0" width="1080" height="260" fill="url(#dark)"/>
<text x="540" y="130" font-family="sans-serif" font-size="80" font-weight="900" fill="#FFD700" text-anchor="middle" filter="url(#shadow)">대전원나이트</text>
<text x="540" y="220" font-family="sans-serif" font-size="64" font-weight="900" fill="#FFFFFF" text-anchor="middle">막내</text>
<rect x="60" y="300" width="960" height="140" rx="24" fill="rgba(0,0,0,0.9)" filter="url(#shadow)"/>
<text x="540" y="360" font-family="sans-serif" font-size="50" font-weight="900" fill="#FFD700" text-anchor="middle">🎯 38세 이상 입장 가능</text>
<text x="540" y="415" font-family="sans-serif" font-size="32" font-weight="700" fill="#FFFFFF" text-anchor="middle">신분증 필수</text>
<rect x="40" y="475" width="1000" height="460" rx="28" fill="#FFFFFF" filter="url(#shadow)"/>
<text x="540" y="555" font-family="sans-serif" font-size="56" font-weight="900" fill="#FF1744" text-anchor="middle">💎 10시 이전 여성 손님</text>
<text x="540" y="625" font-family="sans-serif" font-size="64" font-weight="900" fill="#000000" text-anchor="middle">2가지 모두 받습니다!</text>
<rect x="80" y="665" width="920" height="110" rx="18" fill="#FFE082"/>
<text x="540" y="735" font-family="sans-serif" font-size="52" font-weight="900" fill="#000000" text-anchor="middle">💵 ① 차비 3만원 지급</text>
<rect x="80" y="795" width="920" height="110" rx="18" fill="#FFD54F"/>
<text x="540" y="865" font-family="sans-serif" font-size="52" font-weight="900" fill="#000000" text-anchor="middle">🍺 ② 맥주 기본 서비스</text>
<rect x="40" y="970" width="1000" height="100" rx="20" fill="#000000" filter="url(#shadow)"/>
<text x="540" y="1035" font-family="sans-serif" font-size="48" font-weight="900" fill="#FFFFFF" text-anchor="middle">📞 막내 010-8677-1258</text>
</svg>`;

tasks.push(
  sharp(Buffer.from(ogThumbSvg))
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(path.join(OUT_OG, 'og-search-thumb.png'))
    .then(() => console.log('✅ og-search-thumb.png (1080x1080)'))
);

// PWA Icon master SVG
const iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
<defs><linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#FF1744"/><stop offset="100%" style="stop-color:#FFD700"/></linearGradient></defs>
<rect width="512" height="512" fill="url(#bg)" rx="80"/>
<text x="256" y="180" font-family="sans-serif" font-size="100" font-weight="900" fill="#000000" text-anchor="middle">막내</text>
<text x="256" y="290" font-family="sans-serif" font-size="80" font-weight="900" fill="#FFFFFF" text-anchor="middle">38+</text>
<text x="256" y="400" font-family="sans-serif" font-size="42" font-weight="700" fill="#000000" text-anchor="middle">대전원나이트</text>
</svg>`;

[192, 512].forEach((size) => {
  tasks.push(
    sharp(Buffer.from(iconSvg))
      .resize(size, size)
      .png()
      .toFile(path.join(OUT_ICONS, `icon-${size}.png`))
      .then(() => console.log(`✅ icon-${size}.png`))
  );
});

tasks.push(
  sharp(Buffer.from(iconSvg))
    .resize(180, 180)
    .png()
    .toFile(path.join(OUT_ICONS, 'apple-touch-icon.png'))
    .then(() => console.log('✅ apple-touch-icon.png'))
);

tasks.push(
  sharp(Buffer.from(iconSvg))
    .resize(32, 32)
    .png()
    .toFile(path.join(OUT_PUBLIC, 'favicon-32x32.png'))
    .then(() => console.log('✅ favicon-32x32.png'))
);

tasks.push(
  sharp(Buffer.from(iconSvg))
    .resize(16, 16)
    .png()
    .toFile(path.join(OUT_PUBLIC, 'favicon-16x16.png'))
    .then(() => console.log('✅ favicon-16x16.png'))
);

// Page-level OG images (1200x630)
const pages = [
  { name: 'home',        title: '대전원나이트 막내',        sub: '38세 이상 + 여성 손님 2가지 혜택',     bg1: '#FF1744', bg2: '#FFD700' },
  { name: 'event',       title: '10시 이전 여성 혜택',      sub: '차비 3만원 + 맥주 기본 서비스',         bg1: '#E91E63', bg2: '#FFD700' },
  { name: 'story',       title: '막내 이야기',              sub: '대전 나이트라이프 기준점',              bg1: '#9C27B0', bg2: '#FF6B35' },
  { name: 'atmosphere',  title: '대전원나이트 분위기',      sub: '38세 이상 안전한 공간',                 bg1: '#3F51B5', bg2: '#FFD700' },
  { name: 'first-visit', title: '첫 방문 가이드',           sub: '38세 이상 처음 가는 사람을 위해',       bg1: '#673AB7', bg2: '#FF6B35' },
  { name: 'access',      title: '오시는 길',                sub: '대전 시내 + 청주 세종 30분',            bg1: '#009688', bg2: '#FFD700' },
  { name: 'faq',         title: '자주 묻는 질문',           sub: '13가지 답변 한 번에',                   bg1: '#FF9800', bg2: '#FFD700' },
  { name: 'review',      title: '후기',                     sub: '직접 가본 사람들 이야기',               bg1: '#4CAF50', bg2: '#FFD700' },
  { name: 'contact',     title: '예약 문의',                sub: '막내 010-8677-1258 직통',               bg1: '#000000', bg2: '#FF1744' },
];

pages.forEach((p) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<defs><linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:${p.bg1}"/><stop offset="100%" style="stop-color:${p.bg2}"/></linearGradient><filter id="s"><feDropShadow dx="0" dy="4" stdDeviation="8" flood-opacity="0.4"/></filter></defs>
<rect width="1200" height="630" fill="url(#bg)"/>
<rect x="40" y="40" width="1120" height="550" rx="24" fill="rgba(0,0,0,0.78)" filter="url(#s)"/>
<text x="600" y="220" font-family="sans-serif" font-size="84" font-weight="900" fill="#FFD700" text-anchor="middle">${p.title}</text>
<text x="600" y="320" font-family="sans-serif" font-size="44" font-weight="700" fill="#FFFFFF" text-anchor="middle">${p.sub}</text>
<rect x="300" y="420" width="600" height="100" rx="20" fill="#FFD700"/>
<text x="600" y="485" font-family="sans-serif" font-size="40" font-weight="900" fill="#000000" text-anchor="middle">📞 막내 010-8677-1258</text>
</svg>`;
  tasks.push(
    sharp(Buffer.from(svg))
      .png({ quality: 100 })
      .toFile(path.join(OUT_OG, `${p.name}.png`))
      .then(() => console.log(`✅ og/${p.name}.png`))
  );
});

Promise.all(tasks)
  .then(() => console.log(`\n🎉 Done. ${tasks.length} images.`))
  .catch((err) => {
    console.error('❌', err);
    process.exit(1);
  });

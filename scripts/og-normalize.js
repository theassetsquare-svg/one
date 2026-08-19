/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * public/og/*.png 정규화 — 네이버 썸네일 노출 조건을 파일 쪽에서 보장합니다.
 *
 *   ① 1200x1200 정사각 (아니면 리사이즈)
 *   ② 300KB 이하 (초과분만 재압축 — 글자 선명도를 위해 리사이즈가 아니라 팔레트 양자화로 줄입니다)
 *
 * 내용(그림 자체)은 건드리지 않습니다. 생성 규칙은 각 generate-*-og.js 가 그대로 갖고 있습니다.
 * 실행: node scripts/og-normalize.js   (npm run build 의 prebuild 에서 자동 실행)
 */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const OG = path.join(__dirname, '..', 'public', 'og');
const LIMIT = 300 * 1024;
const SIZE = 1200;

(async () => {
  const files = fs.readdirSync(OG).filter((f) => f.endsWith('.png')).sort();
  let resized = 0;
  let squeezed = 0;
  const report = [];

  for (const f of files) {
    const p = path.join(OG, f);
    let meta = await sharp(p).metadata();

    // ① 정사각 1200 보장
    if (meta.width !== SIZE || meta.height !== SIZE) {
      const buf = await sharp(p)
        .resize(SIZE, SIZE, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 1 } })
        .png({ compressionLevel: 9 })
        .toBuffer();
      fs.writeFileSync(p, buf);
      resized++;
      meta = await sharp(p).metadata();
    }

    // ② 300KB 이하 보장 — 색 수를 낮춰 가며 최소 손실로 맞춥니다.
    let bytes = fs.statSync(p).size;
    if (bytes > LIMIT) {
      for (const colors of [256, 192, 128, 96, 64, 48, 32]) {
        const buf = await sharp(p).png({ palette: true, colors, compressionLevel: 9, effort: 10 }).toBuffer();
        if (buf.length <= LIMIT) {
          fs.writeFileSync(p, buf);
          bytes = buf.length;
          squeezed++;
          break;
        }
        if (colors === 32) {
          fs.writeFileSync(p, buf);
          bytes = buf.length;
          squeezed++;
        }
      }
    }

    report.push({ file: f, size: `${meta.width}x${meta.height}`, kb: Math.round(bytes / 1024) });
  }

  const bad = report.filter((r) => r.size !== `${SIZE}x${SIZE}` || r.kb > 300);
  console.log(`og-normalize: ${report.length}장 — 리사이즈 ${resized}, 재압축 ${squeezed}`);
  console.log(`최대 용량 ${Math.max(...report.map((r) => r.kb))}KB / 규격 위반 ${bad.length}장`);
  if (bad.length) {
    console.error(bad.map((b) => `${b.file} ${b.size} ${b.kb}KB`).join('\n'));
    process.exit(1);
  }
})();

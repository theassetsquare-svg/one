/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * next build(export) 산출물을 /pick/{slug}/index.html 형태로 정리합니다.
 *
 *   out/pick.html          → out/pick/index.html
 *   out/pick/{slug}.html   → out/pick/{slug}/index.html
 *
 * 기존 /night/*.html, 대전원나이트 페이지들은 손대지 않습니다.
 * 같은 문서가 두 경로로 열리지 않도록 평평한 .html 원본은 지웁니다.
 */
const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, '..', 'out');
const PICK = path.join(OUT, 'pick');

if (!fs.existsSync(PICK)) {
  console.error('out/pick 이 없습니다. next build 를 먼저 실행하세요.');
  process.exit(1);
}

const moved = [];

// 1) 허브
const hubFlat = path.join(OUT, 'pick.html');
if (fs.existsSync(hubFlat)) {
  fs.renameSync(hubFlat, path.join(PICK, 'index.html'));
  moved.push('/pick/');
}

// 2) 업소 페이지
for (const f of fs.readdirSync(PICK)) {
  if (!f.endsWith('.html') || f === 'index.html') continue;
  const slug = f.replace(/\.html$/, '');
  const dir = path.join(PICK, slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.renameSync(path.join(PICK, f), path.join(dir, 'index.html'));
  moved.push(`/pick/${slug}/`);
}

// 3) ★ 숫자 주소 페이지 — out/1.html → out/1/index.html
//    2026-08-23 대표님 확정: 미색인 업소는 도메인 바로 뒤 숫자 하나로 옮긴다.
for (const f of fs.readdirSync(OUT)) {
  if (!/^\d+\.html$/.test(f)) continue;
  const num = f.replace(/\.html$/, '');
  const dir = path.join(OUT, num);
  fs.mkdirSync(dir, { recursive: true });
  fs.renameSync(path.join(OUT, f), path.join(dir, 'index.html'));
  moved.push(`/${num}/`);
}

console.log(`pick-dirify: ${moved.length}개 경로 정리 완료`);

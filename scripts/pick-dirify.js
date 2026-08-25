/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * next build(export) 산출물을 폴더 형태로 정리합니다.
 *
 *   out/pick.html            → out/pick/index.html          (허브)
 *   out/<가게이름>.html      → out/<가게이름>/index.html    (가게 페이지)
 *
 * ★ 2026-08-26 대표님 확정: 가게 페이지 주소는 메인주소 바로 뒤에 가게이름이다.
 *   중간에 /pick/ 같은 단어를 넣지 않는다. 옛 /pick/<슬러그> 는 더는 만들지 않는다.
 *
 * 같은 문서가 두 경로로 열리지 않도록 평평한 .html 원본은 옮기면서 없어집니다.
 */
const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, '..', 'out');
const PICK = path.join(OUT, 'pick');
const { VENUES } = (() => {
  // lib/pick.ts 에서 슬러그만 읽어 온다(빌드 산출물에 의존하지 않는다)
  const src = fs.readFileSync(path.join(__dirname, '..', 'lib', 'pick.ts'), 'utf8');
  const slugs = [...new Set([...src.matchAll(/slug:\s*'([^']+)'/g)].map((m) => m[1]))];
  return { VENUES: slugs };
})();

if (!fs.existsSync(OUT)) {
  console.error('out 이 없습니다. next build 를 먼저 실행하세요.');
  process.exit(1);
}

const moved = [];

// 1) 허브 /pick/
const hubFlat = path.join(OUT, 'pick.html');
if (fs.existsSync(hubFlat)) {
  fs.mkdirSync(PICK, { recursive: true });
  fs.renameSync(hubFlat, path.join(PICK, 'index.html'));
  moved.push('/pick/');
}

// 2) ★ 가게 페이지 — out/<가게이름>.html → out/<가게이름>/index.html
for (const slug of VENUES) {
  const flat = path.join(OUT, slug + '.html');
  if (!fs.existsSync(flat)) continue;
  const dir = path.join(OUT, slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.renameSync(flat, path.join(dir, 'index.html'));
  moved.push('/' + slug + '/');
}

console.log('pick-dirify: ' + moved.length + '개 경로 정리 완료');

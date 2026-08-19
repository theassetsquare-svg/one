/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * sitemap.xml 의 <image:image> 블록을 각 페이지의 실제 썸네일로 맞춥니다.
 * (네이버·구글에 "이 URL의 대표 이미지는 이것"이라고 한 번 더 알려 주는 채널)
 *
 * 입력: .thumb-report.json (scripts/thumb-gates.js 가 생성 — 페이지↔og 매칭 실측표)
 * 실행: node scripts/thumb-gates.js && node scripts/sitemap-images.js
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SITE = 'https://oned-a0q.pages.dev';
const rows = JSON.parse(fs.readFileSync(path.join(ROOT, '.thumb-report.json'), 'utf8'));

const toUrl = (rel) => {
  let r = rel.replace(/\\/g, '/');
  if (r === 'index.html') return '/';
  if (r.endsWith('/index.html')) return '/' + r.replace(/\/index\.html$/, '');
  return '/' + r.replace(/\.html$/, '');
};

const map = new Map();
for (const r of rows) map.set(SITE + toUrl(r.rel), { img: SITE + r.og, alt: r.alt });

const p = path.join(ROOT, 'public', 'sitemap.xml');
let xml = fs.readFileSync(p, 'utf8');
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

let touched = 0;
let missing = [];
xml = xml.replace(/<url>([\s\S]*?)<\/url>/g, (whole, inner) => {
  const loc = (inner.match(/<loc>([^<]+)<\/loc>/) || [])[1];
  const hit = map.get(loc);
  if (!hit) {
    missing.push(loc);
    return whole;
  }
  const stripped = inner.replace(/<image:image>[\s\S]*?<\/image:image>/g, '');
  const block = `<image:image><image:loc>${hit.img}</image:loc><image:caption>${esc(hit.alt)}</image:caption></image:image>`;
  touched++;
  return `<url>${stripped}${block}</url>`;
});

fs.writeFileSync(p, xml);
console.log(`sitemap-images: ${touched}개 URL 에 썸네일 연결 · 매칭 실패 ${missing.length}${missing.length ? ' — ' + missing.join(', ') : ''}`);

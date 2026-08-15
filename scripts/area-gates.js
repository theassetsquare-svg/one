/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * 2차 지역 페이지 게이트 검사기 (정적 산출물 out/ 기준).
 * 실행: node scripts/area-gates.js
 */
const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, '..', 'out');
const AREAS = [
  ['eunpyeong-night', '은평나이트', '은평 나이트', '은평 나이트클럽', 'bulgwang-hobak-night', 11, 'A'],
  ['changwon-night', '창원나이트', '창원 나이트', '창원 나이트클럽', 'changwon-lululala-night', 12, 'A'],
  ['ulsan-night', '울산나이트', '울산 나이트', '울산 나이트클럽', 'ulsan-champion-night', 13, 'A'],
  ['gangnam-night', '강남나이트', '강남 나이트', '강남 나이트클럽', 'cheongdam-night', 1, 'A'],
  ['daejeon-night', '대전나이트', '대전 나이트', '대전 나이트클럽', 'daejeon-one-night', 2, 'B'],
  ['sillim-night', '신림나이트', '신림 나이트', '신림 나이트클럽', 'sillim-grandprix-night', 3, 'B'],
  ['sangbong-night', '상봉동나이트', '상봉동 나이트', '상봉동 나이트클럽', 'sangbong-hangukgwan-night', 4, 'B'],
  ['suyu-night', '수유나이트', '수유 나이트', '수유 나이트클럽', 'suyu-shampoo-night', 5, 'B'],
  ['busan-night', '부산나이트', '부산 나이트', '부산 나이트클럽', 'busan-asiad-night', 6, 'B'],
  ['suwon-night', '수원나이트', '수원 나이트', '수원 나이트클럽', 'suwon-chance-dome-night', 7, 'B'],
  ['ansan-night', '안산나이트', '안산 나이트', '안산 나이트클럽', 'ansan-hit-night', 8, 'B'],
  ['yucheon-night', '유천동나이트', '유천동 나이트', '유천동 나이트클럽', 'daejeon-seven-night', 9, 'B'],
  ['ilsan-night', '일산나이트', '일산 나이트', '일산 나이트클럽', 'ilsan-shampoo-night', 10, 'B'],
];
const OLD = [
  'bulgwang-hobak-night', 'changwon-lululala-night', 'ulsan-champion-night', 'cheongdam-night',
  'daejeon-one-night', 'sillim-grandprix-night', 'sangbong-hangukgwan-night', 'suyu-shampoo-night',
  'busan-asiad-night', 'suwon-chance-dome-night', 'ansan-hit-night', 'daejeon-seven-night',
  'ilsan-shampoo-night',
];

const read = (slug) => fs.readFileSync(path.join(OUT, 'night', `${slug}.html`), 'utf8');
const strip = (h) => h.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ')
  .replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&[a-z]+;/g, ' ').replace(/\s+/g, ' ').trim();
const articleOf = (h) => {
  const m = h.match(/<article[^>]*>([\s\S]*?)<\/article>/);
  return m ? m[1] : '';
};
const titleOf = (h) => (h.match(/<title[^>]*>([^<]*)<\/title>/) || [])[1] || '';
const descOf = (h) => (h.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '';
const h2sOf = (a) => [...a.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)].map((m) => strip(m[1]));
const ldOf = (h) => [...h.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((m) => m[1]);

// ── 5-gram 자카드 (어절 5-gram) ────────────────────────────────
function grams(text, n) {
  const t = text.split(/\s+/).filter(Boolean);
  const s = new Set();
  for (let i = 0; i + n <= t.length; i++) s.add(t.slice(i, i + n).join(' '));
  return s;
}
function charGrams(text, n) {
  const t = text.replace(/\s+/g, '');
  const s = new Set();
  for (let i = 0; i + n <= t.length; i++) s.add(t.slice(i, i + n));
  return s;
}
function jac(a, b) {
  let inter = 0;
  for (const g of a) if (b.has(g)) inter++;
  const uni = a.size + b.size - inter;
  return uni === 0 ? 0 : inter / uni;
}

const results = [];
const push = (id, pass, detail) => results.push({ id, pass, detail });

// 본문 수집 (기존 13 + 신규 13)
const bodies = {};
for (const s of [...OLD, ...AREAS.map((a) => a[0])]) bodies[s] = strip(articleOf(read(s)));

// ── 페이지별 검사 ───────────────────────────────────────────────
const titles = [], descs = [], firstSents = [], firstH2s = [], answer2 = [], suffixes = [];
const morph = [], titleLens = [], h2kw = [], transitCnt = [], nextCnt = [];
let g01 = 0, g03 = 0, g09fail = [], g10fail = [], g17fail = [], g25fail = [], g26fail = [], g34fail = [], g33fail = [];
const faqLens = [];

for (const [slug, A, B, C, venue] of AREAS) {
  const h = read(slug);
  const art = articleOf(h);
  const body = bodies[slug];

  // 공용 _document 가 lang="ko-KR" 을 씁니다(기존 13페이지와 공유 — 변경 시 diff 발생).
  if (/<!DOCTYPE html>/i.test(h) && /<html lang="ko(-KR)?"/.test(h)) g01++;
  const h1s = [...art.matchAll(/<h1[^>]*>/g)].length;
  const sem = ['<header', '<nav', '<main', '<article', '<section', '<aside', '<footer'].every((t) => h.includes(t));
  if (h1s === 1 && sem) g03++;

  titles.push(titleOf(h));
  titleLens.push([slug, titleOf(h).length]);
  descs.push(descOf(h));

  // 첫 문장 = lead 첫 문장
  const leadStart = body.indexOf('뜻합니다.');
  const after = body.slice(leadStart > 0 ? leadStart + 5 : 0).trim();
  const rest = after.replace(/^[^가-힣]*/, '');
  // answer-box 2번째 문장 이후가 lead. 첫 문장 추출
  const m = body.match(/뜻합니다\.\s*([^.?]*[.?])/);
  answer2.push(m ? m[1].trim() : '');
  const afterAnswer = body.slice(body.indexOf(m ? m[1] : '') + (m ? m[1].length : 0));
  const fs1 = (afterAnswer.match(/([^.?]*[.?])/) || [])[1] || '';
  firstSents.push(fs1.trim());

  const H2 = h2sOf(art);
  firstH2s.push(H2[0]);
  h2kw.push([slug, H2.filter((x) => x.includes(A)).length, H2.length]);

  // 연결 문장 수 == H2 수
  const nexts = [...art.matchAll(/class="nb-next"/g)].length;
  nextCnt.push([slug, nexts, H2.length]);
  if (nexts !== H2.length) g26fail.push(`${slug} next=${nexts} h2=${H2.length}`);

  // 형태소
  let tmp = body;
  const cntA = (tmp.match(new RegExp(A, 'g')) || []).length;
  tmp = tmp.split(A).join('§');
  const cntB = (tmp.match(new RegExp(B, 'g')) || []).length;
  const cntC = (tmp.match(new RegExp(C, 'g')) || []).length;
  morph.push([slug, cntA, cntB - cntC, cntC]);

  // 첫 100자 안에 A형 (본문 = 히어로 h1 이후)
  if (!body.slice(0, 100).includes(A)) g17fail.push(slug);

  // 교통 단어
  const tr = ['지하철', '환승', '막차', '택시'].reduce((n, w) => n + (body.match(new RegExp(w, 'g')) || []).length, 0);
  transitCnt.push([slug, tr]);

  // 금지 도입어
  const lead100 = body.slice(0, 260);
  for (const w of ['안녕하세요', '오늘은', '알아보겠습니다']) if (lead100.includes(w)) g25fail.push(`${slug}:${w}`);

  // JSON-LD
  const lds = ldOf(h);
  let types = [];
  try {
    types = lds.map((x) => JSON.parse(x)['@type']);
    const faq = JSON.parse(lds.find((x) => x.includes('FAQPage')));
    for (const q of faq.mainEntity) {
      const L = q.acceptedAnswer.text.length;
      faqLens.push([slug, L]);
      if (L < 40 || L > 90) g09fail.push(`${slug} ${L}자: ${q.acceptedAnswer.text.slice(0, 20)}`);
    }
  } catch (e) { g09fail.push(`${slug} parse:${e.message}`); }
  if (lds.length !== 3 || !types.includes('Article') || !types.includes('FAQPage') || !types.includes('BreadcrumbList')) {
    g09fail.push(`${slug} types=${types.join(',')}`);
  }

  // 링크
  const hrefs = [...h.matchAll(/href="([^"]+)"/g)].map((x) => x[1]);
  const ext = hrefs.filter((u) => /^https?:\/\//.test(u) && !u.startsWith('https://onec-9bc.pages.dev') && !u.includes('cdn.jsdelivr.net'));
  if (ext.length) g10fail.push(`${slug}: ${ext.join(',')}`);
  if (!hrefs.some((u) => u === `/night/${venue}`)) g34fail.push(slug);

  // 연령 축약
  const bad = [/27\+/, /38\+/, /만27세/, /27세이상/, /27이상/, /38세이상/, /38이상/, /(^|[^ ])27세/, /(^|[^ ])38세/];
  const full = h.replace(/만 27세 이상/g, '').replace(/만 38세 이상/g, '');
  for (const re of bad) if (re.test(full)) g33fail.push(`${slug}:${re}`);
}

// ── 종합 게이트 ────────────────────────────────────────────────
push('G01 DOCTYPE·lang 13/13', g01 === 13, `${g01}/13`);
const dupT = new Set(titles).size, dupD = new Set(descs).size;
let maxTitleSim = 0;
for (let i = 0; i < titles.length; i++) for (let j = i + 1; j < titles.length; j++) {
  maxTitleSim = Math.max(maxTitleSim, jac(charGrams(titles[i], 3), charGrams(titles[j], 3)));
}
push('G02 title·desc 완전중복 0 / 근사 <20%', dupT === 13 && dupD === 13 && maxTitleSim < 0.2,
  `고유 title ${dupT}/13, desc ${dupD}/13, title 최대 근사 ${(maxTitleSim * 100).toFixed(1)}%`);
push('G03 article h1 1개 + 시맨틱 7종', g03 === 13, `${g03}/13`);

// G04 325쌍
const allSlugs = [...OLD, ...AREAS.map((a) => a[0])];
const gsets = {}, csets = {};
for (const s of allSlugs) { gsets[s] = grams(bodies[s], 5); csets[s] = charGrams(bodies[s], 5); }
const pairs = [];
for (let i = 0; i < allSlugs.length; i++) for (let j = i + 1; j < allSlugs.length; j++) {
  const a = allSlugs[i], b = allSlugs[j];
  pairs.push({
    a, b,
    w: jac(gsets[a], gsets[b]),
    c: jac(csets[a], csets[b]),
    cross: (OLD.includes(a) !== OLD.includes(b)),
  });
}
pairs.sort((x, y) => y.w - x.w);
const maxW = pairs[0].w, avgW = pairs.reduce((n, p) => n + p.w, 0) / pairs.length;
const maxC = Math.max(...pairs.map((p) => p.c)), avgC = pairs.reduce((n, p) => n + p.c, 0) / pairs.length;
push('G04 26개 본문 325쌍 5-gram <15%', pairs.length === 325 && maxW < 0.15,
  `쌍 ${pairs.length} / 어절5gram 최대 ${(maxW * 100).toFixed(2)}% 평균 ${(avgW * 100).toFixed(2)}% / 음절5gram 최대 ${(maxC * 100).toFixed(2)}% 평균 ${(avgC * 100).toFixed(2)}%`);

push('G09 JSON-LD 3종 + FAQ 답변 40~90자', g09fail.length === 0, g09fail.slice(0, 6).join(' | ') || 'OK');
push('G10 외부 아웃바운드 0', g10fail.length === 0, g10fail.join(' | ') || 'OK');
push('G15 형태소 A>=10 B>=2 C>=1', morph.every((m) => m[1] >= 10 && m[2] >= 2 && m[3] >= 1),
  morph.map((m) => `${m[0]} A${m[1]}/B${m[2]}/C${m[3]}`).join(', '));
push('G16 title 0번째 글자부터 + 25~30자',
  AREAS.every((a, i) => titles[i].startsWith(a[1])) && titleLens.every((t) => t[1] >= 25 && t[1] <= 30),
  titleLens.map((t) => `${t[0]}:${t[1]}`).join(', '));
push('G17 첫 100자 안에 A형', g17fail.length === 0, g17fail.join(',') || 'OK');
push('G18 교통 단어 <=3', transitCnt.every((t) => t[1] <= 3), transitCnt.map((t) => `${t[0]}:${t[1]}`).join(', '));
push('G19 H2 중 키워드 포함 >=4', h2kw.every((x) => x[1] >= 4), h2kw.map((x) => `${x[0]} ${x[1]}/${x[2]}`).join(', '));
const angles = AREAS.map((a) => a[5]);
const oldAngles = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3];
push('G23 각도 13개 상이 + 1차와 전부 상이',
  new Set(angles).size === 13 && AREAS.every((a, i) => a[5] !== oldAngles[i]),
  angles.join(','));
push('G24 slug 충돌 0 / "-2" 0',
  AREAS.every((a) => !OLD.includes(a[0])) && AREAS.every((a) => !/-2$/.test(a[0])),
  '충돌 0건');
push('G25 도입 금지어 0', g25fail.length === 0, g25fail.join(',') || 'OK');
push('G26 섹션 연결 문장 = H2 수', g26fail.length === 0, g26fail.join(' | ') || nextCnt.map((n) => `${n[0]}:${n[1]}`).join(', '));

const oldTitles = OLD.map((s) => titleOf(read(s)));
const oldH2first = OLD.map((s) => h2sOf(articleOf(read(s)))[0]);
const oldFirstSent = OLD.map((s) => {
  const b = bodies[s];
  const m = b.match(/니다\.\s*([^.?]*[.?])/);
  return (m ? m[1] : b.slice(0, 40)).trim();
});
const NEWSUF = ['몇 명이 좋을까', '흔한 실수 정리', '여러 번 가보면', '한 곳으로 남은 자리', '분위기 어떨까',
  '사람이 두꺼워지는 시간', '처음이 어렵다면', '자주 가는 이유', '겉과 속이 다르다', '물음 정리', '밤의 단계',
  '개성 있는 점', '요점만'];
const OLDSUF = ['처음이면 이것부터', '찾는 이유 넷', '생각과 다른 점', '물어본 것들', '밤이 흐르는 순서', '남다른 이유',
  '요약 안내', '인원 구성 안내', '헛걸음 막는 법', '손에 익으면', '자리가 말해주는 것', '혼자 가도 될까', '문 닫기 직전 풍경'];
push('G27 접미어 26개 고유', new Set([...NEWSUF, ...OLDSUF]).size === 26,
  `${new Set([...NEWSUF, ...OLDSUF]).size}/26`);
push('G28 첫 문장 26개 고유', new Set([...firstSents, ...oldFirstSent]).size === 26,
  `${new Set([...firstSents, ...oldFirstSent]).size}/26`);
push('G29 H2 첫 항목 26개 고유', new Set([...firstH2s, ...oldH2first]).size === 26,
  `${new Set([...firstH2s, ...oldH2first]).size}/26`);
push('G30 AI 인용 2번째 문장 13개 상이', new Set(answer2).size === 13, `${new Set(answer2).size}/13`);
push('G33 연령 축약 0건', g33fail.length === 0, g33fail.join(',') || 'OK');
push('G34 배정 업소 링크 13/13', g34fail.length === 0, g34fail.join(',') || 'OK');

// A그룹 고정바 besta12 0 / B그룹 노출 / 푸터 besta12
let g06 = 0, g07 = 0, g08 = 0;
for (const [slug, , , , , , grp] of AREAS) {
  const h = read(slug);
  const bar = (h.match(/<div class="callbar"[\s\S]*?<\/div>/) || [''])[0];
  if (grp === 'A' && !bar.includes('besta12')) g06++;
  if (grp === 'B' && bar.includes('besta12')) g07++;
  if (/class="ad-inquiry"[\s\S]{0,200}besta12/.test(h)) g08++;
}
push('G06 A그룹 고정바 besta12 0회', g06 === 4, `${g06}/4`);
push('G07 B그룹 고정바 besta12 노출', g07 === 9, `${g07}/9`);
push('G08 푸터 besta12 13/13', g08 === 13, `${g08}/13`);

console.log('\n=== 게이트 결과 ===');
for (const r of results) console.log(`${r.pass ? 'PASS' : 'FAIL'} | ${r.id} | ${r.detail}`);
console.log('\n=== 유사도 상위 5쌍 (어절 5-gram) ===');
for (const p of pairs.slice(0, 5)) console.log(`${(p.w * 100).toFixed(2)}%  ${p.a} ↔ ${p.b}${p.cross ? '  [기존↔신규]' : ''}`);
const cross = pairs.filter((p) => p.cross);
console.log(`기존↔신규 169쌍: 최대 ${(Math.max(...cross.map((p) => p.w)) * 100).toFixed(2)}% / 평균 ${(cross.reduce((n, p) => n + p.w, 0) / cross.length * 100).toFixed(2)}%`);
console.log(`FAQ 답변 길이: 최소 ${Math.min(...faqLens.map((f) => f[1]))} 최대 ${Math.max(...faqLens.map((f) => f[1]))}`);
const failed = results.filter((r) => !r.pass);
console.log(`\n총 ${results.length}종 중 FAIL ${failed.length}종`);
process.exit(failed.length ? 1 : 0);

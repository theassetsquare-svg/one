/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * /pick/* 게이트 검사기 G1~G11 (정적 산출물 out/ 기준).
 * 실행: npm run build && node scripts/pick-gates.js
 *
 * 검사 대상: out/index.html(홈), out/pick/index.html(허브), out/pick/{slug}/index.html(40곳).
 * 기존 /night/*, 대전원나이트 페이지는 검사·수정 대상이 아닙니다.
 */
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'out');

// ── 데이터 로드 (lib/pick.ts 그대로) ──────────────────────────────
function loadVenues() {
  const code = `import { VENUES } from ${JSON.stringify(path.join(ROOT, 'lib', 'pick.ts'))};
console.log(JSON.stringify(VENUES.map((v) => ({
  slug: v.slug, nameA: v.nameA, nameB: v.nameB, nameC: v.nameC, alt: v.alt || [],
  title: v.title, tel: v.contact ? v.contact.display : null, nick: v.contact ? v.contact.nick : null,
  ageFull: v.ageFull || null, related: v.related, faqs: v.faqs,
}))));`;
  const tmp = path.join(ROOT, '.pick-gates-load.mjs');
  fs.writeFileSync(tmp, code);
  try {
    const out = execFileSync(process.execPath, ['--experimental-strip-types', tmp], { encoding: 'utf8' });
    return JSON.parse(out.trim().split('\n').pop());
  } finally {
    fs.unlinkSync(tmp);
  }
}

const VENUES = loadVenues();
// ★광고주 정답표 2026-08-20 — 총 4명. scripts/advertisers.js 와 같은 값입니다.
const PHONE_ALLOW = {
  '010-5653-0069': 'ulsan-champion-night',
  '010-7528-4936': 'changwon-lululala-night',
  '010-2221-1937': 'bulgwang-hobak-night',
  '010-5655-4866': 'cheongdam-night',
};
const AD_LINK = 'https://open.kakao.com/o/sBesta12';

const readPage = (rel) => fs.readFileSync(path.join(OUT, rel), 'utf8');
const venuePage = (slug) => readPage(path.join('pick', slug, 'index.html'));
const strip = (h) =>
  h
    .replace(/<script[\s\S]*?<\/script>/g, ' ')
    .replace(/<style[\s\S]*?<\/style>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&[a-z]+;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
const articleOf = (h) => (h.match(/<article[^>]*>([\s\S]*?)<\/article>/) || ['', ''])[1];
const titleOf = (h) => (h.match(/<title[^>]*>([^<]*)<\/title>/) || [])[1] || '';
const descOf = (h) => (h.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '';
const h2sOf = (s) => [...s.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)].map((m) => strip(m[1]));
const ldOf = (h) => [...h.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((m) => m[1]);
const barOf = (h) => (h.match(/<div class="pkbar"[\s\S]*?<\/div>/) || [''])[0];

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

const PAGES = [
  { key: 'home', file: 'index.html' },
  { key: 'hub', file: path.join('pick', 'index.html') },
  ...VENUES.map((v) => ({ key: v.slug, file: path.join('pick', v.slug, 'index.html'), venue: v })),
];
const HTML = {};
for (const p of PAGES) HTML[p.key] = readPage(p.file);
const BODY = {};
for (const v of VENUES) BODY[v.slug] = strip(articleOf(HTML[v.slug]));

// ── G1 문서 기본 ────────────────────────────────────────────────
let g1 = 0;
for (const p of PAGES) {
  const h = HTML[p.key];
  if (/<!DOCTYPE html>/i.test(h) && /<html lang="ko-KR"/.test(h) && /<meta name="description"/.test(h)) g1++;
}
push('G1 DOCTYPE·lang·description 42/42', g1 === PAGES.length, `${g1}/${PAGES.length}`);

// ── G2 title / description ──────────────────────────────────────
const titles = VENUES.map((v) => titleOf(HTML[v.slug]));
const descs = VENUES.map((v) => descOf(HTML[v.slug]));
let maxSim = 0;
for (let i = 0; i < titles.length; i++)
  for (let j = i + 1; j < titles.length; j++)
    maxSim = Math.max(maxSim, jac(charGrams(titles[i], 3), charGrams(titles[j], 3)));
const lenBad = VENUES.filter((v, i) => titles[i].length < 20 || titles[i].length > 30).map((v, i) => v.slug);
const headBad = VENUES.filter((v, i) => !titles[i].startsWith(v.nameA)).map((v) => v.slug);
push(
  'G2 title 40개 고유·20~30자·가게이름 맨 앞 / desc 고유 / 근사 <20%',
  new Set(titles).size === 40 && new Set(descs).size === 40 && maxSim < 0.2 && !lenBad.length && !headBad.length,
  `고유 title ${new Set(titles).size}/40, desc ${new Set(descs).size}/40, 최대 근사 ${(maxSim * 100).toFixed(1)}%, 길이 위반 ${lenBad.length}, 선두 위반 ${headBad.length}`
);

// ── G3 시맨틱 구조 ──────────────────────────────────────────────
let g3 = 0;
const SEM = ['<header', '<nav', '<main', '<article', '<section', '<aside', '<footer'];
const g3fail = [];
// 홈은 헤더·푸터·고정바 없는 단독 글 페이지입니다(의도된 설계). 크롬 기반 게이트에서 제외합니다.
const CHROME_PAGES = PAGES.filter((x) => x.key !== 'home');
for (const p of CHROME_PAGES) {
  const h = HTML[p.key];
  const h1 = [...h.matchAll(/<h1[^>]*>/g)].length;
  const ok = h1 === 1 && SEM.every((t) => h.includes(t));
  if (ok) g3++;
  else g3fail.push(`${p.key}(h1=${h1})`);
}
push(
  'G3 h1 1개 + 시맨틱 7종 41/41 (홈 제외 — 홈은 단독 글 페이지)',
  g3 === CHROME_PAGES.length && /<h1/.test(HTML.home),
  g3fail.join(',') || `${g3}/${CHROME_PAGES.length} + 홈 h1 ${/<h1/.test(HTML.home) ? 'OK' : '없음'}`
);

// ── G4 본문 유사도 (40개 = 780쌍) ───────────────────────────────
const slugs = VENUES.map((v) => v.slug);
const gs = {}, cs = {};
for (const s of slugs) {
  gs[s] = grams(BODY[s], 5);
  cs[s] = charGrams(BODY[s], 5);
}
const pairs = [];
for (let i = 0; i < slugs.length; i++)
  for (let j = i + 1; j < slugs.length; j++)
    pairs.push({ a: slugs[i], b: slugs[j], w: jac(gs[slugs[i]], gs[slugs[j]]), c: jac(cs[slugs[i]], cs[slugs[j]]) });
pairs.sort((x, y) => y.w - x.w);
const maxW = pairs[0].w;
const avgW = pairs.reduce((n, p) => n + p.w, 0) / pairs.length;
push(
  'G4 40개 본문 780쌍 어절 5-gram <15%',
  pairs.length === 780 && maxW < 0.15,
  `쌍 ${pairs.length} / 최대 ${(maxW * 100).toFixed(2)}% 평균 ${(avgW * 100).toFixed(2)}% / 음절5gram 최대 ${(Math.max(...pairs.map((p) => p.c)) * 100).toFixed(2)}%`
);

// ── G5 페이지 구조 ──────────────────────────────────────────────
const g5fail = [];
for (const v of VENUES) {
  const h = HTML[v.slug];
  const art = articleOf(h);
  const H2 = h2sOf(art);
  const q = H2.filter((x) => x.includes('?')).length;
  const secs = [...art.matchAll(/class="pk-sec"/g)].length; // 기준 소제목 + FAQ
  const checks = [...art.matchAll(/class="pk-check"/g)].length;
  const checkItems = [...art.matchAll(/<li>/g)].length;
  const facts = ['주소', '가장 가까운 역', '지역', '층·구조', '출입 연령'].filter((l) => art.includes(`>${l}<`)).length;
  const probs = [];
  if (!/class="pk-answer"/.test(art)) probs.push('no-answer3');
  if ((art.match(/<li>/g) || []).length < 3) probs.push('no-list');
  if (!/class="pk-tbl"/.test(art)) probs.push('no-table');
  if (facts < 3) probs.push(`facts=${facts}`);
  if (q < 2) probs.push(`questionH2=${q}`);
  if (checks < 1) probs.push('no-checklist');
  const critSecs = secs - 1; // FAQ 섹션 제외
  if (critSecs < 4 || critSecs > 6) probs.push(`criteriaSections=${critSecs}`);
  if (!/class="pk-verdict"/.test(art)) probs.push('no-verdict');
  if (!/class="pk-oneline"/.test(art)) probs.push('no-oneline');
  if ((art.match(/class="pk-faq"/g) || []).length !== 3) probs.push('faq!=3');
  if (checkItems < 3) probs.push('check<3');
  if (probs.length) g5fail.push(`${v.slug}:${probs.join('/')}`);
}
push('G5 구조 7종(3줄답·표·기준 4~6·질문형 H2 2+·체크리스트·제목의 답·FAQ3·한줄)', g5fail.length === 0, g5fail.slice(0, 5).join(' | ') || 'OK');

// ── G6 JSON-LD + FAQ 답변 길이 ──────────────────────────────────
const g6fail = [];
const faqLens = [];
for (const v of VENUES) {
  const lds = ldOf(HTML[v.slug]);
  let types = [];
  try {
    types = lds.map((x) => JSON.parse(x)['@type']);
    const faq = JSON.parse(lds.find((x) => x.includes('FAQPage')));
    if (faq.mainEntity.length !== 3) g6fail.push(`${v.slug} faq=${faq.mainEntity.length}`);
    for (const q of faq.mainEntity) {
      const L = q.acceptedAnswer.text.length;
      faqLens.push(L);
      if (L < 40 || L > 90) g6fail.push(`${v.slug} ${L}자`);
    }
    const club = JSON.parse(lds.find((x) => x.includes('NightClub')));
    if (club.telephone && !v.tel) g6fail.push(`${v.slug} 없는 전화번호 구조화`);
    if (club.typicalAgeRange && club.typicalAgeRange !== v.ageFull) g6fail.push(`${v.slug} age`);
  } catch (e) {
    g6fail.push(`${v.slug} parse:${e.message}`);
  }
  if (lds.length !== 3 || !['NightClub', 'FAQPage', 'BreadcrumbList'].every((t) => types.includes(t)))
    g6fail.push(`${v.slug} types=${types.join(',')}`);
}
push('G6 JSON-LD 3종 + FAQ 3개·답변 40~90자', g6fail.length === 0, g6fail.slice(0, 5).join(' | ') || `길이 ${Math.min(...faqLens)}~${Math.max(...faqLens)}자`);

// ── G7 내부 링크 ────────────────────────────────────────────────
const g7fail = [];
for (const v of VENUES) {
  const hrefs = [...HTML[v.slug].matchAll(/href="([^"]+)"/g)].map((x) => x[1]);
  if (!hrefs.includes('/pick')) g7fail.push(`${v.slug} no-hub`);
  // 홈 단독화(H3): 홈 링크는 전 페이지에서 제거합니다. 남아 있으면 위반입니다.
  if (hrefs.includes('/')) g7fail.push(`${v.slug} home-link-남음`);
  const rel = v.related.filter((r) => hrefs.includes(`/pick/${r}`));
  if (rel.length !== v.related.length) g7fail.push(`${v.slug} related ${rel.length}/${v.related.length}`);
}
const hubHrefs = [...HTML.hub.matchAll(/href="([^"]+)"/g)].map((x) => x[1]);
const hubMissing = VENUES.filter((v) => !hubHrefs.includes(`/pick/${v.slug}`)).map((v) => v.slug);
const arabia = HTML['incheon-arabian-night'].includes('인천아라비아나이트');
const arabiaOwnPage = fs.existsSync(path.join(OUT, 'pick', 'incheon-arabia-night'));
push(
  'G7 내부링크 — 허브 40/40 · 각 페이지 관련+허브 · 홈 링크 0 · 인천아라비아 표기 한 페이지',
  g7fail.length === 0 && hubMissing.length === 0 && arabia && !arabiaOwnPage,
  `허브 누락 ${hubMissing.length}, 페이지 위반 ${g7fail.length}${g7fail.length ? ' — ' + g7fail.slice(0, 3).join(',') : ''}, 인천아라비아 표기 ${arabia ? '있음' : '없음'}, 별도 페이지 ${arabiaOwnPage ? '있음(위반)' : '없음'}`
);

// ── G8 외부 아웃바운드 ──────────────────────────────────────────
const g8fail = [];
for (const p of PAGES) {
  const hrefs = [...HTML[p.key].matchAll(/href="([^"]+)"/g)].map((x) => x[1]);
  const ext = hrefs.filter(
    (u) => /^https?:\/\//.test(u) && !u.startsWith('https://c.nolcool.com') && !u.includes('cdn.jsdelivr.net') && u !== AD_LINK
  );
  if (ext.length) g8fail.push(`${p.key}: ${ext.join(',')}`);
}
push('G8 외부 아웃바운드 0 (광고문의 카톡 링크만 허용)', g8fail.length === 0, g8fail.slice(0, 4).join(' | ') || 'OK');

// ── G9 광고문의·연락처 표기 ─────────────────────────────────────
let barAd = 0, barTel = 0, footerAd = 0;
const g9fail = [];
for (const p of CHROME_PAGES) {
  const h = HTML[p.key];
  const bar = barOf(h);
  const isAdv = p.venue && p.venue.tel;
  if (isAdv) {
    if (bar.includes('besta12')) g9fail.push(`${p.key} 광고주 고정바에 besta12`);
    else if (bar.includes(p.venue.tel)) barTel++;
    else g9fail.push(`${p.key} 고정바에 담당자 번호 없음`);
  } else {
    if (bar.includes('besta12')) barAd++;
    else g9fail.push(`${p.key} 고정바에 besta12 없음`);
  }
  if (/class="adkko"[\s\S]{0,300}besta12/.test(h)) footerAd++;
  else g9fail.push(`${p.key} 푸터 besta12 없음`);
}
const homeClean = !/class="pkbar"/.test(HTML.home) && !/<nav/.test(HTML.home) && !/<footer/.test(HTML.home);
push(
  'G9 고정바 — 광고주 4곳 전화 / 나머지 37곳 besta12 / 푸터 besta12 41 / 홈 크롬 0',
  g9fail.length === 0 && barTel === 4 && barAd === 37 && footerAd === 41 && homeClean,
  `광고주 바 ${barTel}/4, 광고문의 바 ${barAd}/37, 푸터 ${footerAd}/41, 홈 크롬 ${homeClean ? '없음(정상)' : '남아있음(위반)'}${g9fail.length ? ' — ' + g9fail.slice(0, 3).join(',') : ''}`
);

// ── G10 전화번호 허용표 ─────────────────────────────────────────
const g10fail = [];
for (const p of PAGES) {
  // tel: 링크는 하이픈이 없으므로 숫자만 남겨 비교합니다.
  const norm = (x) => x.replace(/\D/g, '');
  const allow = Object.fromEntries(Object.entries(PHONE_ALLOW).map(([k, v]) => [norm(k), v]));
  const nums = [...new Set([...HTML[p.key].matchAll(/010-?\d{3,4}-?\d{4}/g)].map((m) => norm(m[0])))];
  for (const n of nums) {
    const owner = allow[n];
    if (!owner) g10fail.push(`${p.key}: 미허용 번호 ${n}`);
    else if (owner !== p.key) g10fail.push(`${p.key}: ${n} 은 ${owner} 전용`);
  }
}
push(
  'G10 전화번호 허용표 (춘자=울산챔피언 / 로또=창원룰루랄라 / 손흥민=불광동호박 / 펩시맨=청담, 그 외 0)',
  g10fail.length === 0,
  g10fail.slice(0, 5).join(' | ') || '위반 0건 (허브·나머지 36곳 010- 패턴 0)'
);

// ── G11 연령 표기 · 확인 불가 · 배포 파일 ───────────────────────
const g11fail = [];
const BADAGE = [/27\+/, /38\+/, /만27세/, /27세이상/, /38세이상/, /(^|[^ ])27세/, /(^|[^ ])38세/];
for (const p of PAGES) {
  const full = HTML[p.key].replace(/만 27세 이상/g, '').replace(/만 38세 이상/g, '');
  for (const re of BADAGE) if (re.test(full)) g11fail.push(`${p.key} 연령 축약 ${re}`);
}
const sitemap = fs.readFileSync(path.join(OUT, 'sitemap.xml'), 'utf8');
const smMissing = [
  'https://c.nolcool.com/',
  'https://c.nolcool.com/pick',
  ...VENUES.map((v) => `https://c.nolcool.com/pick/${v.slug}`),
].filter((u) => !sitemap.includes(`<loc>${u}</loc>`));
const llms = fs.readFileSync(path.join(OUT, 'llms.txt'), 'utf8');
const llmsMissing = VENUES.filter((v) => !llms.includes(`/pick/${v.slug} `)).map((v) => v.slug);
const robots = fs.readFileSync(path.join(OUT, 'robots.txt'), 'utf8');
if (smMissing.length) g11fail.push(`sitemap 누락 ${smMissing.length}`);
if (llmsMissing.length) g11fail.push(`llms 누락 ${llmsMissing.length}`);
if (!robots.includes('Sitemap: https://c.nolcool.com/sitemap.xml')) g11fail.push('robots sitemap 없음');
push(
  'G11 연령 완전문 · sitemap 42 · llms 40 · robots',
  g11fail.length === 0,
  g11fail.join(' | ') || `sitemap·llms·robots 정상, 연령 축약 0건`
);

// ── 출력 ────────────────────────────────────────────────────────
console.log('\n=== /pick/ 게이트 결과 ===');
for (const r of results) console.log(`${r.pass ? 'PASS' : 'FAIL'} | ${r.id} | ${r.detail}`);
console.log('\n=== 본문 유사도 상위 5쌍 ===');
for (const p of pairs.slice(0, 5)) console.log(`${(p.w * 100).toFixed(2)}%  ${p.a} ↔ ${p.b}`);
const failed = results.filter((r) => !r.pass);
console.log(`\n총 ${results.length}종 중 FAIL ${failed.length}종`);
process.exit(failed.length ? 1 : 0);

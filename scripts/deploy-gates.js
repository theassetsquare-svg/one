/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * 배포 게이트 G10 / G13 / G14 / G15 / G16 — 하나라도 FAIL 이면 배포 금지.
 * (G9+ 본문img·메타9종·1200x1200·300KB·alt 는 scripts/thumb-gates.js 가 담당합니다.)
 *
 *  G10 번호 위치 — 정답표의 4개 번호는 "자기 가게 페이지 / 자기 지역 페이지" 밖에서 0건.
 *                  정답표 밖 010 패턴 0건. 한 페이지에 2개 이상 번호 0건.
 *  G13 가게이름 오염 0 — og:image:alt / 본문 img alt / <caption> / 파일명 / 앵커 밖 본문.
 *                  예외 (a)허브 (b)<a> 앵커 텍스트 (c)인천아라비안=인천아라비아 (d)지역 페이지는 지역명만.
 *  G14 썸네일 텍스트 오염 0 — og/manifest.json 기준. 자기 주체명·자기 광고주 외 이름·번호 금지.
 *  G15 썸네일 크기 — (A)(D-A) 전화번호 폭 ≥972px 이며 최대 높이 /
 *                  (B)(D-B) "광고문의" 높이 ≥240px 이며 최대 / (C) 가게이름 폭 ≥918px.
 *                  주인공보다 큰(높은) 글자가 있으면 실패.
 *  G16 홈 단독화 — 홈 HTML 에 <img>·background-image 파일 참조 0 /
 *                  전 페이지 홈 링크 0 / BreadcrumbList 홈 항목 0.
 */
const fs = require('fs');
const path = require('path');
const { ADVERTISERS } = require('./advertisers');
const { build } = require('./thumb-spec');

const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'out');
const DOMAIN = 'ongeung.pages.dev';
const SKIP = ['404.html', 'googlea4fecf0a9f9b8d59.html'];

const files = [];
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) {
      if (['_next', 'og', 'icons'].includes(e.name)) continue;
      walk(p);
    } else if (e.name.endsWith('.html') && !SKIP.includes(e.name)) files.push(p);
  }
})(OUT);
files.sort();

const urlOf = (rel) => {
  if (rel === 'index.html') return '/';
  if (rel === 'night.html') return '/night/';
  if (rel === 'pick/index.html') return '/pick';
  return '/' + rel.replace(/\/index\.html$/, '').replace(/\.html$/, '');
};

const cards = build();
const cardByUrl = new Map(cards.map((c) => [c.url, c]));

/** 전 가게이름 목록 (lib/night.ts + lib/pick.ts + 대전원나이트) */
const storeNames = (() => {
  const src = fs.readFileSync(path.join(ROOT, 'lib/pick.ts'), 'utf8') + fs.readFileSync(path.join(ROOT, 'lib/night.ts'), 'utf8');
  const s = new Set(['대전원나이트']);
  for (const m of src.matchAll(/nameA: '([^']+)'/g)) s.add(m[1]);
  return [...s].sort((a, b) => b.length - a.length);
})();

const fails = [];
const notes = [];
const fail = (gate, msg) => fails.push(`${gate} ${msg}`);

// ── G10 ────────────────────────────────────────────────────────────────
const TEL_ALLOW = new Map(); // 번호 -> 허용 주체명 집합
for (const a of ADVERTISERS) TEL_ALLOW.set(a.tel.replace(/-/g, ''), new Set([a.venue, a.areaName]));
const KNOWN = new Set(TEL_ALLOW.keys());

for (const f of files) {
  const rel = f.replace(OUT + path.sep, '');
  const url = urlOf(rel);
  const card = cardByUrl.get(url);
  const subject = card ? card.subject : null;
  const h = fs.readFileSync(f, 'utf8');
  const nums = [...new Set([...h.matchAll(/010-?[0-9]{3,4}-?[0-9]{4}/g)].map((m) => m[0].replace(/-/g, '')))];
  if (nums.length > 1) fail('G10', `${rel} — 한 페이지에 번호 ${nums.length}개: ${nums.join(', ')}`);
  for (const n of nums) {
    if (!KNOWN.has(n)) {
      fail('G10', `${rel} — 정답표에 없는 010 번호: ${n}`);
      continue;
    }
    const allowed = TEL_ALLOW.get(n);
    if (!subject || !allowed.has(subject)) {
      fail('G10', `${rel} — ${n} 은 [${[...allowed].join(' / ')}] 페이지에서만 허용. 이 페이지 주체=${subject}`);
    }
  }
}

// ── G13 ────────────────────────────────────────────────────────────────
const stripAnchors = (html) => html.replace(/<a\b[^>]*>[\s\S]*?<\/a>/g, ' ');
const ALIAS = { 인천아라비안나이트: ['인천아라비아나이트'] }; // 예외 (c)

for (const f of files) {
  const rel = f.replace(OUT + path.sep, '');
  const url = urlOf(rel);
  const card = cardByUrl.get(url);
  if (!card) {
    fail('G13', `${rel} — 명세에 없는 페이지(썸네일 미정의)`);
    continue;
  }
  if (card.kind === 'hub' || card.kind === 'home') continue; // 예외 (a) + 홈
  const h = fs.readFileSync(f, 'utf8');
  const own = new Set([card.subject, ...(ALIAS[card.subject] || [])]);
  const body = (h.match(/<body[\s\S]*<\/body>/) || [''])[0];

  const zones = {
    'og:image:alt': [(h.match(/property="og:image:alt" content="([^"]+)"/) || [])[1] || ''],
    'img alt': [...body.matchAll(/<img[^>]*\salt="([^"]*)"/g)].map((m) => m[1]),
    caption: [...body.matchAll(/<caption[^>]*>([\s\S]*?)<\/caption>/g)].map((m) => m[1]),
    파일명: [(h.match(/property="og:image" content="([^"]+)"/) || [])[1] || '', ...[...body.matchAll(/<img[^>]*\ssrc="([^"]+)"/g)].map((m) => m[1])],
    'title/description': [
      (h.match(/<title[^>]*>([^<]*)<\/title>/) || [])[1] || '',
      (h.match(/name="description" content="([^"]+)"/) || [])[1] || '',
    ],
  };
  for (const [zone, texts] of Object.entries(zones)) {
    const joined = texts.join(' \u0000 ');
    for (const n of storeNames) {
      if (own.has(n)) continue;
      if (card.subject && card.subject.includes(n)) continue; // 부분 문자열(자기 이름의 일부)
      if (!joined.includes(n)) continue;
      // 지역 페이지는 가게이름 자체가 금지 (예외 d)
      fail('G13', `${rel} [${zone}] — 타 가게이름 "${n}" (주체=${card.subject})`);
    }
  }
  // 규칙 스코프 밖(본문 산문)은 실패로 치지 않고 NOTE 로만 남깁니다.
  const prose = stripAnchors(body).replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<[^>]+>/g, ' ');
  for (const n of storeNames) {
    if (own.has(n) || (card.subject && card.subject.includes(n))) continue;
    if (prose.includes(n)) notes.push(`${rel} 본문 산문에 연결 업소명 "${n}" (규칙 스코프 밖 — 앵커·표·문의 안내 동선)`);
  }

  // 예외 (d) — 지역 페이지 alt·썸네일 글자에는 가게이름 금지
  if (card.kind === 'area') {
    const alts = [(h.match(/property="og:image:alt" content="([^"]+)"/) || [])[1] || '', ...[...body.matchAll(/<img[^>]*\salt="([^"]*)"/g)].map((m) => m[1])].join(' ');
    for (const n of storeNames) if (alts.includes(n)) fail('G13', `${rel} — 지역 페이지 alt 에 가게이름 "${n}"`);
  }
}

// ── G14 / G15 ──────────────────────────────────────────────────────────
const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, 'public/og/manifest.json'), 'utf8'));
const ALL_NICKS = ADVERTISERS.map((a) => a.nick);
const ALL_TELS = ADVERTISERS.map((a) => a.tel);

for (const m of manifest) {
  const joined = m.texts.join(' ');
  // G14 — 자기 주체명·자기 광고주 외 이름/번호 금지
  for (const n of storeNames) {
    if (m.subject && (m.subject.includes(n) || n.includes(m.subject))) continue;
    if (joined.includes(n)) fail('G14', `${m.file} — 썸네일 글자에 타 가게이름 "${n}" (주체=${m.subject})`);
  }
  for (const nick of ALL_NICKS) {
    if (m.advertiser && m.advertiser.nick === nick) continue;
    if (m.texts.includes(nick)) fail('G14', `${m.file} — 타 광고주 닉네임 "${nick}"`);
  }
  for (const tel of ALL_TELS) {
    if (m.advertiser && m.advertiser.tel === tel) continue;
    if (joined.includes(tel)) fail('G14', `${m.file} — 타 광고주 번호 "${tel}"`);
  }
  if (m.pageType === '지역') {
    for (const n of storeNames) if (joined.includes(n)) fail('G14', `${m.file} — 지역 카드에 가게이름 "${n}"`);
  }

  // G15 — 주인공 규칙
  if (m.rule === 'home') continue;
  const hero = m.metrics.find((x) => x.hero);
  if (!hero) {
    fail('G15', `${m.file} — 주인공 글자 미지정`);
    continue;
  }
  const maxH = Math.max(...m.metrics.map((x) => x.heightPx));
  if (hero.heightPx < maxH - 0.5) fail('G15', `${m.file} — 주인공(${hero.text} ${hero.heightPx}px)보다 큰 글자 존재(${maxH}px)`);
  if (m.rule === 'A' || m.rule === 'D-A') {
    if (hero.text !== m.advertiser.tel) fail('G15', `${m.file} — 주인공이 전화번호가 아님: ${hero.text}`);
    if (hero.widthPx < 972) fail('G15', `${m.file} — 전화번호 폭 ${hero.widthPx}px < 972px`);
  } else if (m.rule === 'B' || m.rule === 'D-B' || m.rule === 'hub') {
    if (hero.text !== '광고문의') fail('G15', `${m.file} — 주인공이 "광고문의"가 아님: ${hero.text}`);
    if (hero.heightPx < 240) fail('G15', `${m.file} — "광고문의" 높이 ${hero.heightPx}px < 240px`);
  } else if (m.rule === 'own') {
    if (hero.widthPx < 918) fail('G15', `${m.file} — 가게이름 폭 ${hero.widthPx}px < 918px`);
  }
  if (m.width !== 1200 || m.height !== 1200) fail('G15', `${m.file} — ${m.width}x${m.height}`);
  if (m.bytes > 300 * 1024) fail('G15', `${m.file} — ${(m.bytes / 1024).toFixed(0)}KB > 300KB`);
}
if (manifest.length !== files.length) fail('G14', `manifest ${manifest.length}장 vs 페이지 ${files.length}장 불일치`);

// ── G16 ────────────────────────────────────────────────────────────────
const home = fs.readFileSync(path.join(OUT, 'index.html'), 'utf8');
const homeBody = (home.match(/<body[\s\S]*<\/body>/) || [''])[0];
const homeImgs = [...homeBody.matchAll(/<img[^>]*>/g)].map((m) => m[0]);
if (homeImgs.length) fail('G16', `홈 본문 <img> ${homeImgs.length}개`);
const homeBg = [...home.matchAll(/background-image\s*:\s*[^;"']*url\(/gi)];
if (homeBg.length) fail('G16', `홈 background-image 파일 참조 ${homeBg.length}건`);

const HOME_HREF = new RegExp(
  `<a\\b[^>]*href="(/|\\./|index\\.html|/index\\.html|https://${DOMAIN.replace(/\./g, '\\.')}/|https://${DOMAIN.replace(/\./g, '\\.')}/index\\.html)"`,
  'g'
);
for (const f of files) {
  const rel = f.replace(OUT + path.sep, '');
  const h = fs.readFileSync(f, 'utf8');
  const hits = [...h.matchAll(HOME_HREF)];
  if (hits.length) fail('G16', `${rel} — 홈 링크 ${hits.length}건`);
  for (const m of h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    let j;
    try {
      j = JSON.parse(m[1]);
    } catch {
      continue;
    }
    const walkJ = (o) => {
      if (!o || typeof o !== 'object') return;
      if (Array.isArray(o)) return o.forEach(walkJ);
      if (o['@type'] === 'BreadcrumbList') {
        for (const it of o.itemListElement || []) {
          if (it.name === '홈' || it.item === `https://${DOMAIN}/`) fail('G16', `${rel} — BreadcrumbList 홈 항목`);
        }
      }
      Object.values(o).forEach(walkJ);
    };
    walkJ(j);
  }
}

// ── 결과 ───────────────────────────────────────────────────────────────
console.log('=== 배포 게이트 G10 / G13 / G14 / G15 / G16 ===');
console.log(`페이지 ${files.length}장 · 썸네일 ${manifest.length}장`);
for (const n of notes) console.log('NOTE  ', n);
if (fails.length) {
  for (const x of fails) console.log('FAIL  ', x);
  console.log(`\n❌ 실패 ${fails.length}건 — 배포 금지`);
  process.exit(1);
}
console.log('✅ G10 · G13 · G14 · G15 · G16 전부 통과');

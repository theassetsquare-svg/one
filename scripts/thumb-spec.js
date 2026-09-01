/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * 전 페이지 썸네일 명세 — lib/*.ts 를 읽어 "페이지 1개 = 썸네일 1장" 표를 만듭니다.
 *
 * 유형:
 *   home  홈(단독 성공스토리) — 업종 단어 0
 *   hub   허브(목록)
 *   own   가게 전용 사이트의 자기 가게 페이지 (규칙 C)
 *   venue 가게 페이지 (규칙 A=광고주 있음 / B=없음)
 *   area  지역 키워드 페이지 (규칙 D) — 가게이름 금지, 지역명만
 */
const fs = require('fs');
const path = require('path');
const { byVenueSlug, byAreaSlug } = require('./advertisers');

const ROOT = path.join(__dirname, '..');
const SITE = 'https://c.nolcool.com';

const read = (p) => fs.readFileSync(path.join(ROOT, p), 'utf8');

/** lib/*.ts 의 객체 리터럴에서 slug 기준으로 필드를 긁어옵니다. */
function collect(src, keyField) {
  const out = [];
  let cur = null;
  for (const line of src.split('\n')) {
    const s = line.match(/^\s+slug: '([^']+)',/);
    if (s) {
      cur = { slug: s[1] };
      out.push(cur);
      continue;
    }
    if (!cur) continue;
    const n = line.match(new RegExp(`^\\s+${keyField}: '([^']+)',`));
    if (n && !cur.name) cur.name = n[1];
  }
  return out.filter((x) => x.name);
}

const NIGHT = collect(read('lib/night.ts'), 'nameA');
const AREA = collect(read('lib/area.ts'), 'kwA');
const PICK = collect(read('lib/pick.ts'), 'nameA');

/** 대전원나이트 전용 사이트 8페이지 — 규칙 C. 소제목만 페이지별로 다르게 둡니다. */
const OWN_PAGES = [
  { file: 'event.png', url: '/event', topic: '이벤트 안내' },
  { file: 'first-visit.png', url: '/area/first-visit/', topic: '첫 방문 안내' },
  { file: 'access.png', url: '/access', topic: '오시는 길' },
  { file: 'faq.png', url: '/faq', topic: '자주 묻는 질문' },
  { file: 'review.png', url: '/review', topic: '방문 후기' },
  { file: 'contact.png', url: '/contact', topic: '예약 문의' },
  { file: 'atmosphere.png', url: '/atmosphere', topic: '홀 분위기' },
  { file: 'story.png', url: '/story', topic: '가게 이야기' },
];

/** 어두운 단색 배경 78색 — 황금각 색상환으로 서로 겹치지 않게 뽑습니다. */
function darkBg(i) {
  const h = (i * 137.508) % 360;
  const s = 52 + ((i * 13) % 16); // 52~67%
  const l = 17 + ((i * 7) % 9); // 17~25%
  return hslHex(h, s, l);
}
function hslHex(h, s, l) {
  s /= 100;
  l /= 100;
  const k = (n) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  const to = (x) => Math.round(255 * x).toString(16).padStart(2, '0');
  return `#${to(f(0))}${to(f(8))}${to(f(4))}`.toUpperCase();
}

function build() {
  const cards = [];
  let i = 0;
  const next = () => darkBg(i++);

  // 홈 — 업종 단어 0, 성공스토리 표지
  cards.push({
    file: 'home.png',
    url: '/',
    kind: 'home',
    subject: '1,247일의 기록',
    bg: '#12141A',
    lines: [
      { text: '바닥에서', pct: 0.62, color: '#FFD166' },
      { text: '다시 올라온', pct: 0.9, color: '#FFFFFF', hero: true, minH: 210 },
      { text: '1,247일', pct: 0.7, color: '#C8FF00', minH: 150 },
      { text: '어느 재기의 기록', pct: 0.5, color: '#B9BCC4' },
    ],
  });

  // 허브 2장
  cards.push(hub('night-hub-og.png', '/night/', '나이트 전체 목록', next()));
  cards.push(hub('pick-hub.png', '/pick', '전국 나이트 고르기 40', next()));

  // 가게 전용 사이트 (규칙 C)
  for (const p of OWN_PAGES) {
    cards.push({
      file: p.file,
      url: p.url,
      kind: 'own',
      subject: '대전원나이트',
      bg: next(),
      lines: [
        { text: '대전원나이트', pct: 0.9, color: '#FFFFFF', hero: true },
        { text: p.topic, pct: 0.4, color: '#FFD166' },
        { text: '광고문의 카카오톡 besta12', pct: 0.6, color: '#C8FF00' },
      ],
    });
  }

  // /bulgwangdong-hobak-night-guide — 불광동호박나이트 전용 페이지 (광고주 있음 → 규칙 A)
  cards.push(venueCard('bulgwangdong-hobak-night.png', '/area/bulgwangdong-hobak-night-guide/', '불광동호박나이트', 'bulgwangdong-hobak-night', next()));

  // /night/{업소} 13장
  for (const v of NIGHT) cards.push(venueCard(`${v.slug}-og.png`, `/night/${v.slug}`, v.name, v.slug, next()));

  // /night/{지역} 13장 — 규칙 D. 가게이름 금지.
  for (const a of AREA) cards.push(areaCard(`${a.slug}-og.png`, `/night/${a.slug}`, a.name, a.slug, next()));

  // /pick/{업소} 41장
  for (const v of PICK) cards.push(venueCard(`pick-${v.slug}.png`, `/pick/${v.slug}`, v.name, v.slug, next()));

  return cards;
}

function hub(file, url, name, bg) {
  return {
    file,
    url,
    kind: 'hub',
    subject: name,
    bg,
    lines: [
      { text: name, pct: 0.6, color: '#FFD166' },
      { text: '광고문의', pct: 0.8, color: '#FFFFFF', hero: true, minH: 250 },
      { text: '카카오톡 besta12', pct: 0.75, color: '#C8FF00', minH: 130 },
    ],
  };
}

/** 규칙 A(광고주) / B(비광고주) */
function venueCard(file, url, name, slug, bg) {
  const ad = byVenueSlug(slug);
  if (ad) {
    return {
      file,
      url,
      kind: 'venue',
      rule: 'A',
      subject: name,
      ad,
      bg,
      lines: [
        { text: name, pct: 0.6, color: '#FFD166' },
        { text: ad.nick, pct: null, pctRange: [0.45, 0.6], color: '#FFFFFF', minH: 175 },
        { text: ad.tel, pct: 0.93, color: '#C8FF00', hero: true, box: true },
        { text: '광고문의 카톡 besta12', pct: 0.55, color: '#B9BCC4' },
      ],
    };
  }
  return {
    file,
    url,
    kind: 'venue',
    rule: 'B',
    subject: name,
    bg,
    lines: [
      { text: name, pct: 0.6, color: '#FFD166' },
      { text: '광고문의', pct: 0.8, color: '#FFFFFF', hero: true, minH: 250 },
      { text: '카카오톡 besta12', pct: 0.75, color: '#C8FF00', minH: 130 },
    ],
  };
}

/** 규칙 D — 지역 페이지. 가게이름을 결코 넣지 않습니다. */
function areaCard(file, url, region, slug, bg) {
  const ad = byAreaSlug(slug);
  if (ad) {
    return {
      file,
      url,
      kind: 'area',
      rule: 'D-A',
      subject: region,
      ad,
      bg,
      lines: [
        { text: region, pct: 0.6, color: '#FFD166' },
        { text: ad.nick, pct: null, pctRange: [0.45, 0.6], color: '#FFFFFF', minH: 175 },
        { text: ad.tel, pct: 0.93, color: '#C8FF00', hero: true, box: true },
        { text: '광고문의 카톡 besta12', pct: 0.55, color: '#B9BCC4' },
      ],
    };
  }
  return {
    file,
    url,
    kind: 'area',
    rule: 'D-B',
    subject: region,
    bg,
    lines: [
      { text: region, pct: 0.6, color: '#FFD166' },
      { text: '광고문의', pct: 0.8, color: '#FFFFFF', hero: true, minH: 250 },
      { text: '카카오톡 besta12', pct: 0.75, color: '#C8FF00', minH: 130 },
    ],
  };
}

module.exports = { build, SITE, NIGHT, AREA, PICK, OWN_PAGES };

if (require.main === module) {
  const c = build();
  console.log('cards:', c.length);
  const byKind = {};
  for (const x of c) byKind[x.rule || x.kind] = (byKind[x.rule || x.kind] || 0) + 1;
  console.log(byKind);
}

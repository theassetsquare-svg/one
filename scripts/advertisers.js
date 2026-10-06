/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * ★광고주 정답표 — 이 파일이 유일한 기준입니다.
 *
 * 각 번호는 "자기 가게 페이지" + "자기 지역 페이지" 에서만 허용됩니다.
 * 그 외 전 페이지 = 광고문의 카카오톡 besta12 (전화번호 0).
 *
 * ⚠️ 한 페이지에 2명 이상 나열 결코 금지.
 */
const ADVERTISERS = [
  { venue: '울산챔피언나이트', venueSlugs: ['ulsan-champion-night'], areaSlugs: ['ulsan-night'], areaName: '울산나이트', nick: '춘자', tel: '010-5653-0069' },
  // 창원룰루랄라나이트 — 2026-09-13 광고 해지(비광고주). 연락처는 어느 쪽에도 싣지 않는다.
  { venue: '불광동호박나이트', venueSlugs: ['bulgwang-hobak-night', 'bulgwangdong-hobak-night'], areaSlugs: ['eunpyeong-night'], areaName: '은평나이트', nick: '손흥민', tel: '010-2221-1937' },
  { venue: '청담나이트', venueSlugs: ['cheongdam-night'], areaSlugs: ['gangnam-night'], areaName: '강남나이트', nick: '펩시맨', tel: '010-5655-4866' },
  // 지역 페이지(부산나이트)는 이 가게 페이지가 아니므로 넣지 않는다 — 대표님 지시
  //   "그 페이지 가게이름 페이지에 맞게 광고주 번호를 넣으라"(2026-08-24)
  { venue: '부산아시아드나이트', venueSlugs: ['busan-asiad-night'], areaSlugs: [], areaName: null, nick: '새우깡', tel: '010-3614-1056' },
  { venue: '성남샴푸나이트', venueSlugs: ['seongnam-shampoo-night'], areaSlugs: [], areaName: null, nick: '이쁜이', tel: '010-3432-4758' },   // 2026-09-04 광고주 등록
  // ★ lib/pick.ts 에는 contact 로 들어가 있었는데 "유일 기준"인 이 표에만 빠져 있었다(2026-08-24 확인)
  { venue: '대전세븐나이트', venueSlugs: ['daejeon-seven-night'], areaSlugs: [], areaName: null, nick: '영탁', tel: '010-7770-0869' },
  // 2026-09-02 신규 광고주
  { venue: '파주야당스카이돔나이트', venueSlugs: ['paju-yadang-skydome-night'], areaSlugs: [], areaName: null, nick: '딸기', tel: '010-3447-0963' },
  // 2026-10-06 신규 광고주(대표님 지시 10-06 17:01 · 10-07 04:40) — 지역 쪽 「신림나이트」도 같은 세트(대표님 10-06 18:29 「지역+나이트 제목 쪽 = 그 지역 광고주」)
  { venue: '신림그랑프리나이트', venueSlugs: ['sillim-grandprix-night'], areaSlugs: ['sillim-night'], areaName: '신림나이트', nick: '쌍코피', tel: '010-7352-1606' },
];

const AD_KAKAO = 'besta12';
/** 광고주 카드 4행 */
const AD_LINE_SHORT = '광고문의 카톡 besta12';
/** 비광고주 카드 주인공 + 보조행 */
const AD_HERO = '광고문의';
const AD_SUB = '카카오톡 besta12';
/** 가게 전용 사이트 보조행 */
const AD_LINE_LONG = '광고문의 카카오톡 besta12';

const byVenueSlug = (slug) => ADVERTISERS.find((a) => a.venueSlugs.includes(slug)) || null;
const byAreaSlug = (slug) => ADVERTISERS.find((a) => a.areaSlugs.includes(slug)) || null;
const ALL_TELS = ADVERTISERS.map((a) => a.tel);

module.exports = { ADVERTISERS, AD_KAKAO, AD_LINE_SHORT, AD_HERO, AD_SUB, AD_LINE_LONG, byVenueSlug, byAreaSlug, ALL_TELS };

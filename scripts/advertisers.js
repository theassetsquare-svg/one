/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * ★광고주 정답표 — 이 파일이 유일한 기준입니다.
 *
 * 각 번호는 "자기 가게 페이지" + "자기 지역 페이지" 에서만 허용됩니다.
 * 그 외 전 페이지 = 광고문의 카카오톡 besta12 (전화번호 0).
 *
 * ⚠️ 한 페이지에 2명 이상 나열 절대 금지.
 */
const ADVERTISERS = [
  { venue: '울산챔피언나이트', venueSlugs: ['ulsan-champion-night'], areaSlugs: ['ulsan-night'], areaName: '울산나이트', nick: '춘자', tel: '010-5653-0069' },
  { venue: '창원룰루랄라나이트', venueSlugs: ['changwon-lululala-night'], areaSlugs: ['changwon-night'], areaName: '창원나이트', nick: '로또', tel: '010-7528-4936' },
  { venue: '불광동호박나이트', venueSlugs: ['bulgwang-hobak-night', 'bulgwangdong-hobak-night'], areaSlugs: ['eunpyeong-night'], areaName: '은평나이트', nick: '손흥민', tel: '010-2221-1937' },
  { venue: '청담나이트', venueSlugs: ['cheongdam-night'], areaSlugs: ['gangnam-night'], areaName: '강남나이트', nick: '펩시맨', tel: '010-5655-4866' },
  { venue: '답십리미라클나이트', venueSlugs: ['dapsimni-miracle-night'], areaSlugs: [], areaName: null, nick: '유재석', tel: '010-8156-6558' },
  // 지역 페이지(부산나이트)는 이 가게 페이지가 아니므로 넣지 않는다 — 대표님 지시
  //   "그 페이지 가게이름 페이지에 맞게 광고주 번호를 넣으라"(2026-08-24)
  { venue: '부산아시아드나이트', venueSlugs: ['busan-asiad-night'], areaSlugs: [], areaName: null, nick: '새우깡', tel: '010-3614-1056' },
  // ★ lib/pick.ts 에는 contact 로 들어가 있었는데 "유일 기준"인 이 표에만 빠져 있었다(2026-08-24 확인)
  { venue: '대전세븐나이트', venueSlugs: ['daejeon-seven-night'], areaSlugs: [], areaName: null, nick: '영탁', tel: '010-7770-0869' },
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

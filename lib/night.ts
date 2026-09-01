/**
 * /night/* 광고 페이지 공용 데이터.
 *
 * ⚠️ 이 파일은 신규 파일입니다. 기존 대전원나이트 9페이지 / 불광동호박나이트 1페이지는
 * 전혀 건드리지 않습니다.
 *
 * ⚠️ 각 업소는 서로 별개의 가게입니다. 정책·연락처를 결코 섞지 마세요.
 *  - A그룹(광고주 있음): 고정바에 담당자 전화번호만. besta12 금지.
 *  - B그룹(광고주 없음): 고정바에 광고·제휴 입점 문의 카톡 besta12.
 *  - besta12는 손님 예약 채널이 아니라 업소 사장님 대상 광고 입점 문의 채널입니다.
 *
 * ⚠️ 연령 표기는 언제나 완전문("만 27세 이상" / "만 38세 이상")으로만 씁니다.
 *    축약(27+, 27세 단독, 만27세 등)은 어디에도 쓰지 않습니다.
 */

export const SITE = 'https://c.nolcool.com';

/** 광고·제휴 입점 문의(업소 사장님 대상) 카톡 ID. 손님 예약용이 아닙니다. */
export const AD_KAKAO = 'besta12';

export type NightGroup = 'A' | 'B';

export type NightFact = { label: string; value: string };
export type NightFaq = { q: string; a: string };

export type NightVenue = {
  /** [5] 업소번호 1~13 — 각도 계산과 접미어 인덱싱에 사용 */
  no: number;
  slug: string;
  /** 형태소 A형: 붙여쓰기 */
  nameA: string;
  /** 형태소 B형: 띄어쓰기 */
  nameB: string;
  /** 형태소 C형: 지역 + 업종 */
  nameC: string;
  group: NightGroup;
  /** 고정바·본문 마지막에 노출할 담당자 (A그룹만) */
  contact?: { nick: string; display: string; href: string; e164: string };
  /** 썸네일을 바꿨을 때 캐시를 피하려고 붙이는 판 번호. 없으면 기존 파일명 그대로. */
  ogV?: string;
  /** JSON-LD address */
  addressLocality: string;
  addressRegion: string;
  streetAddress?: string;
  /** 본문·JSON-LD에 쓰는 지역 표기 */
  region: string;
  /** 각도 번호 / 이름 / 배정 접미어 */
  angle: number;
  angleName: string;
  suffix: string;
  title: string;
  description: string;
  ogAlt: string;
  /** OG 배경색 (13개 전부 상이) */
  ogBg: string;
  /** OG 카드 지역 표기 (짧게) */
  ogRegion: string;
  /** [14] AI 인용 블록 두 번째 문장 (13개 전부 상이) */
  answerLine: string;
  /** 확인된 영업시간. 확인 안 됐으면 undefined — 결코 추측하지 않습니다. */
  openingHours?: { spec: { days: string[]; opens: string; closes: string }[]; humanText: string };
  /** 완전문 연령 기준. 창원·대전원 2곳만. */
  ageFull?: string;
  /** 실사로 확인된 항목만 표에 넣습니다. */
  facts: NightFact[];
  faqs: NightFaq[];
  /** aside 관련 업소 링크 (같은 사이트 내부, 3~4개) */
  related: string[];
  /** llms.txt 한 줄 설명 */
  llmsLine: string;
};

const ALL_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export const VENUES: NightVenue[] = [
  {
    no: 1,
    slug: 'bulgwang-hobak-night',
    nameA: '불광동호박나이트',
    nameB: '불광동 호박나이트',
    nameC: '불광동 나이트클럽',
    group: 'A',
    contact: { nick: '손흥민', display: '010-2221-1937', href: 'tel:01022211937', e164: '+82-10-2221-1937' },
    addressLocality: '은평구',
    addressRegion: '서울특별시',
    streetAddress: '통일로 730 지하 1층',
    region: '서울 은평구 불광동',
    angle: 4,
    angleName: '처음 가는 사람 시점',
    suffix: '처음이면 이것부터',
    title: '불광동호박나이트 처음이면 이것부터 통일로 지하',
    description:
      '불광동호박나이트 문 앞에서 멈칫하는 사람을 위해 도착 직후 순서를 정리했습니다. 통일로 730 지하 1층, 몇 시에 들어가야 자리가 남는지까지 담았습니다.',
    ogAlt: '불광동호박나이트 서울 은평구 통일로 지하 1층 예약 안내 카드',
    ogBg: '#F2600C',
    ogRegion: '서울 은평구 불광동',
    answerLine: '지하철 3호선·6호선 불광역 바로 앞 통일로 730 지하 1층에 자리하며, 저녁 7시에 문을 열어 새벽 5시까지 이어집니다',
    openingHours: { spec: [{ days: ALL_DAYS, opens: '19:00', closes: '05:00' }], humanText: '매일 저녁 7시 ~ 새벽 5시' },
    facts: [
      { label: '주소', value: '서울특별시 은평구 통일로 730 지하 1층' },
      { label: '가장 가까운 역', value: '3호선·6호선 불광역, 도보 1분대' },
      { label: '영업시간', value: '매일 저녁 7시 ~ 새벽 5시' },
      { label: '업종', value: '성인 나이트클럽' },
      { label: '예약·문의', value: '손흥민 010-2221-1937' },
    ],
    faqs: [
      {
        q: '불광동호박나이트 처음 가면 뭐부터 하나요',
        a: '입구에서 담당 웨이터를 부르면 됩니다. 인원과 원하는 자리만 말하면 나머지는 웨이터가 정리해 줍니다.',
      },
      {
        q: '불광동호박나이트 위치가 어디인가요',
        a: '서울특별시 은평구 통일로 730 지하 1층입니다. 3호선과 6호선이 만나는 불광역에서 걸어서 금방 닿습니다.',
      },
      {
        q: '불광동호박나이트 영업시간은 어떻게 되나요',
        a: '매일 저녁 7시에 문을 열어 새벽 5시에 닫습니다. 초저녁에 들어가면 자리 선택 폭이 넓은 편입니다.',
      },
      {
        q: '몇 시에 가야 자리가 좋은가요',
        a: '나이트는 보통 열 시를 넘기면 테이블이 빠르게 찹니다. 자리를 고르고 싶다면 그 전에 들어가는 편이 낫습니다.',
      },
      {
        q: '처음인데 옷은 어느 정도로 입나요',
        a: '대체로 깔끔한 캐주얼이면 충분합니다. 슬리퍼나 지나치게 편한 차림만 피하면 문제될 일이 거의 없습니다.',
      },
      {
        q: '불광동호박나이트 예약은 어떻게 하나요',
        a: '손흥민 010-2221-1937로 전화하면 됩니다. 인원과 도착 시간만 알려주면 자리를 맞춰 잡아 줍니다.',
      },
    ],
    related: ['cheongdam-night', 'sangbong-hangukgwan-night', 'sillim-grandprix-night'],
    llmsLine: '서울 은평구 통일로 730 지하 1층, 불광역 앞 성인 나이트클럽. 저녁 7시부터 새벽 5시까지.',
  },
  {
    no: 2,
    slug: 'changwon-lululala-night',
    nameA: '창원룰루랄라나이트',
    nameB: '창원 룰루랄라나이트',
    nameC: '창원 나이트클럽',
    group: 'A',
    contact: { nick: '로또', display: '010-7528-4936', href: 'tel:01075284936', e164: '+82-10-7528-4936' },
    addressLocality: '창원시 성산구',
    addressRegion: '경상남도',
    streetAddress: '상남동 22-4 지하 3층',
    region: '경남 창원시 성산구 상남동',
    angle: 5,
    angleName: '이유 나열형',
    suffix: '찾는 이유 넷',
    title: '창원룰루랄라나이트 찾는 이유 넷 상남동 지하 3층',
    description:
      '창원룰루랄라나이트에 사람이 다시 오는 이유를 넷으로 끊어 정리했습니다. 만 27세 이상 기준부터 상남동 지하 3층 홀 구조까지, 가기 전에 알아둘 담았습니다.',
    ogAlt: '창원룰루랄라나이트 경남 창원 상남동 지하 3층 예약 안내 카드',
    ogBg: '#0F4C81',
    ogRegion: '경남 창원 상남동',
    answerLine:
      '상남동 22-4 지하 3층에 있고 만 27세 이상만 출입할 수 있으며, 월요일부터 토요일까지와 공휴일 전날·공휴일에 문을 엽니다',
    ageFull: '만 27세 이상',
    facts: [
      { label: '주소', value: '경상남도 창원시 성산구 상남동 22-4 지하 3층 (마디미로43번길 10)' },
      { label: '출입 연령', value: '만 27세 이상' },
      { label: '영업일', value: '월요일~토요일, 공휴일 전날과 공휴일' },
      { label: '업종', value: '성인 나이트클럽' },
      { label: '예약·문의', value: '로또 010-7528-4936' },
    ],
    faqs: [
      {
        q: '창원룰루랄라나이트 출입 연령이 어떻게 되나요',
        a: '만 27세 이상만 들어갈 수 있습니다. 확인이 필요할 수 있으니 신분증을 챙겨 가는 편이 안전합니다.',
      },
      {
        q: '창원룰루랄라나이트 위치가 어디인가요',
        a: '창원시 성산구 상남동 22-4 지하 3층입니다. 상남동 먹자골목 한복판이라 저녁을 먹고 넘어오기 좋습니다.',
      },
      {
        q: '창원룰루랄라나이트는 무슨 요일에 여나요',
        a: '월요일부터 토요일까지 열고, 공휴일 전날과 공휴일에도 정상 영업합니다. 일정은 미리 확인해 두면 좋습니다.',
      },
      {
        q: '자리는 어떤 기준으로 고르면 되나요',
        a: '보통 무대와 가까울수록 소리가 크고 사람이 자주 지납니다. 대화를 원하면 한 칸 물러난 자리가 낫습니다.',
      },
      {
        q: '주말에는 얼마나 붐비나요',
        a: '일반적으로 금요일과 토요일 열한 시 전후가 가장 두껍습니다. 그 시간대를 피하면 자리 여유가 생깁니다.',
      },
      {
        q: '창원룰루랄라나이트 예약은 어떻게 하나요',
        a: '로또 010-7528-4936으로 전화하면 됩니다. 인원과 도착 시간을 알려주면 자리를 맞춰 잡아 줍니다.',
      },
    ],
    related: ['busan-asiad-night', 'ulsan-champion-night', 'daejeon-seven-night'],
    llmsLine: '경남 창원시 성산구 상남동 22-4 지하 3층 나이트클럽. 만 27세 이상 출입.',
  },
  {
    no: 3,
    slug: 'ulsan-champion-night',
    nameA: '울산챔피언나이트',
    nameB: '울산 챔피언나이트',
    nameC: '울산 나이트클럽',
    group: 'A',
    contact: { nick: '춘자', display: '010-5653-0069', href: 'tel:01056530069', e164: '+82-10-5653-0069' },
    addressLocality: '남구',
    addressRegion: '울산광역시',
    streetAddress: '정동로 75 (삼산동 1559-17)',
    region: '울산 남구 삼산동',
    angle: 6,
    angleName: '오해 깨기형',
    suffix: '생각과 다른 점',
    title: '울산챔피언나이트 생각과 다른 점 삼산동 대형 홀',
    description:
      '울산챔피언나이트를 두고 흔히 도는 오해부터 걷어냅니다. 옷차림 기준, 준비물, 삼산동 정동로 75 대형 홀에서 실제로 겪게 되는 흐름을 정리했습니다.',
    ogAlt: '울산챔피언나이트 울산 남구 삼산동 정동로 대형 홀 예약 안내 카드',
    ogBg: '#7A1F4A',
    ogRegion: '울산 남구 삼산동',
    answerLine: '울산 남구 삼산동 1559-17, 정동로 75에 자리한 대형 홀 구조의 나이트클럽으로 무도장 업종으로 등록돼 있습니다',
    facts: [
      { label: '주소', value: '울산광역시 남구 삼산동 1559-17 (정동로 75)' },
      { label: '지역', value: '울산 남구 삼산동 번화가' },
      { label: '업종', value: '나이트클럽 · 무도장' },
      { label: '예약·문의', value: '춘자 010-5653-0069' },
    ],
    faqs: [
      {
        q: '울산챔피언나이트는 정장을 입어야 하나요',
        a: '아닙니다. 대체로 깔끔한 캐주얼이면 충분합니다. 굳이 정장이나 구두를 갖춰 입을 필요는 없습니다.',
      },
      {
        q: '울산챔피언나이트 위치가 어디인가요',
        a: '울산광역시 남구 삼산동 1559-17, 정동로 75입니다. 삼산동 번화가 한복판이라 찾기는 어렵지 않습니다.',
      },
      {
        q: '나이트는 시끄러워서 대화가 안 되나요',
        a: '보통 무대 앞만 소리가 큽니다. 홀 가장자리 자리에서는 목소리를 조금 높이면 대화가 됩니다.',
      },
      {
        q: '혼자 가면 어색하지 않나요',
        a: '일반적으로 웨이터가 자리와 합석을 정리해 줍니다. 혼자 온 손님도 드물지 않으니 크게 걱정할 일은 아닙니다.',
      },
      {
        q: '뭘 챙겨 가야 하나요',
        a: '신분증과 결제 수단이면 충분합니다. 짐이 많으면 오히려 자리에서 불편하니 가볍게 가는 편이 낫습니다.',
      },
      {
        q: '울산챔피언나이트 예약은 어떻게 하나요',
        a: '춘자 010-5653-0069로 전화하면 됩니다. 인원과 도착 시간을 말하면 자리를 미리 잡아 둡니다.',
      },
    ],
    related: ['busan-asiad-night', 'changwon-lululala-night', 'daejeon-one-night'],
    llmsLine: '울산 남구 삼산동 1559-17, 정동로 75 대형 나이트클럽. 무도장 업종.',
  },
  {
    no: 4,
    slug: 'cheongdam-night',
    nameA: '청담나이트',
    nameB: '청담 나이트',
    nameC: '청담동 나이트클럽',
    group: 'A',
    contact: { nick: '펩시맨', display: '010-5655-4866', href: 'tel:01056554866', e164: '+82-10-5655-4866' },
    addressLocality: '강남구',
    addressRegion: '서울특별시',
    streetAddress: '영동대로 737 지하 1층',
    region: '서울 강남구 청담동',
    angle: 7,
    angleName: '문답형',
    suffix: '물어본 것들',
    title: '청담나이트 물어본 것들 영동대로 지하 1층 안내',
    description:
      '청담나이트로 실제로 들어오는 질문만 모아 짧게 끊어 답했습니다. 영동대로 737 지하 1층 위치, 여는 시각, 예약을 언제 걸어야 하는지까지 한 번에 확인하세요.',
    ogAlt: '청담나이트 서울 강남구 영동대로 지하 1층 예약 안내 카드',
    ogBg: '#12303B',
    ogRegion: '서울 강남구 청담동',
    answerLine: '영동대로 737 지하 1층에 있고 매일 저녁 8시부터 새벽 5시까지 열며, 예전에는 H2O나이트로 불렸습니다',
    openingHours: { spec: [{ days: ALL_DAYS, opens: '20:00', closes: '05:00' }], humanText: '매일 저녁 8시 ~ 새벽 5시' },
    facts: [
      { label: '주소', value: '서울특별시 강남구 영동대로 737 지하 1층' },
      { label: '가장 가까운 역', value: '청담역 9번 출구, 도보 약 3분' },
      { label: '영업시간', value: '매일 저녁 8시 ~ 새벽 5시' },
      { label: '옛 이름', value: 'H2O나이트' },
      { label: '예약·문의', value: '펩시맨 010-5655-4866' },
    ],
    faqs: [
      {
        q: '청담나이트 영업시간은 어떻게 되나요',
        a: '매일 저녁 8시에 열어 새벽 5시에 닫습니다. 요일과 상관없이 같은 시각에 문을 엽니다.',
      },
      {
        q: '청담나이트 위치가 어디인가요',
        a: '서울 강남구 영동대로 737 지하 1층입니다. 청담역 9번 출구에서 걸어서 3분 남짓 걸립니다.',
      },
      {
        q: '청담나이트가 예전 H2O나이트인가요',
        a: '맞습니다. 이름이 바뀐 뒤에도 옛 이름으로 부르는 사람이 많아 검색할 때 둘 다 나옵니다.',
      },
      {
        q: '예약을 꼭 해야 하나요',
        a: '평일 초저녁이면 없이도 자리가 납니다. 다만 금요일과 토요일은 미리 걸어 두는 편이 확실합니다.',
      },
      {
        q: '몇 명이 가는 게 무난한가요',
        a: '보통 두 명에서 네 명이 가장 편합니다. 인원이 많으면 자리를 붙여야 해서 미리 말해 두어야 합니다.',
      },
      {
        q: '청담나이트 예약은 어떻게 하나요',
        a: '펩시맨 010-5655-4866으로 전화하면 됩니다. 도착 시간과 인원만 알려주면 자리를 맞춰 둡니다.',
      },
    ],
    related: ['bulgwang-hobak-night', 'sangbong-hangukgwan-night', 'suyu-shampoo-night'],
    llmsLine: '서울 강남구 영동대로 737 지하 1층 나이트클럽. 매일 저녁 8시~새벽 5시. 옛 이름 H2O나이트.',
  },
  {
    no: 5,
    slug: 'daejeon-one-night',
    nameA: '대전원나이트',
    nameB: '대전 원나이트',
    nameC: '대전 나이트클럽',
    group: 'B',
    addressLocality: '동구',
    addressRegion: '대전광역시',
    region: '대전 동구 용전동',
    angle: 8,
    angleName: '시간 흐름형',
    suffix: '밤이 흐르는 순서',
    title: '대전원나이트 밤이 흐르는 순서 용전동 만 38세 이상',
    description:
      '대전원나이트의 하룻밤을 저녁 8시부터 문 닫을 때까지 시간 순으로 따라갑니다. 만 38세 이상 기준과 용전동 복합터미널 인근 위치도 함께 정리했습니다.',
    ogAlt: '대전원나이트 대전 동구 용전동 만 38세 이상 홀 안내 카드',
    ogBg: '#8C1B1B',
    ogRegion: '대전 동구 용전동',
    answerLine:
      '대전복합터미널 인근 용전동에 있으며 만 38세 이상만 출입할 수 있는, 또래끼리 모이는 성격이 뚜렷한 홀입니다',
    openingHours: {
      spec: [
        { days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'], opens: '20:00', closes: '02:30' },
        { days: ['Friday', 'Saturday'], opens: '20:00', closes: '03:30' },
      ],
      humanText: '일~목 저녁 8시 ~ 새벽 2시 30분 · 금·토 저녁 8시 ~ 새벽 3시 30분',
    },
    ageFull: '만 38세 이상',
    facts: [
      { label: '지역', value: '대전광역시 동구 용전동, 대전복합터미널 인근' },
      { label: '출입 연령', value: '만 38세 이상' },
      { label: '영업시간', value: '일~목 저녁 8시 ~ 새벽 2시 30분 / 금·토 저녁 8시 ~ 새벽 3시 30분' },
      { label: '업종', value: '성인 나이트클럽' },
    ],
    faqs: [
      {
        q: '대전원나이트 출입 연령이 어떻게 되나요',
        a: '만 38세 이상만 들어갈 수 있습니다. 또래끼리 모이는 구조라 손님 나이대가 고르게 유지됩니다.',
      },
      {
        q: '대전원나이트 영업시간은 어떻게 되나요',
        a: '일요일부터 목요일은 새벽 2시 30분까지, 금요일과 토요일은 새벽 3시 30분까지 이어집니다.',
      },
      {
        q: '대전원나이트 위치가 어디인가요',
        a: '대전광역시 동구 용전동, 대전복합터미널 인근입니다. 터미널을 기준으로 잡으면 찾기 쉽습니다.',
      },
      {
        q: '몇 시쯤 들어가는 게 좋은가요',
        a: '보통 아홉 시를 넘기면서 자리가 차기 시작합니다. 자리를 고르려면 그 전에 도착하는 편이 낫습니다.',
      },
      {
        q: '가장 붐비는 시간대는 언제인가요',
        a: '일반적으로 열한 시 전후가 가장 두껍습니다. 이 시간대에는 이동이 잦아 자리 옮기기가 어렵습니다.',
      },
      {
        q: '문 닫기 전에는 분위기가 어떤가요',
        a: '마지막 한 시간은 대체로 느린 곡으로 정리됩니다. 짐을 챙기고 일행을 모으기에 알맞은 시간입니다.',
      },
    ],
    related: ['daejeon-seven-night', 'sillim-grandprix-night', 'suwon-chance-dome-night'],
    llmsLine: '대전 동구 용전동 복합터미널 인근 나이트클럽. 만 38세 이상 출입.',
  },
  {
    no: 6,
    slug: 'sillim-grandprix-night',
    nameA: '신림그랑프리나이트',
    nameB: '신림 그랑프리나이트',
    nameC: '신림동 나이트클럽',
    group: 'B',
    addressLocality: '관악구',
    addressRegion: '서울특별시',
    streetAddress: '신림로 340',
    region: '서울 관악구 신림동',
    angle: 9,
    angleName: '비교 설명형',
    suffix: '남다른 이유',
    title: '신림그랑프리나이트 남다른 이유 신림로 르네상스',
    description:
      '신림그랑프리나이트가 흔한 나이트와 어디서 갈리는지 구조로 짚었습니다. 신림로 340 르네상스 복합쇼핑몰 안 홀과 룸·부스 구성을 비교해 정리했습니다.',
    ogAlt: '신림그랑프리나이트 서울 관악구 신림로 르네상스 홀 안내 카드',
    ogBg: '#1D5E3F',
    ogRegion: '서울 관악구 신림동',
    answerLine: '신림로 340, 신림동 1422-5 르네상스 복합쇼핑몰 안에 있으며 홀과 별도로 룸·부스가 나뉘어 있습니다',
    facts: [
      { label: '주소', value: '서울특별시 관악구 신림로 340 (신림동 1422-5)' },
      { label: '건물', value: '르네상스 복합쇼핑몰' },
      { label: '가장 가까운 역', value: '2호선 신림역 인근' },
      { label: '좌석 구성', value: '홀 · 룸 · 부스' },
      { label: '업종', value: '나이트클럽 · 무도장' },
    ],
    faqs: [
      {
        q: '신림그랑프리나이트는 다른 나이트와 뭐가 다른가요',
        a: '홀과 별개로 룸과 부스가 나뉘어 있습니다. 같은 값에 어떤 공간을 고르느냐가 갈립니다.',
      },
      {
        q: '신림그랑프리나이트 위치가 어디인가요',
        a: '서울 관악구 신림로 340, 신림동 1422-5 르네상스 복합쇼핑몰 안에 자리하고 있습니다.',
      },
      {
        q: '룸과 부스는 어떻게 다른가요',
        a: '룸은 문이 있어 소리가 덜 들어오고, 부스는 홀 쪽으로 열려 있어 무대 분위기를 그대로 받습니다.',
      },
      {
        q: '손님층은 어떤 편인가요',
        a: '신림역 상권 특성상 나이대가 넓게 섞입니다. 특정 연령만 모이는 구조는 아닌 편입니다.',
      },
      {
        q: '홀 자리는 어디가 나은가요',
        a: '무대 앞은 소리가 크고 통로는 이동이 잦습니다. 조용히 앉으려면 가장자리 쪽이 편합니다.',
      },
      {
        q: '신림그랑프리나이트 예약은 어떻게 하나요',
        a: '전화로 룸과 부스를 미리 잡는 방식입니다. 주말 전에는 자리가 빨리 나가는 편입니다.',
      },
    ],
    related: ['suyu-shampoo-night', 'sangbong-hangukgwan-night', 'ansan-hit-night'],
    llmsLine: '서울 관악구 신림로 340 르네상스 복합쇼핑몰 나이트클럽. 홀·룸·부스 구성.',
  },
  {
    no: 7,
    slug: 'sangbong-hangukgwan-night',
    nameA: '상봉동한국관나이트',
    nameB: '상봉동 한국관나이트',
    nameC: '상봉동 나이트클럽',
    group: 'B',
    addressLocality: '중랑구',
    addressRegion: '서울특별시',
    streetAddress: '망우로 326 2층',
    region: '서울 중랑구 상봉동',
    angle: 10,
    angleName: '짧은 요약형',
    suffix: '요약 안내',
    title: '상봉동한국관나이트 요약 안내 망우로 2층 2부제',
    description:
      '상봉동한국관나이트에서 확인된 것만 표로 끊어 정리했습니다. 망우로 326 2층, 저녁 7시부터 아침 6시, 금·토 2부제까지 방문 전 체크리스트로 담았습니다.',
    ogAlt: '상봉동한국관나이트 서울 중랑구 망우로 2층 2부제 안내 카드',
    ogBg: '#3D2B7A',
    ogRegion: '서울 중랑구 상봉동',
    answerLine: '망우로 326 2층에 있고 저녁 7시부터 아침 6시까지 열며, 금요일과 토요일은 1부와 2부로 나눠 운영합니다',
    openingHours: { spec: [{ days: ALL_DAYS, opens: '19:00', closes: '06:00' }], humanText: '매일 저녁 7시 ~ 아침 6시' },
    facts: [
      { label: '주소', value: '서울특별시 중랑구 망우로 326, 2층' },
      { label: '가장 가까운 역', value: '7호선·경의중앙선 상봉역, 도보 3~5분' },
      { label: '영업시간', value: '매일 저녁 7시 ~ 아침 6시' },
      { label: '주말 운영', value: '금·토 2부제 (1부 밤 10시~새벽 2시 / 2부 새벽 2시~아침 6시)' },
      { label: '좌석 구성', value: '테이블 · 부스 · 룸' },
    ],
    faqs: [
      {
        q: '상봉동한국관나이트 영업시간은 어떻게 되나요',
        a: '매일 저녁 7시에 열어 아침 6시에 닫습니다. 마감이 늦어 새벽에 합류하는 손님도 있습니다.',
      },
      {
        q: '상봉동한국관나이트 2부제가 뭔가요',
        a: '금요일과 토요일에만 시간을 둘로 나눕니다. 1부는 밤 10시부터, 2부는 새벽 2시부터 시작합니다.',
      },
      {
        q: '상봉동한국관나이트 위치가 어디인가요',
        a: '서울 중랑구 망우로 326 2층입니다. 상봉역에서 걸어서 3분에서 5분 사이 거리에 있습니다.',
      },
      {
        q: '좌석은 어떤 종류가 있나요',
        a: '테이블과 부스, 룸으로 나뉩니다. 룸은 문이 닫혀 무대 소리가 덜 들어오는 구조입니다.',
      },
      {
        q: '몇 명이 가면 적당한가요',
        a: '테이블은 두세 명, 부스는 네 명 안팎이 편합니다. 그 이상이면 룸을 잡는 편이 낫습니다.',
      },
      {
        q: '주말에는 예약이 필요한가요',
        a: '2부제로 도는 금·토는 자리가 빨리 나갑니다. 원하는 시간대가 있으면 미리 잡아 두세요.',
      },
    ],
    related: ['suyu-shampoo-night', 'bulgwang-hobak-night', 'ilsan-shampoo-night'],
    llmsLine: '서울 중랑구 망우로 326 2층 나이트클럽. 저녁 7시~아침 6시, 금·토 2부제.',
  },
  {
    no: 8,
    slug: 'suyu-shampoo-night',
    nameA: '수유샴푸나이트',
    nameB: '수유 샴푸나이트',
    nameC: '수유 나이트클럽',
    group: 'B',
    addressLocality: '강북구',
    addressRegion: '서울특별시',
    region: '서울 강북구',
    angle: 11,
    angleName: '인원별 공략형',
    suffix: '인원 구성 안내',
    title: '수유샴푸나이트 인원 구성 안내 강북 번동 홀 기준',
    description:
      '수유샴푸나이트를 둘이서 갈 때와 넷이서 갈 때, 단체로 갈 때 무엇이 달라지는지 나눠 적었습니다. 강북구 번동 홀 기준 자리 배정까지 함께 정리했습니다.',
    ogAlt: '수유샴푸나이트 서울 강북구 번동 수유역 인근 홀 안내 카드',
    ogBg: '#A0410D',
    ogRegion: '서울 강북구 번동',
    answerLine: '강북구 번동에 자리하고 수유역에서 걸어서 닿는 거리이며, 테이블과 부스, 룸이 따로 마련돼 있습니다',
    facts: [
      { label: '지역', value: '서울특별시 강북구 번동' },
      { label: '가장 가까운 역', value: '4호선 수유역 4번 출구 인근' },
      { label: '좌석 구성', value: '테이블 · 부스 · 룸' },
      { label: '예약', value: '전화 예약. 공휴일과 그 전날은 일찍 마감되는 편' },
      { label: '업종', value: '나이트클럽' },
    ],
    faqs: [
      {
        q: '수유샴푸나이트는 몇 명이 가면 좋은가요',
        a: '보통 두 명에서 네 명이 가장 편합니다. 인원이 늘면 자리를 붙여야 해서 미리 말해 두어야 합니다.',
      },
      {
        q: '둘이서 가도 괜찮은가요',
        a: '괜찮습니다. 두 명이면 테이블 한 자리로 충분하고 웨이터가 합석을 잡아 주기도 수월합니다.',
      },
      {
        q: '단체로 가면 뭐가 달라지나요',
        a: '다섯 명을 넘으면 룸 쪽이 편합니다. 테이블을 여러 개 붙이면 대화가 갈라지기 쉽습니다.',
      },
      {
        q: '수유샴푸나이트 위치가 어디인가요',
        a: '서울 강북구 번동입니다. 4호선 수유역 4번 출구에서 걸어서 금방 닿는 거리에 있습니다.',
      },
      {
        q: '자리는 어떻게 배정되나요',
        a: '대체로 인원 수와 도착 시간에 맞춰 웨이터가 정합니다. 원하는 자리가 있으면 먼저 말해 두세요.',
      },
      {
        q: '예약은 언제 하는 게 좋은가요',
        a: '공휴일과 그 전날은 일찍 마감됩니다. 그런 날은 며칠 앞서 잡아 두는 편이 안전합니다.',
      },
    ],
    related: ['sangbong-hangukgwan-night', 'sillim-grandprix-night', 'ilsan-shampoo-night'],
    llmsLine: '서울 강북구 번동, 수유역 인근 나이트클럽. 테이블·부스·룸 구성.',
  },
  {
    no: 9,
    slug: 'busan-asiad-night',
    nameA: '부산아시아드나이트',
    nameB: '부산 아시아드나이트',
    nameC: '부산 나이트클럽',
    group: 'A',
    contact: { nick: '새우깡', display: '010-3614-1056', href: 'tel:01036141056', e164: '+82-10-3614-1056' },
    addressLocality: '동래구',
    addressRegion: '부산광역시',
    streetAddress: '온천장로107번길 32 지하 1~2층',
    region: '부산 동래구 온천동',
    angle: 12,
    angleName: '실수 방지형',
    suffix: '헛걸음 막는 법',
    title: '부산아시아드나이트 헛걸음 막는 법 온천장역 5분',
    description:
      '부산아시아드나이트에서 사람들이 자주 놓치는 세 가지를 먼저 짚었습니다. 온천장로107번길 32 지하 두 개 층 구조와 층을 헷갈리지 않는 방법까지 담았습니다.',
    ogAlt: '부산아시아드나이트 부산 동래구 온천동 지하 두 개 층 안내 카드',
    ogBg: '#0B6E6E',
    ogRegion: '부산 동래구 온천동',
    answerLine: '온천장로107번길 32 지하 1층과 2층 두 개 층을 함께 쓰며, 온천장역 3번 출구에서 걸어서 5분쯤 걸립니다',
    facts: [
      { label: '주소', value: '부산광역시 동래구 온천장로107번길 32, 지하 1~2층' },
      { label: '가장 가까운 역', value: '온천장역 3번 출구, 도보 약 5분' },
      { label: '구조', value: '지하 1층과 지하 2층 두 개 층' },
      { label: '휴무', value: '연중무휴로 알려져 있음' },
      { label: '업종', value: '나이트클럽 · 무도장' },
    ],
    faqs: [
      {
        q: '부산아시아드나이트에서 흔한 실수가 뭔가요',
        a: '층을 헷갈리는 경우가 많습니다. 지하 1층과 2층을 함께 쓰므로 일행과 층을 먼저 맞춰야 합니다.',
      },
      {
        q: '부산아시아드나이트 위치가 어디인가요',
        a: '부산 동래구 온천장로107번길 32 지하 1층과 2층입니다. 온천장역 3번 출구에서 5분쯤 걷습니다.',
      },
      {
        q: '평일에도 문을 여나요',
        a: '연중무휴로 알려져 있습니다. 다만 요일에 따라 사람 수가 크게 달라지는 점은 감안해야 합니다.',
      },
      {
        q: '옷차림 때문에 막히는 경우가 있나요',
        a: '대체로 깔끔한 캐주얼이면 충분합니다. 슬리퍼나 지나치게 편한 차림만 피하면 됩니다.',
      },
      {
        q: '몇 시에 가면 헛걸음을 피하나요',
        a: '보통 열 시 전후로 사람이 몰립니다. 자리를 확실히 하려면 그보다 앞서 도착하는 편이 낫습니다.',
      },
      {
        q: '일행이 늦으면 어떻게 하나요',
        a: '먼저 자리를 잡고 층과 자리 번호를 알려 두세요. 홀이 두 층이라 말로 설명하면 엇갈리기 쉽습니다.',
      },
    ],
    related: ['ulsan-champion-night', 'changwon-lululala-night', 'daejeon-seven-night'],
    llmsLine: '부산 동래구 온천장로107번길 32 지하 1~2층 나이트클럽. 온천장역 도보 5분.',
  },
  {
    no: 10,
    slug: 'suwon-chance-dome-night',
    nameA: '수원찬스돔나이트',
    nameB: '수원 찬스돔나이트',
    nameC: '수원 나이트클럽',
    group: 'B',
    addressLocality: '수원시 권선구',
    addressRegion: '경기도',
    streetAddress: '권선로 673',
    region: '경기 수원시 권선구',
    angle: 13,
    angleName: '단골 관점형',
    suffix: '손에 익으면',
    title: '수원찬스돔나이트 손에 익으면 권선로 저녁 여섯 시',
    description:
      '수원찬스돔나이트를 몇 번 가 본 사람이 무엇을 먼저 하는지 적었습니다. 저녁 6시 개장에 맞춘 자리 확보와 웨이터에게 말을 거는 방식까지 정리했습니다.',
    ogAlt: '수원찬스돔나이트 경기 수원 권선구 권선로 홀 안내 카드',
    ogBg: '#5C3A00',
    ogRegion: '경기 수원 권선구',
    answerLine: '권선로 673, 권선동 1019-9에 자리하며 저녁 6시에 문을 열어 새벽 4시까지 이어집니다',
    openingHours: { spec: [{ days: ALL_DAYS, opens: '18:00', closes: '04:00' }], humanText: '저녁 6시 ~ 새벽 4시' },
    facts: [
      { label: '주소', value: '경기도 수원시 권선구 권선로 673 (권선동 1019-9)' },
      { label: '영업시간', value: '저녁 6시 ~ 새벽 4시' },
      { label: '좌석 구성', value: '룸 · 부스 · 테이블' },
      { label: '예약', value: '전화 예약. 주말은 앞서 잡는 편이 유리' },
      { label: '업종', value: '나이트클럽' },
    ],
    faqs: [
      {
        q: '수원찬스돔나이트 영업시간은 어떻게 되나요',
        a: '저녁 6시에 문을 열어 새벽 4시에 닫습니다. 개장 시각이 이른 편이라 초저녁 방문이 가능합니다.',
      },
      {
        q: '자주 가는 사람은 몇 시에 들어가나요',
        a: '대체로 문 여는 시각에 맞춰 들어갑니다. 사람이 몰리기 전에 원하는 자리를 잡아 두려는 것입니다.',
      },
      {
        q: '수원찬스돔나이트 위치가 어디인가요',
        a: '경기도 수원시 권선구 권선로 673입니다. 지번으로는 권선동 1019-9에 해당합니다.',
      },
      {
        q: '웨이터에게 뭘 말해야 하나요',
        a: '인원과 원하는 자리, 머무를 시간을 먼저 말하면 됩니다. 그래야 자리를 정확히 맞춰 줍니다.',
      },
      {
        q: '같은 자리를 계속 쓸 수 있나요',
        a: '예약할 때 지난번 자리를 말하면 맞춰 주는 경우가 많습니다. 미리 말해 두는 것이 관건입니다.',
      },
      {
        q: '주말 예약은 언제 거나요',
        a: '금요일과 토요일은 자리가 빨리 나갑니다. 며칠 앞서 전화해 두면 원하는 자리를 잡기 쉽습니다.',
      },
    ],
    related: ['ansan-hit-night', 'ilsan-shampoo-night', 'daejeon-one-night'],
    llmsLine: '경기 수원시 권선구 권선로 673 나이트클럽. 저녁 6시~새벽 4시.',
  },
  {
    no: 11,
    slug: 'ansan-hit-night',
    nameA: '안산히트나이트',
    nameB: '안산 히트나이트',
    nameC: '안산 나이트클럽',
    group: 'B',
    addressLocality: '안산시 상록구',
    addressRegion: '경기도',
    streetAddress: '상록수로 34 (본오동 874)',
    region: '경기 안산시 상록구',
    angle: 1,
    angleName: '정면 소개형',
    suffix: '자리가 말해주는 것',
    title: '안산히트나이트 자리가 말해주는 것 상록수역 앞 홀',
    description:
      '안산히트나이트가 어떤 홀인지 자리 구조로 설명합니다. 상록수로 34 상록수아카데미타워 지층, 상록수역 앞이라는 위치가 손님층에 어떻게 작용하는지 담았습니다.',
    ogAlt: '안산히트나이트 경기 안산 상록구 상록수역 앞 홀 안내 카드',
    ogBg: '#4A1E6B',
    ogRegion: '경기 안산 상록구',
    answerLine: '상록수로 34, 본오동 874 상록수아카데미타워 지층에 있고 4호선 상록수역에서 걸어서 닿습니다',
    facts: [
      { label: '주소', value: '경기도 안산시 상록구 상록수로 34 (본오동 874) 상록수아카데미타워 지층' },
      { label: '가장 가까운 역', value: '4호선 상록수역 인근' },
      { label: '업종', value: '관광 나이트클럽' },
      { label: '예약', value: '전화 사전 예약 가능' },
    ],
    faqs: [
      {
        q: '안산히트나이트는 어떤 곳인가요',
        a: '상록수역 앞에 자리한 관광 나이트클럽입니다. 역에서 가까워 퇴근길에 그대로 들르기 좋습니다.',
      },
      {
        q: '안산히트나이트 위치가 어디인가요',
        a: '경기도 안산시 상록구 상록수로 34, 상록수아카데미타워 지층입니다. 상록수역 인근입니다.',
      },
      {
        q: '홀 자리는 어떻게 나뉘나요',
        a: '보통 무대 앞과 통로 쪽, 가장자리로 나뉩니다. 어디에 앉느냐로 밤의 성격이 갈립니다.',
      },
      {
        q: '어느 자리가 좋은가요',
        a: '사람을 보려면 통로 쪽, 대화를 하려면 가장자리가 낫습니다. 무대 앞은 소리가 가장 큽니다.',
      },
      {
        q: '몇 시부터 사람이 차나요',
        a: '나이트는 대체로 열 시를 넘기며 두꺼워집니다. 그 전에 들어가면 자리 선택 폭이 넓습니다.',
      },
      {
        q: '안산히트나이트 예약은 어떻게 하나요',
        a: '전화로 미리 잡을 수 있습니다. 인원과 도착 시간을 말해 두면 자리를 맞춰 둡니다.',
      },
    ],
    related: ['suwon-chance-dome-night', 'ilsan-shampoo-night', 'sillim-grandprix-night'],
    llmsLine: '경기 안산시 상록구 상록수로 34 상록수아카데미타워 지층 관광 나이트클럽.',
  },
  {
    no: 12,
    slug: 'daejeon-seven-night',
    nameA: '대전세븐나이트',
    nameB: '대전 세븐나이트',
    nameC: '대전 나이트클럽',
    group: 'A',
    contact: { nick: '영탁', display: '010-7770-0869', href: 'tel:01077700869', e164: '+82-10-7770-0869' },
    ogV: '-v2',
    addressLocality: '중구',
    addressRegion: '대전광역시',
    streetAddress: '당디로 112 (유천동 332-28)',
    region: '대전 중구 유천동',
    angle: 2,
    angleName: '질문 던지기형',
    suffix: '혼자 가도 될까',
    title: '대전세븐나이트 혼자 가도 될까 유천동 별실 구조',
    description:
      '대전세븐나이트에 혼자 가도 되는지 묻는 사람이 많습니다. 당디로 112 메인 홀과 별실이 나뉜 구조가 그 답에 어떻게 작용하는지 짚었습니다.',
    ogAlt: '대전세븐나이트 대전 중구 유천동 당디로 메인 홀 안내 카드',
    ogBg: '#1B3A6B',
    ogRegion: '대전 중구 유천동',
    answerLine: '당디로 112, 유천동 332-28 2층과 3층을 쓰며 메인 홀과 별실이 따로 나뉘어 있습니다',
    facts: [
      { label: '주소', value: '대전광역시 중구 당디로 112 (유천동 332-28), 2·3층' },
      { label: '구조', value: '메인 홀과 별실이 따로 나뉜 구성' },
      { label: '무대', value: '밴드와 디제이가 번갈아 무대에 오름' },
      { label: '예약', value: '전화·에스엔에스 사전 예약. 당일 예약도 가능' },
      { label: '업종', value: '나이트클럽 · 유흥주점' },
    ],
    faqs: [
      {
        q: '대전세븐나이트 혼자 가도 되나요',
        a: '됩니다. 웨이터가 자리와 합석을 정리해 주기 때문에 혼자 온 손님도 드물지 않습니다.',
      },
      {
        q: '대전세븐나이트 위치가 어디인가요',
        a: '대전광역시 중구 당디로 112, 유천동 332-28입니다. 건물 2층과 3층을 함께 씁니다.',
      },
      {
        q: '메인 홀과 별실은 뭐가 다른가요',
        a: '메인 홀은 무대 소리를 그대로 받고, 별실은 한 겹 떨어져 있어 대화하기가 수월합니다.',
      },
      {
        q: '무대에서는 뭘 하나요',
        a: '밴드와 디제이가 번갈아 오릅니다. 밴드 시간에는 분위기가 한결 느리게 흘러갑니다.',
      },
      {
        q: '당일 예약도 되나요',
        a: '가능한 편입니다. 다만 금요일과 토요일은 자리가 빨리 나가니 일찍 걸어 두는 편이 낫습니다.',
      },
      {
        q: '어떤 사람들이 오나요',
        a: '밴드와 디제이가 섞이는 구성이라 나이대가 넓게 모입니다. 특정 연령만 오는 곳은 아닙니다.',
      },
    ],
    related: ['daejeon-one-night', 'suwon-chance-dome-night', 'busan-asiad-night'],
    llmsLine: '대전 중구 당디로 112 유천동 나이트클럽. 메인 홀과 별실 구성, 밴드·디제이 교대 무대.',
  },
  {
    no: 13,
    slug: 'ilsan-shampoo-night',
    nameA: '일산샴푸나이트',
    nameB: '일산 샴푸나이트',
    nameC: '일산 나이트클럽',
    group: 'B',
    addressLocality: '고양시 일산동구',
    addressRegion: '경기도',
    streetAddress: '중앙로 1160 (마두동 805-1)',
    region: '경기 고양시 일산동구 마두동',
    angle: 3,
    angleName: '장면 묘사형',
    suffix: '문 닫기 직전 풍경',
    title: '일산샴푸나이트 문 닫기 직전 풍경 마두역 8번 출구',
    description:
      '일산샴푸나이트의 마지막 한 시간을 장면으로 옮겼습니다. 중앙로 1160 오원빌딩 중앙 홀의 조명이 어떻게 바뀌고 사람이 어떻게 빠지는지 적었습니다.',
    ogAlt: '일산샴푸나이트 경기 고양 일산동구 마두역 인근 홀 안내 카드',
    ogBg: '#6B1436',
    ogRegion: '경기 고양 일산동구',
    answerLine: '중앙로 1160, 마두동 805-1 오원빌딩에 있고 3호선 마두역 8번 출구에서 100미터쯤 떨어져 있습니다',
    facts: [
      { label: '주소', value: '경기도 고양시 일산동구 중앙로 1160 (마두동 805-1) 오원빌딩' },
      { label: '가장 가까운 역', value: '3호선 마두역 8번 출구에서 약 100미터' },
      { label: '좌석 구성', value: '중앙 홀 · 부킹룸 · 부스' },
      { label: '예약', value: '전화·공식 에스엔에스로 사전 문의' },
      { label: '업종', value: '나이트클럽' },
    ],
    faqs: [
      {
        q: '일산샴푸나이트 마지막 시간대는 어떤가요',
        a: '보통 마지막 한 시간은 곡이 느려집니다. 조명이 낮아지고 사람이 조금씩 빠져나갑니다.',
      },
      {
        q: '일산샴푸나이트 위치가 어디인가요',
        a: '경기도 고양시 일산동구 중앙로 1160, 마두동 805-1 오원빌딩입니다. 마두역 바로 앞입니다.',
      },
      {
        q: '마두역에서 얼마나 걸리나요',
        a: '3호선 마두역 8번 출구에서 100미터쯤입니다. 걸어서 몇 분이면 닿는 거리입니다.',
      },
      {
        q: '좌석은 어떻게 나뉘나요',
        a: '중앙 홀과 부킹룸, 부스로 나뉩니다. 무대와의 거리에 따라 받는 소리가 달라집니다.',
      },
      {
        q: '음악은 밤새 어떻게 바뀌나요',
        a: '대체로 초반에는 무난한 곡, 절정에는 빠른 곡, 끝 무렵에는 느린 곡으로 이어집니다.',
      },
      {
        q: '일산샴푸나이트 예약은 어떻게 하나요',
        a: '전화나 공식 계정으로 미리 문의하면 됩니다. 인원과 도착 시간을 말해 두는 편이 좋습니다.',
      },
    ],
    related: ['suyu-shampoo-night', 'sangbong-hangukgwan-night', 'ansan-hit-night'],
    llmsLine: '경기 고양시 일산동구 중앙로 1160 오원빌딩 나이트클럽. 마두역 8번 출구 인근.',
  },
];

export const bySlug = (slug: string): NightVenue => {
  const v = VENUES.find((x) => x.slug === slug);
  if (!v) throw new Error(`unknown night slug: ${slug}`);
  return v;
};

/* ★ 2026-08-26 대표님 확정 — 메인주소 바로 뒤에 이름. 중간에 /night/ 를 넣지 않는다.
 *   루트에 같은 이름이 이미 있으면 뒤에 숫자를 붙여 둔다(아래 이름표). */
const NIGHT_URL_MAP: Record<string, string> = {
  "ansan-hit-night": "ansan-hit-night-1",
  "ansan-night": "ansan-night",
  "bulgwang-hobak-night": "bulgwang-hobak-night",
  "busan-asiad-night": "busan-asiad-night-1",
  "busan-night": "busan-night",
  "changwon-lululala-night": "changwon-lululala-night",
  "changwon-night": "changwon-night",
  "cheongdam-night": "cheongdam-night-1",
  "daejeon-night": "daejeon-night",
  "daejeon-one-night": "daejeon-one-night-1",
  "daejeon-seven-night": "daejeon-seven-night-1",
  "eunpyeong-night": "eunpyeong-night",
  "gangnam-night": "gangnam-night",
  "ilsan-night": "ilsan-night",
  "ilsan-shampoo-night": "ilsan-shampoo-night-1",
  "index": "index-1",
  "sangbong-hangukgwan-night": "sangbong-hangukgwan-night-1",
  "sangbong-night": "sangbong-night",
  "sillim-grandprix-night": "sillim-grandprix-night-1",
  "sillim-night": "sillim-night",
  "suwon-chance-dome-night": "suwon-chance-dome-night-1",
  "suwon-night": "suwon-night",
  "suyu-night": "suyu-night",
  "suyu-shampoo-night": "suyu-shampoo-night-1",
  "ulsan-champion-night": "ulsan-champion-night",
  "ulsan-night": "ulsan-night",
  "yucheon-night": "yucheon-night",
};
/* ★ 2026-08-31 — 업소 페이지의 실제 주소는 /info/<slug>/ 다 (pages/info/<slug>.tsx).
   이 함수가 /<slug> 를 내주어 canonical·내부링크·JSON-LD 가 전부 404 를 가리켰다.
   같은 사고가 lib/area.ts 에도 있었다. 끝 슬래시는 trailingSlash: true 와 맞춘다. */
export const nightPath = (slug: string) => `/info/${NIGHT_URL_MAP[slug] ?? slug}/`;

const SITE = 'https://onec-9bc.pages.dev';
const PATH = '/bulgwangdong-hobak-night';
const TEL = '+82-10-2221-1937';

/**
 * 불광동호박나이트 전용 구조화 데이터.
 *
 * ⚠️ 불광동호박나이트는 대전원나이트와 별개 가게입니다. 대전원나이트의 입장 정책(38세 이상),
 * 여성 손님 혜택(차비 3만원 + 맥주), 영업 시간을 여기에 넣지 마세요.
 * 영업 시간·입장 기준·혜택은 사장님 확인 전까지 비워 둡니다 (허위 구조화 데이터 방지).
 *
 * AEO/GEO(AI 검색 인용) 대응: NightClub + FAQPage + BreadcrumbList.
 */
export default function HobakSchema() {
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'NightClub',
        '@id': `${SITE}${PATH}#nightclub`,
        name: '불광동호박나이트',
        alternateName: ['불광동 호박나이트', '호박나이트', '불광호박나이트', '은평구 호박나이트'],
        url: `${SITE}${PATH}`,
        telephone: TEL,
        address: {
          '@type': 'PostalAddress',
          streetAddress: '불광동',
          addressLocality: '은평구',
          addressRegion: '서울특별시',
          addressCountry: 'KR',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 37.6106,
          longitude: 126.9296,
        },
        hasMap: 'https://map.naver.com/v5/search/불광동호박나이트',
        areaServed: ['불광동', '은평구', '서울특별시', '고양시', '일산', '구파발', '연신내'],
        acceptsReservations: true,
        image: `${SITE}/og/bulgwangdong-hobak-night.png`,
        description:
          '서울 은평구 불광동에 있는 호박나이트. 지하철 3호선·6호선 불광역 인근. 예약·룸·단체 모임 문의 손흥민 010-2221-1937.',
      },
      {
        '@type': 'WebPage',
        '@id': `${SITE}${PATH}#page`,
        name: '불광동호박나이트',
        url: `${SITE}${PATH}`,
        about: { '@id': `${SITE}${PATH}#nightclub` },
        inLanguage: 'ko-KR',
        datePublished: '2026-08-14T00:00:00+09:00',
        dateModified: '2026-08-14T00:00:00+09:00',
        primaryImageOfPage: `${SITE}/og/bulgwangdong-hobak-night.png`,
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${SITE}${PATH}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: '불광동호박나이트', item: `${SITE}${PATH}` },
        ],
      },
    ],
  };

  // AI 검색(AEO/GEO)이 그대로 인용할 수 있도록 질문-답변을 짧고 사실 위주로 작성
  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${SITE}${PATH}#faq`,
    mainEntity: [
      {
        '@type': 'Question',
        name: '불광동호박나이트는 어디에 있나요?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '서울특별시 은평구 불광동에 있습니다. 지하철 3호선·6호선 불광역에서 도보로 이동할 수 있고, 연신내·구파발에서도 가깝습니다. 자세한 위치는 손흥민 010-2221-1937로 문의하세요.',
        },
      },
      {
        '@type': 'Question',
        name: '불광동호박나이트 예약 전화번호는?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '예약 담당 손흥민 010-2221-1937입니다. 화면 하단 고정 전화바를 눌러도 바로 연결됩니다.',
        },
      },
      {
        '@type': 'Question',
        name: '불광동호박나이트 예약은 어떻게 하나요?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '전화 한 통이면 예약·룸·단체 모임·길안내까지 안내해 드립니다. 손흥민 010-2221-1937.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </>
  );
}

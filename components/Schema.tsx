const SITE = 'https://one-5ei.pages.dev';

type SchemaProps = {
  path?: string;
  crumb?: string;
  pageType?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'FAQPage' | 'CollectionPage';
  pageName?: string;
};

export default function Schema({
  path = '/',
  crumb = '홈',
  pageType = 'WebPage',
  pageName,
}: SchemaProps) {
  const mainSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${SITE}/#website`,
        name: '대전원나이트 까치',
        url: `${SITE}/`,
        inLanguage: 'ko-KR',
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${SITE}/?q={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'NightClub',
        '@id': `${SITE}/#nightclub`,
        name: '대전원나이트 까치',
        url: `${SITE}/`,
        telephone: '+82-10-3918-9414',
        address: {
          '@type': 'PostalAddress',
          addressLocality: '대전광역시',
          addressRegion: '대전',
          addressCountry: 'KR',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 36.3504,
          longitude: 127.3845,
        },
        hasMap: 'https://map.naver.com/v5/search/대전원나이트%20까치',
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
            opens: '20:00',
            closes: '02:30',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Friday', 'Saturday'],
            opens: '20:00',
            closes: '03:30',
          },
        ],
        acceptsReservations: true,
        image: `${SITE}/og/og-search-thumb.png`,
        description:
          '38세 이상 입장. 10시 이전 여성 손님 2가지 모두 받습니다 (차비 3만원 + 맥주 서비스).',
        areaServed: ['대전', '충남', '청주', '세종'],
      },
      {
        '@type': 'LocalBusiness',
        '@id': `${SITE}/#localbusiness`,
        name: '대전원나이트 까치',
        telephone: '+82-10-3918-9414',
        url: `${SITE}/`,
        priceRange: '₩₩',
        openingHours: ['Su-Th 20:00-02:30', 'Fr-Sa 20:00-03:30'],
        image: `${SITE}/og/og-search-thumb.png`,
        address: {
          '@type': 'PostalAddress',
          addressLocality: '대전광역시',
          addressRegion: '대전',
          addressCountry: 'KR',
        },
      },
      {
        '@type': 'Organization',
        '@id': `${SITE}/#org`,
        name: '대전원나이트 까치',
        url: `${SITE}/`,
        logo: {
          '@type': 'ImageObject',
          url: `${SITE}/icons/icon-512.png`,
          width: 512,
          height: 512,
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+82-10-3918-9414',
          contactType: 'reservations',
          areaServed: 'KR',
          availableLanguage: 'Korean',
        },
      },
      {
        '@type': 'Person',
        '@id': `${SITE}/#person`,
        name: '까치',
        jobTitle: '웨이터',
        telephone: '+82-10-3918-9414',
        worksFor: { '@id': `${SITE}/#org` },
      },
      {
        '@type': 'ImageObject',
        '@id': `${SITE}/#image`,
        url: `${SITE}/og/og-search-thumb.png`,
        width: 1080,
        height: 1080,
        caption: '대전원나이트 까치 — 38세 이상 + 여성 손님 2가지 혜택',
      },
      {
        '@type': pageType,
        '@id': `${SITE}${path}#page`,
        name: pageName || crumb,
        url: `${SITE}${path}`,
        isPartOf: { '@id': `${SITE}/#website` },
        about: { '@id': `${SITE}/#nightclub` },
        inLanguage: 'ko-KR',
        datePublished: '2026-05-21T00:00:00+09:00',
        dateModified: '2026-05-21T00:00:00+09:00',
        primaryImageOfPage: `${SITE}/og/og-search-thumb.png`,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: '홈', item: `${SITE}/` },
          ...(path !== '/'
            ? [{ '@type': 'ListItem', position: 2, name: crumb, item: `${SITE}${path}` }]
            : []),
        ],
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '입장 가능 연령은?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '38세 이상부터 입장 가능. 신분증 필수.',
        },
      },
      {
        '@type': 'Question',
        name: '10시 이전 입장 여성 손님 혜택은?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '10시 이전 입장 여성 손님께는 2가지 모두 제공합니다. 한 가지가 아니라 둘 다 받습니다. ① 차비 3만원 지급. ② 맥주 기본 서비스.',
        },
      },
      {
        '@type': 'Question',
        name: '영업 시간은?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '평일(일~목) 20:00 ~ 02:30, 주말(금·토) 20:00 ~ 03:30.',
        },
      },
      {
        '@type': 'Question',
        name: '예약은?',
        acceptedAnswer: { '@type': 'Answer', text: '까치 010-3918-9414 전화 예약 권장.' },
      },
      {
        '@type': 'Question',
        name: '위치는?',
        acceptedAnswer: { '@type': 'Answer', text: '대전광역시. 자세한 위치는 전화 문의.' },
      },
      {
        '@type': 'Question',
        name: '드레스코드?',
        acceptedAnswer: { '@type': 'Answer', text: '깔끔한 캐주얼 권장. 슬리퍼·반바지 제한.' },
      },
      {
        '@type': 'Question',
        name: '주차?',
        acceptedAnswer: { '@type': 'Answer', text: '주변 공영주차장 이용.' },
      },
      {
        '@type': 'Question',
        name: '카드 결제?',
        acceptedAnswer: { '@type': 'Answer', text: '가능합니다.' },
      },
      {
        '@type': 'Question',
        name: 'VIP 룸?',
        acceptedAnswer: { '@type': 'Answer', text: '예약 가능. 까치 문의.' },
      },
      {
        '@type': 'Question',
        name: '단체 모임?',
        acceptedAnswer: { '@type': 'Answer', text: '5인 이상 예약 권장.' },
      },
      {
        '@type': 'Question',
        name: '청주에서 가는 법?',
        acceptedAnswer: { '@type': 'Answer', text: '자차 약 30분.' },
      },
      {
        '@type': 'Question',
        name: '신분증 필수?',
        acceptedAnswer: { '@type': 'Answer', text: '예 38세 이상 확인용 필수.' },
      },
    ],
  };

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: '대전원나이트 까치 첫 방문 가이드',
    totalTime: 'PT5M',
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'KRW',
      value: '30000',
    },
    step: [
      { '@type': 'HowToStep', position: 1, name: '신분증', text: '38세 이상 신분증 준비' },
      {
        '@type': 'HowToStep',
        position: 2,
        name: '시간',
        text: '여성 손님은 10시 이전 입장 (차비 3만원 + 맥주 둘 다 받음)',
      },
      { '@type': 'HowToStep', position: 3, name: '드레스코드', text: '깔끔한 캐주얼 옷차림' },
      { '@type': 'HowToStep', position: 4, name: '예약', text: '까치 010-3918-9414 전화 예약' },
      { '@type': 'HowToStep', position: 5, name: '주차', text: '주변 공영주차장 이용' },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mainSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
    </>
  );
}

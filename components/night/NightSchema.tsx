import { NightVenue, SITE, nightPath } from '@/lib/night';

/**
 * /night/* 전용 구조화 데이터 3종 — NightClub / FAQPage / BreadcrumbList.
 *
 * ⚠️ 확인되지 않은 필드는 아예 넣지 않습니다 (허위 구조화 데이터 방지).
 *    - telephone: A그룹(광고주 있음)만
 *    - openingHoursSpecification: 웹 실사로 확인된 업소만
 *    - typicalAgeRange: 창원룰루랄라나이트 / 대전원나이트 2곳만, "만 27세 이상" 형태 완전문
 */
export default function NightSchema({ venue }: { venue: NightVenue }) {
  const url = `${SITE}${nightPath(venue.slug)}`;
  const image = `${SITE}/og/${venue.slug}-og${venue.ogV ?? ""}.png`;

  const nightClub: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'NightClub',
    '@id': `${url}#nightclub`,
    name: venue.nameA,
    alternateName: [venue.nameB, venue.nameC],
    url,
    image,
    description: venue.description,
    address: {
      '@type': 'PostalAddress',
      ...(venue.streetAddress ? { streetAddress: venue.streetAddress } : {}),
      addressLocality: venue.addressLocality,
      addressRegion: venue.addressRegion,
      addressCountry: 'KR',
    },
  };
  if (venue.group === 'A' && venue.contact) nightClub.telephone = venue.contact.e164;
  if (venue.openingHours) {
    nightClub.openingHoursSpecification = venue.openingHours.spec.map((s) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: s.days,
      opens: s.opens,
      closes: s.closes,
    }));
  }
  if (venue.ageFull) nightClub.typicalAgeRange = venue.ageFull;

  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    mainEntity: venue.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const crumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${url}#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '나이트', item: `${SITE}/night` },
      { '@type': 'ListItem', position: 2, name: venue.nameA, item: url },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(nightClub) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
    </>
  );
}

import { PickVenue, SITE, pickPath } from '@/lib/pick';

/**
 * /pick/* 구조화 데이터 3종 — NightClub / FAQPage / BreadcrumbList.
 *
 * ⚠️ 확인되지 않은 필드는 아예 넣지 않습니다 (허위 구조화 데이터 방지).
 *    - telephone: 광고주 3곳만
 *    - address: 웹 실사로 확인된 곳만. 확인 불가면 country 만 남깁니다.
 *    - openingHoursSpecification: 확인된 곳만
 *    - typicalAgeRange: "만 27세 이상" / "만 38세 이상" 완전문만
 */
export default function PickSchema({ venue }: { venue: PickVenue }) {
  const url = `${SITE}${pickPath(venue.slug)}`;
  const image = `${SITE}/og/pick-${venue.slug}.png`;

  const address: Record<string, unknown> = { '@type': 'PostalAddress', addressCountry: 'KR' };
  if (venue.streetAddress) address.streetAddress = venue.streetAddress;
  if (venue.addressLocality) address.addressLocality = venue.addressLocality;
  if (venue.addressRegion) address.addressRegion = venue.addressRegion;

  const nightClub: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'NightClub',
    '@id': `${url}#nightclub`,
    name: venue.nameA,
    alternateName: [venue.nameB, venue.nameC, ...(venue.alt || [])],
    url,
    image,
    description: venue.description,
    address,
  };
  if (venue.contact) nightClub.telephone = venue.contact.e164;
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
      { '@type': 'ListItem', position: 1, name: '전국 나이트 고르기 40', item: `${SITE}/pick` },
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

import { Area, SITE, areaPath } from '@/lib/area';
import { bySlug, nightPath } from '@/lib/night';

/**
 * 지역 안내 페이지용 구조화 데이터 3종 — Article / FAQPage / BreadcrumbList.
 *
 * ⚠️ 이 페이지는 특정 업소가 아니라 지역 안내이므로 NightClub 대신 Article 을 씁니다.
 *    추천 업소는 mentions 로 name·url 만 넣습니다.
 * ⚠️ 연령 값은 "만 27세 이상" / "만 38세 이상" 완전문 문자열로만 넣습니다.
 */
const PUBLISHED = '2026-08-15';

export default function AreaSchema({ area }: { area: Area }) {
  const url = `${SITE}${areaPath(area.slug)}`;
  const image = `${SITE}/og/${area.slug}-og.png`;
  const venue = bySlug(area.venueSlug);

  const article: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}#article`,
    headline: area.title,
    description: area.description,
    inLanguage: 'ko-KR',
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    url,
    image,
    about: { '@type': 'Place', name: area.region },
    keywords: [area.kwA, area.kwB, area.kwC].join(', '),
    mentions: [{ '@type': 'NightClub', name: venue.nameA, url: `${SITE}${nightPath(venue.slug)}` }],
  };
  if (area.ageFull) article.audience = { '@type': 'Audience', suggestedMinAge: area.ageFull };

  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    mainEntity: area.faqs.map((f) => ({
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
      { '@type': 'ListItem', position: 1, name: '홈', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: '나이트', item: `${SITE}/night` },
      { '@type': 'ListItem', position: 3, name: area.kwA, item: url },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
    </>
  );
}

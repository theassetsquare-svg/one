import type { GetStaticPaths, GetStaticProps } from 'next';
import PickSEO from '@/components/pick/PickSEO';
import PickSchema from '@/components/pick/PickSchema';
import PickLayout from '@/components/pick/PickLayout';
import {
  AnswerBox,
  Crumb,
  FactTable,
  Faq,
  OneLine,
  RelatedPicks,
  Section,
  Verdict,
} from '@/components/pick/PickParts';
import { VENUES, bySlug, pickPath } from '@/lib/pick';

/**
 * 40개 업소 "고르는 기준" 페이지.
 * 구조: ①도입 ②핵심 3줄 ③사실 표 ④기준 소제목 4~6개(질문형 H2 2개+, 체크리스트) ⑤제목의 답
 *       ⑥FAQ 3 ⑦한 줄 정리
 * 산출물은 postbuild(scripts/pick-dirify.js)에서 /pick/{slug}/index.html 로 옮깁니다.
 */
export default function PickPage({ slug }: { slug: string }) {
  const venue = bySlug(slug);
  const footerLines = [venue.nameA, venue.region];
  if (venue.openingHours) footerLines.push(venue.openingHours.humanText);
  if (venue.ageFull) footerLines.push(`출입 ${venue.ageFull}`);

  const keywords = [
    venue.nameA,
    venue.nameB,
    venue.nameC,
    ...(venue.alt || []),
    `${venue.nameA} 위치`,
    `${venue.nameA} 주소`,
    `${venue.nameA} 기준`,
  ];

  return (
    <>
      <PickSEO
        title={venue.title}
        description={venue.description}
        path={pickPath(venue.slug)}
        image={`/og/pick-${venue.slug}.png`}
        imageAlt={venue.ogAlt}
        keywords={keywords}
      />
      <PickSchema venue={venue} />
      <PickLayout contact={venue.contact} footerLines={footerLines}>
        <Crumb venue={venue} />
        <article>
          <header className="pk-hero">
            <span className="pk-eyebrow">고르는 기준 · {venue.region}</span>
            <h1>{venue.title}</h1>
            <p>{venue.axis}</p>
          </header>

          <div className="pk-wrap">
            {/* ① 도입 — 답은 맨 끝에 있습니다 */}
            <p className="pk-lead">{venue.lead}</p>

            <AnswerBox venue={venue} />
            <FactTable venue={venue} />

            {venue.sections.map((s) => (
              <Section key={s.id} sec={s} />
            ))}

            <Verdict venue={venue} />
            <Faq venue={venue} />
            <OneLine venue={venue} />
          </div>
        </article>
        <RelatedPicks venue={venue} />
      </PickLayout>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: VENUES.map((v) => ({ params: { slug: v.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => ({
  props: { slug: String(params?.slug) },
});

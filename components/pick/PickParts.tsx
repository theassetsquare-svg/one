import PageThumb from '../PageThumb';
import { AD_KAKAO, PickSection, PickVenue, VENUES, pickPath } from '@/lib/pick';

/* ★★ 2026-08-30 — 아래 문구들이 40쪽에 글자 그대로 박혀 있어 유사문서로 걸렸다.
   (실측: c/info 두 쪽 문장 겹침 15%) 가게 주소로 문구를 골라 쪽마다 달라지게 한다.
   뜻은 그대로 두고 표현만 바꾼다. 사실은 건드리지 않는다. */
function pickBy<T>(slug: string, arr: readonly T[]): T {
  let h = 2166136261;
  for (let i = 0; i < slug.length; i += 1) {
    h ^= slug.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return arr[(h >>> 0) % arr.length];
}
const CAPTION = [
  '웹에서 확인한 항목입니다 (미확인은 확인 불가로 둡니다)',
  '공개 자료로 교차 확인한 값만 적었습니다',
  '확인된 항목만 표에 올렸습니다 (나머지는 확인 불가)',
  '아래는 공개된 자료에서 확인한 내용입니다',
  '확인 가능한 항목을 모았습니다 (못 찾은 것은 확인 불가)',
  '웹 자료로 대조한 항목만 실었습니다',
  '확인되지 않은 값은 비워 두었습니다',
  '공개 정보로 확인한 범위만 정리했습니다',
];
const AD_NOTE = [
  '이곳 광고·제휴 입점 문의는 카카오톡 %K% 로 받습니다. 손님 예약 창구가 아닙니다.',
  '광고와 제휴 상담은 카카오톡 %K% 입니다. 방문 예약을 받는 곳이 아닙니다.',
  '입점·광고 문의만 카카오톡 %K% 로 받고 있습니다. 예약 문의는 받지 않습니다.',
  '업소 광고 문의는 카카오톡 %K% 입니다. 손님 예약과는 무관합니다.',
  '제휴·입점 상담 창구는 카카오톡 %K% 입니다. 예약 창구가 아닙니다.',
  '여기 광고를 원하시면 카카오톡 %K% 로 연락 주십시오. 예약 접수처는 아닙니다.',
  '광고 게재 문의는 카카오톡 %K% 에서 받습니다. 손님 예약은 받지 않습니다.',
  '업체 입점 문의만 카카오톡 %K% 로 받습니다. 예약 상담 창구가 아닙니다.',
];
const REL_H2 = [
  '기준이 다른 곳도 함께 보기',
  '다른 축으로 고른 곳들',
  '견줘 볼 만한 다른 곳',
  '고르는 기준이 다른 곳들',
  '나란히 놓고 볼 만한 곳',
  '다른 잣대로 추린 곳들',
  '함께 살펴볼 만한 곳',
  '기준을 달리한 다른 안내',
];
const REL_SUB = [
  '40곳을 선택 축으로 한자리에서 비교',
  '전국 40곳을 기준별로 견줘 봅니다',
  '고르는 축을 나눠 40곳을 정리했습니다',
  '40곳을 축마다 갈라 한눈에 봅니다',
  '선택 기준으로 40곳을 묶어 두었습니다',
  '40곳을 조건별로 나란히 놓았습니다',
  '기준을 정해 40곳을 견줍니다',
  '40곳을 항목별로 갈라 보여 드립니다',
];

export function Crumb({ venue }: { venue: PickVenue }) {
  return (
    <nav className="pk-crumb" aria-label="위치 경로">
      <a href="/pick">전국 나이트 고르기 40</a> › <span>{venue.nameA}</span>
    </nav>
  );
}

/** ② 핵심 3줄 직답 박스 — AI 인용을 노린 블록입니다. */
export function AnswerBox({ venue }: { venue: PickVenue }) {
  return (
    <>
      <div className="pk-answer" id="pk-answer">
        <h2>핵심 3줄</h2>
        <ol>
          {venue.answer3.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ol>
      </div>
      {/* og:image 와 동일한 파일 — 네이버 썸네일 후보로 본문에 실제 노출합니다. */}
      <PageThumb src={`/og/pick-${venue.slug}${venue.ogV ?? ""}.png`} alt={venue.ogAlt} />
    </>
  );
}

/** ③ 사실 표 — 확인된 것만 적고, 확인 안 된 항목은 "확인 불가"로 남깁니다. */
export function FactTable({ venue }: { venue: PickVenue }) {
  return (
    <div className="pk-tblwrap">
      <table className="pk-tbl">
        <caption>{`${venue.nameA} — ${pickBy(venue.slug, CAPTION)}`}</caption>
        <tbody>
          {venue.facts.map((f) => (
            <tr key={f.label}>
              <th scope="row">{f.label}</th>
              <td>{f.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Checklist({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="pk-check">
      <h3>{title}</h3>
      <ul>
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  );
}

/** ④ 기준 소제목 — 질문형 H2 2개 이상, 체크리스트 UI 포함 */
export function Section({ sec }: { sec: PickSection }) {
  return (
    <section className="pk-sec" aria-labelledby={`h2-${sec.id}`} id={`pk-${sec.id}`}>
      <h2 id={`h2-${sec.id}`}>{sec.h2}</h2>
      {sec.paras.map((p) => (
        <p key={p}>{p}</p>
      ))}
      {sec.check ? <Checklist title={sec.check.title} items={sec.check.items} /> : null}
    </section>
  );
}

/** ⑤ 맨 끝, 제목이 던진 질문의 답 */
export function Verdict({ venue }: { venue: PickVenue }) {
  return (
    <section className="pk-verdict" aria-labelledby="h2-verdict" id="pk-verdict">
      <h2 id="h2-verdict">{venue.verdict.h2}</h2>
      {venue.verdict.paras.map((p) => (
        <p key={p}>{p}</p>
      ))}
      {venue.contact ? (
        <p>
          자리와 인원은 {venue.contact.nick} <a href={venue.contact.href}>{venue.contact.display}</a> 로 물어보면
          정리됩니다.
        </p>
      ) : (
        <p>{pickBy(venue.slug, AD_NOTE).replace('%K%', AD_KAKAO)}</p>
      )}
    </section>
  );
}

/** ⑥ FAQ 3 */
export function Faq({ venue }: { venue: PickVenue }) {
  return (
    <section className="pk-sec" aria-labelledby="h2-faq" id="pk-faq">
      <h2 id="h2-faq">{venue.faqH2}</h2>
      {venue.faqs.map((f) => (
        <details className="pk-faq" key={f.q}>
          <summary>{f.q}</summary>
          <p>{f.a}</p>
        </details>
      ))}
    </section>
  );
}

/** ⑦ 한 줄 정리 */
export function OneLine({ venue }: { venue: PickVenue }) {
  return (
    <p className="pk-oneline">
      <span>한 줄 정리</span>
      {venue.oneLine}
    </p>
  );
}

/** 같은 /pick/ 안에서만 링크합니다. */
export function RelatedPicks({ venue }: { venue: PickVenue }) {
  const picks = venue.related
    .map((s) => VENUES.find((v) => v.slug === s))
    .filter(Boolean) as PickVenue[];
  return (
    <nav className="pk-rel" aria-labelledby="pk-rel-h">
      <h2 id="pk-rel-h">{pickBy(venue.slug, REL_H2)}</h2>
      <div className="pk-grid">
        {picks.map((p) => (
          <a key={p.slug} href={pickPath(p.slug)} className="pk-card">
            <h3>{p.nameA}</h3>
            <p>{p.region}</p>
            <span className="pk-axis">{p.axis}</span>
          </a>
        ))}
        <a href="/pick" className="pk-card">
          <h3>전국 나이트 고르기 40</h3>
          <p>{pickBy(venue.slug, REL_SUB)}</p>
          <span className="pk-axis">허브 페이지로 이동</span>
        </a>
      </div>
    </nav>
  );
}

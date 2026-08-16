import { AD_KAKAO, PickSection, PickVenue, VENUES, pickPath } from '@/lib/pick';

export function Crumb({ venue }: { venue: PickVenue }) {
  return (
    <nav className="pk-crumb" aria-label="위치 경로">
      <a href="/">홈</a> › <a href="/pick/">전국 나이트 고르기 40</a> › <span>{venue.nameA}</span>
    </nav>
  );
}

/** ② 핵심 3줄 직답 박스 — AI 인용을 노린 블록입니다. */
export function AnswerBox({ venue }: { venue: PickVenue }) {
  return (
    <div className="pk-answer" id="pk-answer">
      <h2>핵심 3줄</h2>
      <ol>
        {venue.answer3.map((a) => (
          <li key={a}>{a}</li>
        ))}
      </ol>
    </div>
  );
}

/** ③ 사실 표 — 확인된 것만 적고, 확인 안 된 항목은 "확인 불가"로 남깁니다. */
export function FactTable({ venue }: { venue: PickVenue }) {
  return (
    <div className="pk-tblwrap">
      <table className="pk-tbl">
        <caption>{venue.nameA} — 웹에서 확인한 항목 (미확인은 확인 불가)</caption>
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
        <p>
          이 업소의 광고·제휴 입점 문의는 카카오톡 {AD_KAKAO} 로 받습니다. 손님 예약 창구가 아닙니다.
        </p>
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
    <aside className="pk-rel" aria-labelledby="pk-rel-h">
      <h2 id="pk-rel-h">기준이 다른 곳도 함께 보기</h2>
      <div className="pk-grid">
        {picks.map((p) => (
          <a key={p.slug} href={pickPath(p.slug)} className="pk-card">
            <h3>{p.nameA}</h3>
            <p>{p.region}</p>
            <span className="pk-axis">{p.axis}</span>
          </a>
        ))}
        <a href="/pick/" className="pk-card">
          <h3>전국 나이트 고르기 40</h3>
          <p>40곳을 선택 축으로 한자리에서 비교</p>
          <span className="pk-axis">허브 페이지로 이동</span>
        </a>
      </div>
    </aside>
  );
}

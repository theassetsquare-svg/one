import PageThumb from '../PageThumb';
import { AD_KAKAO, NightVenue, VENUES, nightPath } from '@/lib/night';

/** [14] AI 인용 블록. 두 번째 문장은 13개 페이지 전부 다릅니다. */
export function AnswerBox({ venue }: { venue: NightVenue }) {
  return (
    <>
      <div className="answer-box" id="nb-answer">
        <p>
          <strong>{venue.nameA}</strong>은(는) {venue.region}에 있는 나이트클럽입니다. {venue.answerLine}.
          {venue.ageFull ? ` 출입은 ${venue.ageFull}만 가능합니다.` : ''}
        </p>
      </div>
      {/* og:image 와 동일한 파일 — 네이버 썸네일 후보로 본문에 실제 노출합니다. */}
      <PageThumb src={`/og/${venue.slug}-og.png`} alt={venue.ogAlt} />
    </>
  );
}

/** 웹 실사로 확인된 항목만 표로. 확인 안 된 항목은 애초에 데이터에 없습니다. */
export function FactTable({ venue }: { venue: NightVenue }) {
  return (
    <div className="nb-wrap">
      <table className="nb-tbl">
        <caption>{venue.nameA} 확인된 정보</caption>
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

/** 마무리 CTA. A그룹은 담당자 이름·번호를 본문 마지막에도 한 번 더 노출합니다. */
export function ClosingCta({ venue }: { venue: NightVenue }) {
  if (venue.group === 'A' && venue.contact) {
    return (
      <div className="nb-cta">
        <p>{venue.nameA} 자리 문의는 전화 한 통이면 정리됩니다.</p>
        <a href={venue.contact.href} className="nb-num">
          {venue.contact.nick} {venue.contact.display}
        </a>
      </div>
    );
  }
  return (
    <div className="nb-cta">
      <p>{venue.nameA} 자리와 인원은 방문 전에 미리 맞춰 두는 편이 좋습니다.</p>
      <p>
        업소 광고·제휴 입점 문의는 카톡 <b className="nb-num">{AD_KAKAO}</b> 로 받습니다. 손님 예약 창구가 아닙니다.
      </p>
    </div>
  );
}

/** 같은 /night/ 안에서만 링크합니다. 외부 아웃바운드 0개. */
export function RelatedNights({ venue }: { venue: NightVenue }) {
  const picks = venue.related.map((s) => VENUES.find((v) => v.slug === s)).filter(Boolean) as NightVenue[];
  return (
    <aside aria-labelledby="nb-rel-h" className="related">
      <h2 id="nb-rel-h">함께 보면 좋은 나이트</h2>
      <div className="bento">
        {picks.map((p) => (
          <a key={p.slug} href={nightPath(p.slug)} className="bic">
            <h3>{p.nameA}</h3>
            <p>{p.region}</p>
          </a>
        ))}
        <a href="/night/" className="bic">
          <h3>나이트 전체 목록</h3>
          <p>13곳 한자리에서 비교</p>
        </a>
      </div>
      <p className="nb-next">{venue.nameA} 안내는 여기까지입니다. 남은 건 전화 한 통뿐입니다.</p>
    </aside>
  );
}

export function Crumb({ venue }: { venue: NightVenue }) {
  return (
    <nav className="nb-crumb" aria-label="위치 경로">
      <a href="/">홈</a> › <a href="/night/">나이트</a> › <span>{venue.nameA}</span>
    </nav>
  );
}

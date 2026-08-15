import { AD_KAKAO, Area, AREAS, areaPath } from '@/lib/area';
import { bySlug, nightPath } from '@/lib/night';

/**
 * 지역 키워드 페이지 공용 렌더러.
 *
 * 고정 전화바:
 *  - A그룹: 담당자 닉네임 + 전화번호만. besta12 한 글자도 넣지 않습니다.
 *  - B그룹: 광고·제휴 입점 문의 카톡 besta12 (업소 사장님 대상 채널).
 *  - .callbar 는 <body> 직계에 가깝게, 조상 래퍼 없이 프래그먼트 최상단에서 렌더합니다.
 *    조상에 transform/filter/perspective/backdrop-filter/will-change/contain 이 있으면
 *    position:fixed 가 그 조상 기준이 되어 함께 움직입니다.
 */
const CSS = `
body{padding-bottom:calc(104px + env(safe-area-inset-bottom,0px))}
#__next{padding-bottom:0}
div.callbar{
  position:fixed; left:0; right:0; bottom:0; z-index:99999;
  display:flex; align-items:center; justify-content:center; gap:12px;
  height:64px; box-sizing:content-box;
  padding:0; padding-bottom:env(safe-area-inset-bottom,0px);
  background:#111; color:#fff; font-weight:800; font-size:18px;
  box-shadow:0 -2px 14px rgba(0,0,0,.35);
  border-top:0;
  transform:translateZ(0); backface-visibility:hidden;
}
div.callbar a{
  color:#fff; text-decoration:none; display:flex; align-items:center; height:100%;
  flex:0 0 auto; background:none; padding:0 8px; font-size:inherit; font-weight:900;
  gap:10px; border-radius:0; box-shadow:none; white-space:nowrap;
}
div.callbar span{display:flex; align-items:center; gap:6px; white-space:nowrap}
div.callbar b{color:#FFD700}
@media(max-width:480px){
  div.callbar{height:60px; font-size:16px}
  body{padding-bottom:calc(100px + env(safe-area-inset-bottom,0px))}
}
@media(max-width:380px){
  div.callbar{font-size:14px}
}
.answer-box{
  background:rgba(255,215,0,0.10); border:1px solid rgba(255,215,0,0.45);
  border-radius:18px; padding:20px 22px; margin:0 auto 8px; max-width:900px;
}
.answer-box p{margin:0; color:#f2f2f2; font-size:clamp(1rem,2.6vw,1.15rem); line-height:1.7}
.answer-box strong{color:#FFD700}
.ar-lead{color:#ddd; max-width:900px; margin:20px auto; line-height:1.85; font-size:clamp(1rem,2.5vw,1.08rem)}
.ar-sec p{color:#ddd; line-height:1.85}
.nb-tbl{width:100%; border-collapse:collapse; margin:8px 0 4px; font-size:clamp(0.92rem,2.4vw,1.02rem)}
.nb-tbl caption{text-align:left; color:#bbb; padding-bottom:10px; font-size:0.95rem}
.nb-tbl th,.nb-tbl td{border:1px solid rgba(255,215,0,0.28); padding:12px 14px; text-align:left; vertical-align:top}
.nb-tbl th{color:#FFD700; background:rgba(255,215,0,0.07); white-space:nowrap; width:34%}
.nb-tbl td{color:#ddd}
.nb-wrap{overflow-x:auto}
.nb-next{color:#FFD700; font-weight:700}
.nb-age{display:inline-block; background:#FFD700; color:#111; font-weight:900; border-radius:999px; padding:6px 16px; margin-bottom:14px}
.nb-crumb{max-width:1200px; margin:0 auto; padding:12px 20px 0; color:#999; font-size:0.88rem}
.nb-crumb a{color:#FFD700}
.nb-hero{padding:clamp(28px,6vw,56px) 20px 8px; text-align:center}
.nb-hero h1{font-size:clamp(1.8rem,6vw,3.4rem); font-weight:900; color:#FFD700; letter-spacing:-0.03em; line-height:1.15; margin-bottom:12px}
.nb-hero p{color:#ccc; font-size:clamp(0.98rem,2.5vw,1.15rem); max-width:760px; margin:0 auto}
.nb-cta{display:block; max-width:900px; margin:8px auto 0; background:#111; border:2px solid #FFD700; border-radius:18px; padding:22px; text-align:center}
.nb-cta p{margin:0 0 8px; color:#ddd}
.nb-cta .nb-num{display:inline-block; color:#FFD700; font-weight:900; font-size:clamp(1.3rem,4.5vw,1.8rem); letter-spacing:0.02em}
.ar-sum{max-width:900px; margin:26px auto 0; background:rgba(255,255,255,0.05); border-left:4px solid #FFD700; border-radius:10px; padding:18px 20px}
.ar-sum h2{font-size:1.15rem; color:#FFD700; margin-bottom:10px}
.ar-sum li{color:#ddd; line-height:1.8; margin-left:18px}
.ad-inquiry{background:#ffd400;color:#111;font-weight:900;font-size:18px;
  padding:16px;text-align:center;border-radius:10px;margin:24px auto;max-width:720px;}
.site-footer{padding:10px 20px 28px; text-align:center}
.site-footer .footer-note{color:#9a9a9a; font-size:0.9rem; line-height:1.7; max-width:720px; margin:6px auto}
.site-footer .footer-note time{color:#bbb}
`;

const MODIFIED = { iso: '2026-08-15', human: '2026년 8월 15일' };

function VenueFacts({ area }: { area: Area }) {
  const venue = bySlug(area.venueSlug);
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
          <tr>
            <th scope="row">업소 상세</th>
            <td>
              <a href={nightPath(venue.slug)}>{venue.nameA} 안내 페이지</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function Cta({ area }: { area: Area }) {
  const venue = bySlug(area.venueSlug);
  if (area.group === 'A' && area.contact) {
    return (
      <div className="nb-cta">
        <p>
          {area.kwA} 자리 문의는 <a href={nightPath(venue.slug)}>{venue.nameA}</a> 담당자에게 바로 연결됩니다.
        </p>
        <a href={area.contact.href} className="nb-num">
          {area.contact.nick} {area.contact.display}
        </a>
      </div>
    );
  }
  return (
    <div className="nb-cta">
      <p>
        {area.kwA} 자리와 인원은 방문 전에 맞춰 두는 편이 좋습니다.{' '}
        <a href={nightPath(venue.slug)}>{venue.nameA} 안내 페이지</a>에서 확인하세요.
      </p>
      <p>
        업소 광고·제휴 입점 문의는 카톡 <b className="nb-num">{AD_KAKAO}</b> 로 받습니다. 손님 예약 창구가 아닙니다.
      </p>
    </div>
  );
}

export default function AreaPage({ area }: { area: Area }) {
  const isA = area.group === 'A';
  const venue = bySlug(area.venueSlug);
  const picks = area.related.map((s) => AREAS.find((a) => a.slug === s)).filter(Boolean) as Area[];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <nav aria-label="주요 메뉴">
        <div className="ni">
          <a href="/night/" className="logo">
            나이트 안내
          </a>
          <div className="nl">
            <a href={`${areaPath(area.slug)}#nb-answer`}>지역 소개</a>
            <a href={`${areaPath(area.slug)}#nb-area`}>밤 상권</a>
            <a href={`${areaPath(area.slug)}#nb-venue`}>추천 업소</a>
            <a href="/night/">전체 목록</a>
          </div>
        </div>
      </nav>

      <main>
        <nav className="nb-crumb" aria-label="위치 경로">
          <a href="/">홈</a> › <a href="/night/">나이트</a> › <span>{area.kwA}</span>
        </nav>

        <article>
          <header className="nb-hero">
            <h1>{area.kwA}</h1>
            <p>{area.heroSub}</p>
          </header>

          <div className="container">
            {/* [13] AI 인용 블록 */}
            <div className="answer-box" id="nb-answer">
              <p>
                <strong>{area.kwA}</strong>는 {area.region}의 나이트클럽 밤 문화를 뜻합니다. {area.answerLine}.
              </p>
            </div>

            {area.ageFull ? <p className="nb-age">연결 업소 출입 기준 {area.ageFull}</p> : null}

            <div className="ar-lead">
              {area.lead.map((l) => (
                <p key={l}>{l}</p>
              ))}
            </div>

            {area.sections.map((s, i) => (
              <section className="ar-sec" aria-labelledby={`h2-${i + 1}`} key={s.h2} id={s.id}>
                <h2 id={`h2-${i + 1}`}>{s.h2}</h2>
                {s.paras.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                {s.venueTable ? <VenueFacts area={area} /> : null}
                {s.cta ? <Cta area={area} /> : null}
                <p className="nb-next">{s.next}</p>
              </section>
            ))}

            <section className="ar-sec" aria-labelledby="h2-faq">
              <h2 id="h2-faq">{area.kwB}에 자주 나오는 질문</h2>
              {area.faqs.map((f) => (
                <details className="faq" key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
              <p className="nb-next">목록에 없는 내용은 업소 페이지에서 확인하는 편이 정확합니다.</p>
            </section>

            <div className="ar-sum">
              <h2>{area.kwA} 요약</h2>
              <ul>
                <li>{area.sections[0].next}</li>
                <li>
                  추천 업소는 <a href={nightPath(venue.slug)}>{venue.nameA}</a>, {venue.region}.
                </li>
                <li>
                  {isA && area.contact
                    ? `자리 문의는 ${area.contact.nick} ${area.contact.display}.`
                    : `업소 광고·제휴 입점 문의는 카톡 ${AD_KAKAO}.`}
                </li>
              </ul>
              <p className="nb-next">가까운 지역도 같은 기준으로 정리해 두었습니다.</p>
            </div>

            <aside aria-labelledby="ar-rel-h" className="related">
              <h2 id="ar-rel-h">함께 보면 좋은 지역</h2>
              <div className="bento">
                {picks.map((p) => (
                  <a key={p.slug} href={areaPath(p.slug)} className="bic">
                    <h3>{p.kwA}</h3>
                    <p>{p.region}</p>
                  </a>
                ))}
                <a href={nightPath(venue.slug)} className="bic">
                  <h3>{venue.nameA}</h3>
                  <p>{venue.region}</p>
                </a>
              </div>
              <p className="nb-next">
                {isA && area.contact
                  ? `${area.kwA} 안내는 여기까지입니다. 자리는 ${area.contact.nick} ${area.contact.display} 한 통이면 정리됩니다.`
                  : `${area.kwA} 안내는 여기까지입니다. 남은 것은 업소 페이지에서 자리를 맞추는 일뿐입니다.`}
              </p>
            </aside>
          </div>
        </article>
      </main>

      <footer className="site-footer">
        <div className="ad-inquiry">
          광고·제휴 입점 문의 &nbsp;|&nbsp; 카카오톡 ID <strong>{AD_KAKAO}</strong>
        </div>
        <p className="footer-note">
          본 페이지는 업소 정보 제공 페이지입니다. 출입 연령 및 이용 규정은 각 업소 방침을 따릅니다.
        </p>
        <p className="footer-note">
          최종 수정 <time dateTime={MODIFIED.iso}>{MODIFIED.human}</time> · 공개된 웹 정보를 정리했으며 실제와 다를 수
          있습니다.
        </p>
      </footer>

      {/* 하단 고정 전화바 — 스크롤해도 움직이지 않습니다. 조상 래퍼 없이 최상단에 둡니다. */}
      {isA && area.contact ? (
        <div className="callbar" role="complementary" aria-label="전화 연결">
          <a href={area.contact.href} aria-label={`${area.kwA} 문의 ${area.contact.nick} ${area.contact.display} 전화 걸기`}>
            <span aria-hidden="true">📞</span>
            {area.contact.nick} {area.contact.display}
          </a>
        </div>
      ) : (
        <div className="callbar" role="complementary" aria-label="광고 제휴 문의">
          <span>
            광고·제휴 입점 문의 카톡 <b>{AD_KAKAO}</b>
          </span>
        </div>
      )}
    </>
  );
}

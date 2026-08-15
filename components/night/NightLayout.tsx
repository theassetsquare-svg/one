import { ReactNode } from 'react';
import AdContact from '../AdContact';
import { AD_KAKAO, NightVenue, nightPath } from '@/lib/night';

/**
 * /night/* 광고 페이지 전용 레이아웃.
 *
 * ⚠️ 기존 Layout(대전원나이트) / HobakLayout(불광동호박나이트)은 손대지 않습니다.
 * ⚠️ 이 레이아웃을 쓰는 13개 업소는 서로 별개 가게입니다. 링크는 같은 /night/ 안에서만 겁니다.
 *
 * 고정 전화바:
 *  - A그룹: 담당자 닉네임 + 전화번호만. besta12 한 글자도 넣지 않습니다.
 *  - B그룹: 광고·제휴 입점 문의 카톡 besta12 (업소 사장님 대상 채널).
 *  - .callbar 조상 체인에 transform/filter/perspective/backdrop-filter/will-change/contain 이
 *    없어야 position:fixed 가 뷰포트 기준으로 고정됩니다. 이 레이아웃은 조상에 래퍼를 두지 않고
 *    프래그먼트 최상단에서 바로 렌더합니다.
 */

/** 기존 globals.css 의 .callbar 규칙보다 우선하도록 태그+클래스로 특이도를 올립니다. */
const CALLBAR_CSS = `
body{padding-bottom:calc(84px + env(safe-area-inset-bottom,0px))}
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
  body{padding-bottom:calc(80px + env(safe-area-inset-bottom,0px))}
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
`;

export default function NightLayout({ venue, children }: { venue: NightVenue; children: ReactNode }) {
  const isA = venue.group === 'A';
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CALLBAR_CSS }} />

      <nav aria-label="주요 메뉴">
        <div className="ni">
          <a href="/night/" className="logo">
            나이트 안내
          </a>
          <div className="nl">
            <a href={`${nightPath(venue.slug)}#nb-answer`}>업소 소개</a>
            <a href={`${nightPath(venue.slug)}#nb-access`}>위치</a>
            <a href={`${nightPath(venue.slug)}#nb-contact`}>문의</a>
            <a href="/night/">전체 목록</a>
          </div>
        </div>
      </nav>

      <main>{children}</main>

      <footer>
        <p>
          <strong>{venue.nameA}</strong>
        </p>
        <p>{venue.region}</p>
        {venue.openingHours ? <p>{venue.openingHours.humanText}</p> : null}
        {venue.ageFull ? <p>{venue.ageFull}만 출입 가능</p> : null}
        {isA && venue.contact ? (
          <p>
            예약 {venue.contact.nick} <a href={venue.contact.href}>{venue.contact.display}</a>
          </p>
        ) : null}
        <AdContact />
        <p className="legal-note">© 2026 {venue.nameA} 안내 페이지</p>
      </footer>

      {/* 하단 고정 전화바 — 스크롤해도 움직이지 않습니다. 조상 래퍼 없이 최상단에 둡니다. */}
      {isA && venue.contact ? (
        <div className="callbar" role="complementary" aria-label="전화 연결">
          <a href={venue.contact.href} aria-label={`${venue.nameA} 예약 ${venue.contact.nick} ${venue.contact.display} 전화 걸기`}>
            <span aria-hidden="true">📞</span>
            {venue.contact.nick} {venue.contact.display}
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

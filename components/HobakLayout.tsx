import { ReactNode } from 'react';
import AdContact from './AdContact';

/* ★ 2026-08-31 — 연령·관계 고지가 없어 신고에 취약했다(점검표 #121 · #122).
   문구는 쪽마다 다르게 고른다. 같은 줄을 수십 쪽에 박으면 유사문서로 잡힌다. */
/* ★ 2026-08-31 고침 — 광고 쪽에 "제휴 없음" 을 적으면 사실과 다른 고지가 된다.
   광고(담당자 연락처)를 싣는 쪽인지 받아서 문구를 고른다. */
const 광고고지 = [
  "이 페이지에는 해당 업소 담당자의 광고가 실려 있습니다. 만 19세 이상 성인 대상입니다.",
  "아래 담당자 연락처는 광고로 실린 것입니다. 만 19세 이상만 이용할 수 있습니다.",
  "이 글에는 업소 담당자가 의뢰한 광고가 포함되어 있습니다. 만 19세 이상 대상이며 청소년 출입·고용은 금지입니다.",
  "담당자 연락처 안내는 광고입니다. 만 19세 이상 성인 업소를 다룹니다.",
  "이 쪽의 연락처는 광고로 게재된 것입니다. 만 19세 이상만 출입할 수 있습니다.",
  "업소 담당자의 요청으로 광고를 싣고 있습니다. 성인(만 19세 이상) 대상입니다.",
];
const 비광고고지 = [
  "만 19세 이상 이용 가능한 성인 업소 안내입니다. 업소와 제휴 관계가 없는 정보 페이지입니다.",
  "성인(만 19세 이상)만 이용할 수 있는 곳을 다룹니다. 업소와 광고·제휴 관계가 없습니다.",
  "이 글은 만 19세 이상 성인 대상 업소 안내이며, 업소와 아무런 관계가 없습니다.",
  "만 19세 미만은 출입할 수 없습니다. 공개 자료만 정리한 제3자 안내 페이지입니다.",
  "성인 전용 업소를 다루는 안내입니다. 업소로부터 대가를 받지 않았습니다.",
  "만 19세 이상만 들어갈 수 있는 곳입니다. 업소와 제휴하지 않은 정보 페이지입니다.",
  "성인 대상 업소 안내이며 청소년 출입·고용은 금지입니다. 공개 자료 기준입니다.",
  "만 19세 이상 성인만 이용하는 업소를 안내합니다. 업소의 공식 채널이 아닙니다.",
];
function 고지고르기(씨: unknown, 광고쪽?: boolean) {
  const 곳간 = 광고쪽 ? 광고고지 : 비광고고지;
  const s = String(씨 ?? "");
  let n = 0;
  for (let k = 0; k < s.length; k++) n = (n * 131 + s.charCodeAt(k)) % 1000003;
  return 곳간[n % 곳간.length];
}

/**
 * 불광동호박나이트 전용 레이아웃.
 *
 * ⚠️ 대전원나이트와 완전히 별개인 가게입니다.
 * 대전원나이트 로고·메뉴·입장 정책(38세 이상)·여성 손님 혜택(차비 3만원 + 맥주)을
 * 이 레이아웃에 결코 넣지 마세요. 서로 링크도 걸지 않습니다.
 */
export const CALL_NAME = '손흥민';
export const CALL_TEL_DISPLAY = '010-2221-1937';
export const CALL_TEL_HREF = 'tel:01022211937';

export default function HobakLayout({
  children,
  /* ★ 2026-08-31 — 이 안내 쪽에도 담당자 광고(전화 010-2221-1937)가 실린다.
     광고를 실어 놓고 "제휴가 없다" 고 적으면 사실과 다른 고지가 된다. */
  광고쪽,
}: { children: ReactNode; 광고쪽?: boolean }) {
  return (
    <>
      <nav aria-label="주요 메뉴">
        <div className="ni">
          <a href="/area/bulgwangdong-hobak-night-guide/" className="logo">
            🍺 불광동호박나이트
          </a>
          <div className="nl">
            <a href="#hb-intro">가게안내</a>
            <a href="#hb-access">오시는길</a>
            <a href="#hb-faq">자주묻는질문</a>
            <a href={CALL_TEL_HREF}>전화예약</a>
          </div>
        </div>
      </nav>
      <main>{children}</main>
      <footer>
        <p>
          <strong>불광동호박나이트</strong>
        </p>
        <p>서울특별시 은평구 통일로 730 지하 1층 · 지하철 3호선·6호선 불광역 인근</p>
        <p>영업시간 저녁 7시 ~ 새벽 5시</p>
        <p>
          예약 {CALL_NAME} <a href={CALL_TEL_HREF}>{CALL_TEL_DISPLAY}</a>
        </p>
        <AdContact />
        <p className="legal-note">© 2026 불광동호박나이트</p>
              <p style={{ margin: "8px 0 0", fontSize: 13, lineHeight: 1.7, color: "#9aa0a6" }}>{고지고르기("hobak", !!광고쪽)}</p>
        <p className="cafe-link" style={{ margin: "14px 0 0", fontSize: 14, lineHeight: 1.7 }}><a href="https://nolcool.com/cafe/?utm_source=c&utm_medium=site_link&utm_campaign=cafe" rel="noopener">놀쿨 카페 안내 →</a></p>
</footer>

      {/* 하단 고정 전화바 — 모바일/PC 모두 고정, 스크롤해도 움직이지 않음 */}
      <div className="cb-spacer" aria-hidden="true" />
      <div className="callbar">
        <a
          href={CALL_TEL_HREF}
          className="cb-tel"
          aria-label={`불광동호박나이트 ${CALL_NAME} ${CALL_TEL_DISPLAY} 전화 걸기`}
        >
          <span aria-hidden="true">📞</span>
          <span className="cb-nm">불광동호박나이트 {CALL_NAME}</span>
          <span className="cb-no">{CALL_TEL_DISPLAY}</span>
        </a>
      </div>
    </>
  );
}

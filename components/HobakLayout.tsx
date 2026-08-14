import { ReactNode } from 'react';
import AdContact from './AdContact';

/**
 * 불광동호박나이트 전용 레이아웃.
 *
 * ⚠️ 대전원나이트와 완전히 별개인 가게입니다.
 * 대전원나이트 로고·메뉴·입장 정책(38세 이상)·여성 손님 혜택(차비 3만원 + 맥주)을
 * 이 레이아웃에 절대 넣지 마세요. 서로 링크도 걸지 않습니다.
 */
export const CALL_NAME = '손흥민';
export const CALL_TEL_DISPLAY = '010-2221-1937';
export const CALL_TEL_HREF = 'tel:01022211937';

export default function HobakLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <nav aria-label="주요 메뉴">
        <div className="ni">
          <a href="/bulgwangdong-hobak-night" className="logo">
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
      </footer>

      {/* 하단 고정 전화바 — 모바일/PC 모두 고정, 스크롤해도 움직이지 않음 */}
      <div className="cb-spacer" aria-hidden="true" />
      <div className="callbar">
        <a
          href={CALL_TEL_HREF}
          className="cb-tel"
          aria-label={`불광동호박나이트 예약 ${CALL_NAME} ${CALL_TEL_DISPLAY} 전화 걸기`}
        >
          <span aria-hidden="true">📞</span>
          <span className="cb-nm">{CALL_NAME}</span>
          <span className="cb-no">{CALL_TEL_DISPLAY}</span>
        </a>
      </div>
    </>
  );
}

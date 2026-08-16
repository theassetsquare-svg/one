import { ReactNode } from 'react';
import AdContact from '../AdContact';
import { AD_KAKAO, AD_KAKAO_URL, PickContact } from '@/lib/pick';
import { PICK_CSS } from './PickTheme';

/**
 * /pick/* + 허브 + 홈 공용 레이아웃 (차콜 + 오렌지).
 *
 * 하단 고정 바 규칙:
 *  - 광고주 3곳 페이지: 담당자 닉네임 + 전화번호만. besta12 를 한 글자도 넣지 않습니다.
 *  - 그 외 전부(홈·허브·37곳): 광고문의 카카오톡 besta12.
 *  - .pkbar 는 조상 래퍼 없이 프래그먼트 최상단에서 렌더해야 position:fixed 가 뷰포트 기준이 됩니다.
 */
export default function PickLayout({
  contact,
  footerLines,
  children,
}: {
  contact?: PickContact;
  footerLines?: string[];
  children: ReactNode;
}) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: PICK_CSS }} />

      <nav aria-label="주요 메뉴">
        <div className="ni">
          <a href="/" className="logo">
            전국 나이트, 고르는 기준
          </a>
          <div className="nl">
            <a href="/pick">업소 40곳</a>
            <a href="/pick#pk-list">지역별 보기</a>
            <a href="/#pk-how">고르는 법</a>
          </div>
        </div>
      </nav>

      <main>{children}</main>

      <footer>
        {(footerLines || []).map((l) => (
          <p key={l}>{l}</p>
        ))}
        {contact ? (
          <p>
            예약 {contact.nick} <a href={contact.href}>{contact.display}</a>
          </p>
        ) : null}
        <AdContact />
        <p className="legal-note">
          © 2026 전국 나이트, 고르는 기준 — 특정 업소 소속이 아닌 선택 기준 안내 페이지입니다.
        </p>
      </footer>

      {contact ? (
        <div className="pkbar" role="complementary" aria-label="전화 연결">
          <a href={contact.href} aria-label={`예약 ${contact.nick} ${contact.display} 전화 걸기`}>
            <span aria-hidden="true">📞</span>
            {contact.nick} {contact.display}
          </a>
        </div>
      ) : (
        <div className="pkbar" role="complementary" aria-label="광고문의">
          <a href={AD_KAKAO_URL} rel="noopener">
            <span aria-hidden="true">💬</span>
            광고문의 카카오톡 <b>{AD_KAKAO}</b>
          </a>
        </div>
      )}
    </>
  );
}

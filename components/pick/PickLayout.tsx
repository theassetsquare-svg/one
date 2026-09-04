import { ReactNode } from 'react';
import AdContact from '../AdContact';
import { AD_KAKAO, AD_KAKAO_URL, PickContact } from '@/lib/pick';
import { PICK_CSS } from './PickTheme';

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
 * /pick/* + 허브 + 홈 공용 레이아웃 (차콜 + 오렌지).
 *
 * 하단 고정 바 규칙:
 *  - 광고주 3곳 페이지: 담당자 닉네임 + 전화번호만. besta12 를 한 글자도 넣지 않습니다.
 *  - 그 외 전부(홈·허브·37곳): 광고문의 카카오톡 besta12.
 *  - .pkbar 는 조상 래퍼 없이 프래그먼트 최상단에서 렌더해야 position:fixed 가 뷰포트 기준이 됩니다.
 */
export default function PickLayout({
  contact,
  barName,
  footerLines,
  children,
}: {
  contact?: PickContact;
  /** 고정바에 붙는 주체명 — 가게 페이지는 가게이름. 허브는 비웁니다. */
  barName?: string;
  footerLines?: string[];
  children: ReactNode;
}) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: PICK_CSS }} />

      <nav aria-label="주요 메뉴">
        <div className="ni">
          {/* 홈 링크 제거(H3) — 사이트명 글자는 남기고 <a> 만 뺍니다. */}
          <span className="logo">전국 나이트, 고르는 기준</span>
          <div className="nl">
            <a href="/pick">업소 40곳</a>
            <a href="/pick#pk-list">지역별 보기</a>
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
              <p style={{ margin: "8px 0 0", fontSize: 13, lineHeight: 1.7, color: "#9aa0a6" }}>{고지고르기(barName ?? null, !!contact)}</p>
        <p className="cafe-link" style={{ margin: "14px 0 0", fontSize: 14, lineHeight: 1.7 }}><a href="https://nolcool.com/cafe/?utm_source=c&utm_medium=site_link&utm_campaign=cafe" rel="noopener">놀쿨 카페 안내 →</a></p>
</footer>

      {contact ? (
        <div className="pkbar" role="complementary" aria-label="전화 연결">
          <a href={contact.href} aria-label={`${barName || ''} ${contact.nick} ${contact.display} 전화 걸기`.trim()}>
            <span aria-hidden="true">📞</span>
            <span className="pkbar-sub">
              {barName} {contact.nick}
            </span>
            <span className="pkbar-tel">{contact.display}</span>
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

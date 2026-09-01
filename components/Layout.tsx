import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import AdContact from './AdContact';

/* ★ 2026-08-31 — 연령·관계 고지가 없어 신고에 취약했다(설계도 4장).
   이 레이아웃이 감싸는 쪽에는 담당자 광고가 실리지 않는다(고정 연락바 없음).
   그래서 '업소와 관계 없음' 쪽 문구만 쓴다. */
const 안내고지 = [
  "만 19세 이상 이용 가능한 성인 업소 안내입니다. 업소와 제휴 관계가 없는 정보 페이지입니다.",
  "성인(만 19세 이상)만 이용할 수 있는 곳을 다룹니다. 업소와 광고·제휴 관계가 없습니다.",
  "이 글은 만 19세 이상 성인 대상 업소 안내이며, 업소와 아무런 관계가 없습니다.",
  "만 19세 미만은 출입할 수 없습니다. 공개 자료만 정리한 제3자 안내 페이지입니다.",
  "성인 전용 업소를 다루는 안내입니다. 업소로부터 대가를 받지 않았습니다.",
  "만 19세 이상만 들어갈 수 있는 곳입니다. 업소와 제휴하지 않은 정보 페이지입니다.",
  "성인 대상 업소 안내이며 청소년 출입·고용은 금지입니다. 공개 자료 기준입니다.",
  "만 19세 이상 성인만 이용하는 업소를 안내합니다. 업소의 공식 채널이 아닙니다.",
];
function 안내고지고르기(씨: unknown) {
  const s = String(씨 ?? "");
  let n = 0;
  for (let k = 0; k < s.length; k++) n = (n * 131 + s.charCodeAt(k)) % 1000003;
  return 안내고지[n % 안내고지.length];
}


// 대전원나이트 전용 레이아웃.
// 불광동호박나이트는 별개 가게이므로 여기 nav에 넣지 않습니다 (HobakLayout 사용).
const navItems = [
  { href: '/event', label: '이벤트' },
  { href: '/area/first-visit/', label: '첫방문' },
  { href: '/access', label: '오시는길' },
  { href: '/faq', label: 'FAQ' },
  { href: '/review', label: '후기' },
  { href: '/contact', label: '연락처' },
];

export default function Layout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const isActive = (href: string) =>
    router.pathname === href || (href !== '/' && router.pathname.startsWith(href));

  return (
    <>
      <nav aria-label="주요 메뉴">
        <div className="ni">
          {/* 홈 링크 제거(H3) — 로고 글자는 남기고 <a> 만 뺍니다. */}
          <span className="logo">🌟 대전원나이트</span>
          <div className="nl">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={isActive(item.href) ? 'active' : ''}
                aria-current={isActive(item.href) ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
      <main>{children}</main>
      <footer>
        <p>
          <strong>대전원나이트</strong>
        </p>
        <p>평일 20:00~02:30 · 주말(금·토) 20:00~03:30 · 38세 이상 입장</p>
        <AdContact />
        <p className="legal-note">© 2026 대전원나이트</p>
              <p style={{ margin: "8px 0 0", fontSize: 13, lineHeight: 1.7, color: "#9aa0a6" }}>{안내고지고르기(router.asPath)}</p>
</footer>
    </>
  );
}

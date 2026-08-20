import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import AdContact from './AdContact';

// 대전원나이트 전용 레이아웃.
// 불광동호박나이트는 별개 가게이므로 여기 nav에 넣지 않습니다 (HobakLayout 사용).
const navItems = [
  { href: '/event', label: '이벤트' },
  { href: '/first-visit', label: '첫방문' },
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
      </footer>
    </>
  );
}

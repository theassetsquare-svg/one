import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

const navItems = [
  { href: '/', label: '홈' },
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
          <Link href="/" className="logo">
            🌟 대전원나이트 막내
          </Link>
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
          <strong>대전원나이트 막내</strong>
        </p>
        <p>평일 20:00~02:30 · 주말(금·토) 20:00~03:30 · 38세 이상 입장</p>
        <p>광고문의 카카오톡 besta12</p>
        <p className="legal-note">© 2026 대전원나이트 막내</p>
      </footer>
      <a href="tel:01086771258" className="fcb" aria-label="막내에게 전화하기">
        📞 막내 010-8677-1258
      </a>
    </>
  );
}

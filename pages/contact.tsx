import SEO from '@/components/SEO';
import Schema from '@/components/Schema';
import Layout from '@/components/Layout';
import PolicyBanner from '@/components/PolicyBanner';

export default function Contact() {
  return (
    <>
      <SEO
        title="대전원나이트 예약·문의 — 막내 010-8677-1258"
        description="대전원나이트 막내 예약, 단체 모임, VIP 룸 문의. 막내 010-8677-1258."
        path="/contact"
        ogImage="https://one-5ei.pages.dev/og/contact.png"
      />
      <Schema path="/contact" crumb="연락처" />
      <Layout>
        <div className="hero">
          <h1>예약 문의</h1>
          <p>막내 010-8677-1258 직통</p>
        </div>
        <div className="container">
          <PolicyBanner />
          <section aria-labelledby="ct-h">
            <h2 id="ct-h">📞 막내 직통</h2>
            <div className="bento">
              <div className="bic">
                <h3>📞 전화</h3>
                <p>
                  <a href="tel:01086771258" style={{ color: '#FFD700', fontWeight: 900 }}>
                    010-8677-1258
                  </a>{' '}
                  — 사업주 직접 응대.
                </p>
              </div>
              <div className="bic">
                <h3>💬 카카오톡</h3>
                <p>광고 문의 ID: besta12</p>
              </div>
              <div className="bic">
                <h3>🕐 응대 시간</h3>
                <p>매일 18:00 ~ 04:00 (영업 시간 중심).</p>
              </div>
              <div className="bic">
                <h3>📋 문의 종류</h3>
                <p>예약 / VIP룸 / 단체 모임 / 길안내 / 이벤트.</p>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}

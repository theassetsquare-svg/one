import SEO from '@/components/SEO';
import Schema from '@/components/Schema';
import Layout from '@/components/Layout';
import PolicyBanner from '@/components/PolicyBanner';
import RelatedLinks from '@/components/RelatedLinks';

export default function Contact() {
  return (
    <>
      <SEO
        title="대전원나이트 예약·문의 — 광고문의 카톡 아이디 besta12"
        description="카톡 besta12 한 번이면 예약·VIP룸·5인 이상 단체 모임·길안내·이벤트 문의까지 한 번에. 가게 사정을 가장 잘 아는 직원이 직접 받습니다. 광고문의 카카오톡 아이디: besta12."
        path="/contact"
        ogImage="https://oned-a0q.pages.dev/og/contact.png"
        ogTitle="대전원나이트 광고문의 카톡 아이디 besta12"
        ogDesc="예약·VIP·단체·길안내 웨이터 직접 응대. 카톡 besta12."
      />
      <Schema path="/contact" crumb="연락처" pageType="ContactPage" pageName="예약·문의" />
      <Layout>
        <div className="hero">
          <h1>대전원나이트 예약·광고문의</h1>
          <p>
            광고문의 카카오톡 아이디 <strong>besta12</strong>
          </p>
        </div>
        <div className="container">
          <PolicyBanner />
          <section aria-labelledby="ct-h">
            <h2 id="ct-h">💬 광고문의 · 예약</h2>
            <div className="bento">
              <div className="bic">
                <h3>💬 카카오톡</h3>
                <p>
                  카카오톡에서 ID <strong>besta12</strong> 검색 후 문의 주세요 — 웨이터 직접 응대.
                </p>
              </div>
              <div className="bic">
                <h3>📣 광고문의</h3>
                <p>
                  광고문의 카톡 아이디 : <strong>besta12</strong>
                </p>
              </div>
              <div className="bic">
                <h3>🕐 응대 시간</h3>
                <p>평일 19:00 ~ 02:30 / 주말(금·토) 19:00 ~ 03:30 (영업 시간 중심).</p>
              </div>
              <div className="bic">
                <h3>📋 문의 종류</h3>
                <p>예약 / VIP룸 / 단체 모임 / 길안내 / 이벤트.</p>
              </div>
            </div>
          </section>
          <RelatedLinks current="/contact" />
        </div>
      </Layout>
    </>
  );
}

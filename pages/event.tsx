import SEO from '@/components/SEO';
import Schema from '@/components/Schema';
import Layout from '@/components/Layout';
import PolicyBanner from '@/components/PolicyBanner';
import RelatedLinks from '@/components/RelatedLinks';

export default function Event() {
  return (
    <>
      <SEO
        title="대전원나이트 막내 이벤트 — 10시 이전 여성 손님 차비 3만원 + 맥주"
        description="22시 전에 입장하는 여성 손님께 차비 3만원과 기본 맥주 두 가지를 함께 드리는 가게 이벤트. 한 가지가 아니라 둘 다. 38세 이상 신분증 필수. 예약 ."
        path="/event"
        ogImage="https://one-5ei.pages.dev/og/event.png"
        ogTitle="대전원나이트 막내 이벤트 — 차비 3만원 + 맥주 둘 다"
        ogDesc="10시 이전 입장 여성 손님 두 가지 모두 보장."
      />
      <Schema path="/event" crumb="이벤트" pageType="WebPage" pageName="이벤트 — 여성 손님 차비 + 맥주" />
      <Layout>
        <div className="hero">
          <h1>💎 막내 특별 이벤트</h1>
          <p>10시 이전 입장 여성 손님 — 차비 3만원 + 맥주 둘 다 받습니다</p>
        </div>
        <div className="container">
          <PolicyBanner />
          <section aria-labelledby="ev-h">
            <h2 id="ev-h">🎁 이벤트 상세</h2>
            <div className="bento">
              <div className="bic">
                <h3>💵 차비 3만원 지급</h3>
                <p>22시 전 입장 여성 손님 전원. 현장 지급 / 한 분당 한 번.</p>
              </div>
              <div className="bic">
                <h3>🍺 기본 음료 서비스</h3>
                <p>입장 즉시 시원한 한 잔 제공. 추가 주문 별도.</p>
              </div>
              <div className="bic">
                <h3>⏰ 조건</h3>
                <p>10시(22:00) 이전 도착 + 38세 이상 신분증 확인.</p>
              </div>
              <div className="bic">
                <h3>📞 막내 문의</h3>
                <p>. 단체·VIP 예약 별도 안내.</p>
              </div>
            </div>
          </section>
          <section aria-labelledby="ev-q">
            <h2 id="ev-q">🤝 어떻게 받나요?</h2>
            <ol>
              <li>10시 이전 입장 (신분증 지참).</li>
              <li>막내에게 &quot;여성 손님 이벤트 받으러 왔어요&quot; 한마디.</li>
              <li>차비 3만원 현장 지급 + 맥주 기본 서비스. <strong>둘 다 받음.</strong></li>
            </ol>
          </section>
          <RelatedLinks current="/event" />
        </div>
      </Layout>
    </>
  );
}

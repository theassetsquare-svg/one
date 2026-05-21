import SEO from '@/components/SEO';
import Schema from '@/components/Schema';
import Layout from '@/components/Layout';
import PolicyBanner from '@/components/PolicyBanner';

export default function Home() {
  return (
    <>
      <SEO
        title="대전원나이트 막내 ▶ 38세+ 여성 차비 3만원 + 맥주 둘 다 | 대전나이트 1위"
        description="대전원나이트 어디 가? 38세 이상 입장 대전나이트 막내. 10시 이전 여성 손님은 차비 3만원 + 맥주 서비스 2가지 모두 보장. 대전 시내·청주·세종 30분. 막내 직통 010-8677-1258."
        path="/"
        ogTitle="대전원나이트 막내 — 38세+ 입장, 여성 차비 3만원 + 맥주 둘 다"
        ogDesc="대전나이트 정식 클럽. 10시 이전 여성 손님 2가지 혜택 모두 보장."
      />
      <Schema path="/" crumb="홈" />
      <Layout>
        <div className="hero">
          <h1>대전원나이트 막내</h1>
          <p>38세 이상 손님이 부담 없이 어울리는 정식 클럽 — 막내 웨이터가 직접 응대합니다.</p>
        </div>
        <div className="container">
          <PolicyBanner />
          <section aria-labelledby="intro-h">
            <h2 id="intro-h">막내가 직접 알려드리는 가게 소개</h2>
            <p>
              <strong>대전원나이트</strong>를 찾는 38세 이상 손님이 부담 없이 어울릴 수 있도록
              막내 웨이터가 직접 응대하는 가게입니다. 같은 연령대 손님들이 모이는 안전한
              자리를 기준으로 운영하며, 신분증 확인을 거쳐 입장합니다.
            </p>
            <p>
              <strong>10시 이전 입장</strong>하는 여성 손님께는 <strong>차비 3만원</strong>과
              기본 맥주 서비스를 함께 제공합니다. 한 가지가 아니라 둘 다 보장하는 것이
              막내의 약속입니다.
            </p>
            <p>
              위치는 <strong>대전 시내</strong>이며 청주·세종에서 자차로 약 30분 거리입니다.
              밤 20:00부터 새벽 05:00까지 매일 영업하는 대전 나이트클럽으로, <strong>대전나이트</strong>를
              알아보시는 분이라면 막내 직통 010-8677-1258로 전화 한 통이면 예약·VIP룸·단체
              모임·길안내까지 한 번에 정리해 드립니다.
            </p>
          </section>
          <section aria-labelledby="lead-h">
            <h2 id="lead-h">🌟 대전 No.1 나이트라이프</h2>
            <div className="bento">
              <div className="bic">
                <h3>🎯 38세 이상</h3>
                <p>같은 나이대 모임 환영. 안전한 분위기.</p>
              </div>
              <div className="bic">
                <h3>💎 여성 손님 혜택</h3>
                <p>10시 이전 입장 시 차비 3만원 + 맥주 둘 다 받음.</p>
              </div>
              <div className="bic">
                <h3>🛡️ 안전 운영</h3>
                <p>막내 웨이터가 직접 응대. 신분증 검사 철저.</p>
              </div>
              <div className="bic">
                <h3>📞 막내 직통</h3>
                <p>010-8677-1258. 예약 / VIP / 단체 문의.</p>
              </div>
              <div className="bic">
                <h3>🕐 영업 시간</h3>
                <p>매일 20:00 ~ 05:00. 신분증 필수.</p>
              </div>
              <div className="bic">
                <h3>🚗 위치</h3>
                <p>대전광역시 시내. 청주·세종 30분 거리.</p>
              </div>
            </div>
          </section>
          <section aria-labelledby="faq-h">
            <h2 id="faq-h">📋 자주 묻는 질문</h2>
            <details className="faq" open>
              <summary>10시 이전 여성 손님 혜택은?</summary>
              <p>2가지 모두 받습니다. 한 가지가 아니라 둘 다. ① 차비 3만원 지급 ② 맥주 기본 서비스.</p>
            </details>
            <details className="faq">
              <summary>입장 가능 연령은?</summary>
              <p>38세 이상부터 입장 가능. 신분증 필수.</p>
            </details>
            <details className="faq">
              <summary>영업 시간은?</summary>
              <p>매일 20:00 ~ 05:00 영업.</p>
            </details>
            <details className="faq">
              <summary>예약은?</summary>
              <p>막내 010-8677-1258 전화 예약 권장.</p>
            </details>
            <details className="faq">
              <summary>드레스코드?</summary>
              <p>깔끔한 캐주얼 권장. 슬리퍼·반바지 제한.</p>
            </details>
            <details className="faq">
              <summary>주차?</summary>
              <p>주변 공영주차장 이용.</p>
            </details>
            <details className="faq">
              <summary>카드 결제?</summary>
              <p>가능합니다.</p>
            </details>
            <details className="faq">
              <summary>VIP 룸?</summary>
              <p>예약 가능. 막내 직접 문의.</p>
            </details>
            <details className="faq">
              <summary>단체 모임?</summary>
              <p>5인 이상 예약 권장.</p>
            </details>
          </section>
        </div>
      </Layout>
    </>
  );
}

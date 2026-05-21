import SEO from '@/components/SEO';
import Schema from '@/components/Schema';
import Layout from '@/components/Layout';
import PolicyBanner from '@/components/PolicyBanner';

export default function Home() {
  return (
    <>
      <SEO
        title="대전원나이트 막내 — 38세 이상 입장 + 10시 이전 여성 손님 2가지 혜택"
        description="대전원나이트 막내. 38세 이상 입장 가능. 10시 이전 여성 손님 2가지 모두 받습니다 (차비 3만원 + 맥주 서비스). 막내 010-8677-1258 직통."
        path="/"
        ogTitle="대전원나이트 막내 — 38세 이상 + 여성 손님 2가지 혜택"
        ogDesc="38세 이상 입장. 10시 이전 여성 손님 차비 3만원 + 맥주 둘 다 받습니다."
      />
      <Schema path="/" crumb="홈" />
      <Layout>
        <div className="hero">
          <h1>대전원나이트 막내</h1>
          <p>38세 이상 안전한 나이트라이프 — 막내 사장님이 직접 운영하는 합법 클럽</p>
        </div>
        <div className="container">
          <PolicyBanner />
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
                <h3>🍺 합법 운영</h3>
                <p>사업자 등록 정상. 사업주 운영 정책.</p>
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
            <details className="faq">
              <summary>합법 운영?</summary>
              <p>사업자 등록 정상. 38세+ = 사업주 운영 정책.</p>
            </details>
          </section>
        </div>
      </Layout>
    </>
  );
}

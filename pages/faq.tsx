import SEO from '@/components/SEO';
import Schema from '@/components/Schema';
import Layout from '@/components/Layout';
import PolicyBanner from '@/components/PolicyBanner';

const faqs = [
  { q: '입장 가능 연령은?', a: '38세 이상부터 입장 가능. 신분증 필수.' },
  {
    q: '10시 이전 입장 여성 손님 혜택은?',
    a: '10시 이전 입장 여성 손님께는 2가지 모두 제공합니다. 한 가지가 아니라 둘 다 받습니다. ① 차비 3만원 지급. ② 맥주 기본 서비스.',
  },
  { q: '영업 시간은?', a: '매일 20:00 ~ 05:00 영업.' },
  { q: '예약은?', a: '막내 010-8677-1258 전화 예약 권장.' },
  { q: '위치는?', a: '대전광역시. 자세한 위치는 전화 문의.' },
  { q: '드레스코드?', a: '깔끔한 캐주얼 권장. 슬리퍼·반바지 제한.' },
  { q: '주차?', a: '주변 공영주차장 이용.' },
  { q: '카드 결제?', a: '가능합니다.' },
  { q: 'VIP 룸?', a: '예약 가능. 막내 문의.' },
  { q: '단체 모임?', a: '5인 이상 예약 권장.' },
  { q: '청주에서 가는 법?', a: '자차 약 30분.' },
  { q: '신분증 필수?', a: '예 38세 이상 확인용 필수.' },
];

export default function FAQ() {
  return (
    <>
      <SEO
        title="대전원나이트 FAQ ▶ 38세+ 입장 / 여성 혜택 / 영업 시간 12가지"
        description="대전나이트 궁금증 한 번에. 대전원나이트 막내 FAQ — 입장 연령, 10시 이전 여성 손님 차비·맥주 2가지 혜택, 영업 시간, 예약, 드레스코드, 주차, VIP룸까지."
        path="/faq"
        ogImage="https://one-5ei.pages.dev/og/faq.png"
        ogTitle="대전원나이트 FAQ 12가지"
        ogDesc="입장·여성 혜택·예약·드레스코드 한눈에."
      />
      <Schema path="/faq" crumb="FAQ" />
      <Layout>
        <div className="hero">
          <h1>자주 묻는 질문</h1>
          <p>13가지 답변 한 번에</p>
        </div>
        <div className="container">
          <PolicyBanner />
          <section aria-labelledby="faq-h">
            <h2 id="faq-h">📋 FAQ</h2>
            {faqs.map((f, i) => (
              <details className="faq" key={i} {...(i === 0 ? { open: true } : {})}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </section>
        </div>
      </Layout>
    </>
  );
}

import SEO from '@/components/SEO';
import Schema from '@/components/Schema';
import Layout from '@/components/Layout';
import PolicyBanner from '@/components/PolicyBanner';

export default function Story() {
  return (
    <>
      <SEO
        title="왜 38세+ 기준? 대전나이트의 새 기준이 된 막내 웨이터 이야기 | 대전원나이트"
        description="대전원나이트가 왜 38세 이상만 받는지, 여성 손님께 왜 차비 3만원과 맥주를 함께 드리는지. 막내 웨이터가 직접 풀어주는 대전나이트라이프 진짜 스토리."
        path="/story"
        ogImage="https://one-5ei.pages.dev/og/story.png"
        ogTitle="대전나이트 새 기준 — 막내 웨이터 이야기"
        ogDesc="38세+ / 여성 차비 3만원 / 맥주 둘 다 — 막내 응대 철학."
      />
      <Schema path="/story" crumb="이야기" />
      <Layout>
        <div className="hero">
          <h1>막내 웨이터 이야기</h1>
          <p>대전 나이트라이프의 기준점이 된 이유</p>
        </div>
        <div className="container">
          <PolicyBanner />
          <section aria-labelledby="why-h">
            <h2 id="why-h">왜 38세 이상인가</h2>
            <p>
              20대 / 30대 초반 위주의 공간과 분명히 다른 결의 자리가 필요했습니다. 같은
              연령대의 손님들이 부담 없이 어울릴 수 있는 안전한 공간 — 이게 가게가 38세 이상
              입장 정책을 운영하는 이유입니다.
            </p>
            <h3>왜 여성 손님께 차비를 드리나</h3>
            <p>
              늦은 시간 이동이 부담스러운 여성 손님이 안심하고 들를 수 있도록, 10시 이전 입장
              시 차비 3만원과 기본 맥주 서비스를 함께 제공합니다. 한 가지만이 아니라 둘 다
              받습니다.
            </p>
            <h3>막내 직통의 약속</h3>
            <p>
              예약·VIP룸·단체 모임 모두 막내 010-8677-1258로 바로 연결됩니다. 중간 단계 없이
              막내 웨이터가 직접 응대합니다.
            </p>
          </section>
        </div>
      </Layout>
    </>
  );
}

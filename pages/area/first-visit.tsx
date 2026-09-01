import PageThumb from '@/components/PageThumb';
import SEO from '@/components/SEO';
import Schema from '@/components/Schema';
import Layout from '@/components/Layout';
import PolicyBanner from '@/components/PolicyBanner';
import RelatedLinks from '@/components/RelatedLinks';

export default function FirstVisit() {
  return (
    <>
      <SEO
        title="대전원나이트 첫 방문 6단계 가이드 — 입장·드레스코드·예약"
        description="처음 들르시는 분께 필요한 6단계. 38세 이상 신분증, 22시 전 여성 차비 3만원, 드레스코드, 주차, 결제까지 한 번에 정리했습니다. 도착 전 카톡 권장."
        path="/area/first-visit/"
        ogImage="https://c.nolcool.com/og/first-visit.png"
        ogImageAlt="대전원나이트 첫 방문 가이드"
        ogTitle="대전원나이트 첫 방문 6단계 가이드"
        ogDesc="38세+ 처음 가시는 분께 안내."
      />
      <Schema path="/area/first-visit/" crumb="첫방문" pageType="WebPage" pageName="첫 방문 6단계 가이드" />
      <Layout>
        <div className="hero">
          <h1>대전원나이트 첫 방문 가이드</h1>
          <p>38세 이상 처음 가는 사람을 위한 6단계</p>
        </div>
        <div className="container">
          {/* og:image 와 동일한 파일 — 네이버 썸네일 후보로 본문에 실제 노출합니다. */}
          <PageThumb src="/og/first-visit.png" alt="대전원나이트 첫 방문 가이드" />

          <PolicyBanner page="area/first-visit" />
          <section aria-labelledby="fv-h">
            <h2 id="fv-h">📘 6단계 가이드</h2>
            <div className="bento">
              <div className="bic">
                <h3>① 신분증</h3>
                <p>38세 이상 확인용 필수. 주민등록증 / 운전면허증.</p>
              </div>
              <div className="bic">
                <h3>② 시간</h3>
                <p>여성 손님은 10시 이전 입장 시 차비 3만원 + 맥주 둘 다 받음.</p>
              </div>
              <div className="bic">
                <h3>③ 드레스코드</h3>
                <p>깔끔한 캐주얼. 슬리퍼·반바지 제한.</p>
              </div>
              <div className="bic">
                <h3>④ 예약</h3>
                <p>푸터의 광고문의 카톡 아이디 besta12로 예약 권장. 당일 가능.</p>
              </div>
              <div className="bic">
                <h3>⑤ 주차</h3>
                <p>주변 공영주차장 이용. 대중교통·택시 권장.</p>
              </div>
              <div className="bic">
                <h3>⑥ 결제</h3>
                <p>카드 결제 가능. 인당·룸 별도 안내.</p>
              </div>
            </div>
          </section>
          <section className="bsec">
            <h2>처음 오시는 분이 가장 많이 걸리는 대목</h2>
            <p>
              처음이라 어렵게 느껴지는 부분은 대개 셋으로 좁혀집니다. 몇 시에 갈지,
              몇 명이 갈지, 그리고 어떻게 돌아올지입니다. 이 셋만 정해 두면 나머지는
              현장에서 정하셔도 됩니다. 반대로 이 셋이 비어 있으면 문 앞에서부터
              고민이 시작됩니다.
            </p>
            <p>
              시간은 이르게 잡을수록 자리를 고를 여지가 넓습니다. 늦게 가시면
              분위기는 이미 올라와 있지만 남은 자리를 받게 됩니다. 어느 쪽이 좋은지는
              그날 목적에 따라 다릅니다. 대화가 목적이면 이른 시간이, 분위기가
              목적이면 늦은 시간이 맞는 편입니다.
            </p>
            <p>
              돌아갈 방법은 출발 전에 정해 두시는 편이 가장 좋습니다. 술을 드실
              자리라면 차를 두고 오시거나 대리를 부르시는 쪽을 권합니다. 음주 후
              운전은 본인만 다치는 일이 아닙니다. 확인되지 않은 요금이나 좌석 수는
              이 쪽에 적지 않았습니다. 지어낸 숫자를 보고 오시면 헛걸음이 됩니다.
            </p>
          </section>
          <RelatedLinks current="/area/first-visit/" />
        </div>
      </Layout>
    </>
  );
}

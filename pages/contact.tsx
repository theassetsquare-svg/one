import PageThumb from '@/components/PageThumb';
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
        description="카톡 besta12 한 번이면 예약·VIP룸·5인 이상 단체 모임·길안내·이벤트 문의까지 한 번에. 가게 사정을 가장 잘 아는 직원이 직접 besta12."
        path="/contact"
        ogImage="https://c.nolcool.com/og/contact.png"
        ogImageAlt="대전원나이트 예약·광고문의 안내"
        ogTitle="대전원나이트 광고문의 카톡 아이디 besta12"
        ogDesc="예약·VIP·단체·길안내 웨이터 직접 응대. 카톡 besta12."
      />
      <Schema image="https://c.nolcool.com/og/contact.png" path="/contact" crumb="연락처" pageType="ContactPage" pageName="예약·문의" />
      <Layout>
        <div className="hero">
          <h1>대전원나이트 예약·광고문의</h1>
          <p>
            광고문의 카카오톡 아이디 <strong>besta12</strong>
          </p>
        </div>
        <div className="container">
          {/* og:image 와 동일한 파일 — 네이버 썸네일 후보로 본문에 실제 노출합니다. */}
          <PageThumb src="/og/contact.png" alt="대전원나이트 예약·광고문의 안내" />

          <PolicyBanner page="contact" />
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
          <section className="bsec">
            <h2>문의하실 때 무엇을 적어 주시면 빠른가</h2>
            <p>
              연락을 주실 때 세 가지만 함께 적어 주시면 답이 한 번에 끝납니다.
              언제 오시는지, 몇 분이 오시는지, 그리고 돌아가실 방법이 정해져
              있는지입니다. 이 셋이 정해지면 남은 것은 자리를 맞추는 일뿐입니다.
              반대로 이 셋이 비어 있으면 주고받는 말이 길어집니다.
            </p>
            <p>
              인원이 바뀌는 경우가 생각보다 잦습니다. 넷으로 말씀하시고 여섯이
              오시면 자리를 다시 짜야 합니다. 두 명 차이지만 배정 전체가 흔들립니다.
              그래서 인원이 바뀌면 그때그때 알려 주시는 편이 서로 편합니다.
            </p>
            <p>
              요금과 영업시간은 날짜와 상황에 따라 달라질 수 있어 이 쪽에 숫자로
              적지 않았습니다. 확인되지 않은 값을 적어 두면 오셨을 때 다른 이야기가
              되기 때문입니다. 그날 기준은 문의하시면 그대로 말씀드립니다.
            </p>
          </section>
          <RelatedLinks current="/contact" />
        </div>
      </Layout>
    </>
  );
}

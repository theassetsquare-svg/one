import PageThumb from '@/components/PageThumb';
import SEO from '@/components/SEO';
import HobakSchema from '@/components/HobakSchema';
import HobakLayout from '@/components/HobakLayout';

// ⚠️ 불광동호박나이트는 대전원나이트와 별개 가게입니다.
// 대전원나이트의 입장 정책(38세 이상)·여성 손님 혜택(차비 3만원 + 맥주)·영업 시간은
// 이 페이지에 적용되지 않습니다. 확인되지 않은 내용은 쓰지 않고, 사장님 확인 후 채웁니다.
// 확인된 정보: 주소(통일로 730 지하 1층), 영업시간(19:00~05:00), 예약 연락처.
// 미확인: 입장 가능 연령, 여성 손님 혜택, 드레스코드, 주차.
const qa = [
  {
    q: '불광동호박나이트는 어디에 있나요?',
    a: '서울특별시 은평구 통일로 730 지하 1층입니다. 지하철 3호선·6호선 불광역에서 가깝고 연신내·구파발에서도 이동하기 좋습니다.',
  },
  {
    q: '불광동호박나이트 영업시간은?',
    a: '저녁 7시(19:00)부터 새벽 5시(05:00)까지 영업합니다.',
  },
  {
    q: '불광동호박나이트 예약 전화번호는?',
    a: '예약 담당 손흥민 010-2221-1937입니다. 화면 하단 고정 전화바를 눌러도 바로 연결됩니다.',
  },
  {
    q: '불광동호박나이트 예약은 어떻게 하나요?',
    a: '전화 한 통이면 예약·룸·단체 모임·길안내까지 안내해 드립니다. 손흥민 010-2221-1937.',
  },
];

export default function BulgwangdongHobakNight() {
  return (
    <>
      <SEO
        title="불광동호박나이트 — 은평구 통일로 730 지하 1층, 저녁 7시~새벽 5시"
        description="불광동호박나이트 공식 안내. 서울 은평구 통일로 730 지하 1층, 지하철 3호선·6호선 불광역 인근. 영업시간 저녁 7시부터 새벽 5시까지. 예약·룸·단체 모임·길안내 문의는 손흥민 010-2221-1937."
        path="/bulgwangdong-hobak-night-guide"
        ogImage="https://c.nolcool.com/og/bulgwangdong-hobak-night.png"
        ogTitle="불광동호박나이트 — 통일로 730 지하 1층, 예약 010-2221-1937"
        ogDesc="은평구 불광역 인근 · 저녁 7시~새벽 5시 · 예약·룸·단체 문의 환영."
        ogImageAlt="불광동호박나이트 — 서울 은평구 통일로 730 지하 1층"
        keywords="불광동호박나이트, 불광동 호박나이트, 호박나이트, 불광호박나이트, 은평구 호박나이트, 불광역 나이트, 은평구 나이트, 불광동호박나이트 예약, 불광동호박나이트 위치, 불광동호박나이트 영업시간, 불광동호박나이트 전화번호"
        siteName="불광동호박나이트"
        rss={false}
        geoRegion="KR-11"
        geoPlacename="서울특별시 은평구 불광동"
        icbm="37.6106, 126.9296"
      />
      <HobakSchema />
      <HobakLayout>
        <div className="hero">
          <h1>불광동호박나이트</h1>
          <p>서울 은평구 통일로 730 지하 1층 · 저녁 7시 ~ 새벽 5시</p>
        </div>
        <div className="container">
          {/* og:image 와 동일한 파일 — 네이버 썸네일 후보로 본문에 실제 노출합니다. */}
          <PageThumb src="/og/bulgwangdong-hobak-night.png" alt="불광동호박나이트 — 서울 은평구 통일로 730 지하 1층" />

          <section aria-labelledby="hb-intro">
            <h2 id="hb-intro">불광동호박나이트 안내</h2>
            <p>
              <strong>불광동호박나이트</strong>는 <strong>서울특별시 은평구 통일로 730 지하 1층</strong>
              에 자리한 나이트입니다. 지하철 3호선·6호선 <strong>불광역</strong>에서 가까워
              연신내·구파발·응암동은 물론 고양·일산에서도 찾아오시기 좋은 위치입니다.
            </p>
            <p>
              영업시간은 <strong>저녁 7시(19:00)부터 새벽 5시(05:00)까지</strong>입니다. 늦은 시간까지
              운영하니 편한 시간에 맞춰 오시면 됩니다.
            </p>
            <p>
              예약·룸·단체 모임·길안내는 예약 담당{' '}
              <strong>
                손흥민 <a href="tel:01022211937">010-2221-1937</a>
              </strong>{' '}
              으로 전화 주시면 한 번에 안내해 드립니다. 화면 하단 고정 전화바를 누르셔도 바로
              연결됩니다.
            </p>
          </section>

          <section aria-labelledby="hb-info">
            <h2 id="hb-info">🌟 한눈에 보는 정보</h2>
            <div className="bento">
              <div className="bic">
                <h3>📍 주소</h3>
                <p>서울특별시 은평구 통일로 730 지하 1층</p>
              </div>
              <div className="bic">
                <h3>🕐 영업시간</h3>
                <p>저녁 7시(19:00) ~ 새벽 5시(05:00)</p>
              </div>
              <div className="bic">
                <h3>🚇 가까운 역</h3>
                <p>지하철 3호선·6호선 불광역. 연신내·구파발 인근.</p>
              </div>
              <div className="bic">
                <h3>📞 예약·문의</h3>
                <p>
                  손흥민 <a href="tel:01022211937">010-2221-1937</a>
                </p>
              </div>
            </div>
          </section>

          <section aria-labelledby="hb-access">
            <h2 id="hb-access">🚗 불광동호박나이트 오시는 길</h2>
            <ul>
              <li>
                <strong>지하철</strong> — 3호선·6호선 불광역 하차. 연신내역에서도 한 정거장 거리.
              </li>
              <li>
                <strong>버스</strong> — 불광역·대조동 정류장 하차. 은평구 시내버스 다수 경유.
              </li>
              <li>
                <strong>자차</strong> — 내비게이션에 <strong>은평구 통일로 730</strong> 입력. 건물
                지하 1층입니다.
              </li>
              <li>
                <strong>고양·일산</strong> — 자차 약 20~30분, 3호선으로 환승 없이 이동 가능.
              </li>
            </ul>
            <p>
              도착 전에 <a href="tel:01022211937">010-2221-1937</a>로 전화 주시면 현재 위치 기준으로
              길안내를 드립니다.
            </p>
          </section>

          <section aria-labelledby="hb-faq">
            <h2 id="hb-faq">📋 자주 묻는 질문</h2>
            {qa.map((f, i) => (
              <details className="faq" key={f.q} {...(i === 0 ? { open: true } : {})}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </section>

        </div>
      </HobakLayout>
    </>
  );
}

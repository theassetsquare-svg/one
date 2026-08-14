import SEO from '@/components/SEO';
import HobakSchema from '@/components/HobakSchema';
import HobakLayout from '@/components/HobakLayout';

// ⚠️ 불광동호박나이트는 대전원나이트와 별개 가게입니다.
// 대전원나이트의 입장 정책(38세 이상)·여성 손님 혜택(차비 3만원 + 맥주)·영업 시간은
// 이 페이지에 적용되지 않습니다. 확인되지 않은 내용은 쓰지 않고, 사장님 확인 후 채웁니다.
const qa = [
  {
    q: '불광동호박나이트는 어디에 있나요?',
    a: '서울특별시 은평구 불광동에 있습니다. 지하철 3호선·6호선 불광역에서 가깝고 연신내·구파발에서도 이동하기 좋습니다. 자세한 위치는 손흥민 010-2221-1937로 문의하세요.',
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
        title="불광동호박나이트 — 서울 은평구 불광역, 예약 010-2221-1937"
        description="서울 은평구 불광동호박나이트 안내. 지하철 3호선·6호선 불광역 인근, 연신내·구파발에서도 가깝습니다. 예약·룸·단체 모임·길안내 문의는 손흥민 010-2221-1937."
        path="/bulgwangdong-hobak-night"
        ogImage="https://onec-9bc.pages.dev/og/bulgwangdong-hobak-night.png"
        ogTitle="불광동호박나이트 — 예약 010-2221-1937"
        ogDesc="서울 은평구 불광역 인근. 예약·룸·단체 문의 환영."
        ogImageAlt="불광동호박나이트 - 서울 은평구 불광역 인근"
        keywords="불광동호박나이트, 불광동 호박나이트, 호박나이트, 불광호박나이트, 은평구 호박나이트, 불광역 나이트, 은평구 나이트, 불광동호박나이트 예약, 불광동호박나이트 위치, 불광동호박나이트 전화번호"
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
          <p>서울 은평구 불광동 · 예약 손흥민 010-2221-1937</p>
        </div>
        <div className="container">
          <section aria-labelledby="hb-intro">
            <h2 id="hb-intro">불광동호박나이트 안내</h2>
            <p>
              <strong>불광동호박나이트</strong>는 서울특별시 은평구 불광동에 자리한 나이트입니다.
              지하철 3호선·6호선 <strong>불광역</strong>에서 가까워 연신내·구파발·응암동은 물론
              고양·일산에서도 찾아오시기 좋은 위치입니다.
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
                <strong>자차</strong> — 통일로 진입 후 불광동 방면. 인근 공영주차장 이용.
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

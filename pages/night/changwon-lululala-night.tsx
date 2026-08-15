import NightSEO from '@/components/night/NightSEO';
import NightSchema from '@/components/night/NightSchema';
import NightLayout from '@/components/night/NightLayout';
import { AnswerBox, ClosingCta, Crumb, FactTable, RelatedNights } from '@/components/night/NightParts';
import { bySlug } from '@/lib/night';

// 각도5 · 이유 나열형 — 중점 소재: 재방문 이유
const venue = bySlug('changwon-lululala-night');

export default function Page() {
  return (
    <>
      <NightSEO venue={venue} />
      <NightSchema venue={venue} />
      <NightLayout venue={venue}>
        <Crumb venue={venue} />
        <article>
          <header className="nb-hero">
            <h1>창원룰루랄라나이트</h1>
            <p>한 번 온 사람이 다시 오는 이유를 넷으로 끊었습니다</p>
          </header>

          <div className="container">
            <span className="nb-age">만 27세 이상</span>
            <AnswerBox venue={venue} />

            <p style={{ color: '#ddd', maxWidth: 900, margin: '20px auto', lineHeight: 1.8 }}>
              다시 오는 사람이 많은 홀에는 이유가 있습니다. 창원룰루랄라나이트는 경남 상남동 지하에 있는
              나이트클럽이고, 출입은 만 27세 이상만 가능합니다. 또래가 모이는 구조라서 밤의 성격이 흐트러지지
              않습니다. 나머지 이유는 넷으로 나눠 적었습니다.
            </p>

            <section aria-labelledby="h2-1">
              <h2 id="h2-1">첫째, 창원룰루랄라나이트는 연령이 정리돼 있습니다</h2>
              <p>
                출입 기준이 만 27세 이상으로 정해져 있다는 건 생각보다 큰 차이를 만듭니다. 홀 안 나이대가 고르면
                고르는 음악도, 말이 통하는 속도도 달라집니다. 나이대가 너무 벌어진 곳에서는 옆 테이블과 리듬이 안
                맞아 어색해지는 경우가 흔합니다. 창원 룰루랄라나이트를 다시 찾는 사람들이 가장 먼저 꼽는 게 이
                부분입니다. 기준이 있는 홀은 그만큼 예측이 됩니다.
              </p>
              <p className="nb-next">그다음으로 자주 나오는 이야기는 공간 자체입니다.</p>
            </section>

            <section aria-labelledby="h2-2">
              <h2 id="h2-2">둘째, 지하 3층이라는 구조가 주는 것</h2>
              <p>
                지하 깊숙한 층에 자리한 홀은 소리가 밖으로 새지 않습니다. 그래서 볼륨을 올려도 부담이 적고, 안에서
                들리는 소리는 더 두껍습니다. 층을 내려가는 동안 바깥 소음이 끊기는 것도 나이트에서는 꽤 중요한
                장치입니다. 계단이나 승강기를 지나면서 사람의 기분이 한 번 전환되기 때문입니다. 보통 지상층 홀보다
                안이 어둡게 유지되는 것도 같은 이유입니다.
              </p>
              <p className="nb-next">공간이 정해지면 그 안에서 사람이 어떻게 움직이는지가 남습니다.</p>
            </section>

            <section aria-labelledby="h2-3">
              <h2 id="h2-3">셋째, 창원룰루랄라나이트의 자리 선택 폭</h2>
              <p>
                무대 앞과 가장자리는 완전히 다른 밤이 됩니다. 무대 앞은 조명과 소리를 정면으로 맞고, 가장자리는 한
                겹 물러나 대화가 가능합니다. 통로 쪽은 사람이 계속 지나가 시야가 넓은 대신 어수선합니다. 같은 홀
                안에서도 어디에 앉느냐로 밤의 결이 갈립니다. 다시 오는 사람들은 대체로 지난번에 앉았던 자리를
                기억해 두었다가 그대로 요청합니다.
              </p>
              <p className="nb-next">넷째 이유는 언제 가느냐에 달려 있습니다.</p>
            </section>

            <section aria-labelledby="h2-4">
              <h2 id="h2-4">넷째, 요일마다 온도가 다릅니다</h2>
              <p>
                월요일부터 토요일까지 열고 공휴일 전날과 공휴일에도 문을 엽니다. 평일 초저녁은 대체로 여유롭고,
                금요일과 토요일 열한 시 전후는 가장 두껍습니다. 사람이 몰리는 시간에 오면 열기는 확실하지만 자리
                옮기기가 어렵습니다. 반대로 한가한 날에 오면 홀 전체를 골라 앉을 수 있습니다. 같은 창원 나이트클럽
                이라도 요일을 바꾸면 다른 곳처럼 느껴집니다.
              </p>
              <p className="nb-next">이제 남은 건 어디로 가야 하는지입니다.</p>
            </section>

            <section aria-labelledby="h2-5" id="nb-access">
              <h2 id="h2-5">창원룰루랄라나이트 위치</h2>
              <p>
                경남 창원시 성산구 상남동 22-4, 지하 3층입니다. 도로명으로는 마디미로43번길 10에 해당합니다.
                상남동 먹자골목 한복판이라 저녁을 먹고 그대로 걸어 넘어오기 좋은 자리입니다. 창원은 도시철도가 없어
                대부분 버스나 차로 움직이는데, 상남동 상권 자체가 목적지라 길을 잃을 일은 별로 없습니다.
              </p>
              <FactTable venue={venue} />
              <p className="nb-next">자리를 확실히 하려면 도착 전에 한 통 걸어 두는 게 낫습니다.</p>
            </section>

            <section aria-labelledby="h2-6" id="nb-contact">
              <h2 id="h2-6">창원룰루랄라나이트 예약과 문의</h2>
              <p>
                인원과 도착 시간, 원하는 자리. 이 셋만 말하면 예약은 끝납니다. 주말이나 공휴일 전날처럼 사람이 몰릴
                날은 미리 잡아 두는 편이 확실합니다. 출입 기준이 만 27세 이상이므로 신분증은 챙겨 가세요. 확인
                절차에서 걸리면 문 앞에서 되돌아 나오게 됩니다. 창원룰루랄라나이트 방문 전에 이것만 정리해도 밤이
                수월해집니다.
              </p>
              <ClosingCta venue={venue} />
              <p className="nb-next">아래 질문 목록에서 자주 걸리는 부분을 먼저 확인해 보세요.</p>
            </section>

            <section aria-labelledby="h2-faq">
              <h2 id="h2-faq">자주 나오는 질문</h2>
              <p>창원 룰루랄라나이트를 두고 실제로 자주 들어오는 항목만 모았습니다.</p>
              {venue.faqs.map((f) => (
                <details className="faq" key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
              <p className="nb-next">답이 없는 항목은 전화로 물어보는 편이 정확합니다.</p>
            </section>

            <RelatedNights venue={venue} />
          </div>
        </article>
      </NightLayout>
    </>
  );
}

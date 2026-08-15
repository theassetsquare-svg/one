import NightSEO from '@/components/night/NightSEO';
import NightSchema from '@/components/night/NightSchema';
import NightLayout from '@/components/night/NightLayout';
import { AnswerBox, ClosingCta, Crumb, FactTable, RelatedNights } from '@/components/night/NightParts';
import { bySlug } from '@/lib/night';

// 각도11 · 인원별 공략형 — 중점 소재: 인원별 좌석·부킹 차이
const venue = bySlug('suyu-shampoo-night');

export default function Page() {
  return (
    <>
      <NightSEO venue={venue} />
      <NightSchema venue={venue} />
      <NightLayout venue={venue}>
        <Crumb venue={venue} />
        <article>
          <header className="nb-hero">
            <h1>수유샴푸나이트</h1>
            <p>둘이서, 넷이서, 단체로 갈 때 무엇이 달라지는가</p>
          </header>

          <div className="container">
            <AnswerBox venue={venue} />

            <p style={{ color: '#ddd', maxWidth: 900, margin: '20px auto', lineHeight: 1.8 }}>
              두 명이냐 여섯 명이냐로 그날 밤은 절반 이상 결정됩니다. 수유샴푸나이트는 서울 강북구 번동에 있는
              나이트클럽이고, 인원에 따라 앉는 자리도 부킹이 도는 방식도 달라집니다. 인원 구간별로 나눠
              적었습니다.
            </p>

            <section aria-labelledby="h2-1">
              <h2 id="h2-1">둘이서 가는 경우</h2>
              <p>
                두 명은 가장 움직이기 쉬운 구성입니다. 테이블 하나면 정리되고, 늦게 도착해도 자리가 남아 있을
                가능성이 큽니다. 웨이터 입장에서도 두 명은 합석을 잡아 주기 수월합니다. 자리를 옮기기도 부담이
                없습니다. 다만 둘이서는 자리에 사람이 비는 시간이 생기기 쉽습니다. 한 명이 잠시 자리를 뜨면 남은
                한 명이 혼자 앉아 있게 되기 때문입니다.
              </p>
              <p className="nb-next">그 빈틈이 사라지는 게 인원이 하나둘 늘어날 때입니다.</p>
            </section>

            <section aria-labelledby="h2-2">
              <h2 id="h2-2">넷이서 가면 수유샴푸나이트가 가장 편합니다</h2>
              <p>
                네 명은 대체로 가장 균형이 좋은 인원입니다. 부스 하나에 딱 맞고, 누가 잠시 자리를 떠도 테이블이
                비지 않습니다. 대화도 두 갈래 정도로만 갈려서 흩어지지 않습니다. 부킹이 돌 때도 네 명이면 상대
                팀과 인원을 맞추기가 쉽습니다. 수유 샴푸나이트에서 자리 배정을 받을 때 네 명이라고 말하면 대체로
                안내가 빠른 것도 이런 이유입니다.
              </p>
              <p className="nb-next">여기서 인원이 더 늘어나면 접근 자체를 바꿔야 합니다.</p>
            </section>

            <section aria-labelledby="h2-3">
              <h2 id="h2-3">다섯 이상, 단체로 갈 때</h2>
              <p>
                다섯을 넘어가면 테이블을 붙이는 방식으로는 한계가 옵니다. 자리가 길게 늘어지면서 양 끝에 앉은
                사람끼리는 대화가 끊깁니다. 이 구간부터는 룸 쪽이 훨씬 낫습니다. 문이 있어 소리가 걸러지고, 인원이
                한 공간에 모여 있어 흩어지지 않습니다. 단체 방문은 예약 시점이 특히 중요합니다. 룸은 수가 정해져
                있어 먼저 잡는 쪽이 가져갑니다.
              </p>
              <p className="nb-next">그럼 실제 자리 배정은 어떤 기준으로 이뤄질까요.</p>
            </section>

            <section aria-labelledby="h2-4">
              <h2 id="h2-4">수유샴푸나이트 자리 배정 기준</h2>
              <p>
                배정은 보통 두 가지로 정해집니다. 인원 수와 도착 시간입니다. 같은 네 명이라도 여덟 시에 온 팀과 열한
                시에 온 팀은 받는 자리가 다릅니다. 좋은 자리부터 먼저 나가기 때문입니다. 여기에 원하는 조건을 미리
                말해 두면 세 번째 기준이 생깁니다. 조용한 쪽인지, 무대가 보이는 쪽인지. 말하지 않으면 남은 자리
                기준으로 배정됩니다.
              </p>
              <p className="nb-next">자리 이야기가 정리됐으면 위치를 확인할 차례입니다.</p>
            </section>

            <section aria-labelledby="h2-5" id="nb-access">
              <h2 id="h2-5">수유샴푸나이트 위치</h2>
              <p>
                서울 강북구 번동입니다. 4호선 수유역 4번 출구에서 걸어서 금방 닿는 거리에 있습니다. 수유 나이트클럽
                을 찾아 이 일대를 처음 오는 사람이라면 수유역 상권을 기준으로 잡으면 됩니다. 주변에 식당이 많아
                저녁을 먹고 이동하기에도 무리가 없습니다.
              </p>
              <FactTable venue={venue} />
              <p className="nb-next">인원이 정해졌다면 마지막으로 예약 시점을 챙기면 됩니다.</p>
            </section>

            <section aria-labelledby="h2-6" id="nb-contact">
              <h2 id="h2-6">수유샴푸나이트 인원별 예약 문의</h2>
              <p>
                둘이라면 당일에 걸어도 대체로 됩니다. 넷이면 하루 앞이 무난합니다. 다섯 이상이면 며칠 여유를 두는
                편이 안전합니다. 공휴일과 그 전날은 어느 인원이든 일찍 마감되니 이 점은 별도로 감안해야 합니다.
                전화할 때는 인원과 도착 시간, 원하는 자리를 함께 말하면 됩니다. 수유샴푸나이트에서 인원 구성에 맞는
                자리를 받으려면 이 통화가 가장 확실합니다.
              </p>
              <ClosingCta venue={venue} />
              <p className="nb-next">인원 관련해 자주 나오는 질문을 아래에 모았습니다.</p>
            </section>

            <section aria-labelledby="h2-faq">
              <h2 id="h2-faq">자주 나오는 질문</h2>
              <p>수유 샴푸나이트를 인원별로 어떻게 잡는지 묻는 항목입니다.</p>
              {venue.faqs.map((f) => (
                <details className="faq" key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
              <p className="nb-next">아래에 서울 인근 다른 홀도 정리해 두었습니다.</p>
            </section>

            <RelatedNights venue={venue} />
          </div>
        </article>
      </NightLayout>
    </>
  );
}

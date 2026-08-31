import NightSEO from '@/components/night/NightSEO';
import NightSchema from '@/components/night/NightSchema';
import NightLayout from '@/components/night/NightLayout';
import { AnswerBox, ClosingCta, Crumb, FactTable, RelatedNights } from '@/components/night/NightParts';
import { bySlug } from '@/lib/night';

// 각도13 · 단골 관점형 — 중점 소재: 웨이터 소통·자리 확보
const venue = bySlug('suwon-chance-dome-night');

export default function Page() {
  return (
    <>
      {/* ★ 이 화면은 /area/ 밑에 있다. 주소를 직접 주지 않으면
          canonical 이 /info/suwon-chance-dome-night-1/ 을 가리켜 남의 주소가 된다. */}
      <NightSEO venue={venue} canonicalPath="/area/suwon-chance-dome-night-1/" />
      <NightSchema venue={venue} canonicalPath="/area/suwon-chance-dome-night-1/" />
      <NightLayout venue={venue}>
        <Crumb venue={venue} />
        <article>
          <header className="nb-hero">
            <h1>수원찬스돔나이트</h1>
            <p>몇 번 다녀 본 사람은 순서가 다릅니다</p>
          </header>

          <div className="container">
            <AnswerBox venue={venue} />

            <p style={{ color: '#ddd', maxWidth: 900, margin: '20px auto', lineHeight: 1.8 }}>
              세 번쯤 다녀 본 사람은 홀에 들어서기 전에 이미 자리를 정해 놓습니다. 수원찬스돔나이트는 경기 수원시
              권선구 권선로에 있는 나이트클럽이고, 저녁 6시에 문을 엽니다. 익숙해진 사람이 무엇을 먼저 하는지
              적었습니다.
            </p>

            <section aria-labelledby="h2-1">
              <h2 id="h2-1">수원찬스돔나이트를 아는 사람이 먼저 하는 것</h2>
              <p>
                처음 오는 사람은 도착해서 자리를 고릅니다. 익숙해진 사람은 도착하기 전에 이미 정해 둡니다. 이
                차이가 밤 전체를 가릅니다. 전화를 걸 때 지난번에 앉았던 자리를 말하고, 도착 시간과 인원을 함께
                넘깁니다. 그러면 홀에 들어서는 순간 안내를 받습니다. 수원 찬스돔나이트에서 자주 보이는 사람들은
                대체로 이 순서를 따릅니다. 현장에서 정리할 일이 남아 있지 않은 상태로 들어옵니다.
              </p>
              <p className="nb-next">그 자리를 어떻게 고르는지가 그다음 이야기입니다.</p>
            </section>

            <section aria-labelledby="h2-2">
              <h2 id="h2-2">자리는 목적에 따라 고정됩니다</h2>
              <p>
                여러 번 다니면 자기 자리가 생깁니다. 무대 앞을 고르는 사람은 계속 무대 앞을 고르고, 가장자리를
                쓰는 사람은 계속 가장자리를 씁니다. 이유는 단순합니다. 그 자리에서 그날 원하는 것이 나오기
                때문입니다. 룸과 부스, 테이블 중 무엇을 잡느냐도 마찬가지입니다. 한 번 맞는 자리를 찾으면 그다음
                방문부터는 고민이 사라집니다. 자리를 바꾸는 건 목적이 바뀔 때뿐입니다.
              </p>
              <p className="nb-next">자리가 정해지면 남는 변수는 시간 하나입니다.</p>
            </section>

            <section aria-labelledby="h2-3">
              <h2 id="h2-3">문 여는 시각에 맞춰 들어갑니다</h2>
              <p>
                저녁 6시에 문을 열어 새벽 4시에 닫습니다. 개장 시각이 이른 편이라 초저녁 방문이 가능합니다. 자주
                다니는 사람들이 이 시각을 노리는 이유는 분명합니다. 홀이 비어 있을 때 원하는 자리를 확보해 두고,
                사람이 차오르는 걸 그 자리에서 지켜보기 때문입니다. 늦게 들어오면 순서가 반대가 됩니다. 이미 찬
                홀에서 남은 자리를 받게 됩니다.
              </p>
              <p className="nb-next">자리를 확보하는 실제 수단은 결국 사람입니다.</p>
            </section>

            <section aria-labelledby="h2-4">
              <h2 id="h2-4">수원찬스돔나이트 웨이터 활용법</h2>
              <p>
                웨이터에게 무엇을 말하느냐로 결과가 갈립니다. 인원, 원하는 자리, 머무를 시간. 이 셋을 넘기면 배정이
                정확해집니다. 여기에 오늘 무엇을 하러 왔는지를 한 줄 덧붙이면 더 좋습니다. 조용히 마실 건지, 사람을
                만날 건지에 따라 안내가 완전히 달라집니다. 익숙한 사람들은 이 대화를 짧게 끝냅니다. 매번 같은 것을
                말하기 때문에 서로 시간이 절약됩니다.
              </p>
              <p className="nb-next">이 모든 게 성립하려면 우선 도착해야 합니다.</p>
            </section>

            <section aria-labelledby="h2-5" id="nb-access">
              <h2 id="h2-5">수원찬스돔나이트 위치</h2>
              <p>
                경기도 수원시 권선구 권선로 673입니다. 지번으로는 권선동 1019-9에 해당합니다. 큰길가라 차로
                접근하기 좋은 자리입니다. 수원 나이트클럽을 찾아 권선구 쪽을 처음 오는 사람이라면 권선로 도로명만
                기억하면 됩니다. 상권 안쪽이 아니라 도로변이라 간판을 찾기 어렵지 않습니다.
              </p>
              <FactTable venue={venue} />
              <p className="nb-next">남은 건 언제 전화를 거느냐입니다.</p>
            </section>

            <section aria-labelledby="h2-6" id="nb-contact">
              <h2 id="h2-6">수원찬스돔나이트 예약과 문의</h2>
              <p>
                평일은 당일에 걸어도 대체로 됩니다. 금요일과 토요일은 며칠 앞서 잡는 편이 확실합니다. 원하는 자리가
                정해져 있는 사람일수록 일찍 거는 게 실제 차이를 만듭니다. 룸과 부스는 수가 정해져 있어 먼저 잡는
                쪽이 가져갑니다. 수원찬스돔나이트를 손에 익히는 가장 빠른 방법은 같은 자리를 두세 번 반복해서 잡아
                보는 것입니다.
              </p>
              <ClosingCta venue={venue} />
              <p className="nb-next">반복 방문에서 나오는 질문을 아래에 모았습니다.</p>
            </section>

            <section aria-labelledby="h2-faq">
              <h2 id="h2-faq">자주 나오는 질문</h2>
              <p>수원 찬스돔나이트를 여러 번 다닌 사람들이 묻는 항목입니다.</p>
              {venue.faqs.map((f) => (
                <details className="faq" key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
              <p className="nb-next">아래에 수도권 다른 홀도 함께 정리해 두었습니다.</p>
            </section>

            <RelatedNights venue={venue} />
          </div>
        </article>
      </NightLayout>
    </>
  );
}

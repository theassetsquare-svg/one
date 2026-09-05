import NightSEO from '@/components/night/NightSEO';
import NightSchema from '@/components/night/NightSchema';
import NightLayout from '@/components/night/NightLayout';
import { AnswerBox, ClosingCta, Crumb, FactTable, RelatedNights } from '@/components/night/NightParts';
import { bySlug } from '@/lib/night';

// 각도2 · 질문 던지기형 — 중점 소재: 몰리는 이유
const venue = bySlug('daejeon-seven-night');

export default function Page() {
  return (
    <>
      <NightSEO venue={venue} />
      <NightSchema venue={venue} />
      <NightLayout venue={venue}>
        <Crumb venue={venue} />
        <article>
          <header className="nb-hero">
            {/* 설계도 4장 — 광고주 쪽 상단 「광고」 라벨 (S4 2026-09-05) */}
            <p className="ad-label" style={{ display: "inline-block", margin: "0 0 10px", padding: "3px 10px", border: "1px solid #c9a227", borderRadius: 4, fontSize: 12, color: "#c9a227", letterSpacing: ".04em" }}>광고</p>
            <h1>대전세븐나이트</h1>
            <p>혼자 들어가도 되는 홀인지부터 따져 봅니다</p>
          </header>

          <div className="container">
            <AnswerBox venue={venue} />

            <p style={{ color: '#ddd', maxWidth: 900, margin: '20px auto', lineHeight: 1.8 }}>
              혼자 들어가면 자리가 뜨지 않을까? 대전세븐나이트를 검색하는 사람이 가장 자주 품는 질문입니다. 대전
              중구 유천동에 있는 홀이고, 답은 구조를 보면 나옵니다. 왜 이 질문이 여기서 특히 많이 나오는지부터
              풀어 보겠습니다.
            </p>

            <section aria-labelledby="h2-1">
              <h2 id="h2-1">왜 대전세븐나이트에 이 질문이 많을까</h2>
              <p>
                홀 하나짜리 나이트에서는 혼자 온 사람이 눈에 띕니다. 모두가 같은 무대를 보고 있으니 빈 자리가 그대로
                드러나기 때문입니다. 공간이 나뉜 곳은 사정이 다릅니다. 메인 홀과 별실이 따로 있으면 사람의 밀도가
                한 곳에 몰리지 않습니다. 대전 세븐나이트를 두고 이 질문이 반복되는 건 구조를 모르는 상태에서 홀
                하나짜리를 떠올리기 때문입니다.
              </p>
              <p className="nb-next">그럼 실제로는 어떤 답이 나오는지 봐야 합니다.</p>
            </section>

            <section aria-labelledby="h2-2">
              <h2 id="h2-2">답은 웨이터가 있느냐에 달려 있습니다</h2>
              <p>
                나이트에서 혼자 온 손님을 정리하는 건 웨이터입니다. 자리를 안내하고 합석을 연결하는 역할이 따로
                있으니 혼자 앉아 있는 시간이 길지 않습니다. 그래서 답은 됩니다 쪽입니다. 다만 조건이 하나 붙습니다.
                원하는 바를 분명히 말해야 합니다. 조용히 있고 싶은지, 사람을 만나고 싶은지에 따라 안내가 완전히
                갈립니다. 말하지 않으면 웨이터도 판단할 근거가 없습니다.
              </p>
              <p className="nb-next">그 판단의 근거가 되는 게 어디에 앉느냐입니다.</p>
            </section>

            <section aria-labelledby="h2-3">
              <h2 id="h2-3">대전세븐나이트 메인 홀과 별실</h2>
              <p>
                메인 홀은 무대 소리를 그대로 받습니다. 조명과 사람의 움직임이 전부 여기 모입니다. 별실은 한 겹
                떨어져 있어 대화가 수월합니다. 혼자 왔다면 첫 자리는 메인 홀 가장자리가 무난합니다. 분위기는 받되
                과하게 노출되지 않기 때문입니다. 일행이 붙으면 별실로 옮기는 식으로 쓰는 사람도 많습니다. 같은 밤
                안에서 공간을 바꿔 가며 쓰는 구조입니다.
              </p>
              <p className="nb-next">공간과 함께 밤의 결을 바꾸는 게 무대입니다.</p>
            </section>

            <section aria-labelledby="h2-4">
              <h2 id="h2-4">밴드와 디제이가 번갈아 오릅니다</h2>
              <p>
                무대에 밴드가 오르는 시간과 디제이가 도는 시간은 완전히 다릅니다. 밴드 시간에는 곡이 느려지고 홀
                전체가 한 방향을 봅니다. 혼자 온 사람에게는 이 구간이 오히려 편합니다. 모두가 무대를 보고 있어
                자리에 앉아 있는 게 자연스럽기 때문입니다. 디제이 구간으로 넘어가면 사람이 일어서고 이동이
                잦아집니다. 같은 홀에서 두 종류의 밤이 번갈아 도는 셈입니다.
              </p>
              <p className="nb-next">그럼 어디로 가면 이 흐름을 만날 수 있을까요.</p>
            </section>

            <section aria-labelledby="h2-5" id="nb-access">
              <h2 id="h2-5">대전세븐나이트 위치</h2>
              <p>
                대전광역시 중구 당디로 112입니다. 지번으로는 유천동 332-28이고, 건물 2층과 3층을 함께 씁니다. 큰
                길에서 차로 들어오기 좋은 자리입니다. 대전 나이트클럽을 찾아 유천동 쪽을 처음 오는 사람이라면
                당디로 도로명을 기준으로 잡으면 됩니다. 층이 둘이니 도착해서 어느 층으로 갈지 확인하면 됩니다.
              </p>
              <FactTable venue={venue} />
              <p className="nb-next">혼자든 여럿이든 전화 한 통이면 자리가 정리됩니다.</p>
            </section>

            <section aria-labelledby="h2-6" id="nb-contact">
              <h2 id="h2-6">대전세븐나이트 예약과 문의</h2>
              <p>
                전화나 공식 계정으로 미리 잡을 수 있고 당일 예약도 가능한 편입니다. 혼자 갈 때도 미리 말해 두면
                자리를 그에 맞춰 잡아 줍니다. 이게 실제로 가장 큰 차이를 만듭니다. 금요일과 토요일은 자리가 빨리
                나가니 일찍 거는 쪽이 유리합니다. 대전세븐나이트에 혼자 갈지 말지 고민 중이라면, 그 고민을 통화로
                넘기는 게 제일 빠릅니다.
              </p>
              <ClosingCta venue={venue} />
              <p className="nb-next">비슷한 질문을 아래에 더 모아 두었습니다.</p>
            </section>

            <section aria-labelledby="h2-faq">
              <h2 id="h2-faq">자주 나오는 질문</h2>
              <p>대전 세븐나이트를 혼자 가도 되는지 묻는 항목이 특히 많습니다.</p>
              {venue.faqs.map((f) => (
                <details className="faq" key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
              <p className="nb-next">아래에 다른 지역 홀도 함께 정리해 두었습니다.</p>
            </section>

            <RelatedNights venue={venue} />
          </div>
        </article>
      </NightLayout>
    </>
  );
}

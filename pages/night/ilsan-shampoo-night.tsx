import NightSEO from '@/components/night/NightSEO';
import NightSchema from '@/components/night/NightSchema';
import NightLayout from '@/components/night/NightLayout';
import { AnswerBox, ClosingCta, Crumb, FactTable, RelatedNights } from '@/components/night/NightParts';
import { bySlug } from '@/lib/night';

// 각도3 · 장면 묘사형 — 중점 소재: 음악·조명·무대 변화
const venue = bySlug('ilsan-shampoo-night');

export default function Page() {
  return (
    <>
      <NightSEO venue={venue} />
      <NightSchema venue={venue} />
      <NightLayout venue={venue}>
        <Crumb venue={venue} />
        <article>
          <header className="nb-hero">
            <h1>일산샴푸나이트</h1>
            <p>마지막 한 시간, 홀이 식어 가는 장면</p>
          </header>

          <div className="container">
            <AnswerBox venue={venue} />

            <p style={{ color: '#ddd', maxWidth: 900, margin: '20px auto', lineHeight: 1.8 }}>
              곡이 한 박자 느려지는 순간이 있습니다. 일산샴푸나이트의 마지막 한 시간은 거기서 시작됩니다. 경기
              고양시 일산동구 마두동에 있는 홀이고, 이 시간대의 풍경은 자정 무렵과 완전히 다릅니다.
            </p>

            <section aria-labelledby="h2-1">
              <h2 id="h2-1">일산샴푸나이트 건물 앞에 도착한 순간</h2>
              <p>
                큰길에서 건물로 들어서면 바깥 소리가 먼저 끊깁니다. 승강기 안은 조용하고, 문이 열리는 순간 소리가
                한꺼번에 밀려옵니다. 이 낙차가 나이트에서 첫 장면 역할을 합니다. 밖에서 안으로 넘어오는 몇 초 동안
                기분이 한 번 바뀝니다. 일산 샴푸나이트에 처음 오는 사람도 이 구간은 대체로 똑같이 겪습니다. 안으로
                들어서기 전에 이미 밤이 시작돼 있는 셈입니다.
              </p>
              <p className="nb-next">문이 완전히 열리면 홀의 크기가 눈에 들어옵니다.</p>
            </section>

            <section aria-labelledby="h2-2">
              <h2 id="h2-2">일산샴푸나이트 홀 안의 풍경</h2>
              <p>
                중앙 홀을 기준으로 부킹룸과 부스가 둘러싸는 구조입니다. 무대 조명은 중앙으로 떨어지고, 가장자리로
                갈수록 어두워집니다. 그래서 같은 홀 안인데도 밝기가 층층이 다릅니다. 무대와 가까울수록 소리가
                몸으로 오고, 멀어질수록 배경음처럼 깔립니다. 어느 밝기 안에 앉아 있느냐가 그날 밤의 기억을
                결정합니다. 자리를 고르는 건 결국 조명을 고르는 일에 가깝습니다.
              </p>
              <p className="nb-next">그 조명은 밤이 흐르면서 계속 바뀝니다.</p>
            </section>

            <section aria-labelledby="h2-3">
              <h2 id="h2-3">음악과 조명이 바뀌는 순서</h2>
              <p>
                초저녁에는 무난한 곡이 낮은 볼륨으로 깔립니다. 조명도 덜 움직입니다. 열 시를 넘기면 곡이 빨라지고
                조명 전환이 잦아집니다. 자정 무렵이 가장 강합니다. 소리와 빛이 동시에 최대로 올라가는 구간입니다.
                이 구간을 지나면 다시 내려가기 시작합니다. 곡의 속도가 떨어지고 조명 색이 낮아집니다. 밤 전체가
                한 번 올라갔다 내려오는 곡선을 그립니다.
              </p>
              <p className="nb-next">그 내리막에서 사람들의 움직임도 달라집니다.</p>
            </section>

            <section aria-labelledby="h2-4">
              <h2 id="h2-4">문 닫기 직전, 사람들이 빠지는 방식</h2>
              <p>
                마지막 한 시간에는 통로가 비기 시작합니다. 무대 앞에 서 있던 사람들이 자리로 돌아가고, 테이블마다
                짐을 챙기는 손이 늘어납니다. 소리가 줄어드니 대화가 오히려 이때 가장 잘 됩니다. 남아 있는 사람들은
                대부분 끝까지 있기로 정하고 온 이들입니다. 홀이 식어 가는 속도를 지켜보는 것도 나이트의 한
                장면입니다. 절정만 보고 나가면 이 부분은 놓칩니다.
              </p>
              <p className="nb-next">이 풍경을 보려면 우선 그 자리에 있어야 합니다.</p>
            </section>

            <section aria-labelledby="h2-5" id="nb-access">
              <h2 id="h2-5">일산샴푸나이트 위치</h2>
              <p>
                경기도 고양시 일산동구 중앙로 1160, 마두동 805-1 오원빌딩입니다. 3호선 마두역 8번 출구에서 100
                미터쯤 떨어져 있어 역에서 나와 금방 닿습니다. 일산 나이트클럽을 찾아 마두동 쪽을 처음 오는
                사람이라면 마두역 출구 번호만 기억하면 됩니다. 중앙로 큰길가라 건물을 찾기는 어렵지 않습니다.
              </p>
              <FactTable venue={venue} />
              <p className="nb-next">어느 장면에 도착할지는 몇 시에 가느냐로 정해집니다.</p>
            </section>

            <section aria-labelledby="h2-6" id="nb-contact">
              <h2 id="h2-6">일산샴푸나이트 예약과 문의</h2>
              <p>
                전화나 공식 계정으로 미리 문의하면 됩니다. 인원과 도착 시간, 원하는 자리를 말해 두면 됩니다. 절정을
                보고 싶다면 자정 전에, 마지막 풍경까지 보고 싶다면 그보다 일찍 자리를 잡아 두는 편이 낫습니다. 홀
                가장자리는 늦게 갈수록 먼저 사라집니다. 일산샴푸나이트에서 원하는 장면을 보려면 도착 시각을 먼저
                정하는 게 순서입니다.
              </p>
              <ClosingCta venue={venue} />
              <p className="nb-next">시간대에 관한 질문을 아래에 모았습니다.</p>
            </section>

            <section aria-labelledby="h2-faq">
              <h2 id="h2-faq">자주 나오는 질문</h2>
              <p>일산 샴푸나이트의 시간대별 풍경을 묻는 항목만 모았습니다.</p>
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

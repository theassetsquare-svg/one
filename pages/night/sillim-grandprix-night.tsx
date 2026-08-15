import NightSEO from '@/components/night/NightSEO';
import NightSchema from '@/components/night/NightSchema';
import NightLayout from '@/components/night/NightLayout';
import { AnswerBox, ClosingCta, Crumb, FactTable, RelatedNights } from '@/components/night/NightParts';
import { bySlug } from '@/lib/night';

// 각도9 · 비교 설명형(일반 나이트와 비교, 특정 업소 실명 비교 없음) — 중점 소재: 홀 구조 차이
const venue = bySlug('sillim-grandprix-night');

export default function Page() {
  return (
    <>
      <NightSEO venue={venue} />
      <NightSchema venue={venue} />
      <NightLayout venue={venue}>
        <Crumb venue={venue} />
        <article>
          <header className="nb-hero">
            <h1>신림그랑프리나이트</h1>
            <p>흔한 나이트와 구조에서 갈리는 지점을 짚었습니다</p>
          </header>

          <div className="container">
            <AnswerBox venue={venue} />

            <p style={{ color: '#ddd', maxWidth: 900, margin: '20px auto', lineHeight: 1.8 }}>
              홀 하나로만 굴러가는 곳과 공간이 나뉜 곳은 밤이 완전히 다르게 흘러갑니다. 신림그랑프리나이트는 서울
              관악구 신림로에 있는 나이트클럽이고, 이 구분에서 뒤쪽에 속합니다. 무엇이 어떻게 갈리는지 하나씩
              비교해 보겠습니다.
            </p>

            <section aria-labelledby="h2-1">
              <h2 id="h2-1">신림그랑프리나이트가 갈리는 첫 지점</h2>
              <p>
                보통의 나이트는 커다란 홀 하나에 테이블을 배치하는 구조입니다. 무대 하나를 모두가 함께 보는
                방식이라 자리에 따른 차이가 앞뒤 거리 정도로 정리됩니다. 공간이 나뉜 곳은 다릅니다. 같은 밤에도
                전혀 다른 밀도의 자리를 고를 수 있습니다. 신림 그랑프리나이트가 흔한 구성과 갈리는 첫 지점이
                여기입니다. 선택지가 하나가 아니라 여러 겹이라는 뜻입니다.
              </p>
              <p className="nb-next">그 차이는 건물 구조와도 이어져 있습니다.</p>
            </section>

            <section aria-labelledby="h2-2">
              <h2 id="h2-2">복합쇼핑몰 안에 있다는 조건</h2>
              <p>
                단독 건물에 있는 홀과 복합 상가 안에 있는 홀은 접근 방식부터 다릅니다. 상가 안에 있으면 주변에 다른
                업종이 함께 붙어 있어 저녁을 먹고 그대로 이동하기 좋습니다. 반대로 처음 오는 사람은 입구를 한 번
                더 확인해야 합니다. 신림로 340, 신림동 1422-5 르네상스 복합쇼핑몰 안이라는 조건이 이런 성격을
                만듭니다. 목적지 하나만 보고 움직이는 구조가 아니라는 뜻입니다.
              </p>
              <p className="nb-next">안으로 들어가면 자리 자체가 몇 종류로 갈립니다.</p>
            </section>

            <section aria-labelledby="h2-3">
              <h2 id="h2-3">신림그랑프리나이트 홀·룸·부스의 차이</h2>
              <p>
                홀은 무대 소리를 그대로 받는 공간입니다. 열기는 가장 크고 대화는 가장 어렵습니다. 부스는 홀 쪽으로
                열려 있어 분위기는 받되 자리는 구분됩니다. 룸은 문이 있어 소리가 한 겹 걸러집니다. 대화가
                목적이라면 룸, 무대가 목적이라면 홀입니다. 부스는 그 사이입니다. 세 가지가 한 곳에 있다는 게
                실질적인 차이입니다. 무엇을 하러 왔는지에 따라 답이 달라집니다.
              </p>
              <p className="nb-next">공간이 나뉘면 자연히 모이는 사람도 달라집니다.</p>
            </section>

            <section aria-labelledby="h2-4">
              <h2 id="h2-4">손님층이 한쪽으로 쏠리지 않습니다</h2>
              <p>
                연령이나 성격이 한쪽으로 몰리는 홀은 예측이 쉬운 대신 폭이 좁습니다. 공간이 나뉘어 있으면 서로 다른
                목적의 손님이 같은 시간에 들어와도 부딪히지 않습니다. 신림역 일대 상권 자체가 나이대가 넓게
                섞이는 곳이라 이 구조가 더 잘 맞습니다. 조용히 이야기하러 온 팀과 무대를 보러 온 팀이 각자
                자리에서 각자의 밤을 보내는 식입니다.
              </p>
              <p className="nb-next">그럼 실제로 어떻게 찾아가면 되는지 정리하겠습니다.</p>
            </section>

            <section aria-labelledby="h2-5" id="nb-access">
              <h2 id="h2-5">신림그랑프리나이트 위치</h2>
              <p>
                서울 관악구 신림로 340입니다. 지번으로는 신림동 1422-5, 르네상스 복합쇼핑몰에 해당합니다. 2호선
                신림역이 가까워 역에서 나와 걸어가면 됩니다. 신림동 나이트클럽을 처음 찾는 사람이라면 상가 건물
                이름을 기억해 두는 편이 낫습니다. 큰길가 상권 한복판이라 주변 간판이 많은 자리입니다.
              </p>
              <FactTable venue={venue} />
              <p className="nb-next">공간이 여러 종류라 예약 방식도 조금 달라집니다.</p>
            </section>

            <section aria-labelledby="h2-6" id="nb-contact">
              <h2 id="h2-6">신림그랑프리나이트 예약과 문의</h2>
              <p>
                홀만 있는 곳은 인원만 말하면 되지만, 공간이 나뉜 곳은 어떤 자리를 원하는지까지 말해야 합니다. 룸과
                부스는 수가 정해져 있어 주말 전에는 먼저 나갑니다. 인원, 도착 시간, 원하는 공간. 이 셋을 말해 두면
                남은 건 현장에서 정리됩니다. 신림그랑프리나이트에서 자리를 제대로 고르고 싶다면 이 통화가 실제로
                가장 크게 작용합니다.
              </p>
              <ClosingCta venue={venue} />
              <p className="nb-next">비교하다 남은 궁금증은 아래에서 확인해 보세요.</p>
            </section>

            <section aria-labelledby="h2-faq">
              <h2 id="h2-faq">자주 나오는 질문</h2>
              <p>신림 그랑프리나이트의 공간 구분을 묻는 항목이 특히 많습니다.</p>
              {venue.faqs.map((f) => (
                <details className="faq" key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
              <p className="nb-next">아래에 서울 다른 지역 홀도 함께 정리해 두었습니다.</p>
            </section>

            <RelatedNights venue={venue} />
          </div>
        </article>
      </NightLayout>
    </>
  );
}

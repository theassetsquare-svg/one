import PickSEO from '@/components/pick/PickSEO';
import PickLayout from '@/components/pick/PickLayout';
import { Checklist } from '@/components/pick/PickParts';
import { AD_KAKAO, REGION_GROUPS, SITE } from '@/lib/pick';

/**
 * 홈 — "전국 나이트, 고르는 기준" 소개 랜딩.
 *
 * ⚠️ 이 사이트는 특정 광고주 소속이 아닙니다. 홈에는 특정 가게 간판을 걸지 않고,
 *    전화번호도 넣지 않습니다. 문의 창구는 광고문의 카카오톡 besta12 하나뿐입니다.
 */
const TITLE = '전국 나이트, 고르는 기준 — 40곳 선택 가이드';
const DESC =
  '전국 나이트 40곳을 순위가 아니라 선택 축으로 정리했습니다. 어떤 사람에게 맞는 홀인지, 가기 전 무엇을 확인해야 하는지만 다룹니다. 확인되지 않은 정보는 확인 불가로 남깁니다.';

const FAQS = [
  {
    q: '이 사이트는 특정 나이트 소속인가요',
    a: '아닙니다. 특정 업소 소속이 아닌 선택 기준 안내 사이트이며 현재 광고주를 모집하고 있습니다.',
  },
  {
    q: '나이트를 고를 때 무엇부터 정해야 하나요',
    a: '인원과 도착 시간과 이동 방법, 그리고 오늘 밤의 목적 네 가지입니다. 이 넷이면 대부분 좁혀집니다.',
  },
  {
    q: '확인 불가라고 적힌 항목은 무슨 뜻인가요',
    a: '웹에서 확인되지 않았거나 자료가 서로 어긋난다는 뜻입니다. 추측해서 채우지 않고 그대로 남겨 둡니다.',
  },
];

export default function Home() {
  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE}/#website`,
    name: '전국 나이트, 고르는 기준',
    url: `${SITE}/`,
    description: DESC,
    inLanguage: 'ko-KR',
  };
  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${SITE}/#faq`,
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
  const crumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${SITE}/#breadcrumb`,
    itemListElement: [{ '@type': 'ListItem', position: 1, name: '홈', item: `${SITE}/` }],
  };

  return (
    <>
      <PickSEO
        title={TITLE}
        description={DESC}
        path="/"
        image="/og/pick-home.png"
        imageAlt="전국 나이트 고르는 기준 — 광고문의 카카오톡 besta12 안내 카드"
        keywords={[
          '전국 나이트',
          '나이트 고르는 기준',
          '나이트 선택 가이드',
          '나이트클럽 비교',
          '지역별 나이트',
          '나이트 광고문의',
        ]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <PickLayout footerLines={['전국 나이트, 고르는 기준', '특정 업소 소속이 아닌 선택 기준 안내 사이트']}>
        <article>
          <header className="pk-hero">
            <span className="pk-eyebrow">선택 기준 가이드 · 40곳</span>
            <h1>전국 나이트, 고르는 기준</h1>
            <p>
              어디가 제일 좋다고 말하지 않습니다. 어떤 사람에게 어떤 홀이 맞는지, 가기 전에 무엇을 확인해야 하는지만
              적습니다.
            </p>
          </header>

          <div className="pk-wrap">
            <p className="pk-lead">
              밤 자리를 고를 때 대부분은 이름부터 검색합니다. 그런데 실제로 그날의 만족을 가르는 건 이름이 아니라
              조건입니다. 몇 명인지, 몇 시에 도착하는지, 차를 쓰는지, 무엇을 하러 가는지. 이 사이트는 그 네 가지에
              맞춰 40곳을 나눠 두었습니다.
            </p>

            <section className="pk-sec" aria-labelledby="h2-what">
              <h2 id="h2-what">이 사이트가 하는 일</h2>
              <p>
                전국 나이트 40곳의 주소·가장 가까운 역·층·출입 연령을 웹에서 확인해 표로 정리했습니다. 확인되지
                않은 항목은 확인 불가로 남깁니다. 없는 정보를 채워 넣으면 안내가 아니라 추측이 되기 때문입니다.
              </p>
              <p>
                순위를 매기거나 다른 업소를 깎아내리지 않습니다. 각 페이지는 하나의 선택 축을 잡고, 그 축에서 이곳이
                맞는 사람과 맞지 않는 사람을 함께 적습니다. 판단은 읽는 사람 몫으로 남겨 둡니다.
              </p>
            </section>

            <section className="pk-sec" aria-labelledby="h2-how" id="pk-how">
              <h2 id="h2-how">고르기 전에 무엇을 정해야 할까요?</h2>
              <p>
                네 가지를 먼저 정하면 후보가 절반 이하로 줄어듭니다. 목록을 열기 전에 아래 항목부터 채워 보십시오.
              </p>
              <Checklist
                title="나이트 고르기 전 체크 네 가지"
                items={[
                  '인원 — 둘이면 부스, 넷이면 테이블, 열을 넘으면 룸이나 두 개 층 규모를 봅니다',
                  '도착 시간 — 초저녁은 자리를 고르고, 자정 이후는 마감 시간을 봅니다',
                  '이동 방법 — 차를 쓸 계획이면 역세권 조건은 후순위로 밀립니다',
                  '오늘의 목적 — 대화가 목적이면 규모와 무대는 오히려 비용이 됩니다',
                ]}
              />
            </section>

            <section className="pk-sec" aria-labelledby="h2-page">
              <h2 id="h2-page">각 페이지는 어떻게 구성돼 있나요?</h2>
              <p>
                40곳 모두 같은 순서로 읽힙니다. 핵심 3줄로 먼저 답하고, 확인된 사실을 표로 보여 준 다음, 이런 사람과
                이런 날에 맞는다는 기준을 이어 붙입니다. 마지막에는 제목이 던진 질문의 답과 한 줄 정리가 옵니다.
              </p>
              <p>
                급하면 핵심 3줄과 표만 봐도 됩니다. 고민 중이라면 기준 항목을 읽고, 마지막 한 줄로 확인하면 됩니다.
              </p>
            </section>

            <section className="pk-sec" aria-labelledby="h2-region">
              <h2 id="h2-region">지역별로 들어가기</h2>
              <p>
                40곳을 다섯 권역으로 나눠 두었습니다. 목록에서는 업소마다 한 문장짜리 선택 축을 함께 볼 수 있습니다.
              </p>
              <div className="pk-grid">
                {REGION_GROUPS.map((g) => (
                  <a key={g.id} href={`/pick/#pk-${g.id}`} className="pk-card">
                    <h3>{g.label}</h3>
                    <p>{g.slugs.length}곳</p>
                    <span className="pk-axis">목록에서 선택 축 보기</span>
                  </a>
                ))}
                <a href="/pick/" className="pk-card">
                  <h3>전체 40곳</h3>
                  <p>한 페이지에서 비교</p>
                  <span className="pk-axis">허브로 이동</span>
                </a>
              </div>
            </section>

            <section className="pk-sec" aria-labelledby="h2-faq">
              <h2 id="h2-faq">이 사이트를 두고 자주 묻는 것</h2>
              {FAQS.map((f) => (
                <details className="pk-faq" key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </section>

            <section className="pk-sec" aria-labelledby="h2-ad">
              <h2 id="h2-ad">광고문의</h2>
              <p>
                이 사이트는 현재 광고주를 모집하고 있습니다. 업소를 운영하고 계시다면 광고·제휴 입점 문의는 카카오톡{' '}
                {AD_KAKAO} 로 받습니다. 손님 예약 창구가 아니라 업소 사장님 대상 채널입니다.
              </p>
              <p>
                광고가 들어간 페이지에는 담당자 이름과 연락처가 그 페이지에만 표시됩니다. 다른 업소 페이지에 다른
                업소의 연락처를 섞지 않습니다.
              </p>
            </section>

            <p className="pk-oneline">
              <span>한 줄 정리</span>
              이름으로 고르면 매번 헷갈리고, 조건으로 고르면 한 번에 정해집니다.
            </p>
          </div>
        </article>

        <aside className="pk-rel" aria-labelledby="pk-rel-h">
          <h2 id="pk-rel-h">바로 보기</h2>
          <div className="pk-grid">
            <a href="/pick/" className="pk-card">
              <h3>전국 나이트 고르기 40</h3>
              <p>지역별 목록과 선택 축 한자리에</p>
              <span className="pk-axis">허브 페이지</span>
            </a>
            <a href="/pick/#pk-list" className="pk-card">
              <h3>지역별 목록</h3>
              <p>서울 · 경기 인천 · 충청 · 영남 · 호남 제주</p>
              <span className="pk-axis">권역별로 좁혀 보기</span>
            </a>
            <div className="pk-card">
              <h3>광고문의</h3>
              <p>카카오톡 {AD_KAKAO} — 업소 사장님 대상 광고·제휴 입점 문의</p>
              <span className="pk-axis">손님 예약 창구가 아닙니다</span>
            </div>
          </div>
        </aside>
      </PickLayout>
    </>
  );
}

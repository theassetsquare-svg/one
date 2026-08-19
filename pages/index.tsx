import Head from 'next/head';
import { SITE } from '@/lib/pick';

/**
 * 홈 — 완전 독립 페이지.
 *
 * ⚠️ 규칙(사용자 지시):
 *   1. 이 페이지에는 다른 페이지로 나가는 본문 링크를 넣지 않습니다.
 *   2. 헤더·푸터·고정 통화바를 렌더하지 않습니다. 글만 보입니다.
 *   3. 업소·업종 관련 단어를 한 글자도 쓰지 않습니다. (제목·메타·본문 전부)
 *   4. 본문은 2,000자 이상 단독 성공스토리입니다.
 *
 * 그래서 PickLayout / PickSEO 를 쓰지 않고 Head + 자체 스타일만 씁니다.
 */
const TITLE = '바닥에서 다시 올라온 1,247일 — 어느 재기의 기록';
const DESC =
  '통장에 43,000원이 남아 있던 겨울부터 다시 자기 이름으로 일하게 되기까지, 한 사람이 1,247일 동안 지킨 규칙과 무너지지 않는 법에 대한 기록입니다.';
/** 검색 썸네일 — 본문에는 이미지를 넣지 않는 페이지라 og/thumbnail 로만 노출합니다. */
const OG_IMAGE = `${SITE}/og/home.png`;
const OG_ALT = '바닥에서 다시 올라온 1,247일 — 어느 재기의 기록 표지';

const CSS = `
:root{--ink:#f2f3f5;--dim:#b9bcc4;--gold:#ffd166;--line:rgba(255,255,255,.12);--bg:#0b0c0e}
body{background:var(--bg)}
.sy-wrap{max-width:720px;margin:0 auto;padding:clamp(48px,9vw,96px) 20px clamp(64px,10vw,120px)}
.sy-eyebrow{display:inline-block;font-size:.82rem;letter-spacing:.14em;color:var(--gold);border:1px solid rgba(255,209,102,.45);border-radius:999px;padding:7px 14px;margin-bottom:22px}
.sy-wrap h1{font-size:clamp(1.75rem,5.6vw,2.9rem);line-height:1.25;font-weight:900;letter-spacing:-.03em;color:var(--ink);margin-bottom:18px;word-break:keep-all}
.sy-lead{font-size:clamp(1.02rem,2.7vw,1.18rem);line-height:1.95;color:var(--dim);word-break:keep-all;padding-bottom:26px;border-bottom:1px solid var(--line);margin-bottom:8px}
.sy-wrap h2{font-size:clamp(1.22rem,3.6vw,1.6rem);font-weight:800;color:var(--gold);letter-spacing:-.02em;line-height:1.4;margin:44px 0 16px;word-break:keep-all}
.sy-wrap p{font-size:clamp(1rem,2.6vw,1.08rem);line-height:2.05;color:var(--ink);margin-bottom:20px;word-break:keep-all}
.sy-wrap p.sy-soft{color:var(--dim)}
.sy-quote{margin:30px 0;padding:20px 22px;border-left:3px solid var(--gold);background:rgba(255,209,102,.07);border-radius:0 14px 14px 0}
.sy-quote p{margin:0;font-size:clamp(1.04rem,2.9vw,1.2rem);font-weight:700;line-height:1.85;color:#fff}
.sy-list{margin:8px 0 24px;padding:0;list-style:none}
.sy-list li{position:relative;padding:14px 0 14px 34px;border-bottom:1px solid var(--line);font-size:clamp(.98rem,2.5vw,1.06rem);line-height:1.85;color:var(--ink);word-break:keep-all}
.sy-list li:last-child{border-bottom:0}
.sy-list li b{color:var(--gold);font-weight:800}
.sy-list li::before{content:'';position:absolute;left:10px;top:24px;width:7px;height:7px;border-radius:50%;background:var(--gold)}
.sy-end{margin-top:46px;padding:26px 22px;border:1px solid rgba(255,209,102,.35);border-radius:18px;text-align:center}
.sy-end p{margin:0;font-size:clamp(1.06rem,3vw,1.24rem);font-weight:800;line-height:1.8;color:#fff}
.sy-sig{margin-top:34px;font-size:.92rem;color:#8d919a;text-align:center;line-height:1.9}
`;

export default function Home() {
  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${SITE}/#article`,
    headline: '바닥에서 다시 올라온 1,247일',
    description: DESC,
    inLanguage: 'ko-KR',
    datePublished: '2026-08-19',
    dateModified: '2026-08-19',
    mainEntityOfPage: `${SITE}/`,
    image: OG_IMAGE,
  };

  return (
    <>
      <Head>
        <title key="title">{TITLE}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" key="viewport" />
        <meta name="description" content={DESC} key="desc" />
        <meta
          name="keywords"
          content="성공스토리, 동기부여 글, 재기, 인생 역전, 끝까지 읽는 글, 힘이 되는 글, 자기관리, 회복"
          key="kw"
        />
        <meta name="google-site-verification" content="HJjm7MRxykCQ7d_9L7glaTeeaWrmJIzAKY0BcNcfm88" key="gsv" />
        <meta name="naver-site-verification" content="e08d28d4a8fb74602625d6ae1f2e4834aa71f2ed" key="nsv" />
        <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1" key="robots" />
        <meta name="theme-color" content="#0b0c0e" key="theme" />
        <meta name="color-scheme" content="dark" key="color-scheme" />
        <link rel="canonical" href={`${SITE}/`} key="canonical" />
        <link rel="alternate" hrefLang="ko-KR" href={`${SITE}/`} key="hl:ko" />
        <link rel="alternate" hrefLang="x-default" href={`${SITE}/`} key="hl:xd" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" key="fav32" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" key="fav16" />
        <meta property="og:type" content="article" key="og:type" />
        <meta property="og:locale" content="ko_KR" key="og:locale" />
        <meta property="og:title" content={TITLE} key="og:title" />
        <meta property="og:description" content={DESC} key="og:desc" />
        <meta property="og:url" content={`${SITE}/`} key="og:url" />
        <meta property="og:image" content={OG_IMAGE} key="og:img" />
        <meta property="og:image:secure_url" content={OG_IMAGE} key="og:imgs" />
        <meta property="og:image:width" content="1200" key="og:w" />
        <meta property="og:image:height" content="1200" key="og:h" />
        <meta property="og:image:type" content="image/png" key="og:t" />
        <meta property="og:image:alt" content={OG_ALT} key="og:alt" />
        <meta name="thumbnail" content={OG_IMAGE} key="thumb" />
        {/* 1:1 정사각 이미지이므로 summary */}
        <meta name="twitter:card" content="summary" key="tw:card" />
        <meta name="twitter:title" content={TITLE} key="tw:title" />
        <meta name="twitter:description" content={DESC} key="tw:desc" />
        <meta name="twitter:image" content={OG_IMAGE} key="tw:img" />
        <meta name="twitter:image:alt" content={OG_ALT} key="tw:alt" />
      </Head>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <main>
        <article className="sy-wrap">
          <span className="sy-eyebrow">1,247일의 기록</span>
          <h1>바닥에서 다시 올라온 1,247일</h1>

          <p className="sy-lead">
            이 글에는 대단한 비법이 없습니다. 한 사람이 완전히 무너진 자리에서 다시 자기 이름으로 일하게 되기까지,
            3년 5개월 동안 실제로 지킨 것들만 적었습니다. 읽는 데 7분 정도 걸립니다. 지금 마음이 무거운 사람이라면,
            중간에 덮지 말고 끝까지 읽어 보시기를 권합니다.
          </p>

          <h2>통장에 43,000원이 남아 있던 겨울</h2>
          <p>
            그해 1월, 그는 새벽 세 시에 24시간 편의점 계단에 앉아 있었습니다. 손에 쥔 영수증에는 잔액 43,000원이
            찍혀 있었습니다. 그 숫자보다 무서웠던 건, 그 숫자를 보고도 아무 감정이 들지 않았다는 사실이었습니다.
            사람은 정말로 지치면 슬프지도 않습니다. 그냥 멍합니다.
          </p>
          <p>
            그는 서른아홉이었고, 8년 동안 붙잡고 있던 일을 막 접은 참이었습니다. 남은 건 갚아야 할 목록과, 전화를
            받지 않는 사람들의 이름과, 매일 아침 눈을 뜨는 일이 왜 이렇게 힘든가 하는 의문뿐이었습니다.
          </p>
          <p className="sy-soft">
            그날 그는 계단에서 딱 한 가지를 결정했습니다. 다시 일어서겠다는 결심이 아니었습니다.
            <b> &lsquo;내일 아침 여섯 시에 일어나 보자&rsquo;</b> 정도였습니다. 회복은 언제나 그만큼 작은 것에서
            시작합니다.
          </p>

          <h2>무너진 진짜 이유는, 실패한 날이 아니었습니다</h2>
          <p>
            시간이 한참 지나 그는 알게 됩니다. 무너지기 시작한 시점은 매출이 꺾인 그달이 아니었습니다. 잘되던
            시절의 어느 평범한 화요일 오후, &lsquo;이 정도면 됐다&rsquo;고 생각한 순간이었습니다.
          </p>
          <p>
            잘되고 있을 때 우리는 자기 실력을 과대평가합니다. 사실은 흐름이 좋았을 뿐인데, 자기가 잘해서라고
            믿습니다. 그래서 점검을 멈추고, 기록을 멈추고, 쓴소리를 하는 사람을 멀리합니다. 붕괴는 그 조용한
            지점에서 이미 시작됩니다. 눈에 보이는 건 2년쯤 뒤입니다.
          </p>
          <div className="sy-quote">
            <p>무너짐은 사건이 아니라 누적입니다. 그러니 회복도 사건이 아니라 누적일 수밖에 없습니다.</p>
          </div>

          <h2>규칙 하나 — 하루에 딱 한 가지만 끝낸다</h2>
          <p>
            그는 거창한 계획표를 만들지 않았습니다. 그럴 힘이 없었습니다. 대신 A4 노트 한 권을 사서 매일 아침
            맨 위에 한 줄만 적었습니다. <b>&lsquo;오늘 반드시 끝낼 일 한 가지.&rsquo;</b>
          </p>
          <p>
            첫날에 적은 건 &lsquo;은행에 전화하기&rsquo;였습니다. 그다음 날은 &lsquo;이력서 파일 만들기&rsquo;,
            그다음 날은 &lsquo;방 정리&rsquo;였습니다. 우습게 들리겠지만, 무너진 사람에게 필요한 건 대단한 목표가
            아니라 <b>오늘 나를 이겼다는 증거 한 줄</b>입니다.
          </p>
          <p>
            그 증거가 쌓이면 신뢰가 생깁니다. 남에 대한 신뢰가 아니라, 나 자신에 대한 신뢰입니다. 자기를 못 믿는
            사람은 아무리 좋은 기회가 와도 잡지 못합니다. 손이 떨리기 때문입니다.
          </p>

          <h2>규칙 둘 — 무서운 숫자를 정면에 앉혀 놓는다</h2>
          <p>
            그가 가장 피하고 싶었던 건 갚아야 할 총액이었습니다. 두 달을 미루다가, 어느 밤 마음먹고 전부 적어
            봤습니다. 놀랍게도 그것은 12줄이었습니다. 머릿속에서 그것은 형체 없는 공포였는데, 종이 위에서는
            그저 12줄짜리 목록이었습니다.
          </p>
          <p>
            목록은 지울 수 있습니다. 공포는 지울 수 없습니다. 그날부터 그는 한 줄씩 지워 나갔습니다. 가장 작은
            줄부터 지웠습니다. 효율로 따지면 이자가 큰 것부터 갚는 게 맞지만, 그때 그에게 필요한 건 효율이 아니라
            <b> 줄어드는 감각</b>이었습니다.
          </p>

          <h2>규칙 셋 — 먼저 연락하고, 먼저 미안하다고 말한다</h2>
          <p>
            사람이 무너지면 가장 먼저 끊는 것이 인간관계입니다. 부끄럽기 때문입니다. 그는 반대로 했습니다.
            연락처를 열어, 마무리가 좋지 않았던 사람들에게 한 명씩 문자를 보냈습니다. 변명은 한 줄도 넣지 않고,
            사실과 사과만 적었습니다.
          </p>
          <p>
            열일곱 명 중 아홉 명이 답을 하지 않았습니다. 여섯 명은 짧게 답했습니다. 두 명이 만나자고 했습니다.
            훗날 그를 다시 일으켜 준 제안은, 바로 그 두 명 중 한 사람에게서 왔습니다.
          </p>
          <div className="sy-quote">
            <p>기회는 새로운 사람에게서 오지 않습니다. 대개는, 내가 부끄러워서 피했던 사람에게서 옵니다.</p>
          </div>

          <h2>아무도 박수 쳐 주지 않는 400일</h2>
          <p>
            가장 견디기 힘든 구간은 실패한 직후가 아니었습니다. 1년쯤 지나, 열심히 하고는 있는데 아무것도 달라진
            게 없어 보이던 시기였습니다. 통장은 여전히 얇았고, 아무도 그의 노력을 몰랐습니다.
          </p>
          <p>
            그때 그는 이렇게 생각하기로 했습니다. 성장은 경사로가 아니라 계단이라고. 계단은 한참 평평하다가
            갑자기 올라갑니다. 그런데 평평한 구간을 걷는 사람은 자기가 올라가고 있는지 알 수 없습니다.
            <b> 대부분은 다음 단이 나오기 직전에 그만둡니다.</b>
          </p>
          <p className="sy-soft">
            그래서 그는 결과 대신 출석을 셌습니다. 노트에 날짜만 적었습니다. 197일, 198일, 199일. 성과가 없는 날도
            숫자는 늘었습니다. 그 숫자가 그를 버티게 했습니다.
          </p>

          <h2>1,247일째, 다시 걸려 온 전화</h2>
          <p>
            제안이 온 날, 그는 특별한 상태가 아니었습니다. 여느 날처럼 아침에 노트를 펴고 한 줄을 적은 참이었습니다.
            전화를 건 사람은 이렇게 말했다고 합니다. &ldquo;3년 전 그 문자, 그때는 답을 못 했는데 계속 기억에
            남았습니다. 그렇게 정직하게 쓴 사과를 받아 본 적이 없어서요.&rdquo;
          </p>
          <p>
            그가 잡은 것은 운이었을까요. 절반은 맞습니다. 운은 옵니다. 문제는 운이 왔을 때 그것을 받을 수 있는
            상태로 살아 있느냐입니다. 무너진 채로 3년을 보낸 사람에게도 그 전화는 걸려 왔을 겁니다. 다만 받을
            준비가 없었을 뿐입니다.
          </p>

          <h2>그가 다시 쓴 성공의 정의</h2>
          <p>
            지금 그는 다시 자기 이름으로 일합니다. 예전만큼 크지는 않습니다. 대신 그는 성공의 정의를 바꿨습니다.
            돈이 얼마인지가 아니라, <b>무너져도 다시 시작할 수 있는 사람인지</b>로.
          </p>
          <p>
            그 기준으로 보면 그는 이미 성공했습니다. 한 번 해냈으니까요. 그리고 그 능력은 통장 잔액과 달리
            누가 가져갈 수 없습니다.
          </p>

          <h2>오늘, 당신이 할 수 있는 세 가지</h2>
          <ul className="sy-list">
            <li>
              <b>하나.</b> 오늘 끝낼 일을 딱 하나만 정하고, 종이에 적으십시오. 작을수록 좋습니다. 오늘 나를 이긴
              증거가 필요할 뿐입니다.
            </li>
            <li>
              <b>둘.</b> 가장 보기 싫은 숫자를 오늘 밤에 전부 적어 보십시오. 형체 없는 공포를 목록으로 바꾸면,
              그 순간부터 그것은 관리 가능한 대상이 됩니다.
            </li>
            <li>
              <b>셋.</b> 부끄러워서 피했던 사람 한 명에게 연락하십시오. 변명 없이, 사실과 사과만. 답이 없어도
              괜찮습니다. 보낸 사람은 이미 달라져 있습니다.
            </li>
          </ul>
          <p className="sy-soft">
            이 세 가지는 오늘 안에 전부 할 수 있습니다. 인생을 바꾸는 방법은 대개 이렇게 시시하게 생겼습니다.
            시시해 보여서 아무도 하지 않을 뿐입니다.
          </p>

          <div className="sy-end">
            <p>
              당신이 지금 서 있는 바닥은 결말이 아닙니다.<br />
              이 이야기가 시작된 곳과 정확히 같은 자리입니다.
            </p>
          </div>

          <p className="sy-sig">
            읽어 주셔서 고맙습니다.<br />
            오늘 하루, 한 줄만 적어 보시기 바랍니다.
          </p>
        </article>
      </main>
    </>
  );
}

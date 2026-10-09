import heroImg from '../assets/images/world-map-hero.jpg'
import pankaj from '../assets/images/team-pankaj-bhargava.jpg'
import dheeraj from '../assets/images/team-dheeraj-rathi.jpg'
import deepa from '../assets/images/team-deepa-rathi.jpg'
import sanjeev from '../assets/images/team-sanjeev-bindal.jpg'
import ArrowButton from '../components/ArrowButton.jsx'
import { useQuizLink } from '../components/QuizContext.js'

function Hero() {
  const onQuiz = useQuizLink()
  return (
    <section className="photo-hero">
      <img className="bg" src={heroImg} alt="" />
      <div className="veil"></div>
      <div className="wrap inner">
        <div className="kicker">From i to I · individual to Institution</div>
        <h1 className="hero-h">Making well-governed, investable and scalable high-performance organisations.</h1>
        <p className="hero-p">Fifty years of advising Indian enterprise, backed by the ECOVIS network across 90+ countries.</p>
        <div className="row">
          <ArrowButton variant="light" href="#quiz" quiz onClick={onQuiz}>Take the quiz</ArrowButton>
          <a className="link w" href="#home-pillars">See what we do</a>
        </div>
      </div>
    </section>
  )
}

const STATS = [
  ['1500+', 'Clients'],
  ['50+', 'Years, since 1974'],
  ['90+', 'Countries in the ECOVIS network'],
]

function Stats() {
  return (
    <section className="stats">
      <div className="wrap">
        <div className="box">
          {STATS.map(([n, l]) => (
            <div key={n}>
              <div className="stat-n">{n}</div>
              <div className="stat-l">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const PILLARS = [
  {
    n: '01', href: '#institutionalise', title: 'Institutionalise',
    q: 'Can the business run beyond its founder?',
    d: 'Decision rights, risk, controls and compliance that do not depend on one person.',
    go: 'Explore Institutionalise',
  },
  {
    n: '02', href: '#investable', title: 'Make it Investable',
    q: 'Will capital trust the business?',
    d: 'Financial clarity, a credible plan and an equity story investors can say yes to.',
    go: 'Explore Investable',
  },
  {
    n: '03', href: '#scale', title: 'Scale',
    q: 'Can it grow beyond its boundaries?',
    d: 'Strategy, execution, AI and expansion through ECOVIS partners in 90+ countries.',
    go: 'Explore Scale',
  },
]

function Pillars() {
  return (
    <section className="sec" id="home-pillars">
      <div className="wrap">
        <div className="center-head">
          <h2 className="cap">What We Do</h2>
          <div className="rule"></div>
          <p>Three questions every growing business has to answer, in this order.</p>
        </div>
        <div className="pillars">
          {PILLARS.map((p) => (
            <a className="pillar" href={p.href} key={p.n}>
              <span className="n">{p.n}</span>
              <h3>{p.title}</h3>
              <p className="q">{p.q}</p>
              <p className="d">{p.d}</p>
              <span className="go">{p.go}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

const ACE_ROWS = [
  ['A', 'Assess', 'Know how ready you are before you scale.'],
  ['C', 'Co-create', 'Agree the few numbers that matter, and who owns them.'],
  ['E', 'Embedded execution', 'Put intelligence where the work happens.'],
]

function AceTeaser() {
  return (
    <section className="sec mist">
      <div className="wrap two">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ fontSize: 14, color: 'var(--red)', fontWeight: 500 }}>Studio AI</div>
          <h2 style={{ fontSize: 'clamp(28px,3.2vw,40px)', lineHeight: 1.2 }}>ACE: the engine behind every engagement.</h2>
          <p style={{ fontSize: 17, color: 'var(--ink-2)', maxWidth: 460 }}>
            It works on top of the systems you already have, so leaders see what matters and act on it.
          </p>
          <a className="link" href="#studio-ai" style={{ alignSelf: 'flex-start' }}>How ACE works</a>
        </div>
        <div>
          {ACE_ROWS.map(([letter, title, text]) => (
            <div className="ace-row" key={letter}>
              <span className="ace-l">{letter}</span>
              <span>
                <b style={{ fontWeight: 600, display: 'block' }}>{title}</b>
                <span style={{ fontSize: 15, color: 'var(--ink-2)' }}>{text}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const TEAM = [
  [pankaj, 'Pankaj Bhargava', 'Strategy & Performance'],
  [dheeraj, 'Dheeraj Rathi', 'Finance & Capital'],
  [deepa, 'Deepa Rathi', 'Professional Services'],
  [sanjeev, 'Sanjeev Bindal', 'Professional Services'],
]

function Team() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="center-head">
          <h2>Our Team Driving Growth</h2>
          <div className="rule"></div>
        </div>
        <div className="team">
          {TEAM.map(([img, name, role]) => (
            <div className="person" key={name}>
              <img src={img} alt={name} />
              <div className="nm">{name}</div>
              <div className="rl">{role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function QuizBand() {
  const onQuiz = useQuizLink()
  return (
    <section className="band-red">
      <div className="wrap band-cta">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <h2 style={{ fontSize: 'clamp(26px,3vw,36px)', lineHeight: 1.2 }}>Where does your business stand today?</h2>
          <p style={{ color: 'var(--blush)', fontSize: 17, maxWidth: 520 }}>
            Answer nine short questions on how your business is run, financed and growing. In a few minutes you will see
            whether to start with governance, investability or scale.
          </p>
        </div>
        <ArrowButton variant="inv" href="#quiz" quiz onClick={onQuiz}>Take the quiz</ArrowButton>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <div className="page" data-page="home">
      <Hero />
      <Stats />
      <Pillars />
      <AceTeaser />
      <Team />
      <QuizBand />
    </div>
  )
}

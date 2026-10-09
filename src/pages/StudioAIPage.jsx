import heroImg from '../assets/images/world-map-hero.jpg'

function Hero() {
  return (
    <section className="photo-hero">
      <img className="bg" src={heroImg} alt="" />
      <div className="veil" style={{ background: 'rgba(10,14,18,.66)' }}></div>
      <div className="wrap inner" style={{ paddingBlock: '170px 128px' }}>
        <div className="kicker">Studio AI / ACE AI</div>
        <h1 className="hero-h">From organisational data to organisational intelligence.</h1>
        <p className="hero-p">
          ACE AI sits on top of the systems you already run and helps every leader see what matters, decide faster and act on it.
        </p>
        <a className="link w" href="#contact" style={{ alignSelf: 'flex-start' }}>Talk to us about ACE AI</a>
      </div>
    </section>
  )
}

const ACE = [
  {
    l: 'A', t: 'Assess', h: 'Know your readiness before you scale.',
    d: 'Business, people and technology, measured against where you want to go.',
    o: 'You get a priority action map',
  },
  {
    l: 'C', t: 'Co-create', h: 'Turn strategy into the numbers that matter.',
    d: 'The few core KPIs for every level, from the boardroom to the frontline, each with an owner.',
    o: 'You get a KPI and accountability map',
  },
  {
    l: 'E', t: 'Embedded execution', h: 'Put intelligence where work happens.',
    d: 'An AI layer over ERP, CRM, finance and HR that flags problems and answers questions in plain language.',
    o: 'You get an embedded intelligence layer',
  },
]

function HowAceWorks() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="center-head">
          <h2 className="cap">How ACE AI Works</h2>
          <div className="rule"></div>
        </div>
        <div className="ace-cols">
          {ACE.map((a) => (
            <div key={a.l}>
              <span className="ace-big">{a.l}</span>
              <b style={{ fontWeight: 600, fontSize: 18 }}>{a.t}</b>
              <span className="h">{a.h}</span>
              <span style={{ fontSize: 15, color: 'var(--ink-2)' }}>{a.d}</span>
              <span className="o">{a.o}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Six nodes placed around the dashed ring; positions are the reference's percentages.
const WHEEL = [
  { label: 'Assess', left: '38.6%', top: 0, cls: 'n a' },
  { label: 'Co-create', left: '73.6%', top: '18.3%', cls: 'n' },
  { label: 'Embed', left: '73.6%', top: '58.8%', cls: 'n' },
  { label: 'Execute', left: '38.6%', top: '77.2%', cls: 'n' },
  { label: 'Learn', left: '3.6%', top: '58.8%', cls: 'n' },
  { label: 'Improve', left: '3.6%', top: '18.3%', cls: 'n f' },
]

function Loop() {
  return (
    <section className="sec mist">
      <div className="wrap two">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <h2 style={{ fontSize: 'clamp(26px,3vw,34px)' }}>A loop, not a one-time report</h2>
          <p style={{ color: 'var(--ink-2)', fontSize: 17, maxWidth: 440 }}>
            Each cycle learns from how the organisation actually executed, so the next round of decisions is sharper than the last.
          </p>
          <div className="serif" style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 12, fontSize: 20 }}>
            <span>Data tells you what happened.</span>
            <span style={{ color: 'var(--ink-2)' }}>Intelligence tells you what it means.</span>
            <span style={{ color: 'var(--red)' }}>Execution turns insight into impact.</span>
          </div>
        </div>
        <div className="wheel" role="img" aria-label="The ACE AI cycle: assess, co-create, embed, execute, learn, improve">
          <div className="ring"></div>
          <div className="hub">ACE AI</div>
          {WHEEL.map((n) => (
            <div className={n.cls} style={{ left: n.left, top: n.top }} key={n.label}>{n.label}</div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AgenticBand() {
  return (
    <section className="band-dark">
      <div className="wrap band-cta" style={{ paddingBlock: 64 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ fontSize: 14, color: 'var(--blush-2)' }}>Built with Studio Agentic</div>
          <div className="serif" style={{ fontSize: 26 }}>KPI Explorer, AI agents and role-based command centres.</div>
        </div>
        <a className="link w" href="#contact" style={{ justifySelf: 'end' }}>Talk to us about ACE AI</a>
      </div>
    </section>
  )
}

export default function StudioAIPage() {
  return (
    <div className="page" data-page="studio-ai">
      <Hero />
      <HowAceWorks />
      <Loop />
      <AgenticBand />
    </div>
  )
}

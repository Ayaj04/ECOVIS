import heroImg from '../assets/images/world-map-hero.jpg'
import ArrowButton from '../components/ArrowButton.jsx'
import { useQuizLink } from '../components/QuizContext.js'
import { ShiftArrow } from '../components/icons.jsx'

function Intro() {
  return (
    <section className="sec" style={{ paddingBlock: '72px 40px' }}>
      <div className="wrap">
        <div className="center-head" style={{ marginBottom: 0 }}>
          <h1>The Business Journey</h1>
          <div className="rule"></div>
          <p className="serif" style={{ fontSize: 26, color: 'var(--ink)', marginTop: 8 }}>Five stages from founder to legacy</p>
          <p>
            Speed, instinct and personal relationships build a business. As it grows, the same strengths start to hold it back.
            Most businesses can find themselves on this staircase.
          </p>
        </div>
      </div>
    </section>
  )
}

const STAGES = [
  { t: 'Founder-led', qt: '“It runs because I am involved.”', h: 90, bg: 'var(--blush)', c: 'var(--red-dark)' },
  { t: 'Growth complexity', qt: '“We are growing, but it is getting complicated.”', h: 150, bg: 'var(--blush-2)', c: 'var(--red-dark)', d: '.1s' },
  { t: 'Professionalisation', qt: '“We need professionals without losing our edge.”', h: 210, bg: 'var(--rose)', c: '#6E0E1C', d: '.2s' },
  { t: 'Institutional entrepreneurship', qt: '“Everyone can think like an owner.”', h: 270, bg: 'var(--red)', c: '#fff', d: '.3s' },
  { t: 'Legacy', qt: '“The institution carries the DNA forward.”', h: 330, bg: 'var(--red-dark)', c: '#fff', d: '.4s', tColor: 'var(--red-dark)' },
]

function Staircase() {
  return (
    <section style={{ paddingBlock: '32px 96px' }}>
      <div className="wrap">
        <div className="climb">
          {STAGES.map((s, i) => (
            <div key={s.t}>
              <div>
                <div className="t" style={s.tColor ? { color: s.tColor } : undefined}>{s.t}</div>
                <div className="qt">{s.qt}</div>
              </div>
              <div className="bar" style={{ height: s.h, background: s.bg, color: s.c, animationDelay: s.d }}>{i + 1}</div>
            </div>
          ))}
        </div>
        <div className="climb-notes">
          <span><span className="muted">Risk:</span> key-person dependency</span>
          <span><span className="muted">Risk:</span> growth without capability</span>
          <span><span className="muted">Risk:</span> bureaucracy</span>
          <span style={{ color: 'var(--red)' }}>Agility without founder dependency</span>
          <span style={{ color: 'var(--red-dark)' }}>Owners become stewards</span>
        </div>
      </div>
    </section>
  )
}

const SHIFTS = [
  ['Intuition', 'Data-driven decisions'],
  ['Founder speed', 'Institutional speed'],
  ['Founder dependence', 'Professional talent'],
  ['Individual agility', 'Institutional agility'],
]

function Shifts() {
  return (
    <section className="sec mist">
      <div className="wrap shifts">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <h2 style={{ fontSize: 'clamp(26px,3vw,32px)', lineHeight: 1.2 }}>What changes along the way</h2>
          <p className="muted">Four shifts we help every business make.</p>
        </div>
        <div style={{ borderTop: '2px solid var(--ink)' }}>
          {SHIFTS.map(([from, to]) => (
            <div className="shift" key={from}>
              <span className="muted">{from}</span>
              <ShiftArrow />
              <span>{to}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function QuoteBand() {
  return (
    <section className="photo-hero quote-band">
      <img className="bg" src={heroImg} alt="" />
      <div className="veil" style={{ background: 'rgba(10,14,18,.7)' }}></div>
      <div className="wrap inner" style={{ position: 'relative' }}>
        <div className="l" style={{ color: '#D6D6D6' }}>Don’t professionalise the entrepreneur out of the business.</div>
        <div className="l">Institutionalise the entrepreneur within the business.</div>
        <div className="rule" style={{ marginTop: 8 }}></div>
      </div>
    </section>
  )
}

function StageQuizBand() {
  const onQuiz = useQuizLink()
  return (
    <section className="band-red">
      <div
        className="wrap"
        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 24, paddingBlock: 56 }}
      >
        <div className="serif" style={{ fontSize: 26 }}>Which stage is your business at?</div>
        <ArrowButton variant="inv" href="#quiz" quiz onClick={onQuiz}>Take the quiz</ArrowButton>
      </div>
    </section>
  )
}

export default function JourneyPage() {
  return (
    <div className="page" data-page="journey">
      <Intro />
      <Staircase />
      <Shifts />
      <QuoteBand />
      <StageQuizBand />
    </div>
  )
}

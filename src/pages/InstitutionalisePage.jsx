import PillarHero from '../components/PillarHero.jsx'
import NextLink from '../components/NextLink.jsx'
import { LoopIcon } from '../components/icons.jsx'

// Six moves, alternating above (up) and below (down) the node line on desktop.
const MOVES = [
  { pos: 'up', v: 'Define', qq: 'Who can decide what?', s: 'Delegation of authority and approval limits' },
  { pos: 'down', v: 'Identify', qq: 'Where are you exposed?', s: 'Risk maps and key-person dependency' },
  { pos: 'up', v: 'Control', qq: 'What can go wrong, and how do we stop it?', s: 'Maker-checker and segregation of duties' },
  { pos: 'down', v: 'Automate', qq: 'What should not depend on people?', s: 'Compliance calendars, alerts and workflows' },
  { pos: 'up', v: 'Institutionalise', qq: 'What knowledge must outlive individuals?', s: 'Founder knowledge turned into SOPs' },
  { pos: 'down', v: 'Monitor', qq: 'How do you know it is working?', s: 'Dashboards and early-warning signals' },
]

function Step({ m, col, last }) {
  const style = last ? { gridColumn: col, borderTopColor: 'var(--red)' } : { gridColumn: col }
  return (
    <div className={`step ${m.pos}`} style={style}>
      <span className="v">{m.v}</span>
      <span className="qq">{m.qq}</span>
      <span className="s">{m.s}</span>
    </div>
  )
}

function Node({ n, last }) {
  return <div className={last ? 'node last' : 'node'} style={{ gridColumn: n }}>{n}</div>
}

function HowWeHelp() {
  // DOM order matches the reference (it drives the stacked mobile layout):
  // "up" steps come before their node, "down" steps after.
  const items = MOVES.flatMap((m, i) => {
    const col = i + 1
    const last = col === MOVES.length
    const step = <Step key={`s${col}`} m={m} col={col} last={last} />
    const node = <Node key={`n${col}`} n={col} last={last} />
    return m.pos === 'up' ? [step, node] : [node, step]
  })
  return (
    <section className="sec mist">
      <div className="wrap">
        <div className="center-head">
          <h2>How We Help</h2>
          <p>Six moves that build the institutional operating system, each one answering a single question.</p>
        </div>
        <div className="flow">
          <div className="line"></div>
          {items}
        </div>
        <div className="loop">
          <LoopIcon />
          What monitoring finds feeds back into how decisions are defined.
        </div>
      </div>
    </section>
  )
}

const STAIRS = [
  { lbl: 'Governance', h: 56, bg: 'var(--blush)', c: 'var(--red-dark)' },
  { lbl: 'DOA', d: '.08s', h: 92, bg: 'var(--blush-2)', c: 'var(--red-dark)' },
  { lbl: 'Risk', d: '.16s', h: 128, bg: 'var(--rose)', c: '#6E0E1C' },
  { lbl: 'Controls', d: '.24s', h: 164, bg: '#E05A70', c: '#fff' },
  { lbl: 'Compliance', d: '.32s', h: 200, bg: 'var(--red)', c: '#fff' },
  { lbl: 'Automation', d: '.4s', h: 236, bg: 'var(--red-dark)', c: '#fff', lblColor: 'var(--red-dark)' },
]

function Path() {
  return (
    <section className="sec">
      <div className="wrap">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 40 }}>
          <h2 style={{ fontSize: 'clamp(24px,2.8vw,32px)' }}>The path to an institution-ready business</h2>
          <p className="muted">Each step rests on the one before it.</p>
        </div>
        <div className="stairs">
          {STAIRS.map((s, i) => (
            <div key={s.lbl}>
              <span className="lbl" style={s.lblColor ? { color: s.lblColor } : undefined}>{s.lbl}</span>
              <div
                className="bar"
                style={{ height: s.h, background: s.bg, color: s.c, animationDelay: s.d }}
              >
                {`Step ${i + 1}`}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function InstitutionalisePage() {
  return (
    <div className="page" data-page="institutionalise">
      <PillarHero
        title="Institutionalise"
        heading="Governance is the first step from i to I."
        body="We turn founder-dependent businesses into institution-ready organisations, with clear decision rights, visible risks, working controls and automated compliance."
        cta="Book a Governance Diagnostic"
        question="Can the business function beyond the individual?"
      />
      <HowWeHelp />
      <Path />
      <NextLink href="#investable" label="Next" title="Make it Investable" />
    </div>
  )
}

import { Fragment } from 'react'
import heroImg from '../assets/images/world-map-hero.jpg'
import PillarHero from '../components/PillarHero.jsx'
import NextLink from '../components/NextLink.jsx'
import Tracker from '../components/Tracker.jsx'
import { ChipArrow, ConvergeLines } from '../components/icons.jsx'

function Lane({ title, color, dark, chips }) {
  return (
    <div className="lane">
      <h3 style={{ color }}>{title}</h3>
      <div className="chips">
        {chips.map(([b, s], i) => (
          <Fragment key={b}>
            {i > 0 && <ChipArrow />}
            <div className={dark ? 'chip dk' : 'chip'}><b>{b}</b><span>{s}</span></div>
          </Fragment>
        ))}
      </div>
    </div>
  )
}

function Tracks() {
  return (
    <section className="sec mist">
      <div className="wrap">
        <div className="center-head">
          <h2>How We Help</h2>
          <p>Two tracks run side by side and meet where you enter new markets.</p>
        </div>
        <div className="conv">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
            <Lane
              title="Grow the business"
              color="var(--red)"
              chips={[
                ['Strategic growth', 'Find the next engine'],
                ['Revenue growth', 'Sell more, and smarter'],
                ['New products', 'Validate, then launch'],
              ]}
            />
            <Lane
              title="Build the capability"
              color="var(--red-dark)"
              dark
              chips={[
                ['Launch PMO', 'Turn strategy into execution'],
                ['AI-powered scale', 'Do more without adding headcount'],
              ]}
            />
          </div>
          <ConvergeLines />
          <div className="globe">
            <span>Go global</span>
            <span>Market entry, local partners, tax and compliance, with ECOVIS in 90+ countries</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function GlobalBand() {
  return (
    <section className="photo-hero">
      <img className="bg" src={heroImg} alt="" />
      <div className="veil"></div>
      <div className="wrap" style={{ position: 'relative', paddingBlock: 104, display: 'flex', flexDirection: 'column', gap: 14 }}>
        <h2 style={{ fontSize: 'clamp(28px,3.6vw,44px)', lineHeight: 1.2, maxWidth: 720 }}>
          You don’t have to enter a new country alone.
        </h2>
        <p style={{ color: '#D6D6D6', fontSize: 17 }}>One partner in Mumbai. Local ECOVIS teams wherever you go next.</p>
      </div>
    </section>
  )
}

export default function ScalePage() {
  return (
    <div className="page" data-page="scale">
      <PillarHero
        title="Scale"
        heading="From a business that grows to an institution that scales."
        body="Growth is the outcome. Scale is the capability. We bring strategy, execution, technology and international access so you can grow without adding chaos, cost or founder dependence."
        cta="Plan your next growth engine"
        question="Can the business grow beyond its current boundaries?"
      />
      <Tracks />
      <GlobalBand />
      <Tracker current={2} />
      <NextLink href="#studio-ai" label="The engine under all three" title="Studio AI" />
    </div>
  )
}

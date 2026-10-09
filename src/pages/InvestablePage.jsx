import PillarHero from '../components/PillarHero.jsx'
import NextLink from '../components/NextLink.jsx'
import Tracker from '../components/Tracker.jsx'
import { PhaseChevron } from '../components/icons.jsx'

function TrustBand() {
  return (
    <section className="band-red">
      <div className="wrap" style={{ paddingBlock: 72, textAlign: 'center' }}>
        <div className="serif" style={{ fontSize: 'clamp(28px,3.6vw,46px)', lineHeight: 1.25 }}>
          Capital follows trust.<br />Trust follows clarity.
        </div>
      </div>
    </section>
  )
}

function PhaseHead({ n, bg, color, title }) {
  return (
    <div className="ph-h">
      <span className="ph-n" style={{ background: bg, color }}>{n}</span>
      <span>{title}</span>
    </div>
  )
}

function PhaseItems({ items }) {
  return (
    <div>
      {items.map(([b, s]) => (
        <div className="ph-i" key={b}><b>{b}</b><span>{s}</span></div>
      ))}
    </div>
  )
}

function Chevron() {
  return <div className="chev"><PhaseChevron /></div>
}

function Phases() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="center-head">
          <h2>How We Help</h2>
          <p>Three phases, in the order an investor would test you.</p>
        </div>
        <div className="phases">
          <div className="ph">
            <PhaseHead n="1" bg="var(--blush)" color="var(--red)" title="Find the truth" />
            <PhaseItems
              items={[
                ['Business model', 'Where value is really created'],
                ['Financial clarity', 'Where money is made and lost'],
                ['Stop the bleeding', 'Fix cash leaks before you raise'],
              ]}
            />
          </div>
          <Chevron />
          <div className="ph">
            <PhaseHead n="2" bg="var(--blush-2)" color="var(--red-dark)" title="Build the case" />
            <PhaseItems
              items={[
                ['The right pivot', 'Know when and where to change course'],
                ['A plan that holds', 'Test every assumption behind the growth story'],
                ['Credible forecasts', 'Base, upside and downside, with cash runway'],
                ['Pricing', 'Price for value, not just against competitors'],
              ]}
            />
          </div>
          <Chevron />
          <div className="ph">
            <PhaseHead n="3" bg="var(--red)" color="#fff" title="Earn the yes" />
            <div className="final">
              <b>Investment readiness</b>
              <span>The investment thesis, a ready data room, the key risks with answers, and an equity story that holds up in the room.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function InvestablePage() {
  return (
    <div className="page" data-page="investable">
      <PillarHero
        title="Make it Investable"
        heading="We make your business one that capital says yes to."
        body="Not fundraising support. We build the clarity, credibility and economics that earn the trust of investors and lenders."
        cta="Book an Investability Review"
        question="Will capital trust the business?"
      />
      <TrustBand />
      <Phases />
      <Tracker current={1} />
      <NextLink href="#scale" label="Next" title="Scale" />
    </div>
  )
}

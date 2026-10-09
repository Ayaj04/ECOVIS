import ArrowButton from './ArrowButton.jsx'

// Shared opening section of the three pillar pages: breadcrumb, title, intro and dark question panel.
export default function PillarHero({ title, heading, body, cta, question }) {
  return (
    <section className="sec" style={{ paddingBlock: '64px 88px' }}>
      <div className="wrap">
        <div className="center-head" style={{ marginBottom: 44 }}>
          <div className="crumb">What We Do / <b>{title}</b></div>
          <h1>{title}</h1>
          <div className="rule"></div>
        </div>
        <div className="split">
          <div className="txt">
            <h2>{heading}</h2>
            <p>{body}</p>
            <ArrowButton href="#contact" style={{ alignSelf: 'flex-start' }}>{cta}</ArrowButton>
          </div>
          <div className="qpanel">
            <div className="k">The question this answers</div>
            <div className="t">{question}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

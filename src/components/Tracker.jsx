const STAGES = [
  { href: '#institutionalise', name: 'Institutionalise' },
  { href: '#investable', name: 'Make it Investable' },
  { href: '#scale', name: 'Scale' },
]

// "Where this sits, from i to I" progress strip; `current` is the index of this page's pillar.
export default function Tracker({ current }) {
  return (
    <section className="sec mist tight">
      <div className="wrap">
        <div className="muted" style={{ fontSize: 14, marginBottom: 24 }}>Where this sits, from i to I</div>
        <div className="tracker">
          <div className="ln"></div>
          {STAGES.map((s, i) =>
            i === current ? (
              <div className="cur" key={s.name}>
                <span className="dot"></span>
                <span className="nm">{s.name}</span>
                <span style={{ fontSize: 12, color: 'var(--muted)' }}>You are here</span>
              </div>
            ) : (
              <a href={s.href} key={s.name}>
                <span className="dot"></span>
                <span className="nm">{s.name}</span>
              </a>
            )
          )}
        </div>
      </div>
    </section>
  )
}

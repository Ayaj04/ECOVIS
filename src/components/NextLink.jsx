import { LongArrow } from './icons.jsx'

// Full-width dark-red "Next" band at the foot of each pillar page.
export default function NextLink({ href, label, title }) {
  return (
    <a className="next" href={href}>
      <div className="wrap">
        <div>
          <div style={{ fontSize: 13, color: 'var(--blush-2)' }}>{label}</div>
          <div className="serif" style={{ fontSize: 28 }}>{title}</div>
        </div>
        <LongArrow />
      </div>
    </a>
  )
}

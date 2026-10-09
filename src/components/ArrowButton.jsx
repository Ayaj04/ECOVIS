import { ArrowUpRight } from './icons.jsx'

// The red label + square arrow button (.btn). variant: '' | 'light' | 'inv'
export default function ArrowButton({ href, variant = '', children, style, onClick, quiz = false }) {
  return (
    <a
      className={variant ? `btn ${variant}` : 'btn'}
      href={href}
      style={style}
      onClick={onClick}
      data-quiz={quiz ? '' : undefined}
    >
      <span>{children}</span>
      <span className="arr"><ArrowUpRight /></span>
    </a>
  )
}

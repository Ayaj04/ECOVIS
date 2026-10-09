import { useEffect, useRef, useState } from 'react'
import logoRed from '../assets/images/logo-red.png'
import logoWhite from '../assets/images/logo-white.png'
import { BurgerIcon, ChevronDown } from './icons.jsx'
import { useQuizLink } from './QuizContext.js'

// Which top-level nav item lights up for each page (none on home).
const NAV_FOR_PAGE = {
  home: 'about',
  institutionalise: 'what',
  investable: 'what',
  scale: 'what',
  'studio-ai': 'studio',
  journey: 'journey',
}
// Pages that open on a full-bleed photo get the transparent, white-logo header.
const PHOTO_TOP = ['home', 'studio-ai']

export default function Header({ page, showSeq }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDd, setOpenDd] = useState(null) // 'what' | 'studio' | null
  const navRef = useRef(null)
  const onQuiz = useQuizLink()

  // Every page show closes the dropdowns and the mobile menu.
  useEffect(() => {
    setOpenDd(null)
    setMenuOpen(false)
  }, [showSeq])

  // Click anywhere outside the open dropdown panel closes it.
  useEffect(() => {
    if (!openDd) return
    const onDocClick = (e) => {
      const panel = navRef.current?.querySelector('.dd-panel:not([hidden])')
      if (!panel?.contains(e.target)) setOpenDd(null)
    }
    document.addEventListener('click', onDocClick)
    return () => document.removeEventListener('click', onDocClick)
  }, [openDd])

  const toggleDd = (key) => setOpenDd((cur) => (cur === key ? null : key))

  const activeNav = page !== 'home' ? NAV_FOR_PAGE[page] : null
  const cls = (key) => (activeNav === key ? 'active' : undefined)

  return (
    <header className={PHOTO_TOP.includes(page) ? 'site-head over' : 'site-head'} id="head">
      <div className="wrap head-row">
        <a href="#home" className="logo" aria-label="ECOVIS RKCA home">
          <img className="r" src={logoRed} alt="ECOVIS RKCA" />
          <img className="w" src={logoWhite} alt="ECOVIS RKCA" />
        </a>
        <button
          className="burger"
          id="burger"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <BurgerIcon />
        </button>
        <nav className={menuOpen ? 'nav open' : 'nav'} id="nav" ref={navRef}>
          <a href="#home" className={cls('about')}>About Us</a>
          <NavDropdown id="what" label="What We Do" active={activeNav === 'what'} open={openDd === 'what'} onToggle={toggleDd}>
            <a href="#institutionalise">Institutionalise</a>
            <a href="#investable">Make it Investable</a>
            <a href="#scale">Scale</a>
          </NavDropdown>
          <NavDropdown id="studio" label="Studio AI" active={activeNav === 'studio'} open={openDd === 'studio'} onToggle={toggleDd}>
            <a href="#studio-ai">ACE AI<small>How ACE AI works</small></a>
          </NavDropdown>
          <a href="#journey" className={cls('journey')}>The Journey</a>
          <a href="#contact" className={cls('contact')}>Contact Us</a>
          <a href="#quiz" className="quiz-btn" data-quiz="" onClick={onQuiz}>Take the quiz</a>
        </nav>
      </div>
    </header>
  )
}

// A nav item that opens a panel of links underneath it.
function NavDropdown({ id, label, active, open, onToggle, children }) {
  return (
    <div className="dd">
      <button
        className={active ? 'drop active' : 'drop'}
        id={`dd-${id}-btn`}
        aria-expanded={open}
        aria-controls={`dd-${id}-panel`}
        onClick={(e) => {
          e.stopPropagation()
          onToggle(id)
        }}
      >
        {label} <ChevronDown />
      </button>
      <div className="dd-panel" id={`dd-${id}-panel`} hidden={!open}>
        {children}
      </div>
    </div>
  )
}

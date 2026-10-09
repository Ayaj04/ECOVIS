import { useEffect, useLayoutEffect, useReducer } from 'react'

export const PAGES = ['home', 'institutionalise', 'investable', 'scale', 'studio-ai', 'journey']

// page: the visible page. showSeq: bumps on every page "show" (resets header menus).
// scroll: what to do with the window once the new state is painted; seq triggers it.
const INITIAL = { page: null, showSeq: 0, scroll: null, seq: 0 }

function show(state, id, anchor = null) {
  if (!PAGES.includes(id)) id = 'home'
  return { page: id, showSeq: state.showSeq + 1, scroll: anchor ? { anchor } : 'top', seq: state.seq + 1 }
}

// Mirrors the reference router: #quiz and #contact act on top of the current page,
// #home-pillars shows home scrolled to the pillars, anything else is a page id.
function routeReducer(state, hash) {
  const h = (hash || '#home').slice(1)
  if (h === 'quiz') return state.page ? state : show(state, 'home')
  if (h === 'contact') {
    const base = state.page ? state : show(state, 'home')
    return { ...base, scroll: 'contact', seq: base.seq + 1 }
  }
  if (h === 'home-pillars') return show(state, 'home', 'home-pillars')
  return show(state, h)
}

export function useHashRoute(onQuizHash) {
  const [state, dispatch] = useReducer(routeReducer, INITIAL, (s) => routeReducer(s, window.location.hash))

  useEffect(() => {
    const route = () => {
      dispatch(window.location.hash)
      if (window.location.hash === '#quiz') onQuizHash()
    }
    window.addEventListener('hashchange', route)
    return () => window.removeEventListener('hashchange', route)
  }, [onQuizHash])

  // Initial load. In the original static page, #contact, #home-pillars and #quiz are real
  // element ids, so the browser's own fragment navigation also acts: it re-scrolls the target
  // into view once late layout (web fonts) settles, and it clears focus. Mirror both here.
  useEffect(() => {
    const hash = window.location.hash
    if (hash === '#quiz') onQuizHash({ focus: false })
    if (hash !== '#contact' && hash !== '#home-pillars') return
    const repin = () => {
      if (window.location.hash === hash) document.getElementById(hash.slice(1))?.scrollIntoView()
    }
    document.fonts?.ready.then(repin)
    if (document.readyState !== 'complete') window.addEventListener('load', repin, { once: true })
    return () => window.removeEventListener('load', repin)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useLayoutEffect(() => {
    const { scroll } = state
    if (scroll === 'contact') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    } else if (scroll?.anchor) {
      const el = document.getElementById(scroll.anchor)
      if (el) el.scrollIntoView()
      else window.scrollTo(0, 0)
    } else if (scroll === 'top') {
      window.scrollTo(0, 0)
    }
  }, [state.seq]) // eslint-disable-line react-hooks/exhaustive-deps

  return state
}

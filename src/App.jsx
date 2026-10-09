import { useCallback, useRef, useState } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import QuizModal from './components/QuizModal.jsx'
import { QuizContext } from './components/QuizContext.js'
import { useHashRoute } from './hooks/useHashRoute.js'
import HomePage from './pages/HomePage.jsx'
import InstitutionalisePage from './pages/InstitutionalisePage.jsx'
import InvestablePage from './pages/InvestablePage.jsx'
import ScalePage from './pages/ScalePage.jsx'
import StudioAIPage from './pages/StudioAIPage.jsx'
import JourneyPage from './pages/JourneyPage.jsx'

const PAGE_COMPONENTS = {
  home: HomePage,
  institutionalise: InstitutionalisePage,
  investable: InvestablePage,
  scale: ScalePage,
  'studio-ai': StudioAIPage,
  journey: JourneyPage,
}

export default function App() {
  const [quizOpen, setQuizOpen] = useState(false)
  const [quizRun, setQuizRun] = useState(0)
  const [quizFocus, setQuizFocus] = useState(true)
  // Hash to restore when the quiz is dismissed while the URL reads #quiz.
  const prevHash = useRef('#home')

  const openQuiz = useCallback((opts) => {
    setQuizFocus(opts?.focus !== false)
    setQuizRun((n) => n + 1)
    setQuizOpen(true)
  }, [])

  // "Take the quiz" controls: remember where we were, then open the overlay.
  const startQuiz = useCallback(() => {
    const h = window.location.hash
    prevHash.current = h && h !== '#quiz' ? h : '#home'
    openQuiz()
  }, [openQuiz])

  const dismissQuiz = useCallback(() => {
    setQuizOpen(false)
    if (window.location.hash === '#quiz') window.history.replaceState(null, '', prevHash.current)
  }, [])

  const hideQuiz = useCallback(() => setQuizOpen(false), [])

  const { page, showSeq } = useHashRoute(openQuiz)
  const Page = PAGE_COMPONENTS[page]

  return (
    <QuizContext.Provider value={startQuiz}>
      <Header page={page} showSeq={showSeq} />
      <main id="app">
        <Page />
      </main>
      <Footer />
      <QuizModal open={quizOpen} runId={quizRun} focusFirst={quizFocus} onDismiss={dismissQuiz} onHide={hideQuiz} onRetake={() => openQuiz()} />
    </QuizContext.Provider>
  )
}

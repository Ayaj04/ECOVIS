import { createContext, useContext } from 'react'

export const QuizContext = createContext(() => {})

// Returns an onClick handler for every "Take the quiz" control (data-quiz in the reference):
// it opens the quiz overlay without changing the URL hash.
export function useQuizLink() {
  const startQuiz = useContext(QuizContext)
  return (e) => {
    e.preventDefault()
    startQuiz()
  }
}

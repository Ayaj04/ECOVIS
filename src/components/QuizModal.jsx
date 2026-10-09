import { useEffect, useRef, useState } from 'react'
import ArrowButton from './ArrowButton.jsx'
import {
  OPTIONS,
  PILLAR_LINKS,
  PILLAR_MAX,
  PILLAR_NAMES,
  PILLAR_ORDER,
  QUESTIONS,
} from '../data/quiz.js'

const EMPTY_SCORE = { g: 0, i: 0, s: 0 }

/**
 * Nine-question self-assessment overlay.
 * `runId` changes every time the quiz is (re)opened, which resets progress without
 * remounting the panel, so the progress bar animates back to zero like the original.
 * `onDismiss` closes the overlay (and restores the hash); `onHide` only hides it.
 * `focusFirst` false leaves focus alone on the opening question (page loaded on #quiz).
 */
export default function QuizModal({ open, runId, focusFirst, onDismiss, onHide, onRetake }) {
  const [run, setRun] = useState(runId)
  const [step, setStep] = useState(0)
  const [score, setScore] = useState(EMPTY_SCORE)
  const optsRef = useRef(null)

  if (run !== runId) {
    setRun(runId)
    setStep(0)
    setScore(EMPTY_SCORE)
  }

  // Each new question puts focus on its first answer.
  useEffect(() => {
    if (!open || step >= QUESTIONS.length || (step === 0 && !focusFirst)) return
    optsRef.current?.querySelector('button')?.focus()
  }, [open, step, runId, focusFirst])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onDismiss()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onDismiss])

  if (!open) return null

  const done = step >= QUESTIONS.length
  const answer = (q, points) => {
    setScore((s) => ({ ...s, [q.p]: s[q.p] + points }))
    setStep((n) => n + 1)
  }

  return (
    <div
      className="overlay"
      id="quiz"
      role="dialog"
      aria-modal="true"
      aria-labelledby="qTitle"
      onClick={(e) => {
        if (e.target === e.currentTarget) onDismiss()
      }}
    >
      <div className="quiz">
        <div className="quiz-top">
          <span className="muted" id="qCount" style={{ fontSize: 14 }}>
            {done ? 'Your result' : `Question ${step + 1} of ${QUESTIONS.length}`}
          </span>
          <button type="button" id="qClose" aria-label="Close quiz" onClick={onDismiss}>×</button>
        </div>
        <div className="prog">
          <i id="qProg" style={{ width: `${(Math.min(step, QUESTIONS.length) / QUESTIONS.length) * 100}%` }}></i>
        </div>
        <div id="qBody">
          {done ? (
            <QuizResult score={score} onHide={onHide} onRetake={onRetake} />
          ) : (
            <>
              <h3 id="qTitle">{QUESTIONS[step].t}</h3>
              <div className="opts" ref={optsRef}>
                {OPTIONS.map(([label, points]) => (
                  <button type="button" className="opt" key={label} onClick={() => answer(QUESTIONS[step], points)}>
                    {label}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

function QuizResult({ score, onHide, onRetake }) {
  // Lowest-scoring pillar wins; ties fall back to g, i, s order.
  const weakest = [...PILLAR_ORDER].sort((a, b) => score[a] - score[b])[0]
  return (
    <>
      <h3 id="qTitle">{`Start with ${PILLAR_NAMES[weakest]}.`}</h3>
      <p className="muted">This is where your answers show the biggest gap. Fixing it first makes the other two easier.</p>
      <div className="res-bars">
        {PILLAR_ORDER.map((k) => {
          const pc = Math.round((score[k] / PILLAR_MAX) * 100)
          return (
            <div className="res-row" key={k}>
              <span>{PILLAR_NAMES[k]}</span>
              <span className="tr"><i style={{ width: `${pc}%` }}></i></span>
              <span className="pc">{pc}%</span>
            </div>
          )
        })}
      </div>
      <div className="row">
        <ArrowButton href={PILLAR_LINKS[weakest]} onClick={onHide}>{`Read about ${PILLAR_NAMES[weakest]}`}</ArrowButton>
        <button
          type="button"
          className="link"
          style={{ background: 'none', border: 0, borderBottom: '2px solid var(--red)', cursor: 'pointer', font: 'inherit', padding: '0 0 3px' }}
          onClick={onRetake}
        >
          Retake the quiz
        </button>
      </div>
    </>
  )
}

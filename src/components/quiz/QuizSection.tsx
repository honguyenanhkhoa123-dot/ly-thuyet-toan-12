import { useEffect, useRef, useState } from 'react'
import type { QuizQuestion } from '../../data/types'
import { RichText } from '../../lib/markdown'
import { Icon } from '../ui/Icon'

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F']

export function QuizSection({
  questions,
  onComplete,
}: {
  questions: QuizQuestion[]
  onComplete?: (correct: number, total: number) => void
}) {
  const [picked, setPicked] = useState<Record<string, number>>({})
  const [checked, setChecked] = useState<Record<string, boolean>>({})
  const savedRef = useRef(false)

  const answered = questions.filter(q => checked[q.id]).length
  const correct = questions.filter(q => checked[q.id] && picked[q.id] === q.answer).length

  useEffect(() => {
    if (savedRef.current) return
    if (answered === questions.length && questions.length > 0) {
      savedRef.current = true
      onComplete?.(correct, questions.length)
    }
  }, [answered, correct, questions.length, onComplete])

  return (
    <div>
      <div className="mb-5 flex flex-wrap items-center gap-3 rounded-[var(--radius)] border border-[var(--rule)] bg-[var(--surface)] px-4 py-2.5">
        <span className="text-[0.78rem] text-[var(--ink-muted)]">
          Đã làm <strong className="num text-[var(--ink)]">{answered}</strong>/{questions.length}
        </span>
        <span className="h-3 w-px bg-[var(--rule)]" aria-hidden="true" />
        <span className="text-[0.78rem] text-[var(--ink-muted)]">
          Đúng <strong className="num text-[var(--green)]">{correct}</strong>
        </span>
        <div className="ml-auto h-1.5 w-28 overflow-hidden rounded-full bg-[var(--surface-2)]" aria-hidden="true">
          <div
            className="h-full rounded-full bg-[var(--blue)] transition-[width] duration-500"
            style={{ width: `${(answered / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <ol className="space-y-5">
        {questions.map((q, qi) => {
          const isChecked = Boolean(checked[q.id])
          const selected = picked[q.id]

          return (
            <li key={q.id} className="rounded-[var(--radius)] border border-[var(--rule)] bg-[var(--surface)] px-4 py-4 sm:px-5">
              <div className="flex gap-3">
                <span className="num mt-0.5 shrink-0 font-[var(--font-display)] text-[0.8rem] font-semibold text-[var(--blue)]">
                  {String(qi + 1).padStart(2, '0')}
                </span>
                <div className="min-w-0 flex-1">
                  <RichText text={q.question} />

                  <div className="mt-3 grid gap-2 sm:grid-cols-2" role="group" aria-label="Các phương án">
                    {q.options.map((opt, oi) => {
                      const isPicked = selected === oi
                      const isAnswer = q.answer === oi
                      let cls =
                        'border-[var(--rule)] bg-[var(--surface)] hover:border-[var(--blue-line)] hover:bg-[var(--blue-soft)]'
                      if (isChecked && isAnswer) cls = 'border-[var(--green)] bg-[var(--green-soft)]'
                      else if (isChecked && isPicked && !isAnswer) cls = 'border-[var(--red)] bg-[var(--red-soft)]'
                      else if (isPicked) cls = 'border-[var(--blue)] bg-[var(--blue-soft)]'
                      else if (isChecked) cls = 'border-[var(--rule)] bg-[var(--surface)] opacity-60'

                      return (
                        <button
                          key={oi}
                          type="button"
                          disabled={isChecked}
                          onClick={() => setPicked(p => ({ ...p, [q.id]: oi }))}
                          aria-pressed={isPicked}
                          className={`flex items-start gap-2.5 rounded-[8px] border px-3 py-2 text-left transition-colors disabled:cursor-default ${cls}`}
                        >
                          <span
                            className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border text-[0.68rem] font-semibold ${
                              isPicked || (isChecked && isAnswer)
                                ? 'border-transparent bg-[var(--ink)] text-[var(--paper)]'
                                : 'border-[var(--rule-strong)] text-[var(--ink-muted)]'
                            }`}
                          >
                            {LETTERS[oi]}
                          </span>
                          <span className="min-w-0 flex-1">
                            <RichText text={opt} className="!text-[0.97rem]" />
                          </span>
                        </button>
                      )
                    })}
                  </div>

                  <div className="mt-3 flex flex-wrap items-center gap-3">
                    {!isChecked && (
                      <button
                        type="button"
                        disabled={selected === undefined}
                        onClick={() => setChecked(c => ({ ...c, [q.id]: true }))}
                        className="rounded-md bg-[var(--primary)] px-3 py-1.5 text-[0.78rem] font-medium text-[var(--on-primary)] transition-colors hover:bg-[var(--primary-hover)] disabled:opacity-40"
                      >
                        Kiểm tra
                      </button>
                    )}
                    {isChecked && (
                      <button
                        type="button"
                        onClick={() => {
                          setChecked(c => ({ ...c, [q.id]: false }))
                          setPicked(p => {
                            const next = { ...p }
                            delete next[q.id]
                            return next
                          })
                        }}
                        className="text-[0.76rem] text-[var(--ink-muted)] underline underline-offset-2 hover:text-[var(--ink)]"
                      >
                        Làm lại
                      </button>
                    )}
                    {isChecked && (
                      <span
                        className={`inline-flex items-center gap-1.5 text-[0.78rem] font-medium ${
                          selected === q.answer ? 'text-[var(--green)]' : 'text-[var(--red)]'
                        }`}
                      >
                        <Icon name={selected === q.answer ? 'check' : 'close'} size={14} />
                        {selected === q.answer ? 'Chính xác' : `Đáp án đúng: ${LETTERS[q.answer]}`}
                      </span>
                    )}
                  </div>

                  {isChecked && q.explanation && (
                    <div className="panel-enter mt-2.5 border-l-2 border-[var(--rule-strong)] pl-3">
                      <RichText text={q.explanation} className="!text-[0.95rem] !text-[var(--ink-muted)]" />
                    </div>
                  )}
                </div>
              </div>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

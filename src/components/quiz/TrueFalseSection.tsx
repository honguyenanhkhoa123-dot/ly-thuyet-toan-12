import { useState } from 'react'
import type { TrueFalseQuestion } from '../../data/types'
import { RichText } from '../../lib/markdown'
import { Icon } from '../ui/Icon'

export function TrueFalseSection({ questions }: { questions: TrueFalseQuestion[] }) {
  const [picks, setPicks] = useState<Record<string, boolean>>({})
  const [checked, setChecked] = useState<Record<string, boolean>>({})

  const total = questions.reduce((n, q) => n + q.items.length, 0)
  const answered = questions.reduce(
    (n, q) => n + q.items.filter((_, i) => picks[`${q.id}-${i}`] !== undefined).length,
    0,
  )
  const correct = questions.reduce(
    (n, q) =>
      n +
      q.items.filter(
        (item, i) => checked[q.id] && picks[`${q.id}-${i}`] !== undefined && picks[`${q.id}-${i}`] === item.answer,
      ).length,
    0,
  )

  return (
    <div>
      <div className="mb-5 flex flex-wrap items-center gap-3 rounded-[var(--radius)] border border-[var(--rule)] bg-[var(--surface)] px-4 py-2.5">
        <span className="text-[0.78rem] text-[var(--ink-muted)]">
          Đã trả lời <strong className="num text-[var(--ink)]">{answered}</strong>/{total} ý
        </span>
        <span className="h-3 w-px bg-[var(--rule)]" aria-hidden="true" />
        <span className="text-[0.78rem] text-[var(--ink-muted)]">
          Đúng <strong className="num text-[var(--green)]">{correct}</strong>
        </span>
        <p className="ml-auto text-[0.72rem] text-[var(--ink-faint)]">Chọn Đúng hoặc Sai cho từng ý</p>
      </div>

      <ol className="space-y-5">
        {questions.map((q, qi) => {
          const isChecked = Boolean(checked[q.id])
          const allPicked = q.items.every((_, i) => picks[`${q.id}-${i}`] !== undefined)

          return (
            <li key={q.id} className="rounded-[var(--radius)] border border-[var(--rule)] bg-[var(--surface)] px-4 py-4 sm:px-5">
              <div className="flex gap-3">
                <span className="num mt-0.5 shrink-0 font-[var(--font-display)] text-[0.8rem] font-semibold text-[var(--blue)]">
                  {String(qi + 1).padStart(2, '0')}
                </span>
                <div className="min-w-0 flex-1">
                  <RichText text={q.stem} />

                  <ul className="mt-3 space-y-2">
                    {q.items.map((item, i) => {
                      const key = `${q.id}-${i}`
                      const pick = picks[key]
                      const right = isChecked && pick === item.answer
                      const wrong = isChecked && pick !== undefined && pick !== item.answer

                      return (
                        <li
                          key={key}
                          className={`flex flex-col gap-2 rounded-[8px] border px-3 py-2.5 sm:flex-row sm:items-center ${
                            right
                              ? 'border-[var(--green)] bg-[var(--green-soft)]'
                              : wrong
                                ? 'border-[var(--red)] bg-[var(--red-soft)]'
                                : 'border-[var(--rule)]'
                          }`}
                        >
                          <span className="flex min-w-0 flex-1 gap-2.5">
                            <span className="mt-0.5 text-[0.68rem] font-semibold text-[var(--ink-faint)]">
                              {String.fromCharCode(97 + i)}
                            </span>
                            <RichText text={item.text} className="!text-[0.97rem]" />
                          </span>

                          <span className="flex shrink-0 gap-1.5 pl-5 sm:pl-0">
                            {[true, false].map(value => {
                              const active = pick === value
                              return (
                                <button
                                  key={String(value)}
                                  type="button"
                                  disabled={isChecked}
                                  aria-pressed={active}
                                  onClick={() => setPicks(p => ({ ...p, [key]: value }))}
                                  className={`rounded-md border px-2.5 py-1 text-[0.74rem] font-medium transition-colors disabled:cursor-default ${
                                    active && isChecked
                                      ? right
                                        ? 'border-[var(--green)] bg-[var(--green)] text-white'
                                        : 'border-[var(--red)] bg-[var(--red)] text-white'
                                      : active
                                        ? 'border-[var(--primary)] bg-[var(--primary)] text-[var(--on-primary)]'
                                        : 'border-[var(--rule-strong)] text-[var(--ink-muted)] hover:border-[var(--blue-line)] hover:text-[var(--ink)]'
                                  }`}
                                >
                                  {value ? 'Đúng' : 'Sai'}
                                </button>
                              )
                            })}
                          </span>
                        </li>
                      )
                    })}
                  </ul>

                  <div className="mt-3 flex flex-wrap items-center gap-3">
                    {!isChecked ? (
                      <button
                        type="button"
                        disabled={!allPicked}
                        onClick={() => setChecked(c => ({ ...c, [q.id]: true }))}
                        className="rounded-md bg-[var(--primary)] px-3 py-1.5 text-[0.78rem] font-medium text-[var(--on-primary)] transition-colors hover:bg-[var(--primary-hover)] disabled:opacity-40"
                      >
                        Kiểm tra
                      </button>
                    ) : (
                      <>
                        <span className="inline-flex items-center gap-1.5 text-[0.78rem] font-medium text-[var(--ink-muted)]">
                          <Icon name="check" size={14} className="text-[var(--green)]" />
                          Đúng {q.items.filter((item, i) => picks[`${q.id}-${i}`] === item.answer).length}/
                          {q.items.length} ý
                        </span>
                        <button
                          type="button"
                          onClick={() => {
                            setChecked(c => ({ ...c, [q.id]: false }))
                            setPicks(p => {
                              const next = { ...p }
                              q.items.forEach((_, i) => delete next[`${q.id}-${i}`])
                              return next
                            })
                          }}
                          className="text-[0.76rem] text-[var(--ink-muted)] underline underline-offset-2 hover:text-[var(--ink)]"
                        >
                          Làm lại
                        </button>
                      </>
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

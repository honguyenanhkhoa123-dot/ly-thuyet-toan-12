import { useState } from 'react'
import type { ShortAnswerQuestion } from '../../data/types'
import { RichText } from '../../lib/markdown'
import { Icon } from '../ui/Icon'

function normalize(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '')
    .replace(/,/g, '.')
    .replace(/[–—−]/g, '-')
}

function ShortAnswerItem({ question, index }: { question: ShortAnswerQuestion; index: number }) {
  const [value, setValue] = useState('')
  const [revealed, setRevealed] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const matches = submitted && value.trim() !== '' && normalize(value) === normalize(question.answer)

  return (
    <li className="rounded-[var(--radius)] border border-[var(--rule)] bg-[var(--surface)] px-4 py-4 sm:px-5">
      <div className="flex gap-3">
        <span className="num mt-0.5 shrink-0 font-[var(--font-display)] text-[0.8rem] font-semibold text-[var(--blue)]">
          {String(index + 1).padStart(2, '0')}
        </span>
        <div className="min-w-0 flex-1">
          <RichText text={question.question} />

          <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
            <label className="sr-only" htmlFor={`sa-${question.id}`}>
              Trả lời câu {index + 1}
            </label>
            <input
              id={`sa-${question.id}`}
              value={value}
              onChange={e => {
                setValue(e.target.value)
                setSubmitted(false)
                setRevealed(false)
              }}
              onKeyDown={e => {
                if (e.key === 'Enter' && value.trim()) setSubmitted(true)
              }}
              inputMode="text"
              autoComplete="off"
              placeholder={question.unit ? `Nhập ${question.unit}…` : 'Nhập đáp án…'}
              className="h-9 w-full rounded-[7px] border border-[var(--rule-strong)] bg-[var(--surface)] px-2.5 font-[var(--font-read)] text-[0.95rem] text-[var(--ink)] placeholder:text-[var(--ink-faint)] focus:border-[var(--blue)] focus:outline-none sm:w-40"
            />
            <div className="flex gap-2">
              <button
                type="button"
                disabled={!value.trim()}
                onClick={() => setSubmitted(true)}
                className="h-9 rounded-[7px] bg-[var(--primary)] px-3 text-[0.78rem] font-medium text-[var(--on-primary)] transition-colors hover:bg-[var(--primary-hover)] disabled:opacity-40"
              >
                Kiểm tra
              </button>
              <button
                type="button"
                onClick={() => setRevealed(v => !v)}
                className="h-9 rounded-[7px] border border-[var(--rule)] px-3 text-[0.78rem] font-medium text-[var(--ink-muted)] transition-colors hover:border-[var(--blue-line)] hover:text-[var(--ink)]"
              >
                {revealed ? 'Ẩn đáp án' : 'Xem đáp án'}
              </button>
            </div>

            {submitted && (
              <span
                className={`inline-flex items-center gap-1.5 text-[0.78rem] font-medium ${
                  matches ? 'text-[var(--green)]' : 'text-[var(--amber-deep)]'
                }`}
              >
                <Icon name={matches ? 'check' : 'spark'} size={14} />
                {matches ? 'Khớp đáp án' : 'Chưa khớp — đối chiếu lại'}
              </span>
            )}
          </div>

          {revealed && (
            <div className="panel-enter mt-3 rounded-[var(--radius)] border border-[var(--green)] bg-[var(--green-soft)] px-3.5 py-2.5">
              <p className="mb-0.5 text-[0.7rem] font-semibold tracking-wide text-[var(--green)]">Đáp án</p>
              <RichText text={question.answer} className="!text-[0.98rem]" />
              {question.explanation && (
                <RichText text={question.explanation} className="mt-1.5 !text-[0.94rem] !text-[var(--ink-muted)]" />
              )}
            </div>
          )}
        </div>
      </div>
    </li>
  )
}

export function ShortAnswerSection({ questions }: { questions: ShortAnswerQuestion[] }) {
  return (
    <ol className="space-y-4">
      {questions.map((q, i) => (
        <ShortAnswerItem key={q.id} question={q} index={i} />
      ))}
    </ol>
  )
}

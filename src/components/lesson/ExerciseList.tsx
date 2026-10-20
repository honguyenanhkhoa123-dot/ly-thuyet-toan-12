import { useState } from 'react'
import type { Exercise } from '../../data/types'
import { RichText } from '../../lib/markdown'
import { Icon } from '../ui/Icon'

function ExerciseItem({ exercise, index }: { exercise: Exercise; index: number }) {
  const [showSolution, setShowSolution] = useState(false)
  const [showHint, setShowHint] = useState(false)

  return (
    <article className="border-b border-[var(--rule)] pb-5 last:border-b-0 last:pb-0">
      <div className="flex gap-3.5">
        <span className="num mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-[7px] border border-[var(--rule)] bg-[var(--surface)] text-[0.75rem] font-semibold text-[var(--ink-muted)]">
          {index + 1}
        </span>
        <div className="min-w-0 flex-1">
          <RichText text={exercise.prompt} />

          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2">
            {exercise.hint && (
              <button
                type="button"
                onClick={() => setShowHint(v => !v)}
                className="inline-flex items-center gap-1.5 text-[0.78rem] font-medium text-[var(--ink-muted)] transition-colors hover:text-[var(--amber-deep)]"
              >
                <Icon name="spark" size={13} />
                {showHint ? 'Ẩn gợi ý' : 'Gợi ý'}
              </button>
            )}
            <button
              type="button"
              onClick={() => setShowSolution(v => !v)}
              aria-expanded={showSolution}
              className="inline-flex items-center gap-1.5 text-[0.78rem] font-medium text-[var(--blue-deep)] transition-colors hover:underline"
            >
              <Icon name="pen" size={13} />
              {showSolution ? 'Ẩn lời giải' : 'Xem lời giải'}
            </button>
          </div>

          {showHint && exercise.hint && (
            <div className="panel-enter mt-2.5 rounded-[var(--radius)] border border-[color-mix(in_srgb,var(--amber)_35%,transparent)] bg-[var(--amber-soft)] px-3 py-2">
              <RichText text={exercise.hint} className="!text-[0.94rem]" />
            </div>
          )}

          {showSolution && (
            <div className="panel-enter mt-2.5 rounded-[var(--radius)] border border-[var(--rule)] bg-[var(--surface-2)] px-3.5 py-3">
              <p className="mb-1.5 text-[0.7rem] font-semibold tracking-wide text-[var(--ink-muted)]">Lời giải</p>
              <RichText text={exercise.solution} className="!text-[0.99rem]" />
            </div>
          )}
        </div>
      </div>
    </article>
  )
}

export function ExerciseList({ exercises }: { exercises: Exercise[] }) {
  return (
    <div className="space-y-5">
      {exercises.map((ex, i) => (
        <ExerciseItem key={ex.id} exercise={ex} index={i} />
      ))}
    </div>
  )
}

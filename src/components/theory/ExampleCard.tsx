import { useState } from 'react'
import type { Example } from '../../data/types'
import { RichText } from '../../lib/markdown'
import { GraphFigure } from './GraphFigure'
import { VariationTable } from './VariationTable'
import { Icon } from '../ui/Icon'

export function ExampleCard({ example, defaultOpen = false }: { example: Example; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <article className="overflow-hidden rounded-[var(--radius)] border border-[var(--rule)] bg-[var(--surface)]">
      <div className="flex items-baseline justify-between gap-3 border-b border-[var(--rule)] bg-[var(--surface-2)] px-4 py-2">
        <h4 className="min-w-0 font-[var(--font-display)] text-[0.86rem] font-semibold text-[var(--ink)]">
          {example.title ?? `Ví dụ ${example.id.replace(/\D/g, '')}`}
        </h4>
        <span className="shrink-0 text-[0.68rem] tracking-wide text-[var(--ink-faint)]">
          {example.steps.length} bước
        </span>
      </div>

      <div className="px-4 pt-3.5 pb-1 sm:px-5">
        <RichText text={example.prompt} />
      </div>

      <div className="px-4 pb-4 sm:px-5">
        <button
          type="button"
          onClick={() => setOpen(v => !v)}
          aria-expanded={open}
          aria-controls={`loi-giai-${example.id}`}
          className="inline-flex items-center gap-1.5 rounded-md border border-[var(--rule)] px-2.5 py-1.5 text-[0.78rem] font-medium text-[var(--blue-deep)] transition-colors hover:border-[var(--blue-line)] hover:bg-[var(--blue-soft)]"
        >
          <Icon name={open ? 'close' : 'pen'} size={14} />
          {open ? 'Ẩn lời giải' : 'Xem lời giải'}
        </button>
      </div>

      {open && (
        <div id={`loi-giai-${example.id}`} className="panel-enter border-t border-[var(--rule)] px-4 pt-4 pb-4 sm:px-5">
          <ol className="space-y-3">
            {example.steps.map((step, i) => (
              <li key={i} className="flex gap-3">
                <span className="num mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border border-[var(--rule-strong)] text-[0.66rem] font-semibold text-[var(--ink-muted)]">
                  {i + 1}
                </span>
                <div className="min-w-0 flex-1">
                  {typeof step === 'string' ? (
                    <RichText text={step} />
                  ) : (
                    <>
                      <RichText text={step.text} />
                      <VariationTable spec={step.table} />
                    </>
                  )}
                </div>
              </li>
            ))}
          </ol>

          {example.figure && <GraphFigure spec={example.figure} />}

          {example.answer && (
            <div className="mt-4 flex gap-2 rounded-[var(--radius)] border border-[color-mix(in_srgb,var(--green)_30%,transparent)] bg-[var(--green-soft)] px-3.5 py-2.5">
              <Icon name="check" size={16} className="mt-0.5 shrink-0 text-[var(--green)]" />
              <div className="min-w-0 flex-1">
                <p className="mb-0.5 text-[0.7rem] font-semibold tracking-wide text-[var(--green)]">Kết luận</p>
                <RichText text={example.answer} className="!text-[0.97rem]" />
              </div>
            </div>
          )}
        </div>
      )}
    </article>
  )
}

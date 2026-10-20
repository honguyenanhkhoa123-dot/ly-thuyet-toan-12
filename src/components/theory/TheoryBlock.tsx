import type { TheorySection } from '../../data/types'
import { RichText } from '../../lib/markdown'
import { GraphFigure } from './GraphFigure'
import { Icon } from '../ui/Icon'

export function FormulaBox({ tex }: { tex: string }) {
  return (
    <div className="formula-box mt-4 overflow-hidden rounded-[var(--radius)] border border-[var(--blue-line)] bg-[var(--surface)]">
      <div className="flex items-center gap-1.5 border-b border-[var(--blue-line)] bg-[var(--blue-soft)] px-3 py-1.5">
        <Icon name="spark" size={13} className="text-[var(--blue-deep)]" />
        <span className="text-[0.7rem] font-semibold tracking-wide text-[var(--blue-deep)]">Công thức</span>
      </div>
      <div className="px-2 py-1">
        <RichText text={`$$${tex}$$`} />
      </div>
    </div>
  )
}

export function TheoryBlock({ section, index }: { section: TheorySection; index: number }) {
  return (
    <section id={`ly-thuyet-${index + 1}`} className="scroll-mt-24">
      <h3 className="flex items-baseline gap-2.5 font-[var(--font-display)] text-[1.1rem] font-semibold leading-snug text-[var(--ink)] sm:text-[1.16rem]">
        <span className="num shrink-0 text-[0.78rem] font-medium text-[var(--blue)]">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span>{section.subtitle}</span>
      </h3>

      <div className="mt-3 rounded-r-[10px] border-l-[3px] border-[var(--blue)] bg-[var(--blue-soft)] px-4 py-4 sm:px-5">
        <RichText text={section.content} />
        {section.formula && <FormulaBox tex={section.formula} />}
      </div>

      {section.note && (
        <div className="mt-3 flex gap-2.5 rounded-[var(--radius)] border border-[color-mix(in_srgb,var(--amber)_38%,transparent)] bg-[var(--amber-soft)] px-3.5 py-3">
          <Icon name="pen" size={16} className="mt-0.5 shrink-0 text-[var(--amber-deep)]" />
          <div className="min-w-0 flex-1">
            <p className="mb-1 text-[0.72rem] font-semibold tracking-wide text-[var(--amber-deep)]">Lưu ý</p>
            <RichText text={section.note} className="!text-[0.97rem]" />
          </div>
        </div>
      )}

      {section.figure && <GraphFigure spec={section.figure} />}
    </section>
  )
}

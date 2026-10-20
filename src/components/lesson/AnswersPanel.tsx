import type { Lesson } from '../../data/types'
import { RichText } from '../../lib/markdown'

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F']

export function AnswersPanel({ lesson }: { lesson: Lesson }) {
  return (
    <div className="space-y-8">
      <p className="rounded-[var(--radius)] border border-[color-mix(in_srgb,var(--amber)_35%,transparent)] bg-[var(--amber-soft)] px-3.5 py-2.5 text-[0.82rem] leading-relaxed text-[var(--amber-deep)]">
        Chỉ mở phần này sau khi đã tự làm bài. Đáp án trắc nghiệm ghi theo thứ tự câu; đúng/sai ghi theo từng ý a, b, c, d.
      </p>

      <section>
        <h3 className="mb-3 font-[var(--font-display)] text-[1rem] font-semibold text-[var(--ink)]">
          Trắc nghiệm nhiều phương án
        </h3>
        <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 sm:grid-cols-4">
          {lesson.quiz.map((q, i) => (
            <li key={q.id} className="flex items-baseline gap-2 border-b border-dashed border-[var(--rule)] py-1.5 text-[0.88rem]">
              <span className="num w-6 shrink-0 text-[var(--ink-faint)]">{i + 1}.</span>
              <span className="font-semibold text-[var(--ink)]">{LETTERS[q.answer]}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3 className="mb-3 font-[var(--font-display)] text-[1rem] font-semibold text-[var(--ink)]">
          Câu hỏi Đúng / Sai
        </h3>
        <ul className="space-y-2">
          {lesson.trueFalse.map((q, i) => (
            <li key={q.id} className="flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b border-dashed border-[var(--rule)] py-2 text-[0.88rem]">
              <span className="num shrink-0 text-[var(--ink-faint)]">Câu {i + 1}.</span>
              {q.items.map((item, ii) => (
                <span key={ii} className="flex items-baseline gap-1">
                  <span className="text-[var(--ink-muted)]">{String.fromCharCode(97 + ii)})</span>
                  <span className={item.answer ? 'font-semibold text-[var(--green)]' : 'font-semibold text-[var(--red)]'}>
                    {item.answer ? 'Đ' : 'S'}
                  </span>
                </span>
              ))}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3 className="mb-3 font-[var(--font-display)] text-[1rem] font-semibold text-[var(--ink)]">
          Trả lời ngắn
        </h3>
        <ol className="space-y-2">
          {lesson.shortAnswer.map((q, i) => (
            <li key={q.id} className="flex gap-3 border-b border-dashed border-[var(--rule)] py-2 text-[0.92rem]">
              <span className="num shrink-0 text-[var(--ink-faint)]">{i + 1}.</span>
              <span className="min-w-0 flex-1">
                <RichText text={q.answer} className="!text-[0.94rem]" />
              </span>
            </li>
          ))}
        </ol>
      </section>
    </div>
  )
}

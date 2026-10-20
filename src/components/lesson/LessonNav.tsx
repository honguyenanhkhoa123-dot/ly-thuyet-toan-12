import { Link } from 'react-router-dom'
import type { Chapter, LessonMeta } from '../../data/types'
import { Icon } from '../ui/Icon'

export function LessonNav({
  chapter,
  prev,
  next,
}: {
  chapter: Chapter
  prev?: LessonMeta
  next?: LessonMeta
}) {
  return (
    <nav className="mt-10 grid gap-3 border-t border-[var(--rule)] pt-6 sm:grid-cols-2" aria-label="Điều hướng bài học">
      {prev ? (
        <Link
          to={`/chuong/${chapter.id}/bai/${prev.id}`}
          className="group flex items-start gap-3 rounded-[var(--radius)] border border-[var(--rule)] bg-[var(--surface)] px-4 py-3 transition-colors hover:border-[var(--blue-line)] hover:bg-[var(--blue-soft)]"
        >
          <Icon name="arrow-left" size={17} className="mt-1 shrink-0 text-[var(--ink-faint)] group-hover:text-[var(--blue-deep)]" />
          <span className="min-w-0">
            <span className="block text-[0.7rem] text-[var(--ink-muted)]">Bài trước</span>
            <span className="mt-0.5 block font-[var(--font-display)] text-[0.88rem] font-medium leading-snug text-[var(--ink)]">
              {prev.title}
            </span>
          </span>
        </Link>
      ) : (
        <div className="hidden sm:block" />
      )}

      {next && (
        <Link
          to={`/chuong/${chapter.id}/bai/${next.id}`}
          className="group flex items-start justify-end gap-3 rounded-[var(--radius)] border border-[var(--rule)] bg-[var(--surface)] px-4 py-3 text-right transition-colors hover:border-[var(--blue-line)] hover:bg-[var(--blue-soft)] sm:col-start-2"
        >
          <span className="min-w-0">
            <span className="block text-[0.7rem] text-[var(--ink-muted)]">Bài tiếp theo</span>
            <span className="mt-0.5 block font-[var(--font-display)] text-[0.88rem] font-medium leading-snug text-[var(--ink)]">
              {next.title}
            </span>
          </span>
          <Icon name="arrow-right" size={17} className="mt-1 shrink-0 text-[var(--ink-faint)] group-hover:text-[var(--blue-deep)]" />
        </Link>
      )}
    </nav>
  )
}

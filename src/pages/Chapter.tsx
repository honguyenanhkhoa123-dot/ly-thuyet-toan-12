import { Link, useParams } from 'react-router-dom'
import { getChapter } from '../data/chapters'
import { useProgress } from '../lib/progress'
import { useTitle } from '../lib/useTitle'
import { Icon } from '../components/ui/Icon'
import { NotFound } from './NotFound'

export function ChapterPage() {
  const { chapterId } = useParams()
  const chapter = getChapter(chapterId)
  const { progress } = useProgress()
  useTitle(chapter ? `Chương ${chapter.order}: ${chapter.title}` : 'Không tìm thấy trang')

  if (!chapter) return <NotFound />

  const done = chapter.lessons.filter(l => progress.completed.includes(`${chapter.id}/${l.id}`)).length
  const pct = Math.round((done / chapter.lessons.length) * 100)
  const minutes = chapter.lessons.reduce((n, l) => n + l.minutes, 0)

  return (
    <div className="mx-auto max-w-[900px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 flex items-center gap-2 text-[0.78rem] text-[var(--ink-muted)]" aria-label="Đường dẫn">
        <Link to="/" className="hover:text-[var(--ink)]">
          Trang chủ
        </Link>
        <span aria-hidden="true">/</span>
        <span className="text-[var(--ink-soft)]">Chương {chapter.order}</span>
      </nav>

      <header className="border-b border-[var(--rule)] pb-7">
        <div className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[8px] border border-[var(--blue-line)] bg-[var(--blue-soft)] text-[var(--blue-deep)]">
            <Icon name={chapter.icon} size={19} />
          </span>
          <p className="eyebrow">Chương {String(chapter.order).padStart(2, '0')}</p>
        </div>
        <h1 className="display mt-3 text-[1.7rem] text-[var(--ink)] sm:text-[2.1rem]">{chapter.title}</h1>

        <p className="mt-4 max-w-[62ch] font-[var(--font-read)] text-[0.98rem] leading-relaxed text-[var(--ink-muted)]">
          {chapter.description}
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.78rem] text-[var(--ink-muted)]">
          <span className="flex items-center gap-1.5">
            <Icon name="book" size={14} />
            {chapter.lessons.length} bài
          </span>
          <span className="flex items-center gap-1.5">
            <Icon name="clock" size={14} />
            khoảng {minutes} phút
          </span>
          <span className="flex items-center gap-1.5">
            <Icon name="check" size={14} />
            {done}/{chapter.lessons.length} bài hoàn thành
          </span>
        </div>

        <div className="mt-3 h-1.5 max-w-md overflow-hidden rounded-full bg-[var(--surface-2)]" aria-hidden="true">
          <div className="h-full rounded-full bg-[var(--blue)] transition-[width] duration-500" style={{ width: `${pct}%` }} />
        </div>
      </header>

      {!chapter.ready && (
        <p className="mt-6 rounded-[var(--radius)] border border-[var(--rule)] bg-[var(--surface)] px-4 py-3 text-[0.85rem] leading-relaxed text-[var(--ink-muted)]">
          Chương này đang được biên soạn. Danh sách bài bên dưới là khung nội dung theo chương trình, sẽ mở lần lượt.
        </p>
      )}

      <ol className="mt-6 overflow-hidden rounded-[var(--radius)] border border-[var(--rule)] bg-[var(--surface)]">
        {chapter.lessons.map((lesson, i) => {
          const key = `${chapter.id}/${lesson.id}`
          const complete = progress.completed.includes(key)
          const visited = progress.visited.includes(key)

          const inner = (
            <>
              <span className="num w-8 shrink-0 pt-0.5 text-[0.85rem] font-medium text-[var(--ink-faint)]">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-[var(--font-display)] text-[1rem] font-semibold leading-snug text-[var(--ink)]">
                  {lesson.title}
                </span>
                {lesson.summary && (
                  <span className="mt-1 block font-[var(--font-read)] text-[0.9rem] leading-relaxed text-[var(--ink-muted)]">
                    {lesson.summary}
                  </span>
                )}
                <span className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.72rem] text-[var(--ink-faint)]">
                  <span className="flex items-center gap-1">
                    <Icon name="clock" size={12} />
                    {lesson.minutes} phút
                  </span>
                  {complete && <span className="text-[var(--green)]">đã hoàn thành</span>}
                  {!complete && visited && <span className="text-[var(--blue-deep)]">đang học</span>}
                  {!lesson.ready && <span>sắp mở</span>}
                </span>
              </span>
              <span className="shrink-0 self-center pt-0.5 text-[var(--ink-faint)]">
                {lesson.ready ? (
                  <span className="inline-flex items-center gap-1.5 rounded-[6px] border border-[var(--rule)] px-2.5 py-1 text-[0.74rem] font-medium text-[var(--blue-deep)]">
                    Học ngay
                    <Icon name="arrow-right" size={14} />
                  </span>
                ) : (
                  <Icon name="clock" size={17} />
                )}
              </span>
            </>
          )

          return (
            <li key={lesson.id} className="border-b border-[var(--rule)] last:border-b-0">
              {lesson.ready ? (
                <Link
                  to={`/chuong/${chapter.id}/bai/${lesson.id}`}
                  className="flex gap-3 px-4 py-4 transition-colors hover:bg-[var(--surface-2)] sm:px-5"
                >
                  {inner}
                </Link>
              ) : (
                <div className="flex gap-3 px-4 py-4 opacity-65 sm:px-5">{inner}</div>
              )}
            </li>
          )
        })}
      </ol>

      <p className="mt-8 text-[0.8rem] text-[var(--ink-muted)]">
        Nên đọc lý thuyết trước, sau đó làm ví dụ và bài tập tự luyện. Phần trắc nghiệm dùng để kiểm tra lại.
      </p>
    </div>
  )
}

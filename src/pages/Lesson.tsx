import { useEffect, useMemo } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { getLessonMeta } from '../data/chapters'
import { getLesson } from '../data/lessons'
import { useProgress } from '../lib/progress'
import { useTitle } from '../lib/useTitle'
import { TheoryBlock } from '../components/theory/TheoryBlock'
import { ExampleCard } from '../components/theory/ExampleCard'
import { ExerciseList } from '../components/lesson/ExerciseList'
import { AnswersPanel } from '../components/lesson/AnswersPanel'
import { LessonNav } from '../components/lesson/LessonNav'
import { Tabs, type TabDef } from '../components/lesson/Tabs'
import { QuizSection } from '../components/quiz/QuizSection'
import { TrueFalseSection } from '../components/quiz/TrueFalseSection'
import { ShortAnswerSection } from '../components/quiz/ShortAnswerSection'
import { Icon } from '../components/ui/Icon'
import { NotFound } from './NotFound'

const TAB_IDS = ['ly-thuyet', 'vi-du', 'bai-tap', 'trac-nghiem', 'dap-an'] as const

export function LessonPage() {
  const { chapterId, lessonId } = useParams()
  const [params, setParams] = useSearchParams()
  const found = getLessonMeta(chapterId, lessonId)
  const lesson = chapterId && lessonId ? getLesson(chapterId, lessonId) : undefined
  const { progress, markVisited, toggleComplete, saveScore } = useProgress()

  useTitle(
    found
      ? `Bài ${found.index + 1}: ${found.meta.title} — Chương ${found.chapter.order}`
      : 'Không tìm thấy trang',
  )

  useEffect(() => {
    if (chapterId && lessonId && lesson) markVisited(`${chapterId}/${lessonId}`)
  }, [chapterId, lessonId, lesson, markVisited])

  const tabs: TabDef[] = useMemo(() => {
    if (!lesson) return []
    return [
      { id: 'ly-thuyet', label: 'Lý thuyết', count: lesson.theory.length },
      { id: 'vi-du', label: 'Ví dụ', count: lesson.examples.length },
      {
        id: 'bai-tap',
        label: 'Bài tập',
        count: lesson.exercises.length + lesson.trueFalse.length + lesson.shortAnswer.length,
      },
      { id: 'trac-nghiem', label: 'Trắc nghiệm', count: lesson.quiz.length },
      { id: 'dap-an', label: 'Đáp án' },
    ]
  }, [lesson])

  const raw = params.get('tab')
  const active = raw && (TAB_IDS as readonly string[]).includes(raw) ? raw : 'ly-thuyet'

  if (!found) return <NotFound />
  const { chapter, meta, index } = found
  const key = `${chapter.id}/${meta.id}`
  const complete = progress.completed.includes(key)
  const prev = chapter.lessons[index - 1]
  const next = chapter.lessons[index + 1]

  if (!lesson) {
    return (
      <div className="mx-auto max-w-[760px] px-4 py-12 sm:px-6">
        <nav className="mb-6 flex items-center gap-2 text-[0.78rem] text-[var(--ink-muted)]">
          <Link to="/" className="hover:text-[var(--ink)]">Trang chủ</Link>
          <span aria-hidden="true">/</span>
          <Link to={`/chuong/${chapter.id}`} className="hover:text-[var(--ink)]">Chương {chapter.order}</Link>
        </nav>
        <p className="eyebrow">Bài {index + 1}</p>
        <h1 className="display mt-2 text-[1.8rem] text-[var(--ink)]">{meta.title}</h1>
        <p className="mt-4 max-w-[56ch] font-[var(--font-read)] text-[0.98rem] leading-relaxed text-[var(--ink-muted)]">
          Bài này đang được biên soạn. Nội dung sẽ được mở sau khi phần lý thuyết, ví dụ và câu hỏi được kiểm tra lại.
        </p>
        <Link
          to={`/chuong/${chapter.id}`}
          className="mt-6 inline-flex h-10 items-center gap-2 rounded-[8px] border border-[var(--rule-strong)] px-4 text-[0.86rem] font-medium text-[var(--ink-soft)] hover:border-[var(--ink-muted)]"
        >
          <Icon name="arrow-left" size={15} />
          Về danh sách bài
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-[1120px] px-4 pt-6 pb-4 sm:px-6 sm:pt-8">
      <nav className="mb-5 flex flex-wrap items-center gap-2 text-[0.78rem] text-[var(--ink-muted)]" aria-label="Đường dẫn">
        <Link to="/" className="hover:text-[var(--ink)]">Trang chủ</Link>
        <span aria-hidden="true">/</span>
        <Link to={`/chuong/${chapter.id}`} className="hover:text-[var(--ink)]">
          Chương {chapter.order}
        </Link>
        <span aria-hidden="true">/</span>
        <span className="text-[var(--ink-soft)]">Bài {index + 1}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-[212px_minmax(0,1fr)] lg:gap-12">
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <p className="mb-2 text-[0.72rem] font-semibold tracking-wide text-[var(--ink-muted)]">
              Chương {chapter.order} · {chapter.lessons.length} bài
            </p>
            <ol className="relative border-l border-[var(--rule)]">
              {chapter.lessons.map((l, i) => {
                const isActive = l.id === meta.id
                const done = progress.completed.includes(`${chapter.id}/${l.id}`)
                return (
                  <li key={l.id}>
                    <Link
                      to={`/chuong/${chapter.id}/bai/${l.id}`}
                      aria-current={isActive ? 'page' : undefined}
                      className={`relative -ml-px flex gap-2.5 border-l-2 py-2 pl-3 pr-1 text-[0.82rem] leading-snug transition-colors ${
                        isActive
                          ? 'border-[var(--blue)] bg-[var(--blue-soft)] font-medium text-[var(--blue-deep)]'
                          : 'border-transparent text-[var(--ink-muted)] hover:border-[var(--rule-strong)] hover:text-[var(--ink)]'
                      }`}
                    >
                      <span className="num shrink-0 text-[0.7rem] text-[var(--ink-faint)]">{String(i + 1).padStart(2, '0')}</span>
                      <span className="min-w-0 flex-1">{l.title}</span>
                      {done && <Icon name="check" size={12} className="mt-0.5 shrink-0 text-[var(--green)]" />}
                    </Link>
                  </li>
                )
              })}
            </ol>

            <button
              type="button"
              onClick={() => toggleComplete(key)}
              className={`mt-5 flex w-full items-center justify-center gap-2 rounded-[7px] border px-3 py-2 text-[0.78rem] font-medium transition-colors ${
                complete
                  ? 'border-[var(--green)] bg-[var(--green-soft)] text-[var(--green)]'
                  : 'border-[var(--rule-strong)] text-[var(--ink-soft)] hover:border-[var(--blue)] hover:text-[var(--blue-deep)]'
              }`}
            >
              <Icon name="check" size={14} />
              {complete ? 'Đã hoàn thành' : 'Đánh dấu đã học'}
            </button>

            <Link
              to={`/chuong/${chapter.id}`}
              className="mt-3 flex items-center gap-1.5 text-[0.76rem] text-[var(--ink-muted)] hover:text-[var(--ink)]"
            >
              <Icon name="arrow-left" size={13} />
              Danh sách bài
            </Link>
          </div>
        </aside>

        <main className="min-w-0">
          <header>
            <p className="eyebrow">
              Chương {chapter.order} · Bài {index + 1}
            </p>
            <h1 className="display mt-2 text-[1.65rem] leading-[1.15] text-[var(--ink)] sm:text-[2.05rem]">
              {meta.title}
            </h1>
            <p className="mt-3 max-w-[62ch] font-[var(--font-read)] text-[0.97rem] leading-relaxed text-[var(--ink-muted)]">
              {meta.summary || lesson.summary}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[0.75rem] text-[var(--ink-faint)]">
              <span className="flex items-center gap-1.5">
                <Icon name="clock" size={13} />
                {meta.minutes} phút
              </span>
              <span>{lesson.quiz.length} câu trắc nghiệm</span>
              <span>{lesson.trueFalse.length} câu đúng/sai</span>
              <span>{lesson.shortAnswer.length} câu trả lời ngắn</span>
            </div>
          </header>

          <div className="sticky top-15 z-30 -mx-4 mt-6 bg-[var(--paper)] px-4 pt-1 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0">
            <Tabs
              tabs={tabs}
              active={active}
              onChange={id => {
                const nextParams = new URLSearchParams(params)
                if (id === 'ly-thuyet') nextParams.delete('tab')
                else nextParams.set('tab', id)
                setParams(nextParams, { replace: true })
              }}
            />
          </div>

          <div
            id={`panel-${active}`}
            role="tabpanel"
            aria-labelledby={`tab-${active}`}
            className="panel-enter pt-6"
            key={active}
          >
            {active === 'ly-thuyet' && (
              <div className="space-y-8">
                {lesson.theory.map((section, i) => (
                  <TheoryBlock key={i} section={section} index={i} />
                ))}
              </div>
            )}

            {active === 'vi-du' && (
              <div className="space-y-4">
                {lesson.examples.map((example, i) => (
                  <ExampleCard key={example.id} example={example} defaultOpen={i === 0} />
                ))}
              </div>
            )}

            {active === 'bai-tap' && (
              <div className="space-y-10">
                <section>
                  <h2 className="mb-4 flex items-baseline gap-2 font-[var(--font-display)] text-[1.1rem] font-semibold text-[var(--ink)]">
                    Bài tập tự luyện
                    <span className="num text-[0.76rem] font-normal text-[var(--ink-faint)]">
                      {lesson.exercises.length} bài
                    </span>
                  </h2>
                  <ExerciseList exercises={lesson.exercises} />
                </section>

                <section>
                  <h2 className="mb-1 font-[var(--font-display)] text-[1.1rem] font-semibold text-[var(--ink)]">
                    Câu hỏi Đúng / Sai
                  </h2>
                  <p className="mb-4 text-[0.8rem] text-[var(--ink-muted)]">
                    Với mỗi ý, chọn Đúng hoặc Sai rồi bấm Kiểm tra.
                  </p>
                  <TrueFalseSection questions={lesson.trueFalse} />
                </section>

                <section>
                  <h2 className="mb-1 font-[var(--font-display)] text-[1.1rem] font-semibold text-[var(--ink)]">
                    Câu hỏi trả lời ngắn
                  </h2>
                  <p className="mb-4 text-[0.8rem] text-[var(--ink-muted)]">
                    Nhập đáp án đúng dạng số hoặc biểu thức ngắn.
                  </p>
                  <ShortAnswerSection questions={lesson.shortAnswer} />
                </section>
              </div>
            )}

            {active === 'trac-nghiem' && (
              <div>
                <p className="mb-4 text-[0.82rem] text-[var(--ink-muted)]">
                  Chọn một phương án cho mỗi câu, bấm Kiểm tra để xem lời giải.
                </p>
                <QuizSection
                  questions={lesson.quiz}
                  onComplete={(correct, total) => saveScore(`${key}/quiz`, correct, total)}
                />
              </div>
            )}

            {active === 'dap-an' && <AnswersPanel lesson={lesson} />}
          </div>

          <div className="mt-8 flex flex-wrap gap-3 lg:hidden">
            <button
              type="button"
              onClick={() => toggleComplete(key)}
              className={`flex items-center gap-2 rounded-[7px] border px-3.5 py-2 text-[0.8rem] font-medium ${
                complete
                  ? 'border-[var(--green)] bg-[var(--green-soft)] text-[var(--green)]'
                  : 'border-[var(--rule-strong)] text-[var(--ink-soft)]'
              }`}
            >
              <Icon name="check" size={14} />
              {complete ? 'Đã hoàn thành' : 'Đánh dấu đã học'}
            </button>
            <Link
              to={`/chuong/${chapter.id}`}
              className="flex items-center gap-2 rounded-[7px] border border-[var(--rule)] px-3.5 py-2 text-[0.8rem] font-medium text-[var(--ink-muted)]"
            >
              <Icon name="book" size={14} />
              Danh sách bài
            </Link>
          </div>

          <LessonNav chapter={chapter} prev={prev} next={next} />
        </main>
      </div>
    </div>
  )
}

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { chapters } from '../data/chapters'
import { useProgress } from '../lib/progress'
import { useTitle } from '../lib/useTitle'
import { Icon } from '../components/ui/Icon'

function HeroGraph() {
  const f = (x: number) => (x * x * x) / 3 - x
  const x0 = -2.45
  const x1 = 2.45
  const y0 = -2.6
  const y1 = 2.6
  const W = 420
  const H = 300
  const pad = { l: 34, r: 18, t: 18, b: 30 }

  const sx = (x: number) => pad.l + ((x - x0) / (x1 - x0)) * (W - pad.l - pad.r)
  const sy = (y: number) => pad.t + ((y1 - y) / (y1 - y0)) * (H - pad.t - pad.b)

  const points: string[] = []
  for (let i = 0; i <= 220; i++) {
    const x = x0 + ((x1 - x0) * i) / 220
    points.push(`${i === 0 ? 'M' : 'L'}${sx(x).toFixed(1)},${sy(f(x)).toFixed(1)}`)
  }

  return (
    <div className="overflow-hidden rounded-[14px] border border-[var(--rule)] bg-[var(--surface)]">
      <div className="flex items-center justify-between border-b border-[var(--rule)] px-3.5 py-2">
        <span className="reading text-[0.78rem] italic text-[var(--ink-muted)]">y = x³/3 − x</span>
        <span className="flex items-center gap-1.5 text-[0.68rem] text-[var(--ink-faint)]">
          <span className="inline-block h-[2px] w-4 rounded-full bg-[var(--blue)]" />
          đồ thị
        </span>
      </div>

      <div className="graph-paper">
        <svg viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full" role="img" aria-label="Đồ thị hàm số bậc ba có hai điểm cực trị">
          <defs>
            <clipPath id="hero-plot">
              <rect x={pad.l} y={pad.t} width={W - pad.l - pad.r} height={H - pad.t - pad.b} />
            </clipPath>
          </defs>
          {[-2, -1, 1, 2].map(x => (
            <line key={`gx${x}`} x1={sx(x)} x2={sx(x)} y1={pad.t} y2={H - pad.b} stroke="var(--rule)" strokeWidth="1" opacity="0.55" />
          ))}
          {[-2, -1, 1, 2].map(y => (
            <line key={`gy${y}`} x1={pad.l} x2={W - pad.r} y1={sy(y)} y2={sy(y)} stroke="var(--rule)" strokeWidth="1" opacity="0.55" />
          ))}

          <line x1={pad.l} x2={W - pad.r} y1={sy(0)} y2={sy(0)} stroke="var(--ink-faint)" strokeWidth="1.2" />
          <line x1={sx(0)} x2={sx(0)} y1={pad.t} y2={H - pad.b} stroke="var(--ink-faint)" strokeWidth="1.2" />
          <text x={W - pad.r + 1} y={sy(0) - 5} fontSize="11" fill="var(--ink-muted)" fontStyle="italic" fontFamily="var(--font-read)">x</text>
          <text x={sx(0) + 5} y={pad.t + 6} fontSize="11" fill="var(--ink-muted)" fontStyle="italic" fontFamily="var(--font-read)">y</text>

          <path
            d={points.join(' ')}
            fill="none"
            stroke="var(--blue)"
            strokeWidth="2.3"
            strokeLinecap="round"
            clipPath="url(#hero-plot)"
            className="hero-curve"
            style={{ ['--dash' as string]: '1100' }}
          />

          <g className="hero-dot">
            <circle cx={sx(-1)} cy={sy(f(-1))} r="3.6" fill="var(--amber)" stroke="var(--surface)" strokeWidth="1.6" />
            <circle cx={sx(1)} cy={sy(f(1))} r="3.6" fill="var(--amber)" stroke="var(--surface)" strokeWidth="1.6" />
            <text x={sx(-1) - 30} y={sy(f(-1)) - 8} fontSize="10.5" fill="var(--ink-soft)" fontFamily="var(--font-read)">−1</text>
            <text x={sx(1) + 7} y={sy(f(1)) + 16} fontSize="10.5" fill="var(--ink-soft)" fontFamily="var(--font-read)">1</text>
          </g>
        </svg>
      </div>

      <div className="flex items-stretch border-t border-[var(--rule)] text-[0.7rem]">
        <div className="flex w-16 shrink-0 flex-col justify-center gap-0.5 border-r border-[var(--rule)] px-3 py-2">
          <span className="reading italic text-[var(--ink-muted)]">f′(x)</span>
        </div>
        <div className="grid flex-1 grid-cols-3 text-center font-mono">
          <span className="border-r border-[var(--rule)] py-2 text-[var(--green)]">+</span>
          <span className="border-r border-[var(--rule)] py-2 text-[var(--red)]">−</span>
          <span className="py-2 text-[var(--green)]">+</span>
        </div>
      </div>
    </div>
  )
}

function ChapterTile({ chapter }: { chapter: (typeof chapters)[number] }) {
  const { progress } = useProgress()
  const total = chapter.lessons.length
  const readyCount = chapter.lessons.filter(l => l.ready).length
  const done = chapter.lessons.filter(l => progress.completed.includes(`${chapter.id}/${l.id}`)).length
  const pct = total ? (done / total) * 100 : 0

  const body = (
    <>
      <div className="flex items-start justify-between gap-3">
        <span
          className={`grid h-9 w-9 place-items-center rounded-[8px] border ${
            chapter.ready
              ? 'border-[var(--blue-line)] bg-[var(--blue-soft)] text-[var(--blue-deep)]'
              : 'border-[var(--rule)] bg-[var(--surface-2)] text-[var(--ink-faint)]'
          }`}
        >
          <Icon name={chapter.icon} size={19} />
        </span>
        <span className="num text-[0.72rem] font-medium text-[var(--ink-faint)]">
          {String(chapter.order).padStart(2, '0')}
        </span>
      </div>

      <h3 className="mt-3 font-[var(--font-display)] text-[0.98rem] font-semibold leading-snug text-[var(--ink)]">
        {chapter.title}
      </h3>
      <p className="mt-1.5 text-[0.82rem] leading-relaxed text-[var(--ink-muted)]">{chapter.description}</p>

      <div className="mt-3.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.72rem] text-[var(--ink-faint)]">
        <span className="font-medium text-[var(--ink-soft)]">Lớp {chapter.grades.join(' · ')}</span>
        <span aria-hidden="true">·</span>
        <span>{total} bài</span>
        {chapter.ready ? (
          <>
            <span aria-hidden="true">·</span>
            <span className="text-[var(--blue-deep)]">
              {readyCount < total ? `đã mở ${readyCount}/${total} bài` : done > 0 ? `đã học ${done}/${total}` : 'sẵn sàng'}
            </span>
          </>
        ) : (
          <>
            <span aria-hidden="true">·</span>
            <span>đang biên soạn</span>
          </>
        )}
      </div>

      {chapter.ready && done > 0 && (
        <div className="mt-2 h-1 overflow-hidden rounded-full bg-[var(--surface-2)]" aria-hidden="true">
          <div className="h-full rounded-full bg-[var(--blue)] transition-[width] duration-500" style={{ width: `${pct}%` }} />
        </div>
      )}
    </>
  )

  if (!chapter.ready) {
    return (
      <div className="rounded-[var(--radius)] border border-dashed border-[var(--rule-strong)] bg-[color-mix(in_srgb,var(--surface)_60%,transparent)] p-4 opacity-80">
        {body}
      </div>
    )
  }

  return (
    <Link
      to={`/chuong/${chapter.id}`}
      className="group relative rounded-[var(--radius)] border border-[var(--rule)] bg-[var(--surface)] p-4 transition-colors hover:border-[var(--blue)] focus-visible:border-[var(--blue)]"
    >
      {body}
      <span className="absolute bottom-3 right-4 text-[var(--ink-faint)] transition-all group-hover:translate-x-0.5 group-hover:text-[var(--blue)]">
        <Icon name="arrow-right" size={16} />
      </span>
    </Link>
  )
}

const gradeFilters = [
  { value: 0 as const, label: 'Tất cả' },
  { value: 10 as const, label: 'Lớp 10' },
  { value: 11 as const, label: 'Lớp 11' },
  { value: 12 as const, label: 'Lớp 12' },
]

export function Home() {
  const { progress } = useProgress()
  useTitle()
  const [grade, setGrade] = useState<0 | 10 | 11 | 12>(0)
  const visibleChapters = grade === 0 ? chapters : chapters.filter(ch => ch.grades.includes(grade))
  const allLessons = chapters.flatMap(c => c.lessons.filter(l => l.ready).map(l => `${c.id}/${l.id}`))
  const done = allLessons.filter(k => progress.completed.includes(k)).length
  const pct = allLessons.length ? Math.round((done / allLessons.length) * 100) : 0

  return (
    <>
      <section className="relative overflow-hidden border-b border-[var(--rule)]">
        <div className="graph-paper graph-paper-fade pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-[1180px] gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14 lg:py-20">
          <div className="hero-copy">
            <p className="eyebrow mb-3 flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--amber)]" />
              Ôn thi tốt nghiệp THPTQG 2026–2027
            </p>
            <h1 className="display text-[2.15rem] text-[var(--ink)] sm:text-[2.9rem] lg:text-[3.35rem]">
              Lý thuyết Toán,
              <br />
              viết lại cho dễ học.
            </h1>
            <p className="mt-5 max-w-[48ch] font-[var(--font-read)] text-[1.02rem] leading-[1.75] text-[var(--ink-muted)] sm:text-[1.07rem]">
              Bám sát bộ tài liệu <span className="text-[var(--ink-soft)]">HV12H — Tóm tắt lý thuyết ôn thi TN THPT</span>,
              phủ đủ <span className="text-[var(--ink-soft)]">3 khối 10–11–12</span>. Mỗi bài gồm lý thuyết, ví dụ có lời giải,
              bài tập tự luyện và ba dạng câu hỏi thi.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                to="/chuong/chuong-1"
                className="inline-flex h-11 items-center gap-2 rounded-[8px] bg-[var(--primary)] px-4 text-[0.9rem] font-medium text-[var(--on-primary)] transition-colors hover:bg-[var(--primary-hover)]"
              >
                Vào Chương 1
                <Icon name="arrow-right" size={17} />
              </Link>
              <a
                href="#muc-luc"
                className="inline-flex h-11 items-center rounded-[8px] border border-[var(--rule-strong)] px-4 text-[0.9rem] font-medium text-[var(--ink-soft)] transition-colors hover:border-[var(--ink-muted)] hover:text-[var(--ink)]"
              >
                Xem mục lục
              </a>
            </div>

            <dl className="mt-8 flex flex-wrap items-baseline gap-x-7 gap-y-3 border-t border-[var(--rule)] pt-5 text-[0.8rem]">
              <div className="flex items-baseline gap-2">
                <dt className="text-[var(--ink-muted)]">Chương</dt>
                <dd className="num font-semibold text-[var(--ink)]">12</dd>
              </div>
              <div className="flex items-baseline gap-2">
                <dt className="text-[var(--ink-muted)]">Bài đã mở</dt>
                <dd className="num font-semibold text-[var(--ink)]">{String(allLessons.length).padStart(2, '0')}</dd>
              </div>
              <div className="flex items-baseline gap-2">
                <dt className="text-[var(--ink-muted)]">Tiến độ của bạn</dt>
                <dd className="num font-semibold text-[var(--ink)]">{pct}%</dd>
              </div>
            </dl>
          </div>

          <div className="hero-copy [animation-delay:120ms]">
            <HeroGraph />
          </div>
        </div>
      </section>

      <section id="muc-luc" className="mx-auto max-w-[1180px] scroll-mt-20 px-4 py-12 sm:px-6 sm:py-16">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="display text-[1.5rem] text-[var(--ink)] sm:text-[1.75rem]">Mục lục 12 chương</h2>
            <p className="mt-1.5 max-w-[64ch] text-[0.86rem] leading-relaxed text-[var(--ink-muted)]">
              Theo đúng mục lục tài liệu HV12H, phủ đủ 3 khối 10–11–12. Nội dung được mở lần lượt từ nguồn;
              chương nào chưa biên soạn xong sẽ hiển thị “đang biên soạn”.
            </p>
          </div>
          <p className="text-[0.76rem] text-[var(--ink-faint)]">
            {done}/{allLessons.length} bài đã hoàn thành
          </p>
        </div>

        <div className="mb-5 flex flex-wrap items-center gap-1.5" role="group" aria-label="Lọc chương theo khối lớp">
          {gradeFilters.map(f => (
            <button
              key={f.value}
              type="button"
              onClick={() => setGrade(f.value)}
              aria-pressed={grade === f.value}
              className={`rounded-full border px-3 py-1.5 text-[0.76rem] font-medium transition-colors ${
                grade === f.value
                  ? 'border-[var(--primary)] bg-[var(--primary)] text-[var(--on-primary)]'
                  : 'border-[var(--rule-strong)] text-[var(--ink-muted)] hover:border-[var(--ink-muted)] hover:text-[var(--ink)]'
              }`}
            >
              {f.label}
            </button>
          ))}
          <span className="ml-1 text-[0.72rem] text-[var(--ink-faint)]">
            {visibleChapters.length} chương
          </span>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {visibleChapters.map(ch => (
            <ChapterTile key={ch.id} chapter={ch} />
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 rounded-[var(--radius)] border border-[var(--rule)] bg-[var(--surface)] px-4 py-4 sm:flex-row sm:items-center sm:gap-6 sm:px-5">
          <p className="text-[0.8rem] font-medium text-[var(--ink)]">Mỗi bài học có năm phần</p>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.8rem] text-[var(--ink-muted)]">
            {['Lý thuyết', 'Ví dụ', 'Bài tập', 'Trắc nghiệm', 'Đáp án'].map(item => (
              <li key={item} className="flex items-center gap-1.5">
                <Icon name="check" size={13} className="text-[var(--blue)]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}

import { useId, useMemo } from 'react'
import type { GraphSpec } from '../../data/types'

const W = 360
const H = 260
const PAD = { top: 16, right: 14, bottom: 26, left: 30 }

/**
 * Đồ thị hàm số vẽ bằng SVG từ chính biểu thức trong bài. Trục, lưới ô vuông,
 * tiệm cận và điểm cực trị đều suy ra từ spec — không phải ảnh chụp.
 */
export function GraphFigure({ spec, animate = false }: { spec: GraphSpec; animate?: boolean }) {
  const { domain, yRange, fn, va = [], ha, marks = [] } = spec
  const [x0, x1] = domain
  const [y0, y1] = yRange
  const clipId = `plot-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`

  const sx = (x: number) => PAD.left + ((x - x0) / (x1 - x0)) * (W - PAD.left - PAD.right)
  const sy = (y: number) => PAD.top + ((y1 - y) / (y1 - y0)) * (H - PAD.top - PAD.bottom)

  const { curve, gridX, gridY } = useMemo(() => {
    const steps = 320
    const parts: string[] = []
    let open = false
    const limit = (y1 - y0) * 1.2

    for (let i = 0; i <= steps; i++) {
      const x = x0 + ((x1 - x0) * i) / steps
      const nearVa = va.some(v => Math.abs(x - v) < (x1 - x0) / steps / 2)
      const y = fn(x)
      const visible = Number.isFinite(y) && Math.abs(y) <= limit && !nearVa
      if (!visible) {
        open = false
        continue
      }
      const cmd = open ? 'L' : 'M'
      parts.push(`${cmd}${sx(x).toFixed(2)},${sy(y).toFixed(2)}`)
      open = true
    }

    const gx: number[] = []
    for (let x = Math.ceil(x0); x <= x1; x++) {
      if (x !== 0 && gx.length < 24) gx.push(x)
    }
    const gy: number[] = []
    for (let y = Math.ceil(y0); y <= y1; y++) {
      if (y !== 0 && gy.length < 24) gy.push(y)
    }

    return { curve: parts.join(' '), gridX: gx, gridY: gy }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [spec])

  const axisY = y0 <= 0 && y1 >= 0 ? sy(0) : sy(y0)
  const axisX = x0 <= 0 && x1 >= 0 ? sx(0) : sx(x0)

  return (
    <figure className="mx-auto my-5 w-full max-w-[520px]">
      <div className="overflow-hidden rounded-[var(--radius)] border border-[var(--rule)] bg-[var(--surface)]">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="block h-auto w-full"
          role="img"
          aria-label={spec.caption ?? 'Đồ thị hàm số'}
        >
          <defs>
            <clipPath id={clipId}>
              <rect
                x={PAD.left}
                y={PAD.top}
                width={W - PAD.left - PAD.right}
                height={H - PAD.top - PAD.bottom}
              />
            </clipPath>
          </defs>

          <g clipPath={`url(#${clipId})`}>
          {gridX.map(x => (
            <line
              key={`gx${x}`}
              x1={sx(x)}
              x2={sx(x)}
              y1={PAD.top}
              y2={H - PAD.bottom}
              stroke="var(--rule)"
              strokeWidth="1"
              opacity="0.55"
            />
          ))}
          {gridY.map(y => (
            <line
              key={`gy${y}`}
              x1={PAD.left}
              x2={W - PAD.right}
              y1={sy(y)}
              y2={sy(y)}
              stroke="var(--rule)"
              strokeWidth="1"
              opacity="0.55"
            />
          ))}

          {va.map(v => (
            <line
              key={`va${v}`}
              x1={sx(v)}
              x2={sx(v)}
              y1={PAD.top}
              y2={H - PAD.bottom}
              stroke="var(--amber)"
              strokeWidth="1.2"
              strokeDasharray="4 4"
              opacity="0.8"
            />
          ))}
          {typeof ha === 'number' && (
            <line
              x1={PAD.left}
              x2={W - PAD.right}
              y1={sy(ha)}
              y2={sy(ha)}
              stroke="var(--amber)"
              strokeWidth="1.2"
              strokeDasharray="4 4"
              opacity="0.8"
            />
          )}

          <line x1={PAD.left} x2={W - PAD.right} y1={axisY} y2={axisY} stroke="var(--ink-faint)" strokeWidth="1.2" />
          <line x1={axisX} x2={axisX} y1={PAD.top} y2={H - PAD.bottom} stroke="var(--ink-faint)" strokeWidth="1.2" />
          </g>

          <text x={W - PAD.right + 2} y={axisY - 4} fontSize="11" fill="var(--ink-muted)" fontFamily="var(--font-read)" fontStyle="italic">
            x
          </text>
          <text x={axisX + 4} y={PAD.top + 4} fontSize="11" fill="var(--ink-muted)" fontFamily="var(--font-read)" fontStyle="italic">
            y
          </text>
          <text x={axisX - 9} y={axisY + 13} fontSize="10" fill="var(--ink-faint)" fontFamily="var(--font-read)">
            O
          </text>

          <g clipPath={`url(#${clipId})`}>
          <path
            d={curve}
            fill="none"
            stroke="var(--blue)"
            strokeWidth="2.1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={animate ? 'hero-curve' : undefined}
            style={animate ? { ['--dash' as string]: '1400' } : undefined}
          />
          </g>

          {marks.map(m => {
            const cy = fn(m.x)
            if (!Number.isFinite(cy)) return null
            const eps = (x1 - x0) / 500
            const isMin = fn(m.x + eps) > cy && fn(m.x - eps) > cy
            return (
              <g key={`m${m.x}`} className={animate ? 'hero-dot' : undefined}>
                <circle cx={sx(m.x)} cy={sy(cy)} r="3.4" fill="var(--amber)" stroke="var(--surface)" strokeWidth="1.6" />
                {m.label && (
                  <text
                    x={sx(m.x) + 7}
                    y={isMin ? sy(cy) + 16 : sy(cy) - 8}
                    fontSize="10.5"
                    fill="var(--ink-soft)"
                    fontFamily="var(--font-read)"
                  >
                    {m.label}
                  </text>
                )}
              </g>
            )
          })}
        </svg>
      </div>
      {spec.caption && (
        <figcaption className="mt-2 text-center text-[0.8rem] leading-relaxed text-[var(--ink-muted)]">
          {spec.caption}
        </figcaption>
      )}
    </figure>
  )
}

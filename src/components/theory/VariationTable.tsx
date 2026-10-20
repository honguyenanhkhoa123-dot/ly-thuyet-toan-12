import { Fragment } from 'react'
import type { VariationTableSpec } from '../../data/types'

/**
 * Bảng biến thiên dạng bảng HTML (không dùng ảnh) để luôn vừa khung trên điện thoại.
 * Hàng x: các mốc; hàng y': dấu trên từng khoảng và 0 tại các mốc tới hạn;
 * hàng y: giá trị tại các mốc.
 */
export function VariationTable({ spec }: { spec: VariationTableSpec }) {
  const { boundaries, signs, values } = spec
  const n = boundaries.length

  const cell = 'px-1 py-1.5 align-middle'
  const lineRow = 'border-b border-[var(--rule-strong)]'
  const label =
    'w-8 border-r border-[var(--rule-strong)] pr-2 text-right align-middle font-normal italic sm:w-9'

  return (
    <div className="mt-3 overflow-x-auto">
      <table className="w-full min-w-[280px] border-collapse text-center font-[var(--font-read)] text-[0.9rem] tabular-nums text-[var(--ink-soft)] sm:text-[0.95rem]">
        <tbody>
          <tr>
            <th scope="row" className={`${label} ${lineRow} py-1.5 text-[0.8rem] sm:text-[0.86rem]`}>
              x
            </th>
            {boundaries.map((b, i) => (
              <Fragment key={`x-${i}`}>
                <td className={`${cell} ${lineRow} whitespace-nowrap`}>{b}</td>
                {i < n - 1 && <td className={`${cell} ${lineRow}`} />}
              </Fragment>
            ))}
          </tr>

          <tr>
            <th scope="row" className={`${label} ${lineRow} py-1.5 text-[0.8rem] sm:text-[0.86rem]`}>
              <span>y</span>
              <span className="align-super text-[0.62em]">′</span>
            </th>
            {boundaries.map((_, i) => {
              const isInterior = i > 0 && i < n - 1
              const showZero = spec.zeros?.[i] ?? isInterior
              return (
                <Fragment key={`y-${i}`}>
                  <td className={`${cell} ${lineRow}`}>
                    {isInterior && showZero ? '0' : ''}
                  </td>
                  {i < n - 1 && <td className={`${cell} ${lineRow}`}>{signs[i] ?? ''}</td>}
                </Fragment>
              )
            })}
          </tr>

          <tr>
            <th scope="row" className={`${label} py-1.5`}>
              y
            </th>
            {boundaries.map((_, i) => (
              <Fragment key={`v-${i}`}>
                <td className={`${cell} whitespace-nowrap`}>{values[i] ?? ''}</td>
                {i < n - 1 && <td className={cell} />}
              </Fragment>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  )
}

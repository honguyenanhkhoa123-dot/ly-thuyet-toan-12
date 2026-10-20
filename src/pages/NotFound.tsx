import { Link } from 'react-router-dom'
import { useTitle } from '../lib/useTitle'

export function NotFound() {
  useTitle('Không tìm thấy trang')
  return (
    <div className="mx-auto flex max-w-[560px] flex-col items-start px-4 py-20 sm:px-6">
      <p className="eyebrow">404</p>
      <h1 className="display mt-2 text-[1.9rem] text-[var(--ink)]">Không tìm thấy trang này</h1>
      <p className="mt-3 font-[var(--font-read)] text-[0.98rem] leading-relaxed text-[var(--ink-muted)]">
        Đường dẫn có thể đã đổi hoặc bài học chưa được mở. Quay về mục lục để chọn chương khác.
      </p>
      <Link
        to="/"
        className="mt-6 inline-flex h-10 items-center rounded-[8px] bg-[var(--primary)] px-4 text-[0.88rem] font-medium text-[var(--on-primary)] transition-colors hover:bg-[var(--primary-hover)]"
      >
        Về trang chủ
      </Link>
    </div>
  )
}

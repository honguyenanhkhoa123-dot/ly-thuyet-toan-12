import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="mt-20 border-t border-[var(--rule)] bg-[var(--surface)]">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-3 px-4 py-8 text-[0.8rem] text-[var(--ink-muted)] sm:flex-row sm:items-baseline sm:justify-between sm:px-6">
        <p className="max-w-[60ch] leading-relaxed">
          Biên soạn theo <em className="not-italic text-[var(--ink-soft)]">HV12H — Tóm tắt lý thuyết ôn thi tốt nghiệp THPT 2026–2027</em>.
          Công thức được render bằng KaTeX, chọn và sao chép được.
        </p>
        <div className="flex items-center gap-4">
          <Link to="/chuong/chuong-1" className="hover:text-[var(--ink)]">
            Chương 1
          </Link>
          <span aria-hidden="true" className="text-[var(--rule-strong)]">/</span>
          <span>Toán thầy Nghĩa</span>
        </div>
      </div>
    </footer>
  )
}

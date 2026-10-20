import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { chapters } from '../../data/chapters'
import { useTheme } from '../../lib/theme'
import { Icon } from '../ui/Icon'

export function Header() {
  const [open, setOpen] = useState(false)
  const { isDark, toggle } = useTheme()
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--rule)] bg-[color-mix(in_srgb,var(--paper)_88%,transparent)] backdrop-blur-md">
      <div className="mx-auto flex h-15 max-w-[1180px] items-center gap-3 px-4 sm:px-6">
        <Link to="/" className="flex min-w-0 items-center gap-2.5" aria-label="Lý thuyết Toán 12 — trang chủ">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-[9px] bg-[var(--primary)] text-[var(--on-primary)]">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" aria-hidden="true">
              <path d="M5 19V5M5 19h14" />
              <path d="M7.5 16.4c2.6-6.4 4.3-1.2 6-5.7.9-2.4 2-3.5 3.7-3.9" stroke="#FBBF24" />
            </svg>
          </span>
          <span className="truncate font-[var(--font-display)] text-[0.98rem] font-semibold tracking-tight">
            Lý thuyết Toán 12
          </span>
          <span className="hidden rounded border border-[var(--rule)] px-1.5 py-0.5 font-mono text-[0.65rem] tracking-wider text-[var(--ink-muted)] sm:inline">
            HV12H
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-1 sm:flex" aria-label="Chính">
          <Link
            to="/"
            aria-current={location.pathname === '/' ? 'page' : undefined}
            className={`rounded-md px-3 py-2 text-[0.85rem] font-medium transition-colors hover:bg-[var(--surface-2)] hover:text-[var(--ink)] ${
              location.pathname === '/' ? 'text-[var(--ink)]' : 'text-[var(--ink-soft)]'
            }`}
          >
            Trang chủ
          </Link>
          <Link
            to="/chuong/chuong-1"
            aria-current={location.pathname.startsWith('/chuong') ? 'true' : undefined}
            className={`rounded-md px-3 py-2 text-[0.85rem] font-medium transition-colors hover:bg-[var(--surface-2)] hover:text-[var(--ink)] ${
              location.pathname.startsWith('/chuong') ? 'text-[var(--ink)]' : 'text-[var(--ink-soft)]'
            }`}
          >
            Chương 1
          </Link>
        </nav>

        <div className="ml-auto flex items-center gap-1 sm:ml-1">
          <button
            type="button"
            onClick={toggle}
            aria-label={isDark ? 'Chuyển sang giao diện sáng' : 'Chuyển sang giao diện tối'}
            className="grid h-9 w-9 place-items-center rounded-md text-[var(--ink-muted)] transition-colors hover:bg-[var(--surface-2)] hover:text-[var(--ink)]"
          >
            <Icon name={isDark ? 'sun' : 'moon'} size={19} />
          </button>
          <button
            type="button"
            onClick={() => setOpen(v => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Đóng mục lục' : 'Mở mục lục'}
            className="grid h-9 w-9 place-items-center rounded-md text-[var(--ink-soft)] transition-colors hover:bg-[var(--surface-2)] sm:hidden"
          >
            <Icon name={open ? 'close' : 'menu'} size={20} />
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-nav" className="border-t border-[var(--rule)] bg-[var(--surface)] sm:hidden">
          <nav className="mx-auto max-w-[1180px] px-4 py-3" aria-label="Mục lục chương">
            <p className="mb-2 px-1 text-[0.72rem] font-semibold tracking-wide text-[var(--ink-muted)]">
              Mục lục
            </p>
            <ul className="space-y-0.5">
              {chapters.map(ch => (
                <li key={ch.id}>
                  <Link
                    to={`/chuong/${ch.id}`}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 rounded-md px-2 py-2.5 text-[0.9rem] text-[var(--ink-soft)] hover:bg-[var(--surface-2)]"
                  >
                    <span className="num w-5 shrink-0 text-[0.75rem] text-[var(--ink-faint)]">
                      {String(ch.order).padStart(2, '0')}
                    </span>
                    <span className="min-w-0 flex-1 truncate">{ch.shortTitle}</span>
                    {!ch.ready && (
                      <span className="shrink-0 text-[0.65rem] text-[var(--ink-faint)]">sắp có</span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}

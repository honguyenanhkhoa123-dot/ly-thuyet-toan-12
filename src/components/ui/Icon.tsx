import type { ChapterIcon } from '../../data/types'

type Name =
  | ChapterIcon
  | 'arrow-right'
  | 'arrow-left'
  | 'check'
  | 'close'
  | 'menu'
  | 'sun'
  | 'moon'
  | 'book'
  | 'spark'
  | 'clock'
  | 'chevron'
  | 'target'
  | 'pen'

const paths: Record<Name, React.ReactNode> = {
  curve: (
    <>
      <path d="M4 4v16h16" />
      <path d="M6.5 18.5c2.6-6.6 4.4-1.2 6.2-6.1.9-2.4 2.1-3.9 4.4-4.6" />
      <circle cx="16.4" cy="7.9" r="1.1" fill="currentColor" stroke="none" />
    </>
  ),
  vector: (
    <>
      <path d="M5 18.5 18 6" />
      <path d="M12.6 6H18v5.4" />
      <path d="M5 18.5V9.5M5 18.5h9" opacity=".45" />
    </>
  ),
  scatter: (
    <>
      <path d="M4 4v16h16" />
      <circle cx="8.5" cy="15" r="1.15" fill="currentColor" stroke="none" />
      <circle cx="12" cy="11.5" r="1.15" fill="currentColor" stroke="none" />
      <circle cx="15" cy="13.5" r="1.15" fill="currentColor" stroke="none" />
      <circle cx="18" cy="8" r="1.15" fill="currentColor" stroke="none" />
      <path d="M7 16.5 19 7" opacity=".5" />
    </>
  ),
  integral: (
    <>
      <path d="M14.5 4.2c-1.9 0-2.6 1.2-2.6 3.1v9.4c0 1.9-.8 3.1-2.7 3.1" />
      <path d="M8.4 9.2h5.2" />
    </>
  ),
  plane: (
    <>
      <path d="M3.5 8.5 12 4l8.5 4.5L12 13 3.5 8.5Z" />
      <path d="M12 13v7.2" />
      <path d="M8.6 19.4 12 20.5l3.4-1.1" opacity=".5" />
      <path d="m16.8 6.5 3.4 5.6" opacity=".5" />
    </>
  ),
  dice: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="3.2" />
      <circle cx="9" cy="9" r="1.15" fill="currentColor" stroke="none" />
      <circle cx="15" cy="9" r="1.15" fill="currentColor" stroke="none" />
      <circle cx="12" cy="12" r="1.15" fill="currentColor" stroke="none" />
      <circle cx="9" cy="15" r="1.15" fill="currentColor" stroke="none" />
      <circle cx="15" cy="15" r="1.15" fill="currentColor" stroke="none" />
    </>
  ),
  'arrow-right': <path d="M4.5 12h15m-5.5-5.5L19.5 12 14 17.5" />,
  'arrow-left': <path d="M19.5 12h-15M10 6.5 4.5 12 10 17.5" />,
  check: <path d="m5 12.5 4.4 4.4L19 7.2" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  menu: <path d="M4 7h16M4 12h16M4 17h11" />,
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.8v2.1M12 19.1v2.1M4.5 4.5l1.5 1.5M18 18l1.5 1.5M2.8 12h2.1M19.1 12h2.1M4.5 19.5 6 18M18 6l1.5-1.5" />
    </>
  ),
  moon: <path d="M20 14.2A8.2 8.2 0 0 1 9.8 4a8.4 8.4 0 1 0 10.2 10.2Z" />,
  book: (
    <>
      <path d="M5 5.5A1.5 1.5 0 0 1 6.5 4H19v15.5H6.5A1.5 1.5 0 0 0 5 21V5.5Z" />
      <path d="M5 19.5A1.5 1.5 0 0 1 6.5 18H19" opacity=".5" />
    </>
  ),
  spark: <path d="M12 3.5c.7 4.4 2.6 6.3 7 7-4.4.7-6.3 2.6-7 7-.7-4.4-2.6-6.3-7-7 4.4-.7 6.3-2.6 7-7Z" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="8.2" />
      <path d="M12 7.6V12l3.1 2" />
    </>
  ),
  chevron: <path d="m6.5 9.5 5.5 5.5 5.5-5.5" />,
  target: (
    <>
      <circle cx="12" cy="12" r="7.8" />
      <circle cx="12" cy="12" r="3.4" />
      <circle cx="12" cy="12" r=".9" fill="currentColor" stroke="none" />
    </>
  ),
  pen: (
    <>
      <path d="M4.5 19.5h3.2L19 8.2a2.1 2.1 0 0 0-3-3L4.5 16.3v3.2Z" />
      <path d="m14.8 6.4 3 3" />
    </>
  ),
}

export function Icon({
  name,
  size = 20,
  className = '',
  strokeWidth = 1.6,
}: {
  name: Name
  size?: number
  className?: string
  strokeWidth?: number
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

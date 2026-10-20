import { useEffect } from 'react'

const SUFFIX = 'Lý thuyết Toán 12 — Ôn thi THPT 2026–2027'

export function useTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} — ${SUFFIX}` : SUFFIX
  }, [title])
}

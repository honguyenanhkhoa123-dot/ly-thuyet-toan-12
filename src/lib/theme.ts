import { useSyncExternalStore } from 'react'

export type ThemeChoice = 'light' | 'dark' | 'system'

const KEY = 'hv12h:theme'
const listeners = new Set<() => void>()
let choice: ThemeChoice = 'system'
let dark = false

function resolve() {
  return (
    choice === 'dark' ||
    (choice === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)
  )
}

function apply() {
  dark = resolve()
  document.documentElement.classList.toggle('dark', dark)
  listeners.forEach(fn => fn())
}

function persist(next: ThemeChoice) {
  choice = next
  try {
    localStorage.setItem(KEY, next)
  } catch {
    /* chế độ riêng tư */
  }
  apply()
}

export function initTheme() {
  let stored: string | null = null
  try {
    stored = localStorage.getItem(KEY)
  } catch {
    /* ignore */
  }
  choice = stored === 'light' || stored === 'dark' ? stored : 'system'
  apply()
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (choice === 'system') apply()
  })
}

export function useTheme() {
  const isDark = useSyncExternalStore(
    fn => {
      listeners.add(fn)
      return () => listeners.delete(fn)
    },
    () => dark,
    () => false,
  )

  return {
    isDark,
    theme: choice,
    setTheme: persist,
    toggle: () => persist(resolve() ? 'light' : 'dark'),
  }
}

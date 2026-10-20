import { useSyncExternalStore } from 'react'

const KEY = 'hv12h:progress:v1'

export interface QuizScore {
  correct: number
  total: number
  at: number
}

export interface ProgressState {
  completed: string[]
  visited: string[]
  scores: Record<string, QuizScore>
}

const empty: ProgressState = { completed: [], visited: [], scores: {} }

let state: ProgressState = empty
let loaded = false
const listeners = new Set<() => void>()

function read(): ProgressState {
  if (typeof window === 'undefined') return empty
  try {
    const raw = window.localStorage.getItem(KEY)
    if (!raw) return empty
    const parsed = JSON.parse(raw) as Partial<ProgressState>
    return {
      completed: Array.isArray(parsed.completed) ? parsed.completed : [],
      visited: Array.isArray(parsed.visited) ? parsed.visited : [],
      scores: parsed.scores && typeof parsed.scores === 'object' ? parsed.scores : {},
    }
  } catch {
    return empty
  }
}

function write(next: ProgressState) {
  state = next
  if (typeof window !== 'undefined') {
    try {
      window.localStorage.setItem(KEY, JSON.stringify(next))
    } catch {
      /* chế độ riêng tư: bỏ qua */
    }
  }
  listeners.forEach(fn => fn())
}

function ensure() {
  if (!loaded) {
    state = read()
    loaded = true
  }
}

function subscribe(fn: () => void) {
  ensure()
  listeners.add(fn)
  return () => listeners.delete(fn)
}

function snapshot() {
  ensure()
  return state
}

export function useProgress() {
  const progress = useSyncExternalStore(subscribe, snapshot, () => empty)

  return {
    progress,
    isComplete: (key: string) => progress.completed.includes(key),
    isVisited: (key: string) => progress.visited.includes(key),
    toggleComplete(key: string) {
      const current = snapshot()
      const completed = current.completed.includes(key)
        ? current.completed.filter(k => k !== key)
        : [...current.completed, key]
      write({ ...current, completed })
    },
    markVisited(key: string) {
      const current = snapshot()
      if (current.visited.includes(key)) return
      write({ ...current, visited: [...current.visited, key] })
    },
    saveScore(key: string, correct: number, total: number) {
      const current = snapshot()
      write({ ...current, scores: { ...current.scores, [key]: { correct, total, at: Date.now() } } })
    },
  }
}

export function lessonKey(chapterId: string, lessonId: string) {
  return `${chapterId}/${lessonId}`
}

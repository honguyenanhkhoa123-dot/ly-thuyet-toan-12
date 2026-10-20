import { lazy, Suspense, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'

const ChapterPage = lazy(() => import('./pages/Chapter').then(m => ({ default: m.ChapterPage })))
const LessonPage = lazy(() => import('./pages/Lesson').then(m => ({ default: m.LessonPage })))

function RouteFallback() {
  return (
    <div className="mx-auto max-w-[900px] px-4 py-16 sm:px-6" aria-busy="true" aria-live="polite">
      <div className="h-3 w-24 animate-pulse rounded-full bg-[var(--surface-2)]" />
      <div className="mt-5 h-8 w-3/4 animate-pulse rounded-md bg-[var(--surface-2)]" />
      <div className="mt-4 h-3 w-1/2 animate-pulse rounded-full bg-[var(--surface-2)]" />
      <p className="sr-only">Đang tải nội dung…</p>
    </div>
  )
}

function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView({ block: 'start' })
        return
      }
    }
    window.scrollTo({ top: 0 })
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <a
        href="#noi-dung"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-[var(--primary)] focus:px-3 focus:py-2 focus:text-sm focus:text-white"
      >
        Bỏ qua điều hướng
      </a>
      <Header />
      <div id="noi-dung">
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chuong/:chapterId" element={<ChapterPage />} />
            <Route path="/chuong/:chapterId/bai/:lessonId" element={<LessonPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </>
  )
}

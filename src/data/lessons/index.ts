import type { Lesson } from '../types'
import { bai1 } from './bai1'
import { bai2 } from './bai2'
import { bai3 } from './bai3'
import { bai4 } from './bai4'

const all: Lesson[] = [bai1, bai2, bai3, bai4]

const byKey = new Map(all.map(lesson => [`${lesson.chapterId}/${lesson.id}`, lesson]))

export function getLesson(chapterId: string | undefined, lessonId: string | undefined) {
  if (!chapterId || !lessonId) return undefined
  return byKey.get(`${chapterId}/${lessonId}`)
}

export const lessons = all

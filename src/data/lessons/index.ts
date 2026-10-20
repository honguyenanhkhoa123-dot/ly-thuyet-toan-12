import type { Lesson } from '../types'
import { bai1 } from './bai1'
import { bai2 } from './bai2'
import { bai3 } from './bai3'
import { bai4 } from './bai4'
import { chuong1Bai1 } from './chuong1-bai1'
import { chuong1Bai2 } from './chuong1-bai2'
import { chuong3Bai1 } from './chuong3-bai1'
import { chuong3Bai2 } from './chuong3-bai2'
import { chuong5DaoHam } from './chuong5-dao-ham'
import { chuong9Bai1 } from './chuong9-bai1'
import { chuong11Bai1 } from './chuong11-bai1'
import { chuong11Bai2 } from './chuong11-bai2'

const all: Lesson[] = [
  chuong1Bai1,
  chuong1Bai2,
  chuong3Bai1,
  chuong3Bai2,
  chuong5DaoHam,
  chuong9Bai1,
  chuong11Bai1,
  chuong11Bai2,
  bai1,
  bai2,
  bai3,
  bai4,
]

const byKey = new Map(all.map(lesson => [`${lesson.chapterId}/${lesson.id}`, lesson]))

export function getLesson(chapterId: string | undefined, lessonId: string | undefined) {
  if (!chapterId || !lessonId) return undefined
  return byKey.get(`${chapterId}/${lessonId}`)
}

export const lessons = all

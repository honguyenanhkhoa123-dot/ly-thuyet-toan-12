import type { Lesson } from '../types'
import { bai1 } from './bai1'
import { bai2 } from './bai2'
import { bai3 } from './bai3'
import { bai4 } from './bai4'
import { chuong1Bai1 } from './chuong1-bai1'
import { chuong1Bai2 } from './chuong1-bai2'
import { chuong2Bai1 } from './chuong2-bai1'
import { chuong2Bai2 } from './chuong2-bai2'
import { chuong2Bai3 } from './chuong2-bai3'
import { chuong2Bai4 } from './chuong2-bai4'
import { chuong3Bai1 } from './chuong3-bai1'
import { chuong3Bai2 } from './chuong3-bai2'
import { chuong4Bai1 } from './chuong4-bai1'
import { chuong4Bai2 } from './chuong4-bai2'
import { chuong4Bai3 } from './chuong4-bai3'
import { chuong4Bai4 } from './chuong4-bai4'
import { chuong4Bai5 } from './chuong4-bai5'
import { chuong5DaoHam } from './chuong5-dao-ham'
import { chuong6Bai1 } from './chuong6-bai1'
import { chuong6Bai2 } from './chuong6-bai2'
import { chuong6Bai3 } from './chuong6-bai3'
import { chuong7Bai1 } from './chuong7-bai1'
import { chuong7Bai2 } from './chuong7-bai2'
import { chuong8Bai1 } from './chuong8-bai1'
import { chuong8Bai2 } from './chuong8-bai2'
import { chuong8Bai3 } from './chuong8-bai3'
import { chuong9Bai1 } from './chuong9-bai1'
import { chuong11Bai1 } from './chuong11-bai1'
import { chuong11Bai2 } from './chuong11-bai2'

const all: Lesson[] = [
  chuong1Bai1,
  chuong1Bai2,
  chuong2Bai1,
  chuong2Bai2,
  chuong2Bai3,
  chuong2Bai4,
  chuong3Bai1,
  chuong3Bai2,
  chuong4Bai1,
  chuong4Bai2,
  chuong4Bai3,
  chuong4Bai4,
  chuong4Bai5,
  chuong5DaoHam,
  chuong6Bai1,
  chuong6Bai2,
  chuong6Bai3,
  chuong7Bai1,
  chuong7Bai2,
  chuong8Bai1,
  chuong8Bai2,
  chuong8Bai3,
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

import type { Chapter } from './types'

export const chapters: Chapter[] = [
  {
    id: 'chuong-1',
    order: 1,
    title: 'Ứng dụng đạo hàm để khảo sát hàm số',
    shortTitle: 'Ứng dụng đạo hàm',
    description:
      'Đơn điệu, cực trị, giá trị lớn nhất — nhỏ nhất, tiệm cận và khảo sát đồ thị. Toàn bộ nền tảng của chương trình Toán 12.',
    icon: 'curve',
    ready: true,
    lessons: [
      {
        id: 'bai-1',
        title: 'Tính đơn điệu và cực trị của hàm số',
        summary: 'Đồng biến, nghịch biến, dấu của đạo hàm và hai quy tắc tìm cực trị.',
        minutes: 25,
        ready: true,
      },
      {
        id: 'bai-2',
        title: 'Giá trị lớn nhất, giá trị nhỏ nhất của hàm số',
        summary: 'Tìm max – min trên đoạn, trên khoảng và các bài toán tham số.',
        minutes: 22,
        ready: true,
      },
      {
        id: 'bai-3',
        title: 'Đường tiệm cận của đồ thị hàm số',
        summary: 'Tiệm cận ngang, tiệm cận đứng và tiệm cận xiên của đồ thị.',
        minutes: 20,
        ready: true,
      },
      {
        id: 'bai-4',
        title: 'Khảo sát sự biến thiên và vẽ đồ thị hàm số',
        summary: 'Sơ đồ khảo sát, các dạng đồ thị quen thuộc và bài toán tương giao.',
        minutes: 30,
        ready: true,
      },
    ],
  },
  {
    id: 'chuong-2',
    order: 2,
    title: 'Vectơ và hệ trục toạ độ trong không gian',
    shortTitle: 'Vectơ trong không gian',
    description:
      'Vectơ, toạ độ điểm và các phép toán vectơ trong không gian ba chiều.',
    icon: 'vector',
    ready: false,
    lessons: [
      { id: 'bai-1', title: 'Vectơ trong không gian', summary: '', minutes: 20, ready: false },
      { id: 'bai-2', title: 'Toạ độ của vectơ trong không gian', summary: '', minutes: 20, ready: false },
      { id: 'bai-3', title: 'Biểu thức toạ độ của các phép toán vectơ', summary: '', minutes: 22, ready: false },
    ],
  },
  {
    id: 'chuong-3',
    order: 3,
    title: 'Các số đặc trưng đo mức độ phân tán của mẫu số liệu ghép nhóm',
    shortTitle: 'Mẫu số liệu ghép nhóm',
    description:
      'Khoảng biến thiên, khoảng tứ phân vị, phương sai và độ lệch chuẩn.',
    icon: 'scatter',
    ready: false,
    lessons: [
      { id: 'bai-1', title: 'Khoảng biến thiên và khoảng tứ phân vị', summary: '', minutes: 18, ready: false },
      { id: 'bai-2', title: 'Phương sai và độ lệch chuẩn', summary: '', minutes: 18, ready: false },
    ],
  },
  {
    id: 'chuong-4',
    order: 4,
    title: 'Nguyên hàm và tích phân',
    shortTitle: 'Nguyên hàm – tích phân',
    description:
      'Bảng nguyên hàm, các phương pháp tính tích phân và ứng dụng hình học.',
    icon: 'integral',
    ready: false,
    lessons: [
      { id: 'bai-1', title: 'Nguyên hàm', summary: '', minutes: 24, ready: false },
      { id: 'bai-2', title: 'Tích phân', summary: '', minutes: 24, ready: false },
      { id: 'bai-3', title: 'Ứng dụng hình học của tích phân', summary: '', minutes: 22, ready: false },
    ],
  },
  {
    id: 'chuong-5',
    order: 5,
    title: 'Phương pháp toạ độ trong không gian',
    shortTitle: 'Toạ độ trong không gian',
    description:
      'Mặt phẳng, đường thẳng, mặt cầu và các bài toán vị trí tương đối.',
    icon: 'plane',
    ready: false,
    lessons: [
      { id: 'bai-1', title: 'Phương trình mặt phẳng', summary: '', minutes: 24, ready: false },
      { id: 'bai-2', title: 'Phương trình đường thẳng trong không gian', summary: '', minutes: 24, ready: false },
      { id: 'bai-3', title: 'Phương trình mặt cầu', summary: '', minutes: 20, ready: false },
    ],
  },
  {
    id: 'chuong-6',
    order: 6,
    title: 'Xác suất có điều kiện',
    shortTitle: 'Xác suất có điều kiện',
    description:
      'Xác suất có điều kiện, công thức xác suất toàn phần và công thức Bayes.',
    icon: 'dice',
    ready: false,
    lessons: [
      { id: 'bai-1', title: 'Xác suất có điều kiện', summary: '', minutes: 20, ready: false },
      { id: 'bai-2', title: 'Công thức xác suất toàn phần và công thức Bayes', summary: '', minutes: 22, ready: false },
    ],
  },
]

export function getChapter(id: string | undefined) {
  return chapters.find(c => c.id === id)
}

export function getLessonMeta(chapterId: string | undefined, lessonId: string | undefined) {
  const chapter = getChapter(chapterId)
  if (!chapter) return undefined
  const index = chapter.lessons.findIndex(l => l.id === lessonId)
  if (index < 0) return undefined
  return { chapter, meta: chapter.lessons[index], index }
}

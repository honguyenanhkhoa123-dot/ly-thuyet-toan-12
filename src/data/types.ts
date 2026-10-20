export interface GraphSpec {
  kind: 'poly' | 'rational'
  /** Hàm số dùng để lấy mẫu toạ độ. */
  fn: (x: number) => number
  domain: [number, number]
  yRange: [number, number]
  /** Tiệm cận đứng. */
  va?: number[]
  /** Tiệm cận ngang. */
  ha?: number
  /** Điểm đánh dấu trên đồ thị. */
  marks?: Array<{ x: number; label?: string; kind?: 'max' | 'min' | 'point' }>
  caption?: string
}

export interface TheorySection {
  subtitle: string
  /** Markdown + LaTeX. Viết công thức trong $...$ hoặc $$...$$. */
  content: string
  /** Công thức quan trọng, render thành khối nổi bật. */
  formula?: string
  /** Ghi chú / chú ý. */
  note?: string
  figure?: GraphSpec
}

export interface VariationTableSpec {
  /** Các mốc trên trục x, ví dụ ['−∞', '0', '2', '+∞']. */
  boundaries: string[]
  /** Dấu của y′ trên từng khoảng, có boundaries.length - 1 phần tử. */
  signs: string[]
  /** Giá trị của y tại từng mốc. */
  values: Array<string | null>
  /** Mốc nào là nghiệm của y′ (hiện số 0). Mặc định: mọi mốc ở giữa. */
  zeros?: boolean[]
}

export type ExampleStep = string | { text: string; table: VariationTableSpec }

export interface Example {
  id: string
  title?: string
  prompt: string
  steps: ExampleStep[]
  answer?: string
  figure?: GraphSpec
}

export interface Exercise {
  id: string
  prompt: string
  hint?: string
  solution: string
}

export interface QuizQuestion {
  id: string
  question: string
  options: string[]
  /** index của đáp án đúng */
  answer: number
  explanation?: string
}

export interface TrueFalseItem {
  text: string
  answer: boolean
}

export interface TrueFalseQuestion {
  id: string
  stem: string
  items: TrueFalseItem[]
  explanation?: string
}

export interface ShortAnswerQuestion {
  id: string
  question: string
  answer: string
  /** Đơn vị / dạng đáp án, ví dụ "khoảng", "giá trị". */
  unit?: string
  explanation?: string
}

export interface Lesson {
  id: string
  chapterId: string
  title: string
  /** Một câu mô tả ngắn hiển thị trên card. */
  summary: string
  /** Số phút đọc ước lượng. */
  minutes: number
  theory: TheorySection[]
  examples: Example[]
  exercises: Exercise[]
  quiz: QuizQuestion[]
  trueFalse: TrueFalseQuestion[]
  shortAnswer: ShortAnswerQuestion[]
}

export interface LessonMeta {
  id: string
  title: string
  summary: string
  minutes: number
  ready: boolean
}

export interface Chapter {
  id: string
  order: number
  title: string
  /** Tên ngắn cho sidebar. */
  shortTitle: string
  description: string
  icon: ChapterIcon
  lessons: LessonMeta[]
  ready: boolean
}

export type ChapterIcon =
  | 'curve'
  | 'vector'
  | 'scatter'
  | 'integral'
  | 'plane'
  | 'dice'

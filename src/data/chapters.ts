import type { Chapter } from './types'

/**
 * Cấu trúc 12 chương bám đúng MỤC LỤC của tài liệu
 * "HV12H – Tóm tắt lý thuyết ôn thi TN THPT 2026–2027".
 * Mỗi chương ghi rõ các khối lớp mà nội dung chương phủ.
 */
export const chapters: Chapter[] = [
  {
    id: 'chuong-1',
    order: 1,
    title: 'Hệ bất phương trình bậc nhất hai ẩn',
    shortTitle: 'Bất phương trình bậc nhất hai ẩn',
    description:
      'Bất phương trình và hệ bất phương trình bậc nhất hai ẩn; biểu diễn miền nghiệm và bài toán tối ưu.',
    icon: 'plane',
    grades: [10],
    ready: true,
    lessons: [
      {
        id: 'bai-1',
        title: 'Bất phương trình bậc nhất hai ẩn',
        summary: 'Định nghĩa, nghiệm và cách biểu diễn miền nghiệm trên mặt phẳng toạ độ.',
        minutes: 20,
        ready: true,
      },
      {
        id: 'bai-2',
        title: 'Hệ bất phương trình bậc nhất hai ẩn',
        summary: 'Miền nghiệm của hệ và bài toán tìm giá trị lớn nhất, nhỏ nhất của biểu thức.',
        minutes: 22,
        ready: true,
      },
    ],
  },
  {
    id: 'chuong-2',
    order: 2,
    title: 'Phương trình lượng giác',
    shortTitle: 'Phương trình lượng giác',
    description:
      'Giá trị lượng giác, công thức biến đổi, hàm số lượng giác và phương trình lượng giác cơ bản.',
    icon: 'curve',
    grades: [11],
    ready: false,
    lessons: [
      {
        id: 'bai-1',
        title: 'Giá trị lượng giác của góc lượng giác',
        summary: 'Góc lượng giác, đường tròn lượng giác và giá trị lượng giác.',
        minutes: 24,
        ready: false,
      },
      {
        id: 'bai-2',
        title: 'Công thức lượng giác',
        summary: 'Công thức cộng, nhân đôi, hạ bậc và biến đổi tích thành tổng.',
        minutes: 22,
        ready: false,
      },
      {
        id: 'bai-3',
        title: 'Hàm số lượng giác',
        summary: 'Tập xác định, tính tuần hoàn và đồ thị của các hàm số lượng giác.',
        minutes: 24,
        ready: false,
      },
      {
        id: 'bai-4',
        title: 'Phương trình lượng giác cơ bản',
        summary: 'Phương trình sin, cos, tan, cot và công thức nghiệm tổng quát.',
        minutes: 26,
        ready: false,
      },
    ],
  },
  {
    id: 'chuong-3',
    order: 3,
    title: 'Dãy số. Cấp số cộng và cấp số nhân',
    shortTitle: 'Dãy số – cấp số',
    description: 'Dãy số, số hạng tổng quát, cấp số cộng và cấp số nhân.',
    icon: 'scatter',
    grades: [11],
    ready: true,
    lessons: [
      {
        id: 'bai-1',
        title: 'Dãy số',
        summary: 'Định nghĩa, cách cho dãy số và tính chất của dãy số.',
        minutes: 20,
        ready: true,
      },
      {
        id: 'bai-2',
        title: 'Cấp số cộng và cấp số nhân',
        summary: 'Công sai, công bội, số hạng tổng quát và tổng n số hạng đầu.',
        minutes: 24,
        ready: true,
      },
    ],
  },
  {
    id: 'chuong-4',
    order: 4,
    title: 'Hàm số mũ và hàm số logarit',
    shortTitle: 'Mũ và logarit',
    description:
      'Lũy thừa, logarit, hàm số mũ – logarit, bài toán lãi suất và phương trình, bất phương trình mũ – logarit.',
    icon: 'curve',
    grades: [11],
    ready: true,
    lessons: [
      {
        id: 'bai-1',
        title: 'Lũy thừa với số mũ thực',
        summary: 'Lũy thừa với số mũ nguyên, căn bậc n, số mũ hữu tỉ và số mũ thực.',
        minutes: 22,
        ready: true,
      },
      {
        id: 'bai-2',
        title: 'Logarit',
        summary: 'Định nghĩa, các quy tắc tính logarit và đổi cơ số.',
        minutes: 24,
        ready: true,
      },
      {
        id: 'bai-3',
        title: 'Hàm số mũ và hàm số logarit',
        summary: 'Tập xác định, tập giá trị, tính đơn điệu và đồ thị của hàm số mũ, logarit.',
        minutes: 24,
        ready: true,
      },
      {
        id: 'bai-4',
        title: 'Bài toán lãi suất – tăng trưởng',
        summary: 'Lãi đơn, lãi kép, lãi kép liên tục và mô hình tăng trưởng.',
        minutes: 22,
        ready: true,
      },
      {
        id: 'bai-5',
        title: 'Phương trình, bất phương trình mũ và logarit',
        summary: 'Phương trình, bất phương trình mũ và logarit cơ bản, đưa về cùng cơ số.',
        minutes: 26,
        ready: true,
      },
    ],
  },
  {
    id: 'chuong-5',
    order: 5,
    title: 'Đạo hàm và ứng dụng của đạo hàm',
    shortTitle: 'Đạo hàm và ứng dụng',
    description:
      'Đạo hàm, tính đơn điệu, cực trị, giá trị lớn nhất – nhỏ nhất, tiệm cận và khảo sát đồ thị hàm số.',
    icon: 'curve',
    grades: [11, 12],
    ready: true,
    lessons: [
      {
        id: 'dao-ham',
        title: 'Đạo hàm',
        summary: 'Định nghĩa đạo hàm, quy tắc tính và bảng đạo hàm của các hàm số thường gặp.',
        minutes: 24,
        ready: true,
      },
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
    id: 'chuong-6',
    order: 6,
    title: 'Nguyên hàm và tích phân',
    shortTitle: 'Nguyên hàm – tích phân',
    description: 'Bảng nguyên hàm, các phương pháp tính tích phân và ứng dụng hình học.',
    icon: 'integral',
    grades: [12],
    ready: false,
    lessons: [
      {
        id: 'bai-1',
        title: 'Nguyên hàm',
        summary: 'Định nghĩa, tính chất và bảng nguyên hàm cơ bản.',
        minutes: 24,
        ready: false,
      },
      {
        id: 'bai-2',
        title: 'Tích phân',
        summary: 'Định nghĩa, tính chất và các phương pháp tính tích phân.',
        minutes: 24,
        ready: false,
      },
      {
        id: 'bai-3',
        title: 'Ứng dụng hình học của tích phân',
        summary: 'Diện tích hình phẳng và thể tích khối tròn xoay.',
        minutes: 22,
        ready: false,
      },
    ],
  },
  {
    id: 'chuong-7',
    order: 7,
    title: 'Thống kê',
    shortTitle: 'Thống kê',
    description: 'Các số đặc trưng của mẫu số liệu không ghép nhóm và mẫu số liệu ghép nhóm.',
    icon: 'scatter',
    grades: [10, 11],
    ready: true,
    lessons: [
      {
        id: 'bai-1',
        title: 'Các đặc trưng của mẫu số liệu không ghép nhóm',
        summary: 'Số trung bình, trung vị, tứ phân vị, mốt và các số đo độ phân tán.',
        minutes: 24,
        ready: true,
      },
      {
        id: 'bai-2',
        title: 'Các đặc trưng của mẫu số liệu ghép nhóm',
        summary: 'Số trung bình, trung vị, tứ phân vị, mốt của mẫu ghép nhóm và các số đo độ phân tán.',
        minutes: 26,
        ready: true,
      },
    ],
  },
  {
    id: 'chuong-8',
    order: 8,
    title: 'Tổ hợp – Xác suất',
    shortTitle: 'Tổ hợp – xác suất',
    description: 'Đại số tổ hợp, biến cố, xác suất cổ điển và xác suất có điều kiện.',
    icon: 'dice',
    grades: [10, 11, 12],
    ready: true,
    lessons: [
      {
        id: 'bai-1',
        title: 'Đại số tổ hợp',
        summary: 'Quy tắc đếm, hoán vị, chỉnh hợp và tổ hợp.',
        minutes: 22,
        ready: true,
      },
      {
        id: 'bai-2',
        title: 'Biến cố và định nghĩa cổ điển của xác suất',
        summary: 'Không gian mẫu, biến cố và cách tính xác suất cổ điển.',
        minutes: 22,
        ready: true,
      },
      {
        id: 'bai-3',
        title: 'Xác suất có điều kiện',
        summary: 'Công thức xác suất có điều kiện, xác suất toàn phần và công thức Bayes.',
        minutes: 24,
        ready: true,
      },
    ],
  },
  {
    id: 'chuong-9',
    order: 9,
    title: 'Phương pháp tọa độ trong mặt phẳng',
    shortTitle: 'Toạ độ trong mặt phẳng',
    description: 'Phương trình ba đường conic: elip, hypebol và parabol.',
    icon: 'plane',
    grades: [10],
    ready: true,
    lessons: [
      {
        id: 'bai-1',
        title: 'Ba đường conic',
        summary: 'Elip, hypebol, parabol và phương trình chính tắc.',
        minutes: 26,
        ready: true,
      },
    ],
  },
  {
    id: 'chuong-10',
    order: 10,
    title: 'Hình học không gian',
    shortTitle: 'Hình học không gian',
    description: 'Quan hệ song song, vuông góc, góc – khoảng cách và thể tích khối đa diện.',
    icon: 'vector',
    grades: [11],
    ready: false,
    lessons: [
      {
        id: 'bai-1',
        title: 'Quan hệ song song trong không gian',
        summary: 'Đường thẳng, mặt phẳng song song và các tính chất liên quan.',
        minutes: 24,
        ready: false,
      },
      {
        id: 'bai-2',
        title: 'Quan hệ vuông góc trong không gian',
        summary: 'Đường thẳng vuông góc với mặt phẳng, hai mặt phẳng vuông góc.',
        minutes: 24,
        ready: false,
      },
      {
        id: 'bai-3',
        title: 'Góc và khoảng cách trong không gian',
        summary: 'Góc giữa đường thẳng, mặt phẳng; khoảng cách từ điểm đến mặt phẳng.',
        minutes: 26,
        ready: false,
      },
      {
        id: 'bai-4',
        title: 'Thể tích của khối đa diện',
        summary: 'Thể tích khối chóp, khối lăng trụ và các bài toán liên quan.',
        minutes: 24,
        ready: false,
      },
    ],
  },
  {
    id: 'chuong-11',
    order: 11,
    title: 'Vectơ và hệ tọa độ trong không gian',
    shortTitle: 'Vectơ trong không gian',
    description: 'Vectơ trong không gian và tọa độ của vectơ.',
    icon: 'vector',
    grades: [12],
    ready: true,
    lessons: [
      {
        id: 'bai-1',
        title: 'Vectơ trong không gian',
        summary: 'Các phép toán vectơ, trung điểm – trọng tâm, góc và tích vô hướng.',
        minutes: 22,
        ready: true,
      },
      {
        id: 'bai-2',
        title: 'Tọa độ của vectơ trong không gian',
        summary: 'Hệ trục Oxyz, tọa độ điểm – vectơ, tích vô hướng và tích có hướng.',
        minutes: 26,
        ready: true,
      },
    ],
  },
  {
    id: 'chuong-12',
    order: 12,
    title: 'Tọa độ trong không gian',
    shortTitle: 'Toạ độ trong không gian',
    description:
      'Mặt phẳng, đường thẳng, mặt cầu, góc và các bài toán cực trị trong không gian.',
    icon: 'plane',
    grades: [12],
    ready: false,
    lessons: [
      {
        id: 'bai-1',
        title: 'Phương trình mặt phẳng',
        summary: 'Vectơ pháp tuyến, phương trình tổng quát và vị trí tương đối.',
        minutes: 24,
        ready: false,
      },
      {
        id: 'bai-2',
        title: 'Phương trình đường thẳng trong không gian',
        summary: 'Vectơ chỉ phương, phương trình tham số và chính tắc.',
        minutes: 24,
        ready: false,
      },
      {
        id: 'bai-3',
        title: 'Công thức tính góc trong không gian',
        summary: 'Góc giữa hai đường thẳng, đường thẳng và mặt phẳng, hai mặt phẳng.',
        minutes: 22,
        ready: false,
      },
      {
        id: 'bai-4',
        title: 'Phương trình mặt cầu',
        summary: 'Phương trình mặt cầu và vị trí tương đối với mặt phẳng.',
        minutes: 20,
        ready: false,
      },
      {
        id: 'bai-5',
        title: 'Một số bài toán cực trị trong hình không gian',
        summary: 'Các bài toán cực trị hình học giải bằng phương pháp tọa độ.',
        minutes: 22,
        ready: false,
      },
      {
        id: 'bai-6',
        title: 'Phương pháp tọa độ hóa hình không gian',
        summary: 'Chọn hệ trục tọa độ và giải bài toán hình học không gian.',
        minutes: 24,
        ready: false,
      },
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

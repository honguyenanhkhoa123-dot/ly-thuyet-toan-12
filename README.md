# Lý thuyết Toán THPT — Ôn thi tốt nghiệp 2026–2027

Website ôn thi tốt nghiệp THPTQG dạng tóm tắt lý thuyết, có công thức Toán render bằng KaTeX, ví dụ có lời giải, bài tập tự luyện, trắc nghiệm, câu hỏi đúng/sai và trả lời ngắn.

Nội dung biên soạn **duy nhất** theo tài liệu **HV12H – Tóm tắt lý thuyết ôn thi TN THPT 2026–2027** (bản PDF/DOCX của tác giả). Mục lục 12 chương trên web bám đúng mục lục của tài liệu, phủ đủ 3 khối 10–11–12; phần nào chưa biên soạn xong được ghi rõ “đang biên soạn”.

## Tính năng

- **KaTeX** cho mọi công thức: không còn LaTeX thô, không `**bold**` hay `<br>` lẫn trong nội dung; công thức dài tự cuộn ngang.
- **Bố cục**: header (logo + tên môn + menu), sidebar danh sách chương/bài, vùng nội dung chính, footer.
- **Lọc theo khối lớp** ở trang chủ: Tất cả · Lớp 10 · Lớp 11 · Lớp 12.
- **Tab bài học**: Lý thuyết · Ví dụ · Bài tập · Trắc nghiệm · Đáp án.
- **Bài tập tương tác**: chọn đáp án trắc nghiệm, đúng/sai từng ý, nhập đáp án ngắn; chấm điểm ngay và lưu tiến độ.
- **Tiến độ học tập** lưu trong `localStorage` (đã học, đã hoàn thành, điểm trắc nghiệm).
- **Chế độ tối** (theo hệ thống hoặc bật/tắt thủ công), giao diện responsive 375–1440px.
- **Đồ thị hàm số vẽ bằng SVG** (không dùng ảnh), bảng biến thiên dạng HTML.
- Điều hướng bài trước/bài sau, breadcrumb, tiêu đề trang theo route.

## Nội dung hiện có

Mục lục 12 chương theo đúng tài liệu HV12H:

1. Hệ bất phương trình bậc nhất hai ẩn — **Lớp 10**
2. Phương trình lượng giác — **Lớp 11**
3. Dãy số. Cấp số cộng và cấp số nhân — **Lớp 11**
4. Hàm số mũ và hàm số logarit — **Lớp 11**
5. Đạo hàm và ứng dụng của đạo hàm — **Lớp 11–12**
6. Nguyên hàm và tích phân — **Lớp 12**
7. Thống kê — **Lớp 10–11**
8. Tổ hợp – Xác suất — **Lớp 10–12**
9. Phương pháp tọa độ trong mặt phẳng — **Lớp 10**
10. Hình học không gian — **Lớp 11**
11. Vectơ và hệ tọa độ trong không gian — **Lớp 12**
12. Tọa độ trong không gian — **Lớp 12**

Đã biên soạn:

- **Chương 1 — đủ 2 bài** (Lớp 10):
  1. Bất phương trình bậc nhất hai ẩn
  2. Hệ bất phương trình bậc nhất hai ẩn
- **Chương 2 — đủ 4 bài** (Lớp 11):
  1. Giá trị lượng giác của góc lượng giác
  2. Công thức lượng giác
  3. Hàm số lượng giác
  4. Phương trình lượng giác cơ bản
- **Chương 3 — đủ 2 bài** (Lớp 11):
  1. Dãy số
  2. Cấp số cộng và cấp số nhân
- **Chương 4 — đủ 5 bài** (Lớp 11):
  1. Lũy thừa với số mũ thực
  2. Logarit
  3. Hàm số mũ và hàm số logarit
  4. Bài toán lãi suất – tăng trưởng
  5. Phương trình, bất phương trình mũ và logarit
- **Chương 5 — đủ 5 bài** (Lớp 11–12):
  1. Đạo hàm
  2. Tính đơn điệu và cực trị của hàm số
  3. Giá trị lớn nhất, giá trị nhỏ nhất của hàm số
  4. Đường tiệm cận của đồ thị hàm số
  5. Khảo sát sự biến thiên và vẽ đồ thị hàm số
- **Chương 7 — đủ 2 bài** (Lớp 10–11):
  1. Các đặc trưng của mẫu số liệu không ghép nhóm
  2. Các đặc trưng của mẫu số liệu ghép nhóm
- **Chương 8 — đủ 3 bài** (Lớp 10–12):
  1. Đại số tổ hợp
  2. Biến cố và định nghĩa cổ điển của xác suất
  3. Xác suất có điều kiện
- **Chương 9 — đủ 1 bài** (Lớp 10):
  1. Ba đường conic
- **Chương 11 — đủ 2 bài** (Lớp 12):
  1. Vectơ trong không gian
  2. Tọa độ của vectơ trong không gian

Các bài còn lại đang tiếp tục biên soạn từ cùng tài liệu nguồn, hiển thị trạng thái “đang biên soạn”/“sắp mở”.

Mỗi bài đã mở gồm: lý thuyết trọng tâm, ví dụ mẫu có lời giải, bài tập tự luyện (có gợi ý và lời giải), trắc nghiệm, đúng/sai (4 ý mỗi câu), trả lời ngắn và bảng đáp án.

## Công nghệ

- React 19 + TypeScript + Vite 8
- Tailwind CSS v4
- KaTeX + `react-markdown` + `remark-math` + `rehype-katex`
- React Router 7
- Triển khai trên Vercel (SPA rewrite)

## Chạy locally

```bash
npm install
npm run dev
```

Mặc định Vite chạy ở `http://localhost:5173`.

```bash
npm run build   # kiểm tra TypeScript + build production
npm run preview # xem bản build
```

## Cấu trúc chính

```
src/
  components/
    layout/      Header, Footer
    lesson/      Tabs, LessonNav, ExerciseList, AnswersPanel
    quiz/        QuizSection, TrueFalseSection, ShortAnswerSection
    theory/      TheoryBlock, ExampleCard, GraphFigure, VariationTable
    ui/          Icon
  data/
    chapters.ts  Mục lục 12 chương + khối lớp + trạng thái bài
    lessons/     Nội dung các bài đã biên soạn
  lib/
    markdown.tsx Pipeline markdown + KaTeX
    texSafe.ts   Chuẩn hoá công thức, chống lỗi tiếng Việt
    progress.ts  Tiến độ học tập (localStorage)
    theme.ts     Chế độ sáng/tối
  pages/         Home, Chapter, Lesson, NotFound
```

## Ghi chú nội dung

- Công thức được viết lại bằng LaTeX và kiểm tra hiển thị trên cả desktop lẫn mobile.
- Phần lý thuyết bám sát cấu trúc và ký hiệu của tài liệu gốc; các ví dụ/bài tập được chọn lọc theo đúng phạm vi từng bài.
- Bảng biến thiên dùng bảng HTML responsive; đồ thị dùng SVG nên không bị mờ khi phóng to.
- Phiên bản KaTeX của CSS và bộ render được giữ đồng nhất (0.16.x) để các ký hiệu như `≠` hiển thị đúng.
- Nếu phát hiện sai sót về nội dung, có thể sửa trực tiếp trong `src/data/lessons/*.ts` (mỗi bài là một file dữ liệu có kiểu).

## Triển khai

Repo đã cấu hình `vercel.json` cho Vite SPA. Trên Vercel chỉ cần import repo, giữ nguyên build command `npm run build` và output directory `dist`.

- GitHub: https://github.com/honguyenanhkhoa123-dot/ly-thuyet-toan-12
- Vercel: https://toan12-hv.vercel.app

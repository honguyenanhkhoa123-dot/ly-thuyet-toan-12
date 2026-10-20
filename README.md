# Lý thuyết Toán 12 — Ôn thi THPT 2026–2027

Website học lý thuyết Toán 12 dạng tóm tắt, có công thức Toán render bằng KaTeX, ví dụ có lời giải, bài tập tự luyện, trắc nghiệm, câu hỏi đúng/sai và trả lời ngắn.

Nội dung biên soạn theo tài liệu **HV12H – Tóm tắt lý thuyết ôn thi TN THPT 2026–2027** (bản PDF/DOCX của tác giả), trình bày lại theo cấu trúc bài học trên web.

## Tính năng

- **KaTeX** cho mọi công thức: không còn LaTeX thô, không `**bold**` hay `<br>` lẫn trong nội dung; công thức dài tự cuộn ngang.
- **Bố cục 3 phần**: header (logo + tên môn + menu), sidebar danh sách chương/bài, vùng nội dung chính, footer.
- **Tab bài học**: Lý thuyết · Ví dụ · Bài tập · Trắc nghiệm · Đáp án.
- **Bài tập tương tác**: chọn đáp án trắc nghiệm, đúng/sai từng ý, nhập đáp án ngắn; chấm điểm ngay và lưu tiến độ.
- **Tiến độ học tập** lưu trong `localStorage` (đã học, đã hoàn thành, điểm trắc nghiệm).
- **Chế độ tối** (theo hệ thống hoặc bật/tắt thủ công), giao diện responsive 375–1440px.
- **Đồ thị hàm số vẽ bằng SVG** (không dùng ảnh), bảng biến thiên dạng HTML.
- Điều hướng bài trước/bài sau, breadcrumb, tiêu đề trang theo route.

## Nội dung hiện có

- **Chương 1 — Ứng dụng đạo hàm để khảo sát hàm số**: đủ **4 bài**
  1. Tính đơn điệu và cực trị của hàm số
  2. Giá trị lớn nhất, giá trị nhỏ nhất của hàm số
  3. Đường tiệm cận của đồ thị hàm số
  4. Khảo sát sự biến thiên và vẽ đồ thị hàm số
- **Chương 2–6** đã có mục lục và số bài theo chương trình Toán 12 (CT 2018), nội dung đang tiếp tục biên soạn (trạng thái “đang biên soạn”).

Mỗi bài Chương 1 gồm: lý thuyết trọng tâm, ví dụ mẫu có lời giải, 6 bài tập tự luyện (có gợi ý và lời giải), 8 câu trắc nghiệm, 3 câu đúng/sai (4 ý mỗi câu), 4 câu trả lời ngắn và bảng đáp án.

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
    chapters.ts  Danh mục 6 chương + trạng thái bài
    lessons/     Nội dung Chương 1 (bai1–bai4.ts)
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
- Nếu phát hiện sai sót về nội dung, có thể sửa trực tiếp trong `src/data/lessons/*.ts` (mỗi bài là một file dữ liệu có kiểu).

## Triển khai

Repo đã cấu hình `vercel.json` cho Vite SPA. Trên Vercel chỉ cần import repo, giữ nguyên build command `npm run build` và output directory `dist`.

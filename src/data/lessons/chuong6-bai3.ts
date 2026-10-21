import type { Lesson } from '../types'

export const chuong6Bai3: Lesson = {
  id: 'bai-3',
  chapterId: 'chuong-6',
  title: 'Ứng dụng hình học của tích phân',
  summary: 'Diện tích hình phẳng, thể tích vật thể và thể tích khối tròn xoay.',
  minutes: 26,

  theory: [
    {
      subtitle: 'Diện tích hình phẳng giới hạn bởi một đồ thị',
      content: String.raw`Cho hàm số $y=f(x)$ liên tục trên $[a;b]$. Diện tích hình phẳng giới hạn bởi đồ thị $y=f(x)$, trục $Ox$ và hai đường thẳng $x=a$, $x=b$ là
$$S=\int_a^b\left|f(x)\right|\mathrm{d}x.$$`,
      formula: String.raw`S=\int_a^b\left|f(x)\right|\mathrm{d}x`,
      note: String.raw`Nếu $f(x)\ge0$ trên $[a;b]$ thì $S=\displaystyle\int_a^b f(x)\,\mathrm{d}x$.`,
    },
    {
      subtitle: 'Diện tích hình phẳng giới hạn bởi hai đồ thị',
      content: String.raw`Cho hai hàm số $y=f(x)$, $y=g(x)$ liên tục trên $[a;b]$. Diện tích hình phẳng giới hạn bởi hai đồ thị và hai đường thẳng $x=a$, $x=b$ là
$$S=\int_a^b\left|f(x)-g(x)\right|\mathrm{d}x.$$

Nếu đề chưa cho $a$, $b$ thì $a$, $b$ là nghiệm của phương trình $f(x)=g(x)$.`,
      formula: String.raw`S=\int_a^b\left|f(x)-g(x)\right|\mathrm{d}x`,
      note: String.raw`Cần xác định giao điểm để chọn đúng cận và xét dấu hiệu.`,
    },
    {
      subtitle: 'Thể tích vật thể',
      content: String.raw`Gọi $B$ là phần vật thể giới hạn bởi hai mặt phẳng vuông góc với trục $Ox$ tại $a$, $b$. Gọi $S(x)$ là diện tích thiết diện của vật thể cắt bởi mặt phẳng vuông góc với $Ox$ tại điểm có hoành độ $x$. Khi đó
$$V=\int_a^b S(x)\,\mathrm{d}x.$$`,
      formula: String.raw`V=\int_a^b S(x)\,\mathrm{d}x`,
      note: String.raw`$S(x)$ là diện tích thiết diện, không phải diện tích hình phẳng ban đầu.`,
    },
    {
      subtitle: 'Thể tích khối tròn xoay',
      content: String.raw`Cho hàm số $f(x)$ liên tục, không âm trên $[a;b]$. Hình phẳng giới hạn bởi $y=f(x)$, trục $Ox$, $x=a$, $x=b$ quay quanh $Ox$ tạo thành khối tròn xoay có thể tích
$$V=\pi\int_a^b f^2(x)\,\mathrm{d}x.$$

Nếu hình phẳng giới hạn bởi $y=f(x)$, $y=g(x)$, $x=a$, $x=b$ quay quanh $Ox$ thì
$$V=\pi\int_a^b\left[f^2(x)-g^2(x)\right]\mathrm{d}x.$$`,
      formula: String.raw`V=\pi\int_a^b f^2(x)\,\mathrm{d}x`,
      note: String.raw`Công thức có bình phương $f(x)$ và nhân thêm $\pi$.`,
    },
    {
      subtitle: 'Một số công thức hình học cần nhớ',
      content: String.raw`- Đường thẳng: $y=ax+b$.
- Đường tròn tâm $I(a;b)$ bán kính $R$: $(x-a)^2+(y-b)^2=R^2$.
- Nửa đường tròn phía trên $Ox$: $y=\sqrt{R^2-x^2}$.
- Elip: $\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}=1$, nửa elip phía trên: $y=b\sqrt{1-\dfrac{x^2}{a^2}}$.
- Parabol: $y=ax^2+bx+c$ hoặc $y=ax^2+c$ khi trục đối xứng là $Oy$.
- Diện tích elip: $S=\pi ab$.
- Thể tích khối cầu: $V=\dfrac43\pi R^3$; diện tích mặt cầu: $S=4\pi R^2$.`,
      formula: String.raw`S=\pi ab,\qquad V=\dfrac43\pi R^3`,
      note: String.raw`Các công thức đặc biệt giúp kiểm tra nhanh kết quả tích phân.`,
    },
  ],

  examples: [
    {
      id: 'vd1',
      title: 'Diện tích dưới parabol',
      prompt: String.raw`Tính diện tích hình phẳng giới hạn bởi $y=x^2$, trục $Ox$, $x=0$, $x=1$.`,
      steps: [
        String.raw`Trên $[0;1]$, $x^2\ge0$ nên $S=\displaystyle\int_0^1x^2\,\mathrm{d}x$.`,
        String.raw`$S=\left[\dfrac{x^3}{3}\right]_0^1=\dfrac13$.`,
      ],
      answer: String.raw`$S=\dfrac13$.`,
    },
    {
      id: 'vd2',
      title: 'Diện tích giữa hai đồ thị',
      prompt: String.raw`Tính diện tích hình phẳng giới hạn bởi $y=x$ và $y=x^2$.`,
      steps: [
        String.raw`Phương trình hoành độ giao điểm: $x=x^2\iff x=0$ hoặc $x=1$.`,
        String.raw`Trên $[0;1]$, $x\ge x^2$ nên $S=\displaystyle\int_0^1(x-x^2)\,\mathrm{d}x$.`,
        String.raw`$S=\left[\dfrac{x^2}{2}-\dfrac{x^3}{3}\right]_0^1=\dfrac12-\dfrac13=\dfrac16$.`,
      ],
      answer: String.raw`$S=\dfrac16$.`,
    },
    {
      id: 'vd3',
      title: 'Thể tích khối tròn xoay',
      prompt: String.raw`Tính thể tích khối tròn xoay tạo thành khi quay hình phẳng giới hạn bởi $y=x$, $Ox$, $x=0$, $x=1$ quanh $Ox$.`,
      steps: [
        String.raw`$V=\pi\displaystyle\int_0^1x^2\,\mathrm{d}x$.`,
        String.raw`$V=\pi\left[\dfrac{x^3}{3}\right]_0^1=\dfrac{\pi}{3}$.`,
      ],
      answer: String.raw`$V=\dfrac{\pi}{3}$.`,
    },
    {
      id: 'vd4',
      title: 'Thể tích với căn thức',
      prompt: String.raw`Tính thể tích khối tròn xoay tạo thành khi quay hình phẳng giới hạn bởi $y=\sqrt{x}$, $Ox$, $x=0$, $x=1$ quanh $Ox$.`,
      steps: [
        String.raw`$f^2(x)=x$ nên $V=\pi\displaystyle\int_0^1x\,\mathrm{d}x$.`,
        String.raw`$V=\pi\left[\dfrac{x^2}{2}\right]_0^1=\dfrac{\pi}{2}$.`,
      ],
      answer: String.raw`$V=\dfrac{\pi}{2}$.`,
    },
    {
      id: 'vd5',
      title: 'Diện tích với hàm sin',
      prompt: String.raw`Tính diện tích hình phẳng giới hạn bởi $y=\sin x$, trục $Ox$, $x=0$, $x=\pi$.`,
      steps: [
        String.raw`Trên $[0;\pi]$, $\sin x\ge0$ nên $S=\displaystyle\int_0^{\pi}\sin x\,\mathrm{d}x$.`,
        String.raw`$S=\left[-\cos x\right]_0^{\pi}=1+1=2$.`,
      ],
      answer: String.raw`$S=2$.`,
    },
  ],

  exercises: [
    {
      id: 'bt1',
      prompt: String.raw`Tính diện tích hình phẳng giới hạn bởi $y=x^2$, $Ox$, $x=0$, $x=2$.`,
      solution: String.raw`$S=\displaystyle\int_0^2x^2\,\mathrm{d}x=\left[\dfrac{x^3}{3}\right]_0^2=\dfrac83$.`,
    },
    {
      id: 'bt2',
      prompt: String.raw`Tính diện tích hình phẳng giới hạn bởi $y=x$, $Ox$, $x=0$, $x=2$.`,
      solution: String.raw`$S=\displaystyle\int_0^2x\,\mathrm{d}x=\left[\dfrac{x^2}{2}\right]_0^2=2$.`,
    },
    {
      id: 'bt3',
      prompt: String.raw`Tính thể tích khối tròn xoay khi quay hình phẳng giới hạn bởi $y=x$, $Ox$, $x=0$, $x=2$ quanh $Ox$.`,
      solution: String.raw`$V=\pi\displaystyle\int_0^2x^2\,\mathrm{d}x=\pi\cdot\dfrac83=\dfrac{8\pi}{3}$.`,
    },
    {
      id: 'bt4',
      prompt: String.raw`Tính thể tích khối tròn xoay khi quay hình phẳng giới hạn bởi $y=\sqrt{x}$, $Ox$, $x=0$, $x=4$ quanh $Ox$.`,
      solution: String.raw`$V=\pi\displaystyle\int_0^4x\,\mathrm{d}x=\pi\left[\dfrac{x^2}{2}\right]_0^4=8\pi$.`,
    },
    {
      id: 'bt5',
      prompt: String.raw`Tính diện tích hình phẳng giới hạn bởi $y=x^2$ và $y=x$.`,
      solution: String.raw`Giao điểm $x=0$, $x=1$; $S=\displaystyle\int_0^1(x-x^2)\,\mathrm{d}x=\dfrac12-\dfrac13=\dfrac16$.`,
    },
    {
      id: 'bt6',
      prompt: String.raw`Tính diện tích hình phẳng giới hạn bởi $y=\cos x$, $Ox$, $x=0$, $x=\dfrac{\pi}{2}$.`,
      hint: String.raw`Trên $\left[0;\dfrac{\pi}{2}\right]$, $\cos x\ge0$.`,
      solution: String.raw`$S=\displaystyle\int_0^{\pi/2}\cos x\,\mathrm{d}x=\left[\sin x\right]_0^{\pi/2}=1$.`,
    },
  ],

  quiz: [
    {
      id: 'q1',
      question: String.raw`Diện tích hình phẳng giới hạn bởi $y=f(x)$, $Ox$, $x=a$, $x=b$ là`,
      options: [
        String.raw`$\displaystyle\int_a^b f(x)\,\mathrm{d}x$`,
        String.raw`$\displaystyle\int_a^b\left|f(x)\right|\mathrm{d}x$`,
        String.raw`$\pi\displaystyle\int_a^b f^2(x)\,\mathrm{d}x$`,
        String.raw`$\displaystyle\int_a^b f^2(x)\,\mathrm{d}x$`,
      ],
      answer: 1,
      explanation: 'Diện tích phải lấy trị tuyệt đối để không âm.',
    },
    {
      id: 'q2',
      question: String.raw`Diện tích hình phẳng giới hạn bởi $y=f(x)$ và $y=g(x)$ trên $[a;b]$ là`,
      options: [
        String.raw`$\displaystyle\int_a^b\left[f(x)-g(x)\right]\mathrm{d}x$`,
        String.raw`$\displaystyle\int_a^b\left|f(x)-g(x)\right|\mathrm{d}x$`,
        String.raw`$\pi\displaystyle\int_a^b\left|f(x)-g(x)\right|\mathrm{d}x$`,
        String.raw`$\displaystyle\int_a^b\left[f^2(x)-g^2(x)\right]\mathrm{d}x$`,
      ],
      answer: 1,
      explanation: 'Hiệu hai hàm số phải nằm trong trị tuyệt đối.',
    },
    {
      id: 'q3',
      question: String.raw`Thể tích khối tròn xoay khi quay $y=f(x)\ge0$ trên $[a;b]$ quanh $Ox$ là`,
      options: [
        String.raw`$\displaystyle\int_a^b f(x)\,\mathrm{d}x$`,
        String.raw`$\pi\displaystyle\int_a^b f(x)\,\mathrm{d}x$`,
        String.raw`$\displaystyle\int_a^b f^2(x)\,\mathrm{d}x$`,
        String.raw`$\pi\displaystyle\int_a^b f^2(x)\,\mathrm{d}x$`,
      ],
      answer: 3,
      explanation: 'Công thức thể tích có bình phương và nhân $\\pi$.',
    },
    {
      id: 'q4',
      question: String.raw`Diện tích hình phẳng giới hạn bởi $y=x^2$, $Ox$, $x=0$, $x=1$ là`,
      options: [
        String.raw`$\dfrac13$`,
        String.raw`$\dfrac12$`,
        String.raw`$1$`,
        String.raw`$\dfrac14$`,
      ],
      answer: 0,
      explanation: String.raw`$\displaystyle\int_0^1x^2\,\mathrm{d}x=\dfrac13$.`,
    },
    {
      id: 'q5',
      question: String.raw`Diện tích hình phẳng giới hạn bởi $y=x$ và $y=x^2$ là`,
      options: [
        String.raw`$\dfrac12$`,
        String.raw`$\dfrac16$`,
        String.raw`$\dfrac13$`,
        String.raw`$1$`,
      ],
      answer: 1,
      explanation: String.raw`$\displaystyle\int_0^1(x-x^2)\,\mathrm{d}x=\dfrac16$.`,
    },
    {
      id: 'q6',
      question: String.raw`Thể tích khối tròn xoay khi quay $y=x$ trên $[0;1]$ quanh $Ox$ là`,
      options: [
        String.raw`$\dfrac{\pi}{3}$`,
        String.raw`$\dfrac{\pi}{2}$`,
        String.raw`$\pi$`,
        String.raw`$\dfrac13$`,
      ],
      answer: 0,
      explanation: String.raw`$V=\pi\displaystyle\int_0^1x^2\,\mathrm{d}x=\dfrac{\pi}{3}$.`,
    },
    {
      id: 'q7',
      question: String.raw`Thể tích khối tròn xoay khi quay $y=\sqrt{x}$ trên $[0;1]$ quanh $Ox$ là`,
      options: [
        String.raw`$\pi$`,
        String.raw`$\dfrac{\pi}{3}$`,
        String.raw`$\dfrac{\pi}{2}$`,
        String.raw`$\dfrac{\pi}{4}$`,
      ],
      answer: 2,
      explanation: String.raw`$V=\pi\displaystyle\int_0^1x\,\mathrm{d}x=\dfrac{\pi}{2}$.`,
    },
    {
      id: 'q8',
      question: String.raw`Diện tích hình phẳng giới hạn bởi $y=\sin x$, $Ox$, $x=0$, $x=\pi$ là`,
      options: [
        String.raw`$0$`,
        String.raw`$1$`,
        String.raw`$2$`,
        String.raw`$\pi$`,
      ],
      answer: 2,
      explanation: String.raw`$\displaystyle\int_0^{\pi}\sin x\,\mathrm{d}x=2$.`,
    },
  ],

  trueFalse: [
    {
      id: 'tf1',
      stem: 'Các công thức diện tích:',
      items: [
        { text: String.raw`$S=\displaystyle\int_a^b\left|f(x)\right|\mathrm{d}x$ khi giới hạn bởi $y=f(x)$, $Ox$, $x=a$, $x=b$.`, answer: true },
        { text: String.raw`$S=\displaystyle\int_a^b\left|f(x)-g(x)\right|\mathrm{d}x$ khi giới hạn bởi $y=f(x)$, $y=g(x)$, $x=a$, $x=b$.`, answer: true },
        { text: String.raw`Diện tích luôn là số không âm.`, answer: true },
        { text: String.raw`$S=\displaystyle\int_a^b f(x)\,\mathrm{d}x$ luôn đúng.`, answer: false },
      ],
      explanation: 'Công thức không có trị tuyệt đối chỉ đúng khi $f(x)\\ge0$ trên đoạn.',
    },
    {
      id: 'tf2',
      stem: 'Các công thức thể tích:',
      items: [
        { text: String.raw`$V=\pi\displaystyle\int_a^b f^2(x)\,\mathrm{d}x$ khi quay $y=f(x)$ quanh $Ox$.`, answer: true },
        { text: String.raw`$V=\displaystyle\int_a^b S(x)\,\mathrm{d}x$ với $S(x)$ là diện tích thiết diện.`, answer: true },
        { text: String.raw`Thể tích khối cầu bán kính $R$ là $\dfrac43\pi R^3$.`, answer: true },
        { text: String.raw`Thể tích khối tròn xoay luôn bằng diện tích hình phẳng.`, answer: false },
      ],
      explanation: 'Thể tích và diện tích là hai đại lượng khác nhau, khác đơn vị đo.',
    },
    {
      id: 'tf3',
      stem: 'Các giá trị cụ thể:',
      items: [
        { text: String.raw`Diện tích giới hạn bởi $y=x^2$, $Ox$, $x=0$, $x=1$ bằng $\dfrac13$.`, answer: true },
        { text: String.raw`Diện tích giới hạn bởi $y=x$ và $y=x^2$ bằng $\dfrac13$.`, answer: false },
        { text: String.raw`Thể tích khi quay $y=x$ trên $[0;1]$ quanh $Ox$ bằng $\dfrac{\pi}{3}$.`, answer: true },
        { text: String.raw`Thể tích khi quay $y=\sqrt{x}$ trên $[0;1]$ quanh $Ox$ bằng $\pi$.`, answer: false },
      ],
      explanation: String.raw`Diện tích giữa $y=x$ và $y=x^2$ bằng $\dfrac16$, không phải $\dfrac13$; thể tích khi quay $y=\sqrt{x}$ trên $[0;1]$ bằng $\dfrac{\pi}{2}$.`,
    },
  ],

  shortAnswer: [
    {
      id: 'sa1',
      question: String.raw`Diện tích hình phẳng giới hạn bởi $y=x^2$, $Ox$, $x=0$, $x=2$ bằng $\dfrac{k}{3}$. Tìm $k$.`,
      answer: '8',
      unit: '',
      explanation: String.raw`$S=\displaystyle\int_0^2x^2\,\mathrm{d}x=\dfrac83$ nên $k=8$.`,
    },
    {
      id: 'sa2',
      question: String.raw`Diện tích hình phẳng giới hạn bởi $y=x$ và $y=x^2$ bằng $\dfrac{1}{k}$. Tìm $k$.`,
      answer: '6',
      unit: '',
      explanation: String.raw`$S=\displaystyle\int_0^1(x-x^2)\,\mathrm{d}x=\dfrac16$ nên $k=6$.`,
    },
    {
      id: 'sa3',
      question: String.raw`Thể tích khối tròn xoay khi quay $y=x$ trên $[0;2]$ quanh $Ox$ bằng $\dfrac{k\pi}{3}$. Tìm $k$.`,
      answer: '8',
      unit: '',
      explanation: String.raw`$V=\pi\displaystyle\int_0^2x^2\,\mathrm{d}x=\dfrac{8\pi}{3}$ nên $k=8$.`,
    },
    {
      id: 'sa4',
      question: String.raw`Diện tích hình phẳng giới hạn bởi $y=\cos x$, $Ox$, $x=0$, $x=\dfrac{\pi}{2}$ bằng bao nhiêu?`,
      answer: '1',
      unit: '',
      explanation: String.raw`$S=\displaystyle\int_0^{\pi/2}\cos x\,\mathrm{d}x=1$.`,
    },
  ],
}

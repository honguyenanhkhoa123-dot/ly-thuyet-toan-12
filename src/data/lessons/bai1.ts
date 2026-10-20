import type { Lesson } from '../types'

export const bai1: Lesson = {
  id: 'bai-1',
  chapterId: 'chuong-5',
  title: 'Tính đơn điệu và cực trị của hàm số',
  summary: 'Đồng biến, nghịch biến, dấu của đạo hàm và hai quy tắc tìm cực trị.',
  minutes: 25,

  theory: [
    {
      subtitle: 'Nhắc lại tính đồng biến, nghịch biến',
      content: String.raw`Cho hàm số $y=f(x)$ xác định trên khoảng, đoạn hoặc nửa khoảng $K$.

- Hàm số $y=f(x)$ gọi là **đồng biến** (tăng) trên $K$ nếu với mọi $x_1,x_2 \in K$, $x_1<x_2$ thì $f(x_1)<f(x_2)$.
- Hàm số $y=f(x)$ gọi là **nghịch biến** (giảm) trên $K$ nếu với mọi $x_1,x_2 \in K$, $x_1<x_2$ thì $f(x_1)>f(x_2)$.
- Hàm số đồng biến hay nghịch biến trên $K$ gọi chung là **đơn điệu** trên $K$.`,
      formula: String.raw`\forall x_1,x_2\in K,\; x_1<x_2 \Rightarrow f(x_1)<f(x_2) \quad \text{(đồng biến)}`,
      note: String.raw`Trên khoảng $K$, đồ thị hàm đồng biến đi lên từ trái sang phải; đồ thị hàm nghịch biến đi xuống từ trái sang phải.`,
    },
    {
      subtitle: 'Điều kiện đủ để hàm số đơn điệu',
      content: String.raw`Cho hàm số $y=f(x)$ có đạo hàm trên $K$.

- Nếu $f'(x)>0$ với mọi $x\in K$ thì hàm số đồng biến trên $K$.
- Nếu $f'(x)<0$ với mọi $x\in K$ thì hàm số nghịch biến trên $K$.`,
      formula: String.raw`f'(x)>0\;\forall x\in K \Rightarrow \text{đồng biến},\qquad f'(x)<0\;\forall x\in K \Rightarrow \text{nghịch biến}`,
      note: String.raw`Điều kiện đủ có thể nới rộng: nếu $f'(x)\ge 0$ (hoặc $\le 0$) trên $K$ và $f'(x)=0$ chỉ tại một số hữu hạn điểm thì kết luận về tính đơn điệu vẫn đúng.`,
    },
    {
      subtitle: 'Các bước xét tính đơn điệu',
      content: String.raw`**Bước 1.** Tìm tập xác định $D$ của hàm số.

**Bước 2.** Tính $f'(x)$. Tìm các điểm $x\in D$ mà tại đó $f'(x)=0$ hoặc $f'(x)$ không xác định.

**Bước 3.** Xét dấu $f'(x)$ và lập bảng biến thiên.

**Bước 4.** Kết luận các khoảng đồng biến, nghịch biến.

Ví dụ với $y=x^3-3x^2-9x+1$: $y'=3(x+1)(x-3)$, nên dấu của $y'$ đổi tại $x=-1$ và $x=3$ — đó cũng là hai điểm cực trị.`,
      note: String.raw`Khi đề bài không cho khoảng $K$, ta hiểu là xét tính đơn điệu trên tập xác định của hàm số.`,
    },
    {
      subtitle: 'Khái niệm cực trị của hàm số',
      content: String.raw`Cho hàm số $y=f(x)$ xác định trên tập hợp $D$ và $x_0\in D$.

- Nếu tồn tại khoảng $(a;b)$ chứa $x_0$ và $(a;b)\subset D$ sao cho $f(x)<f(x_0)$ với mọi $x\in(a;b)\setminus\{x_0\}$ thì $x_0$ được gọi là **điểm cực đại**, $f(x_0)$ gọi là **giá trị cực đại** của hàm số, kí hiệu $y_{CĐ}$.
- Nếu tồn tại khoảng $(a;b)$ chứa $x_0$ và $(a;b)\subset D$ sao cho $f(x)>f(x_0)$ với mọi $x\in(a;b)\setminus\{x_0\}$ thì $x_0$ được gọi là **điểm cực tiểu**, $f(x_0)$ gọi là **giá trị cực tiểu**, kí hiệu $y_{CT}$.`,
      formula: String.raw`y_{CĐ}=f(x_{CĐ}),\qquad y_{CT}=f(x_{CT})`,
      note: String.raw`Điểm $M\left(x_0;f(x_0)\right)$ gọi là **điểm cực trị của đồ thị**. Hàm số có thể đạt cực đại, cực tiểu tại nhiều điểm khác nhau trên $D$.`,
      figure: {
        kind: 'poly',
        fn: (x: number) => x ** 3 - 3 * x ** 2 + 2,
        domain: [-1.4, 3.4],
        yRange: [-3, 3],
        marks: [
          { x: 0, label: 'CĐ' },
          { x: 2, label: 'CT' },
        ],
        caption: 'Đồ thị y = x³ − 3x² + 2: cực đại tại x = 0, cực tiểu tại x = 2.',
      },
    },
    {
      subtitle: 'Điều kiện đủ để hàm số có cực trị',
      content: String.raw`Cho hàm số $y=f(x)$ liên tục trên khoảng $(a;b)$ chứa điểm $x_0$ và có đạo hàm trên các khoảng $(a;x_0)$ và $(x_0;b)$. Khi đó:

- Nếu $f'(x)<0$ với mọi $x\in(a;x_0)$ và $f'(x)>0$ với mọi $x\in(x_0;b)$ thì hàm số đạt **cực tiểu** tại $x_0$.
- Nếu $f'(x)>0$ với mọi $x\in(a;x_0)$ và $f'(x)<0$ với mọi $x\in(x_0;b)$ thì hàm số đạt **cực đại** tại $x_0$.`,
      formula: String.raw`f':\; -\to+ \Rightarrow \text{cực tiểu},\qquad f':\; +\to- \Rightarrow \text{cực đại}`,
      note: String.raw`Nếu $f'(x_0)=0$ nhưng $f'(x)$ **không đổi dấu** khi đi qua $x_0$ thì hàm số không có cực trị tại $x_0$. Điều kiện $f'(x_0)=0$ một mình chưa đủ.`,
    },
    {
      subtitle: 'Hai quy tắc tìm cực trị',
      content: String.raw`**Quy tắc 1 (dùng bảng biến thiên).**

1. Tìm tập xác định.
2. Tính $f'(x)$, tìm các điểm $x_i$ mà $f'(x_i)=0$ hoặc $f'(x_i)$ không xác định.
3. Lập bảng biến thiên.
4. Kết luận điểm cực đại, điểm cực tiểu và giá trị cực trị tương ứng.

**Quy tắc 2 (dùng đạo hàm cấp hai).** Áp dụng khi $f$ có đạo hàm cấp hai trên khoảng chứa các nghiệm của $f'(x)=0$.

1. Giải $f'(x)=0$, được các nghiệm $x_i$.
2. Tính $f''(x_i)$.
3. Nếu $f''(x_i)>0$ thì $x_i$ là điểm cực tiểu; nếu $f''(x_i)<0$ thì $x_i$ là điểm cực đại.`,
      formula: String.raw`f'(x_0)=0,\; f''(x_0)>0 \Rightarrow \text{cực tiểu};\qquad f'(x_0)=0,\; f''(x_0)<0 \Rightarrow \text{cực đại}`,
      note: String.raw`Khi $f''(x_i)=0$, quy tắc 2 không kết luận được — phải quay lại quy tắc 1 (xét dấu $f'$).`,
    },
  ],

  examples: [
    {
      id: 'vd1',
      title: 'Xét tính đơn điệu của hàm bậc hai',
      prompt: String.raw`Xét tính đơn điệu của hàm số $y=-2x^2+4x+3$.`,
      steps: [
        String.raw`Tập xác định: $D=\mathbb{R}$.`,
        String.raw`Đạo hàm: $y'=-4x+4$. Cho $y'=0 \iff x=1$.`,
        String.raw`Dấu của $y'$: dương trên $(-\infty;1)$, âm trên $(1;+\infty)$.`,
        String.raw`Kết luận: hàm số đồng biến trên $(-\infty;1)$ và nghịch biến trên $(1;+\infty)$.`,
      ],
      answer: String.raw`Đồng biến trên $(-\infty;1)$; nghịch biến trên $(1;+\infty)$; đạt cực đại tại $x=1$ với $y_{CĐ}=5$.`,
    },
    {
      id: 'vd2',
      title: 'Xét tính đơn điệu của hàm bậc ba',
      prompt: String.raw`Xét tính đơn điệu và tìm cực trị của hàm số $y=x^3-3x^2-9x+1$.`,
      steps: [
        String.raw`Tập xác định: $D=\mathbb{R}$.`,
        String.raw`$y'=3x^2-6x-9=3(x^2-2x-3)=3(x+1)(x-3)$. Phương trình $y'=0$ có hai nghiệm $x=-1$, $x=3$.`,
        String.raw`Dấu $y'$: dương trên $(-\infty;-1)$ và $(3;+\infty)$; âm trên $(-1;3)$.`,
        String.raw`Giá trị: $y(-1)=-1-3+9+1=6$; $y(3)=27-27-27+1=-26$.`,
        String.raw`Vì $y'$ đổi dấu từ $+$ sang $-$ tại $x=-1$ và từ $-$ sang $+$ tại $x=3$, hàm số đạt cực đại tại $x=-1$ và cực tiểu tại $x=3$.`,
      ],
      answer: String.raw`Đồng biến trên $(-\infty;-1)$ và $(3;+\infty)$; nghịch biến trên $(-1;3)$. Cực đại $y(-1)=6$; cực tiểu $y(3)=-26$.`,
    },
    {
      id: 'vd3',
      title: 'Hàm phân thức bậc nhất trên bậc nhất',
      prompt: String.raw`Xét tính đơn điệu của hàm số $y=\dfrac{2x-1}{x+2}$.`,
      steps: [
        String.raw`Tập xác định: $D=\mathbb{R}\setminus\{-2\}$.`,
        String.raw`$y'=\dfrac{2(x+2)-(2x-1)}{(x+2)^2}=\dfrac{5}{(x+2)^2}>0$ với mọi $x\ne -2$.`,
        String.raw`Vậy hàm số đồng biến trên từng khoảng $(-\infty;-2)$ và $(-2;+\infty)$.`,
      ],
      answer: String.raw`Đồng biến trên $(-\infty;-2)$ và $(-2;+\infty)$; hàm số không có cực trị.`,
    },
    {
      id: 'vd4',
      title: 'Tìm cực trị bằng quy tắc 2',
      prompt: String.raw`Tìm cực trị của hàm số $y=x^3-3x+2$.`,
      steps: [
        String.raw`$y'=3x^2-3=3(x-1)(x+1)$; $y'=0 \iff x=\pm 1$.`,
        String.raw`$y''=6x$. Suy ra $y''(-1)=-6<0$ và $y''(1)=6>0$.`,
        String.raw`Vậy $x=-1$ là điểm cực đại, $x=1$ là điểm cực tiểu.`,
        String.raw`Giá trị: $y(-1)=-1+3+2=4$; $y(1)=1-3+2=0$.`,
      ],
      answer: String.raw`Cực đại $y_{CĐ}=4$ tại $x=-1$; cực tiểu $y_{CT}=0$ tại $x=1$.`,
    },
    {
      id: 'vd5',
      title: 'Bài toán tham số',
      prompt: String.raw`Tìm $m$ để hàm số $y=x^3-3mx+1$ đồng biến trên $\mathbb{R}$.`,
      steps: [
        String.raw`$y'=3x^2-3m$. Hàm số đồng biến trên $\mathbb{R}$ khi và chỉ khi $y'\ge 0$ với mọi $x$.`,
        String.raw`Điều kiện tương đương $3x^2\ge 3m$ với mọi $x$, tức $m\le x^2$ với mọi $x\in\mathbb{R}$.`,
        String.raw`Vì $x^2\ge 0$ và giá trị nhỏ nhất của $x^2$ là $0$, nên $m\le 0$.`,
      ],
      answer: String.raw`$m\le 0$.`,
    },
  ],

  exercises: [
    {
      id: 'bt1',
      prompt: String.raw`Xét tính đơn điệu và tìm cực trị của hàm số $y=x^3-3x+2$.`,
      hint: String.raw`$y'=3(x-1)(x+1)$.`,
      solution: String.raw`$y'=3x^2-3=3(x-1)(x+1)$; $y'=0\iff x=\pm1$.

Dấu $y'$: dương trên $(-\infty;-1)\cup(1;+\infty)$, âm trên $(-1;1)$.

Hàm số đồng biến trên $(-\infty;-1)$ và $(1;+\infty)$, nghịch biến trên $(-1;1)$. Cực đại $y(-1)=4$; cực tiểu $y(1)=0$.`,
    },
    {
      id: 'bt2',
      prompt: String.raw`Xét tính đơn điệu và tìm cực trị của hàm số $y=-x^4+2x^2+3$.`,
      hint: String.raw`$y'=-4x(x-1)(x+1)$.`,
      solution: String.raw`$y'=-4x^3+4x=-4x(x-1)(x+1)$; $y'=0\iff x=0$ hoặc $x=\pm1$.

Dấu $y'$: âm trên $(-\infty;-1)$, dương trên $(-1;0)$, âm trên $(0;1)$, dương trên $(1;+\infty)$.

Hàm số đồng biến trên $(-1;0)$ và $(1;+\infty)$; nghịch biến trên $(-\infty;-1)$ và $(0;1)$. Cực đại $y(\pm1)=4$; cực tiểu $y(0)=3$.`,
    },
    {
      id: 'bt3',
      prompt: String.raw`Xét tính đơn điệu của hàm số $y=\dfrac{x+1}{x-2}$.`,
      hint: String.raw`Tính $y'$ bằng quy tắc đạo hàm thương.`,
      solution: String.raw`Tập xác định $D=\mathbb{R}\setminus\{2\}$.

$y'=\dfrac{(x-2)-(x+1)}{(x-2)^2}=\dfrac{-3}{(x-2)^2}<0$ với mọi $x\ne2$.

Hàm số nghịch biến trên $(-\infty;2)$ và $(2;+\infty)$; không có cực trị.`,
    },
    {
      id: 'bt4',
      prompt: String.raw`Tìm cực trị của hàm số $y=x+\dfrac{4}{x}$.`,
      hint: String.raw`$y'=1-\dfrac{4}{x^2}$.`,
      solution: String.raw`Tập xác định $D=\mathbb{R}\setminus\{0\}$.

$y'=1-\dfrac{4}{x^2}=\dfrac{x^2-4}{x^2}$; $y'=0\iff x=\pm2$.

Dấu $y'$: dương trên $(-\infty;-2)$, âm trên $(-2;0)$, âm trên $(0;2)$, dương trên $(2;+\infty)$.

Cực đại $y(-2)=-4$; cực tiểu $y(2)=4$. Hàm số đồng biến trên $(-\infty;-2)$ và $(2;+\infty)$; nghịch biến trên $(-2;0)$ và $(0;2)$.`,
    },
    {
      id: 'bt5',
      prompt: String.raw`Tìm cực trị của hàm số $y=x^3-6x^2+9x-2$.`,
      hint: String.raw`$y'=3(x-1)(x-3)$.`,
      solution: String.raw`$y'=3x^2-12x+9=3(x-1)(x-3)$; $y'=0\iff x=1$ hoặc $x=3$.

$y''=6x-12$; $y''(1)=-6<0$ nên $x=1$ là điểm cực đại; $y''(3)=6>0$ nên $x=3$ là điểm cực tiểu.

$y(1)=1-6+9-2=2$; $y(3)=27-54+27-2=-2$.`,
    },
    {
      id: 'bt6',
      prompt: String.raw`Tìm $m$ để hàm số $y=x^3-3x^2+(m+1)x$ đồng biến trên $\mathbb{R}$.`,
      hint: String.raw`Cần $y'=3x^2-6x+m+1\ge 0$ với mọi $x$; dùng điều kiện của tam thức bậc hai.`,
      solution: String.raw`$y'=3x^2-6x+m+1$. Yêu cầu $y'\ge0$ với mọi $x$ tương đương $\Delta'\le0$.

$\Delta'=9-3(m+1)=6-3m\le0\iff m\ge2$.`,
    },
  ],

  quiz: [
    {
      id: 'q1',
      question: String.raw`Hàm số $y=-x^3+3x^2-1$ đồng biến trên khoảng nào dưới đây?`,
      options: [String.raw`$(0;2)$`, String.raw`$(-\infty;0)$`, String.raw`$(2;+\infty)$`, String.raw`$(-\infty;+\infty)$`],
      answer: 0,
      explanation: String.raw`$y'=-3x^2+6x=-3x(x-2)>0\iff 0<x<2$.`,
    },
    {
      id: 'q2',
      question: String.raw`Số điểm cực trị của hàm số $y=x^4-2x^2+3$ là`,
      options: ['1', '2', '3', '4'],
      answer: 2,
      explanation: String.raw`$y'=4x^3-4x=4x(x^2-1)$ có ba nghiệm phân biệt và đổi dấu tại cả ba, nên có 3 điểm cực trị.`,
    },
    {
      id: 'q3',
      question: String.raw`Hàm số $y=\dfrac{x+1}{x-2}$ có tính chất nào sau đây?`,
      options: [
        String.raw`Nghịch biến trên $\mathbb{R}$`,
        String.raw`Đồng biến trên $(-\infty;2)$ và $(2;+\infty)$`,
        String.raw`Nghịch biến trên $(-\infty;2)$ và $(2;+\infty)$`,
        String.raw`Đồng biến trên $\mathbb{R}\setminus\{2\}$`,
      ],
      answer: 2,
      explanation: String.raw`$y'=\dfrac{-3}{(x-2)^2}<0$ trên từng khoảng xác định. Không được viết "nghịch biến trên $\mathbb{R}\setminus\{2\}$" vì hàm số gián đoạn tại $x=2$.`,
    },
    {
      id: 'q4',
      question: String.raw`Cho hàm số $y=f(x)$ có đạo hàm $f'(x)=(x-1)^2(x+2)$. Số điểm cực trị của hàm số là`,
      options: ['0', '1', '2', '3'],
      answer: 1,
      explanation: String.raw`$f'$ chỉ đổi dấu khi đi qua $x=-2$ (tại $x=1$ nghiệm kép nên không đổi dấu), do đó có đúng 1 điểm cực trị.`,
    },
    {
      id: 'q5',
      question: String.raw`Giá trị cực đại của hàm số $y=x^3-3x^2+2$ bằng`,
      options: ['$-2$', '0', '2', '4'],
      answer: 2,
      explanation: String.raw`$y'=3x(x-2)$; $y'$ đổi dấu từ $+$ sang $-$ tại $x=0$, nên $y_{CĐ}=y(0)=2$.`,
    },
    {
      id: 'q6',
      question: String.raw`Tìm tất cả giá trị của $m$ để hàm số $y=x^3-3mx+1$ đồng biến trên $\mathbb{R}$.`,
      options: [String.raw`$m\le 0$`, String.raw`$m\ge 0$`, String.raw`$m<0$`, String.raw`$m>0$`],
      answer: 0,
      explanation: String.raw`$y'=3x^2-3m\ge0\;\forall x\iff m\le x^2\;\forall x\iff m\le0$.`,
    },
    {
      id: 'q7',
      question: String.raw`Hàm số $y=-x^4+2x^2+1$ đạt cực tiểu tại`,
      options: [String.raw`$x=-1$`, String.raw`$x=0$`, String.raw`$x=1$`, String.raw`$x=\pm1$`],
      answer: 1,
      explanation: String.raw`$y'=-4x(x-1)(x+1)$. Dấu: $+$ trên $(-\infty;-1)$, $-$ trên $(-1;0)$, $+$ trên $(0;1)$, $-$ trên $(1;+\infty)$. Tại $x=0$, $y'$ đổi dấu từ $-$ sang $+$ nên $x=0$ là điểm cực tiểu; $y(0)=1$.`,
    },
    {
      id: 'q8',
      question: String.raw`Hàm số $y=x^3-3x^2+1$ nghịch biến trên khoảng nào?`,
      options: [String.raw`$(-\infty;0)$`, String.raw`$(0;2)$`, String.raw`$(2;+\infty)$`, String.raw`$(-\infty;+\infty)$`],
      answer: 1,
      explanation: String.raw`$y'=3x^2-6x=3x(x-2)<0\iff 0<x<2$.`,
    },
  ],

  trueFalse: [
    {
      id: 'tf1',
      stem: String.raw`Cho hàm số $y=f(x)$ có đạo hàm $f'(x)=x(x-1)(x+2)$.`,
      items: [
        { text: String.raw`Phương trình $f'(x)=0$ có ba nghiệm phân biệt.`, answer: true },
        { text: String.raw`Hàm số đạt cực đại tại $x=-2$.`, answer: false },
        { text: String.raw`Hàm số đạt cực tiểu tại $x=0$.`, answer: false },
        { text: String.raw`Hàm số có đúng hai điểm cực trị.`, answer: true },
      ],
      explanation: String.raw`Dấu $f'$: $-$ trên $(-\infty;-2)$, $+$ trên $(-2;0)$, $-$ trên $(0;1)$, $+$ trên $(1;+\infty)$. Vậy cực tiểu tại $x=-2$, cực đại tại $x=0$, cực tiểu tại $x=1$: ba điểm cực trị.`,
    },
    {
      id: 'tf2',
      stem: String.raw`Cho hàm số $y=\dfrac{x+1}{x-2}$.`,
      items: [
        { text: String.raw`Tập xác định là $D=\mathbb{R}\setminus\{2\}$.`, answer: true },
        { text: String.raw`$y'>0$ với mọi $x\ne2$.`, answer: false },
        { text: String.raw`Hàm số nghịch biến trên mỗi khoảng $(-\infty;2)$ và $(2;+\infty)$.`, answer: true },
        { text: String.raw`Hàm số có một điểm cực trị.`, answer: false },
      ],
      explanation: String.raw`$y'=\dfrac{-3}{(x-2)^2}<0$ nên hàm số nghịch biến trên từng khoảng xác định và không có cực trị.`,
    },
    {
      id: 'tf3',
      stem: String.raw`Cho hàm số $y=x^3-3x^2+2$.`,
      items: [
        { text: String.raw`$y'=3x^2-6x$.`, answer: true },
        { text: String.raw`Hàm số đồng biến trên khoảng $(0;2)$.`, answer: false },
        { text: String.raw`Giá trị cực đại bằng $2$.`, answer: true },
        { text: String.raw`Giá trị cực tiểu bằng $-2$.`, answer: true },
      ],
      explanation: String.raw`$y'=3x(x-2)$: dương trên $(-\infty;0)$ và $(2;+\infty)$, âm trên $(0;2)$. Cực đại $y(0)=2$; cực tiểu $y(2)=-2$.`,
    },
  ],

  shortAnswer: [
    {
      id: 'sa1',
      question: String.raw`Số khoảng đồng biến của hàm số $y=x^3-3x^2+1$ là bao nhiêu?`,
      answer: '2',
      unit: 'số khoảng',
      explanation: String.raw`$y'=3x(x-2)>0$ trên $(-\infty;0)$ và $(2;+\infty)$.`,
    },
    {
      id: 'sa2',
      question: String.raw`Giá trị cực tiểu của hàm số $y=x^3-3x+2$ bằng bao nhiêu?`,
      answer: '0',
      unit: 'giá trị',
      explanation: String.raw`Cực tiểu tại $x=1$: $y(1)=0$.`,
    },
    {
      id: 'sa3',
      question: String.raw`Số điểm cực trị của hàm số $y=x^4+2x^2-3$ là bao nhiêu?`,
      answer: '1',
      unit: 'số điểm',
      explanation: String.raw`$y'=4x^3+4x=4x(x^2+1)$ chỉ đổi dấu tại $x=0$ nên có 1 điểm cực trị.`,
    },
    {
      id: 'sa4',
      question: String.raw`Có bao nhiêu giá trị nguyên $m\in[-5;5]$ để hàm số $y=x^3-3mx+3$ đồng biến trên $\mathbb{R}$?`,
      answer: '6',
      unit: 'giá trị',
      explanation: String.raw`Cần $m\le0$: các giá trị $-5,-4,-3,-2,-1,0$ — tất cả 6 giá trị.`,
    },
  ],
}

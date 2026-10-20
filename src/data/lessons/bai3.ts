import type { Lesson } from '../types'

export const bai3: Lesson = {
  id: 'bai-3',
  chapterId: 'chuong-5',
  title: 'Đường tiệm cận của đồ thị hàm số',
  summary: 'Tiệm cận ngang, tiệm cận đứng và tiệm cận xiên của đồ thị.',
  minutes: 20,

  theory: [
    {
      subtitle: 'Đường tiệm cận ngang',
      content: String.raw`Cho hàm số $y=f(x)$ xác định trên một khoảng vô hạn.

Nếu $\lim\limits_{x\to+\infty} f(x)=y_0$ hoặc $\lim\limits_{x\to-\infty} f(x)=y_0$ thì đường thẳng $y=y_0$ được gọi là **đường tiệm cận ngang** của đồ thị hàm số.

Với hàm phân thức $y=\dfrac{P(x)}{Q(x)}$: nếu bậc của $P$ nhỏ hơn hoặc bằng bậc của $Q$ thì đồ thị có tiệm cận ngang. Cụ thể, khi bậc $P<$ bậc $Q$ thì tiệm cận ngang là $y=0$; khi bậc $P=$ bậc $Q$ thì tiệm cận ngang là $y=\dfrac{a}{b}$ với $a,b$ là hệ số của hạng tử bậc cao nhất ở tử và mẫu.`,
      formula: String.raw`\lim_{x\to\pm\infty} f(x)=y_0 \;\Longrightarrow\; y=y_0 \text{ là tiệm cận ngang}`,
      note: String.raw`Một đồ thị có thể có **nhiều nhất hai** tiệm cận ngang (ứng với $x\to+\infty$ và $x\to-\infty$), nhưng không bao giờ đồng thời có tiệm cận ngang và tiệm cận xiên.`,
    },
    {
      subtitle: 'Đường tiệm cận đứng',
      content: String.raw`Đường thẳng $x=x_0$ được gọi là **đường tiệm cận đứng** của đồ thị $y=f(x)$ nếu ít nhất một trong các giới hạn sau bằng $+\infty$ hoặc $-\infty$:
$$\lim_{x\to x_0^+} f(x),\quad \lim_{x\to x_0^-} f(x).$$

Với hàm phân thức $y=\dfrac{P(x)}{Q(x)}$: nếu $Q(x_0)=0$ và $P(x_0)\ne0$ thì $x=x_0$ là tiệm cận đứng.`,
      formula: String.raw`\lim_{x\to x_0^{\pm}} f(x)=\pm\infty \;\Longrightarrow\; x=x_0 \text{ là tiệm cận đứng}`,
      note: String.raw`Nếu $P(x_0)=Q(x_0)=0$ thì phải rút gọn phân thức trước khi kết luận. Ví dụ $y=\dfrac{x^2-1}{x-1}$ không có tiệm cận đứng $x=1$ vì rút gọn được $y=x+1$.`,
    },
    {
      subtitle: 'Đường tiệm cận xiên',
      content: String.raw`Đường thẳng $y=ax+b$ ($a\ne0$) là **đường tiệm cận xiên** của đồ thị $y=f(x)$ nếu
$$\lim_{x\to+\infty}\left[f(x)-(ax+b)\right]=0 \quad \text{hoặc} \quad \lim_{x\to-\infty}\left[f(x)-(ax+b)\right]=0.$$

Với hàm phân thức $y=\dfrac{P(x)}{Q(x)}$ có bậc $P$ lớn hơn bậc $Q$ đúng $1$ đơn vị, ta chia đa thức:
$$f(x)=ax+b+\dfrac{R(x)}{Q(x)},$$
khi đó $y=ax+b$ là tiệm cận xiên.`,
      formula: String.raw`f(x)-(ax+b)\to 0 \;\Longrightarrow\; y=ax+b \text{ là tiệm cận xiên}`,
      note: String.raw`Nếu bậc tử lớn hơn bậc mẫu từ $2$ trở lên thì đồ thị **không có** tiệm cận xiên.`,
    },
    {
      subtitle: 'Cách tìm nhanh với hàm phân thức',
      content: String.raw`Xét $y=\dfrac{P(x)}{Q(x)}$ với $P,Q$ là các đa thức:

- **Tiệm cận đứng:** giải $Q(x)=0$; loại các nghiệm mà tử cũng bằng $0$ sau khi rút gọn.
- **Tiệm cận ngang:** so sánh bậc của $P$ và $Q$ (bằng nhau → tỉ số hệ số đầu; bậc tử nhỏ hơn → $y=0$).
- **Tiệm cận xiên:** bậc tử hơn bậc mẫu đúng $1$ → thực hiện phép chia đa thức.

Ví dụ $y=\dfrac{2x-1}{x+1}$ có tiệm cận đứng $x=-1$ và tiệm cận ngang $y=2$.`,
      formula: String.raw`y=\frac{ax+b}{cx+d}\;\Rightarrow\; x=-\frac{d}{c},\quad y=\frac{a}{c}`,
      note: String.raw`Khi vẽ đồ thị, tiệm cận được biểu diễn bằng nét đứt và không thuộc đồ thị.`,
      figure: {
        kind: 'rational',
        fn: (x: number) => (2 * x - 1) / (x + 1),
        domain: [-6, 4],
        yRange: [-6, 8],
        va: [-1],
        ha: 2,
        caption: 'Đồ thị y = (2x − 1)/(x + 1) với tiệm cận đứng x = −1 và tiệm cận ngang y = 2.',
      },
    },
  ],

  examples: [
    {
      id: 'vd1',
      title: 'Hàm phân thức bậc nhất trên bậc nhất',
      prompt: String.raw`Tìm các đường tiệm cận của đồ thị hàm số $y=\dfrac{2x-1}{x+1}$.`,
      steps: [
        String.raw`Tập xác định: $D=\mathbb{R}\setminus\{-1\}$.`,
        String.raw`$\lim\limits_{x\to+\infty}\dfrac{2x-1}{x+1}=2$ và $\lim\limits_{x\to-\infty}\dfrac{2x-1}{x+1}=2$, nên $y=2$ là tiệm cận ngang.`,
        String.raw`$\lim\limits_{x\to(-1)^+}\dfrac{2x-1}{x+1}=-\infty$, nên $x=-1$ là tiệm cận đứng.`,
      ],
      answer: String.raw`Tiệm cận ngang $y=2$; tiệm cận đứng $x=-1$.`,
    },
    {
      id: 'vd2',
      title: 'Hàm phân thức có tiệm cận xiên',
      prompt: String.raw`Tìm các đường tiệm cận của đồ thị hàm số $y=\dfrac{x^2+x-1}{x-2}$.`,
      steps: [
        String.raw`Tập xác định: $D=\mathbb{R}\setminus\{2\}$.`,
        String.raw`Chia đa thức: $x^2+x-1=(x-2)(x+3)+5$, nên $y=x+3+\dfrac{5}{x-2}$.`,
        String.raw`Vì $\lim\limits_{x\to\pm\infty}\dfrac{5}{x-2}=0$, đường thẳng $y=x+3$ là tiệm cận xiên.`,
        String.raw`$\lim\limits_{x\to2^+}y=+\infty$ nên $x=2$ là tiệm cận đứng.`,
      ],
      answer: String.raw`Tiệm cận xiên $y=x+3$; tiệm cận đứng $x=2$.`,
    },
    {
      id: 'vd3',
      title: 'Hàm phân thức có hai tiệm cận đứng',
      prompt: String.raw`Tìm các đường tiệm cận của đồ thị hàm số $y=\dfrac{3x+1}{x^2-1}$.`,
      steps: [
        String.raw`$x^2-1=0\iff x=\pm1$; tử tại $x=\pm1$ đều khác $0$.`,
        String.raw`Vậy $x=1$ và $x=-1$ là hai tiệm cận đứng.`,
        String.raw`Bậc tử nhỏ hơn bậc mẫu nên $\lim\limits_{x\to\pm\infty}y=0$, suy ra $y=0$ là tiệm cận ngang.`,
      ],
      answer: String.raw`Tiệm cận đứng $x=\pm1$; tiệm cận ngang $y=0$.`,
    },
    {
      id: 'vd4',
      title: 'Tiệm cận ngang của hàm chứa căn',
      prompt: String.raw`Tìm tiệm cận ngang của đồ thị hàm số $y=\sqrt{x^2+4}-x$.`,
      steps: [
        String.raw`Khi $x\to+\infty$: nhân lượng liên hợp
$$y=\frac{(x^2+4)-x^2}{\sqrt{x^2+4}+x}=\frac{4}{\sqrt{x^2+4}+x}\to0.$$`,
        String.raw`Khi $x\to-\infty$: $\sqrt{x^2+4}-x\to+\infty$, không có giới hạn hữu hạn.`,
        String.raw`Vậy $y=0$ là tiệm cận ngang (ứng với $x\to+\infty$).`,
      ],
      answer: String.raw`Tiệm cận ngang $y=0$.`,
    },
    {
      id: 'vd5',
      title: 'Bài toán tham số',
      prompt: String.raw`Tìm $m$ để đồ thị hàm số $y=\dfrac{mx+1}{x-1}$ có tiệm cận ngang $y=2$.`,
      steps: [
        String.raw`Với $x\to\pm\infty$, $y\to m$.`,
        String.raw`Tiệm cận ngang là $y=m$, nên $m=2$.`,
      ],
      answer: String.raw`$m=2$.`,
    },
  ],

  exercises: [
    {
      id: 'bt1',
      prompt: String.raw`Tìm các đường tiệm cận của đồ thị hàm số $y=\dfrac{3x-2}{x+1}$.`,
      solution: String.raw`Tập xác định $\mathbb{R}\setminus\{-1\}$.

$\lim\limits_{x\to\pm\infty}y=3$ nên $y=3$ là tiệm cận ngang.

$\lim\limits_{x\to-1^+}y=-\infty$ nên $x=-1$ là tiệm cận đứng.`,
    },
    {
      id: 'bt2',
      prompt: String.raw`Tìm các đường tiệm cận của đồ thị hàm số $y=\dfrac{x^2-4}{x+1}$.`,
      hint: String.raw`Chia $x^2-4$ cho $x+1$.`,
      solution: String.raw`Tập xác định $\mathbb{R}\setminus\{-1\}$.

$x^2-4=(x+1)(x-1)-3$, nên $y=x-1-\dfrac{3}{x+1}$.

Vậy $y=x-1$ là tiệm cận xiên và $x=-1$ là tiệm cận đứng.`,
    },
    {
      id: 'bt3',
      prompt: String.raw`Tìm các đường tiệm cận của đồ thị hàm số $y=\dfrac{2x+1}{x^2+1}$.`,
      solution: String.raw`Mẫu $x^2+1>0$ với mọi $x$ nên đồ thị không có tiệm cận đứng.

Bậc tử nhỏ hơn bậc mẫu nên $y=0$ là tiệm cận ngang.`,
    },
    {
      id: 'bt4',
      prompt: String.raw`Tìm các đường tiệm cận của đồ thị hàm số $y=\dfrac{x^2+x+1}{x}$.`,
      hint: String.raw`Chia từng hạng tử cho $x$.`,
      solution: String.raw`Tập xác định $\mathbb{R}\setminus\{0\}$.

$y=x+1+\dfrac{1}{x}$.

Vậy $x=0$ là tiệm cận đứng và $y=x+1$ là tiệm cận xiên.`,
    },
    {
      id: 'bt5',
      prompt: String.raw`Tìm tiệm cận ngang của đồ thị hàm số $y=\sqrt{x^2+9}-x$.`,
      hint: String.raw`Nhân lượng liên hợp khi $x\to+\infty$.`,
      solution: String.raw`Với $x\to+\infty$:
$$y=\frac{9}{\sqrt{x^2+9}+x}\to0.$$

Với $x\to-\infty$, $y\to+\infty$ nên không có tiệm cận ngang theo hướng này.

Vậy $y=0$ là tiệm cận ngang.`,
    },
    {
      id: 'bt6',
      prompt: String.raw`Tìm $m$ để đồ thị hàm số $y=\dfrac{mx+2}{x-1}$ có tiệm cận ngang $y=-3$.`,
      solution: String.raw`Khi $x\to\pm\infty$, $y\to m$. Tiệm cận ngang là $y=m$.

Vậy $m=-3$.`,
    },
  ],

  quiz: [
    {
      id: 'q1',
      question: String.raw`Đường tiệm cận ngang của đồ thị hàm số $y=\dfrac{2x+1}{x-1}$ là`,
      options: [String.raw`$y=2$`, String.raw`$y=1$`, String.raw`$y=-1$`, String.raw`$x=1$`],
      answer: 0,
      explanation: String.raw`$\lim\limits_{x\to\pm\infty}\dfrac{2x+1}{x-1}=2$.`,
    },
    {
      id: 'q2',
      question: String.raw`Số đường tiệm cận đứng của đồ thị hàm số $y=\dfrac{x+3}{x^2-4}$ là`,
      options: ['0', '1', '2', '3'],
      answer: 2,
      explanation: String.raw`$x^2-4=0\iff x=\pm2$; tử khác $0$ tại cả hai điểm, nên có hai tiệm cận đứng.`,
    },
    {
      id: 'q3',
      question: String.raw`Đường tiệm cận xiên của đồ thị hàm số $y=\dfrac{x^2-3x+1}{x-2}$ là`,
      options: [String.raw`$y=x-1$`, String.raw`$y=x+1$`, String.raw`$y=x-2$`, String.raw`$y=x+3$`],
      answer: 0,
      explanation: String.raw`$x^2-3x+1=(x-2)(x-1)-1$, nên $y=x-1-\dfrac{1}{x-2}$. Tiệm cận xiên là $y=x-1$.`,
    },
    {
      id: 'q4',
      question: String.raw`Số đường tiệm cận của đồ thị hàm số $y=\dfrac{x^2+1}{x^2-1}$ là`,
      options: ['1', '2', '3', '4'],
      answer: 2,
      explanation: String.raw`Hai tiệm cận đứng $x=\pm1$ và một tiệm cận ngang $y=1$.`,
    },
    {
      id: 'q5',
      question: String.raw`Đồ thị hàm số $y=\sqrt{x^2+1}-x$ có tiệm cận ngang là`,
      options: [String.raw`$y=0$`, String.raw`$y=1$`, String.raw`$y=-1$`, String.raw`không có`],
      answer: 0,
      explanation: String.raw`Khi $x\to+\infty$, $y=\dfrac{1}{\sqrt{x^2+1}+x}\to0$.`,
    },
    {
      id: 'q6',
      question: String.raw`Tìm $m$ để đồ thị hàm số $y=\dfrac{mx-1}{2x+1}$ có tiệm cận ngang $y=\dfrac32$.`,
      options: ['1', '2', '3', '4'],
      answer: 2,
      explanation: String.raw`Tiệm cận ngang là $y=\dfrac{m}{2}$, nên $\dfrac{m}{2}=\dfrac32\iff m=3$.`,
    },
    {
      id: 'q7',
      question: String.raw`Đồ thị hàm số $y=\dfrac{x-1}{x+2}$ có bao nhiêu đường tiệm cận?`,
      options: ['0', '1', '2', '3'],
      answer: 2,
      explanation: String.raw`Tiệm cận đứng $x=-2$ và tiệm cận ngang $y=1$.`,
    },
    {
      id: 'q8',
      question: String.raw`Đồ thị hàm số $y=\dfrac{x^2-1}{x-1}$ có tiệm cận đứng là`,
      options: [String.raw`$x=1$`, String.raw`$x=-1$`, String.raw`$y=1$`, String.raw`không có tiệm cận đứng`],
      answer: 3,
      explanation: String.raw`Rút gọn: $y=x+1$ với $x\ne1$. Tại $x=1$ giới hạn hữu hạn (bằng $2$), nên $x=1$ không phải tiệm cận đứng.`,
    },
  ],

  trueFalse: [
    {
      id: 'tf1',
      stem: String.raw`Cho hàm số $y=\dfrac{2x+1}{x-1}$.`,
      items: [
        { text: String.raw`Đồ thị có tiệm cận ngang $y=2$.`, answer: true },
        { text: String.raw`Đồ thị có tiệm cận đứng $x=1$.`, answer: true },
        { text: String.raw`Đồ thị có tiệm cận ngang $y=1$.`, answer: false },
        { text: String.raw`Đồ thị có tiệm cận xiên.`, answer: false },
      ],
      explanation: String.raw`Bậc tử bằng bậc mẫu nên chỉ có tiệm cận ngang $y=2$ và tiệm cận đứng $x=1$.`,
    },
    {
      id: 'tf2',
      stem: String.raw`Cho hàm số $y=\dfrac{x^2-1}{x+2}$.`,
      items: [
        { text: String.raw`Đồ thị có tiệm cận đứng $x=-2$.`, answer: true },
        { text: String.raw`Đồ thị có tiệm cận xiên $y=x-2$.`, answer: true },
        { text: String.raw`Đồ thị có tiệm cận ngang $y=1$.`, answer: false },
        { text: String.raw`Đồ thị có đúng hai đường tiệm cận.`, answer: true },
      ],
      explanation: String.raw`$x^2-1=(x+2)(x-2)+3$, nên $y=x-2+\dfrac{3}{x+2}$. Có tiệm cận đứng $x=-2$ và tiệm cận xiên $y=x-2$.`,
    },
    {
      id: 'tf3',
      stem: String.raw`Cho hàm số $y=\dfrac{x+1}{x^2-1}$.`,
      items: [
        { text: String.raw`Tập xác định là $\mathbb{R}\setminus\{\pm1\}$.`, answer: true },
        { text: String.raw`Đường thẳng $x=1$ là tiệm cận đứng.`, answer: true },
        { text: String.raw`Đường thẳng $x=-1$ là tiệm cận đứng.`, answer: false },
        { text: String.raw`Đường thẳng $y=0$ là tiệm cận ngang.`, answer: true },
      ],
      explanation: String.raw`Rút gọn $y=\dfrac{1}{x-1}$ với $x\ne-1$. Tại $x=1$ có tiệm cận đứng; tại $x=-1$ chỉ là điểm khuyết, không phải tiệm cận. Bậc tử nhỏ hơn bậc mẫu sau rút gọn nên $y=0$ là tiệm cận ngang.`,
    },
  ],

  shortAnswer: [
    {
      id: 'sa1',
      question: String.raw`Đồ thị hàm số $y=\dfrac{2x-1}{x+3}$ có bao nhiêu đường tiệm cận?`,
      answer: '2',
      unit: 'số đường',
      explanation: String.raw`Một tiệm cận đứng $x=-3$ và một tiệm cận ngang $y=2$.`,
    },
    {
      id: 'sa2',
      question: String.raw`Tiệm cận ngang của đồ thị hàm số $y=\dfrac{1-3x}{x+2}$ là $y$ bằng bao nhiêu?`,
      answer: '-3',
      unit: 'giá trị',
      explanation: String.raw`Tỉ số hệ số bậc cao nhất: $\dfrac{-3}{1}=-3$.`,
    },
    {
      id: 'sa3',
      question: String.raw`Đồ thị hàm số $y=\dfrac{x+2}{x^2-9}$ có bao nhiêu đường tiệm cận đứng?`,
      answer: '2',
      unit: 'số đường',
      explanation: String.raw`$x^2-9=0\iff x=\pm3$, tử khác $0$ tại cả hai điểm.`,
    },
    {
      id: 'sa4',
      question: String.raw`Tìm $m$ để đồ thị hàm số $y=\dfrac{mx+1}{x+2}$ có tiệm cận ngang $y=3$.`,
      answer: '3',
      unit: 'giá trị',
      explanation: String.raw`Tiệm cận ngang $y=m$, nên $m=3$.`,
    },
  ],
}


import type { Lesson } from '../types'

export const chuong6Bai1: Lesson = {
  id: 'bai-1',
  chapterId: 'chuong-6',
  title: 'Nguyên hàm',
  summary: 'Định nghĩa, tính chất, bảng nguyên hàm cơ bản và nguyên hàm của hàm số hợp.',
  minutes: 26,

  theory: [
    {
      subtitle: 'Định nghĩa nguyên hàm',
      content: String.raw`Cho hàm số $f(x)$ xác định trên khoảng $K$. Hàm số $F(x)$ được gọi là **nguyên hàm** của $f(x)$ trên $K$ nếu
$$F'(x)=f(x),\quad \forall x\in K.$$

Nếu $F(x)$ là một nguyên hàm của $f(x)$ thì mọi nguyên hàm của $f(x)$ đều có dạng $F(x)+C$ với $C\in\mathbb{R}$. Ta viết
$$\int f(x)\,\mathrm{d}x=F(x)+C.$$`,
      formula: String.raw`\int f(x)\,\mathrm{d}x=F(x)+C`,
      note: String.raw`Hai nguyên hàm của cùng một hàm số sai khác nhau một hằng số.`,
    },
    {
      subtitle: 'Tính chất của nguyên hàm',
      content: String.raw`Với các hàm số có nguyên hàm, ta có:
$$\left(\int f(x)\,\mathrm{d}x\right)'=f(x);$$
$$\int kf(x)\,\mathrm{d}x=k\int f(x)\,\mathrm{d}x\quad(k\ne0);$$
$$\int\left[f(x)\pm g(x)\right]\mathrm{d}x=\int f(x)\,\mathrm{d}x\pm\int g(x)\,\mathrm{d}x.$$`,
      formula: String.raw`\int\left[f(x)\pm g(x)\right]\mathrm{d}x=\int f(x)\,\mathrm{d}x\pm\int g(x)\,\mathrm{d}x`,
      note: String.raw`Không có công thức nguyên hàm của tích hay thương theo kiểu tách riêng.`,
    },
    {
      subtitle: 'Bảng nguyên hàm cơ bản',
      content: String.raw`$$\int0\,\mathrm{d}x=C;\qquad \int1\,\mathrm{d}x=x+C;$$
$$\int x^\alpha\,\mathrm{d}x=\dfrac{x^{\alpha+1}}{\alpha+1}+C\quad(\alpha\ne-1);$$
$$\int\dfrac{1}{x^2}\,\mathrm{d}x=-\dfrac1x+C;\qquad \int\dfrac{1}{2\sqrt{x}}\,\mathrm{d}x=\sqrt{x}+C;$$
$$\int\dfrac1x\,\mathrm{d}x=\ln|x|+C;$$
$$\int\sin x\,\mathrm{d}x=-\cos x+C;\qquad \int\cos x\,\mathrm{d}x=\sin x+C;$$
$$\int\dfrac{1}{\cos^2x}\,\mathrm{d}x=\tan x+C;\qquad \int\dfrac{1}{\sin^2x}\,\mathrm{d}x=-\cot x+C;$$
$$\int e^x\,\mathrm{d}x=e^x+C;\qquad \int a^x\,\mathrm{d}x=\dfrac{a^x}{\ln a}+C.$$`,
      formula: String.raw`\int x^\alpha\,\mathrm{d}x=\dfrac{x^{\alpha+1}}{\alpha+1}+C`,
      note: String.raw`Nhớ trị tuyệt đối trong $\ln|x|$ và dấu trừ của $\int\sin x\,\mathrm{d}x$.`,
    },
    {
      subtitle: 'Nguyên hàm của hàm số hợp',
      content: String.raw`Với $a\ne0$ và các biểu thức xác định:
$$\int(ax+b)^\alpha\,\mathrm{d}x=\dfrac1a\cdot\dfrac{(ax+b)^{\alpha+1}}{\alpha+1}+C\quad(\alpha\ne-1);$$
$$\int\dfrac{1}{ax+b}\,\mathrm{d}x=\dfrac1a\ln|ax+b|+C;$$
$$\int\sin(ax+b)\,\mathrm{d}x=-\dfrac1a\cos(ax+b)+C;$$
$$\int\cos(ax+b)\,\mathrm{d}x=\dfrac1a\sin(ax+b)+C;$$
$$\int e^{ax+b}\,\mathrm{d}x=\dfrac1a e^{ax+b}+C.$$`,
      formula: String.raw`\int(ax+b)^\alpha\,\mathrm{d}x=\dfrac1a\cdot\dfrac{(ax+b)^{\alpha+1}}{\alpha+1}+C`,
      note: String.raw`Hệ số $\dfrac1a$ xuất hiện do đạo hàm hàm hợp.`,
    },
    {
      subtitle: 'Ý nghĩa vật lí',
      content: String.raw`- Nếu vật chuyển động có vận tốc $v(t)$ thì phương trình chuyển động là
$$s(t)=\int v(t)\,\mathrm{d}t.$$
- Nếu vật chuyển động có gia tốc $a(t)$ thì vận tốc là
$$v(t)=\int a(t)\,\mathrm{d}t.$$`,
      formula: String.raw`s(t)=\int v(t)\,\mathrm{d}t`,
      note: String.raw`Hằng số $C$ được xác định từ điều kiện ban đầu.`,
    },
  ],

  examples: [
    {
      id: 'vd1',
      title: 'Nguyên hàm của lũy thừa',
      prompt: String.raw`Tính $\displaystyle\int x^3\,\mathrm{d}x$.`,
      steps: [
        String.raw`Áp dụng $\displaystyle\int x^\alpha\,\mathrm{d}x=\dfrac{x^{\alpha+1}}{\alpha+1}+C$ với $\alpha=3$.`,
        String.raw`$\displaystyle\int x^3\,\mathrm{d}x=\dfrac{x^4}{4}+C$.`,
      ],
      answer: String.raw`$\dfrac{x^4}{4}+C$.`,
    },
    {
      id: 'vd2',
      title: 'Nguyên hàm của đa thức',
      prompt: String.raw`Tính $\displaystyle\int\left(3x^2-2x+1\right)\mathrm{d}x$.`,
      steps: [
        String.raw`Tách theo tính chất tuyến tính.`,
        String.raw`$=3\cdot\dfrac{x^3}{3}-2\cdot\dfrac{x^2}{2}+x+C$.`,
        String.raw`$=x^3-x^2+x+C$.`,
      ],
      answer: String.raw`$x^3-x^2+x+C$.`,
    },
    {
      id: 'vd3',
      title: 'Nguyên hàm có chứa ln',
      prompt: String.raw`Tính $\displaystyle\int\dfrac1x\,\mathrm{d}x$.`,
      steps: [
        String.raw`Dùng công thức $\displaystyle\int\dfrac1x\,\mathrm{d}x=\ln|x|+C$.`,
      ],
      answer: String.raw`$\ln|x|+C$.`,
    },
    {
      id: 'vd4',
      title: 'Nguyên hàm của hàm hợp',
      prompt: String.raw`Tính $\displaystyle\int\cos2x\,\mathrm{d}x$.`,
      steps: [
        String.raw`Áp dụng $\displaystyle\int\cos(ax+b)\,\mathrm{d}x=\dfrac1a\sin(ax+b)+C$ với $a=2$.`,
        String.raw`$=\dfrac12\sin2x+C$.`,
      ],
      answer: String.raw`$\dfrac12\sin2x+C$.`,
    },
    {
      id: 'vd5',
      title: 'Nguyên hàm của hàm mũ',
      prompt: String.raw`Tính $\displaystyle\int e^{3x}\,\mathrm{d}x$.`,
      steps: [
        String.raw`Áp dụng $\displaystyle\int e^{ax+b}\,\mathrm{d}x=\dfrac1a e^{ax+b}+C$ với $a=3$.`,
        String.raw`$=\dfrac13e^{3x}+C$.`,
      ],
      answer: String.raw`$\dfrac13e^{3x}+C$.`,
    },
  ],

  exercises: [
    {
      id: 'bt1',
      prompt: String.raw`Tính $\displaystyle\int x^5\,\mathrm{d}x$.`,
      solution: String.raw`$\displaystyle\int x^5\,\mathrm{d}x=\dfrac{x^6}{6}+C$.`,
    },
    {
      id: 'bt2',
      prompt: String.raw`Tính $\displaystyle\int(2x+3)\,\mathrm{d}x$.`,
      solution: String.raw`$\displaystyle\int(2x+3)\,\mathrm{d}x=x^2+3x+C$.`,
    },
    {
      id: 'bt3',
      prompt: String.raw`Tính $\displaystyle\int\sin x\,\mathrm{d}x$.`,
      solution: String.raw`$\displaystyle\int\sin x\,\mathrm{d}x=-\cos x+C$.`,
    },
    {
      id: 'bt4',
      prompt: String.raw`Tính $\displaystyle\int\dfrac{1}{x^2}\,\mathrm{d}x$.`,
      solution: String.raw`$\displaystyle\int x^{-2}\,\mathrm{d}x=\dfrac{x^{-1}}{-1}+C=-\dfrac1x+C$.`,
    },
    {
      id: 'bt5',
      prompt: String.raw`Tính $\displaystyle\int e^{2x}\,\mathrm{d}x$.`,
      solution: String.raw`$\displaystyle\int e^{2x}\,\mathrm{d}x=\dfrac12e^{2x}+C$.`,
    },
    {
      id: 'bt6',
      prompt: String.raw`Tính $\displaystyle\int(3x+1)^4\,\mathrm{d}x$.`,
      hint: String.raw`Dùng công thức nguyên hàm của $(ax+b)^\alpha$ với $a=3$, $\alpha=4$.`,
      solution: String.raw`$\displaystyle\int(3x+1)^4\,\mathrm{d}x=\dfrac13\cdot\dfrac{(3x+1)^5}{5}+C=\dfrac{(3x+1)^5}{15}+C$.`,
    },
  ],

  quiz: [
    {
      id: 'q1',
      question: String.raw`$F(x)$ là nguyên hàm của $f(x)$ trên $K$ khi`,
      options: [
        String.raw`$F'(x)=f(x)$ với mọi $x\in K$`,
        String.raw`$F(x)=f'(x)$ với mọi $x\in K$`,
        String.raw`$F(x)=f(x)+C$`,
        String.raw`$F'(x)=f'(x)$`,
      ],
      answer: 0,
      explanation: 'Định nghĩa nguyên hàm dựa trên đạo hàm của $F$.',
    },
    {
      id: 'q2',
      question: String.raw`Họ nguyên hàm của $f(x)$ được viết là`,
      options: [
        String.raw`$F(x)$`,
        String.raw`$F(x)+C$`,
        String.raw`$F'(x)+C$`,
        String.raw`$F(x)+x$`,
      ],
      answer: 1,
      explanation: 'Mọi nguyên hàm sai khác nhau một hằng số.',
    },
    {
      id: 'q3',
      question: String.raw`Với $\alpha\ne-1$, $\displaystyle\int x^\alpha\,\mathrm{d}x$ bằng`,
      options: [
        String.raw`$\dfrac{x^{\alpha+1}}{\alpha+1}+C$`,
        String.raw`$\alpha x^{\alpha-1}+C$`,
        String.raw`$\dfrac{x^\alpha}{\alpha}+C$`,
        String.raw`$x^{\alpha+1}+C$`,
      ],
      answer: 0,
      explanation: 'Công thức nguyên hàm của lũy thừa.',
    },
    {
      id: 'q4',
      question: String.raw`$\displaystyle\int\dfrac1x\,\mathrm{d}x$ bằng`,
      options: [
        String.raw`$\ln x+C$`,
        String.raw`$-\dfrac{1}{x^2}+C$`,
        String.raw`$\ln|x|+C$`,
        String.raw`$\dfrac{x^2}{2}+C$`,
      ],
      answer: 2,
      explanation: String.raw`Cần trị tuyệt đối: $\ln|x|+C$.`,
    },
    {
      id: 'q5',
      question: String.raw`$\displaystyle\int\cos x\,\mathrm{d}x$ bằng`,
      options: [
        String.raw`$-\sin x+C$`,
        String.raw`$\sin x+C$`,
        String.raw`$\cos x+C$`,
        String.raw`$-\cos x+C$`,
      ],
      answer: 1,
      explanation: String.raw`Đạo hàm của $\sin x$ là $\cos x$.`,
    },
    {
      id: 'q6',
      question: String.raw`$\displaystyle\int\sin x\,\mathrm{d}x$ bằng`,
      options: [
        String.raw`$\cos x+C$`,
        String.raw`$\sin x+C$`,
        String.raw`$-\sin x+C$`,
        String.raw`$-\cos x+C$`,
      ],
      answer: 3,
      explanation: String.raw`Đạo hàm của $-\cos x$ là $\sin x$.`,
    },
    {
      id: 'q7',
      question: String.raw`$\displaystyle\int e^x\,\mathrm{d}x$ bằng`,
      options: [
        String.raw`$e^x+C$`,
        String.raw`$\dfrac{e^{x+1}}{x+1}+C$`,
        String.raw`$xe^x+C$`,
        String.raw`$\dfrac{e^x}{x}+C$`,
      ],
      answer: 0,
      explanation: String.raw`Đạo hàm của $e^x$ là $e^x$.`,
    },
    {
      id: 'q8',
      question: String.raw`$\displaystyle\int e^{2x}\,\mathrm{d}x$ bằng`,
      options: [
        String.raw`$2e^{2x}+C$`,
        String.raw`$e^{2x}+C$`,
        String.raw`$\dfrac12e^{2x}+C$`,
        String.raw`$\dfrac{e^{2x}}{2x}+C$`,
      ],
      answer: 2,
      explanation: String.raw`Hệ số $\dfrac12$ do đạo hàm của $2x$ bằng $2$.`,
    },
  ],

  trueFalse: [
    {
      id: 'tf1',
      stem: 'Các khẳng định về nguyên hàm:',
      items: [
        { text: String.raw`Nếu $F'(x)=f(x)$ thì $F$ là một nguyên hàm của $f$.`, answer: true },
        { text: String.raw`Họ nguyên hàm của $f$ là $F(x)+C$.`, answer: true },
        { text: String.raw`$\displaystyle\int0\,\mathrm{d}x=0$.`, answer: false },
        { text: String.raw`$\displaystyle\int1\,\mathrm{d}x=x+C$.`, answer: true },
      ],
      explanation: String.raw`$\displaystyle\int0\,\mathrm{d}x=C$, không phải $0$.`,
    },
    {
      id: 'tf2',
      stem: 'Các công thức nguyên hàm:',
      items: [
        { text: String.raw`$\displaystyle\int x^2\,\mathrm{d}x=\dfrac{x^3}{3}+C$.`, answer: true },
        { text: String.raw`$\displaystyle\int\dfrac1x\,\mathrm{d}x=\ln x+C$.`, answer: false },
        { text: String.raw`$\displaystyle\int\cos x\,\mathrm{d}x=\sin x+C$.`, answer: true },
        { text: String.raw`$\displaystyle\int\sin x\,\mathrm{d}x=-\cos x+C$.`, answer: true },
      ],
      explanation: String.raw`Công thức đúng là $\displaystyle\int\dfrac1x\,\mathrm{d}x=\ln|x|+C$.`,
    },
    {
      id: 'tf3',
      stem: 'Các công thức nguyên hàm mở rộng:',
      items: [
        { text: String.raw`$\displaystyle\int e^x\,\mathrm{d}x=e^x+C$.`, answer: true },
        { text: String.raw`$\displaystyle\int a^x\,\mathrm{d}x=\dfrac{a^x}{\ln a}+C$.`, answer: true },
        { text: String.raw`$\displaystyle\int\dfrac{1}{\cos^2x}\,\mathrm{d}x=\tan x+C$.`, answer: true },
        { text: String.raw`$\displaystyle\int\dfrac{1}{\sin^2x}\,\mathrm{d}x=\tan x+C$.`, answer: false },
      ],
      explanation: String.raw`$\displaystyle\int\dfrac{1}{\sin^2x}\,\mathrm{d}x=-\cot x+C$.`,
    },
  ],

  shortAnswer: [
    {
      id: 'sa1',
      question: String.raw`Biết $\displaystyle\int x^2\,\mathrm{d}x=\dfrac{x^3}{k}+C$. Tìm $k$.`,
      answer: '3',
      unit: '',
      explanation: String.raw`$\displaystyle\int x^2\,\mathrm{d}x=\dfrac{x^3}{3}+C$ nên $k=3$.`,
    },
    {
      id: 'sa2',
      question: String.raw`Biết $\displaystyle\int\dfrac{1}{x^2}\,\mathrm{d}x=\dfrac{k}{x}+C$. Tìm $k$.`,
      answer: '-1',
      unit: '',
      explanation: String.raw`$\displaystyle\int x^{-2}\,\mathrm{d}x=-\dfrac1x+C$ nên $k=-1$.`,
    },
    {
      id: 'sa3',
      question: String.raw`Cho $F(x)=\sin x$ là một nguyên hàm của $f(x)$. Tính $F(0)$.`,
      answer: '0',
      unit: '',
      explanation: String.raw`$F(0)=\sin0=0$.`,
    },
    {
      id: 'sa4',
      question: String.raw`Cho $F(x)=e^x$ là một nguyên hàm của $f(x)$. Tính $F(0)$.`,
      answer: '1',
      unit: '',
      explanation: String.raw`$F(0)=e^0=1$.`,
    },
  ],
}

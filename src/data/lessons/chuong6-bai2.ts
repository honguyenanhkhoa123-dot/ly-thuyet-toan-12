import type { Lesson } from '../types'

export const chuong6Bai2: Lesson = {
  id: 'bai-2',
  chapterId: 'chuong-6',
  title: 'Tích phân',
  summary: 'Định nghĩa tích phân, tính chất và ý nghĩa vật lí của tích phân.',
  minutes: 26,

  theory: [
    {
      subtitle: 'Định nghĩa tích phân',
      content: String.raw`Cho hàm số $f(x)$ liên tục trên đoạn $[a;b]$. Gọi $F(x)$ là một nguyên hàm của $f(x)$ trên $[a;b]$. Hiệu số $F(b)-F(a)$ được gọi là **tích phân** từ $a$ đến $b$ của $f(x)$, kí hiệu
$$\int_a^b f(x)\,\mathrm{d}x=F(x)\Big|_a^b=F(b)-F(a).$$`,
      formula: String.raw`\int_a^b f(x)\,\mathrm{d}x=F(b)-F(a)`,
      note: String.raw`$a$ là cận dưới, $b$ là cận trên; kết quả là một số thực.`,
    },
    {
      subtitle: 'Tính chất của tích phân',
      content: String.raw`Với các hàm số liên tục trên các đoạn xét:
$$\int_a^a f(x)\,\mathrm{d}x=0;$$
$$\int_a^b f(x)\,\mathrm{d}x=-\int_b^a f(x)\,\mathrm{d}x;$$
$$\int_a^b kf(x)\,\mathrm{d}x=k\int_a^b f(x)\,\mathrm{d}x;$$
$$\int_a^b\left[f(x)\pm g(x)\right]\mathrm{d}x=\int_a^b f(x)\,\mathrm{d}x\pm\int_a^b g(x)\,\mathrm{d}x;$$
$$\int_a^b f(x)\,\mathrm{d}x=\int_a^c f(x)\,\mathrm{d}x+\int_c^b f(x)\,\mathrm{d}x.$$`,
      formula: String.raw`\int_a^b f(x)\,\mathrm{d}x=\int_a^c f(x)\,\mathrm{d}x+\int_c^b f(x)\,\mathrm{d}x`,
      note: String.raw`Tích phân không phụ thuộc vào tên biến: $\displaystyle\int_a^b f(x)\,\mathrm{d}x=\int_a^b f(t)\,\mathrm{d}t$.`,
    },
    {
      subtitle: 'Ý nghĩa vật lí của tích phân',
      content: String.raw`Một vật chuyển động dọc theo đường thẳng với vận tốc $v=v(t)$. Khi đó:

- Độ dịch chuyển trong khoảng thời gian từ $t_1$ đến $t_2$ là
$$\int_{t_1}^{t_2}v(t)\,\mathrm{d}t.$$
- Quãng đường đi được trong khoảng thời gian đó là
$$\int_{t_1}^{t_2}\left|v(t)\right|\mathrm{d}t.$$`,
      formula: String.raw`s=\int_{t_1}^{t_2}\left|v(t)\right|\mathrm{d}t`,
      note: String.raw`Độ dịch chuyển có thể âm; quãng đường luôn không âm.`,
    },
    {
      subtitle: 'Cách tính tích phân',
      content: String.raw`Bước 1. Tìm một nguyên hàm $F(x)$ của $f(x)$.

Bước 2. Tính $F(b)-F(a)$.

Ví dụ với $f(x)=x^2$: $F(x)=\dfrac{x^3}{3}$, do đó
$$\int_1^2x^2\,\mathrm{d}x=\dfrac{2^3}{3}-\dfrac{1^3}{3}=\dfrac73.$$`,
      formula: String.raw`\int_a^b f(x)\,\mathrm{d}x=F(b)-F(a)`,
      note: String.raw`Có thể chọn hằng số $C=0$ khi tính tích phân xác định.`,
    },
  ],

  examples: [
    {
      id: 'vd1',
      title: 'Tích phân của lũy thừa',
      prompt: String.raw`Tính $\displaystyle\int_0^1x^2\,\mathrm{d}x$.`,
      steps: [
        String.raw`Một nguyên hàm là $F(x)=\dfrac{x^3}{3}$.`,
        String.raw`$\displaystyle\int_0^1x^2\,\mathrm{d}x=\dfrac{1^3}{3}-\dfrac{0^3}{3}=\dfrac13$.`,
      ],
      answer: String.raw`$\dfrac13$.`,
    },
    {
      id: 'vd2',
      title: 'Tích phân của đa thức',
      prompt: String.raw`Tính $\displaystyle\int_1^2(2x+1)\,\mathrm{d}x$.`,
      steps: [
        String.raw`Nguyên hàm: $F(x)=x^2+x$.`,
        String.raw`$F(2)-F(1)=(4+2)-(1+1)=6-2=4$.`,
      ],
      answer: String.raw`$4$.`,
    },
    {
      id: 'vd3',
      title: 'Tích phân của sin',
      prompt: String.raw`Tính $\displaystyle\int_0^{\pi}\sin x\,\mathrm{d}x$.`,
      steps: [
        String.raw`Nguyên hàm của $\sin x$ là $-\cos x$.`,
        String.raw`$\left[-\cos x\right]_0^{\pi}=-\cos\pi+\cos0=1+1=2$.`,
      ],
      answer: String.raw`$2$.`,
    },
    {
      id: 'vd4',
      title: 'Tích phân của hàm mũ',
      prompt: String.raw`Tính $\displaystyle\int_0^1e^x\,\mathrm{d}x$.`,
      steps: [
        String.raw`Nguyên hàm của $e^x$ là $e^x$.`,
        String.raw`$\left[e^x\right]_0^1=e^1-e^0=e-1$.`,
      ],
      answer: String.raw`$e-1$.`,
    },
    {
      id: 'vd5',
      title: 'Dùng tính chất cộng đoạn',
      prompt: String.raw`Biết $\displaystyle\int_0^1f(x)\,\mathrm{d}x=2$ và $\displaystyle\int_1^3f(x)\,\mathrm{d}x=5$. Tính $\displaystyle\int_0^3f(x)\,\mathrm{d}x$.`,
      steps: [
        String.raw`$\displaystyle\int_0^3f(x)\,\mathrm{d}x=\int_0^1f(x)\,\mathrm{d}x+\int_1^3f(x)\,\mathrm{d}x$.`,
        String.raw`$=2+5=7$.`,
      ],
      answer: String.raw`$7$.`,
    },
  ],

  exercises: [
    {
      id: 'bt1',
      prompt: String.raw`Tính $\displaystyle\int_0^2x\,\mathrm{d}x$.`,
      solution: String.raw`$\left[\dfrac{x^2}{2}\right]_0^2=\dfrac42-0=2$.`,
    },
    {
      id: 'bt2',
      prompt: String.raw`Tính $\displaystyle\int_0^1(3x^2+1)\,\mathrm{d}x$.`,
      solution: String.raw`$\left[x^3+x\right]_0^1=(1+1)-0=2$.`,
    },
    {
      id: 'bt3',
      prompt: String.raw`Tính $\displaystyle\int_0^{\pi/2}\cos x\,\mathrm{d}x$.`,
      solution: String.raw`$\left[\sin x\right]_0^{\pi/2}=\sin\dfrac{\pi}{2}-\sin0=1$.`,
    },
    {
      id: 'bt4',
      prompt: String.raw`Tính $\displaystyle\int_1^2\dfrac1x\,\mathrm{d}x$.`,
      solution: String.raw`$\left[\ln|x|\right]_1^2=\ln2-\ln1=\ln2$.`,
    },
    {
      id: 'bt5',
      prompt: String.raw`Tính $\displaystyle\int_0^1e^{2x}\,\mathrm{d}x$.`,
      solution: String.raw`$\left[\dfrac12e^{2x}\right]_0^1=\dfrac12(e^2-1)$.`,
    },
    {
      id: 'bt6',
      prompt: String.raw`Biết $\displaystyle\int_0^2f(x)\,\mathrm{d}x=3$. Tính $\displaystyle\int_2^0f(x)\,\mathrm{d}x$.`,
      hint: String.raw`Dùng tính chất đổi cận.`,
      solution: String.raw`$\displaystyle\int_2^0f(x)\,\mathrm{d}x=-\int_0^2f(x)\,\mathrm{d}x=-3$.`,
    },
  ],

  quiz: [
    {
      id: 'q1',
      question: String.raw`$\displaystyle\int_a^a f(x)\,\mathrm{d}x$ bằng`,
      options: [
        String.raw`$1$`,
        String.raw`$a$`,
        String.raw`$0$`,
        String.raw`$f(a)$`,
      ],
      answer: 2,
      explanation: 'Tích phân có hai cận bằng nhau luôn bằng 0.',
    },
    {
      id: 'q2',
      question: String.raw`$\displaystyle\int_a^b f(x)\,\mathrm{d}x$ bằng`,
      options: [
        String.raw`$\displaystyle\int_b^a f(x)\,\mathrm{d}x$`,
        String.raw`$-\displaystyle\int_b^a f(x)\,\mathrm{d}x$`,
        String.raw`$2\displaystyle\int_b^a f(x)\,\mathrm{d}x$`,
        String.raw`$0$`,
      ],
      answer: 1,
      explanation: 'Đổi cận thì tích phân đổi dấu.',
    },
    {
      id: 'q3',
      question: String.raw`Với $k$ là hằng số, $\displaystyle\int_a^b kf(x)\,\mathrm{d}x$ bằng`,
      options: [
        String.raw`$k\displaystyle\int_a^b f(x)\,\mathrm{d}x$`,
        String.raw`$k+\displaystyle\int_a^b f(x)\,\mathrm{d}x$`,
        String.raw`$\displaystyle\int_a^b f(x)\,\mathrm{d}x$`,
        String.raw`$k^2\displaystyle\int_a^b f(x)\,\mathrm{d}x$`,
      ],
      answer: 0,
      explanation: 'Hằng số được đưa ra ngoài dấu tích phân.',
    },
    {
      id: 'q4',
      question: String.raw`$\displaystyle\int_0^1x\,\mathrm{d}x$ bằng`,
      options: [
        String.raw`$1$`,
        String.raw`$\dfrac12$`,
        String.raw`$0$`,
        String.raw`$2$`,
      ],
      answer: 1,
      explanation: String.raw`$\left[\dfrac{x^2}{2}\right]_0^1=\dfrac12$.`,
    },
    {
      id: 'q5',
      question: String.raw`$\displaystyle\int_0^1x^2\,\mathrm{d}x$ bằng`,
      options: [
        String.raw`$\dfrac13$`,
        String.raw`$1$`,
        String.raw`$\dfrac12$`,
        String.raw`$\dfrac14$`,
      ],
      answer: 0,
      explanation: String.raw`$\left[\dfrac{x^3}{3}\right]_0^1=\dfrac13$.`,
    },
    {
      id: 'q6',
      question: String.raw`$\displaystyle\int_0^{\pi}\sin x\,\mathrm{d}x$ bằng`,
      options: [
        String.raw`$0$`,
        String.raw`$1$`,
        String.raw`$2$`,
        String.raw`$-2$`,
      ],
      answer: 2,
      explanation: String.raw`$\left[-\cos x\right]_0^{\pi}=1+1=2$.`,
    },
    {
      id: 'q7',
      question: String.raw`$\displaystyle\int_0^1e^x\,\mathrm{d}x$ bằng`,
      options: [
        String.raw`$e$`,
        String.raw`$e-1$`,
        String.raw`$1-e$`,
        String.raw`$1$`,
      ],
      answer: 1,
      explanation: String.raw`$\left[e^x\right]_0^1=e-1$.`,
    },
    {
      id: 'q8',
      question: String.raw`Biết $\displaystyle\int_0^1f(x)\,\mathrm{d}x=2$ và $\displaystyle\int_1^2f(x)\,\mathrm{d}x=3$. Khi đó $\displaystyle\int_0^2f(x)\,\mathrm{d}x$ bằng`,
      options: [
        String.raw`$6$`,
        String.raw`$1$`,
        String.raw`$5$`,
        String.raw`$-1$`,
      ],
      answer: 2,
      explanation: String.raw`Cộng hai tích phân trên hai đoạn liền kề: $2+3=5$.`,
    },
  ],

  trueFalse: [
    {
      id: 'tf1',
      stem: 'Các tính chất của tích phân:',
      items: [
        { text: String.raw`$\displaystyle\int_a^a f(x)\,\mathrm{d}x=0$.`, answer: true },
        { text: String.raw`$\displaystyle\int_a^b f(x)\,\mathrm{d}x=-\int_b^a f(x)\,\mathrm{d}x$.`, answer: true },
        { text: String.raw`$\displaystyle\int_a^b kf(x)\,\mathrm{d}x=\int_a^b f(x)\,\mathrm{d}x$.`, answer: false },
        { text: String.raw`$\displaystyle\int_a^b f(x)\,\mathrm{d}x=\int_b^a f(x)\,\mathrm{d}x$.`, answer: false },
      ],
      explanation: String.raw`Hằng số $k$ phải được giữ lại: $\displaystyle\int_a^b kf(x)\,\mathrm{d}x=k\int_a^b f(x)\,\mathrm{d}x$; đổi cận phải đổi dấu tích phân.`,
    },
    {
      id: 'tf2',
      stem: 'Các giá trị tích phân:',
      items: [
        { text: String.raw`$\displaystyle\int_0^1x\,\mathrm{d}x=\dfrac12$.`, answer: true },
        { text: String.raw`$\displaystyle\int_0^1x^2\,\mathrm{d}x=\dfrac12$.`, answer: false },
        { text: String.raw`$\displaystyle\int_1^2\dfrac1x\,\mathrm{d}x=\ln2$.`, answer: true },
        { text: String.raw`$\displaystyle\int_0^{\pi}\sin x\,\mathrm{d}x=0$.`, answer: false },
      ],
      explanation: String.raw`$\displaystyle\int_0^1x^2\,\mathrm{d}x=\dfrac13$, không phải $\dfrac12$; $\displaystyle\int_0^{\pi}\sin x\,\mathrm{d}x=2$.`,
    },
    {
      id: 'tf3',
      stem: 'Các khẳng định về ý nghĩa vật lí:',
      items: [
        { text: String.raw`Độ dịch chuyển bằng $\displaystyle\int_{t_1}^{t_2}v(t)\,\mathrm{d}t$.`, answer: true },
        { text: String.raw`Quãng đường bằng $\displaystyle\int_{t_1}^{t_2}\left|v(t)\right|\mathrm{d}t$.`, answer: true },
        { text: String.raw`Quãng đường có thể âm.`, answer: false },
        { text: String.raw`Độ dịch chuyển luôn dương.`, answer: false },
      ],
      explanation: String.raw`Quãng đường là $\displaystyle\int_{t_1}^{t_2}\left|v(t)\right|\mathrm{d}t\ge0$ nên không thể âm; độ dịch chuyển có thể âm.`,
    },
  ],

  shortAnswer: [
    {
      id: 'sa1',
      question: String.raw`Tính $\displaystyle\int_0^2x\,\mathrm{d}x$.`,
      answer: '2',
      unit: '',
      explanation: String.raw`$\left[\dfrac{x^2}{2}\right]_0^2=2$.`,
    },
    {
      id: 'sa2',
      question: String.raw`Tính $\displaystyle\int_0^1(2x+1)\,\mathrm{d}x$.`,
      answer: '2',
      unit: '',
      explanation: String.raw`$\left[x^2+x\right]_0^1=2$.`,
    },
    {
      id: 'sa3',
      question: String.raw`Biết $\displaystyle\int_0^1f(x)\,\mathrm{d}x=4$. Tính $\displaystyle\int_1^0f(x)\,\mathrm{d}x$.`,
      answer: '-4',
      unit: '',
      explanation: 'Đổi cận đổi dấu.',
    },
    {
      id: 'sa4',
      question: String.raw`Tính $\displaystyle\int_0^{\pi/2}\cos x\,\mathrm{d}x$.`,
      answer: '1',
      unit: '',
      explanation: String.raw`$\left[\sin x\right]_0^{\pi/2}=1$.`,
    },
  ],
}

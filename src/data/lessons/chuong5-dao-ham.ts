import type { Lesson } from '../types'

export const chuong5DaoHam: Lesson = {
  id: 'dao-ham',
  chapterId: 'chuong-5',
  title: 'Đạo hàm',
  summary: 'Định nghĩa đạo hàm, quy tắc tính và bảng đạo hàm của các hàm số thường gặp.',
  minutes: 24,

  theory: [
    {
      subtitle: 'Bảng đạo hàm các hàm số thường gặp',
      content: String.raw`Đạo hàm của hàm số sơ cấp cơ bản và hàm hợp tương ứng:

| Hàm sơ cấp | Hàm hợp |
| --- | --- |
| $(C)'=0$ | |
| $(x)'=1$ | |
| $(x^\alpha)'=\alpha x^{\alpha-1}$ | $(u^\alpha)'=\alpha u^{\alpha-1}u'$ |
| $(\sqrt{x})'=\dfrac{1}{2\sqrt{x}}$ | $(\sqrt{u})'=\dfrac{u'}{2\sqrt{u}}$ |
| $\left(\dfrac{1}{x}\right)'=-\dfrac{1}{x^2}$ | $\left(\dfrac{1}{u}\right)'=-\dfrac{u'}{u^2}$ |
| $(\sin x)'=\cos x$ | $(\sin u)'=u'\cos u$ |
| $(\cos x)'=-\sin x$ | $(\cos u)'=-u'\sin u$ |
| $(\tan x)'=\dfrac{1}{\cos^2x}$ | $(\tan u)'=\dfrac{u'}{\cos^2u}$ |
| $(\cot x)'=-\dfrac{1}{\sin^2x}$ | $(\cot u)'=-\dfrac{u'}{\sin^2u}$ |
| $(a^x)'=a^x\ln a$ | $(a^u)'=u'a^u\ln a$ |
| $(e^x)'=e^x$ | $(e^u)'=u'e^u$ |
| $(\log_ax)'=\dfrac{1}{x\ln a}$ | $(\log_au)'=\dfrac{u'}{u\ln a}$ |
| $(\ln x)'=\dfrac{1}{x}$ | $(\ln u)'=\dfrac{u'}{u}$ |`,
      formula: String.raw`\left(\frac{ax+b}{cx+d}\right)'=\frac{ad-bc}{(cx+d)^2},\qquad \left(\frac{ax^2+bx+c}{dx+e}\right)'=\frac{adx^2+2aex+be-cd}{(dx+e)^2}`,
      note: String.raw`Với hàm hợp $u=u(x)$, các công thức được áp dụng theo quy tắc đạo hàm của hàm hợp.`,
    },
    {
      subtitle: 'Quy tắc tính đạo hàm',
      content: String.raw`Với $u=u(x)$, $v=v(x)$ là các hàm số có đạo hàm và $k$ là hằng số:

- $(u\pm v)'=u'\pm v'$.
- $(ku)'=ku'$.
- $(uv)'=u'v+uv'$.
- $\left(\dfrac{u}{v}\right)'=\dfrac{u'v-uv'}{v^2}$ với $v\ne0$.
- Đạo hàm của hàm hợp: $\bigl[f(u(x))\bigr]'=u'(x)\cdot f'(u(x))$.`,
      formula: String.raw`(uv)'=u'v+uv',\qquad \left(\frac uv\right)'=\frac{u'v-uv'}{v^2}`,
      note: String.raw`Khi tính đạo hàm của hàm hợp, cần xác định rõ hàm trong và hàm ngoài, sau đó nhân thêm đạo hàm của hàm trong.`,
    },
    {
      subtitle: 'Ý nghĩa vật lí của đạo hàm',
      content: String.raw`Một vật chuyển động có phương trình quãng đường $s=s(t)$ theo thời gian $t$. Khi đó:

- Vận tốc tức thời của vật là $v(t)=s'(t)$.
- Gia tốc tức thời của vật là $a(t)=v'(t)=s''(t)$.

Điện lượng $Q=Q(t)$ truyền trong dây dẫn là một hàm số theo thời gian $t$. Cường độ tức thời của dòng điện là $I(t)=Q'(t)$.`,
      formula: String.raw`v(t)=s'(t),\qquad a(t)=v'(t)=s''(t),\qquad I(t)=Q'(t)`,
      note: String.raw`Đạo hàm biểu diễn tốc độ thay đổi tức thời của một đại lượng theo biến số.`,
    },
    {
      subtitle: 'Ý nghĩa hình học và phương trình tiếp tuyến',
      content: String.raw`Phương trình tiếp tuyến của đồ thị hàm số $(C):\ y=f(x)$ tại điểm $M(x_0;y_0)$ thuộc $(C)$ là
$$y=f'(x_0)(x-x_0)+y_0,$$
trong đó $f'(x_0)$ là hệ số góc của tiếp tuyến tại $M$.

Muốn viết phương trình tiếp tuyến, ta cần xác định ba yếu tố: hoành độ tiếp điểm $x_0$, tung độ tiếp điểm $y_0=f(x_0)$ và hệ số góc $k=f'(x_0)$.`,
      formula: String.raw`y=f'(x_0)(x-x_0)+y_0`,
      note: String.raw`Nếu tiếp tuyến song song hoặc trùng với đường thẳng $y=ax+b$ thì $f'(x_0)=a$.`,
    },
  ],

  examples: [
    {
      id: 'vd1',
      title: 'Đạo hàm của đa thức',
      prompt: String.raw`Tính đạo hàm của hàm số $y=x^3-3x^2+2x-1$.`,
      steps: [
        String.raw`Áp dụng quy tắc đạo hàm của tổng, hiệu: $y'=(x^3)'-(3x^2)'+(2x)'-(1)'$.`,
        String.raw`$(x^3)'=3x^2$; $(3x^2)'=3\cdot2x=6x$; $(2x)'=2$; $(1)'=0$.`,
        String.raw`Vậy $y'=3x^2-6x+2$.`,
      ],
      answer: String.raw`$y'=3x^2-6x+2$.`,
    },
    {
      id: 'vd2',
      title: 'Đạo hàm của hàm phân thức',
      prompt: String.raw`Tính đạo hàm của hàm số $y=\dfrac{2x+1}{x-1}$.`,
      steps: [
        String.raw`Áp dụng quy tắc đạo hàm của thương với $u=2x+1$, $v=x-1$.`,
        String.raw`$u'=2$, $v'=1$, nên $y'=\dfrac{2(x-1)-(2x+1)\cdot1}{(x-1)^2}$.`,
        String.raw`Rút gọn tử: $2x-2-2x-1=-3$. Vậy $y'=\dfrac{-3}{(x-1)^2}$.`,
      ],
      answer: String.raw`$y'=-\dfrac{3}{(x-1)^2}$.`,
    },
    {
      id: 'vd3',
      title: 'Đạo hàm của hàm căn thức',
      prompt: String.raw`Tính đạo hàm của hàm số $y=\sqrt{3x+1}$.`,
      steps: [
        String.raw`Đặt $u=3x+1$ thì $y=\sqrt{u}$ và $u'=3$.`,
        String.raw`Áp dụng $(\sqrt{u})'=\dfrac{u'}{2\sqrt{u}}$: $y'=\dfrac{3}{2\sqrt{3x+1}}$.`,
      ],
      answer: String.raw`$y'=\dfrac{3}{2\sqrt{3x+1}}$.`,
    },
    {
      id: 'vd4',
      title: 'Đạo hàm của hàm hợp lượng giác',
      prompt: String.raw`Tính đạo hàm của hàm số $y=\sin2x$.`,
      steps: [
        String.raw`Đặt $u=2x$ thì $y=\sin u$ và $u'=2$.`,
        String.raw`Áp dụng $(\sin u)'=u'\cos u$: $y'=2\cos2x$.`,
      ],
      answer: String.raw`$y'=2\cos2x$.`,
    },
    {
      id: 'vd5',
      title: 'Viết phương trình tiếp tuyến',
      prompt: String.raw`Viết phương trình tiếp tuyến của đồ thị hàm số $y=x^2-3x+2$ tại điểm $M(2;0)$.`,
      steps: [
        String.raw`Ta có $y'=2x-3$, nên hệ số góc của tiếp tuyến tại $x_0=2$ là $k=y'(2)=2\cdot2-3=1$.`,
        String.raw`Tung độ tiếp điểm: $y_0=2^2-3\cdot2+2=0$, đúng với $M(2;0)$.`,
        String.raw`Phương trình tiếp tuyến: $y=1(x-2)+0$, tức $y=x-2$.`,
      ],
      answer: String.raw`$y=x-2$.`,
    },
  ],

  exercises: [
    {
      id: 'bt1',
      prompt: String.raw`Tính đạo hàm của hàm số $y=2x^4-x^2+3$.`,
      solution: String.raw`$y'=2\cdot4x^3-2x+0=8x^3-2x$.`,
    },
    {
      id: 'bt2',
      prompt: String.raw`Tính đạo hàm của hàm số $y=\dfrac{3x-1}{x+2}$.`,
      hint: String.raw`Áp dụng quy tắc đạo hàm của thương.`,
      solution: String.raw`$y'=\dfrac{3(x+2)-(3x-1)\cdot1}{(x+2)^2}=\dfrac{3x+6-3x+1}{(x+2)^2}=\dfrac{7}{(x+2)^2}$.`,
    },
    {
      id: 'bt3',
      prompt: String.raw`Tính đạo hàm của hàm số $y=(2x^2+1)^3$.`,
      hint: String.raw`Đặt $u=2x^2+1$ và dùng $(u^\alpha)'=\alpha u^{\alpha-1}u'$.`,
      solution: String.raw`Đặt $u=2x^2+1$, $u'=4x$. Khi đó
$$y'=3u^2\cdot u'=3(2x^2+1)^2\cdot4x=12x(2x^2+1)^2.$$`,
    },
    {
      id: 'bt4',
      prompt: String.raw`Tính đạo hàm của hàm số $y=\ln(2x+1)$.`,
      hint: String.raw`Đặt $u=2x+1$ và dùng $(\ln u)'=\dfrac{u'}{u}$.`,
      solution: String.raw`$y'=\dfrac{(2x+1)'}{2x+1}=\dfrac{2}{2x+1}$.`,
    },
    {
      id: 'bt5',
      prompt: String.raw`Tính đạo hàm của hàm số $y=e^{x^2}$.`,
      hint: String.raw`Đặt $u=x^2$ và dùng $(e^u)'=u'e^u$.`,
      solution: String.raw`$y'=(x^2)'e^{x^2}=2xe^{x^2}$.`,
    },
    {
      id: 'bt6',
      prompt: String.raw`Viết phương trình tiếp tuyến của đồ thị hàm số $y=x^3-3x+1$ tại điểm có hoành độ $x=1$.`,
      hint: String.raw`Tính $y(1)$ và $y'(1)$ trước.`,
      solution: String.raw`Ta có $y(1)=1-3+1=-1$ và $y'=3x^2-3$, nên $y'(1)=0$.

Phương trình tiếp tuyến: $y=0(x-1)-1$, tức $y=-1$.`,
    },
  ],

  quiz: [
    {
      id: 'q1',
      question: String.raw`Đạo hàm của hàm số $y=x^5$ là`,
      options: [String.raw`$x^4$`, String.raw`$5x^5$`, String.raw`$5x^4$`, String.raw`$4x^5$`],
      answer: 2,
      explanation: String.raw`$(x^\alpha)'=\alpha x^{\alpha-1}$ nên $(x^5)'=5x^4$.`,
    },
    {
      id: 'q2',
      question: String.raw`Đạo hàm của hàm số $y=\sqrt{x}$ là`,
      options: [String.raw`$\dfrac{1}{\sqrt{x}}$`, String.raw`$\dfrac{1}{2\sqrt{x}}$`, String.raw`$2\sqrt{x}$`, String.raw`$-\dfrac{1}{2\sqrt{x}}$`],
      answer: 1,
      explanation: String.raw`$(\sqrt{x})'=\dfrac{1}{2\sqrt{x}}$.`,
    },
    {
      id: 'q3',
      question: String.raw`Đạo hàm của hàm số $y=\dfrac1x$ là`,
      options: [String.raw`$\dfrac{1}{x^2}$`, String.raw`$-\dfrac{1}{x}$`, String.raw`$\ln x$`, String.raw`$-\dfrac{1}{x^2}$`],
      answer: 3,
      explanation: String.raw`$\left(\dfrac1x\right)'=-\dfrac{1}{x^2}$.`,
    },
    {
      id: 'q4',
      question: String.raw`Đạo hàm của hàm số $y=\sin x$ là`,
      options: [String.raw`$-\cos x$`, String.raw`$\cos x$`, String.raw`$\sin x$`, String.raw`$-\sin x$`],
      answer: 1,
      explanation: String.raw`$(\sin x)'=\cos x$.`,
    },
    {
      id: 'q5',
      question: String.raw`Đạo hàm của hàm số $y=e^x$ là`,
      options: [String.raw`$xe^{x-1}$`, String.raw`$e^x\ln x$`, String.raw`$e^x$`, String.raw`$\dfrac{e^x}{x}$`],
      answer: 2,
      explanation: String.raw`$(e^x)'=e^x$.`,
    },
    {
      id: 'q6',
      question: String.raw`Đạo hàm của hàm số $y=\ln x$ là`,
      options: [String.raw`$\ln x$`, String.raw`$x$`, String.raw`$\dfrac{1}{x\ln10}$`, String.raw`$\dfrac1x$`],
      answer: 3,
      explanation: String.raw`$(\ln x)'=\dfrac1x$.`,
    },
    {
      id: 'q7',
      question: String.raw`Đạo hàm của hàm số $y=\dfrac{3x+1}{x-1}$ là`,
      options: [String.raw`$\dfrac{4}{(x-1)^2}$`, String.raw`$\dfrac{-2}{(x-1)^2}$`, String.raw`$\dfrac{-4}{(x-1)^2}$`, String.raw`$\dfrac{3}{(x-1)^2}$`],
      answer: 2,
      explanation: String.raw`$y'=\dfrac{3(x-1)-(3x+1)}{(x-1)^2}=\dfrac{-4}{(x-1)^2}$.`,
    },
    {
      id: 'q8',
      question: String.raw`Hệ số góc của tiếp tuyến với đồ thị hàm số $y=x^2$ tại điểm có hoành độ $x=1$ là`,
      options: ['1', '3', '4', '2'],
      answer: 3,
      explanation: String.raw`$y'=2x$, nên hệ số góc tại $x=1$ là $y'(1)=2$.`,
    },
  ],

  trueFalse: [
    {
      id: 'tf1',
      stem: String.raw`Cho hàm số $y=x^3-3x$.`,
      items: [
        { text: String.raw`$y'=3x^2-3$.`, answer: true },
        { text: String.raw`$y'(0)=-3$.`, answer: true },
        { text: String.raw`$y'(1)=0$.`, answer: true },
        { text: String.raw`$y'(-1)=1$.`, answer: false },
      ],
      explanation: String.raw`$y'=3x^2-3$. Do đó $y'(0)=-3$, $y'(1)=0$ và $y'(-1)=0$.`,
    },
    {
      id: 'tf2',
      stem: String.raw`Cho hàm số $y=\sqrt{2x+1}$.`,
      items: [
        { text: String.raw`$y'=\dfrac{1}{\sqrt{2x+1}}$.`, answer: true },
        { text: String.raw`$y'(0)=1$.`, answer: true },
        { text: String.raw`$y'(4)=\dfrac13$.`, answer: true },
        { text: String.raw`$y'=\dfrac{2}{\sqrt{2x+1}}$.`, answer: false },
      ],
      explanation: String.raw`$y'=\dfrac{(2x+1)'}{2\sqrt{2x+1}}=\dfrac{2}{2\sqrt{2x+1}}=\dfrac{1}{\sqrt{2x+1}}$. Suy ra $y'(0)=1$ và $y'(4)=\dfrac13$.`,
    },
    {
      id: 'tf3',
      stem: String.raw`Cho hàm số $y=\sin x$.`,
      items: [
        { text: String.raw`$y'=\cos x$.`, answer: true },
        { text: String.raw`$y'(0)=1$.`, answer: true },
        { text: String.raw`$y'\left(\dfrac{\pi}{2}\right)=0$.`, answer: true },
        { text: String.raw`$y'(\pi)=1$.`, answer: false },
      ],
      explanation: String.raw`$y'=\cos x$, nên $y'(0)=1$, $y'\left(\dfrac{\pi}{2}\right)=0$ và $y'(\pi)=-1$.`,
    },
  ],

  shortAnswer: [
    {
      id: 'sa1',
      question: String.raw`Cho $y=x^4$. Giá trị $y'(1)$ bằng bao nhiêu?`,
      answer: '4',
      unit: 'giá trị',
      explanation: String.raw`$y'=4x^3$, nên $y'(1)=4$.`,
    },
    {
      id: 'sa2',
      question: String.raw`Cho $y=\dfrac1x$. Giá trị $y'(-1)$ bằng bao nhiêu?`,
      answer: '-1',
      unit: 'giá trị',
      explanation: String.raw`$y'=-\dfrac{1}{x^2}$, nên $y'(-1)=-1$.`,
    },
    {
      id: 'sa3',
      question: String.raw`Cho $y=e^x$. Giá trị $y'(0)$ bằng bao nhiêu?`,
      answer: '1',
      unit: 'giá trị',
      explanation: String.raw`$y'=e^x$, nên $y'(0)=e^0=1$.`,
    },
    {
      id: 'sa4',
      question: String.raw`Hệ số góc tiếp tuyến của đồ thị $y=x^2-3x$ tại điểm có hoành độ $x=2$ bằng bao nhiêu?`,
      answer: '1',
      unit: 'hệ số góc',
      explanation: String.raw`$y'=2x-3$, nên $y'(2)=1$.`,
    },
  ],
}

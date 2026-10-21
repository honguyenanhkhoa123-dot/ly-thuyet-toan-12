import type { Lesson } from '../types'

export const chuong4Bai2: Lesson = {
  id: 'bai-2',
  chapterId: 'chuong-4',
  title: 'Logarit',
  summary: 'Định nghĩa, các quy tắc tính logarit, logarit thập phân và logarit tự nhiên.',
  minutes: 24,

  theory: [
    {
      subtitle: 'Khái niệm logarit',
      content: String.raw`Cho $a,\ b>0$ và $a\ne1$. Số thực $\alpha$ để $a^\alpha=b$ được gọi là **logarit cơ số $a$ của $b$**, kí hiệu $\log_ab$. Nghĩa là
$$\log_ab=\alpha\iff a^\alpha=b.$$`,
      formula: String.raw`\log_ab=\alpha\iff a^\alpha=b`,
      note: String.raw`Điều kiện: $a>0,\ a\ne1,\ b>0$.`,
    },
    {
      subtitle: 'Các quy tắc tính logarit',
      content: String.raw`Với $a,\ b,\ c>0$ và $a\ne1$, ta có:
$$\log_a1=0;\qquad \log_aa=1;\qquad a^{\log_ab}=b;\qquad \log_a(a^\alpha)=\alpha.$$

$$\log_a(bc)=\log_ab+\log_ac;\qquad \log_a\dfrac bc=\log_ab-\log_ac.$$

$$\log_ab^\alpha=\alpha\log_ab;\qquad \log_{a^\alpha}b=\dfrac1\alpha\log_ab\ (\alpha\ne0).$$`,
      formula: String.raw`\log_a(bc)=\log_ab+\log_ac`,
      note: String.raw`Không có công thức cho $\log_a(b+c)$ hay $\log_a(b-c)$.`,
    },
    {
      subtitle: 'Đổi cơ số',
      content: String.raw`Với $a,\ b,\ c>0$ và $a\ne1,\ c\ne1$, ta có:
$$\log_ab=\dfrac{\log_cb}{\log_ca};\qquad \log_ab=\dfrac{1}{\log_ba}\ (b\ne1).$$

Suy ra
$$\log_ab\cdot\log_bc=\log_ac;\qquad \log_ab\cdot\log_ba=1.$$`,
      formula: String.raw`\log_ab=\dfrac{\log_cb}{\log_ca}`,
      note: String.raw`Đổi về cơ số $10$ hoặc $e$ thường thuận tiện khi tính toán.`,
    },
    {
      subtitle: 'So sánh logarit',
      content: String.raw`Với $a,\ b>0$ và $a\ne1$:

- Nếu $a>1$ và $b>1$ thì $\log_ab>0$.
- Nếu $0<a<1$ và $0<b<1$ thì $\log_ab>0$.
- Nếu $a>1$ và $0<b<1$ thì $\log_ab<0$.
- Nếu $0<a<1$ và $b>1$ thì $\log_ab<0$.

Nếu $a>1$ thì $\log_ab>\log_ac\iff b>c>0$.

Nếu $0<a<1$ thì $\log_ab>\log_ac\iff 0<b<c$.`,
      formula: String.raw`a>1:\ \log_ab>\log_ac\iff b>c>0`,
      note: String.raw`Cơ số lớn hơn $1$ thì cùng chiều; cơ số nhỏ hơn $1$ thì ngược chiều.`,
    },
    {
      subtitle: 'Logarit thập phân và logarit tự nhiên',
      content: String.raw`**Logarit thập phân** là logarit cơ số $10$ của một số dương $a$, kí hiệu $\log a$ hoặc $\lg a$:
$$\log a=\log_{10}a.$$

**Logarit tự nhiên** là logarit cơ số $e$ của một số dương $a$, kí hiệu $\ln a$:
$$\ln a=\log_ea,$$
trong đó $e=\lim_{x\to+\infty}\left(1+\dfrac1x\right)^x\approx2{,}7183$.`,
      formula: String.raw`\log a=\log_{10}a,\qquad \ln a=\log_ea`,
      note: String.raw`$e$ là một số vô tỉ, $e\approx2{,}71828$.`,
    },
  ],

  examples: [
    {
      id: 'vd1',
      title: 'Tính logarit cơ bản',
      prompt: String.raw`Tính $\log_28$, $\log_3\dfrac19$, $\log_51$ và $\log_77$.`,
      steps: [
        String.raw`$\log_28=3$ vì $2^3=8$.`,
        String.raw`$\log_3\dfrac19=-2$ vì $3^{-2}=\dfrac19$.`,
        String.raw`$\log_51=0$; $\log_77=1$.`,
      ],
      answer: String.raw`$3;\ -2;\ 0;\ 1$.`,
    },
    {
      id: 'vd2',
      title: 'Dùng quy tắc logarit',
      prompt: String.raw`Tính $\log_212+\log_2\dfrac13$.`,
      steps: [
        String.raw`$\log_212+\log_2\dfrac13=\log_2\left(12\cdot\dfrac13\right)$.`,
        String.raw`$=\log_24=2$.`,
      ],
      answer: String.raw`$2$.`,
    },
    {
      id: 'vd3',
      title: 'Logarit của lũy thừa',
      prompt: String.raw`Cho $\log_ab=3$. Tính $\log_a\left(b^2\right)$ và $\log_{a^2}b$.`,
      steps: [
        String.raw`$\log_a\left(b^2\right)=2\log_ab=2\cdot3=6$.`,
        String.raw`$\log_{a^2}b=\dfrac12\log_ab=\dfrac32$.`,
      ],
      answer: String.raw`$6$; $\dfrac32$.`,
    },
    {
      id: 'vd4',
      title: 'So sánh logarit',
      prompt: String.raw`So sánh $\log_23$ và $\log_25$.`,
      steps: [
        String.raw`Cơ số $2>1$ nên hàm số $y=\log_2x$ đồng biến.`,
        String.raw`Vì $3<5$ nên $\log_23<\log_25$.`,
      ],
      answer: String.raw`$\log_23<\log_25$.`,
    },
    {
      id: 'vd5',
      title: 'Đổi cơ số',
      prompt: String.raw`Tính $\log_48$.`,
      steps: [
        String.raw`Đổi về cơ số $2$: $\log_48=\dfrac{\log_28}{\log_24}$.`,
        String.raw`$=\dfrac{3}{2}$.`,
      ],
      answer: String.raw`$\dfrac32$.`,
    },
  ],

  exercises: [
    {
      id: 'bt1',
      prompt: String.raw`Tính $\log_327$.`,
      solution: String.raw`$\log_327=3$ vì $3^3=27$.`,
    },
    {
      id: 'bt2',
      prompt: String.raw`Tính $\log_2\dfrac18$.`,
      solution: String.raw`$\log_2\dfrac18=-3$ vì $2^{-3}=\dfrac18$.`,
    },
    {
      id: 'bt3',
      prompt: String.raw`Tính $\log_525+\log_5\dfrac15$.`,
      solution: String.raw`$\log_525+\log_5\dfrac15=2+(-1)=1$.`,
    },
    {
      id: 'bt4',
      prompt: String.raw`Cho $\log_ab=2$. Tính $\log_a\left(b^3\right)$.`,
      solution: String.raw`$\log_a\left(b^3\right)=3\log_ab=3\cdot2=6$.`,
    },
    {
      id: 'bt5',
      prompt: String.raw`Tính $\log_927$.`,
      hint: String.raw`Đổi về cơ số $3$.`,
      solution: String.raw`$\log_927=\dfrac{\log_327}{\log_39}=\dfrac{3}{2}$.`,
    },
    {
      id: 'bt6',
      prompt: String.raw`Tính $\log_23\cdot\log_38$.`,
      hint: String.raw`Dùng $\log_ab\cdot\log_bc=\log_ac$.`,
      solution: String.raw`$\log_23\cdot\log_38=\log_28=3$.`,
    },
  ],

  quiz: [
    {
      id: 'q1',
      question: String.raw`$\log_ab=\alpha$ khi và chỉ khi`,
      options: [
        String.raw`$a^\alpha=b$`,
        String.raw`$b^\alpha=a$`,
        String.raw`$a+b=\alpha$`,
        String.raw`$a\cdot b=\alpha$`,
      ],
      answer: 0,
      explanation: String.raw`Theo định nghĩa logarit, $\log_ab=\alpha\iff a^\alpha=b$.`,
    },
    {
      id: 'q2',
      question: String.raw`Giá trị của $\log_a1$ là`,
      options: ['1', '0', 'a', 'Không xác định'],
      answer: 1,
      explanation: String.raw`$a^0=1$ nên $\log_a1=0$.`,
    },
    {
      id: 'q3',
      question: String.raw`Giá trị của $\log_aa$ là`,
      options: ['0', 'a', '1', 'Không xác định'],
      answer: 2,
      explanation: String.raw`$a^1=a$ nên $\log_aa=1$.`,
    },
    {
      id: 'q4',
      question: String.raw`Với $b,\ c>0$, $\log_a(bc)$ bằng`,
      options: [
        String.raw`$\log_ab\cdot\log_ac$`,
        String.raw`$\log_ab-\log_ac$`,
        String.raw`$\log_ab+\log_ac$`,
        String.raw`$\dfrac{\log_ab}{\log_ac}$`,
      ],
      answer: 2,
      explanation: String.raw`Logarit của tích bằng tổng các logarit.`,
    },
    {
      id: 'q5',
      question: String.raw`Với $b,\ c>0$, $\log_a\dfrac bc$ bằng`,
      options: [
        String.raw`$\log_ab-\log_ac$`,
        String.raw`$\log_ab+\log_ac$`,
        String.raw`$\log_ac-\log_ab$`,
        String.raw`$\log_ab\cdot\log_ac$`,
      ],
      answer: 0,
      explanation: String.raw`Logarit của thương bằng hiệu các logarit.`,
    },
    {
      id: 'q6',
      question: String.raw`Với $b>0$, $\log_ab^\alpha$ bằng`,
      options: [
        String.raw`$\alpha+\log_ab$`,
        String.raw`$\log_a\alpha+\log_ab$`,
        String.raw`$\dfrac{1}{\alpha}\log_ab$`,
        String.raw`$\alpha\log_ab$`,
      ],
      answer: 3,
      explanation: String.raw`$\log_ab^\alpha=\alpha\log_ab$.`,
    },
    {
      id: 'q7',
      question: String.raw`Giá trị của $\log_216$ là`,
      options: ['2', '8', '4', '16'],
      answer: 2,
      explanation: String.raw`$2^4=16$ nên $\log_216=4$.`,
    },
    {
      id: 'q8',
      question: String.raw`Với $\alpha\ne0$, $\log_{a^\alpha}b$ bằng`,
      options: [
        String.raw`$\dfrac{1}{\alpha}\log_ab$`,
        String.raw`$\alpha\log_ab$`,
        String.raw`$\log_ab+\alpha$`,
        String.raw`$\log_ab-\alpha$`,
      ],
      answer: 0,
      explanation: String.raw`$\log_{a^\alpha}b=\dfrac{1}{\alpha}\log_ab$.`,
    },
  ],

  trueFalse: [
    {
      id: 'tf1',
      stem: 'Các giá trị logarit:',
      items: [
        { text: String.raw`$\log_28=3$.`, answer: true },
        { text: String.raw`$\log_2\dfrac18=-3$.`, answer: true },
        { text: String.raw`$\log_21=0$.`, answer: true },
        { text: String.raw`$\log_20=1$.`, answer: false },
      ],
      explanation: String.raw`$\log_20$ không xác định vì $0$ không thuộc tập xác định của logarit.`,
    },
    {
      id: 'tf2',
      stem: String.raw`Cho $a,\ b,\ c>0$ và $a\ne1$.`,
      items: [
        { text: String.raw`$\log_a(bc)=\log_ab+\log_ac$.`, answer: true },
        { text: String.raw`$\log_a\dfrac bc=\log_ab-\log_ac$.`, answer: true },
        { text: String.raw`$\log_ab^2=\left(\log_ab\right)^2$.`, answer: false },
        { text: String.raw`$\log_a(b+c)=\log_ab+\log_ac$.`, answer: false },
      ],
      explanation: String.raw`Không có công thức logarit của tổng.`,
    },
    {
      id: 'tf3',
      stem: 'Các khẳng định về logarit thập phân, tự nhiên và so sánh:',
      items: [
        { text: String.raw`$\log100=2$.`, answer: true },
        { text: String.raw`$\ln e=1$.`, answer: true },
        { text: String.raw`$\log_23>\log_25$.`, answer: false },
        { text: String.raw`$\log_{1/2}3>\log_{1/2}5$.`, answer: true },
      ],
      explanation: String.raw`Cơ số $2>1$ nên $\log_23<\log_25$; cơ số $\dfrac12<1$ nên $\log_{1/2}3>\log_{1/2}5$.`,
    },
  ],

  shortAnswer: [
    {
      id: 'sa1',
      question: String.raw`Tính $\log_232$.`,
      answer: '5',
      unit: '',
      explanation: String.raw`$2^5=32$ nên $\log_232=5$.`,
    },
    {
      id: 'sa2',
      question: String.raw`Tính $\log_3\dfrac1{27}$.`,
      answer: '-3',
      unit: '',
      explanation: String.raw`$3^{-3}=\dfrac1{27}$ nên $\log_3\dfrac1{27}=-3$.`,
    },
    {
      id: 'sa3',
      question: String.raw`Tính $\log_416$.`,
      answer: '2',
      unit: '',
      explanation: String.raw`$4^2=16$ nên $\log_416=2$.`,
    },
    {
      id: 'sa4',
      question: String.raw`Cho $\log_ab=4$. Tính $\log_a\left(b^2\right)$.`,
      answer: '8',
      unit: '',
      explanation: String.raw`$\log_a\left(b^2\right)=2\log_ab=8$.`,
    },
  ],
}

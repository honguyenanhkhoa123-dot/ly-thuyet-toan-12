import type { Lesson } from '../types'

export const chuong4Bai1: Lesson = {
  id: 'bai-1',
  chapterId: 'chuong-4',
  title: 'Lũy thừa với số mũ thực',
  summary: 'Lũy thừa với số mũ nguyên, căn bậc n, lũy thừa với số mũ hữu tỉ và số mũ thực.',
  minutes: 22,

  theory: [
    {
      subtitle: 'Lũy thừa với số mũ nguyên',
      content: String.raw`Cho $n$ là số nguyên dương và $a$ là số thực tùy ý. Khi đó
$$a^n=\underbrace{a\cdot a\cdots a}_{n},$$
trong đó $a$ là cơ số và $n$ là số mũ.

Với $a\ne0$ và $n$ nguyên dương, ta quy ước
$$a^0=1,\qquad a^{-n}=\dfrac{1}{a^n}.$$`,
      formula: String.raw`a^0=1,\qquad a^{-n}=\dfrac{1}{a^n}\ (a\ne0)`,
      note: String.raw`$0^0$ và $0^{-n}$ không có nghĩa.`,
    },
    {
      subtitle: 'Căn bậc n',
      content: String.raw`Cho số thực $a$ và số nguyên dương $n$. Số $b$ được gọi là **căn bậc $n$** của $a$ nếu $b^n=a$.

- Nếu $n$ lẻ thì mỗi số thực $a$ có đúng một căn bậc $n$, kí hiệu $\sqrt[n]{a}$.
- Nếu $n$ chẵn và $a>0$ thì $a$ có hai căn bậc $n$ là hai số đối nhau; giá trị dương kí hiệu $\sqrt[n]{a}$ (căn số học), giá trị âm kí hiệu $-\sqrt[n]{a}$.
- Nếu $n$ chẵn và $a=0$ thì căn bậc $n$ của $a$ bằng $0$.`,
      formula: String.raw`b^n=a\iff b=\sqrt[n]{a}`,
      note: String.raw`Với $n$ chẵn, $\sqrt[n]{a^n}=|a|$; với $n$ lẻ, $\sqrt[n]{a^n}=a$.`,
    },
    {
      subtitle: 'Lũy thừa với số mũ hữu tỉ',
      content: String.raw`Cho số thực $a>0$ và số hữu tỉ $r=\dfrac mn$, trong đó $m$ là số nguyên và $n$ là số nguyên dương. Lũy thừa của $a$ với số mũ $r$ là
$$a^r=a^{m/n}=\sqrt[n]{a^m}=\left(\sqrt[n]{a}\right)^m.$$`,
      formula: String.raw`a^{m/n}=\sqrt[n]{a^m}`,
      note: String.raw`Công thức chỉ dùng cho $a>0$ khi $n$ chẵn.`,
    },
    {
      subtitle: 'Lũy thừa với số mũ thực',
      content: String.raw`Cho $a>0$ và $\alpha$ là số vô tỉ. Xét dãy số hữu tỉ $(r_n)$ với $\lim r_n=\alpha$. Giới hạn của dãy $(a^{r_n})$ được gọi là **lũy thừa của $a$ với số mũ $\alpha$**:
$$a^\alpha=\lim a^{r_n}.$$`,
      formula: String.raw`a^\alpha=\lim a^{r_n}`,
      note: String.raw`Lũy thừa với số mũ thực có đầy đủ các tính chất của lũy thừa với số mũ hữu tỉ.`,
    },
    {
      subtitle: 'Tính chất của lũy thừa',
      content: String.raw`Với $a>0,\ b>0$ và $m,\ n\in\mathbb{R}$, ta có:
$$a^m\cdot a^n=a^{m+n};\qquad \dfrac{a^m}{a^n}=a^{m-n};$$
$$(a^m)^n=a^{mn};\qquad (ab)^n=a^n b^n;\qquad \left(\dfrac ab\right)^n=\dfrac{a^n}{b^n}.$$

So sánh:
- Nếu $a>1$ thì $a^m>a^n\iff m>n$.
- Nếu $0<a<1$ thì $a^m>a^n\iff m<n$.`,
      formula: String.raw`a^m\cdot a^n=a^{m+n},\qquad (a^m)^n=a^{mn}`,
      note: String.raw`Khi so sánh lũy thừa, cần xét cơ số lớn hơn $1$ hay nhỏ hơn $1$.`,
    },
    {
      subtitle: 'Tính chất của căn bậc n',
      content: String.raw`Với $a\ge0,\ b\ge0$ và $m,\ n$ nguyên dương, ta có:
$$\sqrt[n]{a}\cdot\sqrt[n]{b}=\sqrt[n]{ab};\qquad \dfrac{\sqrt[n]{a}}{\sqrt[n]{b}}=\sqrt[n]{\dfrac ab};$$
$$\left(\sqrt[n]{a}\right)^m=\sqrt[n]{a^m};\qquad \sqrt[n]{\sqrt[k]{a}}=\sqrt[nk]{a}.$$`,
      formula: String.raw`\sqrt[n]{ab}=\sqrt[n]{a}\cdot\sqrt[n]{b}`,
      note: String.raw`Với $n$ chẵn, $\sqrt[n]{a^n}=|a|$; với $n$ lẻ, $\sqrt[n]{a^n}=a$.`,
    },
  ],

  examples: [
    {
      id: 'vd1',
      title: 'Tính lũy thừa',
      prompt: String.raw`Tính $2^3$, $2^0$, $2^{-3}$, $16^{1/2}$, $27^{1/3}$ và $8^{2/3}$.`,
      steps: [
        String.raw`$2^3=8$; $2^0=1$; $2^{-3}=\dfrac{1}{2^3}=\dfrac18$.`,
        String.raw`$16^{1/2}=\sqrt{16}=4$; $27^{1/3}=\sqrt[3]{27}=3$.`,
        String.raw`$8^{2/3}=\sqrt[3]{8^2}=\sqrt[3]{64}=4$.`,
      ],
      answer: String.raw`$8;\ 1;\ \dfrac18;\ 4;\ 3;\ 4$.`,
    },
    {
      id: 'vd2',
      title: 'Rút gọn lũy thừa',
      prompt: String.raw`Cho $a>0$. Rút gọn $A=a^{2/3}\cdot a^{1/3}$ và $B=\left(a^{1/2}\right)^4$.`,
      steps: [
        String.raw`$A=a^{2/3+1/3}=a^1=a$.`,
        String.raw`$B=a^{(1/2)\cdot4}=a^2$.`,
      ],
      answer: String.raw`$A=a$; $B=a^2$.`,
    },
    {
      id: 'vd3',
      title: 'So sánh lũy thừa',
      prompt: String.raw`So sánh $2^{\sqrt2}$ và $2^{1{,}5}$.`,
      steps: [
        String.raw`Cơ số $2>1$ nên hàm số $y=2^x$ đồng biến.`,
        String.raw`Ta có $\sqrt2\approx1{,}414<1{,}5$.`,
        String.raw`Do đó $2^{\sqrt2}<2^{1{,}5}$.`,
      ],
      answer: String.raw`$2^{\sqrt2}<2^{1{,}5}$.`,
    },
    {
      id: 'vd4',
      title: 'Căn bậc n',
      prompt: String.raw`Rút gọn $\sqrt[3]{a^6}$ và $\sqrt[4]{a^4}$ với $a$ là số thực.`,
      steps: [
        String.raw`$\sqrt[3]{a^6}=\sqrt[3]{(a^2)^3}=a^2$ vì $3$ lẻ.`,
        String.raw`$\sqrt[4]{a^4}=|a|$ vì $4$ chẵn.`,
      ],
      answer: String.raw`$\sqrt[3]{a^6}=a^2$; $\sqrt[4]{a^4}=|a|$.`,
    },
    {
      id: 'vd5',
      title: 'Biến đổi biểu thức',
      prompt: String.raw`Cho $a>0$. Rút gọn $\left(a^{1/2}+a^{-1/2}\right)^2$.`,
      steps: [
        String.raw`Khai triển: $a+2a^{1/2}a^{-1/2}+a^{-1}$.`,
        String.raw`$a^{1/2}a^{-1/2}=a^0=1$, nên biểu thức bằng $a+2+\dfrac1a$.`,
      ],
      answer: String.raw`$a+2+\dfrac1a$.`,
    },
  ],

  exercises: [
    {
      id: 'bt1',
      prompt: String.raw`Tính $3^{-2}$.`,
      solution: String.raw`$3^{-2}=\dfrac{1}{3^2}=\dfrac19$.`,
    },
    {
      id: 'bt2',
      prompt: String.raw`Tính $16^{3/4}$.`,
      solution: String.raw`$16^{3/4}=\sqrt[4]{16^3}=\left(\sqrt[4]{16}\right)^3=2^3=8$.`,
    },
    {
      id: 'bt3',
      prompt: String.raw`Cho $a>0$. Rút gọn $a^{1/3}\cdot a^{5/3}$.`,
      solution: String.raw`$a^{1/3}\cdot a^{5/3}=a^{1/3+5/3}=a^2$.`,
    },
    {
      id: 'bt4',
      prompt: String.raw`So sánh $\left(\dfrac12\right)^{\sqrt2}$ và $\left(\dfrac12\right)^{1{,}4}$.`,
      hint: String.raw`Cơ số nhỏ hơn $1$ nên chiều bất đẳng thức đảo.`,
      solution: String.raw`Cơ số $0<\dfrac12<1$ nên hàm số nghịch biến.

Vì $\sqrt2\approx1{,}414>1{,}4$ nên $\left(\dfrac12\right)^{\sqrt2}<\left(\dfrac12\right)^{1{,}4}$.`,
    },
    {
      id: 'bt5',
      prompt: String.raw`Rút gọn $\sqrt[4]{16a^4}$.`,
      solution: String.raw`$\sqrt[4]{16a^4}=\sqrt[4]{16}\cdot\sqrt[4]{a^4}=2|a|$.`,
    },
    {
      id: 'bt6',
      prompt: String.raw`Cho $a>0$. Rút gọn $\left(a^{2/3}\right)^{3/2}$.`,
      solution: String.raw`$\left(a^{2/3}\right)^{3/2}=a^{(2/3)\cdot(3/2)}=a^1=a$.`,
    },
  ],

  quiz: [
    {
      id: 'q1',
      question: String.raw`Với $a\ne0$, giá trị của $a^0$ là`,
      options: ['0', 'a', '1', 'Không xác định'],
      answer: 2,
      explanation: String.raw`Quy ước $a^0=1$ với $a\ne0$.`,
    },
    {
      id: 'q2',
      question: String.raw`Với $a\ne0$ và $n$ nguyên dương, $a^{-n}$ bằng`,
      options: [
        String.raw`$-a^n$`,
        String.raw`$\dfrac{1}{a^n}$`,
        String.raw`$a^n$`,
        String.raw`$\dfrac{1}{a^{-n}}$`,
      ],
      answer: 1,
      explanation: String.raw`$a^{-n}=\dfrac{1}{a^n}$.`,
    },
    {
      id: 'q3',
      question: String.raw`Với $a>0$, $a^{m/n}$ bằng`,
      options: [
        String.raw`$\sqrt[n]{a^m}$`,
        String.raw`$\sqrt[m]{a^n}$`,
        String.raw`$a^m+a^n$`,
        String.raw`$\dfrac{a^m}{a^n}$`,
      ],
      answer: 0,
      explanation: String.raw`$a^{m/n}=\sqrt[n]{a^m}$.`,
    },
    {
      id: 'q4',
      question: String.raw`Với $a>0$, $a^m\cdot a^n$ bằng`,
      options: [
        String.raw`$a^{mn}$`,
        String.raw`$a^{m-n}$`,
        String.raw`$a^{m/n}$`,
        String.raw`$a^{m+n}$`,
      ],
      answer: 3,
      explanation: String.raw`$a^m\cdot a^n=a^{m+n}$.`,
    },
    {
      id: 'q5',
      question: String.raw`Với $a>0$, $\left(a^m\right)^n$ bằng`,
      options: [
        String.raw`$a^{m+n}$`,
        String.raw`$a^{m-n}$`,
        String.raw`$a^{mn}$`,
        String.raw`$a^{m/n}$`,
      ],
      answer: 2,
      explanation: String.raw`$\left(a^m\right)^n=a^{mn}$.`,
    },
    {
      id: 'q6',
      question: String.raw`Nếu $a>1$ thì $a^m>a^n$ khi và chỉ khi`,
      options: [
        String.raw`$m<n$`,
        String.raw`$m>n$`,
        String.raw`$m=n$`,
        String.raw`$m\ge n$`,
      ],
      answer: 1,
      explanation: 'Với cơ số lớn hơn 1, hàm số mũ đồng biến nên bất đẳng thức cùng chiều.',
    },
    {
      id: 'q7',
      question: String.raw`Với $a$ là số thực, $\sqrt[4]{a^4}$ bằng`,
      options: [
        String.raw`$a$`,
        String.raw`$|a|$`,
        String.raw`$a^2$`,
        String.raw`$-a$`,
      ],
      answer: 1,
      explanation: String.raw`Vì $4$ chẵn nên $\sqrt[4]{a^4}=|a|$.`,
    },
    {
      id: 'q8',
      question: String.raw`Giá trị của $27^{1/3}$ là`,
      options: ['9', '27', '3', '1'],
      answer: 2,
      explanation: String.raw`$27^{1/3}=\sqrt[3]{27}=3$.`,
    },
  ],

  trueFalse: [
    {
      id: 'tf1',
      stem: 'Các giá trị lũy thừa:',
      items: [
        { text: String.raw`$2^{-3}=\dfrac18$.`, answer: true },
        { text: String.raw`$16^{1/2}=4$.`, answer: true },
        { text: String.raw`$27^{1/3}=3$.`, answer: true },
        { text: String.raw`$8^{2/3}=2$.`, answer: false },
      ],
      explanation: String.raw`$8^{2/3}=\left(\sqrt[3]{8}\right)^2=2^2=4$, không phải $2$.`,
    },
    {
      id: 'tf2',
      stem: String.raw`Cho $a>0$.`,
      items: [
        { text: String.raw`$a^{1/2}\cdot a^{1/3}=a^{1/6}$.`, answer: false },
        { text: String.raw`$\left(a^{1/2}\right)^2=a$.`, answer: true },
        { text: String.raw`$\dfrac{a^{1/2}}{a^{1/3}}=a^{1/6}$.`, answer: true },
        { text: String.raw`$a^{1/2}+a^{1/2}=a$.`, answer: false },
      ],
      explanation: String.raw`$a^{1/2}\cdot a^{1/3}=a^{5/6}$, không phải $a^{1/6}$; $a^{1/2}+a^{1/2}=2a^{1/2}$, không phải $a$.`,
    },
    {
      id: 'tf3',
      stem: 'Các khẳng định về căn và so sánh lũy thừa:',
      items: [
        { text: String.raw`Với $a>1$ thì $a^2>a^3$.`, answer: false },
        { text: String.raw`Với $0<a<1$ thì $a^2>a^3$.`, answer: true },
        { text: String.raw`$\sqrt[3]{a^3}=a$.`, answer: true },
        { text: String.raw`$\sqrt[4]{a^4}=a$ với mọi $a$.`, answer: false },
      ],
      explanation: String.raw`$a>1$ thì $a^2<a^3$; $\sqrt[4]{a^4}=|a|$, không phải $a$ với mọi $a$.`,
    },
  ],

  shortAnswer: [
    {
      id: 'sa1',
      question: String.raw`Tính $2^{-2}$ (nhập số thập phân).`,
      answer: '0.25',
      unit: '',
      explanation: String.raw`$2^{-2}=\dfrac{1}{4}=0{,}25$.`,
    },
    {
      id: 'sa2',
      question: String.raw`Tính $81^{1/2}$.`,
      answer: '9',
      unit: '',
      explanation: String.raw`$81^{1/2}=\sqrt{81}=9$.`,
    },
    {
      id: 'sa3',
      question: String.raw`Tính $8^{2/3}$.`,
      answer: '4',
      unit: '',
      explanation: String.raw`$8^{2/3}=\left(\sqrt[3]{8}\right)^2=2^2=4$.`,
    },
    {
      id: 'sa4',
      question: String.raw`Cho $a>0$. Rút gọn $a^{1/4}\cdot a^{3/4}$ được $a^k$. Tìm $k$.`,
      answer: '1',
      unit: '',
      explanation: String.raw`$a^{1/4}\cdot a^{3/4}=a^{1/4+3/4}=a^1$, nên $k=1$.`,
    },
  ],
}

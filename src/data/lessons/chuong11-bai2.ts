import type { Lesson } from '../types'

export const chuong11Bai2: Lesson = {
  id: 'bai-2',
  chapterId: 'chuong-11',
  title: 'Tọa độ của vectơ trong không gian',
  summary: 'Hệ trục Oxyz, tọa độ vectơ – điểm, tích vô hướng và tích có hướng.',
  minutes: 26,

  theory: [
    {
      subtitle: 'Hệ trục tọa độ trong không gian',
      content: String.raw`Trong không gian, hệ trục tọa độ $Oxyz$ gồm ba trục $Ox,\ Oy,\ Oz$ đôi một vuông góc với nhau tại gốc $O$.

- Trục $Ox$ gọi là trục hoành, trục $Oy$ gọi là trục tung, trục $Oz$ gọi là trục cao.
- Các mặt phẳng $(Oxy),\ (Oyz),\ (Oxz)$ đôi một vuông góc với nhau.
- Các vectơ đơn vị trên ba trục là $\vec i=(1;0;0)$, $\vec j=(0;1;0)$, $\vec k=(0;0;1)$.

Với mỗi vectơ $\vec a$ trong không gian, tồn tại duy nhất bộ ba số $(a_1;a_2;a_3)$ sao cho $\vec a=a_1\vec i+a_2\vec j+a_3\vec k$. Bộ ba đó gọi là **tọa độ** của vectơ $\vec a$, kí hiệu $\vec a=(a_1;a_2;a_3)$.`,
      formula: String.raw`\vec a=a_1\vec i+a_2\vec j+a_3\vec k\iff \vec a=(a_1;a_2;a_3)`,
      note: String.raw`Gốc tọa độ $O(0;0;0)$; ba vectơ $\vec i,\vec j,\vec k$ đôi một vuông góc và có độ dài bằng $1$.`,
    },
    {
      subtitle: 'Các phép toán trên tọa độ vectơ',
      content: String.raw`Cho $\vec a=(a_1;a_2;a_3)$ và $\vec b=(b_1;b_2;b_3)$. Khi đó:

- $\vec a\pm\vec b=(a_1\pm b_1;a_2\pm b_2;a_3\pm b_3)$.
- $k\vec a=(ka_1;ka_2;ka_3)$ với $k\in\mathbb{R}$.
- $\vec a=\vec b\iff a_1=b_1,\ a_2=b_2,\ a_3=b_3$.
- $\vec a$ cùng phương $\vec b$ (với $\vec b\ne\vec 0$) khi và chỉ khi tồn tại $k$ sao cho $a_1=kb_1,\ a_2=kb_2,\ a_3=kb_3$.
- $\vec a\cdot\vec b=a_1b_1+a_2b_2+a_3b_3$.
- $\vec a\perp\vec b\iff\vec a\cdot\vec b=0$.
- $|\vec a|=\sqrt{a_1^2+a_2^2+a_3^2}$.
- $\cos\bigl(\vec a,\vec b\bigr)=\dfrac{\vec a\cdot\vec b}{|\vec a|\,|\vec b|}$.`,
      formula: String.raw`\vec a\cdot\vec b=a_1b_1+a_2b_2+a_3b_3,\qquad |\vec a|=\sqrt{a_1^2+a_2^2+a_3^2}`,
      note: String.raw`Tích vô hướng của hai vectơ là một số; độ dài vectơ là một số không âm.`,
    },
    {
      subtitle: 'Tọa độ của điểm và các công thức thường gặp',
      content: String.raw`Trong không gian $Oxyz$, điểm $M$ có tọa độ $(x;y;z)$ khi và chỉ khi $\overrightarrow{OM}=x\vec i+y\vec j+z\vec k$.

Với hai điểm $A(x_A;y_A;z_A)$, $B(x_B;y_B;z_B)$:
- $\overrightarrow{AB}=(x_B-x_A;y_B-y_A;z_B-z_A)$.
- $AB=\sqrt{(x_B-x_A)^2+(y_B-y_A)^2+(z_B-z_A)^2}$.
- Trung điểm $M$ của $AB$: $M\left(\dfrac{x_A+x_B}{2};\dfrac{y_A+y_B}{2};\dfrac{z_A+z_B}{2}\right)$.
- Trọng tâm $G$ của tam giác $ABC$ có tọa độ là trung bình cộng các tọa độ tương ứng của $A,\ B,\ C$:
$$G\left(\dfrac{x_A+x_B+x_C}{3};\dfrac{y_A+y_B+y_C}{3};\dfrac{z_A+z_B+z_C}{3}\right).$$
- $ABCD$ là hình bình hành khi và chỉ khi $A+C=B+D$ (cộng theo tọa độ).
- $A,\ B,\ C$ thẳng hàng khi và chỉ khi $\overrightarrow{AB}=k\overrightarrow{AC}$.
- Điểm $M$ chia đoạn $AB$ theo tỉ lệ $\overrightarrow{MA}=k\overrightarrow{MB}$ ($k\ne1$) có tọa độ
$$M\left(\dfrac{x_A-kx_B}{1-k};\dfrac{y_A-ky_B}{1-k};\dfrac{z_A-kz_B}{1-k}\right).$$`,
      formula: String.raw`\overrightarrow{AB}=(x_B-x_A;y_B-y_A;z_B-z_A)`,
      note: String.raw`Điểm thuộc $Ox$ có dạng $(x;0;0)$; thuộc $(Oxy)$ có dạng $(x;y;0)$; tương tự cho các trục và mặt phẳng tọa độ còn lại.`,
    },
    {
      subtitle: 'Tích có hướng của hai vectơ',
      content: String.raw`Trong không gian $Oxyz$, cho $\vec a=(a_1;a_2;a_3)$ và $\vec b=(b_1;b_2;b_3)$. **Tích có hướng** của $\vec a$ và $\vec b$ là vectơ
$$\bigl[\vec a,\vec b\bigr]=\bigl(a_2b_3-a_3b_2;\ a_3b_1-a_1b_3;\ a_1b_2-a_2b_1\bigr).$$

Tính chất:
- $\vec a$ cùng phương $\vec b\iff\bigl[\vec a,\vec b\bigr]=\vec 0$.
- $\bigl[\vec a,\vec b\bigr]\perp\vec a$ và $\bigl[\vec a,\vec b\bigr]\perp\vec b$.
- $\bigl[\vec a,\vec b\bigr]=-\bigl[\vec b,\vec a\bigr]$.
- $\bigl|\bigl[\vec a,\vec b\bigr]\bigr|=|\vec a|\,|\vec b|\sin\bigl(\vec a,\vec b\bigr)$.
- Ba vectơ $\vec a,\ \vec b,\ \vec c$ đồng phẳng khi và chỉ khi $\bigl[\vec a,\vec b\bigr]\cdot\vec c=0$.`,
      formula: String.raw`\bigl[\vec a,\vec b\bigr]=\bigl(a_2b_3-a_3b_2;\ a_3b_1-a_1b_3;\ a_1b_2-a_2b_1\bigr)`,
      note: String.raw`Tích có hướng là một **vectơ**, khác với tích vô hướng là một số.`,
    },
    {
      subtitle: 'Ứng dụng tích có hướng: diện tích, thể tích',
      content: String.raw`- Diện tích tam giác $ABC$: $S_{\triangle ABC}=\dfrac12\bigl|\bigl[\overrightarrow{AB},\overrightarrow{AC}\bigr]\bigr|$.
- Diện tích hình bình hành $ABCD$: $S_{ABCD}=\bigl|\bigl[\overrightarrow{AB},\overrightarrow{AD}\bigr]\bigr|$.
- Thể tích tứ diện $ABCD$: $V=\dfrac16\bigl|\bigl[\overrightarrow{AB},\overrightarrow{AC}\bigr]\cdot\overrightarrow{AD}\bigr|$.
- Thể tích hình hộp $ABCD.A'B'C'D'$: $V=\bigl|\bigl[\overrightarrow{AB},\overrightarrow{AD}\bigr]\cdot\overrightarrow{AA'}\bigr|$.
- Bốn điểm $A,\ B,\ C,\ D$ đồng phẳng khi và chỉ khi $\bigl[\overrightarrow{AB},\overrightarrow{AC}\bigr]\cdot\overrightarrow{AD}=0$.`,
      formula: String.raw`S_{\triangle ABC}=\dfrac12\bigl|\bigl[\overrightarrow{AB},\overrightarrow{AC}\bigr]\bigr|,\qquad V_{ABCD}=\dfrac16\bigl|\bigl[\overrightarrow{AB},\overrightarrow{AC}\bigr]\cdot\overrightarrow{AD}\bigr|`,
      note: String.raw`Các công thức này dùng tích có hướng, không dùng tích vô hướng.`,
    },
  ],

  examples: [
    {
      id: 'vd1',
      title: 'Phép toán trên tọa độ vectơ',
      prompt: String.raw`Cho $\vec a=(1;2;-1)$ và $\vec b=(3;0;2)$. Tính $\vec a+\vec b$, $2\vec a-\vec b$, $\vec a\cdot\vec b$ và $|\vec a|$.`,
      steps: [
        String.raw`$\vec a+\vec b=(1+3;2+0;-1+2)=(4;2;1)$.`,
        String.raw`$2\vec a=(2;4;-2)$ nên $2\vec a-\vec b=(2-3;4-0;-2-2)=(-1;4;-4)$.`,
        String.raw`$\vec a\cdot\vec b=1\cdot3+2\cdot0+(-1)\cdot2=3-2=1$.`,
        String.raw`$|\vec a|=\sqrt{1^2+2^2+(-1)^2}=\sqrt6$.`,
      ],
      answer: String.raw`$\vec a+\vec b=(4;2;1)$; $2\vec a-\vec b=(-1;4;-4)$; $\vec a\cdot\vec b=1$; $|\vec a|=\sqrt6$.`,
    },
    {
      id: 'vd2',
      title: 'Tọa độ điểm, độ dài, trung điểm, trọng tâm',
      prompt: String.raw`Cho $A(1;0;2)$, $B(3;1;0)$, $C(0;2;-1)$. Tính $\overrightarrow{AB}$, $AB$, trung điểm $M$ của $BC$ và trọng tâm $G$ của tam giác $ABC$.`,
      steps: [
        String.raw`$\overrightarrow{AB}=(3-1;1-0;0-2)=(2;1;-2)$.`,
        String.raw`$AB=\sqrt{2^2+1^2+(-2)^2}=\sqrt9=3$.`,
        String.raw`$M\left(\dfrac{3+0}{2};\dfrac{1+2}{2};\dfrac{0-1}{2}\right)=\left(\dfrac32;\dfrac32;-\dfrac12\right)$.`,
        String.raw`$G\left(\dfrac{1+3+0}{3};\dfrac{0+1+2}{3};\dfrac{2+0-1}{3}\right)=\left(\dfrac43;1;\dfrac13\right)$.`,
      ],
      answer: String.raw`$\overrightarrow{AB}=(2;1;-2)$; $AB=3$; $M\left(\dfrac32;\dfrac32;-\dfrac12\right)$; $G\left(\dfrac43;1;\dfrac13\right)$.`,
    },
    {
      id: 'vd3',
      title: 'Tính tích có hướng',
      prompt: String.raw`Cho $\vec a=(1;2;3)$ và $\vec b=(0;1;4)$. Tính $\bigl[\vec a,\vec b\bigr]$ và kiểm tra vectơ này vuông góc với cả $\vec a$ và $\vec b$.`,
      steps: [
        String.raw`$\bigl[\vec a,\vec b\bigr]=\bigl(2\cdot4-3\cdot1;\ 3\cdot0-1\cdot4;\ 1\cdot1-2\cdot0\bigr)=(5;-4;1)$.`,
        String.raw`$\vec a\cdot(5;-4;1)=1\cdot5+2\cdot(-4)+3\cdot1=5-8+3=0$.`,
        String.raw`$\vec b\cdot(5;-4;1)=0\cdot5+1\cdot(-4)+4\cdot1=-4+4=0$.`,
        String.raw`Vậy $\bigl[\vec a,\vec b\bigr]$ vuông góc với cả $\vec a$ và $\vec b$.`,
      ],
      answer: String.raw`$\bigl[\vec a,\vec b\bigr]=(5;-4;1)$, vuông góc với cả $\vec a$ và $\vec b$.`,
    },
    {
      id: 'vd4',
      title: 'Diện tích tam giác bằng tích có hướng',
      prompt: String.raw`Cho $A(1;0;0)$, $B(0;1;0)$, $C(0;0;1)$. Tính diện tích tam giác $ABC$.`,
      steps: [
        String.raw`$\overrightarrow{AB}=(-1;1;0)$, $\overrightarrow{AC}=(-1;0;1)$.`,
        String.raw`$\bigl[\overrightarrow{AB},\overrightarrow{AC}\bigr]=\bigl(1\cdot1-0\cdot0;\ 0\cdot(-1)-(-1)\cdot1;\ (-1)\cdot0-1\cdot(-1)\bigr)=(1;1;1)$.`,
        String.raw`$\bigl|\bigl[\overrightarrow{AB},\overrightarrow{AC}\bigr]\bigr|=\sqrt{1^2+1^2+1^2}=\sqrt3$.`,
        String.raw`$S_{\triangle ABC}=\dfrac12\sqrt3=\dfrac{\sqrt3}{2}$.`,
      ],
      answer: String.raw`$S_{\triangle ABC}=\dfrac{\sqrt3}{2}$.`,
    },
    {
      id: 'vd5',
      title: 'Thể tích tứ diện',
      prompt: String.raw`Cho tứ diện $OABC$ với $O(0;0;0)$, $A(1;0;0)$, $B(0;1;0)$, $C(0;0;1)$. Tính thể tích tứ diện.`,
      steps: [
        String.raw`$\overrightarrow{OA}=(1;0;0)$, $\overrightarrow{OB}=(0;1;0)$, $\overrightarrow{OC}=(0;0;1)$.`,
        String.raw`$\bigl[\overrightarrow{OA},\overrightarrow{OB}\bigr]=(0;0;1)$.`,
        String.raw`$\bigl[\overrightarrow{OA},\overrightarrow{OB}\bigr]\cdot\overrightarrow{OC}=1$.`,
        String.raw`$V=\dfrac16|1|=\dfrac16$.`,
      ],
      answer: String.raw`$V=\dfrac16$.`,
    },
  ],

  exercises: [
    {
      id: 'bt1',
      prompt: String.raw`Cho $\vec a=(2;-1;3)$ và $\vec b=(1;4;-2)$. Tính $\vec a+\vec b$, $\vec a-\vec b$ và $2\vec a+3\vec b$.`,
      solution: String.raw`$\vec a+\vec b=(3;3;1)$; $\vec a-\vec b=(1;-5;5)$.

$2\vec a=(4;-2;6)$, $3\vec b=(3;12;-6)$, nên $2\vec a+3\vec b=(7;10;0)$.`,
    },
    {
      id: 'bt2',
      prompt: String.raw`Cho $A(2;-1;3)$ và $B(0;2;1)$. Tính $\overrightarrow{AB}$ và $AB$.`,
      solution: String.raw`$\overrightarrow{AB}=(-2;3;-2)$.

$AB=\sqrt{(-2)^2+3^2+(-2)^2}=\sqrt{17}$.`,
    },
    {
      id: 'bt3',
      prompt: String.raw`Cho $A(1;2;3)$ và $B(-1;0;2)$. Tìm trung điểm $M$ của $AB$.`,
      solution: String.raw`$M\left(\dfrac{1+(-1)}{2};\dfrac{2+0}{2};\dfrac{3+2}{2}\right)=\left(0;1;\dfrac52\right)$.`,
    },
    {
      id: 'bt4',
      prompt: String.raw`Cho tam giác $ABC$ với $A(0;0;0)$, $B(1;2;0)$, $C(0;1;2)$. Tìm trọng tâm $G$.`,
      solution: String.raw`$G\left(\dfrac{0+1+0}{3};\dfrac{0+2+1}{3};\dfrac{0+0+2}{3}\right)=\left(\dfrac13;1;\dfrac23\right)$.`,
    },
    {
      id: 'bt5',
      prompt: String.raw`Cho $\vec a=(1;-1;2)$ và $\vec b=(2;1;-1)$. Tính $\bigl[\vec a,\vec b\bigr]$.`,
      solution: String.raw`$\bigl[\vec a,\vec b\bigr]=\bigl((-1)(-1)-2\cdot1;\ 2\cdot2-1\cdot(-1);\ 1\cdot1-(-1)\cdot2\bigr)=(-1;5;3)$.`,
    },
    {
      id: 'bt6',
      prompt: String.raw`Cho $A(1;0;0)$, $B(0;1;0)$, $C(0;0;1)$, $D(1;1;1)$. Tính thể tích tứ diện $ABCD$.`,
      hint: String.raw`Tính $\bigl[\overrightarrow{AB},\overrightarrow{AC}\bigr]$ rồi nhân vô hướng với $\overrightarrow{AD}$.`,
      solution: String.raw`$\overrightarrow{AB}=(-1;1;0)$, $\overrightarrow{AC}=(-1;0;1)$, $\overrightarrow{AD}=(0;1;1)$.

$\bigl[\overrightarrow{AB},\overrightarrow{AC}\bigr]=(1;1;1)$.

$\bigl[\overrightarrow{AB},\overrightarrow{AC}\bigr]\cdot\overrightarrow{AD}=0+1+1=2$.

$V=\dfrac16\cdot2=\dfrac13$.`,
    },
  ],

  quiz: [
    {
      id: 'q1',
      question: String.raw`Trong hệ trục $Oxyz$, vectơ đơn vị $\vec i$ có tọa độ là`,
      options: [String.raw`$(0;1;0)$`, String.raw`$(0;0;1)$`, String.raw`$(1;0;0)$`, String.raw`$(1;1;1)$`],
      answer: 2,
      explanation: String.raw`$\vec i$ là vectơ đơn vị trên trục $Ox$ nên $\vec i=(1;0;0)$.`,    },
    {
      id: 'q2',
      question: String.raw`Cho $\vec a=(1;2;3)$ và $\vec b=(4;5;6)$. Tọa độ $\vec a+\vec b$ là`,
      options: [String.raw`$(3;3;3)$`, String.raw`$(4;10;18)$`, String.raw`$(5;7;9)$`, String.raw`$(5;7;3)$`],
      answer: 2,
      explanation: String.raw`Cộng theo từng tọa độ: $(1+4;2+5;3+6)=(5;7;9)$.`,
    },
    {
      id: 'q3',
      question: String.raw`Cho $\vec a=(1;-2;3)$. Tọa độ $2\vec a$ là`,
      options: [String.raw`$(2;-2;3)$`, String.raw`$(2;4;6)$`, String.raw`$(2;-4;6)$`, String.raw`$(1;-4;6)$`],
      answer: 2,
      explanation: String.raw`Nhân từng tọa độ với $2$: $(2;-4;6)$.`,
    },
    {
      id: 'q4',
      question: String.raw`Tích vô hướng $\vec a\cdot\vec b$ với $\vec a=(a_1;a_2;a_3)$, $\vec b=(b_1;b_2;b_3)$ bằng`,
      options: [String.raw`$a_1b_1-a_2b_2+a_3b_3$`, String.raw`$a_1b_1+a_2b_2+a_3b_3$`, String.raw`$a_1+b_1+a_2+b_2+a_3+b_3$`, String.raw`$a_1b_2+a_2b_3+a_3b_1$`],
      answer: 1,
      explanation: 'Tích vô hướng bằng tổng các tích các tọa độ tương ứng.',
    },
    {
      id: 'q5',
      question: String.raw`Độ dài vectơ $\vec a=(a_1;a_2;a_3)$ bằng`,
      options: [String.raw`$a_1^2+a_2^2+a_3^2$`, String.raw`$|a_1|+|a_2|+|a_3|$`, String.raw`$\sqrt{a_1^2+a_2^2+a_3^2}$`, String.raw`$\sqrt{a_1+a_2+a_3}$`],
      answer: 2,
      explanation: String.raw`$|\vec a|=\sqrt{a_1^2+a_2^2+a_3^2}$.`,
    },
    {
      id: 'q6',
      question: String.raw`Cho $A(1;2;3)$ và $B(2;4;6)$. Tọa độ $\overrightarrow{AB}$ là`,
      options: [String.raw`$(3;6;9)$`, String.raw`$(-1;-2;-3)$`, String.raw`$(2;4;6)$`, String.raw`$(1;2;3)$`],
      answer: 3,
      explanation: String.raw`$\overrightarrow{AB}=(2-1;4-2;6-3)=(1;2;3)$.`,
    },
    {
      id: 'q7',
      question: String.raw`Trung điểm của đoạn thẳng nối $A(0;0;0)$ và $B(2;4;6)$ có tọa độ là`,
      options: [String.raw`$(2;4;6)$`, String.raw`$(1;2;3)$`, String.raw`$(1;1;1)$`, String.raw`$(0;0;0)$`],
      answer: 1,
      explanation: String.raw`Trung điểm có tọa độ $\left(\dfrac{0+2}{2};\dfrac{0+4}{2};\dfrac{0+6}{2}\right)=(1;2;3)$.`,
    },
    {
      id: 'q8',
      question: String.raw`Hai vectơ $\vec a$ và $\vec b$ vuông góc khi và chỉ khi`,
      options: [String.raw`$\vec a\cdot\vec b=1$`, String.raw`$\vec a=\vec b$`, String.raw`$\vec a\cdot\vec b=0$`, String.raw`$|\vec a|=|\vec b|$`],
      answer: 2,
      explanation: String.raw`$\vec a\perp\vec b\iff\vec a\cdot\vec b=0$.`,
    },
  ],

  trueFalse: [
    {
      id: 'tf1',
      stem: String.raw`Cho $\vec a=(1;2;-1)$ và $\vec b=(2;-1;0)$.`,
      items: [
        { text: String.raw`$\vec a+\vec b=(3;1;-1)$.`, answer: true },
        { text: String.raw`$\vec a-\vec b=(-1;3;-1)$.`, answer: true },
        { text: String.raw`$\vec a\cdot\vec b=0$.`, answer: true },
        { text: String.raw`$\vec a\cdot\vec b=1$.`, answer: false },
      ],
      explanation: String.raw`$\vec a+\vec b=(3;1;-1)$; $\vec a-\vec b=(-1;3;-1)$; $\vec a\cdot\vec b=2-2+0=0$.`,
    },
    {
      id: 'tf2',
      stem: String.raw`Cho $A(1;0;2)$ và $B(3;1;0)$.`,
      items: [
        { text: String.raw`$\overrightarrow{AB}=(2;1;-2)$.`, answer: true },
        { text: String.raw`$AB=3$.`, answer: true },
        { text: String.raw`Trung điểm của $AB$ là $\left(2;\dfrac12;1\right)$.`, answer: true },
        { text: String.raw`$\overrightarrow{AB}=(-2;-1;2)$.`, answer: false },
      ],
      explanation: String.raw`$\overrightarrow{AB}=(2;1;-2)$; $AB=\sqrt{4+1+4}=3$; trung điểm $\left(2;\dfrac12;1\right)$.`,
    },
    {
      id: 'tf3',
      stem: String.raw`Cho $\vec a=(1;0;0)$ và $\vec b=(0;1;0)$.`,
      items: [
        { text: String.raw`$\bigl[\vec a,\vec b\bigr]=(0;0;1)$.`, answer: true },
        { text: String.raw`$\bigl|\bigl[\vec a,\vec b\bigr]\bigr|=1$.`, answer: true },
        { text: String.raw`$\bigl[\vec a,\vec b\bigr]\perp\vec a$.`, answer: true },
        { text: String.raw`$\bigl[\vec a,\vec b\bigr]=(0;0;-1)$.`, answer: false },
      ],
      explanation: String.raw`$\bigl[\vec i,\vec j\bigr]=\vec k=(0;0;1)$, có độ dài $1$ và vuông góc với cả $\vec i,\vec j$.`,
    },
  ],

  shortAnswer: [
    {
      id: 'sa1',
      question: String.raw`Cho $\vec a=(2;1;-1)$ và $\vec b=(1;0;3)$. Tính $\vec a\cdot\vec b$.`,
      answer: '-1',
      unit: '',
      explanation: String.raw`$\vec a\cdot\vec b=2\cdot1+1\cdot0+(-1)\cdot3=-1$.`,
    },
    {
      id: 'sa2',
      question: String.raw`Cho $A(1;1;1)$ và $B(2;3;4)$. Tính $AB^2$.`,
      answer: '14',
      unit: '',
      explanation: String.raw`$AB^2=(2-1)^2+(3-1)^2+(4-1)^2=1+4+9=14$.`,
    },
    {
      id: 'sa3',
      question: String.raw`Cho $\vec a=(1;2;3)$ và $\vec b=(0;1;4)$. Tìm tọa độ thứ nhất của $\bigl[\vec a,\vec b\bigr]$.`,
      answer: '5',
      unit: '',
      explanation: String.raw`Tọa độ thứ nhất là $a_2b_3-a_3b_2=2\cdot4-3\cdot1=5$.`,
    },
    {
      id: 'sa4',
      question: String.raw`Cho tứ diện $OABC$ với $O(0;0;0)$, $A(1;0;0)$, $B(0;1;0)$, $C(0;0;1)$. Gọi $V$ là thể tích tứ diện. Tính $6V$.`,
      answer: '1',
      unit: '',
      explanation: String.raw`$\bigl[\overrightarrow{OA},\overrightarrow{OB}\bigr]=(0;0;1)$; $\bigl[\overrightarrow{OA},\overrightarrow{OB}\bigr]\cdot\overrightarrow{OC}=1$; $V=\dfrac16$ nên $6V=1$.`,
    },
  ],
}

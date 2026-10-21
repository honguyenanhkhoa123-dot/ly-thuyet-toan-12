import type { Lesson } from '../types'

export const chuong12Bai4: Lesson = {
  id: 'bai-4',
  chapterId: 'chuong-12',
  title: 'Phương trình mặt cầu',
  summary: 'Phương trình mặt cầu, vị trí tương đối với mặt phẳng – đường thẳng và các dạng bài viết phương trình.',
  minutes: 26,

  theory: [
    {
      subtitle: 'Phương trình mặt cầu',
      content: String.raw`**Định nghĩa.** Tập hợp các điểm $M$ trong không gian cách điểm $I$ cố định một khoảng $R$ không đổi là mặt cầu tâm $I$, bán kính $R$:
$$IM=R.$$

**Phương trình chính tắc.** Mặt cầu tâm $I(a;b;c)$, bán kính $R$:
$$(x-a)^2+(y-b)^2+(z-c)^2=R^2.$$

**Phương trình tổng quát.** Phương trình
$$x^2+y^2+z^2-2ax-2by-2cz+d=0$$
là mặt cầu khi và chỉ khi $a^2+b^2+c^2-d>0$. Khi đó tâm $I(a;b;c)$ và bán kính
$$R=\sqrt{a^2+b^2+c^2-d}.$$`,
      formula: String.raw`R=\sqrt{a^2+b^2+c^2-d}`,
      note: String.raw`Điều kiện $a^2+b^2+c^2-d>0$ là bắt buộc, nếu không thì không phải mặt cầu.`,
    },
    {
      subtitle: 'Vị trí tương đối của mặt cầu và mặt phẳng',
      content: String.raw`Cho mặt cầu $S(I;R)$ và mặt phẳng $(P)$. Đặt $h=\mathrm d(I,(P))$.

| Điều kiện | Vị trí tương đối |
| --- | --- |
| $h>R$ | $(P)$ không cắt mặt cầu |
| $h=R$ | $(P)$ tiếp xúc mặt cầu tại một điểm |
| $h<R$ | $(P)$ cắt mặt cầu theo đường tròn |

Khi $h<R$, đường tròn giao tuyến có tâm $H$ là hình chiếu của $I$ trên $(P)$ và bán kính
$$r=\sqrt{R^2-h^2}.$$`,
      formula: String.raw`r=\sqrt{R^2-h^2}`,
      note: String.raw`Tiếp diện tại $M$ có vectơ pháp tuyến $\overrightarrow{IM}$.`,
    },
    {
      subtitle: 'Vị trí tương đối của mặt cầu và đường thẳng',
      content: String.raw`Cho mặt cầu $S(I;R)$ và đường thẳng $d$. Đặt $h=\mathrm d(I,d)$.

| Điều kiện | Vị trí tương đối |
| --- | --- |
| $h>R$ | $d$ không cắt mặt cầu |
| $h=R$ | $d$ tiếp xúc mặt cầu |
| $h<R$ | $d$ cắt mặt cầu tại hai điểm phân biệt |

Khi $d$ cắt mặt cầu tại $A$, $B$ thì $H$ (hình chiếu của $I$ trên $d$) là trung điểm $AB$ và
$$AB=2\sqrt{R^2-h^2}.$$`,
      formula: String.raw`AB=2\sqrt{R^2-h^2}`,
      note: String.raw`Bán kính $R$, khoảng cách $h$ và nửa dây cung lập thành tam giác vuông.`,
    },
    {
      subtitle: 'Các dạng viết phương trình mặt cầu',
      content: String.raw`1. Tâm $I$, bán kính $R$: dùng phương trình chính tắc.

2. Đường kính $AB$: tâm $I$ là trung điểm $AB$, $R=\dfrac{AB}{2}$.

3. Đi qua bốn điểm $A$, $B$, $C$, $D$ (mặt cầu ngoại tiếp tứ diện): gọi phương trình $x^2+y^2+z^2-2ax-2by-2cz+d=0$, thay tọa độ bốn điểm để giải hệ bốn ẩn $a$, $b$, $c$, $d$.

4. Tâm $I$ thuộc đường thẳng $d$ và đi qua hai điểm $A$, $B$: tham số hóa tâm $I$, dùng $IA=IB$.

5. Tâm $I$ thuộc mặt phẳng $(P)$ và đi qua ba điểm $A$, $B$, $C$: tâm là giao của $(P)$ với mặt phẳng trung trực của $AB$ và $AC$.

6. Tiếp xúc với mặt phẳng $(P)$ tại $M$: tâm $I$ nằm trên đường thẳng qua $M$ vuông góc $(P)$, bán kính $R=IM$.

7. Tiếp xúc với đường thẳng $d$ tại $M$: tâm $I$ nằm trên mặt phẳng qua $M$ vuông góc $d$.

8. Ngoại tiếp hình chóp, lăng trụ: tâm là giao các mặt phẳng trung trực của các cạnh bên.

9. Mặt cầu nhỏ nhất chứa các điểm: tâm là trung điểm đoạn nối hai điểm xa nhất.`,
      formula: String.raw`x^2+y^2+z^2-2ax-2by-2cz+d=0`,
      note: 'Với bốn điểm, giải hệ bốn phương trình để tìm $a$, $b$, $c$, $d$.',
    },
    {
      subtitle: 'Một số công thức tính nhanh',
      content: String.raw`**Mặt cầu ngoại tiếp tứ diện vuông.** Tứ diện $OABC$ có $OA$, $OB$, $OC$ đôi một vuông góc, $OA=a$, $OB=b$, $OC=c$. Tâm mặt cầu ngoại tiếp là trung điểm của đoạn nối $O$ với điểm $P(a;b;c)$ và
$$R=\dfrac{\sqrt{a^2+b^2+c^2}}{2}.$$

**Mặt cầu ngoại tiếp hình chóp $S.ABCD$ có $SA\perp(ABCD)$ và đáy là hình chữ nhật.** Tâm là trung điểm của $SC$ và
$$R=\dfrac{SC}{2}=\dfrac{\sqrt{SA^2+AB^2+AD^2}}{2}.$$

**Mặt cầu ngoại tiếp hình chóp tứ giác đều $S.ABCD$** cạnh đáy $a$, cạnh bên $b$:
$$R=\dfrac{b^2}{2\sqrt{b^2-\dfrac{a^2}{2}}}.$$

**Mặt cầu nội tiếp hình lập phương** cạnh $a$ có $R=\dfrac a2$; mặt cầu ngoại tiếp có $R=\dfrac{a\sqrt3}{2}$.`,
      formula: String.raw`R=\dfrac{\sqrt{SA^2+AB^2+AD^2}}{2}`,
      note: 'Với hình chóp có cạnh bên vuông góc đáy và đáy nội tiếp đường tròn, tâm là trung điểm cạnh bên đối diện.',
    },
  ],

  examples: [
    {
      id: 'vd1',
      title: 'Tìm tâm và bán kính',
      prompt: String.raw`Tìm tâm và bán kính của mặt cầu $x^2+y^2+z^2-2x+4y-6z+5=0$.`,
      steps: [
        String.raw`Viết lại: $(x-1)^2+(y+2)^2+(z-3)^2=9$.`,
        String.raw`Tâm $I(1;-2;3)$, bán kính $R=3$.`,
      ],
      answer: String.raw`$I(1;-2;3)$, $R=3$.`,
    },
    {
      id: 'vd2',
      title: 'Viết phương trình mặt cầu',
      prompt: String.raw`Viết phương trình mặt cầu đường kính $AB$ với $A(1;2;3)$, $B(3;0;1)$.`,
      steps: [
        String.raw`Tâm $I$ là trung điểm $AB$: $I(2;1;2)$.`,
        String.raw`$AB=\sqrt{4+4+4}=2\sqrt3$ nên $R=\sqrt3$.`,
        String.raw`$(x-2)^2+(y-1)^2+(z-2)^2=3$.`,
      ],
      answer: String.raw`$(x-2)^2+(y-1)^2+(z-2)^2=3$.`,
    },
    {
      id: 'vd3',
      title: 'Mặt cầu tiếp xúc mặt phẳng',
      prompt: String.raw`Viết phương trình mặt cầu tâm $I(1;2;3)$ và tiếp xúc với $(P):2x+2y+z-3=0$.`,
      steps: [
        String.raw`Bán kính $R=\mathrm d(I,(P))=\dfrac{|2+4+3-3|}{\sqrt{4+4+1}}=\dfrac63=2$.`,
        String.raw`$(x-1)^2+(y-2)^2+(z-3)^2=4$.`,
      ],
      answer: String.raw`$(x-1)^2+(y-2)^2+(z-3)^2=4$.`,
    },
    {
      id: 'vd4',
      title: 'Mặt cầu ngoại tiếp tứ diện',
      prompt: String.raw`Viết phương trình mặt cầu ngoại tiếp tứ diện $OABC$ với $O(0;0;0)$, $A(1;0;0)$, $B(0;2;0)$, $C(0;0;3)$.`,
      steps: [
        String.raw`Tứ diện vuông tại $O$ nên tâm là trung điểm $I$ của đoạn nối $O$ với $P(1;2;3)$: $I\left(\dfrac12;1;\dfrac32\right)$.`,
        String.raw`$R=\dfrac{\sqrt{1+4+9}}{2}=\dfrac{\sqrt{14}}{2}$.`,
        String.raw`Phương trình: $\left(x-\dfrac12\right)^2+(y-1)^2+\left(z-\dfrac32\right)^2=\dfrac72$.`,
      ],
      answer: String.raw`$\left(x-\dfrac12\right)^2+(y-1)^2+\left(z-\dfrac32\right)^2=\dfrac72$.`,
    },
    {
      id: 'vd5',
      title: 'Đường tròn giao tuyến',
      prompt: String.raw`Cho mặt cầu $(S):x^2+y^2+z^2-2x-4y-6z+5=0$ và $(P):x+y+z-5=0$. Tính bán kính đường tròn giao tuyến.`,
      steps: [
        String.raw`$(S)$ có tâm $I(1;2;3)$, $R=\sqrt{1+4+9-5}=3$.`,
        String.raw`$h=\mathrm d(I,(P))=\dfrac{|1+2+3-5|}{\sqrt3}=\dfrac{1}{\sqrt3}$.`,
        String.raw`$r=\sqrt{R^2-h^2}=\sqrt{9-\dfrac13}=\sqrt{\dfrac{26}{3}}=\dfrac{\sqrt{78}}{3}$.`,
      ],
      answer: String.raw`$r=\dfrac{\sqrt{78}}{3}$.`,
    },
  ],

  exercises: [
    {
      id: 'bt1',
      prompt: String.raw`Tìm tâm và bán kính mặt cầu $x^2+y^2+z^2+4x-2z-4=0$.`,
      solution: String.raw`$(x+2)^2+y^2+(z-1)^2=9$ nên $I(-2;0;1)$, $R=3$.`,
    },
    {
      id: 'bt2',
      prompt: String.raw`Viết phương trình mặt cầu tâm $I(1;-1;2)$ và đi qua $A(2;0;1)$.`,
      solution: String.raw`$R=IA=\sqrt{1+1+1}=\sqrt3$ nên $(x-1)^2+(y+1)^2+(z-2)^2=3$.`,
    },
    {
      id: 'bt3',
      prompt: String.raw`Viết phương trình mặt cầu đường kính $AB$ với $A(0;0;0)$, $B(2;2;2)$.`,
      solution: String.raw`Tâm $I(1;1;1)$, $R=\sqrt3$ nên $(x-1)^2+(y-1)^2+(z-1)^2=3$.`,
    },
    {
      id: 'bt4',
      prompt: String.raw`Xét vị trí tương đối của $(S):(x-1)^2+(y-2)^2+(z-3)^2=9$ và $(P):x+y+z-6=0$.`,
      solution: String.raw`$h=\dfrac{|1+2+3-6|}{\sqrt3}=0<R=3$ nên $(P)$ cắt mặt cầu theo đường tròn bán kính $3$.`,
    },
    {
      id: 'bt5',
      prompt: String.raw`Viết phương trình mặt cầu tâm $I(0;0;1)$ và tiếp xúc với $(P):x+2y-2z+5=0$.`,
      hint: String.raw`$R=\mathrm d(I,(P))$.`,
      solution: String.raw`$R=\dfrac{|0+0-2+5|}{3}=1$ nên $x^2+y^2+(z-1)^2=1$.`,
    },
    {
      id: 'bt6',
      prompt: String.raw`Cho mặt cầu $(S)$ tâm $I(1;1;1)$ bán kính $R=3$ và đường thẳng $d:\dfrac{x-1}{1}=\dfrac{y-1}{1}=\dfrac{z-1}{1}$. Xét vị trí tương đối.`,
      solution: String.raw`$I\in d$ nên $h=0<R$; đường thẳng cắt mặt cầu tại hai điểm $A$, $B$ với $AB=2R=6$.`,
    },
  ],

  quiz: [
    {
      id: 'q1',
      question: String.raw`Mặt cầu tâm $I(a;b;c)$, bán kính $R$ có phương trình`,
      options: [
        String.raw`$(x-a)^2+(y-b)^2+(z-c)^2=R^2$`,
        String.raw`$(x-a)^2+(y-b)^2+(z-c)^2=R$`,
        String.raw`$(x+a)^2+(y+b)^2+(z+c)^2=R^2$`,
        String.raw`$(x-a)+(y-b)+(z-c)=R^2$`,
      ],
      answer: 0,
      explanation: 'Phương trình chính tắc của mặt cầu.',
    },
    {
      id: 'q2',
      question: String.raw`Phương trình $x^2+y^2+z^2-2x+4y-6z+14=0$`,
      options: [
        'Là mặt cầu bán kính $3$',
        'Là mặt cầu bán kính $1$',
        'Không phải phương trình mặt cầu',
        'Là mặt phẳng',
      ],
      answer: 2,
      explanation: String.raw`$a^2+b^2+c^2-d=1+4+9-14=0$ không dương nên không phải mặt cầu.`,
    },
    {
      id: 'q3',
      question: String.raw`Mặt cầu $(S):(x-1)^2+(y+2)^2+(z-3)^2=16$ có bán kính`,
      options: [
        String.raw`$8$`,
        String.raw`$4$`,
        String.raw`$16$`,
        String.raw`$2$`,
      ],
      answer: 1,
      explanation: String.raw`$R^2=16$ nên $R=4$.`,
    },
    {
      id: 'q4',
      question: String.raw`Mặt phẳng $(P)$ tiếp xúc mặt cầu $S(I;R)$ khi`,
      options: [
        String.raw`$\mathrm d(I,(P))>R$`,
        String.raw`$\mathrm d(I,(P))=R$`,
        String.raw`$\mathrm d(I,(P))<R$`,
        String.raw`$I\in(P)$`,
      ],
      answer: 1,
      explanation: 'Khoảng cách từ tâm đến mặt phẳng bằng bán kính.',
    },
    {
      id: 'q5',
      question: String.raw`Mặt cầu $x^2+y^2+z^2-2x-4y+6z-2=0$ có tâm`,
      options: [
        String.raw`$(-1;-2;3)$`,
        String.raw`$(1;-2;3)$`,
        String.raw`$(1;2;-3)$`,
        String.raw`$(2;4;-6)$`,
      ],
      answer: 2,
      explanation: String.raw`Tâm $I(a;b;c)$ với $a=1$, $b=2$, $c=-3$.`,
    },
    {
      id: 'q6',
      question: String.raw`Cho mặt cầu $(S)$ tâm $I$, bán kính $R=5$ và mặt phẳng $(P)$ với $\mathrm d(I,(P))=3$. Đường tròn giao tuyến có bán kính`,
      options: [
        String.raw`$2$`,
        String.raw`$\sqrt{34}$`,
        String.raw`$4$`,
        String.raw`$8$`,
      ],
      answer: 2,
      explanation: String.raw`$r=\sqrt{25-9}=4$.`,
    },
    {
      id: 'q7',
      question: String.raw`Mặt cầu đường kính $AB$ với $A(1;0;0)$, $B(3;0;0)$ có bán kính`,
      options: [
        String.raw`$2$`,
        String.raw`$4$`,
        String.raw`$\sqrt2$`,
        String.raw`$1$`,
      ],
      answer: 3,
      explanation: String.raw`$AB=2$ nên $R=1$.`,
    },
    {
      id: 'q8',
      question: String.raw`Mặt cầu ngoại tiếp hình lập phương cạnh $a$ có bán kính`,
      options: [
        String.raw`$\dfrac a2$`,
        String.raw`$\dfrac{a\sqrt3}{2}$`,
        String.raw`$\dfrac{a\sqrt2}{2}$`,
        String.raw`$a\sqrt3$`,
      ],
      answer: 1,
      explanation: 'Đường chéo hình lập phương là đường kính mặt cầu ngoại tiếp.',
    },
  ],

  trueFalse: [
    {
      id: 'tf1',
      stem: 'Các khẳng định về phương trình mặt cầu:',
      items: [
        { text: String.raw`$(x-a)^2+(y-b)^2+(z-c)^2=R^2$ là mặt cầu tâm $I(a;b;c)$, bán kính $R$.`, answer: true },
        { text: String.raw`Phương trình $x^2+y^2+z^2-2ax-2by-2cz+d=0$ luôn là mặt cầu.`, answer: false },
        { text: String.raw`Bán kính được tính bởi $R=\sqrt{a^2+b^2+c^2-d}$.`, answer: true },
        { text: 'Mặt cầu chỉ có một mặt phẳng đối xứng.', answer: false },
      ],
      explanation: String.raw`Cần điều kiện $a^2+b^2+c^2-d>0$ thì phương trình tổng quát mới là mặt cầu.`,
    },
    {
      id: 'tf2',
      stem: 'Các khẳng định về vị trí tương đối:',
      items: [
        { text: String.raw`$(P)$ cắt mặt cầu khi $\mathrm d(I,(P))<R$.`, answer: true },
        { text: String.raw`$(P)$ tiếp xúc mặt cầu khi $\mathrm d(I,(P))=R$.`, answer: true },
        { text: String.raw`Đường tròn giao tuyến có bán kính $r=\sqrt{R^2-h^2}$.`, answer: true },
        { text: String.raw`Nếu $h>R$ thì $(P)$ cắt mặt cầu tại hai điểm.`, answer: false },
      ],
      explanation: String.raw`$h>R$ thì mặt phẳng không cắt mặt cầu.`,
    },
    {
      id: 'tf3',
      stem: 'Các khẳng định về mặt cầu ngoại tiếp:',
      items: [
        { text: 'Tâm mặt cầu ngoại tiếp tứ diện cách đều bốn đỉnh.', answer: true },
        { text: 'Mặt cầu ngoại tiếp hình hộp chữ nhật có tâm là tâm hình hộp.', answer: true },
        { text: 'Mặt cầu nội tiếp hình lập phương cạnh $a$ có bán kính $a$.', answer: false },
        { text: 'Mặt cầu ngoại tiếp hình lập phương cạnh $a$ có bán kính $\\dfrac{a\\sqrt3}{2}$.', answer: true },
      ],
      explanation: 'Mặt cầu nội tiếp hình lập phương cạnh $a$ có bán kính $\\dfrac a2$.',
    },
  ],

  shortAnswer: [
    {
      id: 'sa1',
      question: String.raw`Mặt cầu $(x-1)^2+(y-2)^2+(z-3)^2=25$ có bán kính bằng bao nhiêu?`,
      answer: '5',
      unit: '',
      explanation: String.raw`$R=\sqrt{25}=5$.`,
    },
    {
      id: 'sa2',
      question: String.raw`Mặt cầu $x^2+y^2+z^2-2x+4y-6z+5=0$ có bán kính bằng bao nhiêu?`,
      answer: '3',
      unit: '',
      explanation: String.raw`$a=1$, $b=-2$, $c=3$, $d=5$; $R=\sqrt{1+4+9-5}=3$.`,
    },
    {
      id: 'sa3',
      question: String.raw`Cho mặt cầu tâm $I(1;1;1)$, bán kính $3$ và $(P):x+y+z-6=0$. Khoảng cách từ $I$ đến $(P)$ bằng $\sqrt{k}$. Tìm $k$.`,
      answer: '3',
      unit: '',
      explanation: String.raw`$h=\dfrac{|1+1+1-6|}{\sqrt3}=\sqrt3$ nên $k=3$.`,
    },
    {
      id: 'sa4',
      question: String.raw`Mặt cầu ngoại tiếp hình lập phương cạnh $2$ có bán kính $a\sqrt3$. Tìm $a$.`,
      answer: '1',
      unit: '',
      explanation: String.raw`$R=\dfrac{2\sqrt3}{2}=\sqrt3$ nên $a=1$.`,
    },
  ],
}

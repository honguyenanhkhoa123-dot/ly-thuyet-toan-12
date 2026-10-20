import type { Lesson } from '../types'

export const chuong9Bai1: Lesson = {
  id: 'bai-1',
  chapterId: 'chuong-9',
  title: 'Ba đường conic',
  summary: 'Elip, hypebol, parabol: định nghĩa, phương trình chính tắc và các yếu tố.',
  minutes: 26,

  theory: [
    {
      subtitle: 'Elip',
      content: String.raw`Cho hai điểm cố định và phân biệt $F_1,\ F_2$. Đặt $F_1F_2=2c>0$. Với số $a>c$, tập hợp các điểm $M$ sao cho $MF_1+MF_2=2a$ được gọi là **đường elip**. Hai điểm $F_1,\ F_2$ là hai **tiêu điểm** và $F_1F_2=2c$ là **tiêu cự** của elip.

Elip có **phương trình chính tắc** $\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}=1$ với $a>b>0$.

Khi đó:
- $c^2=a^2-b^2$.
- Tiêu điểm $F_1(-c;0)$, $F_2(c;0)$; tiêu cự $2c$.
- Các đỉnh $A_1(-a;0)$, $A_2(a;0)$, $B_1(0;-b)$, $B_2(0;b)$.
- Độ dài trục lớn $A_1A_2=2a$; độ dài trục bé $B_1B_2=2b$.
- Hình chữ nhật cơ sở có bốn đỉnh $P(-a;b)$, $Q(-a;-b)$, $R(a;-b)$, $S(a;b)$.
- Với $M(x;y)$ thuộc elip: $MF_1=a+\dfrac ca x$, $MF_2=a-\dfrac ca x$.
- Tâm sai $e=\dfrac ca$; các đường chuẩn $x=\pm\dfrac ae$.`,
      formula: String.raw`\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}=1,\quad a>b>0,\quad c^2=a^2-b^2`,
      note: String.raw`Trong elip, $a$ là nửa trục lớn, $b$ là nửa trục bé và $c$ là nửa tiêu cự.`,
    },
    {
      subtitle: 'Hypebol',
      content: String.raw`Cho hai điểm cố định và phân biệt $F_1,\ F_2$. Đặt $F_1F_2=2c>0$. Với số $a>0$ và $a<c$, tập hợp các điểm $M$ sao cho $\bigl|MF_1-MF_2\bigr|=2a$ được gọi là **đường hypebol**. Hai điểm $F_1,\ F_2$ là hai **tiêu điểm** và $F_1F_2=2c$ là **tiêu cự**.

Hypebol có **phương trình chính tắc** $\dfrac{x^2}{a^2}-\dfrac{y^2}{b^2}=1$ với $a,b>0$.

Khi đó:
- $c^2=a^2+b^2$.
- Tiêu điểm $F_1(-c;0)$, $F_2(c;0)$; tiêu cự $2c$.
- Các đỉnh $A_1(-a;0)$, $A_2(a;0)$.
- Trục thực $Ox$ có độ dài $2a$; trục ảo $Oy$ có độ dài $2b$.
- Hai đường tiệm cận $y=\pm\dfrac ba x$.
- Với $M(x;y)$ thuộc hypebol: $MF_1=\left|a+\dfrac ca x\right|$, $MF_2=\left|a-\dfrac ca x\right|$.
- Tâm sai $e=\dfrac ca$; các đường chuẩn $x=\pm\dfrac ae$.`,
      formula: String.raw`\dfrac{x^2}{a^2}-\dfrac{y^2}{b^2}=1,\quad a,b>0,\quad c^2=a^2+b^2`,
      note: String.raw`Khác với elip, trong hypebol $c^2=a^2+b^2$ nên $c>a$ và $c>b$.`,
    },
    {
      subtitle: 'Parabol',
      content: String.raw`Cho điểm $F$ cố định và đường thẳng $\Delta$ cố định không đi qua $F$. Tập hợp các điểm $M$ cách đều $F$ và $\Delta$ được gọi là **đường parabol**. Điểm $F$ là **tiêu điểm**, $\Delta$ là **đường chuẩn** và khoảng cách từ $F$ đến $\Delta$ là **tham số tiêu** $p$ của parabol.

Parabol có **phương trình chính tắc** $y^2=2px$ với $p>0$.

Khi đó:
- Tiêu điểm $F\left(\dfrac p2;0\right)$.
- Đường chuẩn $\Delta:x=-\dfrac p2$.
- Trục đối xứng là $Ox$; đỉnh $O(0;0)$.
- Tham số tiêu $p$ gấp đôi khoảng cách từ đỉnh $O$ đến tiêu điểm $F$.
- Với $M(x;y)$ thuộc parabol: $MF=x+\dfrac p2$.
- Tâm sai $e=1$.`,
      formula: String.raw`y^2=2px,\quad p>0,\quad F\left(\dfrac p2;0\right),\quad \Delta:x=-\dfrac p2`,
      note: String.raw`Parabol $y^2=2px$ mở về phía dương của trục $Ox$.`,
    },
  ],

  examples: [
    {
      id: 'vd1',
      title: 'Các yếu tố của elip',
      prompt: String.raw`Cho elip $(E):\dfrac{x^2}{25}+\dfrac{y^2}{9}=1$. Tìm tiêu điểm, tiêu cự, độ dài các trục và tâm sai.`,
      steps: [
        String.raw`Ta có $a^2=25$ nên $a=5$; $b^2=9$ nên $b=3$.`,
        String.raw`$c^2=a^2-b^2=25-9=16$, suy ra $c=4$.`,
        String.raw`Tiêu điểm $F_1(-4;0)$, $F_2(4;0)$; tiêu cự $2c=8$.`,
        String.raw`Trục lớn $2a=10$; trục bé $2b=6$; tâm sai $e=\dfrac ca=\dfrac45$.`,
      ],
      answer: String.raw`$F_1(-4;0)$, $F_2(4;0)$; tiêu cự $8$; trục lớn $10$; trục bé $6$; $e=\dfrac45$.`,
    },
    {
      id: 'vd2',
      title: 'Các yếu tố của hypebol',
      prompt: String.raw`Cho hypebol $(H):\dfrac{x^2}{9}-\dfrac{y^2}{16}=1$. Tìm tiêu điểm, tiêu cự, phương trình các đường tiệm cận và tâm sai.`,
      steps: [
        String.raw`Ta có $a^2=9$ nên $a=3$; $b^2=16$ nên $b=4$.`,
        String.raw`$c^2=a^2+b^2=9+16=25$, suy ra $c=5$.`,
        String.raw`Tiêu điểm $F_1(-5;0)$, $F_2(5;0)$; tiêu cự $2c=10$.`,
        String.raw`Hai đường tiệm cận $y=\pm\dfrac ba x=\pm\dfrac43x$; tâm sai $e=\dfrac ca=\dfrac53$.`,
      ],
      answer: String.raw`$F_1(-5;0)$, $F_2(5;0)$; tiêu cự $10$; tiệm cận $y=\pm\dfrac43x$; $e=\dfrac53$.`,
    },
    {
      id: 'vd3',
      title: 'Các yếu tố của parabol',
      prompt: String.raw`Cho parabol $(P):y^2=8x$. Tìm tham số tiêu, tiêu điểm và đường chuẩn.`,
      steps: [
        String.raw`So sánh với $y^2=2px$ được $2p=8$, suy ra $p=4$.`,
        String.raw`Tiêu điểm $F\left(\dfrac p2;0\right)=F(2;0)$.`,
        String.raw`Đường chuẩn $\Delta:x=-\dfrac p2$, tức $x=-2$.`,
      ],
      answer: String.raw`$p=4$; $F(2;0)$; $\Delta:x=-2$.`,
    },
    {
      id: 'vd4',
      title: 'Viết phương trình chính tắc của elip',
      prompt: String.raw`Viết phương trình chính tắc của elip có nửa trục lớn $a=5$ và nửa tiêu cự $c=3$.`,
      steps: [
        String.raw`Với elip, $b^2=a^2-c^2=25-9=16$.`,
        String.raw`Phương trình chính tắc có dạng $\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}=1$.`,
        String.raw`Thay $a^2=25$, $b^2=16$ được $\dfrac{x^2}{25}+\dfrac{y^2}{16}=1$.`,
      ],
      answer: String.raw`$\dfrac{x^2}{25}+\dfrac{y^2}{16}=1$.`,
    },
  ],

  exercises: [
    {
      id: 'bt1',
      prompt: String.raw`Cho elip $\dfrac{x^2}{16}+\dfrac{y^2}{7}=1$. Tính tiêu cự.`,
      solution: String.raw`$a^2=16\Rightarrow a=4$; $b^2=7\Rightarrow b=\sqrt7$.

$c^2=a^2-b^2=16-7=9\Rightarrow c=3$.

Tiêu cự $2c=6$.`,
    },
    {
      id: 'bt2',
      prompt: String.raw`Cho hypebol $\dfrac{x^2}{4}-\dfrac{y^2}{5}=1$. Viết phương trình hai đường tiệm cận.`,
      solution: String.raw`$a^2=4\Rightarrow a=2$; $b^2=5\Rightarrow b=\sqrt5$.

Hai đường tiệm cận là $y=\pm\dfrac ba x=\pm\dfrac{\sqrt5}{2}x$.`,
    },
    {
      id: 'bt3',
      prompt: String.raw`Cho parabol $y^2=12x$. Tìm tiêu điểm và đường chuẩn.`,
      solution: String.raw`$2p=12\Rightarrow p=6$.

Tiêu điểm $F\left(\dfrac p2;0\right)=F(3;0)$; đường chuẩn $x=-\dfrac p2=-3$.`,
    },
    {
      id: 'bt4',
      prompt: String.raw`Viết phương trình chính tắc của elip có $a=4$ và $c=2$.`,
      solution: String.raw`$b^2=a^2-c^2=16-4=12$.

Phương trình là $\dfrac{x^2}{16}+\dfrac{y^2}{12}=1$.`,
    },
    {
      id: 'bt5',
      prompt: String.raw`Viết phương trình chính tắc của hypebol có $a=2$ và $b=3$.`,
      solution: String.raw`Phương trình chính tắc của hypebol là $\dfrac{x^2}{a^2}-\dfrac{y^2}{b^2}=1$.

Thay $a=2,\ b=3$ được $\dfrac{x^2}{4}-\dfrac{y^2}{9}=1$.`,
    },
    {
      id: 'bt6',
      prompt: String.raw`Cho parabol $y^2=8x$ và điểm $M$ thuộc parabol có hoành độ $x=2$. Tính $MF$.`,
      hint: String.raw`Dùng công thức bán kính qua tiêu $MF=x+\dfrac p2$.`,
      solution: String.raw`$2p=8\Rightarrow p=4$.

Với $M$ thuộc parabol: $MF=x+\dfrac p2=2+2=4$.`,
    },
  ],

  quiz: [
    {
      id: 'q1',
      question: 'Elip là tập hợp các điểm $M$ sao cho',
      options: [String.raw`$\bigl|MF_1-MF_2\bigr|=2a$`, String.raw`$MF_1=MF_2$`, String.raw`$MF_1+MF_2=2a$`, String.raw`$MF_1\cdot MF_2=2a$`],
      answer: 2,
      explanation: String.raw`Theo định nghĩa elip: $MF_1+MF_2=2a$ với $2a>2c$.`,
    },
    {
      id: 'q2',
      question: 'Phương trình chính tắc của elip là',
      options: [String.raw`$\dfrac{x^2}{a^2}-\dfrac{y^2}{b^2}=1$`, String.raw`$\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}=1$ với $a>b>0$`, String.raw`$y^2=2px$`, String.raw`$\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}=0$`],
      answer: 1,
      explanation: String.raw`Elip có phương trình chính tắc $\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}=1$ với $a>b>0$.`,
    },
    {
      id: 'q3',
      question: 'Trong elip với $a>b>0$, hệ thức nào đúng?',
      options: [String.raw`$c^2=a^2+b^2$`, String.raw`$b^2=a^2+c^2$`, String.raw`$a^2=b^2-c^2$`, String.raw`$c^2=a^2-b^2$`],
      answer: 3,
      explanation: String.raw`Với elip, $c^2=a^2-b^2$.`,
    },
    {
      id: 'q4',
      question: 'Hypebol là tập hợp các điểm $M$ sao cho',
      options: [String.raw`$MF_1+MF_2=2a$`, String.raw`$\bigl|MF_1-MF_2\bigr|=2a$`, String.raw`$MF_1=MF_2$`, String.raw`$MF_1+MF_2=2c$`],
      answer: 1,
      explanation: String.raw`Theo định nghĩa hypebol: $\bigl|MF_1-MF_2\bigr|=2a$ với $0<a<c$.`,
    },
    {
      id: 'q5',
      question: 'Phương trình chính tắc của hypebol là',
      options: [String.raw`$\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}=1$`, String.raw`$y^2=2px$`, String.raw`$\dfrac{x^2}{a^2}-\dfrac{y^2}{b^2}=1$`, String.raw`$\dfrac{x^2}{a^2}-\dfrac{y^2}{b^2}=0$`],
      answer: 2,
      explanation: String.raw`Hypebol có phương trình chính tắc $\dfrac{x^2}{a^2}-\dfrac{y^2}{b^2}=1$.`,
    },
    {
      id: 'q6',
      question: 'Trong hypebol, hệ thức nào đúng?',
      options: [String.raw`$c^2=a^2-b^2$`, String.raw`$c^2=a^2+b^2$`, String.raw`$a^2=b^2+c^2$`, String.raw`$b^2=a^2+c^2$`],
      answer: 1,
      explanation: String.raw`Với hypebol, $c^2=a^2+b^2$.`,
    },
    {
      id: 'q7',
      question: String.raw`Parabol $y^2=2px$ có tiêu điểm là`,
      options: [String.raw`$F(0;p)$`, String.raw`$F(-p;0)$`, String.raw`$F(p;p)$`, String.raw`$F\left(\dfrac p2;0\right)$`],
      answer: 3,
      explanation: String.raw`Tiêu điểm của parabol $y^2=2px$ là $F\left(\dfrac p2;0\right)$.`,
    },
    {
      id: 'q8',
      question: String.raw`Parabol $y^2=2px$ có đường chuẩn là`,
      options: [String.raw`$x=\dfrac p2$`, String.raw`$y=-\dfrac p2$`, String.raw`$x=-\dfrac p2$`, String.raw`$x=-p$`],
      answer: 2,
      explanation: String.raw`Đường chuẩn của parabol $y^2=2px$ là $x=-\dfrac p2$.`,
    },
  ],

  trueFalse: [
    {
      id: 'tf1',
      stem: String.raw`Cho elip $\dfrac{x^2}{25}+\dfrac{y^2}{9}=1$.`,
      items: [
        { text: String.raw`$a=5$.`, answer: true },
        { text: String.raw`$b=3$.`, answer: true },
        { text: String.raw`$c=4$.`, answer: true },
        { text: String.raw`Tiêu cự bằng $5$.`, answer: false },
      ],
      explanation: String.raw`$a=5$, $b=3$, $c=\sqrt{25-9}=4$; tiêu cự $2c=8$.`,
    },
    {
      id: 'tf2',
      stem: String.raw`Cho hypebol $\dfrac{x^2}{9}-\dfrac{y^2}{16}=1$.`,
      items: [
        { text: String.raw`$a=3$.`, answer: true },
        { text: String.raw`$b=4$.`, answer: true },
        { text: String.raw`$c=\sqrt7$.`, answer: false },
        { text: String.raw`Hai đường tiệm cận là $y=\pm\dfrac43x$.`, answer: true },
      ],
      explanation: String.raw`$c^2=a^2+b^2=9+16=25$ nên $c=5$, không phải $c=\sqrt7$. Tiệm cận là $y=\pm\dfrac ba x=\pm\dfrac43x$.`,
    },
    {
      id: 'tf3',
      stem: String.raw`Cho parabol $y^2=8x$.`,
      items: [
        { text: String.raw`$p=4$.`, answer: true },
        { text: String.raw`Tiêu điểm $F(0;2)$.`, answer: false },
        { text: String.raw`Đường chuẩn $x=-2$.`, answer: true },
        { text: String.raw`Với $M$ thuộc parabol thì $MF=x+2$.`, answer: true },
      ],
      explanation: String.raw`$p=4$, tiêu điểm $F(2;0)$ (không phải $F(0;2)$), $\Delta:x=-2$; bán kính qua tiêu $MF=x+\dfrac p2=x+2$.`,
    },
  ],

  shortAnswer: [
    {
      id: 'sa1',
      question: String.raw`Cho elip $\dfrac{x^2}{25}+\dfrac{y^2}{16}=1$. Tính $c$.`,
      answer: '3',
      unit: '',
      explanation: String.raw`$c^2=25-16=9$ nên $c=3$.`,
    },
    {
      id: 'sa2',
      question: String.raw`Cho hypebol $\dfrac{x^2}{16}-\dfrac{y^2}{9}=1$. Tính $c$.`,
      answer: '5',
      unit: '',
      explanation: String.raw`$c^2=16+9=25$ nên $c=5$.`,
    },
    {
      id: 'sa3',
      question: String.raw`Cho parabol $y^2=4x$. Tính tham số tiêu $p$.`,
      answer: '2',
      unit: '',
      explanation: String.raw`$2p=4$ nên $p=2$.`,
    },
    {
      id: 'sa4',
      question: String.raw`Cho parabol $y^2=8x$ và điểm $M$ thuộc parabol có $x=3$. Tính $MF$.`,
      answer: '5',
      unit: '',
      explanation: String.raw`$p=4$ nên $MF=x+\dfrac p2=3+2=5$.`,
    },
  ],
}

import type { Lesson } from '../types'

export const chuong12Bai1: Lesson = {
  id: 'bai-1',
  chapterId: 'chuong-12',
  title: 'Phương trình mặt phẳng',
  summary: 'Vectơ pháp tuyến, phương trình tổng quát, vị trí tương đối, khoảng cách và các dạng viết phương trình.',
  minutes: 28,

  theory: [
    {
      subtitle: 'Vectơ pháp tuyến của mặt phẳng',
      content: String.raw`Vectơ $\vec n\ne\vec 0$ và có giá vuông góc với mặt phẳng $(P)$ được gọi là **vectơ pháp tuyến** của $(P)$.

Mặt phẳng $(P):Ax+By+Cz+D=0$ có vectơ pháp tuyến
$$\vec n=(A;B;C).$$

Vectơ pháp tuyến của các mặt phẳng tọa độ:

- $(Oxy)$ có $\vec n=(0;0;1)=\vec k$.
- $(Oyz)$ có $\vec n=(1;0;0)=\vec i$.
- $(Oxz)$ có $\vec n=(0;1;0)=\vec j$.`,
      formula: String.raw`(P):Ax+By+Cz+D=0\Rightarrow\vec n=(A;B;C)`,
      note: String.raw`Mọi vectơ cùng phương với $\vec n$ cũng là vectơ pháp tuyến.`,
    },
    {
      subtitle: 'Phương trình mặt phẳng',
      content: String.raw`Mặt phẳng $(P)$ đi qua $M(x_0;y_0;z_0)$ và có vectơ pháp tuyến $\vec n=(A;B;C)$ có phương trình
$$A(x-x_0)+B(y-y_0)+C(z-z_0)=0.$$

Mặt phẳng đi qua ba điểm $A(a;0;0)$, $B(0;b;0)$, $C(0;0;c)$ với $abc\ne0$ có phương trình theo đoạn chắn
$$\dfrac xa+\dfrac yb+\dfrac zc=1.$$`,
      formula: String.raw`A(x-x_0)+B(y-y_0)+C(z-z_0)=0`,
      note: String.raw`Phương trình đoạn chắn dùng khi biết ba giao điểm với các trục.`,
    },
    {
      subtitle: 'Các trường hợp đặc biệt',
      content: String.raw`Cho mặt phẳng $(\alpha):Ax+By+Cz+D=0$.

| Hệ số | Phương trình | Tính chất |
| --- | --- | --- |
| $D=0$ | $Ax+By+Cz=0$ | $(\alpha)$ đi qua gốc $O$ |
| $A=0$ | $By+Cz+D=0$ | $(\alpha)\parallel Ox$ |
| $B=0$ | $Ax+Cz+D=0$ | $(\alpha)\parallel Oy$ |
| $C=0$ | $Ax+By+D=0$ | $(\alpha)\parallel Oz$ |
| $A=D=0$ | $By+Cz=0$ | $(\alpha)\supset Ox$ |
| $B=D=0$ | $Ax+Cz=0$ | $(\alpha)\supset Oy$ |
| $C=D=0$ | $Ax+By=0$ | $(\alpha)\supset Oz$ |
| $A=B=0$ | $Cz+D=0$ | $(\alpha)\parallel(Oxy)$ |
| $B=C=0$ | $Ax+D=0$ | $(\alpha)\parallel(Oyz)$ |
| $A=C=0$ | $By+D=0$ | $(\alpha)\parallel(Oxz)$ |`,
      formula: String.raw`D=0\Rightarrow O\in(\alpha),\quad A=0\Rightarrow(\alpha)\parallel Ox`,
      note: String.raw`Hệ số nào bằng 0 thì mặt phẳng song song hoặc chứa trục tương ứng.`,
    },
    {
      subtitle: 'Vị trí tương đối của hai mặt phẳng',
      content: String.raw`Cho $(P):Ax+By+Cz+D=0$ và $(Q):A'x+B'y+C'z+D'=0$.

| Mối quan hệ | Điều kiện |
| --- | --- |
| $(P)\equiv(Q)$ | $\dfrac{A}{A'}=\dfrac{B}{B'}=\dfrac{C}{C'}=\dfrac{D}{D'}$ |
| $(P)\parallel(Q)$ | $\dfrac{A}{A'}=\dfrac{B}{B'}=\dfrac{C}{C'}\ne\dfrac{D}{D'}$ |
| $(P)$ cắt $(Q)$ | $\dfrac AB\ne\dfrac{A'}{B'}$ hoặc $\dfrac BC\ne\dfrac{B'}{C'}$ hoặc $\dfrac AC\ne\dfrac{A'}{C'}$ |
| $(P)\perp(Q)$ | $AA'+BB'+CC'=0$ |`,
      formula: String.raw`(P)\perp(Q)\iff AA'+BB'+CC'=0`,
      note: String.raw`Điều kiện vuông góc là tích vô hướng hai vectơ pháp tuyến bằng 0.`,
    },
    {
      subtitle: 'Khoảng cách',
      content: String.raw`**Khoảng cách từ điểm đến mặt phẳng.** Với $M(x_0;y_0;z_0)$ và $(P):Ax+By+Cz+D=0$:
$$\mathrm d(M,(P))=\dfrac{\left|Ax_0+By_0+Cz_0+D\right|}{\sqrt{A^2+B^2+C^2}}.$$

**Khoảng cách giữa hai mặt phẳng song song.** Cho $(P):Ax+By+Cz+D=0$ và $(Q):Ax+By+Cz+D'=0$. Khi đó
$$\mathrm d((P),(Q))=\dfrac{\left|D-D'\right|}{\sqrt{A^2+B^2+C^2}}.$$`,
      formula: String.raw`\mathrm d(M,(P))=\dfrac{\left|Ax_0+By_0+Cz_0+D\right|}{\sqrt{A^2+B^2+C^2}}`,
      note: String.raw`Hai mặt phẳng phải có cùng bộ hệ số $A$, $B$, $C$ mới dùng công thức thứ hai.`,
    },
    {
      subtitle: 'Các dạng viết phương trình mặt phẳng',
      content: String.raw`1. Đi qua ba điểm $A$, $B$, $C$ không thẳng hàng: $\vec n=\left[\overrightarrow{AB},\overrightarrow{AC}\right]$.

2. Đi qua $A$ và song song với $(Q)$: $\vec n_{(P)}=\vec n_{(Q)}$.

3. Đi qua $A$ và vuông góc với đường thẳng $d$: $\vec n_{(P)}=\vec u_d$.

4. Mặt phẳng trung trực của $AB$: đi qua trung điểm $I$ của $AB$, có $\vec n=\overrightarrow{AB}$.

5. Đi qua $A$ và chứa đường thẳng $d$: $\vec n=\left[\vec u_d,\overrightarrow{AM}\right]$, $M\in d$.

6. Chứa hai đường thẳng cắt nhau $d_1$, $d_2$: $\vec n=\left[\vec u_{d_1},\vec u_{d_2}\right]$.

7. Chứa $d_1$ và song song với $d_2$ ($d_1$, $d_2$ chéo nhau): $\vec n=\left[\vec u_{d_1},\vec u_{d_2}\right]$.

8. Đi qua $A$ và song song với hai đường chéo nhau $d_1$, $d_2$: $\vec n=\left[\vec u_{d_1},\vec u_{d_2}\right]$.

9. Vuông góc với hai mặt phẳng cắt nhau $(Q)$, $(R)$: $\vec n=\left[\vec n_{(Q)},\vec n_{(R)}\right]$.

10. Chứa $d$ và vuông góc với $(Q)$: $\vec n=\left[\vec u_d,\vec n_{(Q)}\right]$.

11. Đi qua $A$, song song $d$ và vuông góc $(Q)$: $\vec n=\left[\vec u_d,\vec n_{(Q)}\right]$.

12. Song song $(Q)$ và cách $M$ một khoảng $h$: viết $(P):Ax+By+Cz+m=0$ rồi dùng công thức khoảng cách để tìm $m$.`,
      formula: String.raw`\vec n=\left[\overrightarrow{AB},\overrightarrow{AC}\right]`,
      note: String.raw`Tích có hướng của hai vectơ chỉ phương cho vectơ pháp tuyến.`,
    },
    {
      subtitle: 'Một số công thức tính nhanh',
      content: String.raw`**Hình chiếu của điểm trên mặt phẳng.** Hình chiếu của $M(x_M;y_M;z_M)$ trên $(P):Ax+By+Cz+D=0$ là
$$H\left(x_M-At;\,y_M-Bt;\,z_M-Ct\right),\quad t=\dfrac{Ax_M+By_M+Cz_M+D}{A^2+B^2+C^2}.$$

**Điểm đối xứng** của $M$ qua $(P)$ là
$$H\left(x_M-2At;\,y_M-2Bt;\,z_M-2Ct\right).$$

**Mặt phẳng phân giác** của hai mặt phẳng $(P):a_1x+b_1y+c_1z+d_1=0$ và $(Q):a_2x+b_2y+c_2z+d_2=0$:
$$\dfrac{a_1x+b_1y+c_1z+d_1}{\sqrt{a_1^2+b_1^2+c_1^2}}=\pm\dfrac{a_2x+b_2y+c_2z+d_2}{\sqrt{a_2^2+b_2^2+c_2^2}}.$$

**Mặt phẳng song song và cách đều** $(Q):ax+by+cz+d_1=0$ và $(R):ax+by+cz+d_2=0$ với $d_1\ne d_2$:
$$ax+by+cz+\dfrac{d_1+d_2}{2}=0.$$`,
      formula: String.raw`ax+by+cz+\dfrac{d_1+d_2}{2}=0`,
      note: String.raw`Công thức hình chiếu dùng hệ số $t$ giống tham số hóa.`,
    },
  ],

  examples: [
    {
      id: 'vd1',
      title: 'Viết phương trình mặt phẳng cơ bản',
      prompt: String.raw`Viết phương trình mặt phẳng $(P)$ đi qua $M(1;2;3)$ và có vectơ pháp tuyến $\vec n=(2;-1;4)$.`,
      steps: [
        String.raw`Dùng phương trình $A(x-x_0)+B(y-y_0)+C(z-z_0)=0$.`,
        String.raw`$2(x-1)-1(y-2)+4(z-3)=0$.`,
        String.raw`Rút gọn: $2x-y+4z-12=0$.`,
      ],
      answer: String.raw`$(P):2x-y+4z-12=0$.`,
    },
    {
      id: 'vd2',
      title: 'Mặt phẳng qua ba điểm',
      prompt: String.raw`Viết phương trình mặt phẳng đi qua $A(1;0;0)$, $B(0;2;0)$, $C(0;0;3)$.`,
      steps: [
        String.raw`Ba điểm nằm trên ba trục tọa độ nên dùng phương trình đoạn chắn.`,
        String.raw`$\dfrac x1+\dfrac y2+\dfrac z3=1$.`,
        String.raw`Quy đồng: $6x+3y+2z-6=0$.`,
      ],
      answer: String.raw`$6x+3y+2z-6=0$.`,
    },
    {
      id: 'vd3',
      title: 'Mặt phẳng trung trực',
      prompt: String.raw`Viết phương trình mặt phẳng trung trực của đoạn $AB$ với $A(1;2;3)$, $B(3;4;5)$.`,
      steps: [
        String.raw`Trung điểm $I(2;3;4)$.`,
        String.raw`$\overrightarrow{AB}=(2;2;2)$, chọn $\vec n=(1;1;1)$.`,
        String.raw`$(x-2)+(y-3)+(z-4)=0\iff x+y+z-9=0$.`,
      ],
      answer: String.raw`$x+y+z-9=0$.`,
    },
    {
      id: 'vd4',
      title: 'Khoảng cách từ điểm đến mặt phẳng',
      prompt: String.raw`Tính khoảng cách từ $M(1;2;3)$ đến $(P):2x-y+2z-6=0$.`,
      steps: [
        String.raw`Áp dụng công thức khoảng cách.`,
        String.raw`$\mathrm d=\dfrac{\left|2\cdot1-2+2\cdot3-6\right|}{\sqrt{4+1+4}}=\dfrac{0}{3}=0$.`,
        String.raw`Vậy $M$ nằm trên $(P)$.`,
      ],
      answer: String.raw`$\mathrm d(M,(P))=0$.`,
    },
    {
      id: 'vd5',
      title: 'Mặt phẳng vuông góc với đường thẳng',
      prompt: String.raw`Viết phương trình mặt phẳng $(P)$ đi qua $A(1;-1;2)$ và vuông góc với đường thẳng $d:\dfrac{x-1}{2}=\dfrac{y}{-1}=\dfrac{z+3}{3}$.`,
      steps: [
        String.raw`$(P)\perp d$ nên $\vec n_{(P)}=\vec u_d=(2;-1;3)$.`,
        String.raw`$2(x-1)-1(y+1)+3(z-2)=0$.`,
        String.raw`Rút gọn: $2x-y+3z-9=0$.`,
      ],
      answer: String.raw`$2x-y+3z-9=0$.`,
    },
  ],

  exercises: [
    {
      id: 'bt1',
      prompt: String.raw`Viết phương trình mặt phẳng đi qua $M(1;0;-2)$ và có vectơ pháp tuyến $\vec n=(1;2;-1)$.`,
      solution: String.raw`$(x-1)+2y-(z+2)=0\iff x+2y-z-3=0$.`,
    },
    {
      id: 'bt2',
      prompt: String.raw`Viết phương trình mặt phẳng đi qua $A(2;0;0)$, $B(0;-1;0)$, $C(0;0;4)$.`,
      solution: String.raw`$\dfrac x2+\dfrac{y}{-1}+\dfrac z4=1\iff2x-4y+z-4=0$.`,
    },
    {
      id: 'bt3',
      prompt: String.raw`Tính khoảng cách từ $M(0;0;1)$ đến $(P):x+2y+2z-3=0$.`,
      solution: String.raw`$\mathrm d=\dfrac{\left|0+0+2-3\right|}{\sqrt{1+4+4}}=\dfrac13$.`,
    },
    {
      id: 'bt4',
      prompt: String.raw`Viết phương trình mặt phẳng đi qua $A(1;2;-1)$ và song song với $(Q):2x-y+3z+5=0$.`,
      solution: String.raw`$\vec n=(2;-1;3)$ nên $2(x-1)-(y-2)+3(z+1)=0\iff2x-y+3z+3=0$.`,
    },
    {
      id: 'bt5',
      prompt: String.raw`Viết phương trình mặt phẳng đi qua $A(1;0;0)$ và chứa đường thẳng $d$ có vectơ chỉ phương $\vec u=(0;1;1)$ và đi qua $M(0;1;2)$.`,
      hint: String.raw`$\vec n=\left[\vec u,\overrightarrow{AM}\right]$.`,
      solution: String.raw`$\overrightarrow{AM}=(-1;1;2)$; $\vec n=\left[\vec u,\overrightarrow{AM}\right]=(1;-1;1)$. Phương trình: $(x-1)-y+z=0\iff x-y+z-1=0$.`,
    },
    {
      id: 'bt6',
      prompt: String.raw`Cho hai mặt phẳng $(P):x+2y-2z+3=0$ và $(Q):2x+4y-4z-5=0$. Chứng minh $(P)\parallel(Q)$ và tính khoảng cách giữa chúng.`,
      hint: String.raw`Đưa $(P)$ về cùng bộ hệ số với $(Q)$.`,
      solution: String.raw`$(P):2x+4y-4z+6=0$ nên $\dfrac21=\dfrac42=\dfrac{-4}{-4}\ne\dfrac{6}{-5}$, suy ra $(P)\parallel(Q)$. Khoảng cách: $\dfrac{|6-(-5)|}{\sqrt{4+16+16}}=\dfrac{11}{6}$.`,
    },
  ],

  quiz: [
    {
      id: 'q1',
      question: String.raw`Mặt phẳng $(P):2x-3y+z-1=0$ có vectơ pháp tuyến là`,
      options: [
        String.raw`$(2;3;1)$`,
        String.raw`$(-2;-3;1)$`,
        String.raw`$(2;-3;-1)$`,
        String.raw`$(2;-3;1)$`,
      ],
      answer: 3,
      explanation: 'Hệ số của $x$, $y$, $z$ chính là tọa độ vectơ pháp tuyến.',
    },
    {
      id: 'q2',
      question: String.raw`Mặt phẳng $(Oxy)$ có vectơ pháp tuyến là`,
      options: [
        String.raw`$\vec i=(1;0;0)$`,
        String.raw`$\vec k=(0;0;1)$`,
        String.raw`$\vec j=(0;1;0)$`,
        String.raw`$(1;1;1)$`,
      ],
      answer: 1,
      explanation: 'Mặt phẳng $(Oxy)$ vuông góc với trục $Oz$.',
    },
    {
      id: 'q3',
      question: String.raw`Mặt phẳng $(\alpha):Ax+By+Cz+D=0$ đi qua gốc tọa độ khi`,
      options: [
        String.raw`$D=0$`,
        String.raw`$A=0$`,
        String.raw`$B=0$`,
        String.raw`$A=B=C=0$`,
      ],
      answer: 0,
      explanation: String.raw`Thay $O(0;0;0)$ vào phương trình được $D=0$.`,
    },
    {
      id: 'q4',
      question: String.raw`Hai mặt phẳng $(P):Ax+By+Cz+D=0$ và $(Q):A'x+B'y+C'z+D'=0$ vuông góc khi`,
      options: [
        String.raw`$\dfrac{A}{A'}=\dfrac{B}{B'}=\dfrac{C}{C'}$`,
        String.raw`$AA'+BB'+CC'=0$`,
        String.raw`$A+A'+B+B'+C+C'=0$`,
        String.raw`$DD'=0$`,
      ],
      answer: 1,
      explanation: 'Tích vô hướng hai vectơ pháp tuyến bằng 0.',
    },
    {
      id: 'q5',
      question: String.raw`Khoảng cách từ $M(1;1;1)$ đến $(P):x+y+z-3=0$ là`,
      options: [
        String.raw`$\sqrt3$`,
        String.raw`$1$`,
        String.raw`$0$`,
        String.raw`$3$`,
      ],
      answer: 2,
      explanation: String.raw`$1+1+1-3=0$ nên $M\in(P)$, khoảng cách bằng 0.`,
    },
    {
      id: 'q6',
      question: String.raw`Mặt phẳng đi qua $M(x_0;y_0;z_0)$ và có vectơ pháp tuyến $\vec n=(A;B;C)$ có phương trình`,
      options: [
        String.raw`$A(x-x_0)+B(y-y_0)+C(z-z_0)=0$`,
        String.raw`$Ax+By+Cz+D=0$ với $D$ bất kì`,
        String.raw`$A(x+x_0)+B(y+y_0)+C(z+z_0)=0$`,
        String.raw`$x_0x+y_0y+z_0z+D=0$`,
      ],
      answer: 0,
      explanation: 'Phương trình mặt phẳng qua một điểm và có vectơ pháp tuyến cho trước.',
    },
    {
      id: 'q7',
      question: String.raw`Mặt phẳng $(\alpha):2x+Cz+D=0$ song song với trục`,
      options: [
        String.raw`$Ox$`,
        String.raw`$Oz$`,
        String.raw`Không song song với trục nào`,
        String.raw`$Oy$`,
      ],
      answer: 3,
      explanation: String.raw`Hệ số $B=0$ nên $(\alpha)\parallel Oy$.`,
    },
    {
      id: 'q8',
      question: String.raw`Mặt phẳng đi qua ba điểm $A(a;0;0)$, $B(0;b;0)$, $C(0;0;c)$ có phương trình`,
      options: [
        String.raw`$ax+by+cz=1$`,
        String.raw`$\dfrac xa+\dfrac yb+\dfrac zc=0$`,
        String.raw`$\dfrac xa+\dfrac yb+\dfrac zc=1$`,
        String.raw`$x+y+z=abc$`,
      ],
      answer: 2,
      explanation: 'Phương trình đoạn chắn.',
    },
  ],

  trueFalse: [
    {
      id: 'tf1',
      stem: 'Các khẳng định về vectơ pháp tuyến:',
      items: [
        { text: 'Vectơ pháp tuyến của mặt phẳng vuông góc với mọi đường thẳng nằm trong mặt phẳng.', answer: true },
        { text: 'Mỗi mặt phẳng chỉ có duy nhất một vectơ pháp tuyến.', answer: false },
        { text: String.raw`$(P):Ax+By+Cz+D=0$ có vectơ pháp tuyến $\vec n=(A;B;C)$.`, answer: true },
        { text: String.raw`Mọi vectơ cùng phương với $\vec n$ đều là vectơ pháp tuyến của $(P)$.`, answer: true },
      ],
      explanation: 'Mỗi mặt phẳng có vô số vectơ pháp tuyến cùng phương với nhau.',
    },
    {
      id: 'tf2',
      stem: 'Các trường hợp đặc biệt của phương trình mặt phẳng:',
      items: [
        { text: String.raw`$D=0$ thì mặt phẳng đi qua gốc tọa độ.`, answer: true },
        { text: String.raw`$A=0$ thì mặt phẳng song song hoặc chứa trục $Ox$.`, answer: true },
        { text: String.raw`$A=B=0$ thì mặt phẳng song song hoặc trùng với $(Oxy)$.`, answer: true },
        { text: String.raw`$C=0$ thì mặt phẳng vuông góc với trục $Oz$.`, answer: false },
      ],
      explanation: String.raw`$C=0$ thì mặt phẳng song song hoặc chứa $Oz$, không vuông góc với $Oz$.`,
    },
    {
      id: 'tf3',
      stem: 'Các khẳng định về vị trí tương đối và khoảng cách:',
      items: [
        { text: String.raw`$(P)\parallel(Q)$ khi hai vectơ pháp tuyến cùng phương và $D$ không tỉ lệ.`, answer: true },
        { text: 'Hai mặt phẳng luôn cắt nhau theo một đường thẳng.', answer: false },
        { text: String.raw`$(P)\perp(Q)$ khi $\vec n_{(P)}\cdot\vec n_{(Q)}=0$.`, answer: true },
        { text: String.raw`Khoảng cách giữa hai mặt phẳng song song phụ thuộc việc chọn điểm.`, answer: false },
      ],
      explanation: 'Hai mặt phẳng có thể song song, trùng nhau hoặc cắt nhau; khoảng cách giữa hai mặt phẳng song song không phụ thuộc điểm chọn.',
    },
  ],

  shortAnswer: [
    {
      id: 'sa1',
      question: String.raw`Mặt phẳng $(P):3x-2y+z-6=0$ có hệ số $C$ bằng bao nhiêu?`,
      answer: '1',
      unit: '',
      explanation: String.raw`Hệ số của $z$ là $1$.`,
    },
    {
      id: 'sa2',
      question: String.raw`Tính khoảng cách từ $O(0;0;0)$ đến $(P):x+2y+2z-6=0$.`,
      answer: '2',
      unit: '',
      explanation: String.raw`$\mathrm d=\dfrac{|{-6}|}{\sqrt{1+4+4}}=\dfrac63=2$.`,
    },
    {
      id: 'sa3',
      question: String.raw`Cho $A(1;0;0)$, $B(0;1;0)$, $C(0;0;1)$. Mặt phẳng $(ABC)$ có phương trình $2x+ky+2z-2=0$. Tìm $k$.`,
      answer: '2',
      unit: '',
      explanation: String.raw`$(ABC):x+y+z=1$, nhân $2$ được $2x+2y+2z-2=0$ nên $k=2$.`,
    },
    {
      id: 'sa4',
      question: String.raw`Cho $(P):x+2y+2z+3=0$ và $(Q):x+2y+2z-3=0$. Tính khoảng cách giữa hai mặt phẳng.`,
      answer: '2',
      unit: '',
      explanation: String.raw`$\mathrm d=\dfrac{|3-(-3)|}{3}=2$.`,
    },
  ],
}

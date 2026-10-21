import type { Lesson } from '../types'

export const chuong12Bai2: Lesson = {
  id: 'bai-2',
  chapterId: 'chuong-12',
  title: 'Phương trình đường thẳng trong không gian',
  summary: 'Vectơ chỉ phương, phương trình tham số – chính tắc, vị trí tương đối và khoảng cách.',
  minutes: 28,

  theory: [
    {
      subtitle: 'Vectơ chỉ phương của đường thẳng',
      content: String.raw`Vectơ $\vec u\ne\vec 0$ và có giá song song hoặc trùng với đường thẳng $d$ được gọi là **vectơ chỉ phương** của $d$.

Đường thẳng $d$ đi qua $M(x_0;y_0;z_0)$ và có vectơ chỉ phương $\vec u=(a;b;c)$ có

- phương trình tham số:
$$\begin{cases}x=x_0+at\\ y=y_0+bt\\ z=z_0+ct\end{cases}$$
- phương trình chính tắc (khi $abc\ne0$):
$$\dfrac{x-x_0}{a}=\dfrac{y-y_0}{b}=\dfrac{z-z_0}{c}.$$

Vectơ chỉ phương của các trục: $Ox$ có $\vec i=(1;0;0)$; $Oy$ có $\vec j=(0;1;0)$; $Oz$ có $\vec k=(0;0;1)$.`,
      formula: String.raw`\dfrac{x-x_0}{a}=\dfrac{y-y_0}{b}=\dfrac{z-z_0}{c}`,
      note: String.raw`Một đường thẳng có vô số phương trình tham số tùy theo điểm và vectơ chỉ phương chọn.`,
    },
    {
      subtitle: 'Vị trí tương đối của hai đường thẳng',
      content: String.raw`Cho $d$ đi qua $M$, có vectơ chỉ phương $\vec u$ và $d'$ đi qua $M'$, có vectơ chỉ phương $\vec u'$.

| Vị trí | Điều kiện |
| --- | --- |
| $d\parallel d'$ | $\left[\vec u,\vec u'\right]=\vec 0$ và $\left[\vec u,\overrightarrow{MM'}\right]\ne\vec 0$ |
| $d\equiv d'$ | $\left[\vec u,\vec u'\right]=\vec 0$ và $\left[\vec u,\overrightarrow{MM'}\right]=\vec 0$ |
| $d$ cắt $d'$ | $\left[\vec u,\vec u'\right]\ne\vec 0$ và $\left[\vec u,\vec u'\right]\cdot\overrightarrow{MM'}=0$ |
| $d$ chéo nhau $d'$ | $\left[\vec u,\vec u'\right]\cdot\overrightarrow{MM'}\ne0$ |`,
      formula: String.raw`d\ \text{cắt}\ d'\iff\left[\vec u,\vec u'\right]\cdot\overrightarrow{MM'}=0`,
      note: String.raw`Tích hỗn hợp $\left[\vec u,\vec u'\right]\cdot\overrightarrow{MM'}$ quyết định đồng phẳng hay chéo nhau.`,
    },
    {
      subtitle: 'Vị trí tương đối của đường thẳng và mặt phẳng',
      content: String.raw`Cho $d$ đi qua $M$, có vectơ chỉ phương $\vec u$ và mặt phẳng $(P)$ có vectơ pháp tuyến $\vec n$.

| Vị trí | Điều kiện |
| --- | --- |
| $d\subset(P)$ | $\vec u\cdot\vec n=0$ và $M\in(P)$ |
| $d\parallel(P)$ | $\vec u\cdot\vec n=0$ và $M\notin(P)$ |
| $d$ cắt $(P)$ | $\vec u\ne k\vec n$ |
| $d\perp(P)$ | $\vec u=k\vec n$ |`,
      formula: String.raw`d\perp(P)\iff\vec u=k\vec n`,
      note: String.raw`Điều kiện $\vec u\cdot\vec n=0$ cho biết đường thẳng song song hoặc nằm trong mặt phẳng.`,
    },
    {
      subtitle: 'Khoảng cách',
      content: String.raw`**Khoảng cách từ điểm đến đường thẳng.** Cho $d$ đi qua $A$, có vectơ chỉ phương $\vec u$. Khi đó
$$\mathrm d(M,d)=\dfrac{\left|\left[\overrightarrow{AM},\vec u\right]\right|}{\left|\vec u\right|}.$$

**Khoảng cách giữa hai đường thẳng chéo nhau.** Cho $d$ đi qua $M$, có vectơ chỉ phương $\vec u$ và $d'$ đi qua $M'$, có vectơ chỉ phương $\vec u'$. Khi đó
$$\mathrm d(d,d')=\dfrac{\left|\left[\vec u,\vec u'\right]\cdot\overrightarrow{MM'}\right|}{\left|\left[\vec u,\vec u'\right]\right|}.$$`,
      formula: String.raw`\mathrm d(M,d)=\dfrac{\left|\left[\overrightarrow{AM},\vec u\right]\right|}{\left|\vec u\right|}`,
      note: String.raw`Công thức thứ hai chính là khoảng cách giữa hai đường chéo nhau.`,
    },
    {
      subtitle: 'Các dạng viết phương trình đường thẳng',
      content: String.raw`1. Đi qua hai điểm $A$, $B$: $\vec u=\overrightarrow{AB}$.

2. Đi qua $A$ và song song với $d'$: $\vec u=\vec u_{d'}$.

3. Đi qua $A$ và vuông góc với $(P)$: $\vec u=\vec n_{(P)}$.

4. Đi qua $A$ và vuông góc với hai đường $d_1$, $d_2$: $\vec u=\left[\vec u_{d_1},\vec u_{d_2}\right]$.

5. Đi qua $A$ và song song với hai mặt phẳng $(P)$, $(Q)$: $\vec u=\left[\vec n_{(P)},\vec n_{(Q)}\right]$.

6. Là giao tuyến của $(P)$ và $(Q)$: $\vec u=\left[\vec n_{(P)},\vec n_{(Q)}\right]$, tìm một điểm chung bằng cách chọn $z=0$ rồi giải hệ.

7. Đi qua $A$, vuông góc và cắt $d'$: tham số hóa $d'$, gọi $H$ là hình chiếu của $A$ trên $d'$, khi đó $\vec u=\overrightarrow{AH}$.

8. Đi qua $A$ và cắt hai đường $d_1$, $d_2$: tham số hóa $d_1$, $d_2$ được $M$, $N$; cho $A$, $M$, $N$ thẳng hàng để tìm tham số, rồi $\vec u=\overrightarrow{AM}$.

9. Đi qua $A$, vuông góc $d_1$ và cắt $d_2$: tham số hóa $d_2$ được $M$, dùng $\overrightarrow{AM}\perp\vec u_{d_1}$ để tìm $M$.

10. Song song với $\Delta$ và cắt $d_1$, $d_2$: tham số hóa $d_1$, $d_2$ được $M$, $N$; cho $\overrightarrow{MN}$ cùng phương $\vec u_\Delta$.

11. Nằm trong $(P)$ và cắt $d_1$, $d_2$: tìm giao điểm $M$, $N$ của $d_1$, $d_2$ với $(P)$; khi đó $d$ qua $M$, $N$.

12. Là đường vuông góc chung của $d_1$, $d_2$ chéo nhau: tham số hóa được $M$, $N$; giải hệ $\overrightarrow{MN}\cdot\vec u_{d_1}=0$, $\overrightarrow{MN}\cdot\vec u_{d_2}=0$.

13. Là hình chiếu của $\Delta$ xuống $(P)$: tìm giao điểm $I=\Delta\cap(P)$, lấy $M\in\Delta$ và hình chiếu $H$ của $M$ trên $(P)$, khi đó $d$ qua $I$, $H$.`,
      formula: String.raw`\vec u=\left[\vec n_{(P)},\vec n_{(Q)}\right]`,
      note: String.raw`Giao tuyến của hai mặt phẳng có vectơ chỉ phương là tích có hướng hai pháp tuyến.`,
    },
    {
      subtitle: 'Một số công thức tính nhanh',
      content: String.raw`**Hình chiếu của điểm trên đường thẳng.** Hình chiếu của $M(x_M;y_M;z_M)$ trên
$$d:\begin{cases}x=x_0+at\\ y=y_0+bt\\ z=z_0+ct\end{cases}$$
là $H(x_0+at;\,y_0+bt;\,z_0+ct)$ với
$$t=\dfrac{a(x_M-x_0)+b(y_M-y_0)+c(z_M-z_0)}{a^2+b^2+c^2}.$$

**Điểm đối xứng** của $M$ qua $d$ là $M'(2x_0-x_M+2at;\,2y_0-y_M+2bt;\,2z_0-z_M+2ct)$.

**Hình chiếu vuông góc của đường thẳng lên mặt phẳng.** Với $\Delta$ có vectơ chỉ phương $\vec u=(a;b;c)$ và $(\alpha):Ax+By+Cz+D=0$, hình chiếu vuông góc của $\Delta$ lên $(\alpha)$ có phương trình tham số với
$$x=x_0-at+\left[a\left(B^2+C^2\right)-A\left(bB+cC\right)\right]k,$$
$$y=y_0-bt+\left[b\left(A^2+C^2\right)-B\left(aA+cC\right)\right]k,$$
$$z=z_0-ct+\left[c\left(A^2+B^2\right)-C\left(aA+bB\right)\right]k.$$`,
      formula: String.raw`t=\dfrac{a(x_M-x_0)+b(y_M-y_0)+c(z_M-z_0)}{a^2+b^2+c^2}`,
      note: String.raw`Công thức hình chiếu lên mặt phẳng khá cồng kềnh, thực tế nên làm theo hai bước dựng điểm.`,
    },
  ],

  examples: [
    {
      id: 'vd1',
      title: 'Viết phương trình tham số',
      prompt: String.raw`Viết phương trình tham số của đường thẳng $d$ đi qua $M(1;2;-1)$ và có vectơ chỉ phương $\vec u=(2;-1;3)$.`,
      steps: [
        String.raw`Dùng công thức phương trình tham số.`,
        String.raw`$d:\begin{cases}x=1+2t\\ y=2-t\\ z=-1+3t\end{cases}$`,
      ],
      answer: String.raw`$d:\begin{cases}x=1+2t\\ y=2-t\\ z=-1+3t\end{cases}$`,
    },
    {
      id: 'vd2',
      title: 'Viết phương trình chính tắc',
      prompt: String.raw`Viết phương trình chính tắc của đường thẳng đi qua $A(1;-2;3)$ và $B(3;0;1)$.`,
      steps: [
        String.raw`$\vec u=\overrightarrow{AB}=(2;2;-2)$, chọn $\vec u=(1;1;-1)$.`,
        String.raw`Phương trình chính tắc: $\dfrac{x-1}{1}=\dfrac{y+2}{1}=\dfrac{z-3}{-1}$.`,
      ],
      answer: String.raw`$\dfrac{x-1}{1}=\dfrac{y+2}{1}=\dfrac{z-3}{-1}$.`,
    },
    {
      id: 'vd3',
      title: 'Xét vị trí tương đối',
      prompt: String.raw`Xét vị trí tương đối của $d:\dfrac{x-1}{2}=\dfrac{y}{1}=\dfrac{z+1}{-1}$ và $d':\dfrac{x}{1}=\dfrac{y-1}{-1}=\dfrac{z+2}{2}$.`,
      steps: [
        String.raw`$\vec u=(2;1;-1)$, $\vec u'=(1;-1;2)$; $\left[\vec u,\vec u'\right]=(1;-5;-3)\ne\vec 0$ nên $d$ và $d'$ không song song.`,
        String.raw`$M(1;0;-1)\in d$, $M'(0;1;-2)\in d'$, $\overrightarrow{MM'}=(-1;1;-1)$.`,
        String.raw`$\left[\vec u,\vec u'\right]\cdot\overrightarrow{MM'}=-1-5+3=-3\ne0$ nên $d$ và $d'$ chéo nhau.`,
      ],
      answer: String.raw`$d$ và $d'$ chéo nhau.`,
    },
    {
      id: 'vd4',
      title: 'Khoảng cách từ điểm đến đường thẳng',
      prompt: String.raw`Tính khoảng cách từ $M(1;1;1)$ đến $d:\dfrac{x}{1}=\dfrac{y}{1}=\dfrac{z}{1}$.`,
      steps: [
        String.raw`$A(0;0;0)\in d$, $\vec u=(1;1;1)$, $\overrightarrow{AM}=(1;1;1)$.`,
        String.raw`$\left[\overrightarrow{AM},\vec u\right]=(0;0;0)$ nên $M\in d$.`,
        String.raw`Vậy khoảng cách bằng 0.`,
      ],
      answer: String.raw`$\mathrm d(M,d)=0$.`,
    },
    {
      id: 'vd5',
      title: 'Giao tuyến của hai mặt phẳng',
      prompt: String.raw`Viết phương trình đường thẳng $d$ là giao tuyến của $(P):x+y+z-3=0$ và $(Q):x-y+2z-1=0$.`,
      steps: [
        String.raw`$\vec n_{(P)}=(1;1;1)$, $\vec n_{(Q)}=(1;-1;2)$; $\vec u=\left[\vec n_{(P)},\vec n_{(Q)}\right]=(3;-1;-2)$.`,
        String.raw`Chọn $z=0$, giải $\begin{cases}x+y=3\\ x-y=1\end{cases}$ được $x=2$, $y=1$. Điểm $A(2;1;0)\in d$.`,
        String.raw`$d:\dfrac{x-2}{3}=\dfrac{y-1}{-1}=\dfrac{z}{-2}$.`,
      ],
      answer: String.raw`$d:\dfrac{x-2}{3}=\dfrac{y-1}{-1}=\dfrac{z}{-2}$.`,
    },
  ],

  exercises: [
    {
      id: 'bt1',
      prompt: String.raw`Viết phương trình tham số của đường thẳng đi qua $A(1;0;2)$ và có vectơ chỉ phương $\vec u=(-1;2;1)$.`,
      solution: String.raw`$\begin{cases}x=1-t\\ y=2t\\ z=2+t\end{cases}$`,
    },
    {
      id: 'bt2',
      prompt: String.raw`Viết phương trình chính tắc của đường thẳng đi qua $M(2;-1;3)$ và vuông góc với $(P):x+2y-z+1=0$.`,
      solution: String.raw`$\vec u=(1;2;-1)$ nên $\dfrac{x-2}{1}=\dfrac{y+1}{2}=\dfrac{z-3}{-1}$.`,
    },
    {
      id: 'bt3',
      prompt: String.raw`Tính khoảng cách từ $M(0;0;0)$ đến $d:\dfrac{x-1}{1}=\dfrac{y-1}{1}=\dfrac{z-1}{1}$.`,
      hint: String.raw`Dùng công thức khoảng cách từ điểm đến đường thẳng.`,
      solution: String.raw`$A(1;1;1)$, $\vec u=(1;1;1)$, $\overrightarrow{AM}=(-1;-1;-1)$; $\left[\overrightarrow{AM},\vec u\right]=\vec 0$ nên $M\in d$, khoảng cách bằng 0.`,
    },
    {
      id: 'bt4',
      prompt: String.raw`Xét vị trí tương đối của $d:\dfrac{x}{1}=\dfrac{y-1}{2}=\dfrac{z}{1}$ và $d':\dfrac{x-1}{2}=\dfrac{y}{3}=\dfrac{z+1}{2}$.`,
      solution: String.raw`$\vec u=(1;2;1)$, $\vec u'=(2;3;2)$ không cùng phương nên hai đường cắt nhau hoặc chéo nhau. $\left[\vec u,\vec u'\right]=(1;0;-1)$, $\overrightarrow{MM'}=(1;-1;-1)$ với $M(0;1;0)$, $M'(1;0;-1)$. Tích hỗn hợp bằng $1+1=2\ne0$ nên chéo nhau.`,
    },
    {
      id: 'bt5',
      prompt: String.raw`Viết phương trình đường thẳng đi qua $A(1;1;1)$ và vuông góc với cả $d_1:\dfrac{x}{1}=\dfrac{y}{1}=\dfrac{z}{1}$ và $d_2:\dfrac{x}{1}=\dfrac{y}{2}=\dfrac{z}{3}$.`,
      solution: String.raw`$\vec u=\left[(1;1;1),(1;2;3)\right]=(1;-2;1)$. Phương trình: $\dfrac{x-1}{1}=\dfrac{y-1}{-2}=\dfrac{z-1}{1}$.`,
    },
    {
      id: 'bt6',
      prompt: String.raw`Tính khoảng cách giữa hai đường thẳng $d:\dfrac{x}{1}=\dfrac{y}{1}=\dfrac{z}{1}$ và $d':\dfrac{x-1}{1}=\dfrac{y}{1}=\dfrac{z+1}{1}$.`,
      hint: String.raw`Hai đường song song nên khoảng cách bằng khoảng cách từ một điểm trên $d'$ đến $d$.`,
      solution: String.raw`Hai đường cùng vectơ chỉ phương $(1;1;1)$ nên song song. Lấy $M'(1;0;-1)\in d'$, $A(0;0;0)\in d$. $\left[\overrightarrow{AM'},\vec u\right]=(1;-2;1)$, độ dài $\sqrt6$; chia $\sqrt3$ được $\sqrt2$.`,
    },
  ],

  quiz: [
    {
      id: 'q1',
      question: String.raw`Đường thẳng $d:\dfrac{x-1}{2}=\dfrac{y}{-1}=\dfrac{z+3}{4}$ có vectơ chỉ phương`,
      options: [
        String.raw`$(1;0;-3)$`,
        String.raw`$(2;-1;4)$`,
        String.raw`$(2;1;4)$`,
        String.raw`$(-2;1;4)$`,
      ],
      answer: 1,
      explanation: 'Mẫu số của các phân thức là tọa độ vectơ chỉ phương.',
    },
    {
      id: 'q2',
      question: String.raw`Phương trình tham số của đường thẳng đi qua $M(1;2;3)$ và có vectơ chỉ phương $\vec u=(1;-1;2)$ là`,
      options: [
        String.raw`$\begin{cases}x=1+t\\ y=2-t\\ z=3+2t\end{cases}$`,
        String.raw`$\begin{cases}x=1-t\\ y=2+t\\ z=3+2t\end{cases}$`,
        String.raw`$\begin{cases}x=1+t\\ y=2+t\\ z=3+2t\end{cases}$`,
        String.raw`$\begin{cases}x=1+t\\ y=2-t\\ z=3-2t\end{cases}$`,
      ],
      answer: 0,
      explanation: String.raw`Tọa độ điểm cộng $t$ nhân vectơ chỉ phương.`,
    },
    {
      id: 'q3',
      question: String.raw`Đường thẳng $d$ có vectơ chỉ phương $\vec u$ vuông góc với mặt phẳng $(P)$ có vectơ pháp tuyến $\vec n$ khi`,
      options: [
        String.raw`$\vec u\cdot\vec n=0$`,
        String.raw`$\left[\vec u,\vec n\right]=\vec 0$ và $\vec u\ne\vec n$`,
        String.raw`$\vec u=k\vec n$`,
        String.raw`$\vec u+\vec n=\vec 0$`,
      ],
      answer: 2,
      explanation: String.raw`Đường thẳng vuông góc mặt phẳng thì vectơ chỉ phương cùng phương vectơ pháp tuyến.`,
    },
    {
      id: 'q4',
      question: String.raw`Hai đường thẳng có $\left[\vec u,\vec u'\right]\cdot\overrightarrow{MM'}\ne0$ thì`,
      options: [
        'Song song',
        'Trùng nhau',
        'Cắt nhau',
        'Chéo nhau',
      ],
      answer: 3,
      explanation: 'Tích hỗn hợp khác 0 nghĩa là không đồng phẳng.',
    },
    {
      id: 'q5',
      question: String.raw`Khoảng cách từ điểm $M$ đến đường thẳng $d$ đi qua $A$ có vectơ chỉ phương $\vec u$ là`,
      options: [
        String.raw`$\dfrac{\left|\overrightarrow{AM}\cdot\vec u\right|}{\left|\vec u\right|}$`,
        String.raw`$\dfrac{\left|\left[\overrightarrow{AM},\vec u\right]\right|}{\left|\vec u\right|}$`,
        String.raw`$\left|\left[\overrightarrow{AM},\vec u\right]\right|$`,
        String.raw`$\dfrac{\left|\overrightarrow{AM}\right|}{\left|\vec u\right|}$`,
      ],
      answer: 1,
      explanation: 'Công thức khoảng cách từ điểm đến đường thẳng.',
    },
    {
      id: 'q6',
      question: String.raw`Giao tuyến của hai mặt phẳng $(P)$ và $(Q)$ có vectơ chỉ phương`,
      options: [
        String.raw`$\vec n_{(P)}+\vec n_{(Q)}$`,
        String.raw`$\vec n_{(P)}-\vec n_{(Q)}$`,
        String.raw`$\left[\vec n_{(P)},\vec n_{(Q)}\right]$`,
        String.raw`$\vec n_{(P)}\cdot\vec n_{(Q)}$`,
      ],
      answer: 2,
      explanation: 'Vectơ chỉ phương của giao tuyến vuông góc với cả hai pháp tuyến.',
    },
    {
      id: 'q7',
      question: String.raw`Đường thẳng đi qua $A(1;0;0)$ và vuông góc với $(P):x+2y+3z-1=0$ có vectơ chỉ phương`,
      options: [
        String.raw`$(1;2;3)$`,
        String.raw`$(1;0;0)$`,
        String.raw`$(2;3;1)$`,
        String.raw`$(0;2;3)$`,
      ],
      answer: 0,
      explanation: String.raw`$\vec u=\vec n_{(P)}=(1;2;3)$.`,
    },
    {
      id: 'q8',
      question: String.raw`Khoảng cách giữa hai đường thẳng chéo nhau $d$, $d'$ được tính bởi`,
      options: [
        String.raw`$\dfrac{\left|\overrightarrow{MM'}\right|}{\left|\left[\vec u,\vec u'\right]\right|}$`,
        String.raw`$\dfrac{\left|\left[\vec u,\vec u'\right]\right|}{\left|\overrightarrow{MM'}\right|}$`,
        String.raw`$\dfrac{\left|\left[\vec u,\vec u'\right]\cdot\overrightarrow{MM'}\right|}{\left|\left[\vec u,\vec u'\right]\right|}$`,
        String.raw`$\left|\overrightarrow{MM'}\right|$`,
      ],
      answer: 2,
      explanation: 'Công thức khoảng cách giữa hai đường chéo nhau.',
    },
  ],

  trueFalse: [
    {
      id: 'tf1',
      stem: 'Các khẳng định về phương trình đường thẳng:',
      items: [
        { text: 'Đường thẳng có vô số vectơ chỉ phương cùng phương với nhau.', answer: true },
        { text: String.raw`Phương trình chính tắc luôn viết được với mọi đường thẳng.`, answer: false },
        { text: 'Phương trình tham số của một đường thẳng là duy nhất.', answer: false },
        { text: String.raw`Đường thẳng $d:\dfrac{x-x_0}{a}=\dfrac{y-y_0}{b}=\dfrac{z-z_0}{c}$ đi qua $M(x_0;y_0;z_0)$.`, answer: true },
      ],
      explanation: String.raw`Phương trình chính tắc chỉ viết được khi $abc\ne0$; phương trình tham số không duy nhất.`,
    },
    {
      id: 'tf2',
      stem: 'Các khẳng định về vị trí tương đối:',
      items: [
        { text: String.raw`$d\parallel d'$ khi $\left[\vec u,\vec u'\right]=\vec 0$ và $M'\notin d$.`, answer: true },
        { text: String.raw`$d\equiv d'$ khi $\left[\vec u,\vec u'\right]=\vec 0$ và $M'\in d$.`, answer: true },
        { text: 'Hai đường thẳng chéo nhau thì không đồng phẳng.', answer: true },
        { text: String.raw`$d\perp(P)$ khi $\vec u\cdot\vec n=0$.`, answer: false },
      ],
      explanation: String.raw`$d\perp(P)$ khi $\vec u=k\vec n$; $\vec u\cdot\vec n=0$ là song song hoặc nằm trong mặt phẳng.`,
    },
    {
      id: 'tf3',
      stem: 'Các khẳng định về khoảng cách:',
      items: [
        { text: String.raw`Khoảng cách từ điểm đến đường thẳng bằng 0 khi điểm thuộc đường thẳng.`, answer: true },
        { text: String.raw`Khoảng cách giữa hai đường thẳng song song bằng khoảng cách từ một điểm trên đường này đến đường kia.`, answer: true },
        { text: String.raw`Công thức $\dfrac{\left|\left[\vec u,\vec u'\right]\cdot\overrightarrow{MM'}\right|}{\left|\left[\vec u,\vec u'\right]\right|}$ dùng được cho hai đường cắt nhau.`, answer: false },
        { text: 'Khoảng cách giữa hai đường chéo nhau luôn dương.', answer: true },
      ],
      explanation: 'Công thức khoảng cách chéo nhau chỉ dùng khi hai đường chéo nhau (mẫu khác 0).',
    },
  ],

  shortAnswer: [
    {
      id: 'sa1',
      question: String.raw`Đường thẳng $d:\dfrac{x-1}{3}=\dfrac{y+2}{-1}=\dfrac{z}{2}$ có vectơ chỉ phương $\vec u=(a;-1;2)$. Tìm $a$.`,
      answer: '3',
      unit: '',
      explanation: String.raw`Mẫu của $x$ là $3$ nên $a=3$.`,
    },
    {
      id: 'sa2',
      question: String.raw`Đường thẳng đi qua $A(1;2;3)$ và $B(4;2;3)$ có vectơ chỉ phương $\vec u=(k;0;0)$. Tìm $k$.`,
      answer: '3',
      unit: '',
      explanation: String.raw`$\overrightarrow{AB}=(3;0;0)$ nên $k=3$.`,
    },
    {
      id: 'sa3',
      question: String.raw`Tính khoảng cách từ $M(1;1;1)$ đến đường thẳng $d$ đi qua $A(1;1;0)$ và có vectơ chỉ phương $\vec u=(1;1;0)$.`,
      answer: '1',
      unit: '',
      explanation: String.raw`$\overrightarrow{AM}=(0;0;1)$, $\left[\overrightarrow{AM},\vec u\right]=(-1;1;0)$ có độ dài $\sqrt2$; $\left|\vec u\right|=\sqrt2$ nên $\mathrm d=1$.`,
    },
    {
      id: 'sa4',
      question: String.raw`Đường thẳng $d$ có vectơ chỉ phương $\vec u=(2;-1;3)$ và vuông góc với mặt phẳng $(P):4x+ky+6z-1=0$. Tìm $k$.`,
      answer: '-2',
      unit: '',
      explanation: String.raw`$\vec n=(4;k;6)$ cùng phương $(2;-1;3)$ nên $k=-2$.`,
    },
  ],
}

import type { Lesson } from '../types'

export const chuong12Bai6: Lesson = {
  id: 'bai-6',
  chapterId: 'chuong-12',
  title: 'Phương pháp tọa độ hóa hình không gian',
  summary: 'Chọn hệ trục tọa độ phù hợp và giải bài toán hình học không gian bằng phương pháp tọa độ.',
  minutes: 28,

  theory: [
    {
      subtitle: 'Quy trình giải bằng phương pháp tọa độ',
      content: String.raw`**Bước 1. Chọn hệ trục tọa độ.** Chọn gốc $O$ tại một đỉnh hoặc tâm có nhiều đường vuông góc; chọn ba trục theo ba cạnh đôi một vuông góc.

**Bước 2. Xác định tọa độ các điểm liên quan.** Ghi tọa độ đỉnh, trung điểm, trọng tâm, chân đường cao.

**Bước 3. Chuyển yêu cầu bài toán sang ngôn ngữ tọa độ.**

- Chứng minh vuông góc: tích vô hướng bằng 0.
- Chứng minh song song: hai vectơ cùng phương.
- Tính góc: dùng công thức $\cos$ hoặc $\sin$.
- Tính khoảng cách: công thức điểm – mặt phẳng, điểm – đường thẳng, hai đường chéo nhau.
- Tính thể tích: công thức tích hỗn hợp.

**Bước 4. Tính toán và kết luận.**`,
      formula: String.raw`V_{ABCD}=\dfrac16\left|\left[\overrightarrow{AB},\overrightarrow{AC}\right]\cdot\overrightarrow{AD}\right|`,
      note: 'Chọn hệ trục khéo léo giúp tọa độ là số nguyên hoặc số đơn giản.',
    },
    {
      subtitle: 'Chọn hệ trục cho hình chóp có cạnh bên vuông góc với đáy',
      content: String.raw`**Hình chóp $S.ABC$ có $SA\perp(ABC)$ và tam giác $ABC$ vuông tại $A$.** Chọn
$$A(0;0;0),\quad B(a;0;0),\quad C(0;b;0),\quad S(0;0;h).$$

**Hình chóp $S.ABCD$ có $SA\perp(ABCD)$ và đáy là hình vuông, hình chữ nhật.** Chọn
$$A(0;0;0),\quad B(a;0;0),\quad D(0;b;0),\quad C(a;b;0),\quad S(0;0;h).$$

**Hình chóp $S.ABC$ có $SA\perp(ABC)$ và tam giác $ABC$ đều cạnh $a$.** Chọn gốc tại trung điểm $H$ của $BC$, trục $Hx$ theo $HA$:
$$H(0;0;0),\quad A\left(\dfrac{a\sqrt3}{2};0;0\right),\quad B\left(0;\dfrac a2;0\right),\quad C\left(0;-\dfrac a2;0\right),$$
và $S$ có tọa độ phụ thuộc vị trí $SA\perp(ABC)$.

**Hình chóp $S.ABCD$ có $SA\perp(ABCD)$ và đáy là hình thoi.** Chọn gốc tại tâm $O$ của đáy, hai trục theo hai đường chéo, trục còn lại song song $SA$.`,
      formula: String.raw`A(0;0;0),\ B(a;0;0),\ D(0;b;0),\ S(0;0;h)`,
      note: 'Đáy hình vuông hoặc hình chữ nhật cho tọa độ đẹp nhất.',
    },
    {
      subtitle: 'Chọn hệ trục cho hình chóp đều',
      content: String.raw`**Hình chóp tứ giác đều $S.ABCD$ cạnh đáy $a$, chiều cao $h$.** Chọn gốc $O$ là tâm đáy, trục $Ox$ song song $AB$:
$$O(0;0;0),\quad A\left(-\dfrac a2;-\dfrac a2;0\right),\quad B\left(\dfrac a2;-\dfrac a2;0\right),$$
$$C\left(\dfrac a2;\dfrac a2;0\right),\quad D\left(-\dfrac a2;\dfrac a2;0\right),\quad S(0;0;h).$$

**Hình chóp tam giác đều $S.ABC$ cạnh đáy $a$, chiều cao $h$.** Chọn gốc $O$ là tâm tam giác đều:
$$O(0;0;0),\quad A\left(\dfrac{a\sqrt3}{3};0;0\right),\quad B\left(-\dfrac{a\sqrt3}{6};\dfrac a2;0\right),$$
$$C\left(-\dfrac{a\sqrt3}{6};-\dfrac a2;0\right),\quad S(0;0;h).$$

**Tứ diện đều cạnh $a$.** Dùng hệ trục như hình chóp tam giác đều với
$$h=\dfrac{a\sqrt6}{3}.$$`,
      formula: String.raw`h=\dfrac{a\sqrt6}{3}`,
      note: 'Chọn gốc tại tâm đáy giúp tọa độ các đỉnh đáy đối xứng qua gốc.',
    },
    {
      subtitle: 'Chọn hệ trục cho hình lăng trụ, hình hộp',
      content: String.raw`**Hình hộp chữ nhật, hình lập phương $ABCD.A'B'C'D'$.** Chọn
$$A(0;0;0),\quad B(a;0;0),\quad D(0;b;0),\quad A'(0;0;c),$$
$$C(a;b;0),\quad B'(a;0;c),\quad D'(0;b;c),\quad C'(a;b;c).$$

**Lăng trụ đứng $ABC.A'B'C'$ có đáy là tam giác vuông tại $A$.** Chọn
$$A(0;0;0),\quad B(a;0;0),\quad C(0;b;0),\quad A'(0;0;h).$$

**Lăng trụ đứng $ABC.A'B'C'$ có đáy là tam giác đều cạnh $a$, chiều cao $h$.** Chọn gốc tại trung điểm $M$ của $BC$:
$$M(0;0;0),\quad A\left(\dfrac{a\sqrt3}{2};0;0\right),\quad B\left(0;\dfrac a2;0\right),\quad C\left(0;-\dfrac a2;0\right),$$
và các điểm $A'$, $B'$, $C'$ có cao độ $h$.

**Lăng trụ xiên.** Chọn gốc tại hình chiếu vuông góc của một đỉnh lên mặt đáy để tận dụng quan hệ vuông góc.`,
      formula: String.raw`A(0;0;0),\ B(a;0;0),\ D(0;b;0),\ A'(0;0;c)`,
      note: 'Với lăng trụ xiên, cần xác định hình chiếu của đỉnh để có tọa độ chính xác.',
    },
    {
      subtitle: 'Các công thức tọa độ thường dùng',
      content: String.raw`**Trung điểm.** Cho $A(x_A;y_A;z_A)$, $B(x_B;y_B;z_B)$. Trung điểm $I$ của $AB$:
$$I\left(\dfrac{x_A+x_B}{2};\dfrac{y_A+y_B}{2};\dfrac{z_A+z_B}{2}\right).$$

**Trọng tâm tam giác.** Cho tam giác $ABC$. Trọng tâm $G$:
$$G\left(\dfrac{x_A+x_B+x_C}{3};\dfrac{y_A+y_B+y_C}{3};\dfrac{z_A+z_B+z_C}{3}\right).$$

**Trọng tâm tứ diện.** Trọng tâm $G$ của tứ diện $ABCD$ là trung bình cộng tọa độ bốn đỉnh.

**Chia đoạn theo tỉ số.** Nếu $\overrightarrow{MA}=k\overrightarrow{MB}$ thì
$$M\left(\dfrac{x_A-kx_B}{1-k};\dfrac{y_A-ky_B}{1-k};\dfrac{z_A-kz_B}{1-k}\right).$$

**Hình chiếu.** Hình chiếu của $M(x_M;y_M;z_M)$ trên $(Oxy)$ là $(x_M;y_M;0)$; trên $Ox$ là $(x_M;0;0)$.

**Thể tích tứ diện.**
$$V=\dfrac16\left|\left[\overrightarrow{AB},\overrightarrow{AC}\right]\cdot\overrightarrow{AD}\right|.$$`,
      formula: String.raw`V=\dfrac16\left|\left[\overrightarrow{AB},\overrightarrow{AC}\right]\cdot\overrightarrow{AD}\right|`,
      note: 'Công thức thể tích bằng tích hỗn hợp rất tiện khi đã có tọa độ.',
    },
    {
      subtitle: 'Ví dụ chọn hệ trục và lưu ý',
      content: String.raw`**Ví dụ.** Cho hình chóp $S.ABCD$ có $SA\perp(ABCD)$, $ABCD$ là hình vuông cạnh $a$, $SA=a\sqrt2$. Chọn
$$A(0;0;0),\ B(a;0;0),\ D(0;a;0),\ C(a;a;0),\ S(0;0;a\sqrt2).$$

Khi đó:

- $\overrightarrow{SC}=(a;a;-a\sqrt2)$.
- Mặt phẳng $(SBC)$ có cặp vectơ $\overrightarrow{SB}=(a;0;-a\sqrt2)$, $\overrightarrow{BC}=(0;a;0)$, nên $\vec n=\left[\overrightarrow{SB},\overrightarrow{BC}\right]=(a^2\sqrt2;0;a^2)$.

**Lưu ý khi trình bày.**

- Nêu rõ cách chọn hệ trục và vì sao ba trục đôi một vuông góc.
- Ghi tọa độ đầy đủ, tránh nhầm dấu.
- Kiểm tra lại bằng một quan hệ đã biết (ví dụ độ dài cạnh).
- Có thể chọn hệ trục sao cho tọa độ chứa ít căn thức nhất.`,
      formula: String.raw`\vec n=\left[\overrightarrow{SB},\overrightarrow{BC}\right]`,
      note: 'Vectơ pháp tuyến của mặt phẳng lấy tích có hướng hai vectơ trong mặt phẳng.',
    },
  ],

  examples: [
    {
      id: 'vd1',
      title: 'Chứng minh vuông góc bằng tọa độ',
      prompt: String.raw`Cho hình chóp $S.ABCD$ có $SA\perp(ABCD)$, đáy là hình vuông cạnh $a$, $SA=a$. Chứng minh $BD\perp SC$.`,
      steps: [
        String.raw`Chọn $A(0;0;0)$, $B(a;0;0)$, $D(0;a;0)$, $C(a;a;0)$, $S(0;0;a)$.`,
        String.raw`$\overrightarrow{BD}=(-a;a;0)$, $\overrightarrow{SC}=(a;a;-a)$.`,
        String.raw`$\overrightarrow{BD}\cdot\overrightarrow{SC}=-a^2+a^2+0=0$.`,
        String.raw`Vậy $BD\perp SC$.`,
      ],
      answer: String.raw`$\overrightarrow{BD}\cdot\overrightarrow{SC}=0$ nên $BD\perp SC$.`,
    },
    {
      id: 'vd2',
      title: 'Tính góc bằng tọa độ',
      prompt: String.raw`Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $1$. Tính góc giữa $A'C$ và $AB'$.`,
      steps: [
        String.raw`Chọn $A(0;0;0)$, $B(1;0;0)$, $D(0;1;0)$, $A'(0;0;1)$.`,
        String.raw`$C(1;1;0)$, $B'(1;0;1)$ nên $\overrightarrow{A'C}=(1;1;-1)$, $\overrightarrow{AB'}=(1;0;1)$.`,
        String.raw`$\cos\varphi=\dfrac{|1+0-1|}{\sqrt3\cdot\sqrt2}=0$.`,
        String.raw`Vậy góc bằng $90^\circ$.`,
      ],
      answer: String.raw`$90^\circ$.`,
    },
    {
      id: 'vd3',
      title: 'Tính khoảng cách bằng tọa độ',
      prompt: String.raw`Cho hình chóp $S.ABCD$ có $SA\perp(ABCD)$, đáy là hình vuông cạnh $a$, $SA=a$. Tính khoảng cách từ $A$ đến $(SBC)$.`,
      steps: [
        String.raw`Chọn $A(0;0;0)$, $B(a;0;0)$, $C(a;a;0)$, $S(0;0;a)$.`,
        String.raw`$\overrightarrow{SB}=(a;0;-a)$, $\overrightarrow{BC}=(0;a;0)$; $\vec n=\left[\overrightarrow{SB},\overrightarrow{BC}\right]=(a^2;0;a^2)$, chọn $\vec n=(1;0;1)$.`,
        String.raw`$(SBC):x+z-a=0$.`,
        String.raw`$\mathrm d(A,(SBC))=\dfrac{|{-a}|}{\sqrt2}=\dfrac{a\sqrt2}{2}$.`,
      ],
      answer: String.raw`$\dfrac{a\sqrt2}{2}$.`,
    },
    {
      id: 'vd4',
      title: 'Tính thể tích bằng tọa độ',
      prompt: String.raw`Cho hình chóp $S.ABC$ có $SA\perp(ABC)$, $SA=2$, tam giác $ABC$ vuông tại $B$ với $AB=1$, $BC=3$. Tính thể tích khối chóp.`,
      steps: [
        String.raw`Chọn $B(0;0;0)$, $A(1;0;0)$, $C(0;3;0)$. Vì $SA\perp(ABC)$ và $SA=2$ nên $S(1;0;2)$.`,
        String.raw`$\overrightarrow{BA}=(1;0;0)$, $\overrightarrow{BC}=(0;3;0)$, $\overrightarrow{BS}=(1;0;2)$.`,
        String.raw`$\left[\overrightarrow{BA},\overrightarrow{BC}\right]=(0;0;3)$; tích hỗn hợp với $\overrightarrow{BS}$ bằng $6$.`,
        String.raw`$V=\dfrac66=1$.`,
      ],
      answer: String.raw`$V=1$.`,
    },
    {
      id: 'vd5',
      title: 'Hình chóp đều',
      prompt: String.raw`Cho hình chóp tứ giác đều $S.ABCD$ cạnh đáy $2$, chiều cao $3$. Tính khoảng cách từ $O$ (tâm đáy) đến $(SCD)$.`,
      steps: [
        String.raw`Chọn $O(0;0;0)$, $C(1;1;0)$, $D(-1;1;0)$, $S(0;0;3)$.`,
        String.raw`$\overrightarrow{SC}=(1;1;-3)$, $\overrightarrow{CD}=(-2;0;0)$; $\vec n=\left[\overrightarrow{SC},\overrightarrow{CD}\right]=(0;6;2)$, chọn $(0;3;1)$.`,
        String.raw`$(SCD):3y+z-3=0$.`,
        String.raw`$\mathrm d(O,(SCD))=\dfrac{|{-3}|}{\sqrt{10}}=\dfrac{3\sqrt{10}}{10}$.`,
      ],
      answer: String.raw`$\dfrac{3\sqrt{10}}{10}$.`,
    },
  ],

  exercises: [
    {
      id: 'bt1',
      prompt: String.raw`Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $1$. Chứng minh $AC\perp BD'$.`,
      hint: String.raw`Chọn $A(0;0;0)$, $B(1;0;0)$, $D(0;1;0)$, $A'(0;0;1)$.`,
      solution: String.raw`$\overrightarrow{AC}=(1;1;0)$, $\overrightarrow{BD'}=(-1;1;1)$; tích vô hướng $-1+1+0=0$ nên vuông góc.`,
    },
    {
      id: 'bt2',
      prompt: String.raw`Cho hình chóp $S.ABCD$ có $SA\perp(ABCD)$, đáy là hình vuông cạnh $1$, $SA=1$. Tính góc giữa $SC$ và $(ABCD)$.`,
      solution: String.raw`$A(0;0;0)$, $C(1;1;0)$, $S(0;0;1)$; $\overrightarrow{SC}=(1;1;-1)$, pháp tuyến $(0;0;1)$; $\sin\varphi=\dfrac{1}{\sqrt3}$ nên $\varphi\approx35^\circ16'$.`,
    },
    {
      id: 'bt3',
      prompt: String.raw`Cho tứ diện $OABC$ với $O(0;0;0)$, $A(1;0;0)$, $B(0;2;0)$, $C(0;0;3)$. Tính thể tích.`,
      solution: String.raw`$V=\dfrac{1\cdot2\cdot3}{6}=1$.`,
    },
    {
      id: 'bt4',
      prompt: String.raw`Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $1$. Tính khoảng cách giữa $AB'$ và $CD'$.`,
      hint: String.raw`Dùng tọa độ và công thức khoảng cách hai đường chéo nhau.`,
      solution: String.raw`$A(0;0;0)$, $B'(1;0;1)$, $C(1;1;0)$, $D'(0;1;1)$. $\overrightarrow{AB'}=(1;0;1)$, $\overrightarrow{CD'}=(-1;0;1)$, $\overrightarrow{AC}=(1;1;0)$. Tích có hướng $(0;-2;0)$; tích hỗn hợp bằng $-2$; độ dài tích có hướng $2$. Khoảng cách bằng $1$.`,
    },
    {
      id: 'bt5',
      prompt: String.raw`Cho hình chóp tứ giác đều $S.ABCD$ cạnh đáy $2$, chiều cao $2$. Tính góc giữa mặt bên và mặt đáy.`,
      solution: String.raw`$O(0;0;0)$, $C(1;1;0)$, $D(-1;1;0)$, $S(0;0;2)$. $(SCD)$ có pháp tuyến $(0;2;1)$; mặt đáy có pháp tuyến $(0;0;1)$. $\cos\varphi=\dfrac{1}{\sqrt5}$ nên $\varphi\approx63^\circ26'$.`,
    },
    {
      id: 'bt6',
      prompt: String.raw`Cho hình chóp $S.ABC$ có $SA\perp(ABC)$, $SA=1$, tam giác $ABC$ đều cạnh $2$. Tính khoảng cách từ $A$ đến $(SBC)$.`,
      hint: String.raw`Chọn gốc tại trung điểm $M$ của $BC$.`,
      solution: String.raw`$M(0;0;0)$, $A(\sqrt3;0;0)$, $B(0;1;0)$, $C(0;-1;0)$, $S(\sqrt3;0;1)$. Mặt phẳng $(SBC)$ có pháp tuyến $\left[\overrightarrow{MB},\overrightarrow{MS}\right]=(1;0;-\sqrt3)$. Phương trình $x-\sqrt3z=0$. Khoảng cách $\dfrac{\sqrt3}{2}$.`,
    },
  ],

  quiz: [
    {
      id: 'q1',
      question: String.raw`Khi tọa độ hóa hình lập phương $ABCD.A'B'C'D'$, cách chọn nào thuận lợi nhất?`,
      options: [
        'Gốc tại tâm hình lập phương',
        'Gốc tại $C$, ba trục theo $CA$, $CB$, $CC\'$',
        'Gốc tại trung điểm $AB$',
        'Gốc tại $A$, ba trục theo $AB$, $AD$, $AA\'$',
      ],
      answer: 3,
      explanation: 'Ba cạnh $AB$, $AD$, $AA\'$ đôi một vuông góc tại $A$.',
    },
    {
      id: 'q2',
      question: String.raw`Trong hệ trục đã chọn, điều kiện để hai đường thẳng vuông góc là`,
      options: [
        'Hai vectơ chỉ phương cùng phương',
        'Hai vectơ chỉ phương ngược hướng',
        'Tích vô hướng hai vectơ chỉ phương bằng 0',
        'Tổng hai vectơ chỉ phương bằng 0',
      ],
      answer: 2,
      explanation: 'Vuông góc tương đương tích vô hướng bằng 0.',
    },
    {
      id: 'q3',
      question: String.raw`Thể tích tứ diện $ABCD$ tính theo tọa độ là`,
      options: [
        String.raw`$\dfrac13\left|\left[\overrightarrow{AB},\overrightarrow{AC}\right]\cdot\overrightarrow{AD}\right|$`,
        String.raw`$\left|\left[\overrightarrow{AB},\overrightarrow{AC}\right]\cdot\overrightarrow{AD}\right|$`,
        String.raw`$\dfrac16\left|\left[\overrightarrow{AB},\overrightarrow{AC}\right]\cdot\overrightarrow{AD}\right|$`,
        String.raw`$\dfrac12\left|\left[\overrightarrow{AB},\overrightarrow{AC}\right]\cdot\overrightarrow{AD}\right|$`,
      ],
      answer: 2,
      explanation: 'Công thức thể tích tứ diện bằng một phần sáu tích hỗn hợp.',
    },
    {
      id: 'q4',
      question: String.raw`Cho hình chóp $S.ABC$ có $SA\perp(ABC)$ và tam giác $ABC$ vuông tại $A$. Cách chọn hệ trục hợp lí là`,
      options: [
        'Gốc tại $S$, ba trục theo $SA$, $SB$, $SC$',
        'Gốc tại $B$, ba trục theo $BA$, $BC$, $BS$',
        'Gốc tại trọng tâm tam giác $ABC$',
        'Gốc tại $A$, ba trục theo $AB$, $AC$, $AS$',
      ],
      answer: 3,
      explanation: 'Ba đường $AB$, $AC$, $AS$ đôi một vuông góc tại $A$.',
    },
    {
      id: 'q5',
      question: String.raw`Trong hình chóp tứ giác đều, nên chọn gốc tọa độ tại`,
      options: [
        'Một đỉnh đáy',
        'Tâm của đáy',
        'Trung điểm một cạnh đáy',
        'Một đỉnh bên',
      ],
      answer: 1,
      explanation: 'Tâm đáy giúp tọa độ các đỉnh đáy đối xứng và đường cao nằm trên trục $Oz$.',
    },
    {
      id: 'q6',
      question: String.raw`Khoảng cách từ $A(1;0;0)$ đến mặt phẳng $(P):x+2y+2z-4=0$ là`,
      options: [
        String.raw`$3$`,
        String.raw`$2$`,
        String.raw`$1$`,
        String.raw`$\dfrac13$`,
      ],
      answer: 2,
      explanation: String.raw`$\dfrac{|1-4|}{3}=1$.`,
    },
    {
      id: 'q7',
      question: String.raw`Cho $A(0;0;0)$, $B(1;0;0)$, $C(0;1;0)$, $S(0;0;1)$. Mặt phẳng $(SBC)$ có phương trình`,
      options: [
        String.raw`$x+y+z-1=0$`,
        String.raw`$x+y-z=0$`,
        String.raw`$x-y+z-1=0$`,
        String.raw`$x+y+z+1=0$`,
      ],
      answer: 0,
      explanation: String.raw`Ba giao điểm với các trục là $(1;0;0)$, $(0;1;0)$, $(0;0;1)$ nên dùng phương trình đoạn chắn.`,
    },
    {
      id: 'q8',
      question: String.raw`Trong hình lập phương cạnh $1$ với $A(0;0;0)$, $B(1;0;0)$, $D(0;1;0)$, $A'(0;0;1)$, tọa độ $C'$ là`,
      options: [
        String.raw`$(1;1;0)$`,
        String.raw`$(1;0;1)$`,
        String.raw`$(0;1;1)$`,
        String.raw`$(1;1;1)$`,
      ],
      answer: 3,
      explanation: String.raw`$C'$ là đỉnh đối diện $A$ nên có tọa độ $(1;1;1)$.`,
    },
  ],

  trueFalse: [
    {
      id: 'tf1',
      stem: 'Các khẳng định về chọn hệ trục:',
      items: [
        { text: 'Nên chọn gốc tọa độ tại điểm có nhiều đường vuông góc với nhau.', answer: true },
        { text: 'Ba trục tọa độ phải đôi một vuông góc.', answer: true },
        { text: 'Chỉ có duy nhất một cách chọn hệ trục cho mỗi hình.', answer: false },
        { text: 'Chọn hệ trục hợp lí giúp tọa độ các điểm đơn giản hơn.', answer: true },
      ],
      explanation: 'Mỗi hình có thể chọn nhiều hệ trục khác nhau, miễn ba trục đôi một vuông góc.',
    },
    {
      id: 'tf2',
      stem: 'Các khẳng định về chuyển bài toán sang tọa độ:',
      items: [
        { text: 'Chứng minh vuông góc có thể dùng tích vô hướng bằng 0.', answer: true },
        { text: 'Khoảng cách giữa hai đường chéo nhau tính bằng tích có hướng chia độ dài.', answer: false },
        { text: 'Chứng minh song song có thể dùng hai vectơ cùng phương.', answer: true },
        { text: 'Thể tích tứ diện tính được bằng tích hỗn hợp ba vectơ.', answer: true },
      ],
      explanation: 'Khoảng cách hai đường chéo nhau dùng tích hỗn hợp chia độ dài tích có hướng.',
    },
    {
      id: 'tf3',
      stem: 'Các khẳng định về tọa độ điểm:',
      items: [
        { text: 'Trung điểm của đoạn $AB$ có tọa độ là trung bình cộng tọa độ $A$ và $B$.', answer: true },
        { text: 'Trọng tâm tam giác là trung bình cộng tọa độ ba đỉnh.', answer: true },
        { text: 'Hình chiếu của $M(x;y;z)$ trên $(Oxy)$ là $(x;y;0)$.', answer: true },
        { text: 'Trong hình chóp đều, chân đường cao không trùng tâm đáy.', answer: false },
      ],
      explanation: 'Hình chóp đều có chân đường cao trùng tâm đáy.',
    },
  ],

  shortAnswer: [
    {
      id: 'sa1',
      question: String.raw`Trong hình lập phương cạnh $2$ với $A(0;0;0)$, $B(2;0;0)$, $D(0;2;0)$, $A'(0;0;2)$, tọa độ $C$ có tổng các tọa độ bằng bao nhiêu?`,
      answer: '4',
      unit: '',
      explanation: String.raw`$C(2;2;0)$ nên tổng bằng $4$.`,
    },
    {
      id: 'sa2',
      question: String.raw`Cho $A(1;0;0)$, $B(0;2;0)$, $C(0;0;3)$. Thể tích tứ diện $OABC$ bằng bao nhiêu?`,
      answer: '1',
      unit: '',
      explanation: String.raw`$V=\dfrac{1\cdot2\cdot3}{6}=1$.`,
    },
    {
      id: 'sa3',
      question: String.raw`Cho hình lập phương cạnh $1$ với $A(0;0;0)$, $B(1;0;0)$, $D(0;1;0)$, $A'(0;0;1)$. Khoảng cách từ $A$ đến $(B'D'C)$ bằng $\dfrac{a\sqrt{b}}{b}$. Tìm $a+b$.`,
      answer: '5',
      unit: '',
      explanation: String.raw`$(B'D'C):x+y+z-2=0$ nên khoảng cách bằng $\dfrac{2}{\sqrt3}=\dfrac{2\sqrt3}{3}$, suy ra $a=2$, $b=3$ và $a+b=5$.`,
    },
    {
      id: 'sa4',
      question: String.raw`Cho hình chóp tứ giác đều cạnh đáy $2$, chiều cao $2$. Tang góc giữa mặt bên và mặt đáy bằng bao nhiêu?`,
      answer: '2',
      unit: '',
      explanation: String.raw`Khoảng cách từ tâm đáy đến cạnh đáy là $1$, chiều cao $2$ nên $\tan\varphi=2$.`,
    },
  ],
}

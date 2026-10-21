import type { Lesson } from '../types'

export const chuong12Bai3: Lesson = {
  id: 'bai-3',
  chapterId: 'chuong-12',
  title: 'Công thức tính góc trong không gian',
  summary: 'Góc giữa hai đường thẳng, đường thẳng và mặt phẳng, hai mặt phẳng bằng phương pháp tọa độ.',
  minutes: 24,

  theory: [
    {
      subtitle: 'Góc giữa hai đường thẳng',
      content: String.raw`Cho hai đường thẳng $d$ và $d'$ lần lượt có vectơ chỉ phương $\vec u=(a;b;c)$ và $\vec u'=(a';b';c')$. Gọi $\varphi$ là góc giữa hai đường thẳng ($0^\circ\le\varphi\le90^\circ$). Khi đó
$$\cos\varphi=\dfrac{\left|\vec u\cdot\vec u'\right|}{\left|\vec u\right|\cdot\left|\vec u'\right|}
=\dfrac{\left|aa'+bb'+cc'\right|}{\sqrt{a^2+b^2+c^2}\cdot\sqrt{a'^2+b'^2+c'^2}}.$$

Hệ quả:

- $d\perp d'\iff aa'+bb'+cc'=0$.
- $d\parallel d'\iff(a;b;c)$ cùng phương với $(a';b';c')$.`,
      formula: String.raw`\cos\varphi=\dfrac{\left|aa'+bb'+cc'\right|}{\sqrt{a^2+b^2+c^2}\sqrt{a'^2+b'^2+c'^2}}`,
      note: 'Công thức dùng giá trị tuyệt đối vì góc giữa hai đường thẳng không vượt quá $90^\\circ$.',
    },
    {
      subtitle: 'Góc giữa đường thẳng và mặt phẳng',
      content: String.raw`Cho đường thẳng $d$ có vectơ chỉ phương $\vec u=(a;b;c)$ và mặt phẳng $(P)$ có vectơ pháp tuyến $\vec n=(A;B;C)$. Gọi $\varphi$ là góc giữa $d$ và $(P)$ ($0^\circ\le\varphi\le90^\circ$). Khi đó
$$\sin\varphi=\dfrac{\left|\vec u\cdot\vec n\right|}{\left|\vec u\right|\cdot\left|\vec n\right|}
=\dfrac{\left|aA+bB+cC\right|}{\sqrt{a^2+b^2+c^2}\sqrt{A^2+B^2+C^2}}.$$

Hệ quả:

- $d\parallel(P)$ hoặc $d\subset(P)\iff aA+bB+cC=0$.
- $d\perp(P)\iff(a;b;c)$ cùng phương với $(A;B;C)$.
- Nếu $\varphi=0^\circ$ thì $d$ song song hoặc nằm trong $(P)$.`,
      formula: String.raw`\sin\varphi=\dfrac{\left|aA+bB+cC\right|}{\sqrt{a^2+b^2+c^2}\sqrt{A^2+B^2+C^2}}`,
      note: 'Góc giữa đường thẳng và mặt phẳng dùng $\\sin$, không dùng $\\cos$.',
    },
    {
      subtitle: 'Góc giữa hai mặt phẳng',
      content: String.raw`Cho hai mặt phẳng $(P)$ và $(Q)$ lần lượt có vectơ pháp tuyến $\vec n=(A;B;C)$ và $\vec n'=(A';B';C')$. Gọi $\varphi$ là góc giữa hai mặt phẳng ($0^\circ\le\varphi\le90^\circ$). Khi đó
$$\cos\varphi=\dfrac{\left|\vec n\cdot\vec n'\right|}{\left|\vec n\right|\cdot\left|\vec n'\right|}
=\dfrac{\left|AA'+BB'+CC'\right|}{\sqrt{A^2+B^2+C^2}\sqrt{A'^2+B'^2+C'^2}}.$$

Hệ quả:

- $(P)\perp(Q)\iff AA'+BB'+CC'=0$.
- $(P)\parallel(Q)$ hoặc $(P)\equiv(Q)\iff(A;B;C)$ cùng phương với $(A';B';C')$.`,
      formula: String.raw`\cos\varphi=\dfrac{\left|AA'+BB'+CC'\right|}{\sqrt{A^2+B^2+C^2}\sqrt{A'^2+B'^2+C'^2}}`,
      note: 'Góc giữa hai mặt phẳng bù với góc giữa hai pháp tuyến nếu góc pháp tuyến tù.',
    },
    {
      subtitle: 'Góc với các trục tọa độ và mặt phẳng tọa độ',
      content: String.raw`**Góc giữa đường thẳng và các trục.** Với $d$ có vectơ chỉ phương $\vec u=(a;b;c)$:

- Góc với $Ox$: $\cos\alpha=\dfrac{|a|}{\sqrt{a^2+b^2+c^2}}$.
- Góc với $Oy$: $\cos\beta=\dfrac{|b|}{\sqrt{a^2+b^2+c^2}}$.
- Góc với $Oz$: $\cos\gamma=\dfrac{|c|}{\sqrt{a^2+b^2+c^2}}$.

Ta luôn có $\cos^2\alpha+\cos^2\beta+\cos^2\gamma=1$.

**Góc giữa đường thẳng và các mặt phẳng tọa độ.** Với $d$ có vectơ chỉ phương $\vec u=(a;b;c)$:

- Góc với $(Oxy)$: $\sin\alpha=\dfrac{|c|}{\sqrt{a^2+b^2+c^2}}$.
- Góc với $(Oyz)$: $\sin\beta=\dfrac{|a|}{\sqrt{a^2+b^2+c^2}}$.
- Góc với $(Oxz)$: $\sin\gamma=\dfrac{|b|}{\sqrt{a^2+b^2+c^2}}$.`,
      formula: String.raw`\cos^2\alpha+\cos^2\beta+\cos^2\gamma=1`,
      note: 'Góc với mặt phẳng tọa độ dùng $\\sin$ và lấy hệ số của trục vuông góc với mặt phẳng đó.',
    },
    {
      subtitle: 'Góc trong hình học không gian bằng tọa độ',
      content: String.raw`Khi đã chọn hệ trục $Oxyz$ thích hợp, ta chuyển bài toán góc về bài toán tọa độ:

- Góc giữa hai đường thẳng: dùng hai vectơ chỉ phương.
- Góc giữa đường thẳng và mặt phẳng: dùng vectơ chỉ phương và vectơ pháp tuyến.
- Góc giữa hai mặt phẳng: dùng hai vectơ pháp tuyến.

**Chọn hệ trục thường gặp.**

- Hình lập phương, hình hộp chữ nhật $ABCD.A'B'C'D'$: đặt $A(0;0;0)$, $B(a;0;0)$, $D(0;b;0)$, $A'(0;0;c)$.
- Hình chóp $S.ABCD$ có $SA\perp(ABCD)$ và đáy là hình vuông, hình chữ nhật: đặt $A(0;0;0)$, $B(a;0;0)$, $D(0;b;0)$, $S(0;0;h)$.
- Hình chóp $S.ABC$ có $SA\perp(ABC)$ và tam giác $ABC$ vuông tại $A$: đặt $A(0;0;0)$, $B(a;0;0)$, $C(0;b;0)$, $S(0;0;h)$.
- Hình chóp tam giác đều hoặc tứ diện đều: đặt gốc tại trung điểm một cạnh đáy để tận dụng tính đối xứng.`,
      formula: String.raw`\vec u=(a;b;c),\ \vec n=(A;B;C)\Rightarrow\sin\varphi=\dfrac{\left|\vec u\cdot\vec n\right|}{\left|\vec u\right|\left|\vec n\right|}`,
      note: 'Chọn hệ trục khéo léo giúp tọa độ các đỉnh đơn giản, tránh căn thức.',
    },
  ],

  examples: [
    {
      id: 'vd1',
      title: 'Góc giữa hai đường thẳng',
      prompt: String.raw`Tính góc giữa $d:\dfrac{x-1}{1}=\dfrac{y}{2}=\dfrac{z+1}{2}$ và $d':\dfrac{x}{2}=\dfrac{y-1}{1}=\dfrac{z}{-2}$.`,
      steps: [
        String.raw`$\vec u=(1;2;2)$, $\vec u'=(2;1;-2)$.`,
        String.raw`$\vec u\cdot\vec u'=2+2-4=0$ nên $d\perp d'$.`,
      ],
      answer: String.raw`$(d,d')=90^\circ$.`,
    },
    {
      id: 'vd2',
      title: 'Góc giữa đường thẳng và mặt phẳng',
      prompt: String.raw`Tính góc giữa $d:\dfrac{x}{1}=\dfrac{y-1}{1}=\dfrac{z}{1}$ và $(P):x+2y-2z+3=0$.`,
      steps: [
        String.raw`$\vec u=(1;1;1)$, $\vec n=(1;2;-2)$.`,
        String.raw`$\vec u\cdot\vec n=1+2-2=1$; $\left|\vec u\right|=\sqrt3$, $\left|\vec n\right|=3$.`,
        String.raw`$\sin\varphi=\dfrac{1}{3\sqrt3}=\dfrac{\sqrt3}{9}\approx0,1925$.`,
        String.raw`$\varphi\approx11^\circ6'$.`,
      ],
      answer: String.raw`$\varphi\approx11^\circ6'$.`,
    },
    {
      id: 'vd3',
      title: 'Góc giữa hai mặt phẳng',
      prompt: String.raw`Tính góc giữa $(P):x+y+z-1=0$ và $(Q):x-y+1=0$.`,
      steps: [
        String.raw`$\vec n=(1;1;1)$, $\vec n'=(1;-1;0)$.`,
        String.raw`$\vec n\cdot\vec n'=1-1+0=0$ nên $(P)\perp(Q)$.`,
      ],
      answer: String.raw`$90^\circ$.`,
    },
    {
      id: 'vd4',
      title: 'Góc trong hình lập phương',
      prompt: String.raw`Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $1$. Tính góc giữa $AB'$ và $BC'$.`,
      steps: [
        String.raw`Chọn $A(0;0;0)$, $B(1;0;0)$, $D(0;1;0)$, $A'(0;0;1)$.`,
        String.raw`$B'(1;0;1)$, $C'(1;1;1)$ nên $\overrightarrow{AB'}=(1;0;1)$, $\overrightarrow{BC'}=(0;1;1)$.`,
        String.raw`$\cos\varphi=\dfrac{|0+0+1|}{\sqrt2\cdot\sqrt2}=\dfrac12$.`,
        String.raw`Vậy $\varphi=60^\circ$.`,
      ],
      answer: String.raw`$60^\circ$.`,
    },
    {
      id: 'vd5',
      title: 'Góc giữa đường thẳng và mặt phẳng tọa độ',
      prompt: String.raw`Tính góc giữa $d:\dfrac{x}{2}=\dfrac{y}{-1}=\dfrac{z}{2}$ và mặt phẳng $(Oxy)$.`,
      steps: [
        String.raw`$\vec u=(2;-1;2)$, $\left|\vec u\right|=3$.`,
        String.raw`$(Oxy)$ có vectơ pháp tuyến $\vec k=(0;0;1)$, nên $\sin\varphi=\dfrac{|2|}{3}$.`,
        String.raw`$\varphi\approx41^\circ49'$.`,
      ],
      answer: String.raw`$\arcsin\dfrac23\approx41^\circ49'$.`,
    },
  ],

  exercises: [
    {
      id: 'bt1',
      prompt: String.raw`Tính góc giữa $d:\dfrac{x}{1}=\dfrac{y}{1}=\dfrac{z}{1}$ và $d':\dfrac{x}{1}=\dfrac{y}{-1}=\dfrac{z}{1}$.`,
      solution: String.raw`$\cos\varphi=\dfrac{|1-1+1|}{3}=\dfrac13$ nên $\varphi\approx70^\circ32'$.`,
    },
    {
      id: 'bt2',
      prompt: String.raw`Tính góc giữa $d:\dfrac{x-1}{2}=\dfrac{y}{1}=\dfrac{z}{2}$ và $(P):2x+2y+z-5=0$.`,
      solution: String.raw`$\vec u=(2;1;2)$, $\vec n=(2;2;1)$; $\sin\varphi=\dfrac{|4+2+2|}{3\cdot3}=\dfrac89$ nên $\varphi\approx62^\circ44'$.`,
    },
    {
      id: 'bt3',
      prompt: String.raw`Tính góc giữa $(P):2x-y+2z-1=0$ và $(Q):x+2y-2z+3=0$.`,
      solution: String.raw`$\vec n=(2;-1;2)$, $\vec n'=(1;2;-2)$; $\vec n\cdot\vec n'=2-2-4=-4$, $\left|\vec n\right|=\left|\vec n'\right|=3$ nên $\cos\varphi=\dfrac49$, $\varphi\approx63^\circ37'$.`,
    },
    {
      id: 'bt4',
      prompt: String.raw`Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $1$. Tính góc giữa $AC$ và $A'B$.`,
      hint: String.raw`Chọn $A(0;0;0)$, $B(1;0;0)$, $D(0;1;0)$, $A'(0;0;1)$.`,
      solution: String.raw`$\overrightarrow{AC}=(1;1;0)$, $\overrightarrow{A'B}=(1;0;-1)$; $\cos\varphi=\dfrac{1}{2}$ nên $\varphi=60^\circ$.`,
    },
    {
      id: 'bt5',
      prompt: String.raw`Tính góc giữa $d:\dfrac{x}{1}=\dfrac{y}{2}=\dfrac{z}{2}$ và trục $Oz$.`,
      solution: String.raw`$\vec u=(1;2;2)$, $\vec k=(0;0;1)$; $\cos\varphi=\dfrac{2}{3}$ nên $\varphi\approx48^\circ11'$.`,
    },
    {
      id: 'bt6',
      prompt: String.raw`Cho hình chóp $S.ABCD$ có $SA\perp(ABCD)$, đáy là hình vuông cạnh $1$, $SA=1$. Tính góc giữa $SC$ và $(ABCD)$.`,
      hint: String.raw`Chọn $A(0;0;0)$, $B(1;0;0)$, $D(0;1;0)$, $S(0;0;1)$.`,
      solution: String.raw`$C(1;1;0)$ nên $\overrightarrow{SC}=(1;1;-1)$; $(ABCD)$ có pháp tuyến $\vec k=(0;0;1)$. $\sin\varphi=\dfrac{1}{\sqrt3}$ nên $\varphi\approx35^\circ16'$.`,
    },
  ],

  quiz: [
    {
      id: 'q1',
      question: String.raw`Góc $\varphi$ giữa hai đường thẳng có vectơ chỉ phương $\vec u$, $\vec u'$ được tính bởi`,
      options: [
        String.raw`$\cos\varphi=\dfrac{\vec u\cdot\vec u'}{\left|\vec u\right|\left|\vec u'\right|}$`,
        String.raw`$\cos\varphi=\dfrac{\left|\vec u\cdot\vec u'\right|}{\left|\vec u\right|\left|\vec u'\right|}$`,
        String.raw`$\sin\varphi=\dfrac{\left|\vec u\cdot\vec u'\right|}{\left|\vec u\right|\left|\vec u'\right|}$`,
        String.raw`$\cos\varphi=\dfrac{\left|\vec u\right|\left|\vec u'\right|}{\vec u\cdot\vec u'}$`,
      ],
      answer: 1,
      explanation: 'Góc giữa hai đường thẳng không vượt quá $90^\\circ$ nên phải lấy giá trị tuyệt đối.',
    },
    {
      id: 'q2',
      question: String.raw`Góc $\varphi$ giữa đường thẳng có vectơ chỉ phương $\vec u$ và mặt phẳng có vectơ pháp tuyến $\vec n$ được tính bởi`,
      options: [
        String.raw`$\cos\varphi=\dfrac{\left|\vec u\cdot\vec n\right|}{\left|\vec u\right|\left|\vec n\right|}$`,
        String.raw`$\tan\varphi=\dfrac{\left|\vec u\cdot\vec n\right|}{\left|\vec u\right|\left|\vec n\right|}$`,
        String.raw`$\sin\varphi=\dfrac{\left|\vec u\right|\left|\vec n\right|}{\left|\vec u\cdot\vec n\right|}$`,
        String.raw`$\sin\varphi=\dfrac{\left|\vec u\cdot\vec n\right|}{\left|\vec u\right|\left|\vec n\right|}$`,
      ],
      answer: 3,
      explanation: 'Góc giữa đường thẳng và mặt phẳng phụ với góc giữa vectơ chỉ phương và pháp tuyến, nên dùng $\\sin$.',
    },
    {
      id: 'q3',
      question: String.raw`Góc $\varphi$ giữa hai mặt phẳng có vectơ pháp tuyến $\vec n$, $\vec n'$ được tính bởi`,
      options: [
        String.raw`$\cos\varphi=\dfrac{\left|\vec n\cdot\vec n'\right|}{\left|\vec n\right|\left|\vec n'\right|}$`,
        String.raw`$\sin\varphi=\dfrac{\left|\vec n\cdot\vec n'\right|}{\left|\vec n\right|\left|\vec n'\right|}$`,
        String.raw`$\cos\varphi=\dfrac{\vec n\cdot\vec n'}{\left|\vec n\right|\left|\vec n'\right|}$`,
        String.raw`$\cos\varphi=\dfrac{\left|\vec n\right|\left|\vec n'\right|}{\vec n\cdot\vec n'}$`,
      ],
      answer: 0,
      explanation: 'Góc giữa hai mặt phẳng dùng $\\cos$ và lấy giá trị tuyệt đối.',
    },
    {
      id: 'q4',
      question: String.raw`Đường thẳng $d$ có vectơ chỉ phương $\vec u=(1;2;2)$. Sin góc giữa $d$ và $(Oxy)$ bằng`,
      options: [
        String.raw`$\dfrac13$`,
        String.raw`$\dfrac23$`,
        String.raw`$\dfrac{2\sqrt2}{3}$`,
        String.raw`$\dfrac{1}{\sqrt5}$`,
      ],
      answer: 1,
      explanation: String.raw`$(Oxy)$ có pháp tuyến $(0;0;1)$ nên $\sin\varphi=\dfrac{|2|}{3}=\dfrac23$.`,
    },
    {
      id: 'q5',
      question: String.raw`Hai đường thẳng $d$, $d'$ có vectơ chỉ phương $\vec u=(1;1;1)$ và $\vec u'=(1;-2;1)$. Khi đó`,
      options: [
        String.raw`$d\parallel d'$`,
        String.raw`$(d,d')=45^\circ$`,
        String.raw`$d\perp d'$`,
        String.raw`$(d,d')=60^\circ$`,
      ],
      answer: 2,
      explanation: String.raw`$\vec u\cdot\vec u'=1-2+1=0$ nên hai đường vuông góc.`,
    },
    {
      id: 'q6',
      question: String.raw`Trong hình lập phương $ABCD.A'B'C'D'$ cạnh $1$, chọn $A(0;0;0)$, $B(1;0;0)$, $D(0;1;0)$, $A'(0;0;1)$. Tọa độ $C'$ là`,
      options: [
        String.raw`$(1;1;0)$`,
        String.raw`$(0;1;1)$`,
        String.raw`$(1;1;1)$`,
        String.raw`$(1;0;1)$`,
      ],
      answer: 2,
      explanation: String.raw`$C'$ là đỉnh đối diện $A$ nên có đủ ba tọa độ bằng $1$.`,
    },
    {
      id: 'q7',
      question: String.raw`Nếu $\alpha$, $\beta$, $\gamma$ là góc giữa đường thẳng $d$ và ba trục $Ox$, $Oy$, $Oz$ thì`,
      options: [
        String.raw`$\cos^2\alpha+\cos^2\beta+\cos^2\gamma=0$`,
        String.raw`$\cos^2\alpha+\cos^2\beta+\cos^2\gamma=1$`,
        String.raw`$\sin^2\alpha+\sin^2\beta+\sin^2\gamma=1$`,
        String.raw`$\cos\alpha+\cos\beta+\cos\gamma=1$`,
      ],
      answer: 1,
      explanation: 'Đây là hệ thức cơ bản của các cosin chỉ phương.',
    },
    {
      id: 'q8',
      question: String.raw`Cho $(P):x+y+z-1=0$ và $(Q):x-y+1=0$. Góc giữa hai mặt phẳng bằng`,
      options: [
        String.raw`$30^\circ$`,
        String.raw`$45^\circ$`,
        String.raw`$60^\circ$`,
        String.raw`$90^\circ$`,
      ],
      answer: 3,
      explanation: String.raw`$(1;1;1)\cdot(1;-1;0)=0$ nên hai mặt phẳng vuông góc.`,
    },
  ],

  trueFalse: [
    {
      id: 'tf1',
      stem: 'Các khẳng định về góc trong không gian:',
      items: [
        { text: 'Góc giữa hai đường thẳng luôn nằm trong $[0^\\circ;90^\\circ]$.', answer: true },
        { text: 'Góc giữa đường thẳng và mặt phẳng có thể bằng $120^\\circ$.', answer: false },
        { text: 'Góc giữa hai mặt phẳng luôn nằm trong $[0^\\circ;90^\\circ]$.', answer: true },
        { text: 'Góc giữa đường thẳng và mặt phẳng bằng $90^\\circ$ khi đường thẳng vuông góc với mặt phẳng.', answer: true },
      ],
      explanation: 'Góc giữa đường thẳng và mặt phẳng không vượt quá $90^\\circ$.',
    },
    {
      id: 'tf2',
      stem: 'Các công thức tính góc:',
      items: [
        { text: 'Góc giữa hai đường thẳng dùng $\\cos$ của góc giữa hai vectơ chỉ phương.', answer: true },
        { text: 'Góc giữa đường thẳng và mặt phẳng dùng $\\cos$ của góc giữa vectơ chỉ phương và pháp tuyến.', answer: false },
        { text: 'Góc giữa hai mặt phẳng dùng $\\cos$ của góc giữa hai vectơ pháp tuyến.', answer: true },
        { text: 'Nếu $\\vec u\\cdot\\vec n=0$ thì đường thẳng vuông góc với mặt phẳng.', answer: false },
      ],
      explanation: 'Góc giữa đường thẳng và mặt phẳng dùng $\\sin$ của góc giữa vectơ chỉ phương và pháp tuyến.',
    },
    {
      id: 'tf3',
      stem: 'Các khẳng định về tọa độ hóa:',
      items: [
        { text: 'Trong hình lập phương cạnh $1$, có thể chọn một đỉnh làm gốc tọa độ và ba cạnh kề làm ba trục.', answer: true },
        { text: 'Hình chóp có cạnh bên vuông góc với đáy thường chọn đỉnh vuông góc làm gốc tọa độ.', answer: true },
        { text: 'Góc giữa đường thẳng và trục $Oz$ được tính bằng $\\cos$ với hệ số của $z$.', answer: true },
        { text: 'Hai mặt phẳng vuông góc khi hai vectơ pháp tuyến song song.', answer: false },
      ],
      explanation: 'Hai mặt phẳng vuông góc khi hai vectơ pháp tuyến vuông góc, tức tích vô hướng bằng 0.',
    },
  ],

  shortAnswer: [
    {
      id: 'sa1',
      question: 'Góc giữa hai đường thẳng vuông góc bằng bao nhiêu độ?',
      answer: '90',
      unit: '°',
      explanation: 'Theo định nghĩa hai đường thẳng vuông góc.',
    },
    {
      id: 'sa2',
      question: String.raw`Đường thẳng $d$ có vectơ chỉ phương $\vec u=(1;2;2)$. Cosin góc giữa $d$ và trục $Ox$ bằng $\dfrac1k$. Tìm $k$.`,
      answer: '3',
      unit: '',
      explanation: String.raw`$\cos\alpha=\dfrac{|1|}{3}=\dfrac13$ nên $k=3$.`,
    },
    {
      id: 'sa3',
      question: String.raw`Cho $(P):x+2y+2z-1=0$ và $(Q):2x-y+2z+3=0$. Cosin góc giữa hai mặt phẳng bằng $\dfrac{k}{9}$. Tìm $k$.`,
      answer: '4',
      unit: '',
      explanation: String.raw`$\cos\varphi=\dfrac{|2-2+4|}{3\cdot3}=\dfrac49$ nên $k=4$.`,
    },
    {
      id: 'sa4',
      question: String.raw`Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $1$. Góc giữa $AB'$ và $BC'$ bằng bao nhiêu độ?`,
      answer: '60',
      unit: '°',
      explanation: String.raw`$\cos\varphi=\dfrac{1}{2}$ nên $\varphi=60^\circ$.`,
    },
  ],
}

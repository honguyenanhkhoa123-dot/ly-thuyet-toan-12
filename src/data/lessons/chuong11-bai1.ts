import type { Lesson } from '../types'

export const chuong11Bai1: Lesson = {
  id: 'bai-1',
  chapterId: 'chuong-11',
  title: 'Vectơ trong không gian',
  summary: 'Các phép toán vectơ, trung điểm – trọng tâm, góc và tích vô hướng.',
  minutes: 22,

  theory: [
    {
      subtitle: 'Định nghĩa vectơ trong không gian',
      content: String.raw`Vectơ trong không gian là một đoạn thẳng có hướng.

Kí hiệu $\overrightarrow{AB}$ chỉ vectơ có điểm đầu $A$, điểm cuối $B$. Ngoài ra, vectơ còn được kí hiệu là $\vec a,\ \vec b,\ \vec c,\ldots$

Độ dài của vectơ $\overrightarrow{AB}$ là độ dài đoạn thẳng $AB$, kí hiệu $\bigl|\overrightarrow{AB}\bigr|=AB$.

Hai vectơ được gọi là **cùng phương** nếu chúng có giá song song hoặc trùng nhau. Hai vectơ cùng phương thì chúng có cùng hướng hoặc ngược hướng.

Hai vectơ $\vec a$ và $\vec b$ được gọi là **bằng nhau** nếu chúng cùng hướng và cùng độ dài, kí hiệu $\vec a=\vec b$.

Vectơ-không là vectơ có điểm đầu và điểm cuối trùng nhau, kí hiệu $\vec 0$.`,
      formula: String.raw`\vec a=\vec b\iff \begin{cases}|\vec a|=|\vec b|\\ \vec a\uparrow\uparrow\vec b\end{cases}`,
      note: String.raw`Kí hiệu $\vec a\uparrow\uparrow\vec b$ nghĩa là hai vectơ cùng hướng. Vectơ-không có độ dài bằng $0$ và cùng phương với mọi vectơ.`,
    },
    {
      subtitle: 'Các phép toán vectơ',
      content: String.raw`**Quy tắc ba điểm:** với ba điểm $A,\ B,\ C$ ta có $\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{AC}$.

**Quy tắc hình bình hành:** cho hình bình hành $ABCD$, ta có $\overrightarrow{AB}+\overrightarrow{AD}=\overrightarrow{AC}$.

**Quy tắc hình hộp:** cho hình hộp $ABCD.A'B'C'D'$, ta có $\overrightarrow{AB}+\overrightarrow{AD}+\overrightarrow{AA'}=\overrightarrow{AC'}$.

**Quy tắc hiệu:** với ba điểm $A,\ B,\ C$ ta có $\overrightarrow{AB}-\overrightarrow{AC}=\overrightarrow{CB}$.

**Tích của một số với một vectơ:** cho vectơ $\vec a\ne\vec 0$ và số $k\ne0$. Khi đó $k\vec a$ là một vectơ có độ dài bằng $|k|\cdot|\vec a|$, cùng hướng với $\vec a$ nếu $k>0$ và ngược hướng với $\vec a$ nếu $k<0$.`,
      formula: String.raw`\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{AC},\qquad \overrightarrow{AB}-\overrightarrow{AC}=\overrightarrow{CB}`,
      note: String.raw`Với hai điểm $A,\ B$ bất kì, ta có $\overrightarrow{AB}=-\overrightarrow{BA}$.`,
    },
    {
      subtitle: 'Điều kiện cùng phương, trung điểm, trọng tâm',
      content: String.raw`Cho hai vectơ $\vec a$ và $\vec b$ khác $\vec 0$. Khi đó $\vec a$ và $\vec b$ cùng phương khi và chỉ khi tồn tại số $k\ne0$ sao cho $\vec a=k\vec b$.

Ba điểm $A,\ B,\ C$ thẳng hàng khi và chỉ khi tồn tại số $k$ sao cho $\overrightarrow{AB}=k\overrightarrow{AC}$.

**Quy tắc trung điểm:** nếu $M$ là trung điểm của $BC$ thì $\overrightarrow{MB}+\overrightarrow{MC}=\vec 0$ và với điểm $A$ bất kì, $\overrightarrow{AM}=\dfrac12\bigl(\overrightarrow{AB}+\overrightarrow{AC}\bigr)$.

**Quy tắc trọng tâm:** nếu $G$ là trọng tâm của tam giác $ABC$ thì $\overrightarrow{GA}+\overrightarrow{GB}+\overrightarrow{GC}=\vec 0$ và với điểm $M$ bất kì, $\overrightarrow{MA}+\overrightarrow{MB}+\overrightarrow{MC}=3\overrightarrow{MG}$.`,
      formula: String.raw`\overrightarrow{AM}=\dfrac12\bigl(\overrightarrow{AB}+\overrightarrow{AC}\bigr),\qquad \overrightarrow{MA}+\overrightarrow{MB}+\overrightarrow{MC}=3\overrightarrow{MG}`,
      note: String.raw`Các hệ thức trung điểm và trọng tâm đúng với điểm $A$ (hoặc $M$) bất kì trong không gian.`,
    },
    {
      subtitle: 'Góc giữa hai vectơ và tích vô hướng',
      content: String.raw`Cho hai vectơ $\vec a$ và $\vec b$ khác $\vec 0$. Từ một điểm $O$ bất kì, vẽ $\overrightarrow{OA}=\vec a$ và $\overrightarrow{OB}=\vec b$. Khi đó góc giữa hai vectơ $\vec a$ và $\vec b$ là góc $\widehat{AOB}$, kí hiệu $\bigl(\vec a,\vec b\bigr)$.

Ta có $0^\circ\le\bigl(\vec a,\vec b\bigr)\le180^\circ$. Nếu $\bigl(\vec a,\vec b\bigr)=90^\circ$ thì $\vec a\perp\vec b$.

**Tích vô hướng** của hai vectơ $\vec a$ và $\vec b$ là một số, kí hiệu $\vec a\cdot\vec b$, xác định bởi
$$\vec a\cdot\vec b=|\vec a|\cdot|\vec b|\cdot\cos\bigl(\vec a,\vec b\bigr).$$

Từ đó $\cos\bigl(\vec a,\vec b\bigr)=\dfrac{\vec a\cdot\vec b}{|\vec a|\cdot|\vec b|}$, $\vec a^2=|\vec a|^2$ và $\vec a\perp\vec b\iff\vec a\cdot\vec b=0$.`,
      formula: String.raw`\vec a\cdot\vec b=|\vec a|\,|\vec b|\cos\bigl(\vec a,\vec b\bigr),\qquad \vec a\perp\vec b\iff\vec a\cdot\vec b=0`,
      note: String.raw`Tích vô hướng là một **số**, không phải một vectơ.`,
    },
  ],

  examples: [
    {
      id: 'vd1',
      title: 'Quy tắc hình hộp',
      prompt: String.raw`Cho hình hộp $ABCD.A'B'C'D'$. Chứng minh $\overrightarrow{AB}+\overrightarrow{AD}+\overrightarrow{AA'}=\overrightarrow{AC'}$.`,
      steps: [
        String.raw`Theo quy tắc hình bình hành cho mặt $ABCD$: $\overrightarrow{AB}+\overrightarrow{AD}=\overrightarrow{AC}$.`,
        String.raw`Theo quy tắc hình bình hành cho mặt $ACC'A'$: $\overrightarrow{AC}+\overrightarrow{AA'}=\overrightarrow{AC'}$.`,
        String.raw`Thay $\overrightarrow{AC}$ từ bước 1 vào bước 2 được $\overrightarrow{AB}+\overrightarrow{AD}+\overrightarrow{AA'}=\overrightarrow{AC'}$.`,
      ],
      answer: String.raw`Đẳng thức được chứng minh.`,
    },
    {
      id: 'vd2',
      title: 'Quy tắc trung điểm',
      prompt: String.raw`Cho tứ diện $ABCD$. Gọi $M$ là trung điểm của $BC$. Chứng minh $\overrightarrow{AM}=\dfrac12\bigl(\overrightarrow{AB}+\overrightarrow{AC}\bigr)$.`,
      steps: [
        String.raw`Vì $M$ là trung điểm của $BC$ nên $\overrightarrow{MB}+\overrightarrow{MC}=\vec 0$.`,
        String.raw`Phân tích $\overrightarrow{AM}=\overrightarrow{AB}+\overrightarrow{BM}$ và $\overrightarrow{AM}=\overrightarrow{AC}+\overrightarrow{CM}$.`,
        String.raw`Cộng hai đẳng thức: $2\overrightarrow{AM}=\overrightarrow{AB}+\overrightarrow{AC}+\bigl(\overrightarrow{BM}+\overrightarrow{CM}\bigr)=\overrightarrow{AB}+\overrightarrow{AC}$.`,
        String.raw`Chia hai vế cho $2$ được điều phải chứng minh.`,
      ],
      answer: String.raw`$\overrightarrow{AM}=\dfrac12\bigl(\overrightarrow{AB}+\overrightarrow{AC}\bigr)$.`,
    },
    {
      id: 'vd3',
      title: 'Quy tắc trọng tâm',
      prompt: String.raw`Cho tam giác $ABC$ có trọng tâm $G$. Với điểm $M$ bất kì, chứng minh $\overrightarrow{MA}+\overrightarrow{MB}+\overrightarrow{MC}=3\overrightarrow{MG}$.`,
      steps: [
        String.raw`Theo quy tắc trọng tâm: $\overrightarrow{GA}+\overrightarrow{GB}+\overrightarrow{GC}=\vec 0$.`,
        String.raw`Với điểm $M$ bất kì, ta có $\overrightarrow{MA}=\overrightarrow{MG}+\overrightarrow{GA}$, tương tự cho $B$ và $C$.`,
        String.raw`Cộng ba đẳng thức: $\overrightarrow{MA}+\overrightarrow{MB}+\overrightarrow{MC}=3\overrightarrow{MG}+\bigl(\overrightarrow{GA}+\overrightarrow{GB}+\overrightarrow{GC}\bigr)=3\overrightarrow{MG}$.`,
      ],
      answer: String.raw`Đẳng thức được chứng minh.`,
    },
    {
      id: 'vd4',
      title: 'Tích vô hướng trong hình lập phương',
      prompt: String.raw`Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $a$. Tính $\overrightarrow{AB}\cdot\overrightarrow{AD}$ và $\overrightarrow{AB}\cdot\overrightarrow{AC'}$.`,
      steps: [
        String.raw`Vì $AB\perp AD$ nên $\bigl(\overrightarrow{AB},\overrightarrow{AD}\bigr)=90^\circ$, do đó $\overrightarrow{AB}\cdot\overrightarrow{AD}=0$.`,
        String.raw`Theo quy tắc hình hộp: $\overrightarrow{AC'}=\overrightarrow{AB}+\overrightarrow{AD}+\overrightarrow{AA'}$.`,
        String.raw`Suy ra $\overrightarrow{AB}\cdot\overrightarrow{AC'}=\overrightarrow{AB}^2+\overrightarrow{AB}\cdot\overrightarrow{AD}+\overrightarrow{AB}\cdot\overrightarrow{AA'}$.`,
        String.raw`Do $AB\perp AD$ và $AB\perp AA'$ nên hai tích vô hướng sau bằng $0$. Vậy $\overrightarrow{AB}\cdot\overrightarrow{AC'}=AB^2=a^2$.`,
      ],
      answer: String.raw`$\overrightarrow{AB}\cdot\overrightarrow{AD}=0$ và $\overrightarrow{AB}\cdot\overrightarrow{AC'}=a^2$.`,
    },
  ],

  exercises: [
    {
      id: 'bt1',
      prompt: String.raw`Cho hình hộp $ABCD.A'B'C'D'$. Chứng minh $\overrightarrow{AB}+\overrightarrow{AD}+\overrightarrow{AA'}=\overrightarrow{AC'}$.`,
      solution: String.raw`$\overrightarrow{AB}+\overrightarrow{AD}=\overrightarrow{AC}$ (quy tắc hình bình hành cho mặt $ABCD$).

$\overrightarrow{AC}+\overrightarrow{AA'}=\overrightarrow{AC'}$ (quy tắc hình bình hành cho mặt $ACC'A'$).

Vậy $\overrightarrow{AB}+\overrightarrow{AD}+\overrightarrow{AA'}=\overrightarrow{AC'}$.`,
    },
    {
      id: 'bt2',
      prompt: String.raw`Cho tứ diện $ABCD$, $M$ là trung điểm của $BC$. Chứng minh $\overrightarrow{AB}+\overrightarrow{AC}=2\overrightarrow{AM}$.`,
      solution: String.raw`Vì $M$ là trung điểm của $BC$ nên $\overrightarrow{MB}+\overrightarrow{MC}=\vec 0$.

Ta có $\overrightarrow{AB}=\overrightarrow{AM}+\overrightarrow{MB}$ và $\overrightarrow{AC}=\overrightarrow{AM}+\overrightarrow{MC}$.

Cộng lại: $\overrightarrow{AB}+\overrightarrow{AC}=2\overrightarrow{AM}+\bigl(\overrightarrow{MB}+\overrightarrow{MC}\bigr)=2\overrightarrow{AM}$.`,
    },
    {
      id: 'bt3',
      prompt: String.raw`Cho tam giác $ABC$ có trọng tâm $G$. Chứng minh $\overrightarrow{GA}+\overrightarrow{GB}+\overrightarrow{GC}=\vec 0$.`,
      solution: String.raw`Gọi $M$ là trung điểm của $BC$. Theo quy tắc trung điểm, $\overrightarrow{GB}+\overrightarrow{GC}=2\overrightarrow{GM}$.

Vì $G$ là trọng tâm nên $\overrightarrow{GA}=-2\overrightarrow{GM}$.

Do đó $\overrightarrow{GA}+\overrightarrow{GB}+\overrightarrow{GC}=-2\overrightarrow{GM}+2\overrightarrow{GM}=\vec 0$.`,
    },
    {
      id: 'bt4',
      prompt: String.raw`Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $a$. Tính độ dài $\bigl|\overrightarrow{AC'}\bigr|$.`,
      hint: String.raw`Dùng quy tắc hình hộp và tính $\bigl|\overrightarrow{AC'}\bigr|^2$.`,
      solution: String.raw`$\overrightarrow{AC'}=\overrightarrow{AB}+\overrightarrow{AD}+\overrightarrow{AA'}$.

Vì ba vectơ $\overrightarrow{AB},\overrightarrow{AD},\overrightarrow{AA'}$ đôi một vuông góc và cùng có độ dài $a$, nên
$$\bigl|\overrightarrow{AC'}\bigr|^2=a^2+a^2+a^2=3a^2.$$

Vậy $\bigl|\overrightarrow{AC'}\bigr|=a\sqrt3$.`,
    },
    {
      id: 'bt5',
      prompt: String.raw`Cho hai vectơ $\vec a,\ \vec b$ có $|\vec a|=2$, $|\vec b|=3$ và $\bigl(\vec a,\vec b\bigr)=60^\circ$. Tính $\vec a\cdot\vec b$.`,
      solution: String.raw`$\vec a\cdot\vec b=|\vec a|\,|\vec b|\cos60^\circ=2\cdot3\cdot\dfrac12=3$.`,
    },
    {
      id: 'bt6',
      prompt: String.raw`Cho hai vectơ $\vec a,\ \vec b$ vuông góc, $|\vec a|=1$, $|\vec b|=2$. Tính $\bigl|\vec a+\vec b\bigr|$.`,
      hint: String.raw`Bình phương $\vec a+\vec b$ và dùng $\vec a\cdot\vec b=0$.`,
      solution: String.raw`$\bigl|\vec a+\vec b\bigr|^2=\vec a^2+2\vec a\cdot\vec b+\vec b^2=1+0+4=5$.

Vậy $\bigl|\vec a+\vec b\bigr|=\sqrt5$.`,
    },
  ],

  quiz: [
    {
      id: 'q1',
      question: 'Vectơ trong không gian là',
      options: ['Một đoạn thẳng.', 'Một đoạn thẳng có hướng.', 'Một điểm.', 'Một mặt phẳng.'],
      answer: 1,
      explanation: 'Vectơ là đoạn thẳng có hướng, có điểm đầu và điểm cuối.',
    },
    {
      id: 'q2',
      question: 'Hai vectơ được gọi là bằng nhau khi',
      options: ['Cùng phương.', 'Cùng độ dài.', 'Cùng hướng và cùng độ dài.', 'Có giá vuông góc.'],
      answer: 2,
      explanation: 'Hai vectơ bằng nhau phải cùng hướng và cùng độ dài.',
    },
    {
      id: 'q3',
      question: String.raw`Với ba điểm $A,\ B,\ C$, đẳng thức nào đúng?`,
      options: [String.raw`$\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{CA}$`, String.raw`$\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{AC}$`, String.raw`$\overrightarrow{AB}-\overrightarrow{BC}=\overrightarrow{AC}$`, String.raw`$\overrightarrow{AB}+\overrightarrow{AC}=\overrightarrow{BC}$`],
      answer: 1,
      explanation: 'Đây là quy tắc ba điểm.',
    },
    {
      id: 'q4',
      question: String.raw`Cho hình bình hành $ABCD$. Đẳng thức nào đúng?`,
      options: [String.raw`$\overrightarrow{AB}+\overrightarrow{AD}=\overrightarrow{BD}$`, String.raw`$\overrightarrow{AB}+\overrightarrow{AD}=\overrightarrow{AC}$`, String.raw`$\overrightarrow{AB}+\overrightarrow{AC}=\overrightarrow{AD}$`, String.raw`$\overrightarrow{AD}+\overrightarrow{AC}=\overrightarrow{AB}$`],
      answer: 1,
      explanation: String.raw`Quy tắc hình bình hành: $\overrightarrow{AB}+\overrightarrow{AD}=\overrightarrow{AC}$.`,
    },
    {
      id: 'q5',
      question: String.raw`Cho hình hộp $ABCD.A'B'C'D'$. Đẳng thức nào đúng?`,
      options: [String.raw`$\overrightarrow{AB}+\overrightarrow{AD}+\overrightarrow{AA'}=\overrightarrow{A'C}$`, String.raw`$\overrightarrow{AB}+\overrightarrow{AD}+\overrightarrow{AA'}=\overrightarrow{BD'}$`, String.raw`$\overrightarrow{AB}+\overrightarrow{AD}+\overrightarrow{AA'}=\overrightarrow{AC'}$`, String.raw`$\overrightarrow{AB}+\overrightarrow{AD}+\overrightarrow{AA'}=\vec 0$`],
      answer: 2,
      explanation: 'Đây là quy tắc hình hộp.',
    },
    {
      id: 'q6',
      question: String.raw`Nếu $M$ là trung điểm của $BC$ thì`,
      options: [String.raw`$\overrightarrow{MB}=\overrightarrow{MC}$`, String.raw`$\overrightarrow{MB}+\overrightarrow{MC}=\vec 0$`, String.raw`$\overrightarrow{MB}+\overrightarrow{MC}=\overrightarrow{BC}$`, String.raw`$\overrightarrow{MB}-\overrightarrow{MC}=\vec 0$`],
      answer: 1,
      explanation: String.raw`Hai vectơ $\overrightarrow{MB}$ và $\overrightarrow{MC}$ ngược hướng, cùng độ dài nên tổng bằng $\vec 0$.`,
    },
    {
      id: 'q7',
      question: String.raw`Nếu $G$ là trọng tâm tam giác $ABC$ thì`,
      options: [String.raw`$\overrightarrow{GA}=\overrightarrow{GB}=\overrightarrow{GC}$`, String.raw`$\overrightarrow{GA}+\overrightarrow{GB}+\overrightarrow{GC}=\vec 0$`, String.raw`$\overrightarrow{GA}+\overrightarrow{GB}+\overrightarrow{GC}=\overrightarrow{AB}$`, String.raw`$\overrightarrow{GA}-\overrightarrow{GB}=\vec 0$`],
      answer: 1,
      explanation: 'Đây là quy tắc trọng tâm.',
    },
    {
      id: 'q8',
      question: String.raw`Tích vô hướng $\vec a\cdot\vec b$ bằng`,
      options: [String.raw`$|\vec a|\,|\vec b|\sin\bigl(\vec a,\vec b\bigr)$`, String.raw`$|\vec a|\,|\vec b|\cos\bigl(\vec a,\vec b\bigr)$`, String.raw`$|\vec a|+|\vec b|$`, String.raw`$\bigl|\vec a\bigr|\cdot\bigl|\vec b\bigr|$`],
      answer: 1,
      explanation: String.raw`Công thức tích vô hướng có $\cos$ của góc giữa hai vectơ.`,
    },
  ],

  trueFalse: [
    {
      id: 'tf1',
      stem: String.raw`Cho hình hộp $ABCD.A'B'C'D'$.`,
      items: [
        { text: String.raw`$\overrightarrow{AB}+\overrightarrow{AD}=\overrightarrow{AC}$.`, answer: true },
        { text: String.raw`$\overrightarrow{AB}+\overrightarrow{AD}+\overrightarrow{AA'}=\overrightarrow{AC'}$.`, answer: true },
        { text: String.raw`$\overrightarrow{AB}-\overrightarrow{AC}=\overrightarrow{CB}$.`, answer: true },
        { text: String.raw`$\overrightarrow{AB}+\overrightarrow{AD}=\overrightarrow{AC'}$.`, answer: false },
      ],
      explanation: String.raw`$\overrightarrow{AB}+\overrightarrow{AD}=\overrightarrow{AC}$; cộng thêm $\overrightarrow{AA'}$ mới được $\overrightarrow{AC'}$.`,
    },
    {
      id: 'tf2',
      stem: String.raw`Cho tứ diện $ABCD$, $M$ là trung điểm của $BC$.`,
      items: [
        { text: String.raw`$\overrightarrow{MB}+\overrightarrow{MC}=\vec 0$.`, answer: true },
        { text: String.raw`$\overrightarrow{AM}=\dfrac12\bigl(\overrightarrow{AB}+\overrightarrow{AC}\bigr)$.`, answer: true },
        { text: String.raw`$\overrightarrow{AB}+\overrightarrow{AC}=2\overrightarrow{AM}$.`, answer: true },
        { text: String.raw`$M$ là trọng tâm tam giác $ABC$.`, answer: false },
      ],
      explanation: String.raw`$M$ là trung điểm $BC$, không phải trọng tâm tam giác $ABC$.`,
    },
    {
      id: 'tf3',
      stem: String.raw`Cho hai vectơ $\vec a,\ \vec b$ khác $\vec 0$.`,
      items: [
        { text: String.raw`$\vec a\cdot\vec b=|\vec a|\,|\vec b|\cos\bigl(\vec a,\vec b\bigr)$.`, answer: true },
        { text: String.raw`$\vec a\perp\vec b\iff\vec a\cdot\vec b=0$.`, answer: true },
        { text: String.raw`$\vec a^2=|\vec a|^2$.`, answer: true },
        { text: String.raw`$\vec a\cdot\vec b=0$ thì $\vec a=\vec 0$ hoặc $\vec b=\vec 0$.`, answer: false },
      ],
      explanation: String.raw`$\vec a\cdot\vec b=0$ còn có thể xảy ra khi $\vec a\perp\vec b$ (hai vectơ khác $\vec 0$).`,
    },
  ],

  shortAnswer: [
    {
      id: 'sa1',
      question: String.raw`Cho hình lập phương cạnh $2$. Tính $\bigl|\overrightarrow{AC'}\bigr|^2$.`,
      answer: '12',
      unit: '',
      explanation: String.raw`$\bigl|\overrightarrow{AC'}\bigr|^2=3a^2=3\cdot2^2=12$.`,
    },
    {
      id: 'sa2',
      question: String.raw`Cho $|\vec a|=3$, $|\vec b|=4$ và $\bigl(\vec a,\vec b\bigr)=60^\circ$. Tính $\vec a\cdot\vec b$.`,
      answer: '6',
      unit: '',
      explanation: String.raw`$\vec a\cdot\vec b=3\cdot4\cdot\cos60^\circ=6$.`,
    },
    {
      id: 'sa3',
      question: String.raw`Cho $|\vec a|=1$, $|\vec b|=1$ và $\vec a\perp\vec b$. Tính $\bigl|\vec a+\vec b\bigr|^2$.`,
      answer: '2',
      unit: '',
      explanation: String.raw`$\bigl|\vec a+\vec b\bigr|^2=|\vec a|^2+2\vec a\cdot\vec b+|\vec b|^2=1+0+1=2$.`,
    },
    {
      id: 'sa4',
      question: String.raw`Cho tam giác $ABC$ có trọng tâm $G$, $M$ là trung điểm $BC$ và $AM=6$. Tính $AG$.`,
      answer: '4',
      unit: '',
      explanation: String.raw`Trọng tâm nằm trên trung tuyến và $AG=\dfrac23AM=\dfrac23\cdot6=4$.`,
    },
  ],
}

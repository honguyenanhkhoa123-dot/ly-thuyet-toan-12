import type { Lesson } from '../types'

export const chuong10Bai2: Lesson = {
  id: 'bai-2',
  chapterId: 'chuong-10',
  title: 'Quan hệ vuông góc trong không gian',
  summary: 'Đường thẳng vuông góc với mặt phẳng, hai mặt phẳng vuông góc và các tính chất liên hệ.',
  minutes: 26,

  theory: [
    {
      subtitle: 'Đường thẳng vuông góc với mặt phẳng',
      content: String.raw`**Định nghĩa 10.11.** Đường thẳng $d$ gọi là vuông góc với mặt phẳng $(\alpha)$ nếu $d$ vuông góc với mọi đường thẳng nằm trong $(\alpha)$:
$$d\perp(\alpha)\iff\forall a\subset(\alpha),\ d\perp a.$$

**Định lí 10.12.** Nếu đường thẳng $d$ vuông góc với hai đường thẳng cắt nhau $a$, $b$ cùng nằm trong mặt phẳng $(\alpha)$ thì $d\perp(\alpha)$.`,
      formula: String.raw`d\perp a,\ d\perp b,\ a\cap b=\{A\},\ a,b\subset(\alpha)\Rightarrow d\perp(\alpha)`,
      note: String.raw`Hai đường thẳng $a$, $b$ phải **cắt nhau** và cùng nằm trong $(\alpha)$.`,
    },
    {
      subtitle: 'Mặt phẳng trung trực',
      content: String.raw`**Định nghĩa 10.13.** Cho đoạn thẳng $AB$, gọi $I$ là trung điểm của $AB$. Mặt phẳng $(P)$ đi qua $I$ và vuông góc với $AB$ gọi là **mặt phẳng trung trực** của đoạn $AB$.

Mặt phẳng trung trực của $AB$ là tập hợp các điểm cách đều $A$ và $B$.`,
      formula: String.raw`M\in(P)\iff MA=MB`,
      note: String.raw`Mặt phẳng trung trực vuông góc với $AB$ tại trung điểm $I$.`,
    },
    {
      subtitle: 'Các tính chất quan trọng',
      content: String.raw`**Tính chất 10.14.** Ta có các khẳng định:

- Nếu $d\parallel d'$ và $d\perp(P)$ thì $d'\perp(P)$.
- Nếu $d\perp(P)$ và $d'\perp(P)$ thì $d\parallel d'$.
- Nếu $(P)\parallel(Q)$ và $d\perp(P)$ thì $d\perp(Q)$.
- Nếu $d\perp(P)$ và $d\perp(Q)$ thì $(P)\parallel(Q)$.
- Nếu $d\parallel(P)$ và $d'\perp(P)$ thì $d\perp d'$.
- Nếu $d\perp d'$ và $(P)\perp d'$ thì $d\parallel(P)$ hoặc $d\subset(P)$.

Hệ quả: có duy nhất một mặt phẳng đi qua một điểm cho trước và vuông góc với một đường thẳng cho trước; có duy nhất một đường thẳng đi qua một điểm cho trước và vuông góc với một mặt phẳng cho trước.`,
      formula: String.raw`d\perp(P),\ d'\perp(P)\Rightarrow d\parallel d'`,
      note: String.raw`Hai đường thẳng cùng vuông góc với một mặt phẳng thì song song (hoặc trùng).`,
    },
    {
      subtitle: 'Hai mặt phẳng vuông góc',
      content: String.raw`**Định nghĩa.** Hai mặt phẳng gọi là vuông góc nếu góc giữa chúng bằng $90^\circ$.

**Định lí 10.15.** Nếu một mặt phẳng chứa một đường thẳng vuông góc với mặt phẳng khác thì hai mặt phẳng đó vuông góc:
$$a\subset(\alpha),\ a\perp(\beta)\Rightarrow(\alpha)\perp(\beta).$$

**Định lí 10.16.** Nếu hai mặt phẳng vuông góc với nhau thì bất cứ đường thẳng nào nằm trong mặt phẳng này và vuông góc với giao tuyến thì vuông góc với mặt phẳng kia.

Ngoài ra, nếu hai mặt phẳng cắt nhau và cùng vuông góc với mặt phẳng thứ ba thì giao tuyến của chúng vuông góc với mặt phẳng thứ ba đó.`,
      formula: String.raw`(\alpha)\perp(\beta),\ (\alpha)\cap(\beta)=d,\ a\subset(\alpha),\ a\perp d\Rightarrow a\perp(\beta)`,
      note: String.raw`Điều kiện $a\perp d$ (giao tuyến) là bắt buộc.`,
    },
    {
      subtitle: 'Hình chóp có cạnh bên vuông góc với đáy',
      content: String.raw`Cho hình chóp $S.ABC$ có $SA\perp(ABC)$. Khi đó:

- $SA$ là đường cao của hình chóp.
- Hình chiếu của $SB$ trên $(ABC)$ là $AB$, nên góc giữa $SB$ và $(ABC)$ là $\widehat{SBA}$.
- Tương tự, góc giữa $SC$ và $(ABC)$ là $\widehat{SCA}$.
- Nếu tam giác $ABC$ vuông tại $B$ thì $BC\perp(SAB)$, do đó $BC\perp SB$.

Với hình chóp $S.ABCD$ có $SA\perp(ABCD)$ và đáy là hình chữ nhật, các mặt bên đều là tam giác vuông.`,
      formula: String.raw`SA\perp(ABC)\Rightarrow SA\perp AB,\ SA\perp AC,\ SA\perp BC`,
      note: String.raw`Cạnh bên vuông góc với đáy thường cho phép gắn hệ trục tọa độ.`,
    },
  ],

  examples: [
    {
      id: 'vd1',
      title: 'Chứng minh đường thẳng vuông góc mặt phẳng',
      prompt: String.raw`Cho hình chóp $S.ABC$ có $SA\perp(ABC)$ và tam giác $ABC$ vuông tại $B$. Chứng minh $BC\perp(SAB)$.`,
      steps: [
        String.raw`Ta có $SA\perp(ABC)$ nên $SA\perp BC$.`,
        String.raw`Tam giác $ABC$ vuông tại $B$ nên $AB\perp BC$.`,
        String.raw`Trong $(SAB)$, hai đường thẳng $SA$ và $AB$ cắt nhau tại $A$ và cùng vuông góc với $BC$.`,
        String.raw`Do đó $BC\perp(SAB)$.`,
      ],
      answer: String.raw`$BC\perp(SAB)$.`,
    },
    {
      id: 'vd2',
      title: 'Hai mặt phẳng vuông góc',
      prompt: String.raw`Cho hình chóp $S.ABC$ có $SA\perp(ABC)$. Chứng minh $(SAB)\perp(ABC)$.`,
      steps: [
        String.raw`Ta có $SA\perp(ABC)$.`,
        String.raw`Mà $SA\subset(SAB)$.`,
        String.raw`Theo định lí 10.15, $(SAB)\perp(ABC)$.`,
      ],
      answer: String.raw`$(SAB)\perp(ABC)$.`,
    },
    {
      id: 'vd3',
      title: 'Mặt phẳng trung trực',
      prompt: String.raw`Cho đoạn thẳng $AB$ có trung điểm $I$ và $AB=6$. Mặt phẳng trung trực của $AB$ cắt $AB$ tại $I$. Tính $IA$.`,
      steps: [
        String.raw`$I$ là trung điểm của $AB$ nên $IA=\dfrac{AB}{2}$.`,
        String.raw`$IA=\dfrac62=3$.`,
      ],
      answer: String.raw`$IA=3$.`,
    },
    {
      id: 'vd4',
      title: 'Dùng tính chất song song – vuông góc',
      prompt: String.raw`Cho hai đường thẳng $d$, $d'$ cùng vuông góc với mặt phẳng $(P)$. Chứng minh $d\parallel d'$.`,
      steps: [
        String.raw`Theo tính chất 10.14, hai đường thẳng cùng vuông góc với một mặt phẳng thì song song với nhau.`,
        String.raw`Vậy $d\parallel d'$ (nếu $d\ne d'$).`,
      ],
      answer: String.raw`$d\parallel d'$.`,
    },
    {
      id: 'vd5',
      title: 'Hình chóp có cạnh bên vuông góc đáy',
      prompt: String.raw`Cho hình chóp $S.ABCD$ có $SA\perp(ABCD)$ và $ABCD$ là hình vuông cạnh $a$, $SA=a$. Tính độ dài $SC$.`,
      steps: [
        String.raw`$ABCD$ là hình vuông cạnh $a$ nên $AC=a\sqrt2$.`,
        String.raw`Tam giác $SAC$ vuông tại $A$ nên $SC^2=SA^2+AC^2$.`,
        String.raw`$SC^2=a^2+2a^2=3a^2$, suy ra $SC=a\sqrt3$.`,
      ],
      answer: String.raw`$SC=a\sqrt3$.`,
    },
  ],

  exercises: [
    {
      id: 'bt1',
      prompt: String.raw`Cho hình chóp $S.ABC$ có $SA\perp(ABC)$. Chứng minh $SA\perp BC$.`,
      solution: String.raw`Vì $BC\subset(ABC)$ và $SA\perp(ABC)$ nên $SA\perp BC$.`,
    },
    {
      id: 'bt2',
      prompt: String.raw`Cho hình chóp $S.ABCD$ có $SA\perp(ABCD)$ và $ABCD$ là hình chữ nhật. Chứng minh $BC\perp(SAB)$.`,
      solution: String.raw`$SA\perp BC$ và $AB\perp BC$; $SA$, $AB$ cắt nhau trong $(SAB)$ nên $BC\perp(SAB)$.`,
    },
    {
      id: 'bt3',
      prompt: String.raw`Cho hình chóp $S.ABC$ có $SA\perp(ABC)$ và tam giác $ABC$ đều cạnh $a$, $SA=a$. Tính góc giữa $SB$ và $(ABC)$.`,
      hint: String.raw`Hình chiếu của $SB$ trên $(ABC)$ là $AB$.`,
      solution: String.raw`Góc cần tìm là $\widehat{SBA}$. Tam giác $SAB$ vuông cân tại $A$ nên $\widehat{SBA}=45^\circ$.`,
    },
    {
      id: 'bt4',
      prompt: String.raw`Cho tứ diện $ABCD$ có $AB\perp CD$ và $AC\perp BD$. Chứng minh $AD\perp BC$.`,
      hint: String.raw`Dùng tích vô hướng: $\vec{AD}\cdot\vec{BC}$.`,
      solution: String.raw`$\vec{AD}\cdot\vec{BC}=(\vec{AB}+\vec{BD})\cdot\vec{BC}=\vec{AB}\cdot\vec{BC}+\vec{BD}\cdot\vec{BC}=0$ nhờ các giả thiết vuông góc. Vậy $AD\perp BC$.`,
    },
    {
      id: 'bt5',
      prompt: String.raw`Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $a$. Chứng minh $AC\perp(BB'D'D)$.`,
      solution: String.raw`$AC\perp BD$ (đường chéo hình vuông) và $AC\perp BB'$ (do $BB'\perp(ABCD)$). Hai đường $BD$, $BB'$ cắt nhau trong $(BB'D'D)$ nên $AC\perp(BB'D'D)$.`,
    },
    {
      id: 'bt6',
      prompt: String.raw`Cho hình chóp $S.ABCD$ có $SA\perp(ABCD)$, đáy là hình vuông cạnh $a$, $SA=a\sqrt2$. Tính $SC$.`,
      solution: String.raw`$AC=a\sqrt2$ nên $SC^2=SA^2+AC^2=2a^2+2a^2=4a^2$, suy ra $SC=2a$.`,
    },
  ],

  quiz: [
    {
      id: 'q1',
      question: String.raw`Đường thẳng $d$ vuông góc với mặt phẳng $(\alpha)$ khi`,
      options: [
        String.raw`$d$ vuông góc với một đường thẳng trong $(\alpha)$`,
        String.raw`$d$ vuông góc với hai đường thẳng song song trong $(\alpha)$`,
        String.raw`$d$ vuông góc với mọi đường thẳng trong $(\alpha)$`,
        String.raw`$d$ song song với một đường thẳng trong $(\alpha)$`,
      ],
      answer: 2,
      explanation: 'Định nghĩa 10.11.',
    },
    {
      id: 'q2',
      question: String.raw`Nếu $d\perp a$ và $d\perp b$ với $a$, $b$ cắt nhau và cùng nằm trong $(P)$ thì`,
      options: [
        String.raw`$d\parallel(P)$`,
        String.raw`$d\subset(P)$`,
        String.raw`$d$ cắt $(P)$ nhưng không vuông góc`,
        String.raw`$d\perp(P)$`,
      ],
      answer: 3,
      explanation: 'Định lí 10.12 về dấu hiệu nhận biết đường thẳng vuông góc mặt phẳng.',
    },
    {
      id: 'q3',
      question: 'Mặt phẳng trung trực của đoạn thẳng $AB$ là',
      options: [
        'Mặt phẳng vuông góc với $AB$ tại trung điểm của $AB$',
        'Mặt phẳng chứa $AB$',
        'Mặt phẳng song song với $AB$',
        'Mặt phẳng đi qua $A$ và vuông góc với $AB$',
      ],
      answer: 0,
      explanation: 'Định nghĩa 10.13.',
    },
    {
      id: 'q4',
      question: String.raw`Nếu $(\alpha)$ chứa đường thẳng $a$ và $a\perp(\beta)$ thì`,
      options: [
        String.raw`$(\alpha)\parallel(\beta)$`,
        String.raw`$(\alpha)\equiv(\beta)$`,
        String.raw`$(\alpha)$ cắt $(\beta)$ nhưng không vuông góc`,
        String.raw`$(\alpha)\perp(\beta)$`,
      ],
      answer: 3,
      explanation: 'Định lí 10.15.',
    },
    {
      id: 'q5',
      question: String.raw`Cho $SA\perp(ABC)$. Góc giữa $SB$ và $(ABC)$ là`,
      options: [
        String.raw`$\widehat{SAB}$`,
        String.raw`$\widehat{SBA}$`,
        String.raw`$\widehat{ASB}$`,
        String.raw`$\widehat{SCB}$`,
      ],
      answer: 1,
      explanation: String.raw`Hình chiếu của $SB$ trên $(ABC)$ là $AB$ nên góc là $\widehat{SBA}$.`,
    },
    {
      id: 'q6',
      question: String.raw`Hai đường thẳng phân biệt cùng vuông góc với một mặt phẳng thì`,
      options: [
        'Vuông góc với nhau',
        'Cắt nhau',
        'Song song với nhau',
        'Chéo nhau',
      ],
      answer: 2,
      explanation: 'Tính chất 10.14.',
    },
    {
      id: 'q7',
      question: String.raw`Cho hình chóp $S.ABC$ có $SA\perp(ABC)$ và tam giác $ABC$ vuông tại $B$. Khi đó $BC$ vuông góc với`,
      options: [
        String.raw`$(SAB)$`,
        String.raw`$(SAC)$`,
        String.raw`$(SBC)$`,
        String.raw`$SA$ nhưng không vuông góc với $(SAB)$`,
      ],
      answer: 0,
      explanation: String.raw`$BC\perp AB$ và $BC\perp SA$ nên $BC\perp(SAB)$.`,
    },
    {
      id: 'q8',
      question: String.raw`Cho hình lập phương $ABCD.A'B'C'D'$. Đường thẳng $AC$ vuông góc với mặt phẳng`,
      options: [
        String.raw`$(A'B'C'D')$`,
        String.raw`$(BB'D'D)$`,
        String.raw`$(ADD'A')$`,
        String.raw`$(BCC'B')$`,
      ],
      answer: 1,
      explanation: String.raw`$AC\perp BD$ và $AC\perp BB'$ nên $AC\perp(BB'D'D)$.`,
    },
  ],

  trueFalse: [
    {
      id: 'tf1',
      stem: 'Các khẳng định về đường thẳng vuông góc mặt phẳng:',
      items: [
        { text: String.raw`$d\perp(P)$ khi $d$ vuông góc với hai đường thẳng cắt nhau trong $(P)$.`, answer: true },
        { text: String.raw`$d\perp(P)$ khi $d$ vuông góc với một đường thẳng trong $(P)$.`, answer: false },
        { text: 'Có duy nhất một mặt phẳng đi qua một điểm và vuông góc với một đường thẳng cho trước.', answer: true },
        { text: 'Có vô số đường thẳng đi qua một điểm và vuông góc với một mặt phẳng cho trước.', answer: false },
      ],
      explanation: 'Đường thẳng qua một điểm và vuông góc với mặt phẳng là duy nhất; mặt phẳng qua một điểm vuông góc với đường thẳng cũng duy nhất.',
    },
    {
      id: 'tf2',
      stem: 'Các khẳng định về quan hệ song song – vuông góc:',
      items: [
        { text: String.raw`$d\parallel d'$ và $d\perp(P)$ thì $d'\perp(P)$.`, answer: true },
        { text: String.raw`$d\perp(P)$ và $d'\perp(P)$ thì $d$ cắt $d'$.`, answer: false },
        { text: String.raw`$(P)\parallel(Q)$ và $d\perp(P)$ thì $d\perp(Q)$.`, answer: true },
        { text: String.raw`$d\parallel(P)$ và $d'\perp(P)$ thì $d\perp d'$.`, answer: true },
      ],
      explanation: String.raw`Hai đường thẳng cùng vuông góc với một mặt phẳng thì song song (hoặc trùng), không cắt nhau.`,
    },
    {
      id: 'tf3',
      stem: 'Các khẳng định về hai mặt phẳng vuông góc:',
      items: [
        { text: String.raw`$(\alpha)$ chứa $a$ và $a\perp(\beta)$ thì $(\alpha)\perp(\beta)$.`, answer: true },
        { text: String.raw`$(\alpha)\perp(\beta)$ thì mọi đường thẳng trong $(\alpha)$ đều vuông góc với $(\beta)$.`, answer: false },
        { text: String.raw`$(\alpha)\perp(\beta)$ và $(\alpha)\cap(\beta)=d$, nếu $a\subset(\alpha)$, $a\perp d$ thì $a\perp(\beta)$.`, answer: true },
        { text: 'Nếu hai mặt phẳng cắt nhau và cùng vuông góc với mặt phẳng thứ ba thì giao tuyến của chúng vuông góc với mặt phẳng thứ ba.', answer: true },
      ],
      explanation: String.raw`Chỉ đường thẳng trong $(\alpha)$ vuông góc với giao tuyến mới vuông góc với $(\beta)$; hai mặt phẳng cùng vuông góc với mặt phẳng thứ ba vẫn có thể cắt nhau.`,
    },
  ],

  shortAnswer: [
    {
      id: 'sa1',
      question: String.raw`Cho đoạn thẳng $AB=8$. Mặt phẳng trung trực của $AB$ cắt $AB$ tại $I$. Tính $IA$.`,
      answer: '4',
      unit: '',
      explanation: String.raw`$I$ là trung điểm nên $IA=AB/2=4$.`,
    },
    {
      id: 'sa2',
      question: String.raw`Cho hình chóp $S.ABC$ có $SA\perp(ABC)$, $SA=AB$ và tam giác $ABC$ vuông tại $B$. Số đo góc giữa $SB$ và $(ABC)$ bằng bao nhiêu độ?`,
      answer: '45',
      unit: '°',
      explanation: String.raw`Góc là $\widehat{SBA}$ trong tam giác vuông cân $SAB$ nên bằng $45^\circ$.`,
    },
    {
      id: 'sa3',
      question: String.raw`Cho hình chóp $S.ABCD$ có $SA\perp(ABCD)$, đáy là hình vuông cạnh $2$, $SA=2$. Tính $SC^2$.`,
      answer: '12',
      unit: '',
      explanation: String.raw`$AC^2=8$ nên $SC^2=SA^2+AC^2=4+8=12$.`,
    },
    {
      id: 'sa4',
      question: String.raw`Cho hình lập phương cạnh $a$. Số mặt phẳng chứa một mặt của hình lập phương và vuông góc với mặt đáy là bao nhiêu?`,
      answer: '4',
      unit: '',
      explanation: 'Bốn mặt bên đều vuông góc với mặt đáy.',
    },
  ],
}

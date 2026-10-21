import type { Lesson } from '../types'

export const chuong10Bai1: Lesson = {
  id: 'bai-1',
  chapterId: 'chuong-10',
  title: 'Quan hệ song song trong không gian',
  summary: 'Vị trí tương đối của hai đường thẳng, đường thẳng và mặt phẳng; hai mặt phẳng song song.',
  minutes: 26,

  theory: [
    {
      subtitle: 'Vị trí tương đối của hai đường thẳng',
      content: String.raw`Cho hai đường thẳng $a$ và $b$ trong không gian. Có hai trường hợp.

**Trường hợp 1: $a$ và $b$ đồng phẳng.** Khi đó xảy ra một trong ba khả năng: $a$ cắt $b$ tại một điểm; $a$ song song với $b$; $a$ trùng với $b$.

**Trường hợp 2: $a$ và $b$ không đồng phẳng.** Ta nói $a$ và $b$ **chéo nhau**.

Hai đường thẳng song song là hai đường thẳng cùng nằm trong một mặt phẳng và không có điểm chung.`,
      formula: String.raw`a\parallel b\iff a,b\subset(P),\ a\cap b=\varnothing`,
      note: String.raw`Hai đường thẳng chéo nhau thì không có điểm chung nhưng không song song.`,
    },
    {
      subtitle: 'Ba mặt phẳng cắt nhau theo ba giao tuyến',
      content: String.raw`**Định lí 10.1.** Nếu ba mặt phẳng đôi một cắt nhau theo ba giao tuyến phân biệt thì ba giao tuyến đó hoặc đồng quy, hoặc đôi một song song.

Cụ thể, nếu
$$\left(\alpha\right)\cap\left(\beta\right)=a,\quad \left(\alpha\right)\cap\left(\gamma\right)=b,\quad \left(\beta\right)\cap\left(\gamma\right)=c$$
thì $a$, $b$, $c$ đồng quy hoặc $a\parallel b\parallel c$.`,
      formula: String.raw`a\cap b\cap c\ne\varnothing\quad\text{or}\quad a\parallel b\parallel c`,
      note: String.raw`Đây là công cụ chính để tìm giao tuyến của hai mặt phẳng.`,
    },
    {
      subtitle: 'Hệ quả về giao tuyến song song',
      content: String.raw`**Hệ quả 10.2.** Nếu hai mặt phẳng phân biệt lần lượt chứa hai đường thẳng song song thì giao tuyến của chúng (nếu có) song song với hai đường thẳng đó hoặc trùng với một trong hai đường thẳng đó.

Cụ thể, nếu $a\subset(\alpha)$, $b\subset(\beta)$, $a\parallel b$ và $(\alpha)\cap(\beta)=\Delta$ thì $\Delta\parallel a\parallel b$, hoặc $\Delta\equiv a$, hoặc $\Delta\equiv b$.

**Định lí 10.3.** Hai đường thẳng phân biệt cùng song song với một đường thẳng thứ ba thì song song với nhau.`,
      formula: String.raw`a\parallel c,\ b\parallel c,\ a\ne b\Rightarrow a\parallel b`,
      note: String.raw`Tính chất bắc cầu của quan hệ song song.`,
    },
    {
      subtitle: 'Vị trí tương đối của đường thẳng và mặt phẳng',
      content: String.raw`Cho đường thẳng $d$ và mặt phẳng $(P)$. Có ba trường hợp:

- $d\parallel(P)$: $d$ và $(P)$ không có điểm chung.
- $d\cap(P)=\{M\}$: $d$ cắt $(P)$ tại $M$.
- $d\subset(P)$: $d$ nằm trong $(P)$.

**Định lí 10.4.** Nếu đường thẳng $d$ không nằm trong mặt phẳng $(P)$ và $d$ song song với một đường thẳng $d'$ nằm trong $(P)$ thì $d\parallel(P)$.

**Định lí 10.5.** Nếu đường thẳng $a$ song song với mặt phẳng $(\alpha)$, mặt phẳng $(\beta)$ chứa $a$ và cắt $(\alpha)$ theo giao tuyến $b$ thì $a\parallel b$.`,
      formula: String.raw`d\not\subset(P),\ d'\subset(P),\ d\parallel d'\Rightarrow d\parallel(P)`,
      note: String.raw`Phải có điều kiện $d\not\subset(P)$, nếu không kết luận sai.`,
    },
    {
      subtitle: 'Hai mặt phẳng song song',
      content: String.raw`**Định nghĩa 10.7.** Hai mặt phẳng $(\alpha)$ và $(\beta)$ gọi là song song nếu chúng không có điểm chung:
$$(\alpha)\parallel(\beta)\iff(\alpha)\cap(\beta)=\varnothing.$$

**Định lí 10.8.** Nếu mặt phẳng $(\alpha)$ chứa hai đường thẳng cắt nhau $a$, $b$ và $a$, $b$ cùng song song với mặt phẳng $(\beta)$ thì $(\alpha)\parallel(\beta)$.

**Định lí 10.9.** Nếu hai mặt phẳng song song bị mặt phẳng thứ ba cắt theo hai giao tuyến thì hai giao tuyến đó song song.

**Định lí 10.10 (Thalès trong không gian).** Ba mặt phẳng đôi một song song chắn trên hai cát tuyến bất kì những đoạn thẳng tương ứng tỉ lệ:
$$\dfrac{AB}{A'B'}=\dfrac{BC}{B'C'}=\dfrac{CA}{C'A'}.$$`,
      formula: String.raw`\dfrac{AB}{A'B'}=\dfrac{BC}{B'C'}=\dfrac{CA}{C'A'}`,
      note: String.raw`Định lí Thalès dùng để tính tỉ số đoạn thẳng trong không gian.`,
    },
  ],

  examples: [
    {
      id: 'vd1',
      title: 'Chứng minh hai đường thẳng song song',
      prompt: String.raw`Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành. Gọi $M$, $N$ lần lượt là trung điểm của $SA$, $SB$. Chứng minh $MN\parallel CD$.`,
      steps: [
        String.raw`Trong tam giác $SAB$, $M$, $N$ lần lượt là trung điểm của $SA$, $SB$ nên $MN$ là đường trung bình, suy ra $MN\parallel AB$.`,
        String.raw`Đáy $ABCD$ là hình bình hành nên $AB\parallel CD$.`,
        String.raw`Vậy $MN\parallel CD$ (tính chất bắc cầu).`,
      ],
      answer: String.raw`$MN\parallel AB\parallel CD$.`,
    },
    {
      id: 'vd2',
      title: 'Tìm giao tuyến của hai mặt phẳng',
      prompt: String.raw`Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành. Tìm giao tuyến của hai mặt phẳng $(SAB)$ và $(SCD)$.`,
      steps: [
        String.raw`Hai mặt phẳng $(SAB)$ và $(SCD)$ có điểm chung $S$.`,
        String.raw`Mặt khác $AB\subset(SAB)$, $CD\subset(SCD)$ và $AB\parallel CD$.`,
        String.raw`Theo hệ quả 10.2, giao tuyến là đường thẳng $d$ đi qua $S$ và song song với $AB$, $CD$.`,
      ],
      answer: String.raw`Giao tuyến là đường thẳng qua $S$ và song song với $AB$, $CD$.`,
    },
    {
      id: 'vd3',
      title: 'Chứng minh đường thẳng song song mặt phẳng',
      prompt: String.raw`Cho tứ diện $ABCD$. Gọi $M$, $N$ lần lượt là trung điểm của $AB$, $AC$. Chứng minh $MN\parallel(BCD)$.`,
      steps: [
        String.raw`Trong tam giác $ABC$, $MN$ là đường trung bình nên $MN\parallel BC$.`,
        String.raw`Ta có $BC\subset(BCD)$ và $MN\not\subset(BCD)$.`,
        String.raw`Theo định lí 10.4, $MN\parallel(BCD)$.`,
      ],
      answer: String.raw`$MN\parallel BC\subset(BCD)$ nên $MN\parallel(BCD)$.`,
    },
    {
      id: 'vd4',
      title: 'Dùng đường trung bình',
      prompt: String.raw`Cho hình chóp $S.ABCD$ có đáy là hình bình hành tâm $O$. Gọi $M$ là trung điểm của $SA$. Chứng minh $OM\parallel(SBC)$.`,
      steps: [
        String.raw`$O$ là tâm hình bình hành nên $O$ là trung điểm của $AC$.`,
        String.raw`Trong tam giác $SAC$, $O$ và $M$ lần lượt là trung điểm của $AC$ và $SA$ nên $OM\parallel SC$.`,
        String.raw`Mà $SC\subset(SBC)$ và $OM\not\subset(SBC)$, suy ra $OM\parallel(SBC)$.`,
      ],
      answer: String.raw`$OM\parallel SC\subset(SBC)$.`,
    },
    {
      id: 'vd5',
      title: 'Hai mặt phẳng song song',
      prompt: String.raw`Cho hình lăng trụ $ABC.A'B'C'$. Chứng minh $(ABC)\parallel(A'B'C')$.`,
      steps: [
        String.raw`Tứ giác $ABB'A'$ là hình bình hành nên $AB\parallel A'B'$.`,
        String.raw`Tương tự $AC\parallel A'C'$.`,
        String.raw`Mặt phẳng $(ABC)$ chứa hai đường thẳng cắt nhau $AB$, $AC$ và cả hai đều song song với $(A'B'C')$.`,
        String.raw`Theo định lí 10.8, $(ABC)\parallel(A'B'C')$.`,
      ],
      answer: String.raw`$(ABC)\parallel(A'B'C')$.`,
    },
  ],

  exercises: [
    {
      id: 'bt1',
      prompt: String.raw`Cho tứ diện $ABCD$. Gọi $M$, $N$ lần lượt là trung điểm của $AB$, $AD$. Chứng minh $MN\parallel BD$.`,
      solution: String.raw`$MN$ là đường trung bình của tam giác $ABD$ nên $MN\parallel BD$.`,
    },
    {
      id: 'bt2',
      prompt: String.raw`Cho hình chóp $S.ABCD$ có đáy là hình bình hành. Chứng minh $AB\parallel(SCD)$.`,
      solution: String.raw`$AB\parallel CD\subset(SCD)$ và $AB\not\subset(SCD)$ nên $AB\parallel(SCD)$.`,
    },
    {
      id: 'bt3',
      prompt: String.raw`Cho hình chóp $S.ABCD$ có đáy là hình bình hành. Tìm giao tuyến của $(SAD)$ và $(SBC)$.`,
      solution: String.raw`Hai mặt phẳng có điểm chung $S$; $AD\parallel BC$ nên giao tuyến là đường thẳng qua $S$ và song song với $AD$, $BC$.`,
    },
    {
      id: 'bt4',
      prompt: String.raw`Cho tứ diện $ABCD$. Gọi $G_1$, $G_2$ lần lượt là trọng tâm của tam giác $ABC$, $ABD$. Chứng minh $G_1G_2\parallel CD$.`,
      hint: String.raw`Gọi $M$ là trung điểm của $AB$, dùng tính chất trọng tâm.`,
      solution: String.raw`Trên $CM$ và $DM$ lấy $G_1$, $G_2$ với $MG_1/MC=MG_2/MD=1/3$ nên $G_1G_2\parallel CD$.`,
    },
    {
      id: 'bt5',
      prompt: String.raw`Cho hình lăng trụ $ABC.A'B'C'$. Chứng minh $AB\parallel(A'B'C')$.`,
      solution: String.raw`$AB\parallel A'B'\subset(A'B'C')$ và $AB\not\subset(A'B'C')$ nên $AB\parallel(A'B'C')$.`,
    },
    {
      id: 'bt6',
      prompt: String.raw`Cho hình chóp $S.ABCD$ có đáy là hình bình hành. Gọi $M$ là trung điểm của $SA$. Mặt phẳng $(\alpha)$ qua $M$ và song song với $AB$, $AD$ cắt $SB$, $SC$, $SD$ lần lượt tại $N$, $P$, $Q$. Chứng minh $MNPQ$ là hình bình hành.`,
      hint: String.raw`Dùng hệ quả giao tuyến song song cho từng cặp mặt phẳng.`,
      solution: String.raw`$(\alpha)\parallel AB$ và $(\alpha)$ cắt $(SAB)$ theo $MN$ nên $MN\parallel AB$. Tương tự $PQ\parallel CD$, $MQ\parallel AD$, $NP\parallel BC$. Do $AB\parallel CD$, $AD\parallel BC$ nên $MNPQ$ có các cặp cạnh đối song song, tức là hình bình hành.`,
    },
  ],

  quiz: [
    {
      id: 'q1',
      question: 'Hai đường thẳng chéo nhau là hai đường thẳng',
      options: [
        'Không có điểm chung',
        'Cùng nằm trong một mặt phẳng và không có điểm chung',
        'Cắt nhau tại một điểm',
        'Không đồng phẳng',
      ],
      answer: 3,
      explanation: 'Chéo nhau là không đồng phẳng; không có điểm chung là điều kiện cần nhưng chưa đủ.',
    },
    {
      id: 'q2',
      question: String.raw`Nếu ba mặt phẳng đôi một cắt nhau theo ba giao tuyến phân biệt thì ba giao tuyến đó`,
      options: [
        'Đôi một song song hoặc đồng quy',
        'Luôn đồng quy',
        'Luôn đôi một song song',
        'Đôi một vuông góc',
      ],
      answer: 0,
      explanation: 'Định lí 10.1 cho hai khả năng: đồng quy hoặc đôi một song song.',
    },
    {
      id: 'q3',
      question: String.raw`Cho $d\not\subset(P)$ và $d\parallel d'$ với $d'\subset(P)$. Khi đó`,
      options: [
        String.raw`$d\subset(P)$`,
        String.raw`$d$ cắt $(P)$`,
        String.raw`$d\parallel(P)$`,
        String.raw`$d\perp(P)$`,
      ],
      answer: 2,
      explanation: 'Định lí 10.4 về điều kiện đường thẳng song song mặt phẳng.',
    },
    {
      id: 'q4',
      question: String.raw`Nếu $a\parallel(\alpha)$, $a\subset(\beta)$ và $(\alpha)\cap(\beta)=b$ thì`,
      options: [
        String.raw`$a\perp b$`,
        String.raw`$a$ cắt $b$`,
        String.raw`$a\parallel b$`,
        String.raw`$a\equiv b$`,
      ],
      answer: 2,
      explanation: 'Định lí 10.5: giao tuyến song song với đường thẳng đã cho.',
    },
    {
      id: 'q5',
      question: 'Hai mặt phẳng song song khi và chỉ khi',
      options: [
        'Chúng không có điểm chung',
        'Chúng có một điểm chung',
        'Chúng cùng vuông góc với một mặt phẳng',
        'Chúng cùng song song với một đường thẳng',
      ],
      answer: 0,
      explanation: 'Định nghĩa hai mặt phẳng song song.',
    },
    {
      id: 'q6',
      question: String.raw`Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành. Giao tuyến của $(SAB)$ và $(SCD)$ là đường thẳng`,
      options: [
        String.raw`Đi qua $S$ và song song với $AD$`,
        String.raw`Đi qua $S$ và song song với $AB$`,
        String.raw`Đi qua $S$ và vuông góc với $AB$`,
        String.raw`Trùng với $SC$`,
      ],
      answer: 1,
      explanation: String.raw`$AB\parallel CD$ nên giao tuyến qua $S$ song song với $AB$, $CD$.`,
    },
    {
      id: 'q7',
      question: String.raw`Cho tứ diện $ABCD$, $M$ và $N$ lần lượt là trung điểm của $AB$, $AC$. Khi đó $MN$ song song với`,
      options: [
        String.raw`$AD$`,
        String.raw`$BD$`,
        String.raw`$CD$`,
        String.raw`$BC$`,
      ],
      answer: 3,
      explanation: String.raw`$MN$ là đường trung bình của tam giác $ABC$ nên $MN\parallel BC$.`,
    },
    {
      id: 'q8',
      question: String.raw`Ba mặt phẳng đôi một song song chắn trên hai cát tuyến các đoạn thẳng`,
      options: [
        'Bằng nhau',
        'Vuông góc với nhau',
        'Tỉ lệ thuận',
        'Tỉ lệ nghịch',
      ],
      answer: 2,
      explanation: 'Định lí Thalès trong không gian: các đoạn tương ứng tỉ lệ.',
    },
  ],

  trueFalse: [
    {
      id: 'tf1',
      stem: 'Các khẳng định về vị trí tương đối:',
      items: [
        { text: 'Hai đường thẳng song song thì đồng phẳng.', answer: true },
        { text: 'Hai đường thẳng không có điểm chung thì song song.', answer: false },
        { text: 'Hai đường thẳng chéo nhau thì đồng phẳng.', answer: false },
        { text: 'Hai đường thẳng phân biệt cùng song song với đường thẳng thứ ba thì song song với nhau.', answer: true },
      ],
      explanation: 'Hai đường thẳng không có điểm chung có thể chéo nhau, chưa chắc song song; hai đường chéo nhau thì không đồng phẳng.',
    },
    {
      id: 'tf2',
      stem: 'Các khẳng định về đường thẳng và mặt phẳng:',
      items: [
        { text: String.raw`Nếu $d\parallel d'$ và $d'\subset(P)$ thì $d\parallel(P)$ hoặc $d\subset(P)$.`, answer: true },
        { text: String.raw`Nếu $d\parallel(P)$ thì $d$ song song với mọi đường thẳng trong $(P)$.`, answer: false },
        { text: String.raw`Nếu $a\parallel(\alpha)$ và $(\beta)$ chứa $a$, cắt $(\alpha)$ theo $b$ thì $a\parallel b$.`, answer: true },
        { text: String.raw`Nếu $d\cap(P)=\{M\}$ thì $d\subset(P)$.`, answer: false },
      ],
      explanation: String.raw`$d\parallel(P)$ chỉ song song với một số đường thẳng trong $(P)$, không phải mọi đường.`,
    },
    {
      id: 'tf3',
      stem: 'Các khẳng định về hai mặt phẳng song song:',
      items: [
        { text: String.raw`$(\alpha)\parallel(\beta)\iff(\alpha)\cap(\beta)=\varnothing$.`, answer: true },
        { text: String.raw`Nếu $(\alpha)$ chứa hai đường thẳng cắt nhau cùng song song với $(\beta)$ thì $(\alpha)\parallel(\beta)$.`, answer: true },
        { text: 'Hai mặt phẳng phân biệt cùng song song với mặt phẳng thứ ba thì song song với nhau.', answer: true },
        { text: 'Hai mặt phẳng cùng song song với một đường thẳng thì song song với nhau.', answer: false },
      ],
      explanation: 'Hai mặt phẳng cùng song song với một đường thẳng vẫn có thể cắt nhau.',
    },
  ],

  shortAnswer: [
    {
      id: 'sa1',
      question: String.raw`Cho tứ diện $ABCD$, $M$, $N$ lần lượt là trung điểm của $AB$, $AC$. Số đường thẳng song song với $MN$ trong các cạnh của tứ diện là bao nhiêu?`,
      answer: '1',
      unit: '',
      explanation: String.raw`Chỉ có $BC\parallel MN$.`,
    },
    {
      id: 'sa2',
      question: String.raw`Cho hình chóp $S.ABCD$ có đáy là hình bình hành. Giao tuyến của $(SAB)$ và $(SCD)$ đi qua $S$ và song song với cạnh nào của đáy (ghi tên cạnh)?`,
      answer: 'AB',
      unit: '',
      explanation: String.raw`Giao tuyến song song với $AB$ (và $CD$).`,
    },
    {
      id: 'sa3',
      question: String.raw`Cho hình lăng trụ $ABC.A'B'C'$. Số mặt phẳng song song với $(ABC)$ trong các mặt phẳng $(A'B'C')$, $(ABB'A')$, $(BCC'B')$ là bao nhiêu?`,
      answer: '1',
      unit: '',
      explanation: String.raw`Chỉ có $(A'B'C')\parallel(ABC)$.`,
    },
    {
      id: 'sa4',
      question: String.raw`Cho hình chóp $S.ABCD$ có đáy là hình bình hành, $M$ là trung điểm $SA$. Đường thẳng $OM$ song song với cạnh nào (ghi tên cạnh)?`,
      answer: 'SC',
      unit: '',
      explanation: String.raw`$OM$ là đường trung bình của tam giác $SAC$ nên $OM\parallel SC$.`,
    },
  ],
}

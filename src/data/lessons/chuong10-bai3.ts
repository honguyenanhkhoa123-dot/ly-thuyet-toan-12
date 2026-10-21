import type { Lesson } from '../types'

export const chuong10Bai3: Lesson = {
  id: 'bai-3',
  chapterId: 'chuong-10',
  title: 'Góc và khoảng cách trong không gian',
  summary: 'Góc giữa đường thẳng, mặt phẳng, góc nhị diện và các loại khoảng cách trong không gian.',
  minutes: 28,

  theory: [
    {
      subtitle: 'Góc giữa hai đường thẳng',
      content: String.raw`**Định nghĩa 10.17.** Góc giữa hai đường thẳng $m$ và $n$, kí hiệu $(m,n)$, là góc giữa hai đường thẳng $a$ và $b$ đi qua một điểm và tương ứng song song với $m$ và $n$.

Với hai đường thẳng $a$, $b$ bất kì:
$$0^\circ\le(a,b)\le90^\circ,$$
và $(a,b)=0^\circ$ khi và chỉ khi $a\equiv b$ hoặc $a\parallel b$.

**Cách 1 (dùng định nghĩa).** Lấy điểm $A$ bất kì, qua $A$ dựng $\Delta\parallel a$ và $\Delta'\parallel b$. Khi đó $(a,b)=(\Delta,\Delta')$, rồi tính góc bằng hệ thức lượng trong tam giác.

**Cách 2 (dùng tích vô hướng).** Tìm vectơ chỉ phương $\vec u$, $\vec v$ của hai đường thẳng, tính
$$\cos\alpha=\dfrac{\left|\vec u\cdot\vec v\right|}{\left|\vec u\right|\left|\vec v\right|}.$$
Góc giữa hai đường thẳng bằng $\alpha$ nếu $0^\circ\le\alpha\le90^\circ$, bằng $180^\circ-\alpha$ nếu $\alpha>90^\circ$.`,
      formula: String.raw`\cos\left(a,b\right)=\dfrac{\left|\vec u\cdot\vec v\right|}{\left|\vec u\right|\left|\vec v\right|}`,
      note: String.raw`Góc giữa hai đường thẳng luôn nằm trong $\left[0^\circ;90^\circ\right]$.`,
    },
    {
      subtitle: 'Góc giữa đường thẳng và mặt phẳng',
      content: String.raw`**Định nghĩa 10.18.**

- Nếu đường thẳng $a$ vuông góc với mặt phẳng $(P)$ thì $(a,(P))=90^\circ$.
- Nếu $a$ không vuông góc với $(P)$ thì $(a,(P))=(a,a')$, trong đó $a'$ là hình chiếu của $a$ trên $(P)$.

Với mọi $a$ và $(P)$: $0^\circ\le(a,(P))\le90^\circ$ và $(a,(P))=0^\circ$ khi $a\subset(P)$.

**Cách xác định.** Tìm giao điểm $M=a\cap(P)$. Lấy $S\in a$, dựng $SH\perp(P)$ tại $H$. Khi đó
$$(a,(P))=(a,HM)=\widehat{SMH}.$$`,
      formula: String.raw`\left(a,(P)\right)=\widehat{SMH}`,
      note: String.raw`Góc giữa đường thẳng và mặt phẳng là góc giữa đường thẳng và hình chiếu của nó.`,
    },
    {
      subtitle: 'Góc giữa hai mặt phẳng',
      content: String.raw`**Định nghĩa 10.19.** Cho hai mặt phẳng $(P)$ và $(Q)$. Kẻ $a\perp(P)$ và $b\perp(Q)$. Khi đó $((P),(Q))=(a,b)$.

Ta luôn có $0^\circ\le((P),(Q))\le90^\circ$ và $((P),(Q))=0^\circ$ khi $(P)\equiv(Q)$ hoặc $(P)\parallel(Q)$.

**Cách 1.** Từ điểm $O$ kẻ $OE\perp(P)$, $OF\perp(Q)$; khi đó $((P),(Q))=(OE,OF)$.

**Cách 2 (hai mặt phẳng cắt nhau).** Tìm giao tuyến $\Delta$. Từ $O\in\Delta$, trong $(P)$ kẻ $d\perp\Delta$, trong $(Q)$ kẻ $d'\perp\Delta$. Khi đó $((P),(Q))=(d,d')=\alpha$.

**Cách 3.** Tìm mặt phẳng $(R)$ vuông góc với cả $(P)$ và $(Q)$; khi đó góc giữa hai mặt phẳng bằng góc giữa hai giao tuyến $(R)\cap(P)$ và $(R)\cap(Q)$.

**Cách 4 (diện tích hình chiếu).** Nếu $S$ là diện tích đa giác $\mathcal H$ trong $(P)$ và $S'$ là diện tích hình chiếu $\mathcal H'$ trên $(Q)$ thì
$$S'=S\cdot\cos\varphi,\quad\text{hay}\quad\cos\varphi=\dfrac{S'}{S}.$$`,
      formula: String.raw`S'=S\cdot\cos\varphi`,
      note: String.raw`Công thức hình chiếu rất hiệu quả khi đã biết hai diện tích.`,
    },
    {
      subtitle: 'Góc nhị diện',
      content: String.raw`**Định nghĩa 10.20.** Hình gồm hai nửa mặt phẳng $(P)$, $(Q)$ có chung bờ $a$ gọi là một **góc nhị diện**, kí hiệu $[P,a,Q]$. Đường thẳng $a$ là cạnh, hai nửa mặt phẳng là hai mặt của góc nhị diện.

Ta có $0^\circ\le[P,a,Q]\le180^\circ$. Với $M\in(P)$, $N\in(Q)$, $M,N\notin a$ thì $[P,a,Q]=[M,a,N]$.

**Cách xác định.** Từ $O\in a$ vẽ tia $OA\perp a$, $OA\subset(P)$ và $OB\perp a$, $OB\subset(Q)$. Khi đó
$$[P,a,Q]=\widehat{AOB}.$$`,
      formula: String.raw`[P,a,Q]=\widehat{AOB}`,
      note: String.raw`Góc nhị diện có thể tù, khác với góc giữa hai mặt phẳng luôn không vượt quá $90^\circ$.`,
    },
    {
      subtitle: 'Khoảng cách từ điểm đến mặt phẳng',
      content: String.raw`**Định nghĩa 10.21.** Cho điểm $A$ và mặt phẳng $(\alpha)$. Khi đó $\mathrm d(A,(\alpha))=AH$, với $H$ là hình chiếu của $A$ trên $(\alpha)$.

**Cách xác định.**

- Bước 1. Tìm mặt phẳng $(\beta)$ đi qua $A$ và vuông góc với $(\alpha)$.
- Bước 2. Tìm giao tuyến $\Delta=(\alpha)\cap(\beta)$.
- Bước 3. Trong $(\beta)$, kẻ $AH\perp\Delta$. Khi đó $AH\perp(\alpha)$ và $\mathrm d(A,(\alpha))=AH$.
- Bước 4. Tính độ dài $AH$.

**Tính chất.**

- Nếu đã có đường thẳng $d\perp(\alpha)$ thì kẻ $Ax\parallel d$ cắt $(\alpha)$ tại $H$.
- Nếu $AB\parallel(\alpha)$ thì $\mathrm d(A,(\alpha))=\mathrm d(B,(\alpha))$.
- Nếu $AB$ cắt $(\alpha)$ tại $I$ thì $\dfrac{\mathrm d(A,(\alpha))}{\mathrm d(B,(\alpha))}=\dfrac{AI}{BI}$.`,
      formula: String.raw`\mathrm d(A,(\alpha))=AH`,
      note: String.raw`Tỉ số khoảng cách giúp quy bài toán về một điểm thuận lợi.`,
    },
    {
      subtitle: 'Các khoảng cách khác',
      content: String.raw`**Khoảng cách giữa đường thẳng và mặt phẳng song song.** Nếu $d\parallel(\alpha)$ thì
$$\mathrm d(d,(\alpha))=\mathrm d(A,(\alpha)),\quad\forall A\in d.$$

**Khoảng cách giữa hai mặt phẳng song song.** Nếu $(\alpha)\parallel(\beta)$ thì
$$\mathrm d((\alpha),(\beta))=\mathrm d(A,(\beta)),\quad\forall A\in(\alpha).$$

**Khoảng cách giữa hai đường thẳng chéo nhau.** Đường thẳng $\Delta$ cắt và vuông góc với cả $a$ và $b$ gọi là đường vuông góc chung. Nếu $\Delta$ cắt $a$ tại $A$, cắt $b$ tại $B$ thì $AB$ là đoạn vuông góc chung và $\mathrm d(a,b)=AB$.

**Ba cách tính khoảng cách giữa hai đường chéo nhau.**

- Cách 1: Dựng đoạn vuông góc chung $AB$, khi đó $\mathrm d(a,b)=AB$.
- Cách 2: Tìm mặt phẳng $(\alpha)$ chứa $a$ và song song với $b$, khi đó $\mathrm d(a,b)=\mathrm d(b,(\alpha))$.
- Cách 3: Dựng hai mặt phẳng song song lần lượt chứa $a$ và $b$, khi đó $\mathrm d(a,b)=\mathrm d((\alpha),(\beta))$.
- Cách 4: Dùng thể tích tứ diện
$$V_{ABCD}=\dfrac16\cdot AB\cdot CD\cdot\mathrm d(AB,CD)\cdot\sin(AB,CD).$$`,
      formula: String.raw`\mathrm d(a,b)=\mathrm d(b,(\alpha)),\ b\parallel(\alpha),\ a\subset(\alpha)`,
      note: String.raw`Cách 2 thường dùng nhất trong bài thi.`,
    },
    {
      subtitle: 'Góc và khoảng cách trong hình chóp thường gặp',
      content: String.raw`**Hình chóp $S.ABC$ có $SA\perp(ABC)$.**

- $(SB,(ABC))=\widehat{SBA}$; $(SC,(ABC))=\widehat{SCA}$.
- Nếu tam giác $ABC$ vuông tại $B$ thì $((SBC),(ABC))=\widehat{SBA}$.
- Nếu tam giác $ABC$ vuông tại $A$, kẻ $AH\perp BC$ thì $((SBC),(ABC))=\widehat{SHA}$.
- Nếu tam giác $ABC$ đều, $H$ là trung điểm $BC$ thì $((SBC),(ABC))=\widehat{SHA}$.

**Hình chóp $S.ABCD$ có $SA\perp(ABCD)$, đáy là hình chữ nhật.**

- $(SB,(ABCD))=\widehat{SBA}$; $(SC,(ABCD))=\widehat{SCA}$; $(SD,(ABCD))=\widehat{SDA}$.
- $((SBC),(ABCD))=\widehat{SBA}$; $((SCD),(ABCD))=\widehat{SDA}$.
- Nếu đáy là hình vuông tâm $O$ thì $((SBD),(ABCD))=\widehat{SOA}$.

**Khoảng cách trong hình chóp $S.ABC$ có $SA\perp(ABC)$.**

- $\mathrm d(B,(SAC))=BH$ với $BH\perp AC$.
- $\mathrm d(C,(SAB))=CH$ với $CH\perp AB$.
- $\mathrm d(A,(SBC))=AH$ với $AH\perp SM$, $M$ là hình chiếu của $A$ trên $BC$.

**Khoảng cách trong hình chóp tứ giác đều $S.ABCD$ tâm $O$.**

- $\mathrm d(O,(SCD))=OH$ với $H$ là hình chiếu của $O$ trên $CD$.
- $\mathrm d(A,(SCD))=2\,\mathrm d(O,(SCD))$.
- $\mathrm d(O,(SAB))=\mathrm d(O,(SBC))=\mathrm d(O,(SCD))=\mathrm d(O,(SAD))$.`,
      formula: String.raw`\mathrm d(A,(SCD))=2\,\mathrm d(O,(SCD))`,
      note: String.raw`Hình chóp đều có tính đối xứng nên nhiều khoảng cách bằng nhau.`,
    },
  ],

  examples: [
    {
      id: 'vd1',
      title: 'Góc giữa hai đường thẳng',
      prompt: String.raw`Cho hình lập phương $ABCD.A'B'C'D'$. Tính góc giữa $AB'$ và $BC'$.`,
      steps: [
        String.raw`Ta có $AD'\parallel BC'$ nên $(AB',BC')=(AB',AD')$.`,
        String.raw`Tam giác $AB'D'$ có $AB'=B'D'=AD'=a\sqrt2$ nên là tam giác đều.`,
        String.raw`Do đó $(AB',BC')=\widehat{B'AD'}=60^\circ$.`,
      ],
      answer: String.raw`$60^\circ$.`,
    },
    {
      id: 'vd2',
      title: 'Góc giữa đường thẳng và mặt phẳng',
      prompt: String.raw`Cho hình chóp $S.ABCD$ có $SA\perp(ABCD)$, đáy là hình vuông cạnh $a$, $SA=a$. Tính góc giữa $SC$ và $(ABCD)$.`,
      steps: [
        String.raw`Hình chiếu của $SC$ trên $(ABCD)$ là $AC$, nên góc cần tìm là $\widehat{SCA}$.`,
        String.raw`$AC=a\sqrt2$, $SA=a$ nên $\tan\widehat{SCA}=\dfrac{SA}{AC}=\dfrac{1}{\sqrt2}$.`,
        String.raw`Suy ra $\widehat{SCA}\approx35^\circ16'$.`,
      ],
      answer: String.raw`$\arctan\dfrac{1}{\sqrt2}\approx35^\circ16'$.`,
    },
    {
      id: 'vd3',
      title: 'Góc giữa hai mặt phẳng',
      prompt: String.raw`Cho hình chóp $S.ABC$ có $SA\perp(ABC)$, tam giác $ABC$ đều cạnh $a$, $SA=a$. Tính góc giữa $(SBC)$ và $(ABC)$.`,
      steps: [
        String.raw`Gọi $H$ là trung điểm $BC$. Vì tam giác $ABC$ đều nên $AH\perp BC$.`,
        String.raw`Ta có $SA\perp BC$ nên $BC\perp(SHA)$, suy ra $BC\perp SH$.`,
        String.raw`Vậy góc giữa hai mặt phẳng là $\widehat{SHA}$.`,
        String.raw`$AH=\dfrac{a\sqrt3}{2}$, $SA=a$ nên $\tan\widehat{SHA}=\dfrac{a}{a\sqrt3/2}=\dfrac{2}{\sqrt3}$.`,
        String.raw`Suy ra $\widehat{SHA}\approx49^\circ6'$.`,
      ],
      answer: String.raw`$\arctan\dfrac{2}{\sqrt3}\approx49^\circ6'$.`,
    },
    {
      id: 'vd4',
      title: 'Khoảng cách từ điểm đến mặt phẳng',
      prompt: String.raw`Cho hình chóp $S.ABCD$ có $SA\perp(ABCD)$, đáy là hình vuông cạnh $a$, $SA=a$. Tính khoảng cách từ $A$ đến $(SBC)$.`,
      steps: [
        String.raw`Ta có $BC\perp AB$ và $BC\perp SA$ nên $BC\perp(SAB)$.`,
        String.raw`Kẻ $AH\perp SB$ tại $H$. Vì $BC\perp(SAB)$ nên $BC\perp AH$.`,
        String.raw`Do đó $AH\perp(SBC)$, hay $\mathrm d(A,(SBC))=AH$.`,
        String.raw`Tam giác $SAB$ vuông cân tại $A$ cạnh $a$ nên $AH=\dfrac{a\sqrt2}{2}$.`,
      ],
      answer: String.raw`$\mathrm d(A,(SBC))=\dfrac{a\sqrt2}{2}$.`,
    },
    {
      id: 'vd5',
      title: 'Khoảng cách giữa hai đường chéo nhau',
      prompt: String.raw`Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $a$. Tính khoảng cách giữa $AB'$ và $CD'$.`,
      steps: [
        String.raw`Đường thẳng $AB'$ nằm trong mặt phẳng $(ABB'A')$, mà $(ABB'A')\parallel(CDD'C')$.`,
        String.raw`Do đó $AB'\parallel(CDD'C')$, và $CD'\subset(CDD'C')$.`,
        String.raw`Khoảng cách giữa $AB'$ và $CD'$ bằng khoảng cách giữa hai mặt phẳng song song $(ABB'A')$ và $(CDD'C')$, tức bằng $AD=a$.`,
      ],
      answer: String.raw`$\mathrm d(AB',CD')=a$.`,
    },
  ],

  exercises: [
    {
      id: 'bt1',
      prompt: String.raw`Cho hình lập phương $ABCD.A'B'C'D'$. Tính góc giữa $AC$ và $BD$.`,
      solution: String.raw`Hai đường chéo của hình vuông $ABCD$ vuông góc nên góc bằng $90^\circ$.`,
    },
    {
      id: 'bt2',
      prompt: String.raw`Cho hình chóp $S.ABCD$ có $SA\perp(ABCD)$, đáy là hình vuông cạnh $a$, $SA=a\sqrt3$. Tính góc giữa $SC$ và $(ABCD)$.`,
      solution: String.raw`$AC=a\sqrt2$, $\tan\widehat{SCA}=\dfrac{a\sqrt3}{a\sqrt2}=\sqrt{\dfrac32}$, nên $\widehat{SCA}\approx50^\circ46'$.`,
    },
    {
      id: 'bt3',
      prompt: String.raw`Cho hình chóp $S.ABC$ có $SA\perp(ABC)$, $SA=2a$, tam giác $ABC$ đều cạnh $a$. Tính khoảng cách từ $A$ đến $(SBC)$.`,
      hint: String.raw`Gọi $H$ là trung điểm $BC$, kẻ $AK\perp SH$.`,
      solution: String.raw`$AH=\dfrac{a\sqrt3}{2}$; $\dfrac{1}{AK^2}=\dfrac{1}{SA^2}+\dfrac{1}{AH^2}=\dfrac{1}{4a^2}+\dfrac{4}{3a^2}=\dfrac{19}{12a^2}$ nên $AK=\dfrac{2a\sqrt3}{\sqrt{19}}$.`,
    },
    {
      id: 'bt4',
      prompt: String.raw`Cho hình chóp tứ giác đều $S.ABCD$ có cạnh đáy $a$, cạnh bên $a\sqrt2$. Tính khoảng cách từ tâm $O$ của đáy đến $(SCD)$.`,
      hint: String.raw`Gọi $H$ là trung điểm $CD$, kẻ $OK\perp SH$.`,
      solution: String.raw`$OH=\dfrac a2$; $SO=\sqrt{SA^2-AO^2}=\sqrt{2a^2-\dfrac{a^2}{2}}=\dfrac{a\sqrt6}{2}$. Suy ra $OK=\dfrac{SO\cdot OH}{\sqrt{SO^2+OH^2}}=\dfrac{a\sqrt6/2\cdot a/2}{\sqrt{6a^2/4+a^2/4}}=\dfrac{a\sqrt6}{2\sqrt7}=\dfrac{a\sqrt{42}}{14}$.`,
    },
    {
      id: 'bt5',
      prompt: String.raw`Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $a$. Tính khoảng cách giữa $AC$ và $B'D'$.`,
      solution: String.raw`$AC\subset(ABCD)$, $B'D'\subset(A'B'C'D')$ và hai mặt phẳng này song song, nên khoảng cách bằng $AA'=a$.`,
    },
    {
      id: 'bt6',
      prompt: String.raw`Cho hình chóp $S.ABCD$ có $SA\perp(ABCD)$, đáy là hình chữ nhật $AB=a$, $AD=2a$, $SA=a$. Tính khoảng cách từ $B$ đến $(SCD)$.`,
      hint: String.raw`Dùng $AB\parallel(SDC)$ nên khoảng cách bằng khoảng cách từ $A$ đến $(SCD)$.`,
      solution: String.raw`Kẻ $AH\perp SD$. Vì $CD\perp(SAD)$ nên $CD\perp AH$, suy ra $AH\perp(SCD)$. Ta có $\dfrac{1}{AH^2}=\dfrac{1}{SA^2}+\dfrac{1}{AD^2}=\dfrac{1}{a^2}+\dfrac{1}{4a^2}=\dfrac{5}{4a^2}$ nên $AH=\dfrac{2a}{\sqrt5}$. Vậy $\mathrm d(B,(SCD))=\dfrac{2a\sqrt5}{5}$.`,
    },
  ],

  quiz: [
    {
      id: 'q1',
      question: String.raw`Góc giữa hai đường thẳng trong không gian luôn thỏa mãn`,
      options: [
        String.raw`$0^\circ\le(a,b)\le180^\circ$`,
        String.raw`$0^\circ<(a,b)<90^\circ$`,
        String.raw`$90^\circ\le(a,b)\le180^\circ$`,
        String.raw`$0^\circ\le(a,b)\le90^\circ$`,
      ],
      answer: 3,
      explanation: 'Góc giữa hai đường thẳng là góc nhọn hoặc vuông.',
    },
    {
      id: 'q2',
      question: String.raw`Góc giữa đường thẳng $a$ và mặt phẳng $(P)$ bằng $0^\circ$ khi`,
      options: [
        String.raw`$a\perp(P)$`,
        String.raw`$a$ cắt $(P)$`,
        String.raw`$a\subset(P)$ hoặc $a\parallel(P)$`,
        String.raw`$a$ song song với một đường thẳng bất kì`,
      ],
      answer: 2,
      explanation: String.raw`$(a,(P))=0^\circ$ khi $a\subset(P)$ hoặc $a\parallel(P)$; trong đó $a\subset(P)$ là trường hợp được nêu.`,
    },
    {
      id: 'q3',
      question: String.raw`Góc giữa hai mặt phẳng $(P)$ và $(Q)$ được xác định bằng`,
      options: [
        'Góc giữa hai đường thẳng song song với hai mặt phẳng',
        'Góc giữa hai đường thẳng cắt nhau bất kì trong hai mặt phẳng',
        'Góc giữa hai đường thẳng nằm trong cùng một mặt phẳng',
        'Góc giữa hai đường thẳng lần lượt vuông góc với hai mặt phẳng',
      ],
      answer: 3,
      explanation: 'Định nghĩa 10.19 dùng hai đường thẳng vuông góc với hai mặt phẳng.',
    },
    {
      id: 'q4',
      question: String.raw`Nếu $S'$ là diện tích hình chiếu của đa giác diện tích $S$ và $\varphi$ là góc giữa hai mặt phẳng thì`,
      options: [
        String.raw`$S'=S\sin\varphi$`,
        String.raw`$S=S'\cos\varphi$`,
        String.raw`$S'=S\cos\varphi$`,
        String.raw`$S'=S\tan\varphi$`,
      ],
      answer: 2,
      explanation: 'Công thức diện tích hình chiếu.',
    },
    {
      id: 'q5',
      question: String.raw`Khoảng cách từ điểm $A$ đến mặt phẳng $(\alpha)$ là`,
      options: [
        String.raw`Độ dài đoạn thẳng bất kì nối $A$ với một điểm thuộc $(\alpha)$`,
        String.raw`Độ dài đoạn $AH$ với $H$ là hình chiếu của $A$ trên $(\alpha)$`,
        String.raw`Độ dài đoạn thẳng ngắn nhất nối $A$ với một đường thẳng trong $(\alpha)$`,
        String.raw`Khoảng cách từ $A$ đến một điểm bất kì trong $(\alpha)$`,
      ],
      answer: 1,
      explanation: 'Định nghĩa 10.21.',
    },
    {
      id: 'q6',
      question: String.raw`Cho $AB\parallel(\alpha)$ và $AB$ cắt $(\alpha)$ tại $I$. Khi đó tỉ số $\dfrac{\mathrm d(A,(\alpha))}{\mathrm d(B,(\alpha))}$ bằng`,
      options: [
        String.raw`$\dfrac{AI}{BI}$`,
        String.raw`$1$`,
        String.raw`$\dfrac{AB}{AI}$`,
        String.raw`$\dfrac{BI}{AI}$`,
      ],
      answer: 0,
      explanation: 'Tính chất tỉ số khoảng cách.',
    },
    {
      id: 'q7',
      question: String.raw`Cho hình chóp $S.ABC$ có $SA\perp(ABC)$. Góc giữa $SC$ và $(ABC)$ là`,
      options: [
        String.raw`$\widehat{SCA}$`,
        String.raw`$\widehat{SCB}$`,
        String.raw`$\widehat{SAC}$`,
        String.raw`$\widehat{CSA}$`,
      ],
      answer: 0,
      explanation: String.raw`Hình chiếu của $SC$ trên $(ABC)$ là $AC$.`,
    },
    {
      id: 'q8',
      question: String.raw`Cho hình chóp tứ giác đều $S.ABCD$ tâm $O$. Khi đó $\mathrm d(A,(SCD))$ bằng`,
      options: [
        String.raw`$\mathrm d(O,(SCD))$`,
        String.raw`$2\,\mathrm d(O,(SCD))$`,
        String.raw`$3\,\mathrm d(O,(SCD))$`,
        String.raw`$\dfrac12\mathrm d(O,(SCD))$`,
      ],
      answer: 1,
      explanation: String.raw`$O$ là trung điểm $AC$ nên $AC$ cắt $(SCD)$ tại $C$ và $\dfrac{AO}{CO}=1$, suy ra $\mathrm d(A,(SCD))=2\,\mathrm d(O,(SCD))$.`,
    },
  ],

  trueFalse: [
    {
      id: 'tf1',
      stem: 'Các khẳng định về góc:',
      items: [
        { text: String.raw`$0^\circ\le(a,b)\le90^\circ$ với mọi đường thẳng $a$, $b$.`, answer: true },
        { text: String.raw`Góc giữa hai mặt phẳng có thể bằng $120^\circ$.`, answer: false },
        { text: String.raw`Góc nhị diện không vượt quá $90^\circ$.`, answer: false },
        { text: String.raw`$(a,(P))=90^\circ$ khi $a\perp(P)$.`, answer: true },
      ],
      explanation: String.raw`Góc giữa hai mặt phẳng không vượt quá $90^\circ$, còn góc nhị diện có thể tù (tới $180^\circ$).`,
    },
    {
      id: 'tf2',
      stem: 'Các khẳng định về khoảng cách:',
      items: [
        { text: String.raw`Nếu $d\parallel(\alpha)$ thì $\mathrm d(d,(\alpha))=\mathrm d(A,(\alpha))$ với mọi $A\in d$.`, answer: true },
        { text: String.raw`Nếu $(\alpha)\parallel(\beta)$ thì $\mathrm d((\alpha),(\beta))=\mathrm d(A,(\beta))$ với mọi $A\in(\alpha)$.`, answer: true },
        { text: String.raw`Khoảng cách giữa hai đường thẳng chéo nhau bằng khoảng cách giữa hai mặt phẳng song song lần lượt chứa chúng.`, answer: true },
        { text: String.raw`Khoảng cách giữa hai đường thẳng chéo nhau luôn bằng $0$.`, answer: false },
      ],
      explanation: 'Hai đường chéo nhau không có điểm chung nên khoảng cách dương.',
    },
    {
      id: 'tf3',
      stem: 'Các khẳng định trong hình chóp:',
      items: [
        { text: String.raw`Hình chóp $S.ABC$ có $SA\perp(ABC)$ thì $(SB,(ABC))=\widehat{SBA}$.`, answer: true },
        { text: String.raw`Hình chóp $S.ABC$ có $SA\perp(ABC)$ thì $(SB,(ABC))=\widehat{SAB}$.`, answer: false },
        { text: String.raw`Hình chóp tứ giác đều có $O$ là tâm đáy thì $\mathrm d(A,(SCD))=2\,\mathrm d(O,(SCD))$.`, answer: true },
        { text: String.raw`Hình chóp $S.ABC$ có $SA\perp(ABC)$ thì $SA$ là đường cao.`, answer: true },
      ],
      explanation: String.raw`Hình chiếu của $SB$ là $AB$ nên góc là $\widehat{SBA}$, không phải $\widehat{SAB}$.`,
    },
  ],

  shortAnswer: [
    {
      id: 'sa1',
      question: String.raw`Cho hình lập phương $ABCD.A'B'C'D'$. Góc giữa $AB'$ và $BC'$ bằng bao nhiêu độ?`,
      answer: '60',
      unit: '°',
      explanation: String.raw`$AD'\parallel BC'$ và tam giác $AB'D'$ đều nên góc bằng $60^\circ$.`,
    },
    {
      id: 'sa2',
      question: String.raw`Cho hình chóp $S.ABCD$ có $SA\perp(ABCD)$, đáy là hình vuông cạnh $a$, $SA=a$. Tang của góc giữa $SC$ và $(ABCD)$ bằng $\dfrac{1}{\sqrt k}$. Tìm $k$.`,
      answer: '2',
      unit: '',
      explanation: String.raw`$\tan\widehat{SCA}=\dfrac{SA}{AC}=\dfrac{a}{a\sqrt2}=\dfrac{1}{\sqrt2}$ nên $k=2$.`,
    },
    {
      id: 'sa3',
      question: String.raw`Cho hình lập phương cạnh $a$. Khoảng cách giữa $AC$ và $B'D'$ bằng $a\sqrt{k}/k$? Hãy cho biết khoảng cách bằng bao nhiêu lần $a$ (nhập số).`,
      answer: '1',
      unit: '',
      explanation: String.raw`Hai đường nằm trong hai mặt phẳng song song cách nhau $a$ nên khoảng cách bằng $a$.`,
    },
    {
      id: 'sa4',
      question: String.raw`Cho hình chóp $S.ABCD$ có $SA\perp(ABCD)$, đáy là hình vuông cạnh $a$, $SA=a$. Khoảng cách từ $A$ đến $(SBC)$ bằng $\dfrac{a\sqrt{k}}{2}$. Tìm $k$.`,
      answer: '2',
      unit: '',
      explanation: String.raw`$AH=\dfrac{a\sqrt2}{2}$ nên $k=2$.`,
    },
  ],
}

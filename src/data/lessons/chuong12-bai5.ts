import type { Lesson } from '../types'

export const chuong12Bai5: Lesson = {
  id: 'bai-5',
  chapterId: 'chuong-12',
  title: 'Cực trị trong không gian',
  summary: 'Bài toán tìm giá trị lớn nhất, nhỏ nhất của khoảng cách, diện tích, thể tích và biểu thức tọa độ.',
  minutes: 26,

  theory: [
    {
      subtitle: 'Nguyên tắc chung',
      content: String.raw`Bài toán cực trị trong không gian thường được xử lí theo ba hướng:

1. **Tham số hóa điểm.** Cho điểm $M$ chạy trên đường thẳng hoặc mặt phẳng, biểu diễn $M$ theo tham số $t$ rồi đưa biểu thức cần tìm về hàm một biến.

2. **Dùng bất đẳng thức hình học.** Bất đẳng thức tam giác, quan hệ đường vuông góc – đường xiên, bất đẳng thức Bunhiacopxki, AM – GM.

3. **Dùng tính đối xứng.** Nhận xét vai trò các điểm để dự đoán vị trí đạt cực trị, sau đó chứng minh.

**Lưu ý.** Với hàm bậc hai $f(t)=At^2+Bt+C$ ($A>0$), giá trị nhỏ nhất đạt tại $t=-\dfrac{B}{2A}$ và bằng $C-\dfrac{B^2}{4A}$. Với $A<0$, giá trị lớn nhất đạt tại cùng điểm đó.`,
      formula: String.raw`f(t)=At^2+Bt+C\Rightarrow\min f=C-\dfrac{B^2}{4A}\ (A>0)`,
      note: 'Phải kiểm tra điều kiện của tham số $t$ trước khi kết luận.',
    },
    {
      subtitle: 'Cực trị của khoảng cách',
      content: String.raw`**Khoảng cách từ điểm đến mặt phẳng.** Với $M$ chạy trên đường thẳng $d$, $\mathrm d(M,(P))$ nhỏ nhất khi $M$ là giao điểm của $d$ với $(P)$ (nếu có) hoặc khi $d\parallel(P)$.

**Khoảng cách từ điểm đến đường thẳng.** Với $M$ chạy trên mặt phẳng $(P)$, $\mathrm d(M,d)$ nhỏ nhất khi $M$ là hình chiếu vuông góc của $d$ lên... chính xác hơn: khi $M$ là giao điểm của $(P)$ với mặt phẳng chứa $d$ và vuông góc với $(P)$.

**Tổng khoảng cách $MA+MB$.** Với $M$ chạy trên đường thẳng $d$:

- Nếu $A$, $B$ nằm cùng phía so với $d$: lấy $A'$ đối xứng $A$ qua $d$, khi đó $MA+MB=MA'+MB\ge A'B$, dấu bằng khi $M$, $A'$, $B$ thẳng hàng.
- Nếu $A$, $B$ khác phía: $MA+MB\ge AB$, dấu bằng khi $M=AB\cap d$.

**Hiệu khoảng cách $\left|MA-MB\right|$.** Ta có $\left|MA-MB\right|\le AB$, dấu bằng khi $M$, $A$, $B$ thẳng hàng và $M$ nằm ngoài đoạn $AB$.`,
      formula: String.raw`MA+MB\ge AB`,
      note: 'Dấu bằng xảy ra khi $M$ nằm trên đoạn $AB$ (trường hợp cùng đường).',
    },
    {
      subtitle: 'Cực trị trên mặt phẳng và mặt cầu',
      content: String.raw`**Điểm $M$ thuộc mặt cầu $S(I;R)$.**

- $MA$ nhỏ nhất bằng $\left|IA-R\right|$ khi $M$ là giao điểm của tia $IA$ với mặt cầu (phía gần $A$).
- $MA$ lớn nhất bằng $IA+R$ khi $M$ là giao điểm của tia đối tia $IA$ với mặt cầu.

**Điểm $M$ thuộc mặt phẳng $(P)$.** Khoảng cách $MA$ nhỏ nhất khi $M$ là hình chiếu vuông góc của $A$ trên $(P)$, giá trị bằng $\mathrm d(A,(P))$.

**Điểm $M$ thuộc đường tròn giao tuyến.** Tham số hóa đường tròn theo góc rồi đưa về biểu thức lượng giác.`,
      formula: String.raw`\min MA=\left|IA-R\right|,\qquad\max MA=IA+R`,
      note: 'Vị trí đạt cực trị nằm trên đường thẳng $IA$.',
    },
    {
      subtitle: 'Cực trị của biểu thức tọa độ',
      content: String.raw`Với $M$ chạy trên đường thẳng $d$ cho bởi phương trình tham số, tọa độ $M$ có dạng
$$M(x_0+at;\,y_0+bt;\,z_0+ct).$$

Khi đó các biểu thức như $MA^2$, $\overrightarrow{MA}\cdot\overrightarrow{MB}$, $MA+MB$ đều trở thành hàm của $t$.

**Ví dụ điển hình.** Cho $A$, $B$ cố định và $M$ chạy trên mặt phẳng $(P)$. Biểu thức
$$T=MA^2+MB^2$$
nhỏ nhất khi $M$ là hình chiếu của trung điểm $I$ của $AB$ trên $(P)$. Thật vậy,
$$MA^2+MB^2=2MI^2+\dfrac{AB^2}{2}.$$

Tương tự,
$$MA^2-MB^2=2\overrightarrow{MI}\cdot\overrightarrow{BA}.$$`,
      formula: String.raw`MA^2+MB^2=2MI^2+\dfrac{AB^2}{2}`,
      note: 'Công thức trung tuyến giúp loại bỏ biến $M$ trong nhiều bài toán.',
    },
    {
      subtitle: 'Cực trị diện tích và thể tích',
      content: String.raw`**Diện tích tam giác.** $S_{MAB}=\dfrac12\left|\left[\overrightarrow{MA},\overrightarrow{MB}\right]\right|$. Khi $M$ chạy trên đường thẳng song song với $AB$ thì $S$ không đổi; khi $M$ chạy trên đường thẳng cắt $AB$ thì $S$ nhỏ nhất tại giao điểm.

**Thể tích tứ diện.** $V_{MABC}=\dfrac16\left|\left[\overrightarrow{MA},\overrightarrow{MB}\right]\cdot\overrightarrow{MC}\right|$. Với $M$ chạy trên mặt phẳng song song với $(ABC)$, thể tích không đổi.

**Thể tích lớn nhất.** Thường quy về $V=\dfrac13 S\cdot h$: nếu diện tích đáy cố định thì thể tích lớn nhất khi chiều cao lớn nhất, tức khi $M$ xa mặt phẳng đáy nhất.

**Diện tích thiết diện.** Tham số hóa vị trí mặt phẳng cắt, tính diện tích theo tham số rồi tìm cực trị.`,
      formula: String.raw`V_{MABC}=\dfrac16\left|\left[\overrightarrow{MA},\overrightarrow{MB}\right]\cdot\overrightarrow{MC}\right|`,
      note: 'Thể tích không đổi khi đỉnh di chuyển trên mặt phẳng song song với đáy.',
    },
    {
      subtitle: 'Một số bất đẳng thức thường dùng',
      content: String.raw`**Bất đẳng thức tam giác:** $MA+MB\ge AB$, $\left|MA-MB\right|\le AB$.

**Bất đẳng thức Bunhiacopxki:** với hai bộ số thực,
$$\left(a_1b_1+a_2b_2+a_3b_3\right)^2\le\left(a_1^2+a_2^2+a_3^2\right)\left(b_1^2+b_2^2+b_3^2\right).$$

**Bất đẳng thức AM – GM:** với $x$, $y$, $z$ không âm,
$$x+y+z\ge3\sqrt[3]{xyz}.$$

**Bất đẳng thức Cauchy – Schwarz dạng phân thức:**
$$\dfrac{a^2}{x}+\dfrac{b^2}{y}+\dfrac{c^2}{z}\ge\dfrac{(a+b+c)^2}{x+y+z}.$$

**Đường xiên – đường vuông góc:** trong các đoạn nối một điểm với một mặt phẳng, đoạn vuông góc là ngắn nhất.`,
      formula: String.raw`\left(\sum a_ib_i\right)^2\le\left(\sum a_i^2\right)\left(\sum b_i^2\right)`,
      note: 'Dấu bằng của Bunhiacopxki xảy ra khi hai bộ số tỉ lệ.',
    },
  ],

  examples: [
    {
      id: 'vd1',
      title: 'Tổng khoảng cách nhỏ nhất',
      prompt: String.raw`Cho $A(1;0;0)$, $B(3;0;0)$ và $M$ chạy trên trục $Oz$. Tìm giá trị nhỏ nhất của $MA+MB$.`,
      steps: [
        String.raw`Gọi $M(0;0;t)$. Khi đó $MA=\sqrt{1+t^2}$, $MB=\sqrt{9+t^2}$.`,
        String.raw`Hàm $f(t)=\sqrt{1+t^2}+\sqrt{9+t^2}$ là hàm chẵn, đồng biến với $t\ge0$, nên nhỏ nhất tại $t=0$.`,
        String.raw`$f(0)=1+3=4$.`,
      ],
      answer: String.raw`$\min(MA+MB)=4$ tại $M\equiv O$.`,
    },
    {
      id: 'vd2',
      title: 'Khoảng cách nhỏ nhất từ điểm đến mặt phẳng',
      prompt: String.raw`Cho $A(0;0;0)$ và $(P):x+y+z-3=0$. Tìm điểm $M\in(P)$ sao cho $AM$ nhỏ nhất và tính giá trị đó.`,
      steps: [
        String.raw`$AM$ nhỏ nhất khi $M$ là hình chiếu vuông góc của $A$ trên $(P)$.`,
        String.raw`Đường thẳng qua $A$ vuông góc $(P)$ có phương trình $x=y=z=t$.`,
        String.raw`Thay vào $(P)$: $3t-3=0$ nên $t=1$, được $M(1;1;1)$.`,
        String.raw`$AM=\sqrt3$.`,
      ],
      answer: String.raw`$M(1;1;1)$, $\min AM=\sqrt3$.`,
    },
    {
      id: 'vd3',
      title: 'Cực trị biểu thức tọa độ',
      prompt: String.raw`Cho $A(1;0;0)$, $B(0;1;0)$ và $M$ chạy trên trục $Oz$. Tìm giá trị nhỏ nhất của $MA^2+MB^2$.`,
      steps: [
        String.raw`Gọi $M(0;0;t)$. Khi đó $MA^2=1+t^2$, $MB^2=1+t^2$.`,
        String.raw`$MA^2+MB^2=2+2t^2\ge2$.`,
        String.raw`Dấu bằng tại $t=0$, tức $M\equiv O$.`,
      ],
      answer: String.raw`$\min\left(MA^2+MB^2\right)=2$.`,
    },
    {
      id: 'vd4',
      title: 'Cực trị trên mặt cầu',
      prompt: String.raw`Cho mặt cầu $(S)$ tâm $I(1;1;1)$, bán kính $R=2$ và điểm $A(1;1;4)$. Tìm giá trị lớn nhất, nhỏ nhất của $MA$ với $M\in(S)$.`,
      steps: [
        String.raw`$IA=3$.`,
        String.raw`$\min MA=\left|IA-R\right|=1$; $\max MA=IA+R=5$.`,
        String.raw`Vị trí: $M$ nằm trên đường thẳng $IA$, phía gần $A$ cho giá trị nhỏ nhất và phía xa $A$ cho giá trị lớn nhất.`,
      ],
      answer: String.raw`$\min MA=1$, $\max MA=5$.`,
    },
    {
      id: 'vd5',
      title: 'Thể tích lớn nhất',
      prompt: String.raw`Cho tam giác $ABC$ có $A(0;0;0)$, $B(1;0;0)$, $C(0;1;0)$ và $M$ chạy trên mặt phẳng $(P):z=2$. Tìm thể tích nhỏ nhất của tứ diện $MABC$.`,
      steps: [
        String.raw`$S_{ABC}=\dfrac12$.`,
        String.raw`Chiều cao từ $M$ xuống $(ABC)$ là $h=2$ với mọi $M\in(P)$.`,
        String.raw`$V=\dfrac13\cdot\dfrac12\cdot2=\dfrac13$ không đổi.`,
      ],
      answer: String.raw`$V=\dfrac13$ với mọi $M\in(P)$.`,
    },
  ],

  exercises: [
    {
      id: 'bt1',
      prompt: String.raw`Cho $A(1;0;0)$, $B(0;1;0)$ và $M$ chạy trên trục $Oz$. Tìm giá trị nhỏ nhất của $MA+MB$.`,
      solution: String.raw`$MA=\sqrt{1+t^2}=MB$ nên tổng bằng $2\sqrt{1+t^2}\ge2$, dấu bằng tại $M\equiv O$.`,
    },
    {
      id: 'bt2',
      prompt: String.raw`Cho $A(1;2;3)$ và $(P):x+y+z-6=0$. Tìm $M\in(P)$ sao cho $AM$ nhỏ nhất.`,
      hint: String.raw`$M$ là hình chiếu vuông góc của $A$ trên $(P)$; kiểm tra $A\in(P)$ trước.`,
      solution: String.raw`$1+2+3-6=0$ nên $A\in(P)$, suy ra $M\equiv A$ và $AM=0$.`,
    },
    {
      id: 'bt3',
      prompt: String.raw`Cho mặt cầu $(S)$ tâm $I(0;0;0)$, bán kính $2$ và $A(0;0;5)$. Tìm $\min MA$, $\max MA$ với $M\in(S)$.`,
      solution: String.raw`$IA=5$ nên $\min MA=3$, $\max MA=7$.`,
    },
    {
      id: 'bt4',
      prompt: String.raw`Cho $A(1;1;1)$, $B(3;3;3)$ và $M$ chạy trên mặt phẳng $(Oxy)$. Tìm giá trị nhỏ nhất của $MA^2+MB^2$.`,
      hint: String.raw`Dùng $MA^2+MB^2=2MI^2+\dfrac{AB^2}{2}$ với $I$ là trung điểm $AB$.`,
      solution: String.raw`$I(2;2;2)$, $AB=2\sqrt3$. Hình chiếu của $I$ trên $(Oxy)$ là $H(2;2;0)$, $IH=2$. Khi đó $MI^2\ge4$ nên $MA^2+MB^2\ge8+6=14$.`,
    },
    {
      id: 'bt5',
      prompt: String.raw`Cho $A(0;0;1)$, $B(0;0;3)$ và $M$ chạy trên mặt phẳng $(Oxy)$. Tìm giá trị nhỏ nhất của $MA+MB$.`,
      hint: String.raw`$A$, $B$ cùng phía với $(Oxy)$.`,
      solution: String.raw`Lấy $A'(0;0;-1)$ đối xứng $A$ qua $(Oxy)$. Khi đó $MA+MB=MA'+MB\ge A'B=4$, dấu bằng khi $M$ là giao điểm của $A'B$ với $(Oxy)$, tức $M(0;0;0)$.`,
    },
    {
      id: 'bt6',
      prompt: String.raw`Cho $A(1;0;0)$, $B(0;1;0)$, $C(0;0;1)$ và $M$ chạy trên đường thẳng $d:x=y=z$. Tìm giá trị nhỏ nhất của $MA^2+MB^2+MC^2$.`,
      hint: String.raw`Gọi $G$ là trọng tâm tam giác $ABC$, dùng $MA^2+MB^2+MC^2=3MG^2+GA^2+GB^2+GC^2$.`,
      solution: String.raw`$G\left(\dfrac13;\dfrac13;\dfrac13\right)$ và $GA^2=GB^2=GC^2=\dfrac23$. Khoảng cách từ $G$ đến $d$ bằng $0$ vì $G\in d$. Vậy $\min=3\cdot0+2=2$.`,
    },
  ],

  quiz: [
    {
      id: 'q1',
      question: String.raw`Với $M$ chạy trên mặt phẳng $(P)$ và điểm $A$ cố định, $AM$ nhỏ nhất khi`,
      options: [
        '$M$ là hình chiếu vuông góc của $A$ trên $(P)$',
        '$M$ là giao điểm của $AP$ với $(P)$',
        '$M$ bất kì trên $(P)$',
        '$M$ là điểm xa $A$ nhất trên $(P)$',
      ],
      answer: 0,
      explanation: 'Đường vuông góc ngắn hơn mọi đường xiên.',
    },
    {
      id: 'q2',
      question: String.raw`Với $M$ chạy trên mặt cầu $S(I;R)$, giá trị lớn nhất của $MA$ bằng`,
      options: [
        String.raw`$IA-R$`,
        String.raw`$IA+R$`,
        String.raw`$R$`,
        String.raw`$2R$`,
      ],
      answer: 1,
      explanation: String.raw`$M$ nằm trên tia đối tia $IA$ cho khoảng cách lớn nhất.`,
    },
    {
      id: 'q3',
      question: String.raw`Cho $A$, $B$ cố định, $M$ chạy trên đường thẳng $d$ và $A$, $B$ cùng phía với $d$. Khi đó $MA+MB$ nhỏ nhất khi`,
      options: [
        'M là hình chiếu của A trên d',
        'M là giao điểm của d với AB',
        String.raw`$M$ là giao điểm của $d$ với đường nối $A'B$, trong đó $A'$ đối xứng $A$ qua $d$`,
        'M là trung điểm AB',
      ],
      answer: 2,
      explanation: 'Lấy điểm đối xứng để dùng bất đẳng thức tam giác.',
    },
    {
      id: 'q4',
      question: String.raw`Cho $M$ chạy trên mặt phẳng $(P)$, $A$, $B$ cố định. Biểu thức $MA^2+MB^2$ nhỏ nhất khi $M$ là`,
      options: [
        'Hình chiếu của $A$ trên $(P)$',
        'Hình chiếu của trung điểm $AB$ trên $(P)$',
        'Hình chiếu của $B$ trên $(P)$',
        'Giao điểm của $AB$ với $(P)$',
      ],
      answer: 1,
      explanation: String.raw`$MA^2+MB^2=2MI^2+\dfrac{AB^2}{2}$ với $I$ là trung điểm $AB$.`,
    },
    {
      id: 'q5',
      question: String.raw`Thể tích tứ diện $MABC$ không đổi khi $M$ di chuyển trên`,
      options: [
        'Đường thẳng vuông góc với $(ABC)$',
        'Mặt phẳng song song với $(ABC)$',
        'Đường thẳng cắt $(ABC)$',
        'Mặt cầu tâm $A$',
      ],
      answer: 1,
      explanation: 'Chiều cao không đổi khi đỉnh di chuyển trên mặt phẳng song song với đáy.',
    },
    {
      id: 'q6',
      question: String.raw`Giá trị nhỏ nhất của $f(t)=t^2-4t+7$ là`,
      options: [
        String.raw`$3$`,
        String.raw`$7$`,
        String.raw`$2$`,
        String.raw`$1$`,
      ],
      answer: 0,
      explanation: String.raw`$f(t)=(t-2)^2+3\ge3$.`,
    },
    {
      id: 'q7',
      question: String.raw`Cho $A(0;0;1)$, $B(0;0;3)$ và $M\in(Oxy)$. Giá trị nhỏ nhất của $MA+MB$ là`,
      options: [
        String.raw`$2$`,
        String.raw`$4$`,
        String.raw`$3$`,
        String.raw`$\sqrt{10}$`,
      ],
      answer: 1,
      explanation: String.raw`Lấy $A'(0;0;-1)$ đối xứng qua $(Oxy)$; $A'B=4$.`,
    },
    {
      id: 'q8',
      question: String.raw`Với $M$ chạy trên mặt cầu $S(I;R)$, giá trị nhỏ nhất của $MA$ bằng`,
      options: [
        String.raw`$IA+R$`,
        String.raw`$R-IA$`,
        String.raw`$\left|IA-R\right|$`,
        String.raw`$IA$`,
      ],
      answer: 2,
      explanation: String.raw`$M$ nằm trên tia $IA$, phía gần $A$.`,
    },
  ],

  trueFalse: [
    {
      id: 'tf1',
      stem: 'Các khẳng định về cực trị khoảng cách:',
      items: [
        { text: 'Khoảng cách từ một điểm đến mặt phẳng nhỏ nhất theo phương vuông góc.', answer: true },
        { text: 'Với $M$ trên mặt cầu $S(I;R)$, $MA$ lớn nhất bằng $IA+R$.', answer: true },
        { text: String.raw`Với $M$ trên mặt cầu $S(I;R)$, $MA$ nhỏ nhất luôn bằng $IA-R$.`, answer: false },
        { text: 'Nếu $A$ nằm trong mặt cầu thì tồn tại $M$ trên mặt cầu sao cho $MA=0$.', answer: false },
      ],
      explanation: String.raw`$\min MA=\left|IA-R\right|$, không phải $IA-R$ khi $A$ nằm trong mặt cầu.`,
    },
    {
      id: 'tf2',
      stem: 'Các khẳng định về biểu thức tọa độ:',
      items: [
        { text: String.raw`$MA^2+MB^2=2MI^2+\dfrac{AB^2}{2}$ với $I$ là trung điểm $AB$.`, answer: true },
        { text: 'Hàm bậc hai với hệ số $A>0$ có giá trị nhỏ nhất tại đỉnh parabol.', answer: true },
        { text: 'Tham số hóa điểm trên đường thẳng luôn cho hàm bậc nhất.', answer: false },
        { text: String.raw`$MA^2+MB^2$ nhỏ nhất khi $MI$ nhỏ nhất.`, answer: true },
      ],
      explanation: 'Tham số hóa có thể cho hàm bậc hai (ví dụ khoảng cách bình phương).',
    },
    {
      id: 'tf3',
      stem: 'Các khẳng định về cực trị hình học:',
      items: [
        { text: 'Thể tích tứ diện không đổi khi đỉnh di chuyển trên mặt phẳng song song với đáy.', answer: true },
        { text: 'Diện tích tam giác $MAB$ không đổi khi $M$ di chuyển trên đường thẳng song song với $AB$.', answer: true },
        { text: 'Bất đẳng thức tam giác cho $MA+MB\\ge AB$ với mọi $M$.', answer: true },
        { text: 'Dấu bằng của $MA+MB\\ge AB$ xảy ra khi $M$ nằm ngoài đoạn $AB$.', answer: false },
      ],
      explanation: 'Dấu bằng xảy ra khi $M$ nằm trên đoạn $AB$.',
    },
  ],

  shortAnswer: [
    {
      id: 'sa1',
      question: String.raw`Cho $A(0;0;0)$ và $(P):x+y+z-3=0$. Khoảng cách nhỏ nhất từ $A$ đến một điểm trên $(P)$ bằng $\sqrt{k}$. Tìm $k$.`,
      answer: '3',
      unit: '',
      explanation: String.raw`$\mathrm d(A,(P))=\dfrac{3}{\sqrt3}=\sqrt3$ nên $k=3$.`,
    },
    {
      id: 'sa2',
      question: String.raw`Cho mặt cầu tâm $I$, bán kính $2$ và $IA=5$. Giá trị lớn nhất của $MA$ với $M$ trên mặt cầu bằng bao nhiêu?`,
      answer: '7',
      unit: '',
      explanation: String.raw`$\max MA=IA+R=7$.`,
    },
    {
      id: 'sa3',
      question: String.raw`Giá trị nhỏ nhất của $f(t)=t^2-6t+11$ bằng bao nhiêu?`,
      answer: '2',
      unit: '',
      explanation: String.raw`$f(t)=(t-3)^2+2\ge2$.`,
    },
    {
      id: 'sa4',
      question: String.raw`Cho $A(0;0;1)$, $B(0;0;3)$ và $M\in(Oxy)$. Giá trị nhỏ nhất của $MA+MB$ bằng bao nhiêu?`,
      answer: '4',
      unit: '',
      explanation: String.raw`Lấy $A'(0;0;-1)$ đối xứng $A$ qua $(Oxy)$ thì $MA+MB\ge A'B=4$.`,
    },
  ],
}

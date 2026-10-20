import type { Lesson } from '../types'

export const chuong8Bai2: Lesson = {
  id: 'bai-2',
  chapterId: 'chuong-8',
  title: 'Biến cố và định nghĩa cổ điển của xác suất',
  summary: 'Không gian mẫu, biến cố và cách tính xác suất cổ điển.',
  minutes: 22,

  theory: [
    {
      subtitle: 'Phép thử ngẫu nhiên và không gian mẫu',
      content: String.raw`**Phép thử ngẫu nhiên** là một thí nghiệm hay một hành động mà kết quả của nó không thể biết được trước khi phép thử được thực hiện.

**Không gian mẫu** của phép thử là tập tất cả các kết quả có thể khi thực hiện phép thử, kí hiệu là $\Omega$.

**Biến cố** $E$ là một tập con của không gian mẫu $\Omega$.

**Kết quả thuận lợi** cho biến cố $E$ là kết quả của phép thử làm cho biến cố đó xảy ra.`,
      formula: String.raw`E\subset\Omega`,
      note: String.raw`Biến cố chắc chắn là $\Omega$; biến cố không thể là $\varnothing$.`,
    },
    {
      subtitle: 'Các biến cố thường gặp',
      content: String.raw`Cho hai biến cố $A$ và $B$. Khi đó:

- **Biến cố đối** của $A$ là biến cố “$A$ không xảy ra”, kí hiệu $\overline A$.
- **Biến cố giao** của $A$ và $B$ là biến cố “$A$ và $B$ cùng xảy ra”, kí hiệu $A\cap B$ (hay $AB$).
- **Biến cố hợp** của $A$ và $B$ là biến cố “$A$ hoặc $B$ xảy ra”, kí hiệu $A\cup B$.
- $A$ và $B$ **xung khắc** nếu $A$ xảy ra thì $B$ không xảy ra và ngược lại; khi đó $A\cap B=\varnothing$.
- $A$ và $B$ **độc lập** nếu việc xảy ra của $A$ không làm ảnh hưởng đến việc xảy ra của $B$.`,
      formula: String.raw`A\cap B,\qquad A\cup B,\qquad \overline A`,
      note: String.raw`Xung khắc thì không đồng thời xảy ra; độc lập thì không ảnh hưởng nhau.`,
    },
    {
      subtitle: 'Định nghĩa cổ điển của xác suất',
      content: String.raw`Cho phép thử $T$ có không gian mẫu $\Omega$. Giả sử các kết quả có thể của $T$ là đồng khả năng. Nếu $E$ là một biến cố liên quan đến phép thử $T$ thì **xác suất** của $E$ được cho bởi công thức
$$P(E)=\dfrac{n(E)}{n(\Omega)},$$
trong đó $n(\Omega)$ và $n(E)$ tương ứng là số phần tử của không gian mẫu $\Omega$ và biến cố $E$.

Tính chất:
- $P(\varnothing)=0$ và $P(\Omega)=1$.
- $0\le P(A)\le1$ với mọi biến cố $A$.`,
      formula: String.raw`P(E)=\dfrac{n(E)}{n(\Omega)}`,
      note: String.raw`Công thức cổ điển chỉ dùng khi các kết quả **đồng khả năng**.`,
    },
    {
      subtitle: 'Các quy tắc tính xác suất',
      content: String.raw`Cho biến cố $A$. Xác suất của biến cố đối $\overline A$ là
$$P(\overline A)=1-P(A).$$

Cho hai biến cố $A$ và $B$ bất kì:
$$P(A\cup B)=P(A)+P(B)-P(AB).$$

Nếu $A$ và $B$ **xung khắc** thì
$$P(A\cup B)=P(A)+P(B).$$

Nếu $A$ và $B$ **độc lập** thì
$$P(AB)=P(A)\cdot P(B).$$`,
      formula: String.raw`P(\overline A)=1-P(A),\qquad P(A\cup B)=P(A)+P(B)-P(AB)`,
      note: String.raw`Hai biến cố $AB$ và $A\overline B$ xung khắc và $AB\cup A\overline B=A$.`,
    },
  ],

  examples: [
    {
      id: 'vd1',
      title: 'Gieo hai đồng xu',
      prompt: String.raw`Gieo một đồng xu cân đối hai lần. Tính xác suất của biến cố $E$: “có đúng một mặt sấp”.`,
      steps: [
        String.raw`Không gian mẫu $\Omega=\{SS;SN;NS;NN\}$, $n(\Omega)=4$.`,
        String.raw`$E=\{SN;NS\}$, $n(E)=2$.`,
        String.raw`$P(E)=\dfrac{2}{4}=\dfrac12$.`,
      ],
      answer: String.raw`$P(E)=\dfrac12$.`,
    },
    {
      id: 'vd2',
      title: 'Gieo một xúc xắc',
      prompt: String.raw`Gieo một xúc xắc cân đối. Cho $A$: “số chấm chẵn”, $B$: “số chấm lớn hơn $4$”. Tính $P(A)$, $P(B)$ và $P(A\cup B)$.`,
      steps: [
        String.raw`$\Omega=\{1;2;3;4;5;6\}$, $n(\Omega)=6$.`,
        String.raw`$A=\{2;4;6\}$ nên $P(A)=\dfrac36=\dfrac12$; $B=\{5;6\}$ nên $P(B)=\dfrac26=\dfrac13$.`,
        String.raw`$A\cap B=\{6\}$ nên $P(AB)=\dfrac16$.`,
        String.raw`$P(A\cup B)=\dfrac12+\dfrac13-\dfrac16=\dfrac23$.`,
      ],
      answer: String.raw`$P(A)=\dfrac12$, $P(B)=\dfrac13$, $P(A\cup B)=\dfrac23$.`,
    },
    {
      id: 'vd3',
      title: 'Lấy bi từ hộp',
      prompt: String.raw`Một hộp có $5$ bi đỏ và $3$ bi xanh. Lấy ngẫu nhiên một bi. Tính xác suất lấy được bi đỏ và xác suất lấy được bi xanh.`,
      steps: [
        String.raw`Tổng số bi là $5+3=8$.`,
        String.raw`Xác suất lấy được bi đỏ: $\dfrac58$.`,
        String.raw`Xác suất lấy được bi xanh: $\dfrac38$.`,
      ],
      answer: String.raw`Xác suất lấy được bi đỏ là $\dfrac58$; xác suất lấy được bi xanh là $\dfrac38$.`,
    },
    {
      id: 'vd4',
      title: 'Tổng số chấm khi gieo hai xúc xắc',
      prompt: String.raw`Gieo hai xúc xắc cân đối. Tính xác suất tổng số chấm bằng $7$.`,
      steps: [
        String.raw`Mỗi xúc xắc có $6$ kết quả nên $n(\Omega)=6\cdot6=36$.`,
        String.raw`Các cặp có tổng $7$: $(1;6),(2;5),(3;4),(4;3),(5;2),(6;1)$, có $6$ kết quả.`,
        String.raw`$P=\dfrac{6}{36}=\dfrac16$.`,
      ],
      answer: String.raw`$P=\dfrac16$.`,
    },
  ],

  exercises: [
    {
      id: 'bt1',
      prompt: String.raw`Gieo một đồng xu cân đối. Viết không gian mẫu và tính xác suất được mặt sấp.`,
      solution: String.raw`$\Omega=\{S;N\}$, $n(\Omega)=2$. Biến cố “được mặt sấp” có $1$ kết quả nên $P=\dfrac12$.`,
    },
    {
      id: 'bt2',
      prompt: String.raw`Gieo một xúc xắc cân đối. Tính xác suất số chấm chia hết cho $3$.`,
      solution: String.raw`Các kết quả chia hết cho $3$ là $3$ và $6$, có $2$ kết quả.

$P=\dfrac26=\dfrac13$.`,
    },
    {
      id: 'bt3',
      prompt: String.raw`Một hộp có $4$ bi đỏ và $6$ bi xanh. Lấy ngẫu nhiên một bi. Tính xác suất lấy được bi đỏ.`,
      solution: String.raw`Tổng số bi là $10$, số bi đỏ là $4$.

Xác suất lấy được bi đỏ là $\dfrac4{10}=\dfrac25$.`,
    },
    {
      id: 'bt4',
      prompt: String.raw`Gieo hai đồng xu cân đối. Tính xác suất có ít nhất một mặt sấp.`,
      solution: String.raw`$\Omega=\{SS;SN;NS;NN\}$, $n(\Omega)=4$.

Biến cố “ít nhất một sấp” là $\{SS;SN;NS\}$, có $3$ kết quả.

$P=\dfrac34$.`,
    },
    {
      id: 'bt5',
      prompt: String.raw`Gieo một xúc xắc. $A$: “số chấm chẵn”, $B$: “số chấm lớn hơn $4$”. Tính $P(A\cup B)$.`,
      hint: String.raw`Dùng $P(A\cup B)=P(A)+P(B)-P(AB)$.`,
      solution: String.raw`$P(A)=\dfrac12$, $P(B)=\dfrac13$, $P(AB)=\dfrac16$.

$P(A\cup B)=\dfrac12+\dfrac13-\dfrac16=\dfrac23$.`,
    },
    {
      id: 'bt6',
      prompt: String.raw`Một lớp có $20$ học sinh nam và $15$ học sinh nữ. Chọn ngẫu nhiên một học sinh. Tính xác suất chọn được học sinh nữ.`,
      solution: String.raw`Tổng số học sinh là $20+15=35$.

Xác suất chọn được học sinh nữ là $\dfrac{15}{35}=\dfrac37$.`,
    },
  ],

  quiz: [
    {
      id: 'q1',
      question: 'Không gian mẫu của một phép thử là',
      options: [
        'Một kết quả của phép thử.',
        'Tập các kết quả thuận lợi.',
        'Một biến cố bất kì.',
        'Tập tất cả các kết quả có thể của phép thử.',
      ],
      answer: 3,
      explanation: 'Không gian mẫu là tập tất cả các kết quả có thể khi thực hiện phép thử.',
    },
    {
      id: 'q2',
      question: 'Biến cố là',
      options: [
        'Một phần tử của không gian mẫu.',
        'Một tập con của không gian mẫu.',
        'Một phép thử.',
        'Một kết quả chắc chắn xảy ra.',
      ],
      answer: 1,
      explanation: 'Mỗi biến cố là một tập con của không gian mẫu.',
    },
    {
      id: 'q3',
      question: String.raw`Công thức xác suất cổ điển là`,
      options: [
        String.raw`$P(E)=\dfrac{n(\Omega)}{n(E)}$`,
        String.raw`$P(E)=\dfrac{n(E)}{n(\Omega)}$`,
        String.raw`$P(E)=n(E)+n(\Omega)$`,
        String.raw`$P(E)=n(E)\cdot n(\Omega)$`,
      ],
      answer: 1,
      explanation: String.raw`$P(E)=\dfrac{n(E)}{n(\Omega)}$.`,
    },
    {
      id: 'q4',
      question: 'Với mọi biến cố $A$, ta luôn có',
      options: [
        String.raw`$P(A)>1$`,
        String.raw`$P(A)<0$`,
        String.raw`$0\le P(A)\le1$`,
        String.raw`$P(A)=2$`,
      ],
      answer: 2,
      explanation: 'Xác suất của một biến cố luôn nằm trong đoạn $[0;1]$.',
    },
    {
      id: 'q5',
      question: String.raw`Xác suất của biến cố đối $\overline A$ là`,
      options: [
        String.raw`$1+P(A)$`,
        String.raw`$P(A)$`,
        String.raw`$1-P(A)$`,
        String.raw`$-P(A)$`,
      ],
      answer: 2,
      explanation: String.raw`$P(\overline A)=1-P(A)$.`,
    },
    {
      id: 'q6',
      question: String.raw`Nếu $A$ và $B$ xung khắc thì`,
      options: [
        String.raw`$P(A\cup B)=P(A)P(B)$`,
        String.raw`$P(A\cup B)=P(A)-P(B)$`,
        String.raw`$P(A\cup B)=P(A)+P(B)$`,
        String.raw`$P(A\cup B)=0$`,
      ],
      answer: 2,
      explanation: 'Hai biến cố xung khắc không đồng thời xảy ra nên xác suất hợp bằng tổng xác suất.',
    },
    {
      id: 'q7',
      question: String.raw`Nếu $A$ và $B$ độc lập thì`,
      options: [
        String.raw`$P(AB)=P(A)+P(B)$`,
        String.raw`$P(AB)=P(A)\cdot P(B)$`,
        String.raw`$P(AB)=0$`,
        String.raw`$P(AB)=1$`,
      ],
      answer: 1,
      explanation: 'Với hai biến cố độc lập, xác suất giao bằng tích các xác suất.',
    },
    {
      id: 'q8',
      question: 'Gieo một đồng xu cân đối. Xác suất được mặt sấp là',
      options: [String.raw`$\dfrac14$`, String.raw`$1$`, String.raw`$\dfrac12$`, String.raw`$0$`],
      answer: 2,
      explanation: String.raw`Có $2$ kết quả đồng khả năng, trong đó $1$ kết quả là mặt sấp nên $P=\dfrac12$.`,
    },
  ],

  trueFalse: [
    {
      id: 'tf1',
      stem: 'Gieo một xúc xắc cân đối.',
      items: [
        { text: String.raw`Không gian mẫu có $6$ phần tử.`, answer: true },
        { text: String.raw`Xác suất số chấm chẵn là $\dfrac12$.`, answer: true },
        { text: String.raw`Xác suất số chấm lớn hơn $4$ là $\dfrac13$.`, answer: true },
        { text: String.raw`Xác suất số chấm bằng $7$ là $\dfrac16$.`, answer: false },
      ],
      explanation: String.raw`Không có mặt $7$ chấm nên xác suất bằng $0$.`,
    },
    {
      id: 'tf2',
      stem: String.raw`Một hộp có $5$ bi đỏ và $3$ bi xanh, lấy ngẫu nhiên một bi.`,
      items: [
        { text: String.raw`Xác suất lấy được bi đỏ là $\dfrac58$.`, answer: true },
        { text: String.raw`Xác suất lấy được bi xanh là $\dfrac38$.`, answer: true },
        { text: String.raw`Xác suất lấy được bi đỏ hoặc bi xanh bằng $1$.`, answer: true },
        { text: String.raw`Xác suất lấy được một bi vừa đỏ vừa xanh là $\dfrac18$.`, answer: false },
      ],
      explanation: 'Một viên bi không thể vừa đỏ vừa xanh nên xác suất đồng thời bằng $0$.',
    },
    {
      id: 'tf3',
      stem: String.raw`Cho hai biến cố $A$ và $B$ xung khắc.`,
      items: [
        { text: String.raw`$P(A\cup B)=P(A)+P(B)$.`, answer: true },
        { text: String.raw`$P(AB)=0$.`, answer: true },
        { text: String.raw`$A$ và $B$ không thể đồng thời xảy ra.`, answer: true },
        { text: String.raw`$P(A\cup B)=P(A)\cdot P(B)$.`, answer: false },
      ],
      explanation: 'Công thức cộng dùng cho biến cố xung khắc, không phải công thức nhân.',
    },
  ],

  shortAnswer: [
    {
      id: 'sa1',
      question: 'Gieo một xúc xắc cân đối. Tính xác suất được mặt $6$ chấm (nhập phân số).',
      answer: '1/6',
      unit: '',
      explanation: String.raw`Có $1$ kết quả thuận lợi trong $6$ kết quả đồng khả năng nên $P=\dfrac16$.`,
    },
    {
      id: 'sa2',
      question: 'Gieo hai đồng xu cân đối. Tính xác suất được hai mặt sấp (nhập phân số).',
      answer: '1/4',
      unit: '',
      explanation: String.raw`$\Omega=\{SS;SN;NS;NN\}$ nên $P=\dfrac14$.`,
    },
    {
      id: 'sa3',
      question: 'Một hộp có $3$ bi đỏ và $7$ bi xanh. Lấy ngẫu nhiên một bi. Tính xác suất lấy được bi đỏ (dạng số thập phân).',
      answer: '0.3',
      unit: '',
      explanation: String.raw`Xác suất lấy được bi đỏ là $\dfrac3{10}=0{,}3$.`,
    },
    {
      id: 'sa4',
      question: String.raw`Cho $A$ và $B$ xung khắc, $P(A)=0{,}3$, $P(B)=0{,}4$. Tính $P(A\cup B)$.`,
      answer: '0.7',
      unit: '',
      explanation: String.raw`$P(A\cup B)=P(A)+P(B)=0{,}3+0{,}4=0{,}7$.`,
    },
  ],
}

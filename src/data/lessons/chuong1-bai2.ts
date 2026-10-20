import type { Lesson } from '../types'

export const chuong1Bai2: Lesson = {
  id: 'bai-2',
  chapterId: 'chuong-1',
  title: 'Hệ bất phương trình bậc nhất hai ẩn',
  summary: 'Miền nghiệm của hệ và bài toán tìm giá trị lớn nhất, nhỏ nhất của biểu thức.',
  minutes: 22,

  theory: [
    {
      subtitle: 'Hệ bất phương trình bậc nhất hai ẩn',
      content: String.raw`**Hệ bất phương trình bậc nhất hai ẩn** là một hệ gồm hai hay nhiều bất phương trình bậc nhất hai ẩn.

Cặp số $(x_0;y_0)$ là **nghiệm** của hệ khi $(x_0;y_0)$ đồng thời là nghiệm của tất cả các bất phương trình trong hệ.`,
      formula: String.raw`\begin{cases} a_1x+b_1y\le c_1\\ a_2x+b_2y\le c_2\\ \cdots \end{cases}`,
      note: String.raw`Mỗi bất phương trình trong hệ đều là bất phương trình bậc nhất hai ẩn.`,
    },
    {
      subtitle: 'Miền nghiệm của hệ bất phương trình',
      content: String.raw`Trong mặt phẳng $Oxy$, tập hợp các điểm có toạ độ là nghiệm của hệ bất phương trình bậc nhất hai ẩn được gọi là **miền nghiệm** của hệ đó.

Miền nghiệm của hệ là **giao** của các miền nghiệm của các bất phương trình trong hệ.

Để biểu diễn miền nghiệm của hệ, ta làm như sau:

1. Trên cùng một mặt phẳng $Oxy$, xác định miền nghiệm của mỗi bất phương trình trong hệ.
2. Phần không bị gạch (phần chung của các miền nghiệm) là miền nghiệm của hệ.`,
      formula: String.raw`\bigcap_{i=1}^{n} M_i`,
      note: String.raw`Trong đó $M_i$ là miền nghiệm của bất phương trình thứ $i$. Nếu một điểm thuộc miền nghiệm của hệ thì nó phải thoả mãn **tất cả** các bất phương trình trong hệ.`,
    },
    {
      subtitle: 'Tìm giá trị lớn nhất, nhỏ nhất của biểu thức',
      content: String.raw`Cho hệ bất phương trình bậc nhất hai ẩn và biểu thức $F(x;y)=ax+by$. Để tìm giá trị lớn nhất (hoặc nhỏ nhất) của $F(x;y)$ trên miền nghiệm của hệ, ta làm ba bước:

1. Xác định miền nghiệm của hệ. Giả sử miền đó là đa giác $A_1A_2\ldots A_n$.
2. Tính giá trị của $F(x;y)$ tại các đỉnh của đa giác.
3. So sánh các giá trị vừa tính; giá trị lớn nhất (hoặc nhỏ nhất) trong các giá trị đó là kết quả cần tìm.`,
      formula: String.raw`F(x;y)=ax+by,\qquad (x;y)\in \mathcal{M}`,
      note: String.raw`Kí hiệu $\mathcal{M}$ là miền nghiệm của hệ. Với miền nghiệm là đa giác lồi, giá trị lớn nhất và nhỏ nhất của $F(x;y)=ax+by$ đạt được tại các đỉnh của đa giác.`,
    },
  ],

  examples: [
    {
      id: 'vd1',
      title: 'Tìm giá trị lớn nhất của biểu thức',
      prompt: String.raw`Cho các giá trị $x,\ y$ thoả mãn điều kiện
$$\begin{cases} x-y+2\ge0\\ 2x-y-1\le0\\ 3x-y-2\ge0 \end{cases}$$
Tìm giá trị lớn nhất của biểu thức $T=3x+2y$.`,
      steps: [
        String.raw`Ba đường thẳng biên là $d_1:\ x-y+2=0$, $d_2:\ 2x-y-1=0$, $d_3:\ 3x-y-2=0$.`,
        String.raw`Tìm giao điểm của các đường thẳng:
$d_2\cap d_3$: giải hệ được $A(1;1)$.
$d_1\cap d_3$: giải hệ được $B(2;4)$.
$d_1\cap d_2$: giải hệ được $C(3;5)$.`,
        String.raw`Thử điểm $M(2;3)$: $2-3+2=1\ge0$, $4-3-1=0\le0$, $6-3-2=1\ge0$, nên $M$ thuộc miền nghiệm. Vậy miền nghiệm là miền tam giác $ABC$ (kể cả đường biên).`,
        String.raw`Tính $T$ tại các đỉnh:
$T_A=3\cdot1+2\cdot1=5$;
$T_B=3\cdot2+2\cdot4=14$;
$T_C=3\cdot3+2\cdot5=19$.`,
        String.raw`So sánh: $19>14>5$. Vậy giá trị lớn nhất của $T$ là $19$, đạt được tại $C(3;5)$, tức $x=3,\ y=5$.`,
      ],
      answer: String.raw`Giá trị lớn nhất là $T=19$ tại $x=3,\ y=5$ (vì $3\cdot3+2\cdot5=19$).`,
    },
    {
      id: 'vd2',
      title: 'Biểu diễn miền nghiệm của một hệ đơn giản',
      prompt: String.raw`Biểu diễn miền nghiệm của hệ bất phương trình
$$\begin{cases} x+y\le4\\ x\ge0\\ y\ge0 \end{cases}$$`,
      steps: [
        String.raw`Vẽ các đường thẳng biên: $x+y=4$ (qua $(4;0)$ và $(0;4)$), trục tung $x=0$ và trục hoành $y=0$.`,
        String.raw`Miền nghiệm của $x+y\le4$ là nửa mặt phẳng bờ $x+y=4$ chứa gốc $O$.`,
        String.raw`Miền nghiệm của $x\ge0$ là nửa mặt phẳng bên phải trục tung; miền nghiệm của $y\ge0$ là nửa mặt phẳng phía trên trục hoành.`,
        String.raw`Giao của ba miền là tam giác $OAB$ với $O(0;0)$, $A(4;0)$, $B(0;4)$, kể cả ba cạnh.`,
      ],
      answer: String.raw`Miền nghiệm là tam giác $OAB$ với $O(0;0)$, $A(4;0)$, $B(0;4)$, kể cả đường biên.`,
    },
    {
      id: 'vd3',
      title: 'Tìm giá trị lớn nhất trên miền tam giác',
      prompt: String.raw`Cho hệ bất phương trình
$$\begin{cases} x+y\le4\\ x\ge0\\ y\ge0 \end{cases}$$
Tìm giá trị lớn nhất của $T=2x+3y$.`,
      steps: [
        String.raw`Miền nghiệm là tam giác $OAB$ với $O(0;0)$, $A(4;0)$, $B(0;4)$.`,
        String.raw`Tính $T$ tại các đỉnh:
$T_O=0$;
$T_A=2\cdot4+3\cdot0=8$;
$T_B=2\cdot0+3\cdot4=12$.`,
        String.raw`So sánh: $12>8>0$, nên giá trị lớn nhất là $12$, đạt tại $B(0;4)$.`,
      ],
      answer: String.raw`Giá trị lớn nhất là $T=12$ tại $x=0,\ y=4$.`,
    },
    {
      id: 'vd4',
      title: 'Bài toán tối ưu với bốn đỉnh',
      prompt: String.raw`Cho hệ bất phương trình
$$\begin{cases} x+y\le10\\ 2x+y\le14\\ x\ge0\\ y\ge0 \end{cases}$$
Tìm giá trị lớn nhất của $T=3x+2y$.`,
      steps: [
        String.raw`Các đường biên: $x+y=10$, $2x+y=14$, $x=0$, $y=0$.`,
        String.raw`Các đỉnh của miền nghiệm: $O(0;0)$, $A(7;0)$ (giao của $2x+y=14$ với $y=0$), $B(4;6)$ (giao của $x+y=10$ và $2x+y=14$), $C(0;10)$ (giao của $x+y=10$ với $x=0$).`,
        String.raw`Tính $T$:
$T_O=0$;
$T_A=3\cdot7+2\cdot0=21$;
$T_B=3\cdot4+2\cdot6=24$;
$T_C=3\cdot0+2\cdot10=20$.`,
        String.raw`So sánh: $24>21>20>0$. Vậy giá trị lớn nhất là $24$, đạt tại $B(4;6)$.`,
      ],
      answer: String.raw`Giá trị lớn nhất là $T=24$ tại $x=4,\ y=6$.`,
    },
  ],

  exercises: [
    {
      id: 'bt1',
      prompt: String.raw`Biểu diễn miền nghiệm của hệ bất phương trình
$$\begin{cases} x+2y\le6\\ x\ge0\\ y\ge0 \end{cases}$$`,
      hint: String.raw`Đường thẳng $x+2y=6$ đi qua $(6;0)$ và $(0;3)$.`,
      solution: String.raw`Đường thẳng $x+2y=6$ đi qua $(6;0)$ và $(0;3)$.

Miền nghiệm của $x+2y\le6$ là nửa mặt phẳng bờ $x+2y=6$ chứa $O$; kết hợp $x\ge0$, $y\ge0$ được tam giác $OAB$ với $O(0;0)$, $A(6;0)$, $B(0;3)$, kể cả đường biên.`,
    },
    {
      id: 'bt2',
      prompt: String.raw`Biểu diễn miền nghiệm của hệ bất phương trình
$$\begin{cases} x+y\le3\\ x-y\le1\\ x\ge0\\ y\ge0 \end{cases}$$`,
      hint: String.raw`Tìm giao điểm của $x+y=3$ và $x-y=1$; đó là một đỉnh của miền nghiệm.`,
      solution: String.raw`Các đường biên: $x+y=3$, $x-y=1$, $x=0$, $y=0$.

Các đỉnh: $O(0;0)$, $A(1;0)$ (giao $x-y=1$ với $y=0$), $B(2;1)$ (giao $x+y=3$ và $x-y=1$), $C(0;3)$ (giao $x+y=3$ với $x=0$).

Miền nghiệm là tứ giác $OABC$, kể cả đường biên.`,
    },
    {
      id: 'bt3',
      prompt: String.raw`Cho hệ bất phương trình
$$\begin{cases} x+y\le4\\ x\ge0\\ y\ge0 \end{cases}$$
Tìm giá trị lớn nhất của $T=x+2y$.`,
      hint: String.raw`Tính $T$ tại $O(0;0)$, $(4;0)$ và $(0;4)$.`,
      solution: String.raw`Miền nghiệm là tam giác với các đỉnh $O(0;0)$, $A(4;0)$, $B(0;4)$.

$T_O=0$; $T_A=4$; $T_B=8$.

Vậy giá trị lớn nhất là $8$, đạt tại $B(0;4)$.`,
    },
    {
      id: 'bt4',
      prompt: String.raw`Cho hệ bất phương trình
$$\begin{cases} x+y\le8\\ 2x+y\le10\\ x\ge0\\ y\ge0 \end{cases}$$
Tìm giá trị lớn nhất của $T=3x+2y$.`,
      hint: String.raw`Các đỉnh là $(0;0)$, $(5;0)$, $(2;6)$ và $(0;8)$.`,
      solution: String.raw`Các đỉnh của miền nghiệm: $O(0;0)$, $A(5;0)$, $B(2;6)$ (giao của $x+y=8$ và $2x+y=10$), $C(0;8)$.

$T_O=0$; $T_A=15$; $T_B=3\cdot2+2\cdot6=18$; $T_C=16$.

Vậy giá trị lớn nhất là $18$, đạt tại $B(2;6)$.`,
    },
    {
      id: 'bt5',
      prompt: String.raw`Cho hệ bất phương trình
$$\begin{cases} x+y\le4\\ 2x-y\ge1\\ x\ge0 \end{cases}$$
Trong các điểm $M(2;1)$, $N(1;3)$, $P(0;0)$, $Q(3;1)$, điểm nào là nghiệm của hệ?`,
      hint: String.raw`Thay lần lượt toạ độ từng điểm vào cả ba bất phương trình.`,
      solution: String.raw`$M(2;1)$: $3\le4$, $3\ge1$, $2\ge0$ nên là nghiệm.

$N(1;3)$: $4\le4$, nhưng $2-3=-1\ge1$ sai nên không là nghiệm.

$P(0;0)$: $0\le4$, nhưng $0\ge1$ sai nên không là nghiệm.

$Q(3;1)$: $4\le4$, $5\ge1$, $3\ge0$ nên là nghiệm.

Vậy các điểm $M$ và $Q$ là nghiệm của hệ.`,
    },
    {
      id: 'bt6',
      prompt: String.raw`Cho hệ bất phương trình
$$\begin{cases} x+2y\le6\\ 2x+y\le6\\ x\ge0\\ y\ge0 \end{cases}$$
Tìm giá trị lớn nhất của $T=2x+3y$.`,
      hint: String.raw`Các đỉnh là $(0;0)$, $(3;0)$, $(2;2)$ và $(0;3)$.`,
      solution: String.raw`Các đỉnh của miền nghiệm: $O(0;0)$, $A(3;0)$, $B(2;2)$ (giao của $x+2y=6$ và $2x+y=6$), $C(0;3)$.

$T_O=0$; $T_A=6$; $T_B=2\cdot2+3\cdot2=10$; $T_C=9$.

Vậy giá trị lớn nhất là $10$, đạt tại $B(2;2)$.`,
    },
  ],

  quiz: [
    {
      id: 'q1',
      question: 'Hệ bất phương trình bậc nhất hai ẩn là',
      options: [
        'Một bất phương trình bậc nhất hai ẩn.',
        'Hệ gồm các phương trình bậc nhất hai ẩn.',
        'Hệ gồm hai hay nhiều bất phương trình bậc nhất hai ẩn.',
        'Hệ gồm một bất phương trình bậc hai.',
      ],
      answer: 2,
      explanation: 'Theo định nghĩa, hệ bất phương trình bậc nhất hai ẩn gồm hai hay nhiều bất phương trình bậc nhất hai ẩn.',
    },
    {
      id: 'q2',
      question: 'Cặp số $(x_0;y_0)$ là nghiệm của hệ bất phương trình khi',
      options: [
        'Nó là nghiệm của ít nhất một bất phương trình trong hệ.',
        'Nó là nghiệm của tất cả các bất phương trình trong hệ.',
        'Nó là nghiệm của bất phương trình đầu tiên.',
        'Nó không cần thoả mãn bất phương trình nào.',
      ],
      answer: 1,
      explanation: 'Nghiệm của hệ phải đồng thời là nghiệm của mọi bất phương trình trong hệ.',
    },
    {
      id: 'q3',
      question: 'Miền nghiệm của hệ bất phương trình bậc nhất hai ẩn là',
      options: [
        'Hợp của các miền nghiệm của các bất phương trình trong hệ.',
        'Miền nghiệm của bất phương trình có hệ số lớn nhất.',
        'Toàn bộ mặt phẳng toạ độ.',
        'Giao của các miền nghiệm của các bất phương trình trong hệ.',
      ],
      answer: 3,
      explanation: 'Miền nghiệm của hệ là phần chung (giao) của các miền nghiệm.',
    },
    {
      id: 'q4',
      question: String.raw`Cặp số $(1;1)$ có là nghiệm của hệ $\begin{cases} x+y\le2\\ x-y\ge0 \end{cases}$ không?`,
      options: ['Không', 'Có', 'Chỉ thoả mãn bất phương trình thứ nhất', 'Chỉ thoả mãn bất phương trình thứ hai'],
      answer: 1,
      explanation: String.raw`Thay $(1;1)$: $1+1=2\le2$ đúng và $1-1=0\ge0$ đúng, nên $(1;1)$ là nghiệm.`,
    },
    {
      id: 'q5',
      question: String.raw`Cặp số $(2;3)$ có là nghiệm của hệ $\begin{cases} x+y\le4\\ x\ge0 \end{cases}$ không?`,
      options: ['Có', 'Không thể xác định', 'Không', 'Thiếu dữ kiện'],
      answer: 2,
      explanation: String.raw`$2+3=5>4$ nên $(2;3)$ không thoả mãn bất phương trình thứ nhất; do đó không là nghiệm của hệ.`,
    },
    {
      id: 'q6',
      question: String.raw`Miền nghiệm của hệ $\begin{cases} x\ge0\\ y\ge0\\ x+y\le2 \end{cases}$ là`,
      options: [
        'Hình vuông kể cả đường biên.',
        'Tam giác kể cả đường biên.',
        'Nửa mặt phẳng không kể đường biên.',
        'Một điểm duy nhất.',
      ],
      answer: 1,
      explanation: String.raw`Ba đường biên $x=0$, $y=0$, $x+y=2$ tạo thành tam giác với các đỉnh $(0;0)$, $(2;0)$, $(0;2)$; miền nghiệm kể cả biên.`,
    },
    {
      id: 'q7',
      question: String.raw`Giá trị lớn nhất của $T=x+y$ trên miền nghiệm của hệ $\begin{cases} x\ge0\\ y\ge0\\ x+y\le2 \end{cases}$ là`,
      options: ['1', '0', '4', '2'],
      answer: 3,
      explanation: String.raw`Trên đoạn $x+y=2$, $T=x+y=2$; tại $O(0;0)$ thì $T=0$. Vậy giá trị lớn nhất là $2$.`,
    },
    {
      id: 'q8',
      question: String.raw`Giá trị lớn nhất của $T=2x+y$ trên miền nghiệm của hệ $\begin{cases} x\ge0\\ y\ge0\\ x+y\le2 \end{cases}$ là`,
      options: ['2', '4', '1', '0'],
      answer: 1,
      explanation: String.raw`Các đỉnh là $(0;0)$, $(2;0)$, $(0;2)$. $T$ lần lượt bằng $0$, $4$, $2$. Vậy giá trị lớn nhất là $4$.`,
    },
  ],

  trueFalse: [
    {
      id: 'tf1',
      stem: String.raw`Cho hệ bất phương trình $\begin{cases} x+y\le3\\ x\ge0\\ y\ge0 \end{cases}$.`,
      items: [
        { text: String.raw`$(1;1)$ là nghiệm của hệ.`, answer: true },
        { text: String.raw`$(2;2)$ là nghiệm của hệ.`, answer: false },
        { text: String.raw`$(0;3)$ là nghiệm của hệ.`, answer: true },
        { text: String.raw`Miền nghiệm là một tam giác kể cả đường biên.`, answer: true },
      ],
      explanation: String.raw`$(1;1)$: $2\le3$ đúng. $(2;2)$: $4\le3$ sai. $(0;3)$: $3\le3$ đúng. Miền nghiệm là tam giác với các đỉnh $(0;0)$, $(3;0)$, $(0;3)$.`,
    },
    {
      id: 'tf2',
      stem: String.raw`Cho hệ bất phương trình $\begin{cases} x-y\ge0\\ x+y\le4\\ x\ge0 \end{cases}$.`,
      items: [
        { text: String.raw`$(1;1)$ là nghiệm của hệ.`, answer: true },
        { text: String.raw`$(2;1)$ là nghiệm của hệ.`, answer: true },
        { text: String.raw`$(1;3)$ là nghiệm của hệ.`, answer: false },
        { text: String.raw`$(3;1)$ là nghiệm của hệ.`, answer: true },
      ],
      explanation: String.raw`$(1;3)$: $1-3=-2\ge0$ sai nên không là nghiệm. Các điểm còn lại đều thoả mãn cả ba bất phương trình.`,
    },
    {
      id: 'tf3',
      stem: String.raw`Cho bài toán tìm giá trị lớn nhất của $T=ax+by$ trên miền nghiệm là một đa giác lồi.`,
      items: [
        { text: String.raw`Giá trị lớn nhất đạt được tại một đỉnh của đa giác.`, answer: true },
        { text: String.raw`Có thể tính $T$ tại tất cả các đỉnh rồi so sánh.`, answer: true },
        { text: String.raw`Nếu miền nghiệm là tam giác thì có ba đỉnh.`, answer: true },
        { text: String.raw`Giá trị lớn nhất luôn đạt tại gốc toạ độ $O$.`, answer: false },
      ],
      explanation: String.raw`Với đa giác lồi, giá trị lớn nhất và nhỏ nhất của hàm bậc nhất đạt tại các đỉnh. Không phải lúc nào gốc $O$ cũng là điểm đạt giá trị lớn nhất.`,
    },
  ],

  shortAnswer: [
    {
      id: 'sa1',
      question: String.raw`Hệ $\begin{cases} x+y\le4\\ x\ge0\\ y\ge0 \end{cases}$ có miền nghiệm là tam giác. Tung độ của đỉnh nằm trên trục tung bằng bao nhiêu?`,
      answer: '4',
      unit: 'tung độ',
      explanation: String.raw`Đỉnh trên trục tung là giao của $x=0$ với $x+y=4$, tức $(0;4)$. Tung độ bằng $4$.`,
    },
    {
      id: 'sa2',
      question: String.raw`Cho hệ $\begin{cases} x+y\le4\\ x\ge0\\ y\ge0 \end{cases}$. Giá trị lớn nhất của $T=2x+y$ bằng bao nhiêu?`,
      answer: '8',
      unit: 'giá trị',
      explanation: String.raw`Các đỉnh là $(0;0)$, $(4;0)$, $(0;4)$. $T$ lần lượt bằng $0$, $8$, $4$. Vậy giá trị lớn nhất là $8$ tại $(4;0)$.`,
    },
    {
      id: 'sa3',
      question: String.raw`Cho hệ $\begin{cases} x+y\le4\\ x\ge0\\ y\ge0 \end{cases}$. Giá trị lớn nhất của $T=x+2y$ bằng bao nhiêu?`,
      answer: '8',
      unit: 'giá trị',
      explanation: String.raw`Các đỉnh là $(0;0)$, $(4;0)$, $(0;4)$. $T$ lần lượt bằng $0$, $4$, $8$. Vậy giá trị lớn nhất là $8$ tại $(0;4)$.`,
    },
    {
      id: 'sa4',
      question: String.raw`Cho hệ $\begin{cases} x+y\le8\\ 2x+y\le10\\ x\ge0\\ y\ge0 \end{cases}$. Giá trị lớn nhất của $T=3x+2y$ bằng bao nhiêu?`,
      answer: '18',
      unit: 'giá trị',
      explanation: String.raw`Các đỉnh là $(0;0)$, $(5;0)$, $(2;6)$, $(0;8)$. $T$ lần lượt bằng $0$, $15$, $18$, $16$. Vậy giá trị lớn nhất là $18$.`,
    },
  ],
}

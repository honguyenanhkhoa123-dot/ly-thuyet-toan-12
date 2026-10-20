import type { Lesson } from '../types'

export const chuong1Bai1: Lesson = {
  id: 'bai-1',
  chapterId: 'chuong-1',
  title: 'Bất phương trình bậc nhất hai ẩn',
  summary: 'Định nghĩa, nghiệm và cách biểu diễn miền nghiệm trên mặt phẳng toạ độ.',
  minutes: 20,

  theory: [
    {
      subtitle: 'Bất phương trình bậc nhất hai ẩn',
      content: String.raw`Bất phương trình bậc nhất hai ẩn $x,\ y$ có dạng
$$ax+by\le c,$$
trong đó $a,\ b,\ c$ là những số thực, $a$ và $b$ **không đồng thời bằng $0$**; $x$ và $y$ là các ẩn số. Các dạng còn lại là $ax+by\ge c$, $ax+by<c$ và $ax+by>c$.

Cặp số $(x_0;y_0)$ được gọi là **nghiệm** của bất phương trình bậc nhất hai ẩn $ax+by\le c$ nếu bất đẳng thức $ax_0+by_0\le c$ đúng.`,
      formula: String.raw`ax+by\le c,\qquad a^2+b^2\ne 0`,
      note: String.raw`Bất phương trình bậc nhất hai ẩn luôn có **vô số nghiệm**. Mỗi nghiệm là một cặp số $(x;y)$, được biểu diễn bởi một điểm trên mặt phẳng toạ độ $Oxy$.`,
    },
    {
      subtitle: 'Miền nghiệm của bất phương trình',
      content: String.raw`Trong mặt phẳng $Oxy$, tập hợp các điểm có toạ độ là nghiệm của bất phương trình $ax+by\le c$ gọi là **miền nghiệm** của bất phương trình đó.

Đường thẳng $d:\ ax+by=c$ chia mặt phẳng $Oxy$ thành hai nửa mặt phẳng bờ $d$:

- Một nửa mặt phẳng (không kể bờ $d$) là miền nghiệm của bất phương trình $ax+by>c$.
- Nửa mặt phẳng còn lại (không kể bờ $d$) là miền nghiệm của bất phương trình $ax+by<c$.`,
      formula: String.raw`d:\ ax+by=c`,
      note: String.raw`Đường thẳng $d$ được gọi là **đường thẳng biên** của miền nghiệm. Với dấu $\le$ hoặc $\ge$, miền nghiệm **kể cả** đường biên; với dấu $<$ hoặc $>$, miền nghiệm **không kể** đường biên.`,
    },
    {
      subtitle: 'Cách biểu diễn miền nghiệm',
      content: String.raw`Để biểu diễn miền nghiệm của bất phương trình $ax+by\le c$ trên mặt phẳng $Oxy$, ta làm theo bốn bước:

1. Vẽ đường thẳng $d:\ ax+by=c$.
2. Lấy một điểm $M_0(x_0;y_0)$ không thuộc $d$ (thường chọn gốc toạ độ $O$).
3. Tính $ax_0+by_0$ rồi so sánh với $c$.
4. Nếu $ax_0+by_0<c$ thì nửa mặt phẳng bờ $d$ **chứa** $M_0$ là miền nghiệm. Nếu $ax_0+by_0>c$ thì nửa mặt phẳng bờ $d$ **không chứa** $M_0$ là miền nghiệm.`,
      formula: String.raw`ax_0+by_0<c \;\Longrightarrow\; M_0 \in \mathcal{M}`,
      note: String.raw`Kí hiệu $\mathcal{M}$ là miền nghiệm. Khi bất phương trình có dấu $<$ hoặc $>$, miền nghiệm là miền của dấu $\le$ hoặc $\ge$ tương ứng **bỏ đi đường thẳng biên**; đường biên được vẽ bằng nét đứt.`,
    },
  ],

  examples: [
    {
      id: 'vd1',
      title: 'Biểu diễn miền nghiệm của bất phương trình có dấu ≤',
      prompt: String.raw`Biểu diễn miền nghiệm của bất phương trình $2x+y\le4$ trên mặt phẳng toạ độ.`,
      steps: [
        String.raw`Vẽ đường thẳng $d:\ 2x+y=4$. Cho $x=0$ được $y=4$; cho $y=0$ được $x=2$. Vậy $d$ đi qua hai điểm $(0;4)$ và $(2;0)$.`,
        String.raw`Chọn điểm $O(0;0)$ không thuộc $d$. Ta có $2\cdot0+0=0<4$.`,
        String.raw`Vì $0<4$ nên nửa mặt phẳng bờ $d$ chứa $O$ là miền nghiệm. Bất phương trình có dấu $\le$ nên lấy cả đường thẳng $d$.`,
      ],
      answer: String.raw`Miền nghiệm là nửa mặt phẳng bờ $d:\ 2x+y=4$ chứa gốc toạ độ $O$, kể cả đường thẳng $d$.`,
    },
    {
      id: 'vd2',
      title: 'Biểu diễn miền nghiệm của bất phương trình có dấu >',
      prompt: String.raw`Biểu diễn miền nghiệm của bất phương trình $x-2y>2$.`,
      steps: [
        String.raw`Vẽ đường thẳng $d:\ x-2y=2$. Cho $x=0$ được $y=-1$; cho $y=0$ được $x=2$. Vậy $d$ đi qua $(0;-1)$ và $(2;0)$.`,
        String.raw`Chọn $O(0;0)$. Ta có $0-2\cdot0=0>2$ là mệnh đề sai, nên $O$ không thuộc miền nghiệm.`,
        String.raw`Miền nghiệm là nửa mặt phẳng bờ $d$ **không chứa** $O$. Vì bất phương trình có dấu $>$ nên không lấy đường thẳng $d$; đường $d$ được vẽ bằng nét đứt.`,
      ],
      answer: String.raw`Miền nghiệm là nửa mặt phẳng bờ $d:\ x-2y=2$ không chứa $O$, không kể đường thẳng $d$.`,
    },
    {
      id: 'vd3',
      title: 'Kiểm tra một cặp số có là nghiệm',
      prompt: String.raw`Cho bất phương trình $3x-y<1$. Các cặp số $(1;-2)$ và $(0;0)$ có là nghiệm của bất phương trình không?`,
      steps: [
        String.raw`Thay $x=1,\ y=-2$: $3\cdot1-(-2)=5$. Vì $5<1$ sai nên $(1;-2)$ **không** là nghiệm.`,
        String.raw`Thay $x=0,\ y=0$: $3\cdot0-0=0$. Vì $0<1$ đúng nên $(0;0)$ là nghiệm.`,
      ],
      answer: String.raw`$(1;-2)$ không là nghiệm; $(0;0)$ là nghiệm.`,
    },
    {
      id: 'vd4',
      title: 'Biểu diễn miền nghiệm của bất phương trình có dấu ≥',
      prompt: String.raw`Biểu diễn miền nghiệm của bất phương trình $y\ge2x-1$.`,
      steps: [
        String.raw`Vẽ đường thẳng $d:\ y=2x-1$. Cho $x=0$ được $y=-1$; cho $x=1$ được $y=1$. Vậy $d$ đi qua $(0;-1)$ và $(1;1)$.`,
        String.raw`Chọn $O(0;0)$. Ta có $0\ge2\cdot0-1$, tức $0\ge-1$ là mệnh đề đúng.`,
        String.raw`Vậy miền nghiệm là nửa mặt phẳng bờ $d$ chứa $O$. Bất phương trình có dấu $\ge$ nên lấy cả đường thẳng $d$.`,
      ],
      answer: String.raw`Miền nghiệm là nửa mặt phẳng bờ $d:\ y=2x-1$ chứa $O$, kể cả đường thẳng $d$.`,
    },
  ],

  exercises: [
    {
      id: 'bt1',
      prompt: String.raw`Biểu diễn miền nghiệm của bất phương trình $x+y\le2$.`,
      hint: String.raw`Vẽ đường thẳng $x+y=2$ qua hai điểm $(2;0)$ và $(0;2)$, sau đó thử điểm $O(0;0)$.`,
      solution: String.raw`Đường thẳng $d:\ x+y=2$ đi qua $(2;0)$ và $(0;2)$.

Thay $O(0;0)$: $0+0=0<2$, nên $O$ thuộc miền nghiệm.

Vậy miền nghiệm là nửa mặt phẳng bờ $d$ chứa $O$, kể cả đường thẳng $d$.`,
    },
    {
      id: 'bt2',
      prompt: String.raw`Biểu diễn miền nghiệm của bất phương trình $2x-3y\ge6$.`,
      hint: String.raw`Đường thẳng biên đi qua $(3;0)$ và $(0;-2)$.`,
      solution: String.raw`Đường thẳng $d:\ 2x-3y=6$ đi qua $(3;0)$ và $(0;-2)$.

Thay $O(0;0)$: $0\ge6$ sai, nên $O$ không thuộc miền nghiệm.

Vậy miền nghiệm là nửa mặt phẳng bờ $d$ không chứa $O$, kể cả đường thẳng $d$.`,
    },
    {
      id: 'bt3',
      prompt: String.raw`Biểu diễn miền nghiệm của bất phương trình $y>2x-1$.`,
      hint: String.raw`Đường thẳng $y=2x-1$ đi qua $(0;-1)$ và $(1;1)$; dấu $>$ nên đường biên vẽ nét đứt.`,
      solution: String.raw`Vẽ đường thẳng $d:\ y=2x-1$ qua $(0;-1)$ và $(1;1)$ bằng nét đứt.

Thay $O(0;0)$: $0>-1$ đúng, nên $O$ thuộc miền nghiệm.

Vậy miền nghiệm là nửa mặt phẳng bờ $d$ chứa $O$, không kể đường thẳng $d$.`,
    },
    {
      id: 'bt4',
      prompt: String.raw`Biểu diễn miền nghiệm của bất phương trình $-x+2y<4$.`,
      hint: String.raw`Đường thẳng $-x+2y=4$ đi qua $(-4;0)$ và $(0;2)$.`,
      solution: String.raw`Vẽ đường thẳng $d:\ -x+2y=4$ qua $(-4;0)$ và $(0;2)$ bằng nét đứt.

Thay $O(0;0)$: $0<4$ đúng, nên $O$ thuộc miền nghiệm.

Vậy miền nghiệm là nửa mặt phẳng bờ $d$ chứa $O$, không kể đường thẳng $d$.`,
    },
    {
      id: 'bt5',
      prompt: String.raw`Cho bất phương trình $3x+2y\le6$. Trong các điểm $A(0;0)$, $B(2;0)$, $C(1;2)$, $D(3;1)$, điểm nào thuộc miền nghiệm?`,
      hint: String.raw`Thay toạ độ từng điểm vào $3x+2y$ rồi so sánh với $6$.`,
      solution: String.raw`$A$: $3\cdot0+2\cdot0=0\le6$ nên $A$ thuộc miền nghiệm.

$B$: $3\cdot2+2\cdot0=6\le6$ nên $B$ thuộc miền nghiệm.

$C$: $3\cdot1+2\cdot2=7>6$ nên $C$ không thuộc miền nghiệm.

$D$: $3\cdot3+2\cdot1=11>6$ nên $D$ không thuộc miền nghiệm.

Vậy các điểm $A$ và $B$ thuộc miền nghiệm.`,
    },
    {
      id: 'bt6',
      prompt: String.raw`Biểu diễn miền nghiệm của bất phương trình $4x+5y\le20$.`,
      hint: String.raw`Đường thẳng $4x+5y=20$ đi qua $(5;0)$ và $(0;4)$.`,
      solution: String.raw`Đường thẳng $d:\ 4x+5y=20$ đi qua $(5;0)$ và $(0;4)$.

Thay $O(0;0)$: $0\le20$ đúng, nên $O$ thuộc miền nghiệm.

Vậy miền nghiệm là nửa mặt phẳng bờ $d$ chứa $O$, kể cả đường thẳng $d$.`,
    },
  ],

  quiz: [
    {
      id: 'q1',
      question: 'Bất phương trình nào sau đây là bất phương trình bậc nhất hai ẩn?',
      options: [String.raw`$2x+3y\le1$`, String.raw`$x^2+y\le1$`, String.raw`$\dfrac1x+y>0$`, String.raw`$xy\ge2$`],
      answer: 0,
      explanation: String.raw`Bất phương trình bậc nhất hai ẩn có dạng $ax+by\le c$ với $a,\ b$ không đồng thời bằng $0$.`,
    },
    {
      id: 'q2',
      question: String.raw`Cặp số $(1;-2)$ là nghiệm của bất phương trình nào sau đây?`,
      options: [String.raw`$x+y\le0$`, String.raw`$x-y>3$`, String.raw`$2x+y\ge1$`, String.raw`$x+2y>2$`],
      answer: 0,
      explanation: String.raw`Thay $x=1,\ y=-2$: $1+(-2)=-1\le0$ đúng. Các bất phương trình còn lại đều sai.`,
    },
    {
      id: 'q3',
      question: String.raw`Điểm $O(0;0)$ thuộc miền nghiệm của bất phương trình nào sau đây?`,
      options: [String.raw`$x-y<1$`, String.raw`$x+y>2$`, String.raw`$2x+y\ge3$`, String.raw`$x+2y\le-1$`],
      answer: 0,
      explanation: String.raw`Thay $O(0;0)$ vào $x-y<1$ được $0<1$, là mệnh đề đúng.`,
    },
    {
      id: 'q4',
      question: String.raw`Đường thẳng biên của bất phương trình $2x-y\le4$ đi qua điểm nào sau đây?`,
      options: [String.raw`$(2;0)$`, String.raw`$(0;4)$`, String.raw`$(0;2)$`, String.raw`$(-2;0)$`],
      answer: 0,
      explanation: String.raw`Đường thẳng biên là $2x-y=4$. Thay $(2;0)$: $2\cdot2-0=4$, đúng.`,
    },
    {
      id: 'q5',
      question: String.raw`Miền nghiệm của bất phương trình $x\ge0$ là`,
      options: [
        'Nửa mặt phẳng bên phải trục tung, kể cả trục tung.',
        'Nửa mặt phẳng bên trái trục tung, kể cả trục tung.',
        'Nửa mặt phẳng phía trên trục hoành, kể cả trục hoành.',
        'Nửa mặt phẳng phía dưới trục hoành, kể cả trục hoành.',
      ],
      answer: 0,
      explanation: String.raw`$x\ge0$ gồm các điểm có hoành độ không âm, tức nửa mặt phẳng bên phải trục tung, kể cả trục tung.`,
    },
    {
      id: 'q6',
      question: String.raw`Điểm nào sau đây **không** thuộc miền nghiệm của bất phương trình $3x+2y\le6$?`,
      options: [String.raw`$(2;2)$`, String.raw`$(0;0)$`, String.raw`$(2;0)$`, String.raw`$(1;1)$`],
      answer: 0,
      explanation: String.raw`Thay $(2;2)$: $3\cdot2+2\cdot2=10>6$, nên $(2;2)$ không thuộc miền nghiệm.`,
    },
    {
      id: 'q7',
      question: String.raw`Đường thẳng biên của bất phương trình $x+2y>3$ là`,
      options: [String.raw`$x+2y=3$`, String.raw`$x+2y=-3$`, String.raw`$2x+y=3$`, String.raw`$x-2y=3$`],
      answer: 0,
      explanation: String.raw`Đường thẳng biên có phương trình $x+2y=3$.`,
    },
    {
      id: 'q8',
      question: String.raw`Bất phương trình bậc nhất hai ẩn $2x+y\le3$ có bao nhiêu nghiệm?`,
      options: ['Vô số nghiệm', 'Một nghiệm', 'Hai nghiệm', 'Không có nghiệm'],
      answer: 0,
      explanation: String.raw`Miền nghiệm là một nửa mặt phẳng, chứa vô số điểm nên bất phương trình có vô số nghiệm.`,
    },
  ],

  trueFalse: [
    {
      id: 'tf1',
      stem: String.raw`Cho bất phương trình $2x+y\le4$.`,
      items: [
        { text: String.raw`$(0;0)$ là nghiệm của bất phương trình.`, answer: true },
        { text: String.raw`$(1;1)$ là nghiệm của bất phương trình.`, answer: true },
        { text: String.raw`$(3;0)$ là nghiệm của bất phương trình.`, answer: false },
        { text: String.raw`Đường thẳng biên là $2x+y=4$.`, answer: true },
      ],
      explanation: String.raw`$(0;0)$: $0\le4$ đúng. $(1;1)$: $3\le4$ đúng. $(3;0)$: $6\le4$ sai. Đường biên là $2x+y=4$.`,
    },
    {
      id: 'tf2',
      stem: String.raw`Cho bất phương trình $x-2y>2$.`,
      items: [
        { text: String.raw`$O(0;0)$ là nghiệm của bất phương trình.`, answer: false },
        { text: String.raw`$(4;0)$ là nghiệm của bất phương trình.`, answer: true },
        { text: String.raw`Đường thẳng biên là $x-2y=2$.`, answer: true },
        { text: String.raw`Miền nghiệm không kể đường thẳng biên.`, answer: true },
      ],
      explanation: String.raw`$O$: $0>2$ sai. $(4;0)$: $4>2$ đúng. Dấu $>$ nên miền nghiệm không kể đường biên $x-2y=2$.`,
    },
    {
      id: 'tf3',
      stem: String.raw`Cho bất phương trình $y\ge2x-1$.`,
      items: [
        { text: String.raw`$(0;0)$ là nghiệm của bất phương trình.`, answer: true },
        { text: String.raw`$(1;2)$ là nghiệm của bất phương trình.`, answer: true },
        { text: String.raw`Đường thẳng biên là $y=2x-1$.`, answer: true },
        { text: String.raw`Điểm $(0;-2)$ thuộc miền nghiệm.`, answer: false },
      ],
      explanation: String.raw`$(0;0)$: $0\ge-1$ đúng. $(1;2)$: $2\ge1$ đúng. $(0;-2)$: $-2\ge-1$ sai. Đường biên là $y=2x-1$.`,
    },
  ],

  shortAnswer: [
    {
      id: 'sa1',
      question: String.raw`Điểm $(2;0)$ có thuộc miền nghiệm của bất phương trình $3x-y\le5$ không? Trả lời $1$ nếu có, $0$ nếu không.`,
      answer: '0',
      unit: '0 hoặc 1',
      explanation: String.raw`$3\cdot2-0=6>5$, nên $(2;0)$ **không** thuộc miền nghiệm. Kết quả là $0$.`,
    },
    {
      id: 'sa2',
      question: String.raw`Cho $2x+y\le4$. Với $x=1$, giá trị lớn nhất của $y$ là bao nhiêu?`,
      answer: '2',
      unit: 'giá trị',
      explanation: String.raw`$2\cdot1+y\le4\iff y\le2$. Giá trị lớn nhất của $y$ là $2$.`,
    },
    {
      id: 'sa3',
      question: String.raw`Đường thẳng $x-2y=4$ cắt trục tung tại điểm có tung độ bằng bao nhiêu?`,
      answer: '-2',
      unit: 'tung độ',
      explanation: String.raw`Cho $x=0$: $-2y=4\iff y=-2$.`,
    },
    {
      id: 'sa4',
      question: String.raw`Đường thẳng $2x+3y=6$ cắt trục tung tại điểm có tung độ bằng bao nhiêu?`,
      answer: '2',
      unit: 'tung độ',
      explanation: String.raw`Cho $x=0$: $3y=6\iff y=2$.`,
    },
  ],
}

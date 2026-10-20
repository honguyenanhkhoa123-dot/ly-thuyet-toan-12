import type { Lesson } from '../types'

export const chuong3Bai1: Lesson = {
  id: 'bai-1',
  chapterId: 'chuong-3',
  title: 'Dãy số',
  summary: 'Định nghĩa, cách cho dãy số và tính chất tăng, giảm, bị chặn.',
  minutes: 20,

  theory: [
    {
      subtitle: 'Định nghĩa dãy số',
      content: String.raw`Mỗi hàm số $u$ xác định trên tập các số nguyên dương $\mathbb{N}^*$ được gọi là một **dãy số vô hạn** (gọi tắt là dãy số), kí hiệu là $u=u(n)$.

Ta thường viết $u_n$ thay cho $u(n)$ và kí hiệu dãy số bởi $(u_n)$, do đó dãy số được viết dưới dạng khai triển $u_1,u_2,\ldots,u_n,\ldots$

Số $u_1$ gọi là **số hạng đầu**, $u_n$ gọi là **số hạng thứ $n$** và còn gọi là **số hạng tổng quát** của dãy số.

Mỗi hàm số $u$ xác định trên tập $M=\{1;2;3;\ldots;m\}$ với $m\in\mathbb{N}^*$ được gọi là một **dãy số hữu hạn**. Dạng khai triển là $u_1,u_2,\ldots,u_m$; $u_1$ là số hạng đầu và $u_m$ là số hạng cuối.`,
      formula: String.raw`u:\ \mathbb{N}^*\to\mathbb{R},\qquad n\mapsto u_n`,
      note: String.raw`Dãy số vô hạn có vô số số hạng; dãy số hữu hạn chỉ có $m$ số hạng.`,
    },
    {
      subtitle: 'Các cách cho một dãy số',
      content: String.raw`Một dãy số có thể được cho bằng một trong các cách sau:

1. **Liệt kê** các số hạng.
2. **Công thức số hạng tổng quát** $u_n$.
3. **Phương pháp mô tả**.
4. **Phương pháp truy hồi**: cho một vài số hạng đầu và hệ thức liên hệ giữa số hạng sau với số hạng trước.`,
      formula: String.raw`u_1=a,\qquad u_{n+1}=f(u_n)`,
      note: String.raw`Với phương pháp truy hồi, muốn tìm số hạng thứ $n$ ta thường phải tính lần lượt từ các số hạng đã biết.`,
    },
    {
      subtitle: 'Dãy số tăng, dãy số giảm',
      content: String.raw`Dãy số $(u_n)$ được gọi là **dãy số tăng** nếu $u_{n+1}>u_n$ với mọi $n\in\mathbb{N}^*$.

Dãy số $(u_n)$ được gọi là **dãy số giảm** nếu $u_{n+1}<u_n$ với mọi $n\in\mathbb{N}^*$.

Để xét tính tăng, giảm, ta thường xét dấu của hiệu $u_{n+1}-u_n$ hoặc so sánh tỉ số $\dfrac{u_{n+1}}{u_n}$ (khi $u_n>0$).`,
      formula: String.raw`u_{n+1}-u_n>0\quad \forall n\in\mathbb{N}^*`,
      note: String.raw`Khi đó $(u_n)$ là dãy số tăng. Một dãy số có thể **không tăng, không giảm**. Ví dụ dãy $u_n=(-1)^n$ xen kẽ $-1$ và $1$.`,
    },
    {
      subtitle: 'Dãy số bị chặn',
      content: String.raw`Dãy số $(u_n)$ được gọi là **bị chặn trên** nếu tồn tại số $M$ sao cho $u_n\le M$ với mọi $n\in\mathbb{N}^*$.

Dãy số $(u_n)$ được gọi là **bị chặn dưới** nếu tồn tại số $m$ sao cho $u_n\ge m$ với mọi $n\in\mathbb{N}^*$.

Dãy số $(u_n)$ được gọi là **bị chặn** nếu nó vừa bị chặn trên vừa bị chặn dưới, nghĩa là tồn tại $m,\ M$ sao cho $m\le u_n\le M$ với mọi $n\in\mathbb{N}^*$.`,
      formula: String.raw`m\le u_n\le M\quad \forall n\in\mathbb{N}^*`,
      note: String.raw`Dãy số bị chặn thì mọi số hạng của nó đều nằm trong một đoạn $[m;M]$.`,
    },
  ],

  examples: [
    {
      id: 'vd1',
      title: 'Tìm các số hạng và xét tính tăng, giảm',
      prompt: String.raw`Cho dãy số $(u_n)$ với $u_n=2n+1$. Viết bốn số hạng đầu và xét tính tăng, giảm của dãy.`,
      steps: [
        String.raw`Thay lần lượt $n=1,2,3,4$: $u_1=3$, $u_2=5$, $u_3=7$, $u_4=9$.`,
        String.raw`Xét hiệu $u_{n+1}-u_n=\bigl(2(n+1)+1\bigr)-(2n+1)=2>0$ với mọi $n$.`,
        String.raw`Vậy dãy số đã cho là dãy số tăng.`,
      ],
      answer: String.raw`$3;5;7;9$ và dãy số tăng.`,
    },
    {
      id: 'vd2',
      title: 'Dãy số cho bằng hệ thức truy hồi',
      prompt: String.raw`Cho dãy số $(u_n)$ xác định bởi $u_1=1$ và $u_{n+1}=2u_n+1$. Tính $u_2,u_3,u_4$.`,
      steps: [
        String.raw`$u_2=2u_1+1=2\cdot1+1=3$.`,
        String.raw`$u_3=2u_2+1=2\cdot3+1=7$.`,
        String.raw`$u_4=2u_3+1=2\cdot7+1=15$.`,
      ],
      answer: String.raw`$u_2=3,\ u_3=7,\ u_4=15$.`,
    },
    {
      id: 'vd3',
      title: 'Dãy số không tăng, không giảm',
      prompt: String.raw`Cho dãy số $u_n=(-1)^n$. Viết bốn số hạng đầu và xét tính tăng, giảm.`,
      steps: [
        String.raw`$u_1=-1$, $u_2=1$, $u_3=-1$, $u_4=1$.`,
        String.raw`Ta có $u_1<u_2$ nhưng $u_2>u_3$, nên dãy không tăng. Tương tự, $u_2>u_3$ nhưng $u_3<u_4$, nên dãy không giảm.`,
        String.raw`Vậy dãy số không tăng, không giảm. Dãy bị chặn vì $-1\le u_n\le1$ với mọi $n$.`,
      ],
      answer: String.raw`$-1;1;-1;1$; dãy không tăng, không giảm và bị chặn.`,
    },
    {
      id: 'vd4',
      title: 'Xét tính bị chặn',
      prompt: String.raw`Cho dãy số $u_n=\dfrac1n$. Xét tính tăng, giảm và tính bị chặn.`,
      steps: [
        String.raw`Với $n\ge1$, $u_n>0$. Ta có $u_{n+1}-u_n=\dfrac{1}{n+1}-\dfrac1n=\dfrac{-1}{n(n+1)}<0$.`,
        String.raw`Vậy dãy số giảm.`,
        String.raw`Mặt khác $0<u_n\le1$ với mọi $n\ge1$, nên dãy bị chặn trên bởi $1$ và bị chặn dưới bởi $0$; do đó dãy bị chặn.`,
      ],
      answer: String.raw`Dãy giảm và bị chặn, $0<u_n\le1$.`,
    },
  ],

  exercises: [
    {
      id: 'bt1',
      prompt: String.raw`Cho dãy số $u_n=3n-2$. Viết ba số hạng đầu và xét tính tăng, giảm.`,
      solution: String.raw`$u_1=1$, $u_2=4$, $u_3=7$.

$u_{n+1}-u_n=3>0$ với mọi $n$, nên dãy số tăng.`,
    },
    {
      id: 'bt2',
      prompt: String.raw`Cho dãy số $u_n=\dfrac{1}{2n}$. Viết ba số hạng đầu và xét tính tăng, giảm.`,
      solution: String.raw`$u_1=\dfrac12$, $u_2=\dfrac14$, $u_3=\dfrac16$.

$u_{n+1}-u_n=\dfrac{1}{2(n+1)}-\dfrac{1}{2n}=\dfrac{-1}{2n(n+1)}<0$, nên dãy số giảm.`,
    },
    {
      id: 'bt3',
      prompt: String.raw`Cho dãy số $(u_n)$ xác định bởi $u_1=2$ và $u_{n+1}=u_n+3$. Tính $u_2,u_3,u_4$.`,
      solution: String.raw`$u_2=2+3=5$; $u_3=5+3=8$; $u_4=8+3=11$.`,
    },
    {
      id: 'bt4',
      prompt: String.raw`Cho dãy số $u_n=\dfrac{n}{n+1}$. Xét tính tăng, giảm và tính bị chặn.`,
      hint: String.raw`Tính $u_{n+1}-u_n$ và nhận xét $0<u_n<1$.`,
      solution: String.raw`$u_{n+1}-u_n=\dfrac{n+1}{n+2}-\dfrac{n}{n+1}=\dfrac{(n+1)^2-n(n+2)}{(n+1)(n+2)}=\dfrac{1}{(n+1)(n+2)}>0$.

Vậy dãy số tăng. Với mọi $n\ge1$, $0<u_n<1$, nên dãy bị chặn.`,
    },
    {
      id: 'bt5',
      prompt: String.raw`Cho dãy số $u_n=(-1)^n n$. Viết bốn số hạng đầu. Dãy có bị chặn không?`,
      solution: String.raw`$u_1=-1$, $u_2=2$, $u_3=-3$, $u_4=4$.

Ta có $|u_n|=n$, không tồn tại số $M$ để $|u_n|\le M$ với mọi $n$. Vậy dãy không bị chặn.`,
    },
    {
      id: 'bt6',
      prompt: String.raw`Cho dãy số $u_n=\dfrac{2n}{n+1}$. Chứng minh dãy số tăng và bị chặn trên bởi $2$.`,
      hint: String.raw`Tính $u_{n+1}-u_n$; nhận xét $u_n=2-\dfrac{2}{n+1}$.`,
      solution: String.raw`$u_{n+1}-u_n=\dfrac{2(n+1)}{n+2}-\dfrac{2n}{n+1}=\dfrac{2}{(n+1)(n+2)}>0$, nên dãy tăng.

Mặt khác $u_n=\dfrac{2n}{n+1}=2-\dfrac{2}{n+1}<2$ với mọi $n\ge1$. Vậy dãy bị chặn trên bởi $2$.`,
    },
  ],

  quiz: [
    {
      id: 'q1',
      question: 'Dãy số vô hạn là hàm số xác định trên tập nào?',
      options: [String.raw`$\mathbb{R}$`, String.raw`$\mathbb{N}^*$`, String.raw`$\mathbb{Z}$`, String.raw`$\mathbb{Q}$`],
      answer: 1,
      explanation: String.raw`Theo định nghĩa, dãy số vô hạn là hàm số xác định trên $\mathbb{N}^*$.`,
    },
    {
      id: 'q2',
      question: String.raw`Trong dãy số $(u_n)$, số hạng $u_n$ được gọi là`,
      options: ['Số hạng đầu', 'Số hạng tổng quát', 'Công sai', 'Công bội'],
      answer: 1,
      explanation: String.raw`$u_n$ là số hạng thứ $n$, còn gọi là số hạng tổng quát của dãy số.`,
    },
    {
      id: 'q3',
      question: 'Dãy số $(u_n)$ được gọi là dãy số tăng nếu',
      options: [String.raw`$u_{n+1}<u_n$ với mọi $n\in\mathbb{N}^*$`, String.raw`$u_{n+1}=u_n$ với mọi $n\in\mathbb{N}^*$`, String.raw`$u_{n+1}>u_n$ với mọi $n\in\mathbb{N}^*$`, String.raw`$u_n>0$ với mọi $n$`],
      answer: 2,
      explanation: 'Dãy tăng khi mỗi số hạng đứng sau lớn hơn số hạng đứng trước.',
    },
    {
      id: 'q4',
      question: String.raw`Cho dãy số $u_n=2n-1$. Số hạng $u_5$ bằng`,
      options: ['7', '9', '11', '5'],
      answer: 1,
      explanation: String.raw`$u_5=2\cdot5-1=9$.`,
    },
    {
      id: 'q5',
      question: String.raw`Dãy số $u_n=\dfrac1n$ là dãy`,
      options: ['Tăng', 'Giảm', 'Không đổi', 'Không tăng, không giảm'],
      answer: 1,
      explanation: String.raw`$u_{n+1}=\dfrac{1}{n+1}<\dfrac1n=u_n$ nên dãy giảm.`,
    },
    {
      id: 'q6',
      question: String.raw`Dãy số $u_n=(-1)^n$ có tính chất nào sau đây?`,
      options: ['Tăng', 'Giảm', 'Bị chặn', 'Không bị chặn'],
      answer: 2,
      explanation: String.raw`$-1\le u_n\le1$ với mọi $n$, nên dãy bị chặn. Dãy không tăng, không giảm.`,
    },
    {
      id: 'q7',
      question: String.raw`Cho dãy số $u_1=1$ và $u_{n+1}=u_n+2$. Số hạng $u_3$ bằng`,
      options: ['3', '5', '7', '4'],
      answer: 1,
      explanation: String.raw`$u_2=1+2=3$; $u_3=3+2=5$.`,
    },
    {
      id: 'q8',
      question: String.raw`Cho dãy số $u_n=n^2$. Số hạng thứ tư bằng`,
      options: ['8', '12', '16', '4'],
      answer: 2,
      explanation: String.raw`$u_4=4^2=16$.`,
    },
  ],

  trueFalse: [
    {
      id: 'tf1',
      stem: String.raw`Cho dãy số $u_n=3n+1$.`,
      items: [
        { text: String.raw`$u_1=4$.`, answer: true },
        { text: String.raw`$u_2=7$.`, answer: true },
        { text: String.raw`Dãy số tăng.`, answer: true },
        { text: String.raw`Dãy số bị chặn trên.`, answer: false },
      ],
      explanation: String.raw`$u_1=4$, $u_2=7$; $u_{n+1}-u_n=3>0$ nên dãy tăng. Dãy không bị chặn trên vì $u_n$ lớn tuỳ ý khi $n$ lớn.`,
    },
    {
      id: 'tf2',
      stem: String.raw`Cho dãy số $u_n=\dfrac1n$.`,
      items: [
        { text: String.raw`Dãy số giảm.`, answer: true },
        { text: String.raw`$u_1=1$.`, answer: true },
        { text: String.raw`Dãy số bị chặn dưới bởi $0$.`, answer: true },
        { text: String.raw`Dãy số bị chặn trên bởi $1$.`, answer: true },
      ],
      explanation: String.raw`$0<u_n\le1$ với mọi $n\ge1$ và $u_{n+1}<u_n$, nên dãy giảm và bị chặn.`,
    },
    {
      id: 'tf3',
      stem: String.raw`Cho dãy số $u_n=(-1)^n n$.`,
      items: [
        { text: String.raw`$u_1=-1$.`, answer: true },
        { text: String.raw`$u_2=2$.`, answer: true },
        { text: String.raw`Dãy số tăng.`, answer: false },
        { text: String.raw`Dãy số bị chặn.`, answer: false },
      ],
      explanation: String.raw`$u_1=-1$, $u_2=2$, nhưng $u_2>u_3=-3$ nên dãy không tăng. $|u_n|=n$ không bị chặn.`,
    },
  ],

  shortAnswer: [
    {
      id: 'sa1',
      question: String.raw`Cho dãy số $u_n=2n+3$. Giá trị $u_4$ bằng bao nhiêu?`,
      answer: '11',
      unit: 'giá trị',
      explanation: String.raw`$u_4=2\cdot4+3=11$.`,
    },
    {
      id: 'sa2',
      question: String.raw`Cho dãy số $u_1=3$ và $u_{n+1}=2u_n$. Giá trị $u_3$ bằng bao nhiêu?`,
      answer: '12',
      unit: 'giá trị',
      explanation: String.raw`$u_2=2\cdot3=6$; $u_3=2\cdot6=12$.`,
    },
    {
      id: 'sa3',
      question: String.raw`Cho dãy số $u_n=n(n+1)$. Giá trị $u_3$ bằng bao nhiêu?`,
      answer: '12',
      unit: 'giá trị',
      explanation: String.raw`$u_3=3\cdot4=12$.`,
    },
    {
      id: 'sa4',
      question: String.raw`Cho dãy số $u_n=\dfrac{12}{n}$. Giá trị $u_4$ bằng bao nhiêu?`,
      answer: '3',
      unit: 'giá trị',
      explanation: String.raw`$u_4=\dfrac{12}{4}=3$.`,
    },
  ],
}

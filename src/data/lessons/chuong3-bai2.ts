import type { Lesson } from '../types'

export const chuong3Bai2: Lesson = {
  id: 'bai-2',
  chapterId: 'chuong-3',
  title: 'Cấp số cộng và cấp số nhân',
  summary: 'Công sai, công bội, số hạng tổng quát và tổng n số hạng đầu.',
  minutes: 24,

  theory: [
    {
      subtitle: 'Cấp số cộng',
      content: String.raw`Cấp số cộng là một dãy số (hữu hạn hoặc vô hạn) mà trong đó, kể từ số hạng thứ hai, mỗi số hạng đều bằng số hạng đứng ngay trước nó cộng với một số không đổi $d$.

Số $d$ được gọi là **công sai** của cấp số cộng.

Nếu $(u_n)$ là cấp số cộng với công sai $d$ thì:
- Số hạng tổng quát: $u_n=u_1+(n-1)d$ với $n\ge2$.
- Tính chất: $u_k=\dfrac{u_{k-1}+u_{k+1}}{2}$ với $k\ge2$.
- Ba số $a,\ b,\ c$ theo thứ tự lập thành cấp số cộng khi và chỉ khi $a+c=2b$.
- Tổng $n$ số hạng đầu: $S_n=u_1+u_2+\cdots+u_n=\dfrac{n(u_1+u_n)}{2}=\dfrac{n\bigl[2u_1+(n-1)d\bigr]}{2}$.`,
      formula: String.raw`u_{n+1}=u_n+d,\ u_n=u_1+(n-1)d`,
      note: String.raw`Công sai $d=u_{n+1}-u_n$ là một hằng số không phụ thuộc $n$.`,
    },
    {
      subtitle: 'Cấp số nhân',
      content: String.raw`Cấp số nhân là một dãy số (hữu hạn hoặc vô hạn) mà trong đó, kể từ số hạng thứ hai, mỗi số hạng đều bằng tích của số hạng đứng ngay trước nó với một số không đổi $q$.

Số $q$ được gọi là **công bội** của cấp số nhân.

Nếu $(u_n)$ là cấp số nhân với công bội $q$ thì:
- Số hạng tổng quát: $u_n=u_1 q^{n-1}$ với $n\ge2$.
- Tính chất: $u_k^2=u_{k-1}u_{k+1}$ với $k\ge2$ (khi các số hạng khác $0$).
- Ba số $a,\ b,\ c$ theo thứ tự lập thành cấp số nhân khi và chỉ khi $b^2=ac$.
- Tổng $n$ số hạng đầu: $S_n=u_1+u_2+\cdots+u_n=\dfrac{u_1(1-q^n)}{1-q}$ với $q\ne1$.`,
      formula: String.raw`u_{n+1}=u_n q,\qquad u_n=u_1 q^{n-1}`,
      note: String.raw`Khi $q=1$ thì $u_n=u_1$ với mọi $n$ và $S_n=n u_1$.`,
    },
    {
      subtitle: 'Cấp số nhân lùi vô hạn',
      content: String.raw`Cấp số nhân lùi vô hạn là cấp số nhân vô hạn có công bội $q$ thoả mãn $|q|<1$.

Tổng của cấp số nhân lùi vô hạn được tính bởi công thức:
$$S=u_1+u_2+\cdots+u_n+\cdots=\dfrac{u_1}{1-q}.$$`,
      formula: String.raw`|q|<1,\qquad S=\dfrac{u_1}{1-q}`,
      note: String.raw`Điều kiện $|q|<1$ bảo đảm các số hạng về sau nhỏ dần và tổng vô hạn có giá trị hữu hạn.`,
    },
  ],

  examples: [
    {
      id: 'vd1',
      title: 'Cấp số cộng: số hạng và tổng',
      prompt: String.raw`Cho cấp số cộng $(u_n)$ có $u_1=2$ và công sai $d=3$. Tính $u_5$ và $S_{10}$.`,
      steps: [
        String.raw`Số hạng tổng quát: $u_n=u_1+(n-1)d=2+3(n-1)$.` ,
        String.raw`$u_5=2+3\cdot4=14$.` ,
        String.raw`$S_{10}=\dfrac{10\bigl[2u_1+(10-1)d\bigr]}{2}=5(4+27)=155$.` ,
      ],
      answer: String.raw`$u_5=14$ và $S_{10}=155$.`,
    },
    {
      id: 'vd2',
      title: 'Tìm số hạng tổng quát từ hai số hạng',
      prompt: String.raw`Cho cấp số cộng $(u_n)$ có $u_3=7$ và $u_7=19$. Tìm $u_1,\ d$ và tính $u_{10}$.`,
      steps: [
        String.raw`Ta có $u_3=u_1+2d=7$ và $u_7=u_1+6d=19$.` ,
        String.raw`Trừ vế theo vế: $4d=12$, suy ra $d=3$. Thay vào $u_1+2d=7$ được $u_1=1$.` ,
        String.raw`$u_{10}=u_1+9d=1+9\cdot3=28$.` ,
      ],
      answer: String.raw`$u_1=1,\ d=3,\ u_{10}=28$.`,
    },
    {
      id: 'vd3',
      title: 'Cấp số nhân: số hạng và tổng',
      prompt: String.raw`Cho cấp số nhân $(u_n)$ có $u_1=3$ và công bội $q=2$. Tính $u_5$ và $S_5$.`,
      steps: [
        String.raw`$u_5=u_1 q^4=3\cdot2^4=48$.` ,
        String.raw`$S_5=\dfrac{u_1(1-q^5)}{1-q}=\dfrac{3(1-32)}{1-2}=\dfrac{3\cdot(-31)}{-1}=93$.` ,
      ],
      answer: String.raw`$u_5=48$ và $S_5=93$.`,
    },
    {
      id: 'vd4',
      title: 'Tổng của cấp số nhân lùi vô hạn',
      prompt: String.raw`Tính tổng của cấp số nhân lùi vô hạn có $u_1=2$ và $q=\dfrac12$.`,
      steps: [
        String.raw`Vì $|q|=\dfrac12<1$ nên đây là cấp số nhân lùi vô hạn.` ,
        String.raw`$S=\dfrac{u_1}{1-q}=\dfrac{2}{1-\dfrac12}=4$.` ,
      ],
      answer: String.raw`$S=4$.`,
    },
  ],

  exercises: [
    {
      id: 'bt1',
      prompt: String.raw`Cho cấp số cộng có $u_1=-1$ và $d=4$. Tính $u_6$ và $S_6$.`,
      solution: String.raw`$u_6=u_1+5d=-1+5\cdot4=19$.

$S_6=\dfrac{6(u_1+u_6)}{2}=3(-1+19)=54$.`,
    },
    {
      id: 'bt2',
      prompt: String.raw`Cho cấp số cộng có $u_2=5$ và $u_5=14$. Tìm $u_1,\ d$ và $u_{10}$.`,
      solution: String.raw`$u_2=u_1+d=5$ và $u_5=u_1+4d=14$.

Trừ vế: $3d=9$, suy ra $d=3$; thay vào được $u_1=2$.

$u_{10}=u_1+9d=2+27=29$.`,
    },
    {
      id: 'bt3',
      prompt: String.raw`Cho cấp số nhân có $u_1=2$ và $q=3$. Tính $u_4$ và $S_4$.`,
      solution: String.raw`$u_4=u_1q^3=2\cdot27=54$.

$S_4=\dfrac{2(1-3^4)}{1-3}=\dfrac{2(1-81)}{-2}=80$.`,
    },
    {
      id: 'bt4',
      prompt: String.raw`Tính tổng của cấp số nhân lùi vô hạn có $u_1=8$ và $q=\dfrac12$.`,
      solution: String.raw`$|q|=\dfrac12<1$ nên tổng là $S=\dfrac{8}{1-\dfrac12}=16$.`,
    },
    {
      id: 'bt5',
      prompt: String.raw`Ba số $2,\ 5,\ 8$ có lập thành cấp số cộng không? Ba số $2,\ 6,\ 18$ có lập thành cấp số nhân không?`,
      solution: String.raw`Với $2,\ 5,\ 8$: $2+8=10=2\cdot5$, nên ba số lập thành cấp số cộng.

Với $2,\ 6,\ 18$: $2\cdot18=36=6^2$, nên ba số lập thành cấp số nhân.`,
    },
    {
      id: 'bt6',
      prompt: String.raw`Cho cấp số cộng có $u_1=5$ và $d=-2$. Tính $S_{10}$.`,
      solution: String.raw`$S_{10}=\dfrac{10\bigl[2\cdot5+9\cdot(-2)\bigr]}{2}=5(10-18)=-40$.`,
    },
  ],

  quiz: [
    {
      id: 'q1',
      question: String.raw`Trong cấp số cộng $u_{n+1}=u_n+d$, số $d$ được gọi là`,
      options: ['Công bội', 'Công sai', 'Số hạng đầu', 'Số hạng tổng quát'],
      answer: 1,
      explanation: 'Số $d$ không đổi trong cấp số cộng được gọi là công sai.',
    },
    {
      id: 'q2',
      question: 'Số hạng tổng quát của cấp số cộng có số hạng đầu $u_1$ và công sai $d$ là',
      options: [String.raw`$u_n=u_1+nd$`, String.raw`$u_n=u_1q^{n-1}$`, String.raw`$u_n=u_1+(n-1)d$`, String.raw`$u_n=u_1d^{n-1}$`],
      answer: 2,
      explanation: String.raw`Công thức đúng là $u_n=u_1+(n-1)d$.`,
    },
    {
      id: 'q3',
      question: String.raw`Trong cấp số nhân $u_{n+1}=u_nq$, số $q$ được gọi là`,
      options: ['Công sai', 'Công bội', 'Số hạng đầu', 'Tổng $n$ số hạng'],
      answer: 1,
      explanation: 'Số $q$ không đổi trong cấp số nhân được gọi là công bội.',
    },
    {
      id: 'q4',
      question: 'Số hạng tổng quát của cấp số nhân có số hạng đầu $u_1$ và công bội $q$ là',
      options: [String.raw`$u_n=u_1q^n$`, String.raw`$u_n=u_1+(n-1)q$`, String.raw`$u_n=u_1q^{n-1}$`, String.raw`$u_n=u_1+(n-1)d$`],
      answer: 2,
      explanation: String.raw`Công thức đúng là $u_n=u_1q^{n-1}$.`,
    },
    {
      id: 'q5',
      question: String.raw`Cho cấp số cộng có $u_1=3$, $d=2$. Số hạng $u_5$ bằng`,
      options: ['13', '11', '9', '15'],
      answer: 1,
      explanation: String.raw`$u_5=3+4\cdot2=11$.`,
    },
    {
      id: 'q6',
      question: String.raw`Cho cấp số nhân có $u_1=2$, $q=3$. Số hạng $u_4$ bằng`,
      options: ['18', '24', '54', '162'],
      answer: 2,
      explanation: String.raw`$u_4=2\cdot3^3=54$.`,
    },
    {
      id: 'q7',
      question: 'Tổng $n$ số hạng đầu của cấp số cộng là',
      options: [String.raw`$S_n=\dfrac{u_1(1-q^n)}{1-q}$`, String.raw`$S_n=n u_1q^{n-1}$`, String.raw`$S_n=\dfrac{n(u_1+u_n)}{2}$`, String.raw`$S_n=u_1+(n-1)d$`],
      answer: 2,
      explanation: String.raw`Công thức đúng là $S_n=\dfrac{n(u_1+u_n)}{2}$.`,
    },
    {
      id: 'q8',
      question: String.raw`Cấp số nhân lùi vô hạn có $|q|<1$ thì tổng của nó bằng`,
      options: [String.raw`$\dfrac{u_1}{1+q}$`, String.raw`$u_1(1-q)$`, String.raw`$\dfrac{u_1}{1-q}$`, String.raw`$\dfrac{u_1}{q-1}$`],
      answer: 2,
      explanation: String.raw`Tổng của cấp số nhân lùi vô hạn là $S=\dfrac{u_1}{1-q}$.`,
    },
  ],

  trueFalse: [
    {
      id: 'tf1',
      stem: String.raw`Cho cấp số cộng $(u_n)$ có $u_1=1$ và $d=2$.`,
      items: [
        { text: String.raw`$u_5=9$.`, answer: true },
        { text: String.raw`$S_5=25$.`, answer: true },
        { text: String.raw`$u_{10}=19$.`, answer: true },
        { text: String.raw`$u_5=11$.`, answer: false },
      ],
      explanation: String.raw`$u_5=1+4\cdot2=9$; $S_5=\dfrac{5(1+9)}{2}=25$; $u_{10}=1+9\cdot2=19$.`,
    },
    {
      id: 'tf2',
      stem: String.raw`Cho cấp số nhân $(u_n)$ có $u_1=3$ và $q=2$.`,
      items: [
        { text: String.raw`$u_4=24$.`, answer: true },
        { text: String.raw`$S_4=45$.`, answer: true },
        { text: String.raw`$u_{n+1}=2u_n$.`, answer: true },
        { text: String.raw`$u_4=12$.`, answer: false },
      ],
      explanation: String.raw`$u_4=3\cdot2^3=24$; $S_4=\dfrac{3(1-2^4)}{1-2}=45$; $u_{n+1}=2u_n$.`,
    },
    {
      id: 'tf3',
      stem: String.raw`Cho cấp số nhân lùi vô hạn có $u_1=4$ và $q=\dfrac12$.`,
      items: [
        { text: String.raw`$|q|<1$.`, answer: true },
        { text: String.raw`Tổng $S=8$.`, answer: true },
        { text: String.raw`$u_n\to0$ khi $n\to+\infty$.`, answer: true },
        { text: String.raw`Tổng $S=4$.`, answer: false },
      ],
      explanation: String.raw`$S=\dfrac{4}{1-\dfrac12}=8$; vì $|q|<1$ nên $u_n=4\left(\dfrac12\right)^{n-1}\to0$.`,
    },
  ],

  shortAnswer: [
    {
      id: 'sa1',
      question: String.raw`Cho cấp số cộng có $u_1=4$ và $d=3$. Giá trị $u_6$ bằng bao nhiêu?`,
      answer: '19',
      unit: 'giá trị',
      explanation: String.raw`$u_6=4+5\cdot3=19$.`,
    },
    {
      id: 'sa2',
      question: String.raw`Cho cấp số nhân có $u_1=2$ và $q=4$. Giá trị $u_3$ bằng bao nhiêu?`,
      answer: '32',
      unit: 'giá trị',
      explanation: String.raw`$u_3=2\cdot4^2=32$.`,
    },
    {
      id: 'sa3',
      question: String.raw`Tính tổng của cấp số nhân lùi vô hạn có $u_1=6$ và $q=\dfrac13$.`,
      answer: '9',
      unit: 'giá trị',
      explanation: String.raw`$S=\dfrac{6}{1-\dfrac13}=9$.`,
    },
    {
      id: 'sa4',
      question: String.raw`Cho cấp số cộng có $u_1=10$ và $d=-1$. Giá trị $S_5$ bằng bao nhiêu?`,
      answer: '40',
      unit: 'giá trị',
      explanation: String.raw`$S_5=\dfrac{5\bigl[2\cdot10+4\cdot(-1)\bigr]}{2}=\dfrac{5\cdot16}{2}=40$.`,
    },
  ],
}

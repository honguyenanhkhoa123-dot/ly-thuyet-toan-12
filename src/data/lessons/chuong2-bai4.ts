import type { Lesson } from '../types'

export const chuong2Bai4: Lesson = {
  id: 'bai-4',
  chapterId: 'chuong-2',
  title: 'Phương trình lượng giác cơ bản',
  summary: 'Công thức nghiệm của phương trình sin, cos, tan, cot và các trường hợp đặc biệt.',
  minutes: 26,

  theory: [
    {
      subtitle: 'Phương trình sin x = m',
      content: String.raw`Phương trình $\sin x=m$ có nghiệm khi và chỉ khi $-1\le m\le1$.

Nếu $\sin x=\sin\alpha$ thì
$$\left[\begin{array}{l}x=\alpha+k2\pi\\ x=\pi-\alpha+k2\pi\end{array}\right.\quad(k\in\mathbb{Z}).$$

Các trường hợp đặc biệt:
$$\sin x=0\iff x=k\pi;$$
$$\sin x=1\iff x=\dfrac{\pi}{2}+k2\pi;$$
$$\sin x=-1\iff x=-\dfrac{\pi}{2}+k2\pi.$$`,
      formula: String.raw`\sin x=\sin\alpha\iff \left[\begin{array}{l}x=\alpha+k2\pi\\ x=\pi-\alpha+k2\pi\end{array}\right.`,
      note: String.raw`Nếu $|m|>1$ thì phương trình $\sin x=m$ vô nghiệm.`,
    },
    {
      subtitle: 'Phương trình cos x = m',
      content: String.raw`Phương trình $\cos x=m$ có nghiệm khi và chỉ khi $-1\le m\le1$.

Nếu $\cos x=\cos\alpha$ thì
$$x=\pm\alpha+k2\pi\quad(k\in\mathbb{Z}).$$

Các trường hợp đặc biệt:
$$\cos x=0\iff x=\dfrac{\pi}{2}+k\pi;$$
$$\cos x=1\iff x=k2\pi;$$
$$\cos x=-1\iff x=\pi+k2\pi.$$`,
      formula: String.raw`\cos x=\cos\alpha\iff x=\pm\alpha+k2\pi`,
      note: String.raw`Hai họ nghiệm của cosin có thể viết gộp thành $\pm\alpha+k2\pi$.`,
    },
    {
      subtitle: 'Phương trình tan x = m',
      content: String.raw`Phương trình $\tan x=m$ luôn có nghiệm với mọi $m\in\mathbb{R}$, với điều kiện $x\ne\dfrac{\pi}{2}+k\pi$.

Nếu $\tan x=\tan\alpha$ thì
$$x=\alpha+k\pi\quad(k\in\mathbb{Z}).$$

Các trường hợp đặc biệt:
$$\tan x=0\iff x=k\pi;$$
$$\tan x=1\iff x=\dfrac{\pi}{4}+k\pi;$$
$$\tan x=-1\iff x=-\dfrac{\pi}{4}+k\pi.$$`,
      formula: String.raw`\tan x=\tan\alpha\iff x=\alpha+k\pi`,
      note: String.raw`Chu kì nghiệm của $\tan$ là $\pi$, không phải $2\pi$.`,
    },
    {
      subtitle: 'Phương trình cot x = m',
      content: String.raw`Phương trình $\cot x=m$ luôn có nghiệm với mọi $m\in\mathbb{R}$, với điều kiện $x\ne k\pi$.

Nếu $\cot x=\cot\alpha$ thì
$$x=\alpha+k\pi\quad(k\in\mathbb{Z}).$$

Các trường hợp đặc biệt:
$$\cot x=0\iff x=\dfrac{\pi}{2}+k\pi;$$
$$\cot x=1\iff x=\dfrac{\pi}{4}+k\pi;$$
$$\cot x=-1\iff x=-\dfrac{\pi}{4}+k\pi.$$`,
      formula: String.raw`\cot x=\cot\alpha\iff x=\alpha+k\pi`,
      note: String.raw`Điều kiện xác định của $\cot$ là $x\ne k\pi$.`,
    },
    {
      subtitle: 'Một số lưu ý khi giải',
      content: String.raw`- Với phương trình $\sin x=m$ hoặc $\cos x=m$ có $|m|>1$: kết luận vô nghiệm.
- Có thể đưa phương trình về dạng cơ bản bằng cách chia hai vế cho hệ số, hoặc dùng công thức biến đổi.
- Khi phương trình có điều kiện xác định, phải loại nghiệm không thỏa mãn.
- Nghiệm tổng quát thường được viết theo đơn vị radian.`,
      formula: String.raw`-1\le m\le1`,
      note: String.raw`Không được bỏ qua điều kiện xác định của $\tan$ và $\cot$.`,
    },
  ],

  examples: [
    {
      id: 'vd1',
      title: 'Phương trình sin',
      prompt: String.raw`Giải phương trình $\sin x=\dfrac12$.`,
      steps: [
        String.raw`Ta có $\dfrac12=\sin\dfrac{\pi}{6}$.`,
        String.raw`Vậy $x=\dfrac{\pi}{6}+k2\pi$ hoặc $x=\pi-\dfrac{\pi}{6}+k2\pi=\dfrac{5\pi}{6}+k2\pi$.`,
      ],
      answer: String.raw`$x=\dfrac{\pi}{6}+k2\pi$ hoặc $x=\dfrac{5\pi}{6}+k2\pi$.`,
    },
    {
      id: 'vd2',
      title: 'Phương trình cos',
      prompt: String.raw`Giải phương trình $\cos x=-\dfrac12$.`,
      steps: [
        String.raw`Ta có $-\dfrac12=\cos\dfrac{2\pi}{3}$.`,
        String.raw`Vậy $x=\pm\dfrac{2\pi}{3}+k2\pi$.`,
      ],
      answer: String.raw`$x=\pm\dfrac{2\pi}{3}+k2\pi$.`,
    },
    {
      id: 'vd3',
      title: 'Phương trình tan',
      prompt: String.raw`Giải phương trình $\tan x=1$.`,
      steps: [
        String.raw`Điều kiện: $x\ne\dfrac{\pi}{2}+k\pi$.`,
        String.raw`$1=\tan\dfrac{\pi}{4}$ nên $x=\dfrac{\pi}{4}+k\pi$.`,
      ],
      answer: String.raw`$x=\dfrac{\pi}{4}+k\pi$.`,
    },
    {
      id: 'vd4',
      title: 'Phương trình cot',
      prompt: String.raw`Giải phương trình $\cot x=\sqrt3$.`,
      steps: [
        String.raw`Điều kiện: $x\ne k\pi$.`,
        String.raw`$\sqrt3=\cot\dfrac{\pi}{6}$ nên $x=\dfrac{\pi}{6}+k\pi$.`,
      ],
      answer: String.raw`$x=\dfrac{\pi}{6}+k\pi$.`,
    },
    {
      id: 'vd5',
      title: 'Đưa về phương trình cơ bản',
      prompt: String.raw`Giải phương trình $2\sin x-1=0$.`,
      steps: [
        String.raw`$2\sin x-1=0\iff\sin x=\dfrac12$.`,
        String.raw`Theo ví dụ 1: $x=\dfrac{\pi}{6}+k2\pi$ hoặc $x=\dfrac{5\pi}{6}+k2\pi$.`,
      ],
      answer: String.raw`$x=\dfrac{\pi}{6}+k2\pi$ hoặc $x=\dfrac{5\pi}{6}+k2\pi$.`,
    },
  ],

  exercises: [
    {
      id: 'bt1',
      prompt: String.raw`Giải phương trình $\sin x=0$.`,
      solution: String.raw`$\sin x=0\iff x=k\pi\ (k\in\mathbb{Z})$.`,
    },
    {
      id: 'bt2',
      prompt: String.raw`Giải phương trình $\cos x=1$.`,
      solution: String.raw`$\cos x=1\iff x=k2\pi\ (k\in\mathbb{Z})$.`,
    },
    {
      id: 'bt3',
      prompt: String.raw`Giải phương trình $\tan x=0$.`,
      solution: String.raw`Điều kiện $x\ne\dfrac{\pi}{2}+k\pi$. Ta có $\tan x=0\iff x=k\pi$.`,
    },
    {
      id: 'bt4',
      prompt: String.raw`Giải phương trình $\cot x=1$.`,
      solution: String.raw`Điều kiện $x\ne k\pi$. Ta có $\cot x=1\iff x=\dfrac{\pi}{4}+k\pi$.`,
    },
    {
      id: 'bt5',
      prompt: String.raw`Giải phương trình $\sin x=\dfrac{\sqrt3}{2}$.`,
      solution: String.raw`$\dfrac{\sqrt3}{2}=\sin\dfrac{\pi}{3}$ nên $x=\dfrac{\pi}{3}+k2\pi$ hoặc $x=\dfrac{2\pi}{3}+k2\pi$.`,
    },
    {
      id: 'bt6',
      prompt: String.raw`Giải phương trình $\cos x=\dfrac12$.`,
      solution: String.raw`$\dfrac12=\cos\dfrac{\pi}{3}$ nên $x=\pm\dfrac{\pi}{3}+k2\pi$.`,
    },
  ],

  quiz: [
    {
      id: 'q1',
      question: String.raw`$\sin x=\sin\alpha$ tương đương với`,
      options: [
        String.raw`$x=\alpha+k2\pi$`,
        String.raw`$x=\pm\alpha+k2\pi$`,
        String.raw`$x=\alpha+k2\pi$ hoặc $x=\pi-\alpha+k2\pi$`,
        String.raw`$x=\alpha+k\pi$`,
      ],
      answer: 2,
      explanation: 'Phương trình sin có hai họ nghiệm đối xứng qua $\\dfrac{\\pi}{2}$.',
    },
    {
      id: 'q2',
      question: String.raw`$\cos x=\cos\alpha$ tương đương với`,
      options: [
        String.raw`$x=\alpha+k2\pi$`,
        String.raw`$x=\alpha+k\pi$`,
        String.raw`$x=\pi-\alpha+k2\pi$`,
        String.raw`$x=\pm\alpha+k2\pi$`,
      ],
      answer: 3,
      explanation: 'Phương trình cos có hai họ nghiệm đối nhau.',
    },
    {
      id: 'q3',
      question: String.raw`$\tan x=\tan\alpha$ tương đương với`,
      options: [
        String.raw`$x=\alpha+k2\pi$`,
        String.raw`$x=\pm\alpha+k\pi$`,
        String.raw`$x=\alpha+k\pi$`,
        String.raw`$x=\pi-\alpha+k\pi$`,
      ],
      answer: 2,
      explanation: 'Chu kì của tan là $\\pi$.',
    },
    {
      id: 'q4',
      question: String.raw`$\cot x=\cot\alpha$ tương đương với`,
      options: [
        String.raw`$x=\alpha+k\pi$`,
        String.raw`$x=\alpha+k2\pi$`,
        String.raw`$x=\pm\alpha+k\pi$`,
        String.raw`$x=\pi-\alpha+k\pi$`,
      ],
      answer: 0,
      explanation: 'Chu kì của cot là $\\pi$.',
    },
    {
      id: 'q5',
      question: String.raw`Nghiệm của phương trình $\sin x=0$ là`,
      options: [
        String.raw`$x=k2\pi$`,
        String.raw`$x=\dfrac{\pi}{2}+k\pi$`,
        String.raw`$x=k\pi$`,
        String.raw`$x=\pi+k2\pi$`,
      ],
      answer: 2,
      explanation: 'Sin bằng 0 tại các điểm $x=k\\pi$.',
    },
    {
      id: 'q6',
      question: String.raw`Nghiệm của phương trình $\cos x=0$ là`,
      options: [
        String.raw`$x=\dfrac{\pi}{2}+k\pi$`,
        String.raw`$x=k\pi$`,
        String.raw`$x=k2\pi$`,
        String.raw`$x=\dfrac{\pi}{2}+k2\pi$`,
      ],
      answer: 0,
      explanation: 'Cos bằng 0 tại $x=\\dfrac{\\pi}{2}+k\\pi$.',
    },
    {
      id: 'q7',
      question: String.raw`Nghiệm của phương trình $\sin x=\dfrac12$ là`,
      options: [
        String.raw`$x=\dfrac{\pi}{6}+k\pi$`,
        String.raw`$x=\dfrac{\pi}{6}+k2\pi$ hoặc $x=\dfrac{5\pi}{6}+k2\pi$`,
        String.raw`$x=\dfrac{\pi}{3}+k2\pi$`,
        String.raw`$x=\pm\dfrac{\pi}{6}+k2\pi$`,
      ],
      answer: 1,
      explanation: '$\\dfrac12=\\sin\\dfrac{\\pi}{6}$, dùng công thức nghiệm của sin.',
    },
    {
      id: 'q8',
      question: String.raw`Nghiệm của phương trình $\cos x=-1$ là`,
      options: [
        String.raw`$x=k2\pi$`,
        String.raw`$x=\dfrac{\pi}{2}+k\pi$`,
        String.raw`$x=k\pi$`,
        String.raw`$x=\pi+k2\pi$`,
      ],
      answer: 3,
      explanation: 'Cos bằng $-1$ tại $x=\\pi+k2\\pi$.',
    },
  ],

  trueFalse: [
    {
      id: 'tf1',
      stem: 'Các trường hợp đặc biệt:',
      items: [
        { text: String.raw`$\sin x=0\iff x=k\pi$.`, answer: true },
        { text: String.raw`$\cos x=0\iff x=\dfrac{\pi}{2}+k\pi$.`, answer: true },
        { text: String.raw`$\sin x=1\iff x=\dfrac{\pi}{2}+k2\pi$.`, answer: true },
        { text: String.raw`$\cos x=1\iff x=\pi+k2\pi$.`, answer: false },
      ],
      explanation: String.raw`$\cos x=1\iff x=k2\pi$, không phải $\pi+k2\pi$.`,
    },
    {
      id: 'tf2',
      stem: String.raw`Cho các hàm số lượng giác.`,
      items: [
        { text: String.raw`$\tan x$ xác định khi $x\ne k\pi$.`, answer: false },
        { text: String.raw`$\cot x$ xác định khi $x\ne k\pi$.`, answer: true },
        { text: String.raw`$\tan x=0\iff x=k\pi$.`, answer: true },
        { text: String.raw`$\cot x=0\iff x=k\pi$.`, answer: false },
      ],
      explanation: String.raw`$\tan x$ xác định khi $x\ne\dfrac{\pi}{2}+k\pi$; $\cot x=0\iff x=\dfrac{\pi}{2}+k\pi$.`,
    },
    {
      id: 'tf3',
      stem: 'Các khẳng định về phương trình lượng giác:',
      items: [
        { text: String.raw`Phương trình $\sin x=\dfrac12$ có hai họ nghiệm.`, answer: true },
        { text: String.raw`Phương trình $\cos x=\dfrac12$ có hai họ nghiệm.`, answer: true },
        { text: String.raw`$\tan x=1\iff x=\dfrac{\pi}{4}+k2\pi$.`, answer: false },
        { text: String.raw`Phương trình $\sin x=2$ có nghiệm.`, answer: false },
      ],
      explanation: String.raw`$\tan x=1\iff x=\dfrac{\pi}{4}+k\pi$; phương trình $\sin x=2$ vô nghiệm vì $\sin x\le1<2$.`,
    },
  ],

  shortAnswer: [
    {
      id: 'sa1',
      question: String.raw`Nghiệm dương nhỏ nhất của phương trình $\sin x=0$ có dạng $k\pi$. Tìm $k$.`,
      answer: '1',
      unit: '',
      explanation: String.raw`$x=k\pi$; nghiệm dương nhỏ nhất ứng với $k=1$, tức $x=\pi$.`,
    },
    {
      id: 'sa2',
      question: String.raw`Nghiệm dương nhỏ nhất của phương trình $\cos x=1$ có dạng $k2\pi$. Tìm $k$.`,
      answer: '1',
      unit: '',
      explanation: String.raw`$x=k2\pi$; nghiệm dương nhỏ nhất ứng với $k=1$, tức $x=2\pi$.`,
    },
    {
      id: 'sa3',
      question: String.raw`Nghiệm dương nhỏ nhất của phương trình $\tan x=0$ có dạng $k\pi$. Tìm $k$.`,
      answer: '1',
      unit: '',
      explanation: String.raw`$x=k\pi$; nghiệm dương nhỏ nhất ứng với $k=1$.`,
    },
    {
      id: 'sa4',
      question: String.raw`Số họ nghiệm của phương trình $\sin x=\dfrac12$ trên một chu kì là bao nhiêu?`,
      answer: '2',
      unit: '',
      explanation: String.raw`Có hai họ nghiệm $x=\dfrac{\pi}{6}+k2\pi$ và $x=\dfrac{5\pi}{6}+k2\pi$.`,
    },
  ],
}

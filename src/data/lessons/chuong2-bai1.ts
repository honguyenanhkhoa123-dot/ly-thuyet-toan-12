import type { Lesson } from '../types'

export const chuong2Bai1: Lesson = {
  id: 'bai-1',
  chapterId: 'chuong-2',
  title: 'Giá trị lượng giác của góc lượng giác',
  summary: 'Định nghĩa sin, cos, tan, cot; dấu và các công thức lượng giác cơ bản.',
  minutes: 24,

  theory: [
    {
      subtitle: 'Định nghĩa giá trị lượng giác',
      content: String.raw`Trên đường tròn lượng giác, gọi $M$ là điểm biểu diễn góc lượng giác có số đo $\alpha$. Khi đó:
- Hoành độ $x_0$ của $M$ gọi là **côsin** của $\alpha$, kí hiệu $\cos\alpha$.
- Tung độ $y_0$ của $M$ gọi là **sin** của $\alpha$, kí hiệu $\sin\alpha$.
- Nếu $\cos\alpha\ne0$ thì tỉ số $\dfrac{\sin\alpha}{\cos\alpha}$ gọi là **tan** của $\alpha$, kí hiệu $\tan\alpha$.
- Nếu $\sin\alpha\ne0$ thì tỉ số $\dfrac{\cos\alpha}{\sin\alpha}$ gọi là **côtang** của $\alpha$, kí hiệu $\cot\alpha$.`,
      formula: String.raw`\tan\alpha=\dfrac{\sin\alpha}{\cos\alpha},\qquad \cot\alpha=\dfrac{\cos\alpha}{\sin\alpha}`,
      note: String.raw`$\tan\alpha$ xác định khi $\alpha\ne\dfrac{\pi}{2}+k\pi$; $\cot\alpha$ xác định khi $\alpha\ne k\pi$.`,
    },
    {
      subtitle: 'Tính chất cơ bản',
      content: String.raw`Với mọi góc lượng giác $\alpha$, ta có:
$$-1\le\sin\alpha\le1;\qquad -1\le\cos\alpha\le1.$$

Với mọi số nguyên $k$:
$$\sin(\alpha+k2\pi)=\sin\alpha;\qquad \cos(\alpha+k2\pi)=\cos\alpha.$$

Hàm số $\tan$ và $\cot$ tuần hoàn với chu kì $\pi$:
$$\tan(\alpha+k\pi)=\tan\alpha;\qquad \cot(\alpha+k\pi)=\cot\alpha.$$`,
      formula: String.raw`-1\le\sin\alpha\le1,\qquad -1\le\cos\alpha\le1`,
      note: String.raw`$\sin$ và $\cos$ tuần hoàn chu kì $2\pi$; $\tan$ và $\cot$ tuần hoàn chu kì $\pi$.`,
    },
    {
      subtitle: 'Dấu của các giá trị lượng giác',
      content: String.raw`Chia đường tròn lượng giác thành bốn góc phần tư $(I)$, $(II)$, $(III)$, $(IV)$.

- Góc phần tư $(I)$: $\sin>0$, $\cos>0$, $\tan>0$, $\cot>0$.
- Góc phần tư $(II)$: $\sin>0$, $\cos<0$, $\tan<0$, $\cot<0$.
- Góc phần tư $(III)$: $\sin<0$, $\cos<0$, $\tan>0$, $\cot>0$.
- Góc phần tư $(IV)$: $\sin<0$, $\cos>0$, $\tan<0$, $\cot<0$.`,
      formula: String.raw`(I):\ +\,+;\quad (II):\ +\,-;\quad (III):\ -\,-;\quad (IV):\ -\,+`,
      note: String.raw`Dấu của $\tan$ và $\cot$ cùng dấu; dấu của $\sin$ và $\cos$ ngược nhau ở $(II)$ và $(IV)$.`,
    },
    {
      subtitle: 'Công thức lượng giác cơ bản',
      content: String.raw`Với các biểu thức xác định, ta có:
$$\sin^2\alpha+\cos^2\alpha=1;$$
$$\tan\alpha\cdot\cot\alpha=1;$$
$$1+\tan^2\alpha=\dfrac{1}{\cos^2\alpha};\qquad 1+\cot^2\alpha=\dfrac{1}{\sin^2\alpha}.$$`,
      formula: String.raw`\sin^2\alpha+\cos^2\alpha=1`,
      note: String.raw`Từ $\sin^2\alpha+\cos^2\alpha=1$ có thể tính $\cos\alpha$ khi biết $\sin\alpha$ và dấu của $\cos\alpha$.`,
    },
    {
      subtitle: 'Giá trị lượng giác của các góc liên quan đặc biệt',
      content: String.raw`**Hai cung đối nhau:**
$$\cos(-\alpha)=\cos\alpha;\quad \sin(-\alpha)=-\sin\alpha;$$
$$\tan(-\alpha)=-\tan\alpha;\quad \cot(-\alpha)=-\cot\alpha.$$

**Hai cung bù nhau:**
$$\sin(\pi-\alpha)=\sin\alpha;\quad \cos(\pi-\alpha)=-\cos\alpha;$$
$$\tan(\pi-\alpha)=-\tan\alpha;\quad \cot(\pi-\alpha)=-\cot\alpha.$$

**Hai cung hơn kém $\pi$:**
$$\sin(\pi+\alpha)=-\sin\alpha;\quad \cos(\pi+\alpha)=-\cos\alpha;$$
$$\tan(\pi+\alpha)=\tan\alpha;\quad \cot(\pi+\alpha)=\cot\alpha.$$

**Hai cung phụ nhau:**
$$\sin\left(\dfrac{\pi}{2}-\alpha\right)=\cos\alpha;\quad \cos\left(\dfrac{\pi}{2}-\alpha\right)=\sin\alpha;$$
$$\tan\left(\dfrac{\pi}{2}-\alpha\right)=\cot\alpha;\quad \cot\left(\dfrac{\pi}{2}-\alpha\right)=\tan\alpha.$$`,
      formula: String.raw`\sin(\pi-\alpha)=\sin\alpha,\qquad \cos(\pi-\alpha)=-\cos\alpha`,
      note: String.raw`Chỉ $\sin$ bù nhau giữ nguyên dấu; $\cos$ bù nhau đổi dấu.`,
    },
  ],

  examples: [
    {
      id: 'vd1',
      title: 'Tính giá trị lượng giác còn lại',
      prompt: String.raw`Cho $\sin\alpha=\dfrac35$ và $\dfrac{\pi}{2}<\alpha<\pi$. Tính $\cos\alpha$, $\tan\alpha$, $\cot\alpha$.`,
      steps: [
        String.raw`$\cos^2\alpha=1-\sin^2\alpha=1-\dfrac{9}{25}=\dfrac{16}{25}$.`,
        String.raw`Vì $\alpha$ thuộc góc phần tư thứ hai nên $\cos\alpha<0$, do đó $\cos\alpha=-\dfrac45$.`,
        String.raw`$\tan\alpha=\dfrac{\sin\alpha}{\cos\alpha}=\dfrac{3/5}{-4/5}=-\dfrac34$.`,
        String.raw`$\cot\alpha=\dfrac{1}{\tan\alpha}=-\dfrac43$.`,
      ],
      answer: String.raw`$\cos\alpha=-\dfrac45$; $\tan\alpha=-\dfrac34$; $\cot\alpha=-\dfrac43$.`,
    },
    {
      id: 'vd2',
      title: 'Dùng tính tuần hoàn',
      prompt: String.raw`Tính $\sin\dfrac{13\pi}{6}$.`,
      steps: [
        String.raw`$\dfrac{13\pi}{6}=\dfrac{\pi}{6}+2\pi$.`,
        String.raw`$\sin\left(\dfrac{\pi}{6}+2\pi\right)=\sin\dfrac{\pi}{6}=\dfrac12$.`,
      ],
      answer: String.raw`$\dfrac12$.`,
    },
    {
      id: 'vd3',
      title: 'Cung đối nhau',
      prompt: String.raw`Tính $\cos\left(-\dfrac{\pi}{3}\right)$.`,
      steps: [
        String.raw`$\cos(-\alpha)=\cos\alpha$ nên $\cos\left(-\dfrac{\pi}{3}\right)=\cos\dfrac{\pi}{3}$.`,
        String.raw`$\cos\dfrac{\pi}{3}=\dfrac12$.`,
      ],
      answer: String.raw`$\dfrac12$.`,
    },
    {
      id: 'vd4',
      title: 'Cung bù nhau',
      prompt: String.raw`Tính $\tan\dfrac{3\pi}{4}$.`,
      steps: [
        String.raw`$\dfrac{3\pi}{4}=\pi-\dfrac{\pi}{4}$.`,
        String.raw`$\tan(\pi-\alpha)=-\tan\alpha$ nên $\tan\dfrac{3\pi}{4}=-\tan\dfrac{\pi}{4}$.`,
        String.raw`$-\tan\dfrac{\pi}{4}=-1$.`,
      ],
      answer: String.raw`$-1$.`,
    },
    {
      id: 'vd5',
      title: 'Rút gọn biểu thức',
      prompt: String.raw`Rút gọn $A=\sin^2\alpha+\cos^2\alpha+\tan^2\alpha$.`,
      steps: [
        String.raw`$\sin^2\alpha+\cos^2\alpha=1$.`,
        String.raw`$A=1+\tan^2\alpha=\dfrac{1}{\cos^2\alpha}$.`,
      ],
      answer: String.raw`$A=\dfrac{1}{\cos^2\alpha}$.`,
    },
  ],

  exercises: [
    {
      id: 'bt1',
      prompt: String.raw`Cho $\cos\alpha=\dfrac12$ và $0<\alpha<\dfrac{\pi}{2}$. Tính $\sin\alpha$.`,
      solution: String.raw`$\sin^2\alpha=1-\cos^2\alpha=1-\dfrac14=\dfrac34$. Vì $\alpha$ nhọn nên $\sin\alpha>0$, do đó $\sin\alpha=\dfrac{\sqrt3}{2}$.`,
    },
    {
      id: 'bt2',
      prompt: String.raw`Cho $\sin\alpha=\dfrac45$ và $0<\alpha<\dfrac{\pi}{2}$. Tính $\cos\alpha$.`,
      solution: String.raw`$\cos^2\alpha=1-\dfrac{16}{25}=\dfrac{9}{25}$. Vì $\alpha$ nhọn nên $\cos\alpha=\dfrac35$.`,
    },
    {
      id: 'bt3',
      prompt: String.raw`Tính $\sin\dfrac{7\pi}{6}$.`,
      solution: String.raw`$\dfrac{7\pi}{6}=\pi+\dfrac{\pi}{6}$ nên $\sin\dfrac{7\pi}{6}=-\sin\dfrac{\pi}{6}=-\dfrac12$.`,
    },
    {
      id: 'bt4',
      prompt: String.raw`Tính $\cos\dfrac{5\pi}{3}$.`,
      solution: String.raw`$\dfrac{5\pi}{3}=2\pi-\dfrac{\pi}{3}$ nên $\cos\dfrac{5\pi}{3}=\cos\dfrac{\pi}{3}=\dfrac12$.`,
    },
    {
      id: 'bt5',
      prompt: String.raw`Tính $\tan\dfrac{5\pi}{4}$.`,
      solution: String.raw`$\dfrac{5\pi}{4}=\pi+\dfrac{\pi}{4}$ nên $\tan\dfrac{5\pi}{4}=\tan\dfrac{\pi}{4}=1$.`,
    },
    {
      id: 'bt6',
      prompt: String.raw`Rút gọn $B=\sin^2\alpha+\cos^2\alpha$.`,
      solution: String.raw`Theo công thức cơ bản, $B=1$.`,
    },
  ],

  quiz: [
    {
      id: 'q1',
      question: 'Hệ thức nào sau đây đúng với mọi $\\alpha$?',
      options: [
        String.raw`$\sin^2\alpha+\cos^2\alpha=1$`,
        String.raw`$\sin^2\alpha-\cos^2\alpha=1$`,
        String.raw`$\sin\alpha+\cos\alpha=1$`,
        String.raw`$\sin^2\alpha+\cos^2\alpha=0$`,
      ],
      answer: 0,
      explanation: 'Đây là hệ thức lượng giác cơ bản.',
    },
    {
      id: 'q2',
      question: String.raw`Với $\cos\alpha\ne0$, $\tan\alpha$ bằng`,
      options: [
        String.raw`$\dfrac{\cos\alpha}{\sin\alpha}$`,
        String.raw`$\dfrac{\sin\alpha}{\cos\alpha}$`,
        String.raw`$\sin\alpha\cos\alpha$`,
        String.raw`$\dfrac{1}{\cos\alpha}$`,
      ],
      answer: 1,
      explanation: String.raw`$\tan\alpha=\dfrac{\sin\alpha}{\cos\alpha}$.`,
    },
    {
      id: 'q3',
      question: String.raw`Với $\sin\alpha\ne0$, $\cot\alpha$ bằng`,
      options: [
        String.raw`$\dfrac{\sin\alpha}{\cos\alpha}$`,
        String.raw`$\dfrac{1}{\sin\alpha}$`,
        String.raw`$\dfrac{\cos\alpha}{\sin\alpha}$`,
        String.raw`$\dfrac{1}{\cos\alpha}$`,
      ],
      answer: 2,
      explanation: String.raw`$\cot\alpha=\dfrac{\cos\alpha}{\sin\alpha}$.`,
    },
    {
      id: 'q4',
      question: String.raw`Hệ thức nào sau đây đúng (với điều kiện xác định)?`,
      options: [
        String.raw`$1+\tan^2\alpha=\dfrac{1}{\sin^2\alpha}$`,
        String.raw`$1+\cot^2\alpha=\dfrac{1}{\cos^2\alpha}$`,
        String.raw`$1+\tan^2\alpha=\dfrac{1}{\cos^2\alpha}$`,
        String.raw`$1-\tan^2\alpha=\dfrac{1}{\cos^2\alpha}$`,
      ],
      answer: 2,
      explanation: String.raw`Chia $\sin^2\alpha+\cos^2\alpha=1$ cho $\cos^2\alpha$ được $1+\tan^2\alpha=\dfrac{1}{\cos^2\alpha}$.`,
    },
    {
      id: 'q5',
      question: String.raw`Với mọi số nguyên $k$, $\sin(\alpha+k2\pi)$ bằng`,
      options: [
        String.raw`$\sin\alpha$`,
        String.raw`$-\sin\alpha$`,
        String.raw`$\cos\alpha$`,
        String.raw`$-\cos\alpha$`,
      ],
      answer: 0,
      explanation: 'Hàm sin tuần hoàn với chu kì $2\\pi$.',
    },
    {
      id: 'q6',
      question: String.raw`$\cos(-\alpha)$ bằng`,
      options: [
        String.raw`$-\cos\alpha$`,
        String.raw`$\cos\alpha$`,
        String.raw`$\sin\alpha$`,
        String.raw`$-\sin\alpha$`,
      ],
      answer: 1,
      explanation: 'Hàm cos là hàm chẵn nên $\\cos(-\\alpha)=\\cos\\alpha$.',
    },
    {
      id: 'q7',
      question: String.raw`$\sin(\pi-\alpha)$ bằng`,
      options: [
        String.raw`$-\sin\alpha$`,
        String.raw`$\cos\alpha$`,
        String.raw`$\sin\alpha$`,
        String.raw`$-\cos\alpha$`,
      ],
      answer: 2,
      explanation: 'Hai cung bù nhau có sin bằng nhau.',
    },
    {
      id: 'q8',
      question: String.raw`$\tan(\pi+\alpha)$ bằng`,
      options: [
        String.raw`$-\tan\alpha$`,
        String.raw`$\cot\alpha$`,
        String.raw`$-\cot\alpha$`,
        String.raw`$\tan\alpha$`,
      ],
      answer: 3,
      explanation: 'Hàm tan tuần hoàn với chu kì $\\pi$.',
    },
  ],

  trueFalse: [
    {
      id: 'tf1',
      stem: 'Các khẳng định về giá trị lượng giác:',
      items: [
        { text: String.raw`$-1\le\sin\alpha\le1$.`, answer: true },
        { text: String.raw`$-1\le\cos\alpha\le1$.`, answer: true },
        { text: String.raw`$\tan\alpha$ xác định với mọi $\alpha$.`, answer: false },
        { text: String.raw`$\cot\alpha$ xác định khi $\alpha\ne k\pi$.`, answer: true },
      ],
      explanation: String.raw`$\tan\alpha$ không xác định khi $\alpha=\dfrac{\pi}{2}+k\pi$.`,
    },
    {
      id: 'tf2',
      stem: 'Các công thức biến đổi góc:',
      items: [
        { text: String.raw`$\sin(\alpha+2\pi)=\sin\alpha$.`, answer: true },
        { text: String.raw`$\cos(\alpha+2\pi)=\cos\alpha$.`, answer: true },
        { text: String.raw`$\tan(\alpha+\pi)=\tan\alpha$.`, answer: true },
        { text: String.raw`$\sin(-\alpha)=\sin\alpha$.`, answer: false },
      ],
      explanation: String.raw`Hàm sin là hàm lẻ nên $\sin(-\alpha)=-\sin\alpha$.`,
    },
    {
      id: 'tf3',
      stem: String.raw`Cho $\alpha$ thỏa mãn các biểu thức xác định.`,
      items: [
        { text: String.raw`$\sin^2\alpha-\cos^2\alpha=1$.`, answer: false },
        { text: String.raw`$\tan\alpha\cdot\cot\alpha=1$.`, answer: true },
        { text: String.raw`$1+\cot^2\alpha=\dfrac{1}{\sin^2\alpha}$.`, answer: true },
        { text: String.raw`$\sin(\pi-\alpha)=-\sin\alpha$.`, answer: false },
      ],
      explanation: String.raw`$\sin^2\alpha+\cos^2\alpha=1$, không phải $\sin^2\alpha-\cos^2\alpha=1$; hai cung bù nhau có $\sin(\pi-\alpha)=\sin\alpha$.`,
    },
  ],

  shortAnswer: [
    {
      id: 'sa1',
      question: String.raw`Cho $\sin\alpha=\dfrac35$ và $\alpha$ nhọn. Tính $\cos\alpha$ (nhập số thập phân).`,
      answer: '0.8',
      unit: '',
      explanation: String.raw`$\cos^2\alpha=1-\dfrac{9}{25}=\dfrac{16}{25}$; $\alpha$ nhọn nên $\cos\alpha=\dfrac45$.`,
    },
    {
      id: 'sa2',
      question: String.raw`Tính $\sin\dfrac{5\pi}{6}$ (nhập số thập phân).`,
      answer: '0.5',
      unit: '',
      explanation: String.raw`$\sin\dfrac{5\pi}{6}=\sin\dfrac{\pi}{6}=\dfrac12=0{,}5$.`,
    },
    {
      id: 'sa3',
      question: String.raw`Tính $\cos\dfrac{2\pi}{3}$ (nhập số thập phân).`,
      answer: '-0.5',
      unit: '',
      explanation: String.raw`$\cos\dfrac{2\pi}{3}=\cos\left(\pi-\dfrac{\pi}{3}\right)=-\cos\dfrac{\pi}{3}=-\dfrac12=-0{,}5$.`,
    },
    {
      id: 'sa4',
      question: String.raw`Tính $\tan\dfrac{\pi}{4}$.`,
      answer: '1',
      unit: '',
      explanation: String.raw`$\tan\dfrac{\pi}{4}=1$.`,
    },
  ],
}

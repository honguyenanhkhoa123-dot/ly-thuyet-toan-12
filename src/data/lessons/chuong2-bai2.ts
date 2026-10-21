import type { Lesson } from '../types'

export const chuong2Bai2: Lesson = {
  id: 'bai-2',
  chapterId: 'chuong-2',
  title: 'Công thức lượng giác',
  summary: 'Công thức cộng, công thức nhân đôi, hạ bậc, biến đổi tổng thành tích và tích thành tổng.',
  minutes: 24,

  theory: [
    {
      subtitle: 'Công thức cộng',
      content: String.raw`Với mọi góc lượng giác $a,\ b$, ta có:
$$\cos(a-b)=\cos a\cos b+\sin a\sin b;$$
$$\cos(a+b)=\cos a\cos b-\sin a\sin b;$$
$$\sin(a-b)=\sin a\cos b-\cos a\sin b;$$
$$\sin(a+b)=\sin a\cos b+\cos a\sin b;$$
$$\tan(a-b)=\dfrac{\tan a-\tan b}{1+\tan a\tan b};$$
$$\tan(a+b)=\dfrac{\tan a+\tan b}{1-\tan a\tan b}.$$`,
      formula: String.raw`\cos(a+b)=\cos a\cos b-\sin a\sin b`,
      note: String.raw`Công thức cộng là gốc của các công thức nhân đôi và hạ bậc.`,
    },
    {
      subtitle: 'Công thức nhân đôi',
      content: String.raw`Với mọi góc lượng giác $a$ (khi các biểu thức xác định):
$$\cos2a=\cos^2a-\sin^2a=2\cos^2a-1=1-2\sin^2a;$$
$$\sin2a=2\sin a\cos a;$$
$$\tan2a=\dfrac{2\tan a}{1-\tan^2a}.$$`,
      formula: String.raw`\sin2a=2\sin a\cos a`,
      note: String.raw`Ba dạng của $\cos2a$ được dùng tùy theo dữ kiện đã biết.`,
    },
    {
      subtitle: 'Công thức hạ bậc',
      content: String.raw`Từ công thức nhân đôi, ta có:
$$\cos^2a=\dfrac{1+\cos2a}{2};\qquad \sin^2a=\dfrac{1-\cos2a}{2};$$
$$\tan^2a=\dfrac{1-\cos2a}{1+\cos2a}.$$`,
      formula: String.raw`\sin^2a=\dfrac{1-\cos2a}{2}`,
      note: String.raw`Công thức hạ bậc giúp biến đổi bình phương lượng giác thành bậc nhất.`,
    },
    {
      subtitle: 'Công thức biến đổi tổng thành tích',
      content: String.raw`$$\cos a+\cos b=2\cos\dfrac{a+b}{2}\cos\dfrac{a-b}{2};$$
$$\cos a-\cos b=-2\sin\dfrac{a+b}{2}\sin\dfrac{a-b}{2};$$
$$\sin a+\sin b=2\sin\dfrac{a+b}{2}\cos\dfrac{a-b}{2};$$
$$\sin a-\sin b=2\cos\dfrac{a+b}{2}\sin\dfrac{a-b}{2}.$$`,
      formula: String.raw`\sin a+\sin b=2\sin\dfrac{a+b}{2}\cos\dfrac{a-b}{2}`,
      note: String.raw`Nhớ dấu trừ ở công thức $\cos a-\cos b$.`,
    },
    {
      subtitle: 'Công thức biến đổi tích thành tổng',
      content: String.raw`$$\cos a\cos b=\dfrac12\left[\cos(a+b)+\cos(a-b)\right];$$
$$\sin a\cos b=\dfrac12\left[\sin(a+b)+\sin(a-b)\right];$$
$$\sin a\sin b=-\dfrac12\left[\cos(a+b)-\cos(a-b)\right].$$`,
      formula: String.raw`\sin a\cos b=\dfrac12\left[\sin(a+b)+\sin(a-b)\right]`,
      note: String.raw`Công thức tích thành tổng thường dùng để rút gọn hoặc tính tích phân lượng giác.`,
    },
  ],

  examples: [
    {
      id: 'vd1',
      title: 'Dùng công thức cộng',
      prompt: String.raw`Tính $\cos75^\circ$.`,
      steps: [
        String.raw`$75^\circ=45^\circ+30^\circ$.`,
        String.raw`$\cos75^\circ=\cos45^\circ\cos30^\circ-\sin45^\circ\sin30^\circ$.`,
        String.raw`$=\dfrac{\sqrt2}{2}\cdot\dfrac{\sqrt3}{2}-\dfrac{\sqrt2}{2}\cdot\dfrac12=\dfrac{\sqrt6-\sqrt2}{4}$.`,
      ],
      answer: String.raw`$\dfrac{\sqrt6-\sqrt2}{4}$.`,
    },
    {
      id: 'vd2',
      title: 'Công thức nhân đôi',
      prompt: String.raw`Cho $\sin a=\dfrac35$ và $\cos a=\dfrac45$. Tính $\sin2a$.`,
      steps: [
        String.raw`$\sin2a=2\sin a\cos a$.`,
        String.raw`$=2\cdot\dfrac35\cdot\dfrac45=\dfrac{24}{25}$.`,
      ],
      answer: String.raw`$\dfrac{24}{25}$.`,
    },
    {
      id: 'vd3',
      title: 'Công thức hạ bậc',
      prompt: String.raw`Tính $\cos^2\dfrac{\pi}{8}$.`,
      steps: [
        String.raw`$\cos^2\dfrac{\pi}{8}=\dfrac{1+\cos\dfrac{\pi}{4}}{2}$.`,
        String.raw`$=\dfrac{1+\dfrac{\sqrt2}{2}}{2}=\dfrac{2+\sqrt2}{4}$.`,
      ],
      answer: String.raw`$\dfrac{2+\sqrt2}{4}$.`,
    },
    {
      id: 'vd4',
      title: 'Tổng thành tích',
      prompt: String.raw`Rút gọn $\sin5x+\sin3x$.`,
      steps: [
        String.raw`$\sin5x+\sin3x=2\sin\dfrac{5x+3x}{2}\cos\dfrac{5x-3x}{2}$.`,
        String.raw`$=2\sin4x\cos x$.`,
      ],
      answer: String.raw`$2\sin4x\cos x$.`,
    },
    {
      id: 'vd5',
      title: 'Tích thành tổng',
      prompt: String.raw`Rút gọn $\sin3x\cos x$.`,
      steps: [
        String.raw`$\sin3x\cos x=\dfrac12\left[\sin(3x+x)+\sin(3x-x)\right]$.`,
        String.raw`$=\dfrac12(\sin4x+\sin2x)$.`,
      ],
      answer: String.raw`$\dfrac12(\sin4x+\sin2x)$.`,
    },
  ],

  exercises: [
    {
      id: 'bt1',
      prompt: String.raw`Viết công thức $\cos(a+b)$ theo $\sin a,\ \cos a,\ \sin b,\ \cos b$.`,
      solution: String.raw`$\cos(a+b)=\cos a\cos b-\sin a\sin b$.`,
    },
    {
      id: 'bt2',
      prompt: String.raw`Cho $\sin a=\dfrac45$ và $\cos a=\dfrac35$. Tính $\sin2a$.`,
      solution: String.raw`$\sin2a=2\sin a\cos a=2\cdot\dfrac45\cdot\dfrac35=\dfrac{24}{25}$.`,
    },
    {
      id: 'bt3',
      prompt: String.raw`Cho $\cos a=\dfrac13$. Tính $\cos2a$.`,
      solution: String.raw`$\cos2a=2\cos^2a-1=2\cdot\dfrac19-1=-\dfrac79$.`,
    },
    {
      id: 'bt4',
      prompt: String.raw`Hạ bậc $\sin^2a$.`,
      solution: String.raw`$\sin^2a=\dfrac{1-\cos2a}{2}$.`,
    },
    {
      id: 'bt5',
      prompt: String.raw`Rút gọn $\cos5x+\cos3x$.`,
      solution: String.raw`$\cos5x+\cos3x=2\cos\dfrac{5x+3x}{2}\cos\dfrac{5x-3x}{2}=2\cos4x\cos x$.`,
    },
    {
      id: 'bt6',
      prompt: String.raw`Rút gọn $\sin5x\cos3x$.`,
      solution: String.raw`$\sin5x\cos3x=\dfrac12\left[\sin8x+\sin2x\right]$.`,
    },
  ],

  quiz: [
    {
      id: 'q1',
      question: String.raw`$\cos(a+b)$ bằng`,
      options: [
        String.raw`$\cos a\cos b+\sin a\sin b$`,
        String.raw`$\sin a\cos b+\cos a\sin b$`,
        String.raw`$\cos a\cos b-\sin a\sin b$`,
        String.raw`$\sin a\cos b-\cos a\sin b$`,
      ],
      answer: 2,
      explanation: 'Công thức cộng của cosin: $\\cos(a+b)=\\cos a\\cos b-\\sin a\\sin b$.',
    },
    {
      id: 'q2',
      question: String.raw`$\sin(a+b)$ bằng`,
      options: [
        String.raw`$\sin a\cos b-\cos a\sin b$`,
        String.raw`$\sin a\cos b+\cos a\sin b$`,
        String.raw`$\cos a\cos b-\sin a\sin b$`,
        String.raw`$\cos a\cos b+\sin a\sin b$`,
      ],
      answer: 1,
      explanation: 'Công thức cộng của sin: $\\sin(a+b)=\\sin a\\cos b+\\cos a\\sin b$.',
    },
    {
      id: 'q3',
      question: String.raw`$\sin2a$ bằng`,
      options: [
        String.raw`$2\sin a$`,
        String.raw`$\sin a\cos a$`,
        String.raw`$2\sin a\cos a$`,
        String.raw`$\sin^2a-\cos^2a$`,
      ],
      answer: 2,
      explanation: 'Công thức nhân đôi: $\\sin2a=2\\sin a\\cos a$.',
    },
    {
      id: 'q4',
      question: String.raw`$\cos2a$ bằng`,
      options: [
        String.raw`$1-2\cos^2a$`,
        String.raw`$2\sin^2a-1$`,
        String.raw`$\cos^2a-\sin^2a+1$`,
        String.raw`$2\cos^2a-1$`,
      ],
      answer: 3,
      explanation: 'Một dạng của công thức nhân đôi: $\\cos2a=2\\cos^2a-1$.',
    },
    {
      id: 'q5',
      question: String.raw`$\cos^2a$ bằng`,
      options: [
        String.raw`$\dfrac{1+\cos2a}{2}$`,
        String.raw`$\dfrac{1-\cos2a}{2}$`,
        String.raw`$\dfrac{1+\sin2a}{2}$`,
        String.raw`$\dfrac{1-\sin2a}{2}$`,
      ],
      answer: 0,
      explanation: 'Công thức hạ bậc: $\\cos^2a=\\dfrac{1+\\cos2a}{2}$.',
    },
    {
      id: 'q6',
      question: String.raw`$\sin^2a$ bằng`,
      options: [
        String.raw`$\dfrac{1+\cos2a}{2}$`,
        String.raw`$\dfrac{1-\cos2a}{2}$`,
        String.raw`$\dfrac{1+\sin2a}{2}$`,
        String.raw`$\dfrac{1-\sin2a}{2}$`,
      ],
      answer: 1,
      explanation: 'Công thức hạ bậc: $\\sin^2a=\\dfrac{1-\\cos2a}{2}$.',
    },
    {
      id: 'q7',
      question: String.raw`$\cos a+\cos b$ bằng`,
      options: [
        String.raw`$2\cos\dfrac{a+b}{2}\cos\dfrac{a-b}{2}$`,
        String.raw`$2\sin\dfrac{a+b}{2}\sin\dfrac{a-b}{2}$`,
        String.raw`$2\sin\dfrac{a+b}{2}\cos\dfrac{a-b}{2}$`,
        String.raw`$-2\sin\dfrac{a+b}{2}\sin\dfrac{a-b}{2}$`,
      ],
      answer: 0,
      explanation: 'Công thức biến đổi tổng thành tích cho cosin.',
    },
    {
      id: 'q8',
      question: String.raw`$\sin a\cos b$ bằng`,
      options: [
        String.raw`$\dfrac12\left[\cos(a+b)+\cos(a-b)\right]$`,
        String.raw`$\dfrac12\left[\sin(a+b)+\sin(a-b)\right]$`,
        String.raw`$-\dfrac12\left[\cos(a+b)-\cos(a-b)\right]$`,
        String.raw`$\dfrac12\left[\cos(a+b)-\cos(a-b)\right]$`,
      ],
      answer: 1,
      explanation: 'Công thức biến đổi tích thành tổng của $\\sin a\\cos b$.',
    },
  ],

  trueFalse: [
    {
      id: 'tf1',
      stem: 'Các công thức cộng:',
      items: [
        { text: String.raw`$\cos(a-b)=\cos a\cos b+\sin a\sin b$.`, answer: true },
        { text: String.raw`$\sin(a-b)=\sin a\cos b-\cos a\sin b$.`, answer: true },
        { text: String.raw`$\cos(a+b)=\cos a\cos b+\sin a\sin b$.`, answer: false },
        { text: String.raw`$\sin(a+b)=\sin a\cos b-\cos a\sin b$.`, answer: false },
      ],
      explanation: String.raw`$\cos(a+b)=\cos a\cos b-\sin a\sin b$ và $\sin(a+b)=\sin a\cos b+\cos a\sin b$.`,
    },
    {
      id: 'tf2',
      stem: 'Các công thức nhân đôi và hạ bậc:',
      items: [
        { text: String.raw`$\sin2a=2\sin a\cos a$.`, answer: true },
        { text: String.raw`$\cos2a=2\cos^2a-1$.`, answer: true },
        { text: String.raw`$\cos^2a=\dfrac{1-\cos2a}{2}$.`, answer: false },
        { text: String.raw`$\sin^2a=\dfrac{1-\cos2a}{2}$.`, answer: true },
      ],
      explanation: String.raw`$\cos^2a=\dfrac{1+\cos2a}{2}$, không phải $\dfrac{1-\cos2a}{2}$.`,
    },
    {
      id: 'tf3',
      stem: 'Các công thức biến đổi:',
      items: [
        { text: String.raw`$\sin a+\sin b=2\sin\dfrac{a+b}{2}\sin\dfrac{a-b}{2}$.`, answer: false },
        { text: String.raw`$\cos a-\cos b=-2\sin\dfrac{a+b}{2}\sin\dfrac{a-b}{2}$.`, answer: true },
        { text: String.raw`$\sin a\sin b=\dfrac12\left[\cos(a+b)-\cos(a-b)\right]$.`, answer: false },
        { text: String.raw`$\cos a\cos b=\dfrac12\left[\cos(a+b)+\cos(a-b)\right]$.`, answer: true },
      ],
      explanation: String.raw`$\sin a+\sin b=2\sin\dfrac{a+b}{2}\cos\dfrac{a-b}{2}$ và $\sin a\sin b=-\dfrac12\left[\cos(a+b)-\cos(a-b)\right]$.`,
    },
  ],

  shortAnswer: [
    {
      id: 'sa1',
      question: String.raw`Tính $\cos120^\circ$ (nhập số thập phân).`,
      answer: '-0.5',
      unit: '',
      explanation: String.raw`$\cos120^\circ=\cos(180^\circ-60^\circ)=-\cos60^\circ=-\dfrac12=-0{,}5$.`,
    },
    {
      id: 'sa2',
      question: String.raw`Tính $\sin60^\circ$ (nhập số thập phân, làm tròn 3 chữ số).`,
      answer: '0.866',
      unit: '',
      explanation: String.raw`$\sin60^\circ=\dfrac{\sqrt3}{2}\approx0{,}866$.`,
    },
    {
      id: 'sa3',
      question: String.raw`Tính $\cos^230^\circ$ (nhập số thập phân).`,
      answer: '0.75',
      unit: '',
      explanation: String.raw`$\cos30^\circ=\dfrac{\sqrt3}{2}$ nên $\cos^230^\circ=\dfrac34=0{,}75$.`,
    },
    {
      id: 'sa4',
      question: String.raw`Tính $2\sin15^\circ\cos15^\circ$ (nhập số thập phân).`,
      answer: '0.5',
      unit: '',
      explanation: String.raw`$2\sin15^\circ\cos15^\circ=\sin30^\circ=\dfrac12=0{,}5$.`,
    },
  ],
}

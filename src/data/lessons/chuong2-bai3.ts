import type { Lesson } from '../types'

export const chuong2Bai3: Lesson = {
  id: 'bai-3',
  chapterId: 'chuong-2',
  title: 'Hàm số lượng giác',
  summary: 'Tập xác định, tập giá trị, tính chẵn lẻ, tính tuần hoàn và sự biến thiên của các hàm số lượng giác.',
  minutes: 24,

  theory: [
    {
      subtitle: 'Hàm số y = sin x',
      content: String.raw`Hàm số $y=\sin x$ có:
- Tập xác định: $\mathcal{D}=\mathbb{R}$.
- Tập giá trị: $T=[-1;1]$.
- Là hàm số lẻ.
- Tuần hoàn với chu kì $T=2\pi$; hàm số $y=\sin(ax+b)$ tuần hoàn với chu kì $T=\dfrac{2\pi}{|a|}$.
- Đồng biến trên $\left(-\dfrac{\pi}{2}+k2\pi;\dfrac{\pi}{2}+k2\pi\right)$, nghịch biến trên $\left(\dfrac{\pi}{2}+k2\pi;\dfrac{3\pi}{2}+k2\pi\right)$.`,
      formula: String.raw`y=\sin x:\ \mathcal{D}=\mathbb{R},\ T=[-1;1]`,
      note: String.raw`Đồ thị hàm sin nhận gốc tọa độ làm tâm đối xứng.`,
    },
    {
      subtitle: 'Hàm số y = cos x',
      content: String.raw`Hàm số $y=\cos x$ có:
- Tập xác định: $\mathcal{D}=\mathbb{R}$.
- Tập giá trị: $T=[-1;1]$.
- Là hàm số chẵn.
- Tuần hoàn với chu kì $T=2\pi$; hàm số $y=\cos(ax+b)$ tuần hoàn với chu kì $T=\dfrac{2\pi}{|a|}$.
- Đồng biến trên $(-\pi+k2\pi;k2\pi)$, nghịch biến trên $(k2\pi;\pi+k2\pi)$.`,
      formula: String.raw`y=\cos x:\ \mathcal{D}=\mathbb{R},\ T=[-1;1]`,
      note: String.raw`Đồ thị hàm cos nhận trục $Oy$ làm trục đối xứng.`,
    },
    {
      subtitle: 'Hàm số y = tan x',
      content: String.raw`Hàm số $y=\tan x$ có:
- Tập xác định: $\mathcal{D}=\mathbb{R}\setminus\left\{\dfrac{\pi}{2}+k\pi\mid k\in\mathbb{Z}\right\}$.
- Tập giá trị: $T=\mathbb{R}$.
- Là hàm số lẻ.
- Tuần hoàn với chu kì $T=\pi$; hàm số $y=\tan(ax+b)$ tuần hoàn với chu kì $T=\dfrac{\pi}{|a|}$.
- Đồng biến trên $\left(-\dfrac{\pi}{2}+k\pi;\dfrac{\pi}{2}+k\pi\right)$.`,
      formula: String.raw`y=\tan x:\ x\ne\dfrac{\pi}{2}+k\pi`,
      note: String.raw`Đồ thị có các đường tiệm cận đứng $x=\dfrac{\pi}{2}+k\pi$.`,
    },
    {
      subtitle: 'Hàm số y = cot x',
      content: String.raw`Hàm số $y=\cot x$ có:
- Tập xác định: $\mathcal{D}=\mathbb{R}\setminus\{k\pi\mid k\in\mathbb{Z}\}$.
- Tập giá trị: $T=\mathbb{R}$.
- Là hàm số lẻ.
- Tuần hoàn với chu kì $T=\pi$; hàm số $y=\cot(ax+b)$ tuần hoàn với chu kì $T=\dfrac{\pi}{|a|}$.
- Nghịch biến trên $(k\pi;\pi+k\pi)$.`,
      formula: String.raw`y=\cot x:\ x\ne k\pi`,
      note: String.raw`Đồ thị có các đường tiệm cận đứng $x=k\pi$.`,
    },
    {
      subtitle: 'Cách tìm tập xác định và chu kì',
      content: String.raw`- Với $y=\tan u(x)$: cần $u(x)\ne\dfrac{\pi}{2}+k\pi$.
- Với $y=\cot u(x)$: cần $u(x)\ne k\pi$.
- Với $y=\sin(ax+b)$ hoặc $y=\cos(ax+b)$: chu kì là $\dfrac{2\pi}{|a|}$.
- Với $y=\tan(ax+b)$ hoặc $y=\cot(ax+b)$: chu kì là $\dfrac{\pi}{|a|}$.`,
      formula: String.raw`T_{\sin,\cos}=\dfrac{2\pi}{|a|},\qquad T_{\tan,\cot}=\dfrac{\pi}{|a|}`,
      note: String.raw`Hệ số $a$ càng lớn thì chu kì càng nhỏ.`,
    },
  ],

  examples: [
    {
      id: 'vd1',
      title: 'Tập xác định của hàm tan',
      prompt: String.raw`Tìm tập xác định của hàm số $y=\tan2x$.`,
      steps: [
        String.raw`Hàm số xác định khi $2x\ne\dfrac{\pi}{2}+k\pi$.`,
        String.raw`Suy ra $x\ne\dfrac{\pi}{4}+\dfrac{k\pi}{2}$.`,
      ],
      answer: String.raw`$\mathcal{D}=\mathbb{R}\setminus\left\{\dfrac{\pi}{4}+\dfrac{k\pi}{2}\right\}$.`,
    },
    {
      id: 'vd2',
      title: 'Chu kì của hàm sin',
      prompt: String.raw`Tìm chu kì của hàm số $y=\sin3x$.`,
      steps: [
        String.raw`Hàm số có dạng $\sin(ax)$ với $a=3$.`,
        String.raw`Chu kì $T=\dfrac{2\pi}{|3|}=\dfrac{2\pi}{3}$.`,
      ],
      answer: String.raw`$T=\dfrac{2\pi}{3}$.`,
    },
    {
      id: 'vd3',
      title: 'Chu kì của hàm tan',
      prompt: String.raw`Tìm chu kì của hàm số $y=\tan\dfrac{x}{2}$.`,
      steps: [
        String.raw`Hàm số có dạng $\tan(ax)$ với $a=\dfrac12$.`,
        String.raw`Chu kì $T=\dfrac{\pi}{\left|\frac12\right|}=2\pi$.`,
      ],
      answer: String.raw`$T=2\pi$.`,
    },
    {
      id: 'vd4',
      title: 'Giá trị lớn nhất, nhỏ nhất',
      prompt: String.raw`Tìm giá trị lớn nhất và nhỏ nhất của $y=2\sin x+1$.`,
      steps: [
        String.raw`Vì $-1\le\sin x\le1$ nên $-2\le2\sin x\le2$.`,
        String.raw`Cộng $1$: $-1\le2\sin x+1\le3$.`,
      ],
      answer: String.raw`$\max y=3$; $\min y=-1$.`,
    },
    {
      id: 'vd5',
      title: 'Tập xác định của hàm cot',
      prompt: String.raw`Tìm tập xác định của hàm số $y=\cot\left(x-\dfrac{\pi}{4}\right)$.`,
      steps: [
        String.raw`Hàm số xác định khi $x-\dfrac{\pi}{4}\ne k\pi$.`,
        String.raw`Suy ra $x\ne\dfrac{\pi}{4}+k\pi$.`,
      ],
      answer: String.raw`$\mathcal{D}=\mathbb{R}\setminus\left\{\dfrac{\pi}{4}+k\pi\right\}$.`,
    },
  ],

  exercises: [
    {
      id: 'bt1',
      prompt: String.raw`Tìm tập xác định của hàm số $y=\tan x$.`,
      solution: String.raw`Hàm số xác định khi $x\ne\dfrac{\pi}{2}+k\pi$.`,
    },
    {
      id: 'bt2',
      prompt: String.raw`Tìm tập xác định của hàm số $y=\cot2x$.`,
      solution: String.raw`Hàm số xác định khi $2x\ne k\pi$, tức $x\ne\dfrac{k\pi}{2}$.`,
    },
    {
      id: 'bt3',
      prompt: String.raw`Tìm chu kì của hàm số $y=\cos4x$.`,
      solution: String.raw`$T=\dfrac{2\pi}{4}=\dfrac{\pi}{2}$.`,
    },
    {
      id: 'bt4',
      prompt: String.raw`Tìm chu kì của hàm số $y=\tan3x$.`,
      solution: String.raw`$T=\dfrac{\pi}{3}$.`,
    },
    {
      id: 'bt5',
      prompt: String.raw`Tìm giá trị lớn nhất của hàm số $y=3\sin x-2$.`,
      solution: String.raw`Vì $\sin x\le1$ nên $3\sin x-2\le3-2=1$. Giá trị lớn nhất là $1$.`,
    },
    {
      id: 'bt6',
      prompt: String.raw`Tìm giá trị nhỏ nhất của hàm số $y=1-2\cos x$.`,
      solution: String.raw`Vì $\cos x\le1$ nên $1-2\cos x\ge1-2=-1$. Giá trị nhỏ nhất là $-1$.`,
    },
  ],

  quiz: [
    {
      id: 'q1',
      question: String.raw`Tập xác định của hàm số $y=\sin x$ là`,
      options: [
        String.raw`$[0;2\pi]$`,
        String.raw`$\mathbb{R}$`,
        String.raw`$[-1;1]$`,
        String.raw`$\mathbb{R}\setminus\{k\pi\}$`,
      ],
      answer: 1,
      explanation: 'Hàm sin xác định với mọi số thực.',
    },
    {
      id: 'q2',
      question: String.raw`Tập giá trị của hàm số $y=\sin x$ là`,
      options: [
        String.raw`$\mathbb{R}$`,
        String.raw`$[0;1]$`,
        String.raw`$[-1;1]$`,
        String.raw`$(-1;1)$`,
      ],
      answer: 2,
      explanation: 'Sin luôn nhận giá trị trong đoạn $[-1;1]$.',
    },
    {
      id: 'q3',
      question: String.raw`Tập xác định của hàm số $y=\tan x$ là`,
      options: [
        String.raw`$\mathbb{R}\setminus\left\{\dfrac{\pi}{2}+k\pi\right\}$`,
        String.raw`$\mathbb{R}\setminus\{k\pi\}$`,
        String.raw`$(0;+\infty)$`,
        String.raw`$[-1;1]$`,
      ],
      answer: 0,
      explanation: 'Tan không xác định tại $x=\\dfrac{\\pi}{2}+k\\pi$.',
    },
    {
      id: 'q4',
      question: String.raw`Tập xác định của hàm số $y=\cot x$ là`,
      options: [
        String.raw`$\mathbb{R}\setminus\{k\pi\}$`,
        String.raw`$\mathbb{R}\setminus\left\{\dfrac{\pi}{2}+k\pi\right\}$`,
        String.raw`$\mathbb{R}$`,
        String.raw`$(0;+\infty)$`,
      ],
      answer: 0,
      explanation: 'Cot không xác định tại $x=k\\pi$.',
    },
    {
      id: 'q5',
      question: String.raw`Chu kì tuần hoàn của hàm số $y=\sin(ax+b)$ là`,
      options: [
        String.raw`$\dfrac{\pi}{|a|}$`,
        String.raw`$2\pi$`,
        String.raw`$\pi$`,
        String.raw`$\dfrac{2\pi}{|a|}$`,
      ],
      answer: 3,
      explanation: 'Hàm sin, cos có chu kì $\\dfrac{2\\pi}{|a|}$.',
    },
    {
      id: 'q6',
      question: String.raw`Chu kì tuần hoàn của hàm số $y=\tan(ax+b)$ là`,
      options: [
        String.raw`$\dfrac{2\pi}{|a|}$`,
        String.raw`$2\pi$`,
        String.raw`$\dfrac{\pi}{|a|}$`,
        String.raw`$\pi$`,
      ],
      answer: 2,
      explanation: 'Hàm tan, cot có chu kì $\\dfrac{\\pi}{|a|}$.',
    },
    {
      id: 'q7',
      question: 'Hàm số nào sau đây là hàm số chẵn?',
      options: [
        String.raw`$y=\sin x$`,
        String.raw`$y=\tan x$`,
        String.raw`$y=\cos x$`,
        String.raw`$y=\cot x$`,
      ],
      answer: 2,
      explanation: 'Trong bốn hàm số, chỉ cosin là hàm chẵn.',
    },
    {
      id: 'q8',
      question: 'Hàm số nào sau đây là hàm số lẻ?',
      options: [
        String.raw`$y=\cos x$`,
        String.raw`$y=\cos^2x$`,
        String.raw`$y=|\sin x|$`,
        String.raw`$y=\sin x$`,
      ],
      answer: 3,
      explanation: 'Sin là hàm lẻ; cos và $|\\sin x|$ là hàm chẵn.',
    },
  ],

  trueFalse: [
    {
      id: 'tf1',
      stem: 'Các khẳng định về tính chất hàm số:',
      items: [
        { text: String.raw`Hàm số $y=\sin x$ là hàm số lẻ.`, answer: true },
        { text: String.raw`Hàm số $y=\cos x$ là hàm số chẵn.`, answer: true },
        { text: String.raw`Hàm số $y=\sin x$ tuần hoàn với chu kì $2\pi$.`, answer: true },
        { text: String.raw`Hàm số $y=\tan x$ tuần hoàn với chu kì $2\pi$.`, answer: false },
      ],
      explanation: String.raw`Hàm $\tan$ tuần hoàn với chu kì $\pi$, không phải $2\pi$.`,
    },
    {
      id: 'tf2',
      stem: 'Các khẳng định về tập xác định và tập giá trị:',
      items: [
        { text: String.raw`$y=\tan x$ xác định khi $x\ne k\pi$.`, answer: false },
        { text: String.raw`$y=\cot x$ xác định khi $x\ne k\pi$.`, answer: true },
        { text: String.raw`Tập giá trị của $y=\tan x$ là $\mathbb{R}$.`, answer: true },
        { text: String.raw`Tập giá trị của $y=\cot x$ là $[-1;1]$.`, answer: false },
      ],
      explanation: String.raw`$y=\tan x$ xác định khi $x\ne\dfrac{\pi}{2}+k\pi$; tập giá trị của $y=\cot x$ là $\mathbb{R}$.`,
    },
    {
      id: 'tf3',
      stem: 'Các khẳng định về chu kì:',
      items: [
        { text: String.raw`$y=\sin3x$ có chu kì $\dfrac{2\pi}{3}$.`, answer: true },
        { text: String.raw`$y=\cos2x$ có chu kì $\pi$.`, answer: true },
        { text: String.raw`$y=\tan2x$ có chu kì $\pi$.`, answer: false },
        { text: String.raw`$y=\cot\dfrac{x}{2}$ có chu kì $\pi$.`, answer: false },
      ],
      explanation: String.raw`$y=\tan2x$ có chu kì $\dfrac{\pi}{2}$; $y=\cot\dfrac{x}{2}$ có chu kì $\dfrac{\pi}{1/2}=2\pi$.`,
    },
  ],

  shortAnswer: [
    {
      id: 'sa1',
      question: String.raw`Tìm giá trị lớn nhất của hàm số $y=2\sin x+3$.`,
      answer: '5',
      unit: '',
      explanation: String.raw`Vì $\sin x\le1$ nên $y\le2+3=5$.`,
    },
    {
      id: 'sa2',
      question: String.raw`Tìm giá trị nhỏ nhất của hàm số $y=3\cos x-1$.`,
      answer: '-4',
      unit: '',
      explanation: String.raw`Vì $\cos x\ge-1$ nên $y\ge-3-1=-4$.`,
    },
    {
      id: 'sa3',
      question: String.raw`Chu kì của hàm số $y=\tan2x$ có dạng $\dfrac{\pi}{k}$. Tìm $k$.`,
      answer: '2',
      unit: '',
      explanation: String.raw`$T=\dfrac{\pi}{2}$ nên $k=2$.`,
    },
    {
      id: 'sa4',
      question: String.raw`Chu kì của hàm số $y=\sin3x$ có dạng $\dfrac{2\pi}{k}$. Tìm $k$.`,
      answer: '3',
      unit: '',
      explanation: String.raw`$T=\dfrac{2\pi}{3}$ nên $k=3$.`,
    },
  ],
}

import type { Lesson } from '../types'

export const chuong4Bai5: Lesson = {
  id: 'bai-5',
  chapterId: 'chuong-4',
  title: 'Phương trình, bất phương trình mũ và logarit',
  summary: 'Phương trình và bất phương trình mũ, logarit cơ bản và cách đưa về cùng cơ số.',
  minutes: 26,

  theory: [
    {
      subtitle: 'Phương trình mũ cơ bản',
      content: String.raw`Cho $a>0,\ a\ne1$. Phương trình
$$a^{f(x)}=b$$
- Vô nghiệm nếu $b\le0$.
- Có nghiệm $f(x)=\log_ab$ nếu $b>0$.

Nếu đưa được về cùng cơ số:
$$a^{f(x)}=a^{g(x)}\iff f(x)=g(x).$$`,
      formula: String.raw`a^{f(x)}=b\iff f(x)=\log_ab\ (b>0)`,
      note: String.raw`Với $b\le0$, phương trình $a^{f(x)}=b$ vô nghiệm vì $a^{f(x)}>0$.`,
    },
    {
      subtitle: 'Bất phương trình mũ',
      content: String.raw`Cho $a>0,\ a\ne1$ và $b>0$. Ta có:
- Nếu $a>1$: $a^{f(x)}>b\iff f(x)>\log_ab$.
- Nếu $0<a<1$: $a^{f(x)}>b\iff f(x)<\log_ab$.

Với cùng cơ số:
- Nếu $a>1$: $a^{f(x)}>a^{g(x)}\iff f(x)>g(x)$.
- Nếu $0<a<1$: $a^{f(x)}>a^{g(x)}\iff f(x)<g(x)$.`,
      formula: String.raw`a>1:\ a^{f}>a^{g}\iff f>g`,
      note: String.raw`Cơ số nhỏ hơn $1$ thì đổi chiều bất đẳng thức.`,
    },
    {
      subtitle: 'Phương trình logarit cơ bản',
      content: String.raw`Cho $a>0,\ a\ne1$. Phương trình
$$\log_af(x)=b$$
có nghiệm khi $f(x)>0$, và khi đó
$$f(x)=a^b.$$

Nếu cùng cơ số:
$$\log_af(x)=\log_ag(x)\iff f(x)=g(x)>0.$$`,
      formula: String.raw`\log_af(x)=b\iff f(x)=a^b\ (f(x)>0)`,
      note: String.raw`Luôn đặt điều kiện biểu thức trong logarit dương trước khi giải.`,
    },
    {
      subtitle: 'Bất phương trình logarit',
      content: String.raw`Cho $a>0,\ a\ne1$. Ta có:
- Nếu $a>1$: $\log_af(x)>b\iff f(x)>a^b$.
- Nếu $0<a<1$: $\log_af(x)>b\iff 0<f(x)<a^b$.

Với cùng cơ số:
- Nếu $a>1$: $\log_af(x)>\log_ag(x)\iff f(x)>g(x)>0$.
- Nếu $0<a<1$: $\log_af(x)>\log_ag(x)\iff 0<f(x)<g(x)$.`,
      formula: String.raw`a>1:\ \log_af>\log_ag\iff f>g>0`,
      note: String.raw`Với $0<a<1$, nhớ điều kiện $f(x)>0$ và đổi chiều.`,
    },
    {
      subtitle: 'Một số lưu ý',
      content: String.raw`- Với mọi $x$, ta luôn có $a^x>0$ nên các bất phương trình dạng $a^{f(x)}>0$ có tập nghiệm là $\\mathbb{R}$.
- Khi giải phương trình logarit, phải kiểm tra nghiệm với điều kiện xác định.
- Có thể dùng ẩn phụ $t=a^{f(x)}>0$ hoặc $t=\log_af(x)$ để đưa về phương trình đại số.`,
      formula: String.raw`a^{f(x)}>0\ \forall x`,
      note: String.raw`Nghiệm ngoài miền xác định phải loại bỏ.`,
    },
  ],

  examples: [
    {
      id: 'vd1',
      title: 'Phương trình mũ cơ bản',
      prompt: String.raw`Giải phương trình $2^x=8$.`,
      steps: [
        String.raw`Viết $8=2^3$, được $2^x=2^3$.`,
        String.raw`Cùng cơ số $2$ nên $x=3$.`,
      ],
      answer: String.raw`$x=3$.`,
    },
    {
      id: 'vd2',
      title: 'Đưa về cùng cơ số',
      prompt: String.raw`Giải phương trình $2^{x+1}=16$.`,
      steps: [
        String.raw`$16=2^4$ nên $2^{x+1}=2^4$.`,
        String.raw`Suy ra $x+1=4$, do đó $x=3$.`,
      ],
      answer: String.raw`$x=3$.`,
    },
    {
      id: 'vd3',
      title: 'Phương trình logarit',
      prompt: String.raw`Giải phương trình $\log_2(x-1)=3$.`,
      steps: [
        String.raw`Điều kiện: $x-1>0\iff x>1$.`,
        String.raw`$\log_2(x-1)=3\iff x-1=2^3=8$.`,
        String.raw`Suy ra $x=9$ (thỏa mãn $x>1$).`,
      ],
      answer: String.raw`$x=9$.`,
    },
    {
      id: 'vd4',
      title: 'Bất phương trình logarit',
      prompt: String.raw`Giải bất phương trình $\log_3(x+1)>2$.`,
      steps: [
        String.raw`Điều kiện: $x+1>0\iff x>-1$.`,
        String.raw`Cơ số $3>1$ nên $\log_3(x+1)>2\iff x+1>3^2=9$.`,
        String.raw`Suy ra $x>8$ (thỏa mãn $x>-1$).`,
      ],
      answer: String.raw`$x>8$.`,
    },
    {
      id: 'vd5',
      title: 'Bất phương trình mũ có cơ số nhỏ hơn 1',
      prompt: String.raw`Giải bất phương trình $\left(\dfrac12\right)^x>4$.`,
      steps: [
        String.raw`Viết $\left(\dfrac12\right)^x=2^{-x}$ và $4=2^2$.`,
        String.raw`Bất phương trình trở thành $2^{-x}>2^2$.`,
        String.raw`Cơ số $2>1$ nên $-x>2$, tức $x<-2$.`,
      ],
      answer: String.raw`$x<-2$.`,
    },
  ],

  exercises: [
    {
      id: 'bt1',
      prompt: String.raw`Giải phương trình $3^x=81$.`,
      solution: String.raw`$81=3^4$ nên $3^x=3^4$. Vậy $x=4$.`,
    },
    {
      id: 'bt2',
      prompt: String.raw`Giải phương trình $5^{2x-1}=25$.`,
      solution: String.raw`$25=5^2$ nên $2x-1=2$. Suy ra $2x=3$, tức $x=\dfrac32$.`,
    },
    {
      id: 'bt3',
      prompt: String.raw`Giải phương trình $\log_2(3x-1)=3$.`,
      solution: String.raw`Điều kiện: $3x-1>0\iff x>\dfrac13$.

$\log_2(3x-1)=3\iff 3x-1=8\iff x=3$ (thỏa mãn).`,
    },
    {
      id: 'bt4',
      prompt: String.raw`Giải phương trình $\log_5(x+2)=1$.`,
      solution: String.raw`Điều kiện: $x+2>0\iff x>-2$.

$\log_5(x+2)=1\iff x+2=5\iff x=3$ (thỏa mãn).`,
    },
    {
      id: 'bt5',
      prompt: String.raw`Giải bất phương trình $2^x>16$.`,
      solution: String.raw`$16=2^4$ nên $2^x>2^4$. Cơ số $2>1$ nên $x>4$.`,
    },
    {
      id: 'bt6',
      prompt: String.raw`Giải bất phương trình $\log_{1/2}(x-1)>1$.`,
      hint: String.raw`Cơ số nhỏ hơn $1$ nên đổi chiều và giữ điều kiện $x-1>0$.`,
      solution: String.raw`Điều kiện: $x-1>0\iff x>1$.

Cơ số $\dfrac12<1$ nên $\log_{1/2}(x-1)>1\iff 0<x-1<\left(\dfrac12\right)^1=\dfrac12$.

Suy ra $1<x<\dfrac32$.`,
    },
  ],

  quiz: [
    {
      id: 'q1',
      question: String.raw`Với $b>0$, phương trình $a^{f(x)}=b$ tương đương với`,
      options: [
        String.raw`$f(x)=\log_ab$`,
        String.raw`$f(x)=b^a$`,
        String.raw`$f(x)=a^b$`,
        String.raw`$f(x)=\log_ba$`,
      ],
      answer: 0,
      explanation: String.raw`$a^{f(x)}=b\iff f(x)=\log_ab$.`,
    },
    {
      id: 'q2',
      question: String.raw`Phương trình $a^{f(x)}=a^{g(x)}$ tương đương với`,
      options: [
        String.raw`$f(x)=g(x)$`,
        String.raw`$f(x)=-g(x)$`,
        String.raw`$f(x)\cdot g(x)=1$`,
        String.raw`$f(x)+g(x)=0$`,
      ],
      answer: 0,
      explanation: 'Cùng cơ số thì số mũ bằng nhau.',
    },
    {
      id: 'q3',
      question: String.raw`Với $a>1$, bất phương trình $a^{f(x)}>a^{g(x)}$ tương đương với`,
      options: [
        String.raw`$f(x)<g(x)$`,
        String.raw`$f(x)>g(x)$`,
        String.raw`$f(x)=g(x)$`,
        String.raw`$f(x)\le g(x)$`,
      ],
      answer: 1,
      explanation: 'Cơ số lớn hơn 1 thì hàm số mũ đồng biến, giữ nguyên chiều.',
    },
    {
      id: 'q4',
      question: String.raw`Với $0<a<1$, bất phương trình $a^{f(x)}>a^{g(x)}$ tương đương với`,
      options: [
        String.raw`$f(x)>g(x)$`,
        String.raw`$f(x)=g(x)$`,
        String.raw`$f(x)<g(x)$`,
        String.raw`$f(x)\ge g(x)$`,
      ],
      answer: 2,
      explanation: 'Cơ số nhỏ hơn 1 thì hàm số mũ nghịch biến nên đổi chiều.',
    },
    {
      id: 'q5',
      question: String.raw`Phương trình $\log_af(x)=b$ tương đương với`,
      options: [
        String.raw`$f(x)=b^a$`,
        String.raw`$f(x)=a^b$`,
        String.raw`$f(x)=\log_ba$`,
        String.raw`$f(x)=a+b$`,
      ],
      answer: 1,
      explanation: String.raw`$\log_af(x)=b\iff f(x)=a^b$ với $f(x)>0$.`,
    },
    {
      id: 'q6',
      question: String.raw`Phương trình $\log_af(x)=\log_ag(x)$ tương đương với`,
      options: [
        String.raw`$f(x)=g(x)$`,
        String.raw`$f(x)=g(x)>0$`,
        String.raw`$f(x)+g(x)>0$`,
        String.raw`$f(x)\cdot g(x)=1$`,
      ],
      answer: 1,
      explanation: 'Hai logarit cùng cơ số bằng nhau khi biểu thức bằng nhau và dương.',
    },
    {
      id: 'q7',
      question: String.raw`Nghiệm của phương trình $2^x=32$ là`,
      options: ['4', '5', '6', '3'],
      answer: 1,
      explanation: String.raw`$32=2^5$ nên $x=5$.`,
    },
    {
      id: 'q8',
      question: String.raw`Nghiệm của phương trình $\log_3x=2$ là`,
      options: ['6', '8', '9', '3'],
      answer: 2,
      explanation: String.raw`$x=3^2=9$.`,
    },
  ],

  trueFalse: [
    {
      id: 'tf1',
      stem: 'Các khẳng định về phương trình mũ:',
      items: [
        { text: String.raw`$2^x=8\iff x=3$.`, answer: true },
        { text: String.raw`$3^x=1\iff x=0$.`, answer: true },
        { text: String.raw`Phương trình $2^x=-1$ có nghiệm.`, answer: false },
        { text: String.raw`$5^x=25\iff x=2$.`, answer: true },
      ],
      explanation: String.raw`$2^x>0$ với mọi $x$ nên $2^x=-1$ vô nghiệm.`,
    },
    {
      id: 'tf2',
      stem: 'Các khẳng định về phương trình logarit:',
      items: [
        { text: String.raw`$\log_2x=3\iff x=8$.`, answer: true },
        { text: String.raw`$\log_2(x-1)$ xác định khi $x>1$.`, answer: true },
        { text: String.raw`$\log_2x=\log_25\iff x=5$.`, answer: true },
        { text: String.raw`$\log_2\left(x^2\right)=2\log_2x$ với mọi $x\ne0$.`, answer: false },
      ],
      explanation: String.raw`$\log_2\left(x^2\right)=2\log_2|x|$; công thức $2\log_2x$ chỉ đúng khi $x>0$.`,
    },
    {
      id: 'tf3',
      stem: 'Các khẳng định về bất phương trình:',
      items: [
        { text: String.raw`$2^x>8\iff x>3$.`, answer: true },
        { text: String.raw`$\left(\dfrac12\right)^x>8\iff x>-3$.`, answer: false },
        { text: String.raw`$\log_2x<3\iff 0<x<8$.`, answer: true },
        { text: String.raw`$\log_{1/2}x<3\iff x<8$.`, answer: false },
      ],
      explanation: String.raw`$\left(\dfrac12\right)^x>8\iff 2^{-x}>2^3\iff x<-3$; còn $\log_{1/2}x<3\iff x>\dfrac18$.`,
    },
  ],

  shortAnswer: [
    {
      id: 'sa1',
      question: String.raw`Giải phương trình $2^x=64$.`,
      answer: '6',
      unit: '',
      explanation: String.raw`$64=2^6$ nên $x=6$.`,
    },
    {
      id: 'sa2',
      question: String.raw`Giải phương trình $3^{x+1}=27$.`,
      answer: '2',
      unit: '',
      explanation: String.raw`$27=3^3$ nên $x+1=3$, suy ra $x=2$.`,
    },
    {
      id: 'sa3',
      question: String.raw`Giải phương trình $\log_2x=4$.`,
      answer: '16',
      unit: '',
      explanation: String.raw`$x=2^4=16$.`,
    },
    {
      id: 'sa4',
      question: String.raw`Giải phương trình $\log_3(x-2)=1$.`,
      answer: '5',
      unit: '',
      explanation: String.raw`Điều kiện $x>2$. Ta có $x-2=3$, suy ra $x=5$.`,
    },
  ],
}

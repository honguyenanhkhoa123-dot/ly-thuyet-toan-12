import type { Lesson } from '../types'

export const bai2: Lesson = {
  id: 'bai-2',
  chapterId: 'chuong-1',
  title: 'Giá trị lớn nhất, giá trị nhỏ nhất của hàm số',
  summary: 'Tìm max – min trên đoạn, trên khoảng và các bài toán tham số.',
  minutes: 22,

  theory: [
    {
      subtitle: 'Định nghĩa giá trị lớn nhất, giá trị nhỏ nhất',
      content: String.raw`Cho hàm số $y=f(x)$ xác định trên tập hợp $D$.

- Số $M$ gọi là **giá trị lớn nhất** của hàm số trên $D$ nếu $f(x)\le M$ với mọi $x\in D$ và tồn tại $x_0\in D$ sao cho $f(x_0)=M$.
- Số $m$ gọi là **giá trị nhỏ nhất** của hàm số trên $D$ nếu $f(x)\ge m$ với mọi $x\in D$ và tồn tại $x_0\in D$ sao cho $f(x_0)=m$.

Kí hiệu: $M=\max\limits_{D} f(x)$ và $m=\min\limits_{D} f(x)$.`,
      formula: String.raw`M=\max_{D} f(x)\iff \begin{cases} f(x)\le M & \forall x\in D\\ f(x_0)=M & \text{với một } x_0\in D \end{cases}`,
      note: String.raw`Giá trị lớn nhất, nhỏ nhất phải **đạt được** tại một điểm thuộc $D$. Nếu chỉ có $f(x)<M$ với mọi $x$ thì $M$ không phải là max.`,
    },
    {
      subtitle: 'Tìm giá trị lớn nhất, nhỏ nhất trên đoạn',
      content: String.raw`Cho hàm số $y=f(x)$ liên tục trên đoạn $[a;b]$. Khi đó hàm số luôn có giá trị lớn nhất và giá trị nhỏ nhất trên đoạn đó.

**Bước 1.** Tính $f'(x)$ và tìm các điểm $x_i\in(a;b)$ mà $f'(x_i)=0$ hoặc $f'(x_i)$ không xác định.

**Bước 2.** Tính $f(a)$, $f(b)$ và các giá trị $f(x_i)$.

**Bước 3.** So sánh các giá trị vừa tính để kết luận giá trị lớn nhất và nhỏ nhất trên đoạn.`,
      formula: String.raw`\max_{[a;b]} f=\max\{f(a),f(b),f(x_i)\},\qquad \min_{[a;b]} f=\min\{f(a),f(b),f(x_i)\}`,
      note: String.raw`Chỉ được so sánh tại các điểm tới hạn nằm **bên trong** đoạn $[a;b]$. Điểm $x_i$ nằm ngoài đoạn thì bỏ qua.`,
    },
    {
      subtitle: 'Tìm giá trị lớn nhất, nhỏ nhất trên khoảng',
      content: String.raw`Với hàm số xác định trên khoảng $(a;b)$ (hoặc nửa khoảng), ta lập **bảng biến thiên** rồi kết luận:

- Nếu trên bảng biến thiên hàm số chỉ có một cực đại và không có cực tiểu thì giá trị cực đại là giá trị lớn nhất.
- Nếu chỉ có một cực tiểu và không có cực đại thì giá trị cực tiểu là giá trị nhỏ nhất.
- Trường hợp khác, phải dựa vào giới hạn ở hai đầu khoảng để kết luận max, min có tồn tại hay không.`,
      note: String.raw`Trên khoảng mở, hàm số có thể **không có** giá trị lớn nhất hoặc nhỏ nhất. Ví dụ $y=\dfrac{1}{x}$ trên $(0;+\infty)$ không có max lẫn min.`,
    },
    {
      subtitle: 'Một số lưu ý khi làm bài',
      content: String.raw`- Giá trị cực đại **không nhất thiết** là giá trị lớn nhất của hàm số trên toàn tập xác định.
- Với hàm phân thức, nên lập bảng biến thiên thay vì chỉ thay các đầu mút.
- Bài toán có tham số: tính max, min theo $m$ rồi giải phương trình hoặc bất phương trình theo yêu cầu đề bài.
- Có thể đổi biến để đưa về bài toán quen thuộc, nhưng phải tìm đúng tập giá trị của biến mới.`,
      formula: String.raw`\max_{D} f(x)\ \text{và}\ \min_{D} f(x)\ \text{chỉ tồn tại khi đạt được tại một điểm của } D`,
    },
  ],

  examples: [
    {
      id: 'vd1',
      title: 'Hàm bậc ba trên đoạn',
      prompt: String.raw`Tìm giá trị lớn nhất và giá trị nhỏ nhất của hàm số $y=x^3-3x^2+2$ trên đoạn $[-1;3]$.`,
      steps: [
        String.raw`$y'=3x^2-6x=3x(x-2)$; $y'=0\iff x=0$ hoặc $x=2$. Cả hai điểm đều thuộc $(-1;3)$.`,
        String.raw`Tính giá trị: $y(-1)=-2$; $y(0)=2$; $y(2)=-2$; $y(3)=2$.`,
        String.raw`So sánh: giá trị lớn nhất là $2$, giá trị nhỏ nhất là $-2$.`,
      ],
      answer: String.raw`$\max\limits_{[-1;3]} y=2$ (tại $x=0$ và $x=3$); $\min\limits_{[-1;3]} y=-2$ (tại $x=-1$ và $x=2$).`,
      figure: {
        kind: 'poly',
        fn: (x: number) => x ** 3 - 3 * x ** 2 + 2,
        domain: [-1.2, 3.2],
        yRange: [-3, 3],
        marks: [{ x: 0, label: '2' }, { x: 2, label: '−2' }],
        caption: 'Trên [−1; 3], giá trị lớn nhất bằng 2 và nhỏ nhất bằng −2.',
      },
    },
    {
      id: 'vd2',
      title: 'Hàm phân thức trên đoạn',
      prompt: String.raw`Tìm giá trị lớn nhất và nhỏ nhất của hàm số $y=x+\dfrac{4}{x}$ trên đoạn $[1;4]$.`,
      steps: [
        String.raw`$y'=1-\dfrac{4}{x^2}=\dfrac{x^2-4}{x^2}$; $y'=0\iff x=2$ (nhận) hoặc $x=-2$ (loại vì ngoài đoạn).`,
        String.raw`$y(1)=1+4=5$; $y(2)=2+2=4$; $y(4)=4+1=5$.`,
        String.raw`Vậy giá trị nhỏ nhất bằng $4$, giá trị lớn nhất bằng $5$.`,
      ],
      answer: String.raw`$\max\limits_{[1;4]} y=5$; $\min\limits_{[1;4]} y=4$.`,
    },
    {
      id: 'vd3',
      title: 'Hàm chứa căn',
      prompt: String.raw`Tìm giá trị lớn nhất và nhỏ nhất của hàm số $y=\sqrt{4-x^2}$.`,
      steps: [
        String.raw`Tập xác định: $D=[-2;2]$. Hàm số liên tục trên $[-2;2]$.`,
        String.raw`$y'=\dfrac{-x}{\sqrt{4-x^2}}$; $y'=0\iff x=0$. Tại $x=\pm2$ đạo hàm không xác định nhưng hàm số vẫn xác định.`,
        String.raw`$y(0)=2$; $y(\pm2)=0$.`,
        String.raw`Vậy $\max y=2$ tại $x=0$ và $\min y=0$ tại $x=\pm2$.`,
      ],
      answer: String.raw`$\max\limits_{[-2;2]} y=2$; $\min\limits_{[-2;2]} y=0$.`,
    },
    {
      id: 'vd4',
      title: 'Hàm phân thức bậc nhất trên bậc nhất',
      prompt: String.raw`Tìm giá trị lớn nhất và nhỏ nhất của hàm số $y=\dfrac{2x+1}{x-1}$ trên đoạn $[2;3]$.`,
      steps: [
        String.raw`$y'=\dfrac{2(x-1)-(2x+1)}{(x-1)^2}=\dfrac{-3}{(x-1)^2}<0$ trên $[2;3]$.`,
        String.raw`Hàm số nghịch biến trên $[2;3]$ nên giá trị lớn nhất tại $x=2$, nhỏ nhất tại $x=3$.`,
        String.raw`$y(2)=\dfrac{5}{1}=5$; $y(3)=\dfrac{7}{2}$.`,
      ],
      answer: String.raw`$\max\limits_{[2;3]} y=5$; $\min\limits_{[2;3]} y=\dfrac{7}{2}$.`,
    },
    {
      id: 'vd5',
      title: 'Tìm tham số từ điều kiện max',
      prompt: String.raw`Cho hàm số $y=x^2-2x+m$. Tìm $m$ để giá trị lớn nhất của hàm số trên đoạn $[0;3]$ bằng $5$.`,
      steps: [
        String.raw`$y'=2x-2$; $y'=0\iff x=1\in[0;3]$.`,
        String.raw`$y(0)=m$; $y(1)=m-1$; $y(3)=9-6+m=m+3$.`,
        String.raw`Vì $m+3>m>m-1$, giá trị lớn nhất trên đoạn là $m+3$.`,
        String.raw`Giải $m+3=5$ được $m=2$.`,
      ],
      answer: String.raw`$m=2$.`,
    },
  ],

  exercises: [
    {
      id: 'bt1',
      prompt: String.raw`Tìm giá trị lớn nhất và nhỏ nhất của $y=x^3-3x+1$ trên đoạn $[0;2]$.`,
      hint: String.raw`$y'=3(x^2-1)$; nghiệm $x=1$ nằm trong đoạn.`,
      solution: String.raw`$y'=3x^2-3$; $y'=0\iff x=1$ (nhận).

$y(0)=1$; $y(1)=-1$; $y(2)=3$.

Vậy $\max=3$ tại $x=2$, $\min=-1$ tại $x=1$.`,
    },
    {
      id: 'bt2',
      prompt: String.raw`Tìm giá trị lớn nhất và nhỏ nhất của $y=x^4-2x^2+3$ trên đoạn $[-2;2]$.`,
      hint: String.raw`$y'=4x(x^2-1)$; các điểm tới hạn $x=0$, $x=\pm1$.`,
      solution: String.raw`$y'=4x^3-4x=4x(x-1)(x+1)$; các nghiệm trong $[-2;2]$ là $0,\pm1$.

$y(0)=3$; $y(\pm1)=2$; $y(\pm2)=11$.

Vậy $\max=11$ tại $x=\pm2$, $\min=2$ tại $x=\pm1$.`,
    },
    {
      id: 'bt3',
      prompt: String.raw`Tìm giá trị lớn nhất và nhỏ nhất của $y=\dfrac{x+2}{x-1}$ trên đoạn $[2;4]$.`,
      hint: String.raw`Đạo hàm luôn âm trên đoạn.`,
      solution: String.raw`$y'=\dfrac{-3}{(x-1)^2}<0$ nên hàm số nghịch biến trên $[2;4]$.

$y(2)=4$; $y(4)=2$.

Vậy $\max=4$, $\min=2$.`,
    },
    {
      id: 'bt4',
      prompt: String.raw`Tìm giá trị lớn nhất và nhỏ nhất của $y=x+\dfrac{1}{x}$ trên đoạn $\left[\dfrac12;3\right]$.`,
      hint: String.raw`$y'=1-\dfrac{1}{x^2}$; nghiệm $x=1$.`,
      solution: String.raw`$y'=1-\dfrac{1}{x^2}$; $y'=0\iff x=1$ (nhận $x=1$, loại $x=-1$).

$y\left(\dfrac12\right)=\dfrac12+2=\dfrac52$; $y(1)=2$; $y(3)=3+\dfrac13=\dfrac{10}{3}$.

Vậy $\max=\dfrac{10}{3}$, $\min=2$.`,
    },
    {
      id: 'bt5',
      prompt: String.raw`Tìm giá trị lớn nhất và nhỏ nhất của $y=\sqrt{9-x^2}$ trên đoạn $[-3;1]$.`,
      hint: String.raw`Hàm số đạt giá trị lớn nhất tại $x=0$ và nhỏ nhất tại đầu mút $x=-3$.`,
      solution: String.raw`Tập xác định $[-3;3]$ nên hàm số liên tục trên $[-3;1]$.

$y'=\dfrac{-x}{\sqrt{9-x^2}}$; $y'=0\iff x=0$.

$y(-3)=0$; $y(0)=3$; $y(1)=\sqrt8=2\sqrt2$.

Vậy $\max=3$, $\min=0$.`,
    },
    {
      id: 'bt6',
      prompt: String.raw`Cho hàm số $y=x^2-2x+m$. Tìm $m$ để giá trị lớn nhất trên đoạn $[0;3]$ bằng $5$.`,
      hint: String.raw`Lập bảng giá trị tại $0$, $1$, $3$.`,
      solution: String.raw`$y'=2x-2$; $y'=0\iff x=1$.

$y(0)=m$; $y(1)=m-1$; $y(3)=m+3$.

Giá trị lớn nhất là $m+3$, nên $m+3=5\iff m=2$.`,
    },
  ],

  quiz: [
    {
      id: 'q1',
      question: String.raw`Giá trị nhỏ nhất của hàm số $y=x^2-4x+5$ trên đoạn $[0;3]$ bằng`,
      options: ['0', '1', '2', '5'],
      answer: 1,
      explanation: String.raw`$y'=2x-4$; $y'=0\iff x=2$. $y(0)=5$, $y(2)=1$, $y(3)=2$. Vậy $\min=1$.`,
    },
    {
      id: 'q2',
      question: String.raw`Giá trị lớn nhất của hàm số $y=-x^2+2x+3$ trên $\mathbb{R}$ bằng`,
      options: ['2', '3', '4', '5'],
      answer: 2,
      explanation: String.raw`$y'=-2x+2$; $y'=0\iff x=1$. Bảng biến thiên cho thấy $y$ tăng rồi giảm, nên $\max=y(1)=4$.`,
    },
    {
      id: 'q3',
      question: String.raw`Giá trị nhỏ nhất của hàm số $y=x+\dfrac{4}{x}$ trên khoảng $(0;+\infty)$ bằng`,
      options: ['2', '4', '5', '8'],
      answer: 1,
      explanation: String.raw`$y'=1-\dfrac{4}{x^2}$; $y'=0\iff x=2$. Trên $(0;+\infty)$ hàm số chỉ có một cực tiểu, nên $\min=y(2)=4$.`,
    },
    {
      id: 'q4',
      question: String.raw`Giá trị lớn nhất của hàm số $y=\sqrt{4-x^2}$ bằng`,
      options: ['0', '1', '2', '4'],
      answer: 2,
      explanation: String.raw`Tập xác định $[-2;2]$; $y(0)=2$ và $y(\pm2)=0$, nên $\max=2$.`,
    },
    {
      id: 'q5',
      question: String.raw`Giá trị lớn nhất của hàm số $y=x^3-3x$ trên đoạn $[0;2]$ bằng`,
      options: ['$-2$', '0', '1', '2'],
      answer: 3,
      explanation: String.raw`$y'=3x^2-3$; $y'=0\iff x=1$. $y(0)=0$, $y(1)=-2$, $y(2)=2$. Vậy $\max=2$.`,
    },
    {
      id: 'q6',
      question: String.raw`Giá trị nhỏ nhất của hàm số $y=\dfrac{2x-1}{x+1}$ trên đoạn $[0;2]$ bằng`,
      options: ['$-1$', '0', '1', '3'],
      answer: 0,
      explanation: String.raw`$y'=\dfrac{3}{(x+1)^2}>0$ nên hàm số đồng biến; $\min=y(0)=-1$.`,
    },
    {
      id: 'q7',
      question: String.raw`Giá trị nhỏ nhất của hàm số $y=x^4-2x^2+1$ trên đoạn $[-1;1]$ bằng`,
      options: ['$-1$', '0', '1', '2'],
      answer: 1,
      explanation: String.raw`$y'=4x(x^2-1)$; $y(0)=1$, $y(\pm1)=0$. Vậy $\min=0$.`,
    },
    {
      id: 'q8',
      question: String.raw`Giá trị lớn nhất của hàm số $y=x^2-2x$ trên đoạn $[-1;2]$ bằng`,
      options: ['$-1$', '0', '1', '3'],
      answer: 3,
      explanation: String.raw`$y'=2x-2$; $y'=0\iff x=1$. $y(-1)=3$, $y(1)=-1$, $y(2)=0$. Vậy $\max=3$.`,
    },
  ],

  trueFalse: [
    {
      id: 'tf1',
      stem: String.raw`Cho hàm số $y=f(x)$ liên tục trên $[1;4]$, biết $f(1)=3$, $f(2)=-1$, $f(4)=5$.`,
      items: [
        { text: String.raw`Hàm số luôn có giá trị lớn nhất và nhỏ nhất trên $[1;4]$.`, answer: true },
        { text: String.raw`$\min\limits_{[1;4]} f(x)\le -1$.`, answer: true },
        { text: String.raw`$\max\limits_{[1;4]} f(x)=5$.`, answer: false },
        { text: String.raw`Nếu $f$ đồng biến trên $[1;4]$ thì $\max\limits_{[1;4]} f(x)=5$.`, answer: true },
      ],
      explanation: String.raw`Hàm liên tục trên đoạn đóng thì có max, min. Vì $f(2)=-1$ nên min $\le-1$. Chỉ biết $f(4)=5$, chưa chắc đó là giá trị lớn nhất — trừ khi hàm đồng biến.`,
    },
    {
      id: 'tf2',
      stem: String.raw`Cho hàm số $y=x^3-3x$ trên đoạn $[-2;2]$.`,
      items: [
        { text: String.raw`$y'=3x^2-3$.`, answer: true },
        { text: String.raw`Trên $[-2;2]$, phương trình $y'=0$ có hai nghiệm $x=\pm1$.`, answer: true },
        { text: String.raw`$\max\limits_{[-2;2]} y=2$.`, answer: true },
        { text: String.raw`$\min\limits_{[-2;2]} y=-4$.`, answer: false },
      ],
      explanation: String.raw`$y(-2)=-2$, $y(-1)=2$, $y(1)=-2$, $y(2)=2$. Vậy max $=2$, min $=-2$ (không phải $-4$).`,
    },
    {
      id: 'tf3',
      stem: String.raw`Cho hàm số $y=\dfrac{x+3}{x-1}$ trên đoạn $[2;4]$.`,
      items: [
        { text: String.raw`$y'=\dfrac{-4}{(x-1)^2}$.`, answer: true },
        { text: String.raw`Hàm số nghịch biến trên $[2;4]$.`, answer: true },
        { text: String.raw`$\max\limits_{[2;4]} y=5$.`, answer: true },
        { text: String.raw`$\min\limits_{[2;4]} y=2$.`, answer: false },
      ],
      explanation: String.raw`$y(2)=5$, $y(4)=\dfrac73$. Hàm nghịch biến nên max $=5$, min $=\dfrac73$.`,
    },
  ],

  shortAnswer: [
    {
      id: 'sa1',
      question: String.raw`Giá trị nhỏ nhất của hàm số $y=x^2+2x-3$ trên đoạn $[-2;1]$ bằng bao nhiêu?`,
      answer: '-4',
      unit: 'giá trị',
      explanation: String.raw`$y'=2x+2$; $y'=0\iff x=-1$. $y(-2)=-3$, $y(-1)=-4$, $y(1)=0$.`,
    },
    {
      id: 'sa2',
      question: String.raw`Giá trị lớn nhất của hàm số $y=4x-x^2$ trên đoạn $[0;4]$ bằng bao nhiêu?`,
      answer: '4',
      unit: 'giá trị',
      explanation: String.raw`$y'=4-2x$; $y'=0\iff x=2$. $y(0)=0$, $y(2)=4$, $y(4)=0$.`,
    },
    {
      id: 'sa3',
      question: String.raw`Giá trị nhỏ nhất của hàm số $y=x+\dfrac{9}{x}$ trên khoảng $(0;+\infty)$ bằng bao nhiêu?`,
      answer: '6',
      unit: 'giá trị',
      explanation: String.raw`$y'=1-\dfrac{9}{x^2}$; $y'=0\iff x=3$ (trên khoảng đang xét). $y(3)=6$.`,
    },
    {
      id: 'sa4',
      question: String.raw`Giá trị nhỏ nhất của hàm số $y=x^3-3x^2+5$ trên đoạn $[0;3]$ bằng bao nhiêu?`,
      answer: '1',
      unit: 'giá trị',
      explanation: String.raw`$y'=3x(x-2)$; $y(0)=5$, $y(2)=1$, $y(3)=5$.`,
    },
  ],
}

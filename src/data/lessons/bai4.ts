import type { Lesson } from '../types'

export const bai4: Lesson = {
  id: 'bai-4',
  chapterId: 'chuong-5',
  title: 'Khảo sát sự biến thiên và vẽ đồ thị hàm số',
  summary: 'Sơ đồ khảo sát, các dạng đồ thị quen thuộc và bài toán tương giao.',
  minutes: 30,

  theory: [
    {
      subtitle: 'Sơ đồ khảo sát hàm số',
      content: String.raw`**Bước 1.** Tìm tập xác định của hàm số.

**Bước 2.** Tính $y'$; tìm các điểm mà $y'=0$ hoặc $y'$ không xác định; xét dấu $y'$ để suy ra chiều biến thiên và các điểm cực trị.

**Bước 3.** Tìm giới hạn tại vô cực và giới hạn tại các điểm mà hàm số không xác định; suy ra các đường tiệm cận (nếu có).

**Bước 4.** Lập bảng biến thiên.

**Bước 5.** Vẽ đồ thị: xác định thêm một số điểm đặc biệt (giao với các trục, điểm đối xứng), rồi vẽ đúng hình dạng và các đường tiệm cận.`,
      note: String.raw`Ba dạng đồ thị cần nhớ: hàm bậc ba, hàm trùng phương và hàm phân thức bậc nhất trên bậc nhất. Mỗi dạng có hình dáng cố định, chỉ thay đổi vị trí và độ "dốc".`,
    },
    {
      subtitle: 'Hàm số bậc ba',
      content: String.raw`Dạng $y=ax^3+bx^2+cx+d$ với $a\ne0$.

- $y'=3ax^2+2bx+c$ là tam thức bậc hai, nên hàm số có tối đa **hai** điểm cực trị.
- Nếu $y'$ vô nghiệm hoặc có nghiệm kép, hàm số đơn điệu trên $\mathbb{R}$ và đồ thị không có cực trị.
- Đồ thị nhận điểm uốn làm tâm đối xứng; $\lim\limits_{x\to+\infty}y$ và $\lim\limits_{x\to-\infty}y$ trái dấu nhau.`,
      figure: {
        kind: 'poly',
        fn: (x: number) => x ** 3 - 3 * x ** 2 + 2,
        domain: [-1.4, 3.4],
        yRange: [-3, 3],
        marks: [{ x: 0, label: 'CĐ' }, { x: 2, label: 'CT' }],
        caption: 'Dạng đồ thị bậc ba có hai cực trị (a > 0).',
      },
    },
    {
      subtitle: 'Hàm số trùng phương',
      content: String.raw`Dạng $y=ax^4+bx^2+c$ với $a\ne0$.

- Tập xác định $\mathbb{R}$; đồ thị nhận trục tung làm trục đối xứng.
- $y'=4ax^3+2bx=2x(2ax^2+b)$, nên $y'=0$ luôn có nghiệm $x=0$; số cực trị là $1$ hoặc $3$.
- Khi $a>0$: đồ thị có dạng chữ $W$ (nếu có 3 cực trị) hoặc chỉ có một cực tiểu. Khi $a<0$: dạng chữ $M$ hoặc chỉ có một cực đại.`,
      figure: {
        kind: 'poly',
        fn: (x: number) => x ** 4 - 2 * x ** 2,
        domain: [-2, 2],
        yRange: [-1.6, 2.2],
        marks: [{ x: -1, label: '−1' }, { x: 0, label: '0' }, { x: 1, label: '−1' }],
        caption: 'Dạng đồ thị trùng phương có ba cực trị (a > 0).',
      },
    },
    {
      subtitle: 'Hàm số phân thức bậc nhất trên bậc nhất',
      content: String.raw`Dạng $y=\dfrac{ax+b}{cx+d}$ với $c\ne0$ và $ad-bc\ne0$.

- Tập xác định $D=\mathbb{R}\setminus\left\{-\dfrac{d}{c}\right\}$.
- $y'=\dfrac{ad-bc}{(cx+d)^2}$ không đổi dấu trên từng khoảng xác định, nên hàm số đơn điệu trên mỗi khoảng và **không có cực trị**.
- Đồ thị có tiệm cận đứng $x=-\dfrac{d}{c}$, tiệm cận ngang $y=\dfrac{a}{c}$; giao điểm hai tiệm cận là tâm đối xứng.`,
      figure: {
        kind: 'rational',
        fn: (x: number) => (x + 1) / (x - 1),
        domain: [-3, 5],
        yRange: [-4, 6],
        va: [1],
        ha: 1,
        caption: 'Dạng đồ thị phân thức bậc nhất trên bậc nhất (ad − bc < 0).',
      },
    },
    {
      subtitle: 'Sự tương giao của hai đồ thị',
      content: String.raw`Cho hai đồ thị $(C_1): y=f(x)$ và $(C_2): y=g(x)$.

Số giao điểm của $(C_1)$ và $(C_2)$ bằng số nghiệm của phương trình hoành độ giao điểm
$$f(x)=g(x).$$

Với bài toán biện luận theo tham số, ta thường đưa phương trình về dạng $f(x)=m$, lập bảng biến thiên của $f$ rồi đọc số nghiệm từ số giao điểm của đồ thị với đường thẳng $y=m$.`,
      formula: String.raw`\text{số giao điểm} = \text{số nghiệm của } f(x)=g(x)`,
      note: String.raw`Nghiệm bội chẵn ứng với điểm tiếp xúc, không làm số giao điểm tăng thêm.`,
    },
    {
      subtitle: 'Ứng dụng thực tiễn',
      content: String.raw`Đạo hàm dùng để:

- Tính **tốc độ thay đổi** của một đại lượng: nếu $s(t)$ là quãng đường thì $v(t)=s'(t)$ là vận tốc.
- Tìm **giá trị tối ưu** trong chi phí, doanh thu, lợi nhuận: lập hàm số theo biến cần chọn, tìm max – min trên miền xác định thực tế.
- Giải bài toán hình học: chọn một kích thước làm biến, biểu diễn đại lượng cần tối ưu theo biến đó.

Khi giải, cần đặt điều kiện cho biến (độ dài dương, số lượng nguyên…) trước khi tìm max – min.`,
      note: String.raw`Đáp án của bài toán thực tế phải thoả điều kiện của đề bài, không chỉ thoả phương trình đạo hàm.`,
    },
  ],

  examples: [
    {
      id: 'vd1',
      title: 'Khảo sát hàm bậc ba',
      prompt: String.raw`Khảo sát sự biến thiên và vẽ đồ thị hàm số $y=x^3-3x^2+2$.`,
      steps: [
        String.raw`Tập xác định: $D=\mathbb{R}$.`,
        String.raw`$y'=3x^2-6x=3x(x-2)$; $y'=0\iff x=0$ hoặc $x=2$.`,
        String.raw`Dấu $y'$: dương trên $(-\infty;0)$ và $(2;+\infty)$, âm trên $(0;2)$. Hàm số đạt cực đại $y(0)=2$, cực tiểu $y(2)=-2$.`,
        String.raw`Giới hạn: $\lim\limits_{x\to+\infty}y=+\infty$, $\lim\limits_{x\to-\infty}y=-\infty$; đồ thị không có tiệm cận.`,
        {
          text: String.raw`Bảng biến thiên:`,
          table: {
            boundaries: ['−∞', '0', '2', '+∞'],
            signs: ['+', '−', '+'],
            values: ['−∞', '2', '−2', '+∞'],
          },
        },
        String.raw`Điểm đặc biệt: $(0;2)$, $(2;-2)$, $(1;0)$, $(3;2)$. Đồ thị nhận điểm uốn $I(1;0)$ làm tâm đối xứng.`,
      ],
      answer: String.raw`Đồ thị có dạng chữ $N$ ngược: đi lên, đạt cực đại $(0;2)$, đi xuống qua điểm uốn $(1;0)$, đạt cực tiểu $(2;-2)$ rồi đi lên.`,
      figure: {
        kind: 'poly',
        fn: (x: number) => x ** 3 - 3 * x ** 2 + 2,
        domain: [-1.4, 3.4],
        yRange: [-3, 3],
        marks: [{ x: 0, label: '2' }, { x: 2, label: '−2' }],
        caption: 'Đồ thị y = x³ − 3x² + 2.',
      },
    },
    {
      id: 'vd2',
      title: 'Khảo sát hàm trùng phương',
      prompt: String.raw`Khảo sát sự biến thiên và vẽ đồ thị hàm số $y=-x^4+2x^2$.`,
      steps: [
        String.raw`Tập xác định: $D=\mathbb{R}$; hàm số chẵn nên đồ thị nhận trục tung làm trục đối xứng.`,
        String.raw`$y'=-4x^3+4x=-4x(x-1)(x+1)$; $y'=0\iff x=0$ hoặc $x=\pm1$.`,
        String.raw`Dấu $y'$: $-$ trên $(-\infty;-1)$, $+$ trên $(-1;0)$, $-$ trên $(0;1)$, $+$ trên $(1;+\infty)$. Cực tiểu $y(\pm1)=1$; cực đại $y(0)=0$.`,
        String.raw`Giới hạn: $\lim\limits_{x\to\pm\infty}y=-\infty$.`,
        String.raw`Điểm đặc biệt: $(-1;1)$, $(0;0)$, $(1;1)$; giao với trục hoành tại $x=0$ và $x=\pm\sqrt2$.`,
      ],
      answer: String.raw`Đồ thị dạng chữ $M$: hai điểm cực tiểu $(-1;1)$, $(1;1)$ và điểm cực đại $O(0;0)$.`,
      figure: {
        kind: 'poly',
        fn: (x: number) => -(x ** 4) + 2 * x ** 2,
        domain: [-2, 2],
        yRange: [-1.6, 1.8],
        marks: [{ x: -1, label: '1' }, { x: 1, label: '1' }],
        caption: 'Đồ thị y = −x⁴ + 2x².',
      },
    },
    {
      id: 'vd3',
      title: 'Khảo sát hàm phân thức',
      prompt: String.raw`Khảo sát sự biến thiên và vẽ đồ thị hàm số $y=\dfrac{x+1}{x-1}$.`,
      steps: [
        String.raw`Tập xác định: $D=\mathbb{R}\setminus\{1\}$.`,
        String.raw`$y'=\dfrac{(x-1)-(x+1)}{(x-1)^2}=\dfrac{-2}{(x-1)^2}<0$ với mọi $x\ne1$. Hàm số nghịch biến trên từng khoảng xác định.`,
        String.raw`Tiệm cận: $\lim\limits_{x\to1^+}y=+\infty$ nên $x=1$ là tiệm cận đứng; $\lim\limits_{x\to\pm\infty}y=1$ nên $y=1$ là tiệm cận ngang.`,
        String.raw`Điểm đặc biệt: giao trục tung tại $(0;-1)$; giao trục hoành tại $(-1;0)$; điểm $(2;3)$.`,
        String.raw`Tâm đối xứng là giao điểm hai tiệm cận $I(1;1)$.`,
      ],
      answer: String.raw`Đồ thị gồm hai nhánh nằm ở góc phần tư thứ hai và thứ tư so với tâm $I(1;1)$, nghịch biến trên mỗi nhánh.`,
      figure: {
        kind: 'rational',
        fn: (x: number) => (x + 1) / (x - 1),
        domain: [-3, 5],
        yRange: [-4, 6],
        va: [1],
        ha: 1,
        caption: 'Đồ thị y = (x + 1)/(x − 1).',
      },
    },
    {
      id: 'vd4',
      title: 'Biện luận số nghiệm bằng đồ thị',
      prompt: String.raw`Biện luận theo $m$ số nghiệm của phương trình $x^3-3x+1=m$.`,
      steps: [
        String.raw`Xét hàm số $f(x)=x^3-3x+1$. Ta có $f'(x)=3x^2-3$; $f'=0\iff x=\pm1$.`,
        String.raw`$f(-1)=3$ (cực đại), $f(1)=-1$ (cực tiểu); $\lim\limits_{x\to+\infty}f=+\infty$, $\lim\limits_{x\to-\infty}f=-\infty$.`,
        String.raw`Số nghiệm của phương trình là số giao điểm của đồ thị $y=f(x)$ với đường thẳng $y=m$.`,
        String.raw`Từ bảng biến thiên: nếu $-1<m<3$ thì có $3$ nghiệm; nếu $m=-1$ hoặc $m=3$ thì có $2$ nghiệm; nếu $m<-1$ hoặc $m>3$ thì có $1$ nghiệm.`,
      ],
      answer: String.raw`$-1<m<3$: 3 nghiệm; $m\in\{-1;3\}$: 2 nghiệm; $m<-1$ hoặc $m>3$: 1 nghiệm.`,
    },
    {
      id: 'vd5',
      title: 'Bài toán tối ưu hình học',
      prompt: String.raw`Một hình chữ nhật có diện tích $100\ \text{m}^2$. Tìm kích thước để chu vi nhỏ nhất.`,
      steps: [
        String.raw`Gọi chiều rộng là $x>0$ (m), chiều dài là $\dfrac{100}{x}$ (m).`,
        String.raw`Chu vi: $P(x)=2\left(x+\dfrac{100}{x}\right)$ với $x>0$.`,
        String.raw`$P'(x)=2\left(1-\dfrac{100}{x^2}\right)$; $P'=0\iff x=10$ (nhận) hoặc $x=-10$ (loại).`,
        String.raw`Trên $(0;+\infty)$, $P$ chỉ có một cực tiểu tại $x=10$, nên đó là giá trị nhỏ nhất. Khi đó chiều dài cũng bằng $10$.`,
      ],
      answer: String.raw`Hình vuông cạnh $10\ \text{m}$, chu vi nhỏ nhất bằng $40\ \text{m}$.`,
    },
  ],

  exercises: [
    {
      id: 'bt1',
      prompt: String.raw`Khảo sát sự biến thiên và vẽ đồ thị hàm số $y=-x^3+3x^2$.`,
      hint: String.raw`$y'=-3x(x-2)$; chú ý dấu của $a$ để xác định giới hạn.`,
      solution: String.raw`Tập xác định $\mathbb{R}$.

$y'=-3x^2+6x=-3x(x-2)$; $y'=0\iff x=0$ hoặc $x=2$.

Dấu $y'$: âm trên $(-\infty;0)$, dương trên $(0;2)$, âm trên $(2;+\infty)$. Cực tiểu $y(0)=0$; cực đại $y(2)=4$.

$\lim\limits_{x\to+\infty}y=-\infty$, $\lim\limits_{x\to-\infty}y=+\infty$.

Điểm đặc biệt: $(0;0)$, $(2;4)$, $(3;0)$, $(-1;4)$. Tâm đối xứng $I(1;2)$.`,
    },
    {
      id: 'bt2',
      prompt: String.raw`Khảo sát sự biến thiên và vẽ đồ thị hàm số $y=x^4-2x^2$.`,
      hint: String.raw`Hàm chẵn; $y'=4x(x^2-1)$.`,
      solution: String.raw`Tập xác định $\mathbb{R}$; hàm số chẵn.

$y'=4x^3-4x=4x(x-1)(x+1)$; $y'=0\iff x=0,\pm1$.

Cực đại $y(0)=0$; cực tiểu $y(\pm1)=-1$.

$\lim\limits_{x\to\pm\infty}y=+\infty$.

Điểm đặc biệt: $(-1;-1)$, $(0;0)$, $(1;-1)$; giao trục hoành tại $x=0$, $x=\pm\sqrt2$.`,
    },
    {
      id: 'bt3',
      prompt: String.raw`Khảo sát sự biến thiên và vẽ đồ thị hàm số $y=\dfrac{x-2}{x+1}$.`,
      solution: String.raw`Tập xác định $\mathbb{R}\setminus\{-1\}$.

$y'=\dfrac{(x+1)-(x-2)}{(x+1)^2}=\dfrac{3}{(x+1)^2}>0$ nên hàm số đồng biến trên từng khoảng xác định.

Tiệm cận đứng $x=-1$; tiệm cận ngang $y=1$.

Giao trục tung tại $(0;-2)$, giao trục hoành tại $(2;0)$. Tâm đối xứng $I(-1;1)$.`,
    },
    {
      id: 'bt4',
      prompt: String.raw`Biện luận theo $m$ số nghiệm của phương trình $x^3-3x^2+2=m$.`,
      hint: String.raw`Dùng đồ thị đã khảo sát ở Ví dụ 1: cực đại $2$, cực tiểu $-2$.`,
      solution: String.raw`Xét $f(x)=x^3-3x^2+2$: cực đại $f(0)=2$, cực tiểu $f(2)=-2$.

Số nghiệm bằng số giao điểm với $y=m$:

- $-2<m<2$: 3 nghiệm;
- $m=-2$ hoặc $m=2$: 2 nghiệm;
- $m<-2$ hoặc $m>2$: 1 nghiệm.`,
    },
    {
      id: 'bt5',
      prompt: String.raw`Tìm $m$ để phương trình $x^4-2x^2+1=m$ có bốn nghiệm phân biệt.`,
      hint: String.raw`Khảo sát $f(x)=x^4-2x^2+1$ hoặc dùng đồ thị của $y=x^4-2x^2$ dịch lên 1 đơn vị.`,
      solution: String.raw`Xét $f(x)=x^4-2x^2+1$.

$f'(x)=4x(x^2-1)$; cực đại $f(0)=1$, cực tiểu $f(\pm1)=0$; $\lim\limits_{x\to\pm\infty}f=+\infty$.

Để phương trình $f(x)=m$ có 4 nghiệm phân biệt, đường thẳng $y=m$ phải nằm giữa cực tiểu và cực đại: $0<m<1$.`,
    },
    {
      id: 'bt6',
      prompt: String.raw`Một hình chữ nhật có diện tích $100\ \text{m}^2$. Tìm chu vi nhỏ nhất.`,
      hint: String.raw`$P(x)=2\left(x+\dfrac{100}{x}\right)$ với $x>0$.`,
      solution: String.raw`$P(x)=2\left(x+\dfrac{100}{x}\right)$, $x>0$.

$P'(x)=2\left(1-\dfrac{100}{x^2}\right)$; $P'=0\iff x=10$.

Trên $(0;+\infty)$ có một cực tiểu duy nhất, nên $\min P=P(10)=40$.

Hình chữ nhật tối ưu là hình vuông cạnh $10\ \text{m}$.`,
    },
  ],

  quiz: [
    {
      id: 'q1',
      question: String.raw`Hàm số bậc ba có tối đa bao nhiêu điểm cực trị?`,
      options: ['0', '1', '2', '3'],
      answer: 2,
      explanation: String.raw`$y'$ là tam thức bậc hai nên có tối đa hai nghiệm đổi dấu.`,
    },
    {
      id: 'q2',
      question: String.raw`Đồ thị hàm số $y=x^3-3x^2+2$ đi qua điểm nào dưới đây?`,
      options: [String.raw`$(0;0)$`, String.raw`$(0;2)$`, String.raw`$(1;1)$`, String.raw`$(-1;0)$`],
      answer: 1,
      explanation: String.raw`$y(0)=2$; các điểm còn lại không thoả mãn phương trình.`,
    },
    {
      id: 'q3',
      question: String.raw`Số giao điểm của đồ thị hàm số $y=x^3-3x+2$ với trục hoành là`,
      options: ['1', '2', '3', '0'],
      answer: 1,
      explanation: String.raw`$x^3-3x+2=(x-1)^2(x+2)$ nên có hai giao điểm: $x=1$ (tiếp xúc) và $x=-2$.`,
    },
    {
      id: 'q4',
      question: String.raw`Số điểm cực trị của hàm số $y=x^4-2x^2$ là`,
      options: ['1', '2', '3', '4'],
      answer: 2,
      explanation: String.raw`$y'=4x(x^2-1)$ có ba nghiệm phân biệt và đổi dấu tại cả ba.`,
    },
    {
      id: 'q5',
      question: String.raw`Tâm đối xứng của đồ thị hàm số $y=\dfrac{2x+1}{x-1}$ là`,
      options: [String.raw`$(1;2)$`, String.raw`$(-1;2)$`, String.raw`$(1;-2)$`, String.raw`$(-1;-2)$`],
      answer: 0,
      explanation: String.raw`Giao điểm của tiệm cận đứng $x=1$ và tiệm cận ngang $y=2$.`,
    },
    {
      id: 'q6',
      question: String.raw`Số nghiệm thực của phương trình $x^3-3x+1=0$ là`,
      options: ['1', '2', '3', '0'],
      answer: 2,
      explanation: String.raw`Hàm $f(x)=x^3-3x+1$ có cực đại $3>0$ và cực tiểu $-1<0$, nên đồ thị cắt trục hoành tại 3 điểm.`,
    },
    {
      id: 'q7',
      question: String.raw`Hàm số $y=-x^3+3x^2-1$ đồng biến trên khoảng nào?`,
      options: [String.raw`$(0;2)$`, String.raw`$(-\infty;0)$`, String.raw`$(2;+\infty)$`, String.raw`$(-\infty;+\infty)$`],
      answer: 0,
      explanation: String.raw`$y'=-3x(x-2)>0\iff 0<x<2$.`,
    },
    {
      id: 'q8',
      question: String.raw`Phương trình $x^3-3x+1=m$ có ba nghiệm phân biệt khi`,
      options: [String.raw`$-1<m<3$`, String.raw`$-3<m<1$`, String.raw`$m<-1$`, String.raw`$m>3$`],
      answer: 0,
      explanation: String.raw`Cực đại $3$ tại $x=-1$, cực tiểu $-1$ tại $x=1$; đường thẳng $y=m$ cắt đồ thị ba lần khi $-1<m<3$.`,
    },
  ],

  trueFalse: [
    {
      id: 'tf1',
      stem: String.raw`Cho đồ thị $(C): y=x^3-3x^2+2$.`,
      items: [
        { text: String.raw`$(C)$ đi qua điểm $A(0;2)$.`, answer: true },
        { text: String.raw`Hàm số có hai điểm cực trị.`, answer: true },
        { text: String.raw`Điểm cực tiểu của $(C)$ là $(2;-2)$.`, answer: true },
        { text: String.raw`$(C)$ cắt trục hoành tại đúng ba điểm phân biệt.`, answer: true },
      ],
      explanation: String.raw`$y=x^3-3x^2+2=(x-1)(x^2-2x-2)$. Phương trình $y=0$ có ba nghiệm phân biệt $x=1$ và $x=1\pm\sqrt3$, nên đồ thị cắt trục hoành tại đúng ba điểm.`,
    },
    {
      id: 'tf2',
      stem: String.raw`Cho đồ thị $(C): y=\dfrac{x+1}{x-1}$.`,
      items: [
        { text: String.raw`Tâm đối xứng của $(C)$ là $I(1;1)$.`, answer: true },
        { text: String.raw`$(C)$ cắt trục hoành tại $x=-1$.`, answer: true },
        { text: String.raw`Hàm số nghịch biến trên tập xác định.`, answer: false },
        { text: String.raw`$(C)$ có tiệm cận ngang $y=1$ và tiệm cận đứng $x=1$.`, answer: true },
      ],
      explanation: String.raw`Hàm số nghịch biến trên **từng khoảng** $(-\infty;1)$ và $(1;+\infty)$, không nghịch biến trên toàn tập xác định vì hàm gián đoạn tại $x=1$.`,
    },
    {
      id: 'tf3',
      stem: String.raw`Cho đồ thị $(C): y=x^4-2x^2$.`,
      items: [
        { text: String.raw`$(C)$ nhận trục tung làm trục đối xứng.`, answer: true },
        { text: String.raw`Hàm số có ba điểm cực trị.`, answer: true },
        { text: String.raw`Điểm cực đại là $O(0;0)$.`, answer: true },
        { text: String.raw`$(C)$ cắt trục hoành tại đúng hai điểm.`, answer: false },
      ],
      explanation: String.raw`$x^4-2x^2=x^2(x^2-2)=0$ có ba nghiệm $x=0$, $x=\pm\sqrt2$, nên cắt trục hoành tại ba điểm.`,
    },
  ],

  shortAnswer: [
    {
      id: 'sa1',
      question: String.raw`Số giao điểm của đồ thị hàm số $y=x^3-3x+2$ với trục hoành là bao nhiêu?`,
      answer: '2',
      unit: 'số điểm',
      explanation: String.raw`$(x-1)^2(x+2)=0$: điểm tiếp xúc $x=1$ và điểm cắt $x=-2$.`,
    },
    {
      id: 'sa2',
      question: String.raw`Số điểm cực trị của hàm số $y=x^4-4x^2+1$ là bao nhiêu?`,
      answer: '3',
      unit: 'số điểm',
      explanation: String.raw`$y'=4x(x^2-2)$ có ba nghiệm phân biệt.`,
    },
    {
      id: 'sa3',
      question: String.raw`Số nghiệm thực của phương trình $x^3-3x+1=0$ là bao nhiêu?`,
      answer: '3',
      unit: 'nghiệm',
      explanation: String.raw`Cực đại $3>0$, cực tiểu $-1<0$ nên đồ thị cắt trục hoành ba lần.`,
    },
    {
      id: 'sa4',
      question: String.raw`Hình chữ nhật có diện tích $100\ \text{m}^2$. Chu vi nhỏ nhất bằng bao nhiêu mét?`,
      answer: '40',
      unit: 'mét',
      explanation: String.raw`Hình vuông cạnh $10\ \text{m}$ cho chu vi $40\ \text{m}$.`,
    },
  ],
}


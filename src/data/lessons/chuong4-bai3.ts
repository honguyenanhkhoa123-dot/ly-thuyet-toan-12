import type { Lesson } from '../types'

export const chuong4Bai3: Lesson = {
  id: 'bai-3',
  chapterId: 'chuong-4',
  title: 'Hàm số mũ và hàm số logarit',
  summary: 'Tập xác định, tập giá trị, tính đơn điệu và đồ thị của hàm số mũ, hàm số logarit.',
  minutes: 24,

  theory: [
    {
      subtitle: 'Hàm số mũ y = a^x',
      content: String.raw`Cho $a>0,\ a\ne1$. Hàm số $y=a^x$ có:
- Tập xác định: $\mathcal{D}=\mathbb{R}$.
- Tập giá trị: $T=(0;+\infty)$.
- Liên tục trên $\mathbb{R}$.
- Đồng biến trên $\mathbb{R}$ nếu $a>1$; nghịch biến trên $\mathbb{R}$ nếu $0<a<1$.
- Đồ thị luôn đi qua các điểm $(0;1)$ và $(1;a)$, nhận trục $Ox$ làm tiệm cận ngang.`,
      formula: String.raw`y=a^x:\ \mathcal{D}=\mathbb{R},\ T=(0;+\infty)`,
      note: String.raw`Đồ thị nằm hoàn toàn phía trên trục hoành.`,
    },
    {
      subtitle: 'Hàm số logarit y = log_a x',
      content: String.raw`Cho $a>0,\ a\ne1$. Hàm số $y=\log_ax$ có:
- Tập xác định: $\mathcal{D}=(0;+\infty)$.
- Tập giá trị: $T=\mathbb{R}$.
- Liên tục trên $(0;+\infty)$.
- Đồng biến trên $(0;+\infty)$ nếu $a>1$; nghịch biến trên $(0;+\infty)$ nếu $0<a<1$.
- Đồ thị luôn đi qua các điểm $(1;0)$ và $(a;1)$, nhận trục $Oy$ làm tiệm cận đứng.`,
      formula: String.raw`y=\log_ax:\ \mathcal{D}=(0;+\infty),\ T=\mathbb{R}`,
      note: String.raw`Đồ thị nằm hoàn toàn bên phải trục tung.`,
    },
    {
      subtitle: 'Quan hệ giữa hai đồ thị',
      content: String.raw`Đồ thị của hai hàm số $y=a^x$ và $y=\log_ax$ (cùng cơ số $a$) đối xứng với nhau qua đường thẳng $y=x$.

Hai hàm số này là hàm ngược của nhau trên miền thích hợp.`,
      formula: String.raw`y=a^x\ \leftrightarrow\ y=\log_ax`,
      note: String.raw`Tính đơn điệu của hai hàm cùng cơ số giống nhau.`,
    },
    {
      subtitle: 'Cách tìm tập xác định',
      content: String.raw`- Với $y=a^{u(x)}$: hàm số xác định khi $u(x)$ xác định.
- Với $y=\log_a u(x)$: hàm số xác định khi $u(x)>0$.
- Với $y=\dfrac{1}{\log_a u(x)}$: cần thêm $\log_a u(x)\ne0$, tức $u(x)\ne1$.`,
      formula: String.raw`u(x)>0`,
      note: String.raw`Điều kiện của logarit là biểu thức bên trong **dương**.`,
    },
  ],

  examples: [
    {
      id: 'vd1',
      title: 'Tập xác định của hàm logarit',
      prompt: String.raw`Tìm tập xác định của hàm số $y=\log_2(x-1)$.`,
      steps: [
        String.raw`Hàm số xác định khi $x-1>0$.`,
        String.raw`Suy ra $x>1$.`,
      ],
      answer: String.raw`$\mathcal{D}=(1;+\infty)$.`,
    },
    {
      id: 'vd2',
      title: 'So sánh lũy thừa',
      prompt: String.raw`So sánh $2^{1{,}5}$ và $2^{1{,}6}$.`,
      steps: [
        String.raw`Cơ số $2>1$ nên hàm số $y=2^x$ đồng biến.`,
        String.raw`Vì $1{,}5<1{,}6$ nên $2^{1{,}5}<2^{1{,}6}$.`,
      ],
      answer: String.raw`$2^{1{,}5}<2^{1{,}6}$.`,
    },
    {
      id: 'vd3',
      title: 'So sánh logarit',
      prompt: String.raw`So sánh $\log_{0{,}5}3$ và $\log_{0{,}5}4$.`,
      steps: [
        String.raw`Cơ số $0{,}5<1$ nên hàm số $y=\log_{0{,}5}x$ nghịch biến.`,
        String.raw`Vì $3<4$ nên $\log_{0{,}5}3>\log_{0{,}5}4$.`,
      ],
      answer: String.raw`$\log_{0{,}5}3>\log_{0{,}5}4$.`,
    },
    {
      id: 'vd4',
      title: 'Giải bất phương trình mũ đơn giản',
      prompt: String.raw`Giải bất phương trình $2^x>8$.`,
      steps: [
        String.raw`Viết $8=2^3$, bất phương trình trở thành $2^x>2^3$.`,
        String.raw`Cơ số $2>1$ nên $x>3$.`,
      ],
      answer: String.raw`$x>3$.`,
    },
    {
      id: 'vd5',
      title: 'Giải bất phương trình logarit đơn giản',
      prompt: String.raw`Giải bất phương trình $\log_2x<3$.`,
      steps: [
        String.raw`Điều kiện: $x>0$.`,
        String.raw`$\log_2x<3\iff x<2^3=8$.`,
        String.raw`Kết hợp điều kiện: $0<x<8$.`,
      ],
      answer: String.raw`$0<x<8$.`,
    },
  ],

  exercises: [
    {
      id: 'bt1',
      prompt: String.raw`Tìm tập xác định của hàm số $y=\log_3(x+2)$.`,
      solution: String.raw`Hàm số xác định khi $x+2>0\iff x>-2$.

Vậy $\mathcal{D}=(-2;+\infty)$.`,
    },
    {
      id: 'bt2',
      prompt: String.raw`Tìm tập xác định của hàm số $y=\ln(5-x)$.`,
      solution: String.raw`Hàm số xác định khi $5-x>0\iff x<5$.

Vậy $\mathcal{D}=(-\infty;5)$.`,
    },
    {
      id: 'bt3',
      prompt: String.raw`So sánh $3^{0{,}5}$ và $3^{0{,}6}$.`,
      solution: String.raw`Cơ số $3>1$ nên hàm số $y=3^x$ đồng biến.

Vì $0{,}5<0{,}6$ nên $3^{0{,}5}<3^{0{,}6}$.`,
    },
    {
      id: 'bt4',
      prompt: String.raw`So sánh $\log_32$ và $\log_35$.`,
      solution: String.raw`Cơ số $3>1$ nên hàm số $y=\log_3x$ đồng biến.

Vì $2<5$ nên $\log_32<\log_35$.`,
    },
    {
      id: 'bt5',
      prompt: String.raw`Giải phương trình $2^x=16$.`,
      solution: String.raw`$16=2^4$ nên $2^x=2^4$.

Do đó $x=4$.`,
    },
    {
      id: 'bt6',
      prompt: String.raw`Giải phương trình $\log_2x=3$.`,
      solution: String.raw`Điều kiện: $x>0$.

$\log_2x=3\iff x=2^3=8$.

Vậy $x=8$.`,
    },
  ],

  quiz: [
    {
      id: 'q1',
      question: String.raw`Tập xác định của hàm số $y=a^x$ là`,
      options: [
        String.raw`$(0;+\infty)$`,
        String.raw`$[0;+\infty)$`,
        String.raw`$\mathbb{R}$`,
        String.raw`$\mathbb{R}\setminus\{0\}$`,
      ],
      answer: 2,
      explanation: String.raw`Hàm số mũ xác định với mọi số thực $x$.`,
    },
    {
      id: 'q2',
      question: String.raw`Tập giá trị của hàm số $y=a^x$ là`,
      options: [
        String.raw`$\mathbb{R}$`,
        String.raw`$[1;+\infty)$`,
        String.raw`$(-\infty;0)$`,
        String.raw`$(0;+\infty)$`,
      ],
      answer: 3,
      explanation: String.raw`Lũy thừa với cơ số dương luôn nhận giá trị dương.`,
    },
    {
      id: 'q3',
      question: String.raw`Tập xác định của hàm số $y=\log_ax$ là`,
      options: [
        String.raw`$\mathbb{R}$`,
        String.raw`$[0;+\infty)$`,
        String.raw`$(0;+\infty)$`,
        String.raw`$\mathbb{R}\setminus\{0\}$`,
      ],
      answer: 2,
      explanation: String.raw`Logarit chỉ xác định với số dương.`,
    },
    {
      id: 'q4',
      question: String.raw`Tập giá trị của hàm số $y=\log_ax$ là`,
      options: [
        String.raw`$(0;+\infty)$`,
        String.raw`$\mathbb{R}$`,
        String.raw`$[0;+\infty)$`,
        String.raw`$(-\infty;0)$`,
      ],
      answer: 1,
      explanation: String.raw`Logarit có thể nhận mọi giá trị thực.`,
    },
    {
      id: 'q5',
      question: String.raw`Nếu $a>1$ thì hàm số $y=a^x$`,
      options: [
        'Không đổi trên $\\mathbb{R}$.',
        'Chỉ xác định trên $(0;+\\infty)$.',
        'Đồng biến trên $\\mathbb{R}$.',
        'Nghịch biến trên $\\mathbb{R}$.',
      ],
      answer: 2,
      explanation: 'Cơ số lớn hơn 1 thì hàm số mũ đồng biến.',
    },
    {
      id: 'q6',
      question: String.raw`Nếu $0<a<1$ thì hàm số $y=\log_ax$`,
      options: [
        'Nghịch biến trên $(0;+\\infty)$.',
        'Đồng biến trên $(0;+\\infty)$.',
        'Đồng biến trên $\\mathbb{R}$.',
        'Nghịch biến trên $\\mathbb{R}$.',
      ],
      answer: 0,
      explanation: 'Cơ số nhỏ hơn 1 thì hàm logarit nghịch biến trên tập xác định.',
    },
    {
      id: 'q7',
      question: String.raw`Đồ thị hàm số $y=a^x$ luôn đi qua điểm`,
      options: ['$(0;0)$', '$(0;1)$', '$(1;0)$', '$(1;1)$'],
      answer: 1,
      explanation: String.raw`$a^0=1$ nên đồ thị qua $(0;1)$.`,
    },
    {
      id: 'q8',
      question: String.raw`Đồ thị hàm số $y=\log_ax$ luôn đi qua điểm`,
      options: ['$(0;1)$', '$(0;0)$', '$(1;0)$', '$(a;a)$'],
      answer: 2,
      explanation: String.raw`$\log_a1=0$ nên đồ thị qua $(1;0)$.`,
    },
  ],

  trueFalse: [
    {
      id: 'tf1',
      stem: String.raw`Cho hàm số $y=2^x$.`,
      items: [
        { text: String.raw`Tập xác định là $\mathbb{R}$.`, answer: true },
        { text: String.raw`Tập giá trị là $(0;+\infty)$.`, answer: true },
        { text: String.raw`Hàm số đồng biến trên $\mathbb{R}$.`, answer: true },
        { text: String.raw`Đồ thị đi qua điểm $(1;0)$.`, answer: false },
      ],
      explanation: String.raw`Đồ thị đi qua $(0;1)$, không phải $(1;0)$.`,
    },
    {
      id: 'tf2',
      stem: String.raw`Cho hàm số $y=\log_2x$.`,
      items: [
        { text: String.raw`Tập xác định là $(0;+\infty)$.`, answer: true },
        { text: String.raw`Tập giá trị là $(0;+\infty)$.`, answer: false },
        { text: String.raw`Hàm số đồng biến trên $(0;+\infty)$.`, answer: true },
        { text: String.raw`Đồ thị đi qua điểm $(0;1)$.`, answer: false },
      ],
      explanation: String.raw`Tập giá trị của $y=\log_2x$ là $\mathbb{R}$; đồ thị đi qua $(1;0)$, không phải $(0;1)$.`,
    },
    {
      id: 'tf3',
      stem: String.raw`Cho $0<a<1$.`,
      items: [
        { text: String.raw`Hàm số $y=a^x$ đồng biến trên $\mathbb{R}$.`, answer: false },
        { text: String.raw`Hàm số $y=\log_ax$ nghịch biến trên $(0;+\infty)$.`, answer: true },
        { text: String.raw`Đồ thị $y=a^x$ đi qua $(0;1)$.`, answer: true },
        { text: String.raw`$a^0=0$.`, answer: false },
      ],
      explanation: String.raw`Với $0<a<1$, hàm số $y=a^x$ nghịch biến chứ không đồng biến; $a^0=1$, không phải $0$.`,
    },
  ],

  shortAnswer: [
    {
      id: 'sa1',
      question: String.raw`Tính $2^5$.`,
      answer: '32',
      unit: '',
      explanation: String.raw`$2^5=32$.`,
    },
    {
      id: 'sa2',
      question: String.raw`Tính $\log_232$.`,
      answer: '5',
      unit: '',
      explanation: String.raw`$2^5=32$ nên $\log_232=5$.`,
    },
    {
      id: 'sa3',
      question: String.raw`Giải phương trình $3^x=27$.`,
      answer: '3',
      unit: '',
      explanation: String.raw`$27=3^3$ nên $x=3$.`,
    },
    {
      id: 'sa4',
      question: String.raw`Giải phương trình $\log_3x=2$.`,
      answer: '9',
      unit: '',
      explanation: String.raw`$\log_3x=2\iff x=3^2=9$.`,
    },
  ],
}

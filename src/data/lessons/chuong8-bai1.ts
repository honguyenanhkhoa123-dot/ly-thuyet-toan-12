import type { Lesson } from '../types'

export const chuong8Bai1: Lesson = {
  id: 'bai-1',
  chapterId: 'chuong-8',
  title: 'Đại số tổ hợp',
  summary: 'Quy tắc đếm, hoán vị, chỉnh hợp và tổ hợp.',
  minutes: 22,

  theory: [
    {
      subtitle: 'Quy tắc cộng và quy tắc nhân',
      content: String.raw`**Quy tắc cộng:** một công việc $X$ có thể thực hiện theo một trong $k$ phương án khác nhau, trong đó phương án $1$ có $n_1$ cách, phương án $2$ có $n_2$ cách, …, phương án $k$ có $n_k$ cách. Khi đó số cách thực hiện công việc $X$ là $n_1+n_2+\cdots+n_k$.

**Quy tắc nhân:** để thực hiện công việc $X$ phải hoàn thành $k$ công đoạn liên tiếp, trong đó công đoạn $1$ có $n_1$ cách, công đoạn $2$ có $n_2$ cách, …, công đoạn $k$ có $n_k$ cách. Khi đó số cách thực hiện công việc $X$ là $n_1\cdot n_2\cdots n_k$.`,
      formula: String.raw`n_1+n_2+\cdots+n_k,\qquad n_1\cdot n_2\cdots n_k`,
      note: String.raw`Quy tắc cộng dùng khi các phương án **phân biệt**; quy tắc nhân dùng khi các công đoạn **nối tiếp** và phải thực hiện tất cả.`,
    },
    {
      subtitle: 'Hoán vị',
      content: String.raw`Một **hoán vị** của $n$ phần tử là một cách sắp xếp $n$ phần tử đó theo một thứ tự nhất định.

Số các hoán vị của $n$ phần tử là $P_n=n!=1\cdot2\cdot3\cdots n$, quy ước $0!=1$.`,
      formula: String.raw`P_n=n!`,
      note: String.raw`Hoán vị dùng khi bài toán yêu cầu **sắp xếp** đủ $n$ phần tử.`,
    },
    {
      subtitle: 'Tổ hợp',
      content: String.raw`Một **tổ hợp** chập $k$ của $n$ phần tử là một tập con gồm $k$ phần tử của tập $n$ phần tử đó.

Số các tổ hợp chập $k$ của $n$ phần tử là $C_n^k=\dfrac{n!}{k!(n-k)!}$ với $0\le k\le n$.

Tính chất: $C_n^k=C_n^{\,n-k}$ và $C_{n-1}^{k-1}+C_{n-1}^{k}=C_n^k$.`,
      formula: String.raw`C_n^k=\dfrac{n!}{k!(n-k)!}`,
      note: String.raw`Tổ hợp dùng khi bài toán yêu cầu **chọn** $k$ phần tử, không quan tâm thứ tự.`,
    },
    {
      subtitle: 'Chỉnh hợp',
      content: String.raw`Một **chỉnh hợp** chập $k$ của $n$ phần tử là một cách chọn $k$ phần tử từ $n$ phần tử rồi **sắp xếp** $k$ phần tử đó theo một thứ tự.

Số các chỉnh hợp chập $k$ của $n$ phần tử là $A_n^k=\dfrac{n!}{(n-k)!}$ với $0\le k\le n$.

Mối quan hệ: $A_n^k=C_n^k\cdot P_k$.`,
      formula: String.raw`A_n^k=\dfrac{n!}{(n-k)!},\qquad A_n^k=C_n^k\cdot k!`,
      note: String.raw`Chỉnh hợp **có xếp thứ tự**, tổ hợp **không xếp thứ tự**.`,
    },
  ],

  examples: [
    {
      id: 'vd1',
      title: 'Quy tắc nhân',
      prompt: String.raw`Một bạn có $3$ chiếc áo và $4$ chiếc quần. Hỏi bạn có bao nhiêu cách chọn một bộ gồm một áo và một quần?`,
      steps: [
        String.raw`Công việc gồm hai công đoạn: chọn áo và chọn quần.`,
        String.raw`Chọn áo có $3$ cách; chọn quần có $4$ cách.`,
        String.raw`Theo quy tắc nhân, số cách là $3\cdot4=12$.`,
      ],
      answer: String.raw`$12$ cách.`,
    },
    {
      id: 'vd2',
      title: 'Quy tắc cộng',
      prompt: String.raw`Một cửa hàng có $5$ loại bánh và $6$ loại nước. Hỏi có bao nhiêu cách chọn một loại bánh **hoặc** một loại nước?`,
      steps: [
        String.raw`Phương án $1$: chọn bánh có $5$ cách.`,
        String.raw`Phương án $2$: chọn nước có $6$ cách.`,
        String.raw`Hai phương án loại trừ nhau nên theo quy tắc cộng có $5+6=11$ cách.`,
      ],
      answer: String.raw`$11$ cách.`,
    },
    {
      id: 'vd3',
      title: 'Hoán vị',
      prompt: String.raw`Có bao nhiêu cách xếp $5$ học sinh vào một hàng dọc?`,
      steps: [
        String.raw`Mỗi cách xếp là một hoán vị của $5$ học sinh.`,
        String.raw`Số cách là $P_5=5!=120$.`,
      ],
      answer: String.raw`$120$ cách.`,
    },
    {
      id: 'vd4',
      title: 'Tổ hợp',
      prompt: String.raw`Có bao nhiêu cách chọn $3$ học sinh từ $10$ học sinh để lập một đội?`,
      steps: [
        String.raw`Chọn $3$ học sinh, không quan tâm thứ tự, nên dùng tổ hợp.`,
        String.raw`Số cách là $C_{10}^3=\dfrac{10!}{3!\,7!}=120$.`,
      ],
      answer: String.raw`$120$ cách.`,
    },
    {
      id: 'vd5',
      title: 'Chỉnh hợp',
      prompt: String.raw`Có bao nhiêu cách chọn một lớp trưởng và một lớp phó từ $8$ học sinh?`,
      steps: [
        String.raw`Chọn $2$ học sinh từ $8$ rồi phân công vào $2$ vị trí khác nhau, nên dùng chỉnh hợp.`,
        String.raw`Số cách là $A_8^2=\dfrac{8!}{6!}=8\cdot7=56$.`,
      ],
      answer: String.raw`$56$ cách.`,
    },
  ],

  exercises: [
    {
      id: 'bt1',
      prompt: String.raw`Một bạn có $4$ chiếc áo và $5$ chiếc quần. Hỏi có bao nhiêu cách chọn một bộ gồm một áo và một quần?`,
      solution: String.raw`Theo quy tắc nhân, số cách là $4\cdot5=20$ cách.`,
    },
    {
      id: 'bt2',
      prompt: String.raw`Có bao nhiêu cách xếp $6$ người vào một hàng dọc?`,
      solution: String.raw`Số cách xếp là $P_6=6!=720$ cách.`,
    },
    {
      id: 'bt3',
      prompt: String.raw`Tính $C_8^3$.`,
      solution: String.raw`$C_8^3=\dfrac{8!}{3!\,5!}=\dfrac{8\cdot7\cdot6}{3\cdot2\cdot1}=56$.`,
    },
    {
      id: 'bt4',
      prompt: String.raw`Tính $A_6^2$.`,
      solution: String.raw`$A_6^2=\dfrac{6!}{4!}=6\cdot5=30$.`,
    },
    {
      id: 'bt5',
      prompt: String.raw`Một lớp có $5$ học sinh nam và $4$ học sinh nữ. Hỏi có bao nhiêu cách chọn $2$ học sinh nam và $1$ học sinh nữ?`,
      hint: String.raw`Chọn nam và chọn nữ là hai công đoạn liên tiếp.`,
      solution: String.raw`Chọn $2$ nam từ $5$: $C_5^2=10$ cách. Chọn $1$ nữ từ $4$: $C_4^1=4$ cách.

Theo quy tắc nhân, số cách là $10\cdot4=40$ cách.`,
    },
    {
      id: 'bt6',
      prompt: String.raw`Từ các chữ số $1,\ 2,\ 3,\ 4,\ 5$ có thể lập được bao nhiêu số tự nhiên có $3$ chữ số khác nhau?`,
      hint: String.raw`Chọn $3$ chữ số và sắp xếp thứ tự.`,
      solution: String.raw`Mỗi số là một chỉnh hợp chập $3$ của $5$ chữ số.

Số các số là $A_5^3=\dfrac{5!}{2!}=5\cdot4\cdot3=60$.`,
    },
  ],

  quiz: [
    {
      id: 'q1',
      question: 'Quy tắc cộng được áp dụng khi',
      options: [
        'Công việc gồm các công đoạn liên tiếp.',
        'Cần sắp xếp thứ tự các phần tử.',
        'Công việc được chia thành các phương án phân biệt.',
        'Cần chọn ra một tập con.',
      ],
      answer: 2,
      explanation: 'Quy tắc cộng dùng khi công việc có nhiều phương án loại trừ nhau.',
    },
    {
      id: 'q2',
      question: 'Quy tắc nhân được áp dụng khi',
      options: [
        'Công việc được chia thành các phương án phân biệt.',
        'Công việc gồm các công đoạn liên tiếp.',
        'Các phần tử không cần sắp xếp.',
        'Chỉ có một cách thực hiện.',
      ],
      answer: 1,
      explanation: 'Quy tắc nhân dùng khi phải hoàn thành lần lượt tất cả các công đoạn.',
    },
    {
      id: 'q3',
      question: String.raw`Giá trị của $4!$ là`,
      options: ['12', '16', '24', '32'],
      answer: 2,
      explanation: String.raw`$4!=1\cdot2\cdot3\cdot4=24$.`,
    },
    {
      id: 'q4',
      question: String.raw`Giá trị của $C_6^2$ là`,
      options: ['30', '15', '12', '20'],
      answer: 1,
      explanation: String.raw`$C_6^2=\dfrac{6!}{2!\,4!}=\dfrac{6\cdot5}{2}=15$.`,
    },
    {
      id: 'q5',
      question: String.raw`Giá trị của $A_5^2$ là`,
      options: ['10', '15', '20', '25'],
      answer: 2,
      explanation: String.raw`$A_5^2=\dfrac{5!}{3!}=5\cdot4=20$.`,
    },
    {
      id: 'q6',
      question: String.raw`Công thức của $C_n^k$ là`,
      options: [
        String.raw`$\dfrac{n!}{(n-k)!}$`,
        String.raw`$\dfrac{n!}{k!}$`,
        String.raw`$n!$`,
        String.raw`$\dfrac{n!}{k!(n-k)!}$`,
      ],
      answer: 3,
      explanation: String.raw`Số tổ hợp chập $k$ của $n$ là $C_n^k=\dfrac{n!}{k!(n-k)!}$.`,
    },
    {
      id: 'q7',
      question: String.raw`Công thức của $A_n^k$ là`,
      options: [
        String.raw`$\dfrac{n!}{k!(n-k)!}$`,
        String.raw`$\dfrac{n!}{(n-k)!}$`,
        String.raw`$\dfrac{n!}{k!}$`,
        String.raw`$n!$`,
      ],
      answer: 1,
      explanation: String.raw`Số chỉnh hợp chập $k$ của $n$ là $A_n^k=\dfrac{n!}{(n-k)!}$.`,
    },
    {
      id: 'q8',
      question: String.raw`Đẳng thức nào đúng?`,
      options: [
        String.raw`$C_n^k=A_n^k$`,
        String.raw`$C_n^k=n!$`,
        String.raw`$C_n^k=k!$`,
        String.raw`$C_n^k=C_n^{\,n-k}$`,
      ],
      answer: 3,
      explanation: String.raw`Chọn $k$ phần tử cũng như bỏ lại $n-k$ phần tử, nên $C_n^k=C_n^{\,n-k}$.`,
    },
  ],

  trueFalse: [
    {
      id: 'tf1',
      stem: 'Các mệnh đề về giai thừa và tổ hợp:',
      items: [
        { text: String.raw`$5!=120$.`, answer: true },
        { text: String.raw`$4!=24$.`, answer: true },
        { text: String.raw`$C_5^2=10$.`, answer: true },
        { text: String.raw`$A_5^2=10$.`, answer: false },
      ],
      explanation: String.raw`$A_5^2=5\cdot4=20$, không phải $10$.`,
    },
    {
      id: 'tf2',
      stem: String.raw`Cho $n=6$.`,
      items: [
        { text: String.raw`$C_6^3=20$.`, answer: true },
        { text: String.raw`$C_6^2=15$.`, answer: true },
        { text: String.raw`$A_6^2=30$.`, answer: true },
        { text: String.raw`$C_6^2=30$.`, answer: false },
      ],
      explanation: String.raw`$C_6^2=15$, còn $A_6^2=30$.`,
    },
    {
      id: 'tf3',
      stem: 'Các khẳng định về quy tắc đếm:',
      items: [
        { text: String.raw`Quy tắc cộng: $n_1+n_2+\cdots+n_k$.`, answer: true },
        { text: String.raw`Quy tắc nhân: $n_1\cdot n_2\cdots n_k$.`, answer: true },
        { text: String.raw`Số hoán vị của $n$ phần tử là $n!$.`, answer: true },
        { text: String.raw`Chỉnh hợp và tổ hợp là như nhau.`, answer: false },
      ],
      explanation: 'Chỉnh hợp có xếp thứ tự, tổ hợp không xếp thứ tự.',
    },
  ],

  shortAnswer: [
    {
      id: 'sa1',
      question: String.raw`Tính $5!$.`,
      answer: '120',
      unit: '',
      explanation: String.raw`$5!=1\cdot2\cdot3\cdot4\cdot5=120$.`,
    },
    {
      id: 'sa2',
      question: String.raw`Tính $C_7^2$.`,
      answer: '21',
      unit: '',
      explanation: String.raw`$C_7^2=\dfrac{7\cdot6}{2}=21$.`,
    },
    {
      id: 'sa3',
      question: String.raw`Tính $A_6^3$.`,
      answer: '120',
      unit: '',
      explanation: String.raw`$A_6^3=6\cdot5\cdot4=120$.`,
    },
    {
      id: 'sa4',
      question: 'Một cửa hàng có 3 loại bánh và 4 loại nước. Hỏi có bao nhiêu cách chọn một loại bánh và một loại nước?',
      answer: '12',
      unit: 'cách',
      explanation: 'Theo quy tắc nhân: $3\\cdot4=12$ cách.',
    },
  ],
}

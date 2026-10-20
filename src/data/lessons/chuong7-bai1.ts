import type { Lesson } from '../types'

export const chuong7Bai1: Lesson = {
  id: 'bai-1',
  chapterId: 'chuong-7',
  title: 'Các đặc trưng của mẫu số liệu không ghép nhóm',
  summary: 'Số trung bình, trung vị, tứ phân vị, mốt, khoảng biến thiên, phương sai và độ lệch chuẩn.',
  minutes: 24,

  theory: [
    {
      subtitle: 'Số trung bình',
      content: String.raw`Cho mẫu số liệu $x_1,\ x_2,\ \ldots,\ x_n$. **Số trung bình** (kí hiệu $\overline{x}$) được tính bằng
$$\overline{x}=\dfrac{x_1+x_2+\cdots+x_n}{n}.$$

Nếu mẫu số liệu cho dưới dạng bảng tần số, trong đó $m_k$ là tần số của giá trị $x_k$ và $n=m_1+m_2+\cdots+m_k$, thì
$$\overline{x}=\dfrac{m_1x_1+m_2x_2+\cdots+m_kx_k}{n}.$$`,
      formula: String.raw`\overline{x}=\dfrac{x_1+x_2+\cdots+x_n}{n}`,
      note: String.raw`Số trung bình cho biết vị trí trung tâm của mẫu số liệu, nhưng bị ảnh hưởng mạnh bởi giá trị bất thường.`,
    },
    {
      subtitle: 'Số trung vị',
      content: String.raw`**Số trung vị** của mẫu số liệu, kí hiệu $M_e$, là giá trị chính giữa của mẫu số liệu đã được sắp xếp theo thứ tự không giảm.

Cách tìm:
- Nếu $n$ lẻ thì số trung vị là số hạng thứ $\dfrac{n+1}{2}$.
- Nếu $n$ chẵn thì số trung vị là trung bình cộng của số hạng thứ $\dfrac n2$ và số hạng thứ $\dfrac n2+1$.

Số trung vị chia đôi mẫu số liệu thành hai phần và **không bị ảnh hưởng** bởi giá trị bất thường.`,
      formula: String.raw`M_e=Q_2`,
      note: String.raw`Khi mẫu có giá trị bất thường, nên dùng trung vị thay cho số trung bình.`,
    },
    {
      subtitle: 'Tứ phân vị',
      content: String.raw`**Tứ phân vị** của mẫu số liệu gồm ba giá trị $Q_1,\ Q_2,\ Q_3$, chia mẫu số liệu đã sắp xếp thành bốn phần đều nhau.

Cách tìm:
- Sắp xếp mẫu số liệu theo thứ tự không giảm.
- $Q_2$ là trung vị của mẫu số liệu.
- $Q_1$ là trung vị của nửa mẫu bên trái $Q_2$ (không gồm $Q_2$ nếu $n$ lẻ).
- $Q_3$ là trung vị của nửa mẫu bên phải $Q_2$ (không gồm $Q_2$ nếu $n$ lẻ).`,
      formula: String.raw`Q_1,\quad Q_2=M_e,\quad Q_3`,
      note: String.raw`Bộ ba $Q_1,\ Q_2,\ Q_3$ phản ánh độ phân tán và xu thế trung tâm của mẫu.`,
    },
    {
      subtitle: 'Mốt',
      content: String.raw`**Mốt** của mẫu số liệu, kí hiệu $M_o$, là giá trị xuất hiện với tần số lớn nhất.

Một mẫu số liệu có thể có một hoặc nhiều mốt.`,
      formula: String.raw`M_o`,
      note: String.raw`Mốt dùng để đo xu thế trung tâm khi mẫu có nhiều giá trị trùng nhau.`,
    },
    {
      subtitle: 'Khoảng biến thiên và khoảng tứ phân vị',
      content: String.raw`**Khoảng biến thiên** $R$ là hiệu giữa giá trị lớn nhất và giá trị nhỏ nhất:
$$R=x_{\max}-x_{\min}.$$

**Khoảng tứ phân vị** $\Delta_Q$ là hiệu giữa tứ phân vị thứ ba và tứ phân vị thứ nhất:
$$\Delta_Q=Q_3-Q_1.$$

Giá trị $x$ được coi là **giá trị bất thường** nếu
$$x<Q_1-\dfrac32\Delta_Q\quad\text{or}\quad x>Q_3+\dfrac32\Delta_Q.$$`,
      formula: String.raw`R=x_{\max}-x_{\min},\qquad \Delta_Q=Q_3-Q_1`,
      note: String.raw`Khoảng tứ phân vị ít bị ảnh hưởng bởi giá trị bất thường hơn khoảng biến thiên.`,
    },
    {
      subtitle: 'Phương sai và độ lệch chuẩn',
      content: String.raw`Cho mẫu số liệu $x_1,\ x_2,\ \ldots,\ x_n$ có số trung bình $\overline{x}$.

**Phương sai** là
$$s^2=\dfrac{(x_1-\overline{x})^2+(x_2-\overline{x})^2+\cdots+(x_n-\overline{x})^2}{n}.$$

**Độ lệch chuẩn** là căn bậc hai của phương sai:
$$s=\sqrt{s^2}.$$

Phương sai và độ lệch chuẩn đo mức độ phân tán của mẫu số liệu quanh số trung bình.`,
      formula: String.raw`s^2=\dfrac{1}{n}\sum_{i=1}^{n}(x_i-\overline{x})^2,\qquad s=\sqrt{s^2}`,
      note: String.raw`Độ lệch chuẩn cùng đơn vị với dữ liệu nên thường được dùng để so sánh độ phân tán.`,
    },
  ],

  examples: [
    {
      id: 'vd1',
      title: 'Số trung bình và trung vị',
      prompt: String.raw`Cho mẫu số liệu: $1;\ 2;\ 3;\ 4;\ 5;\ 6;\ 7;\ 8;\ 9$. Tính số trung bình và số trung vị.`,
      steps: [
        String.raw`$n=9$, tổng các giá trị là $45$ nên $\overline{x}=\dfrac{45}{9}=5$.`,
        String.raw`Mẫu đã sắp xếp, $n$ lẻ nên trung vị là số hạng thứ $\dfrac{9+1}{2}=5$.`,
        String.raw`Vậy $M_e=5$.`,
      ],
      answer: String.raw`$\overline{x}=5$; $M_e=5$.`,
    },
    {
      id: 'vd2',
      title: 'Tứ phân vị',
      prompt: String.raw`Cho mẫu số liệu: $1;\ 2;\ 3;\ 4;\ 5;\ 6;\ 7;\ 8;\ 9$. Tìm $Q_1,\ Q_2,\ Q_3$ và khoảng tứ phân vị.`,
      steps: [
        String.raw`$Q_2=M_e=5$.`,
        String.raw`Nửa bên trái (không gồm $5$) là $1;\ 2;\ 3;\ 4$, trung vị là $\dfrac{2+3}{2}=2{,}5$ nên $Q_1=2{,}5$.`,
        String.raw`Nửa bên phải là $6;\ 7;\ 8;\ 9$, trung vị là $\dfrac{7+8}{2}=7{,}5$ nên $Q_3=7{,}5$.`,
        String.raw`$\Delta_Q=Q_3-Q_1=7{,}5-2{,}5=5$.`,
      ],
      answer: String.raw`$Q_1=2{,}5$; $Q_2=5$; $Q_3=7{,}5$; $\Delta_Q=5$.`,
    },
    {
      id: 'vd3',
      title: 'Mốt',
      prompt: String.raw`Cho mẫu số liệu: $3;\ 3;\ 4;\ 5;\ 5;\ 5;\ 6;\ 7$. Tìm mốt.`,
      steps: [
        String.raw`Giá trị $3$ xuất hiện $2$ lần; $4$ xuất hiện $1$ lần; $5$ xuất hiện $3$ lần; $6$ và $7$ mỗi giá trị xuất hiện $1$ lần.`,
        String.raw`Giá trị có tần số lớn nhất là $5$.`,
      ],
      answer: String.raw`$M_o=5$.`,
    },
    {
      id: 'vd4',
      title: 'Phát hiện giá trị bất thường',
      prompt: String.raw`Cho mẫu số liệu: $1;\ 2;\ 3;\ 4;\ 5;\ 6;\ 7;\ 8;\ 100$. Kiểm tra xem $100$ có phải là giá trị bất thường không.`,
      steps: [
        String.raw`$n=9$, $Q_2=5$; nửa trái $1;2;3;4$ cho $Q_1=2{,}5$; nửa phải $6;7;8;100$ cho $Q_3=7{,}5$.`,
        String.raw`$\Delta_Q=7{,}5-2{,}5=5$.`,
        String.raw`Giới hạn trên: $Q_3+\dfrac32\Delta_Q=7{,}5+7{,}5=15$.`,
        String.raw`Vì $100>15$ nên $100$ là giá trị bất thường.`,
      ],
      answer: String.raw`$100$ là giá trị bất thường.`,
    },
    {
      id: 'vd5',
      title: 'Phương sai và độ lệch chuẩn',
      prompt: String.raw`Cho mẫu số liệu: $1;\ 3;\ 5;\ 7;\ 9$. Tính phương sai và độ lệch chuẩn.`,
      steps: [
        String.raw`$\overline{x}=\dfrac{1+3+5+7+9}{5}=5$.`,
        String.raw`Tổng bình phương độ lệch: $(1-5)^2+(3-5)^2+(5-5)^2+(7-5)^2+(9-5)^2=16+4+0+4+16=40$.`,
        String.raw`$s^2=\dfrac{40}{5}=8$; $s=\sqrt8=2\sqrt2\approx2{,}83$.`,
      ],
      answer: String.raw`$s^2=8$; $s\approx2{,}83$.`,
    },
  ],

  exercises: [
    {
      id: 'bt1',
      prompt: String.raw`Tính số trung bình của mẫu số liệu: $2;\ 4;\ 6;\ 8;\ 10$.`,
      solution: String.raw`$\overline{x}=\dfrac{2+4+6+8+10}{5}=\dfrac{30}{5}=6$.`,
    },
    {
      id: 'bt2',
      prompt: String.raw`Tìm số trung vị của mẫu số liệu: $3;\ 5;\ 7;\ 9;\ 11;\ 13$.`,
      solution: String.raw`$n=6$ chẵn nên trung vị là trung bình cộng của số hạng thứ $3$ và thứ $4$: $\dfrac{7+9}{2}=8$.`,
    },
    {
      id: 'bt3',
      prompt: String.raw`Tìm $Q_1$ và $Q_3$ của mẫu số liệu: $1;\ 2;\ 3;\ 4;\ 5;\ 6;\ 7;\ 8$.`,
      solution: String.raw`$n=8$, $Q_2=\dfrac{4+5}{2}=4{,}5$.

Nửa trái $1;2;3;4$ có trung vị $2{,}5$ nên $Q_1=2{,}5$. Nửa phải $5;6;7;8$ có trung vị $6{,}5$ nên $Q_3=6{,}5$.`,
    },
    {
      id: 'bt4',
      prompt: String.raw`Tìm mốt của mẫu số liệu: $2;\ 3;\ 3;\ 4;\ 5;\ 5;\ 5;\ 6$.`,
      solution: String.raw`Giá trị $5$ xuất hiện $3$ lần, nhiều nhất nên $M_o=5$.`,
    },
    {
      id: 'bt5',
      prompt: String.raw`Tính khoảng biến thiên và khoảng tứ phân vị của mẫu số liệu: $4;\ 6;\ 7;\ 8;\ 9;\ 10;\ 12$.`,
      hint: String.raw`Tìm trung vị, sau đó tìm trung vị của hai nửa.`,
      solution: String.raw`$n=7$, trung vị $M_e=8$.

Nửa trái $4;6;7$ có trung vị $6$ nên $Q_1=6$. Nửa phải $9;10;12$ có trung vị $10$ nên $Q_3=10$.

$R=12-4=8$; $\Delta_Q=10-6=4$.`,
    },
    {
      id: 'bt6',
      prompt: String.raw`Tính phương sai và độ lệch chuẩn của mẫu số liệu: $1;\ 3;\ 5;\ 7;\ 9$.`,
      hint: String.raw`Tính số trung bình trước, rồi tính tổng bình phương độ lệch.`,
      solution: String.raw`$\overline{x}=5$.

Tổng bình phương độ lệch là $16+4+0+4+16=40$, nên $s^2=\dfrac{40}{5}=8$.

$s=\sqrt8=2\sqrt2\approx2{,}83$.`,
    },
  ],

  quiz: [
    {
      id: 'q1',
      question: String.raw`Số trung bình của mẫu số liệu $x_1,\ x_2,\ \ldots,\ x_n$ là`,
      options: [
        String.raw`$\dfrac{x_1+x_2+\cdots+x_n}{n}$`,
        String.raw`$x_1+x_2+\cdots+x_n$`,
        String.raw`$\dfrac{n}{x_1+x_2+\cdots+x_n}$`,
        String.raw`$x_{\max}-x_{\min}$`,
      ],
      answer: 0,
      explanation: 'Số trung bình bằng tổng các giá trị chia cho số giá trị.',
    },
    {
      id: 'q2',
      question: 'Số trung vị của mẫu số liệu là',
      options: [
        'Giá trị xuất hiện nhiều nhất.',
        'Giá trị chính giữa của mẫu đã sắp xếp.',
        'Hiệu giữa giá trị lớn nhất và nhỏ nhất.',
        'Căn bậc hai của phương sai.',
      ],
      answer: 1,
      explanation: 'Trung vị là giá trị chia đôi mẫu số liệu đã sắp xếp.',
    },
    {
      id: 'q3',
      question: String.raw`Tứ phân vị thứ hai $Q_2$ chính là`,
      options: [
        'Số trung bình.',
        'Mốt.',
        'Số trung vị.',
        'Khoảng biến thiên.',
      ],
      answer: 2,
      explanation: String.raw`$Q_2=M_e$ theo định nghĩa tứ phân vị.`,
    },
    {
      id: 'q4',
      question: String.raw`Khoảng tứ phân vị $\Delta_Q$ được tính bởi`,
      options: [
        String.raw`$Q_3+Q_1$`,
        String.raw`$Q_3-Q_1$`,
        String.raw`$Q_2-Q_1$`,
        String.raw`$x_{\max}-x_{\min}$`,
      ],
      answer: 1,
      explanation: String.raw`$\Delta_Q=Q_3-Q_1$.`,
    },
    {
      id: 'q5',
      question: 'Khoảng biến thiên của mẫu số liệu là',
      options: [
        'Hiệu giữa $Q_3$ và $Q_1$.',
        'Giá trị có tần số lớn nhất.',
        'Trung bình cộng của hai giá trị giữa.',
        'Hiệu giữa giá trị lớn nhất và giá trị nhỏ nhất.',
      ],
      answer: 3,
      explanation: String.raw`$R=x_{\max}-x_{\min}$.`,
    },
    {
      id: 'q6',
      question: 'Phương sai của mẫu số liệu được tính bằng',
      options: [
        String.raw`$\dfrac{1}{n}\sum_{i=1}^{n}(x_i-\overline{x})^2$`,
        String.raw`$\sum_{i=1}^{n}(x_i-\overline{x})^2$`,
        String.raw`$\sqrt{\dfrac{1}{n}\sum_{i=1}^{n}(x_i-\overline{x})^2}$`,
        String.raw`$\dfrac{1}{n}\sum_{i=1}^{n}x_i$`,
      ],
      answer: 0,
      explanation: 'Phương sai là trung bình cộng của các bình phương độ lệch.',
    },
    {
      id: 'q7',
      question: 'Độ lệch chuẩn $s$ liên hệ với phương sai $s^2$ bởi',
      options: [
        String.raw`$s=s^2$`,
        String.raw`$s=2s^2$`,
        String.raw`$s=\sqrt{s^2}$`,
        String.raw`$s=(s^2)^2$`,
      ],
      answer: 2,
      explanation: 'Độ lệch chuẩn là căn bậc hai của phương sai.',
    },
    {
      id: 'q8',
      question: 'Mốt của mẫu số liệu là',
      options: [
        'Giá trị chính giữa của mẫu.',
        'Giá trị lớn nhất của mẫu.',
        'Giá trị nhỏ nhất của mẫu.',
        'Giá trị có tần số lớn nhất.',
      ],
      answer: 3,
      explanation: 'Mốt là giá trị xuất hiện nhiều nhất trong mẫu.',
    },
  ],

  trueFalse: [
    {
      id: 'tf1',
      stem: String.raw`Cho mẫu số liệu: $1;\ 2;\ 3;\ 4;\ 5$.`,
      items: [
        { text: String.raw`Số trung bình bằng $3$.`, answer: true },
        { text: String.raw`Số trung vị bằng $3$.`, answer: true },
        { text: String.raw`Khoảng biến thiên bằng $4$.`, answer: true },
        { text: String.raw`Phương sai bằng $10$.`, answer: false },
      ],
      explanation: String.raw`Tổng bình phương độ lệch là $4+1+0+1+4=10$ nên $s^2=\dfrac{10}{5}=2$, không phải $10$.`,
    },
    {
      id: 'tf2',
      stem: String.raw`Cho mẫu số liệu: $2;\ 4;\ 4;\ 6;\ 6;\ 8$.`,
      items: [
        { text: String.raw`Số trung bình bằng $5$.`, answer: true },
        { text: String.raw`Số trung vị bằng $5$.`, answer: true },
        { text: String.raw`$Q_1=4$.`, answer: true },
        { text: String.raw`$Q_3=8$.`, answer: false },
      ],
      explanation: String.raw`Nửa phải là $6;6;8$ nên $Q_3=6$, không phải $8$.`,
    },
    {
      id: 'tf3',
      stem: String.raw`Cho mẫu số liệu: $1;\ 2;\ 3;\ 4;\ 5;\ 6;\ 7;\ 8;\ 9$.`,
      items: [
        { text: String.raw`$Q_1=2{,}5$.`, answer: true },
        { text: String.raw`$Q_3=7{,}5$.`, answer: true },
        { text: String.raw`$\Delta_Q=5$.`, answer: true },
        { text: String.raw`Nếu thay $9$ bằng $100$ thì $100$ không phải giá trị bất thường.`, answer: false },
      ],
      explanation: String.raw`Với mẫu $1;2;3;4;5;6;7;8;100$, giới hạn trên là $Q_3+\dfrac32\Delta_Q=7{,}5+7{,}5=15$, nên $100$ là giá trị bất thường.`,
    },
  ],

  shortAnswer: [
    {
      id: 'sa1',
      question: String.raw`Tính số trung bình của mẫu số liệu: $2;\ 4;\ 6;\ 8$.`,
      answer: '5',
      unit: '',
      explanation: String.raw`$\overline{x}=\dfrac{2+4+6+8}{4}=5$.`,
    },
    {
      id: 'sa2',
      question: String.raw`Tìm số trung vị của mẫu số liệu: $1;\ 3;\ 5;\ 7;\ 9$.`,
      answer: '5',
      unit: '',
      explanation: 'Mẫu có 5 giá trị đã sắp xếp nên trung vị là giá trị thứ 3, bằng 5.',
    },
    {
      id: 'sa3',
      question: String.raw`Tính khoảng biến thiên của mẫu số liệu: $3;\ 7;\ 8;\ 10;\ 15$.`,
      answer: '12',
      unit: '',
      explanation: String.raw`$R=15-3=12$.`,
    },
    {
      id: 'sa4',
      question: String.raw`Tính phương sai của mẫu số liệu: $2;\ 4;\ 6;\ 8;\ 10$.`,
      answer: '8',
      unit: '',
      explanation: String.raw`$\overline{x}=6$; tổng bình phương độ lệch là $16+4+0+4+16=40$; $s^2=\dfrac{40}{5}=8$.`,
    },
  ],
}

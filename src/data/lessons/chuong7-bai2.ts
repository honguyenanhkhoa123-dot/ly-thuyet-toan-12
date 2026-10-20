import type { Lesson } from '../types'

export const chuong7Bai2: Lesson = {
  id: 'bai-2',
  chapterId: 'chuong-7',
  title: 'Các đặc trưng của mẫu số liệu ghép nhóm',
  summary: 'Số trung bình, trung vị, tứ phân vị, mốt, khoảng biến thiên, phương sai và độ lệch chuẩn của mẫu ghép nhóm.',
  minutes: 26,

  theory: [
    {
      subtitle: 'Mẫu số liệu ghép nhóm',
      content: String.raw`**Mẫu số liệu ghép nhóm** là mẫu số liệu cho dưới dạng bảng tần số ghép nhóm. Mỗi nhóm số liệu thường được cho dưới dạng $[a_i;a_{i+1})$, trong đó $a_i$ là đầu mút trái và $a_{i+1}$ là đầu mút phải.

**Giá trị đại diện** của nhóm $[a_i;a_{i+1})$ là
$$x_i=\dfrac{a_i+a_{i+1}}{2}.$$

Độ dài của nhóm $[a_i;a_{i+1})$ là $a_{i+1}-a_i$. Các nhóm không giao nhau và nên có cùng độ dài.`,
      formula: String.raw`x_i=\dfrac{a_i+a_{i+1}}{2}`,
      note: String.raw`Giá trị đại diện thay cho mọi giá trị trong nhóm khi tính các số đặc trưng.`,
    },
    {
      subtitle: 'Số trung bình của mẫu ghép nhóm',
      content: String.raw`Cho mẫu số liệu ghép nhóm với $k$ nhóm, tần số tương ứng $m_1,\ m_2,\ \ldots,\ m_k$ và giá trị đại diện $x_1,\ x_2,\ \ldots,\ x_k$. Khi đó
$$\overline{x}=\dfrac{m_1x_1+m_2x_2+\cdots+m_kx_k}{n},$$
trong đó $n=m_1+m_2+\cdots+m_k$.

Số trung bình của mẫu ghép nhóm xấp xỉ số trung bình của mẫu số liệu gốc.`,
      formula: String.raw`\overline{x}=\dfrac{1}{n}\sum_{i=1}^{k}m_ix_i`,
      note: String.raw`Số trung bình vẫn bị ảnh hưởng bởi giá trị bất thường.`,
    },
    {
      subtitle: 'Trung vị của mẫu ghép nhóm',
      content: String.raw`Giả sử nhóm chứa trung vị là nhóm thứ $p$: $[a_p;a_{p+1})$, có tần số $m_p$. Khi đó
$$M_e=a_p+\dfrac{\dfrac n2-(m_1+\cdots+m_{p-1})}{m_p}\cdot(a_{p+1}-a_p).$$

Nếu $p=1$, quy ước $m_1+\cdots+m_{p-1}=0$.`,
      formula: String.raw`M_e=a_p+\dfrac{\dfrac n2-\sum_{i<p}m_i}{m_p}(a_{p+1}-a_p)`,
      note: String.raw`Trung vị của mẫu ghép nhóm xấp xỉ trung vị của mẫu gốc.`,
    },
    {
      subtitle: 'Tứ phân vị của mẫu ghép nhóm',
      content: String.raw`Tứ phân vị thứ nhất $Q_1$:
$$Q_1=a_p+\dfrac{\dfrac n4-(m_1+\cdots+m_{p-1})}{m_p}\cdot(a_{p+1}-a_p),$$
trong đó $[a_p;a_{p+1})$ là nhóm chứa $Q_1$.

Tứ phân vị thứ ba $Q_3$:
$$Q_3=a_p+\dfrac{\dfrac{3n}{4}-(m_1+\cdots+m_{p-1})}{m_p}\cdot(a_{p+1}-a_p),$$
trong đó $[a_p;a_{p+1})$ là nhóm chứa $Q_3$.

Tứ phân vị thứ hai $Q_2$ chính là trung vị $M_e$.`,
      formula: String.raw`Q_1,\quad Q_2=M_e,\quad Q_3`,
      note: String.raw`Ba tứ phân vị chia mẫu số liệu thành bốn phần, mỗi phần chứa khoảng $25\%$ giá trị.`,
    },
    {
      subtitle: 'Mốt của mẫu ghép nhóm',
      content: String.raw`Giả sử nhóm chứa mốt là nhóm thứ $j$: $[a_j;a_{j+1})$, có tần số $m_j$ lớn nhất. Khi đó
$$M_o=a_j+\dfrac{m_j-m_{j-1}}{(m_j-m_{j-1})+(m_j-m_{j+1})}\cdot(a_{j+1}-a_j).$$`,
      formula: String.raw`M_o=a_j+\dfrac{m_j-m_{j-1}}{2m_j-m_{j-1}-m_{j+1}}(a_{j+1}-a_j)`,
      note: String.raw`Mốt của mẫu ghép nhóm xấp xỉ mốt của mẫu gốc.`,
    },
    {
      subtitle: 'Khoảng biến thiên, phương sai và độ lệch chuẩn',
      content: String.raw`**Khoảng biến thiên** của mẫu ghép nhóm:
$$R=a_{k+1}-a_1.$$

**Khoảng tứ phân vị**:
$$\Delta_Q=Q_3-Q_1.$$

**Phương sai**:
$$s^2=\dfrac{m_1(x_1-\overline{x})^2+\cdots+m_k(x_k-\overline{x})^2}{n}.$$

Có thể tính nhanh:
$$s^2=\dfrac{1}{n}\left(m_1x_1^2+m_2x_2^2+\cdots+m_kx_k^2\right)-\overline{x}^2.$$

**Độ lệch chuẩn**: $s=\sqrt{s^2}$.`,
      formula: String.raw`s^2=\dfrac{1}{n}\sum_{i=1}^{k}m_i(x_i-\overline{x})^2`,
      note: String.raw`Khoảng tứ phân vị không bị ảnh hưởng bởi giá trị bất thường; khoảng biến thiên thì có.`,
    },
  ],

  examples: [
    {
      id: 'vd1',
      title: 'Số trung bình mẫu ghép nhóm',
      prompt: String.raw`Cho bảng tần số ghép nhóm:

| Nhóm | $[0;10)$ | $[10;20)$ | $[20;30)$ | $[30;40)$ |
| --- | --- | --- | --- | --- |
| Tần số | $4$ | $6$ | $10$ | $5$ |

Tính số trung bình.`,
      steps: [
        String.raw`Giá trị đại diện: $5;\ 15;\ 25;\ 35$.`,
        String.raw`$n=4+6+10+5=25$.`,
        String.raw`$\overline{x}=\dfrac{4\cdot5+6\cdot15+10\cdot25+5\cdot35}{25}=\dfrac{535}{25}=21{,}4$.`,
      ],
      answer: String.raw`$\overline{x}=21{,}4$.`,
    },
    {
      id: 'vd2',
      title: 'Trung vị và tứ phân vị',
      prompt: String.raw`Với bảng tần số ở ví dụ trên, tính $M_e$, $Q_1$, $Q_3$ và $\Delta_Q$.`,
      steps: [
        String.raw`$n=25$ nên $\dfrac n2=12{,}5$. Tần số tích luỹ: $4;\ 10;\ 20;\ 25$, nên nhóm chứa trung vị là $[20;30)$.`,
        String.raw`$M_e=20+\dfrac{12{,}5-10}{10}\cdot10=22{,}5$.`,
        String.raw`$\dfrac n4=6{,}25$ nên nhóm chứa $Q_1$ là $[10;20)$: $Q_1=10+\dfrac{6{,}25-4}{6}\cdot10=13{,}75$.`,
        String.raw`$\dfrac{3n}{4}=18{,}75$ nên nhóm chứa $Q_3$ là $[20;30)$: $Q_3=20+\dfrac{18{,}75-10}{10}\cdot10=28{,}75$.`,
        String.raw`$\Delta_Q=28{,}75-13{,}75=15$.`,
      ],
      answer: String.raw`$M_e=22{,}5$; $Q_1=13{,}75$; $Q_3=28{,}75$; $\Delta_Q=15$.`,
    },
    {
      id: 'vd3',
      title: 'Mốt',
      prompt: String.raw`Với bảng tần số ở ví dụ trên, tính mốt.`,
      steps: [
        String.raw`Nhóm có tần số lớn nhất là $[20;30)$ với $m_j=10$, $m_{j-1}=6$, $m_{j+1}=5$.`,
        String.raw`$M_o=20+\dfrac{10-6}{(10-6)+(10-5)}\cdot10=20+\dfrac{4}{9}\cdot10\approx24{,}44$.`,
      ],
      answer: String.raw`$M_o\approx24{,}44$.`,
    },
    {
      id: 'vd4',
      title: 'Phương sai và độ lệch chuẩn',
      prompt: String.raw`Với bảng tần số ở ví dụ trên, tính phương sai và độ lệch chuẩn.`,
      steps: [
        String.raw`$\overline{x}=21{,}4$; $\overline{x}^2=457{,}96$.`,
        String.raw`$\sum m_ix_i^2=4\cdot25+6\cdot225+10\cdot625+5\cdot1225=100+1350+6250+6125=13825$.`,
        String.raw`$s^2=\dfrac{13825}{25}-457{,}96=553-457{,}96=95{,}04$.`,
        String.raw`$s=\sqrt{95{,}04}\approx9{,}75$.`,
      ],
      answer: String.raw`$s^2=95{,}04$; $s\approx9{,}75$.`,
    },
  ],

  exercises: [
    {
      id: 'bt1',
      prompt: String.raw`Cho bảng tần số ghép nhóm:

| Nhóm | $[1;2)$ | $[2;3)$ | $[3;4)$ | $[4;5)$ |
| --- | --- | --- | --- | --- |
| Tần số | $3$ | $5$ | $7$ | $5$ |

Tính số trung bình.`,
      solution: String.raw`Giá trị đại diện: $1{,}5;\ 2{,}5;\ 3{,}5;\ 4{,}5$; $n=20$.

$\overline{x}=\dfrac{3\cdot1{,}5+5\cdot2{,}5+7\cdot3{,}5+5\cdot4{,}5}{20}=\dfrac{64}{20}=3{,}2$.`,
    },
    {
      id: 'bt2',
      prompt: String.raw`Với bảng tần số ở bài trên, tính trung vị $M_e$.`,
      solution: String.raw`$n=20$ nên $\dfrac n2=10$. Tần số tích luỹ: $3;\ 8;\ 15;\ 20$, nên nhóm chứa trung vị là $[3;4)$.

$M_e=3+\dfrac{10-8}{7}\cdot1=3+\dfrac27\approx3{,}29$.`,
    },
    {
      id: 'bt3',
      prompt: String.raw`Với bảng tần số ở bài 1, tính $Q_1$ và $Q_3$.`,
      solution: String.raw`$\dfrac n4=5$ nên nhóm chứa $Q_1$ là $[2;3)$: $Q_1=2+\dfrac{5-3}{5}\cdot1=2{,}4$.

$\dfrac{3n}{4}=15$ nên nhóm chứa $Q_3$ là $[3;4)$: $Q_3=3+\dfrac{15-8}{7}\cdot1=4$.`,
    },
    {
      id: 'bt4',
      prompt: String.raw`Với bảng tần số ở bài 1, tính mốt.`,
      solution: String.raw`Nhóm có tần số lớn nhất là $[3;4)$ với $m_j=7$, $m_{j-1}=5$, $m_{j+1}=5$.

$M_o=3+\dfrac{7-5}{(7-5)+(7-5)}\cdot1=3+\dfrac{2}{4}=3{,}5$.`,
    },
    {
      id: 'bt5',
      prompt: String.raw`Với bảng tần số ở bài 1, tính khoảng biến thiên và khoảng tứ phân vị.`,
      hint: String.raw`Dùng $R=a_{k+1}-a_1$ và $\Delta_Q=Q_3-Q_1$.`,
      solution: String.raw`$R=5-1=4$.

Từ bài 3, $Q_1=2{,}4$ và $Q_3=4$, nên $\Delta_Q=4-2{,}4=1{,}6$.`,
    },
    {
      id: 'bt6',
      prompt: String.raw`Với bảng tần số ở bài 1, tính phương sai và độ lệch chuẩn.`,
      solution: String.raw`$\overline{x}=3{,}2$; $\overline{x}^2=10{,}24$.

$\sum m_ix_i^2=3\cdot2{,}25+5\cdot6{,}25+7\cdot12{,}25+5\cdot20{,}25=6{,}75+31{,}25+85{,}75+101{,}25=225$.

$s^2=\dfrac{225}{20}-10{,}24=11{,}25-10{,}24=1{,}01$; $s\approx1{,}005$.`,
    },
  ],

  quiz: [
    {
      id: 'q1',
      question: String.raw`Giá trị đại diện của nhóm $[a;b)$ là`,
      options: [
        String.raw`$a+b$`,
        String.raw`$b-a$`,
        String.raw`$\dfrac{a+b}{2}$`,
        String.raw`$\dfrac{b-a}{2}$`,
      ],
      answer: 2,
      explanation: String.raw`Giá trị đại diện là trung điểm của nhóm: $\dfrac{a+b}{2}$.`,
    },
    {
      id: 'q2',
      question: 'Số trung bình của mẫu ghép nhóm được tính từ',
      options: [
        'Các giá trị đại diện và tần số của mỗi nhóm.',
        'Giá trị lớn nhất và nhỏ nhất.',
        'Các tứ phân vị.',
        'Mốt của mẫu.',
      ],
      answer: 0,
      explanation: String.raw`Công thức $\overline{x}=\dfrac{1}{n}\sum m_ix_i$ dùng giá trị đại diện và tần số.`,
    },
    {
      id: 'q3',
      question: String.raw`Nhóm chứa trung vị được xác định dựa vào giá trị`,
      options: [
        String.raw`$\dfrac n4$`,
        String.raw`$\dfrac n2$`,
        String.raw`$\dfrac{3n}{4}$`,
        String.raw`$n$`,
      ],
      answer: 1,
      explanation: String.raw`Trung vị ứng với vị trí $\dfrac n2$ trong mẫu đã sắp xếp.`,
    },
    {
      id: 'q4',
      question: String.raw`Nhóm chứa $Q_1$ được xác định dựa vào giá trị`,
      options: [
        String.raw`$\dfrac n4$`,
        String.raw`$\dfrac n2$`,
        String.raw`$\dfrac{3n}{4}$`,
        String.raw`$2n$`,
      ],
      answer: 0,
      explanation: String.raw`$Q_1$ ứng với vị trí $\dfrac n4$.`,
    },
    {
      id: 'q5',
      question: String.raw`Nhóm chứa $Q_3$ được xác định dựa vào giá trị`,
      options: [
        String.raw`$\dfrac n4$`,
        String.raw`$\dfrac n2$`,
        String.raw`$\dfrac{3n}{4}$`,
        String.raw`$n^2$`,
      ],
      answer: 2,
      explanation: String.raw`$Q_3$ ứng với vị trí $\dfrac{3n}{4}$.`,
    },
    {
      id: 'q6',
      question: 'Nhóm chứa mốt là nhóm',
      options: [
        'Có tần số nhỏ nhất.',
        'Có tần số lớn nhất.',
        'Đứng đầu tiên.',
        'Đứng cuối cùng.',
      ],
      answer: 1,
      explanation: 'Mốt là giá trị có tần số lớn nhất nên nhóm chứa mốt có tần số lớn nhất.',
    },
    {
      id: 'q7',
      question: String.raw`Khoảng biến thiên của mẫu ghép nhóm $k$ nhóm là`,
      options: [
        String.raw`$a_k-a_1$`,
        String.raw`$a_{k+1}+a_1$`,
        String.raw`$a_{k+1}-a_1$`,
        String.raw`$Q_3-Q_1$`,
      ],
      answer: 2,
      explanation: String.raw`$R$ là hiệu giữa đầu mút phải của nhóm cuối và đầu mút trái của nhóm đầu.`,
    },
    {
      id: 'q8',
      question: 'Công thức tính nhanh phương sai của mẫu ghép nhóm là',
      options: [
        String.raw`$s^2=\dfrac{1}{n}\sum m_ix_i^2-\overline{x}^2$`,
        String.raw`$s^2=\sum m_ix_i^2+\overline{x}^2$`,
        String.raw`$s^2=\overline{x}^2-\dfrac{1}{n}\sum m_ix_i^2$`,
        String.raw`$s^2=\dfrac{1}{n}\sum m_ix_i$`,
      ],
      answer: 0,
      explanation: String.raw`$s^2=\overline{x^2}-\overline{x}^2=\dfrac{1}{n}\sum m_ix_i^2-\overline{x}^2$.`,
    },
  ],

  trueFalse: [
    {
      id: 'tf1',
      stem: String.raw`Cho bảng tần số ghép nhóm:

| Nhóm | $[0;10)$ | $[10;20)$ | $[20;30)$ | $[30;40)$ |
| --- | --- | --- | --- | --- |
| Tần số | $4$ | $6$ | $10$ | $5$ |`,
      items: [
        { text: String.raw`$n=25$.`, answer: true },
        { text: String.raw`Giá trị đại diện của nhóm $[10;20)$ là $15$.`, answer: true },
        { text: String.raw`Số trung bình là $21{,}4$.`, answer: true },
        { text: String.raw`Trung vị là $25$.`, answer: false },
      ],
      explanation: String.raw`$M_e=22{,}5$, không phải $25$.`,
    },
    {
      id: 'tf2',
      stem: String.raw`Vẫn với bảng tần số ở câu trên.`,
      items: [
        { text: String.raw`$Q_1=13{,}75$.`, answer: true },
        { text: String.raw`$Q_3=26{,}75$.`, answer: false },
        { text: String.raw`$\Delta_Q=15$.`, answer: true },
        { text: String.raw`Mốt xấp xỉ $24{,}44$.`, answer: true },
      ],
      explanation: String.raw`$Q_3=28{,}75$, không phải $26{,}75$.`,
    },
    {
      id: 'tf3',
      stem: String.raw`Vẫn với bảng tần số ở câu trên.`,
      items: [
        { text: String.raw`Khoảng biến thiên bằng $40$.`, answer: true },
        { text: String.raw`Phương sai là một số dương.`, answer: true },
        { text: String.raw`Độ lệch chuẩn là căn bậc hai của phương sai.`, answer: true },
        { text: String.raw`Tần số của nhóm $[20;30)$ là $5$.`, answer: false },
      ],
      explanation: String.raw`$R=40-0=40$; phương sai dương vì dữ liệu có phân tán; $s=\sqrt{s^2}$; tần số nhóm $[20;30)$ là $10$, không phải $5$.`,
    },
  ],

  shortAnswer: [
    {
      id: 'sa1',
      question: String.raw`Tìm giá trị đại diện của nhóm $[4;6)$.`,
      answer: '5',
      unit: '',
      explanation: String.raw`$x=\dfrac{4+6}{2}=5$.`,
    },
    {
      id: 'sa2',
      question: String.raw`Cho bảng tần số: nhóm $[0;10)$ có tần số $4$, nhóm $[10;20)$ có tần số $6$. Tính số trung bình.`,
      answer: '11',
      unit: '',
      explanation: String.raw`$\overline{x}=\dfrac{4\cdot5+6\cdot15}{10}=11$.`,
    },
    {
      id: 'sa3',
      question: String.raw`Với bảng tần số ở câu trên, tính $Q_1$.`,
      answer: '6.25',
      unit: '',
      explanation: String.raw`$\dfrac n4=2{,}5$ nên nhóm chứa $Q_1$ là $[0;10)$: $Q_1=0+\dfrac{2{,}5-0}{4}\cdot10=6{,}25$.`,
    },
    {
      id: 'sa4',
      question: String.raw`Với bảng tần số ở câu trên, tính mốt.`,
      answer: '12.5',
      unit: '',
      explanation: String.raw`Nhóm có tần số lớn nhất là $[10;20)$: $M_o=10+\dfrac{6-4}{(6-4)+(6-0)}\cdot10=12{,}5$.`,
    },
  ],
}

import type { Lesson } from '../types'

export const chuong8Bai3: Lesson = {
  id: 'bai-3',
  chapterId: 'chuong-8',
  title: 'Xác suất có điều kiện',
  summary: 'Công thức xác suất có điều kiện, xác suất toàn phần và công thức Bayes.',
  minutes: 24,

  theory: [
    {
      subtitle: 'Định nghĩa xác suất có điều kiện',
      content: String.raw`Cho hai biến cố $A$ và $B$. Xác suất của biến cố $A$ với điều kiện biến cố $B$ đã xảy ra được gọi là **xác suất của $A$ với điều kiện $B$**, kí hiệu $P(A\mid B)$.

Nếu $P(B)>0$ thì
$$P(A\mid B)=\dfrac{P(A\cap B)}{P(B)}=\dfrac{P(AB)}{P(B)}.$$`,
      formula: String.raw`P(A\mid B)=\dfrac{P(AB)}{P(B)},\quad P(B)>0`,
      note: String.raw`Điều kiện $B$ đã xảy ra làm không gian mẫu thu hẹp về $B$.`,
    },
    {
      subtitle: 'Công thức nhân xác suất',
      content: String.raw`Cho hai biến cố $A$ và $B$ bất kì. Khi đó
$$P(AB)=P(A\mid B)\cdot P(B)=P(B\mid A)\cdot P(A).$$

Cho hai biến cố $A$ và $B$ thoả mãn $0<P(A),P(B)<1$. Khi đó $A$ và $B$ **độc lập** khi và chỉ khi
$$P(A)=P(A\mid B)\quad\text{and}\quad P(B)=P(B\mid A).$$`,
      formula: String.raw`P(AB)=P(A\mid B)\cdot P(B)`,
      note: String.raw`Nếu $A,\ B$ độc lập thì $P(A\mid B)=P(A)$ và $P(AB)=P(A)P(B)$.`,
    },
    {
      subtitle: 'Công thức xác suất toàn phần',
      content: String.raw`Cho biến cố $A$ và $B$. Khi đó ta có **công thức xác suất toàn phần**:
$$P(B)=P(B\mid A)\cdot P(A)+P(B\mid\overline A)\cdot P(\overline A).$$

Công thức này tách khả năng xảy ra $B$ theo hai trường hợp: $A$ xảy ra và $A$ không xảy ra.`,
      formula: String.raw`P(B)=P(B\mid A)P(A)+P(B\mid\overline A)P(\overline A)`,
      note: String.raw`$A$ và $\overline A$ tạo thành một hệ đầy đủ các biến cố.`,
    },
    {
      subtitle: 'Công thức Bayes',
      content: String.raw`Cho $A$ và $B$ là các biến cố với $P(B)>0$. Khi đó ta có **công thức Bayes**:
$$P(A\mid B)=\dfrac{P(B\mid A)\cdot P(A)}{P(B\mid A)\cdot P(A)+P(B\mid\overline A)\cdot P(\overline A)}.$$

Công thức Bayes có thể viết dưới dạng
$$P(A\mid B)=\dfrac{P(B\mid A)\cdot P(A)}{P(B)}.$$`,
      formula: String.raw`P(A\mid B)=\dfrac{P(B\mid A)P(A)}{P(B)}`,
      note: String.raw`Bayes cho phép cập nhật xác suất của $A$ sau khi biết $B$ đã xảy ra.`,
    },
  ],

  examples: [
    {
      id: 'vd1',
      title: 'Xác suất có điều kiện cơ bản',
      prompt: String.raw`Gieo một xúc xắc cân đối. Biết số chấm là số chẵn, tính xác suất số chấm lớn hơn $2$.`,
      steps: [
        String.raw`Gọi $A$: “số chấm lớn hơn $2$”, $B$: “số chấm chẵn”.`,
        String.raw`$B=\{2;4;6\}$, $A\cap B=\{4;6\}$.`,
        String.raw`$P(B)=\dfrac36$, $P(AB)=\dfrac26$.`,
        String.raw`$P(A\mid B)=\dfrac{P(AB)}{P(B)}=\dfrac{2/6}{3/6}=\dfrac23$.`,
      ],
      answer: String.raw`$P(A\mid B)=\dfrac23$.`,
    },
    {
      id: 'vd2',
      title: 'Công thức nhân',
      prompt: String.raw`Một hộp có $4$ bi đỏ và $6$ bi xanh. Lấy lần lượt hai bi không hoàn lại. Tính xác suất lấy được bi đỏ ở lần thứ nhất và bi xanh ở lần thứ hai.`,
      steps: [
        String.raw`Gọi $A$: “lần 1 được bi đỏ”, $B$: “lần 2 được bi xanh”.`,
        String.raw`$P(A)=\dfrac4{10}=\dfrac25$.`,
        String.raw`Sau khi lấy bi đỏ, hộp còn $3$ đỏ và $6$ xanh nên $P(B\mid A)=\dfrac69=\dfrac23$.`,
        String.raw`$P(AB)=P(B\mid A)P(A)=\dfrac23\cdot\dfrac25=\dfrac4{15}$.`,
      ],
      answer: String.raw`$P(AB)=\dfrac4{15}$.`,
    },
    {
      id: 'vd3',
      title: 'Công thức xác suất toàn phần',
      prompt: String.raw`Một nhà máy có hai dây chuyền. Dây I sản xuất $60\%$ sản phẩm, dây II sản xuất $40\%$. Tỉ lệ phế phẩm của dây I là $2\%$, của dây II là $5\%$. Chọn ngẫu nhiên một sản phẩm. Tính xác suất sản phẩm đó là phế phẩm.`,
      steps: [
        String.raw`Gọi $A$: “sản phẩm do dây I sản xuất”, $B$: “sản phẩm là phế phẩm”.`,
        String.raw`$P(A)=0{,}6$, $P(\overline A)=0{,}4$; $P(B\mid A)=0{,}02$, $P(B\mid\overline A)=0{,}05$.`,
        String.raw`$P(B)=0{,}02\cdot0{,}6+0{,}05\cdot0{,}4=0{,}012+0{,}02=0{,}032$.`,
      ],
      answer: String.raw`$P(B)=0{,}032=3{,}2\%$.`,
    },
    {
      id: 'vd4',
      title: 'Công thức Bayes',
      prompt: String.raw`Tiếp tục ví dụ trên: biết sản phẩm chọn ra là phế phẩm, tính xác suất sản phẩm đó do dây I sản xuất.`,
      steps: [
        String.raw`Cần tính $P(A\mid B)$ với $B$ là “phế phẩm”.`,
        String.raw`$P(A\mid B)=\dfrac{P(B\mid A)P(A)}{P(B)}$.`,
        String.raw`$P(A\mid B)=\dfrac{0{,}02\cdot0{,}6}{0{,}032}=\dfrac{0{,}012}{0{,}032}=0{,}375$.`,
      ],
      answer: String.raw`$P(A\mid B)=0{,}375=37{,}5\%$.`,
    },
  ],

  exercises: [
    {
      id: 'bt1',
      prompt: String.raw`Gieo một xúc xắc cân đối. Biết số chấm là số lẻ, tính xác suất số chấm nhỏ hơn $5$.`,
      solution: String.raw`$B=\{1;3;5\}$ (số lẻ), $A=\{1;2;3;4\}$ (nhỏ hơn $5$).

$A\cap B=\{1;3\}$ nên $P(A\mid B)=\dfrac{2/6}{3/6}=\dfrac23$.`,
    },
    {
      id: 'bt2',
      prompt: String.raw`Một hộp có $5$ bi đỏ và $5$ bi xanh. Lấy lần lượt hai bi không hoàn lại. Tính xác suất cả hai bi đều đỏ.`,
      hint: String.raw`Dùng công thức nhân $P(AB)=P(A)P(B\mid A)$.`,
      solution: String.raw`Xác suất lấy được bi đỏ ở lần 1 là $\dfrac5{10}=\dfrac12$.

Sau khi lấy bi đỏ, còn $4$ đỏ trong $9$ bi nên xác suất lấy được bi đỏ ở lần 2 (biết lần 1 đã lấy bi đỏ) là $\dfrac49$.

$P=\dfrac12\cdot\dfrac49=\dfrac29$.`,
    },
    {
      id: 'bt3',
      prompt: String.raw`Một hộp có $3$ quả cầu trắng và $7$ quả cầu đen. Lấy ngẫu nhiên một quả. Tính xác suất lấy được quả cầu trắng.`,
      solution: String.raw`Tổng số quả cầu là $10$, số quả trắng là $3$.

Xác suất lấy được quả cầu trắng là $\dfrac3{10}$.`,
    },
    {
      id: 'bt4',
      prompt: String.raw`Gieo một xúc xắc cân đối. Biết số chấm là số chẵn, tính xác suất số chấm nhỏ hơn $5$.`,
      solution: String.raw`$B=\{2;4;6\}$ (số chẵn), $A=\{1;2;3;4\}$ (nhỏ hơn $5$).

$A\cap B=\{2;4\}$ nên $P(A\mid B)=\dfrac{2/6}{3/6}=\dfrac23$.`,
    },
    {
      id: 'bt5',
      prompt: String.raw`Một nhà máy có hai dây chuyền: dây I sản xuất $70\%$ sản phẩm, dây II sản xuất $30\%$. Tỉ lệ phế phẩm tương ứng là $1\%$ và $4\%$. Tính xác suất chọn được phế phẩm.`,
      solution: String.raw`$P(B)=0{,}01\cdot0{,}7+0{,}04\cdot0{,}3=0{,}007+0{,}012=0{,}019$.`,
    },
    {
      id: 'bt6',
      prompt: String.raw`Tiếp bài trên: biết sản phẩm chọn được là phế phẩm, tính xác suất nó do dây II sản xuất.`,
      hint: String.raw`Dùng công thức Bayes.`,
      solution: String.raw`Gọi $A$: “do dây II sản xuất”, $B$: “phế phẩm”.

$P(A\mid B)=\dfrac{P(B\mid A)P(A)}{P(B)}=\dfrac{0{,}04\cdot0{,}3}{0{,}019}=\dfrac{0{,}012}{0{,}019}=\dfrac{12}{19}$.`,
    },
  ],

  quiz: [
    {
      id: 'q1',
      question: String.raw`Công thức xác suất có điều kiện là`,
      options: [
        String.raw`$P(A\mid B)=P(A)+P(B)$`,
        String.raw`$P(A\mid B)=P(A)\cdot P(B)$`,
        String.raw`$P(A\mid B)=1-P(A)$`,
        String.raw`$P(A\mid B)=\dfrac{P(AB)}{P(B)}$`,
      ],
      answer: 3,
      explanation: String.raw`Với $P(B)>0$, $P(A\mid B)=\dfrac{P(AB)}{P(B)}$.`,
    },
    {
      id: 'q2',
      question: String.raw`Công thức nhân xác suất là`,
      options: [
        String.raw`$P(AB)=P(A)+P(B)$`,
        String.raw`$P(AB)=P(A\mid B)\cdot P(B)$`,
        String.raw`$P(AB)=1-P(A)$`,
        String.raw`$P(AB)=P(A)-P(B)$`,
      ],
      answer: 1,
      explanation: String.raw`$P(AB)=P(A\mid B)P(B)=P(B\mid A)P(A)$.`,
    },
    {
      id: 'q3',
      question: String.raw`Nếu $A$ và $B$ độc lập thì`,
      options: [
        String.raw`$P(A\mid B)=P(B)$`,
        String.raw`$P(A\mid B)=1$`,
        String.raw`$P(A\mid B)=P(A)$`,
        String.raw`$P(A\mid B)=0$`,
      ],
      answer: 2,
      explanation: 'Biến cố $B$ xảy ra không làm thay đổi xác suất của $A$.',
    },
    {
      id: 'q4',
      question: 'Công thức xác suất toàn phần là',
      options: [
        String.raw`$P(B)=P(A)+P(\overline A)$`,
        String.raw`$P(B)=P(B\mid A)+P(B\mid\overline A)$`,
        String.raw`$P(B)=P(B\mid A)P(A)+P(B\mid\overline A)P(\overline A)$`,
        String.raw`$P(B)=P(A)\cdot P(\overline A)$`,
      ],
      answer: 2,
      explanation: 'Xác suất toàn phần tách theo hai trường hợp $A$ và $\\overline A$.',
    },
    {
      id: 'q5',
      question: 'Công thức Bayes là',
      options: [
        String.raw`$P(A\mid B)=\dfrac{P(A)}{P(B)}$`,
        String.raw`$P(A\mid B)=\dfrac{P(B\mid A)P(A)}{P(B)}$`,
        String.raw`$P(A\mid B)=P(A)+P(B)$`,
        String.raw`$P(A\mid B)=P(B\mid A)$`,
      ],
      answer: 1,
      explanation: String.raw`$P(A\mid B)=\dfrac{P(B\mid A)P(A)}{P(B)}$.`,
    },
    {
      id: 'q6',
      question: String.raw`Cho $P(A)=0{,}5$, $P(B)=0{,}4$, $P(AB)=0{,}2$. Giá trị $P(A\mid B)$ là`,
      options: ['0,2', '0,4', '0,5', '0,8'],
      answer: 2,
      explanation: String.raw`$P(A\mid B)=\dfrac{0{,}2}{0{,}4}=0{,}5$.`,
    },
    {
      id: 'q7',
      question: String.raw`Cho $P(A)=0{,}6$, $P(B\mid A)=0{,}5$. Giá trị $P(AB)$ là`,
      options: ['0,5', '1,1', '0,1', '0,3'],
      answer: 3,
      explanation: String.raw`$P(AB)=P(B\mid A)P(A)=0{,}5\cdot0{,}6=0{,}3$.`,
    },
    {
      id: 'q8',
      question: String.raw`Nếu $A$ và $B$ xung khắc và $P(A),P(B)>0$ thì $P(A\mid B)$ bằng`,
      options: ['1', String.raw`$P(A)$`, '0', String.raw`$P(B)$`],
      answer: 2,
      explanation: String.raw`$A$ và $B$ không đồng thời xảy ra nên $P(AB)=0$, do đó $P(A\mid B)=0$.`,
    },
  ],

  trueFalse: [
    {
      id: 'tf1',
      stem: String.raw`Cho $P(A)=0{,}5$, $P(B)=0{,}4$, $P(AB)=0{,}2$.`,
      items: [
        { text: String.raw`$P(A\mid B)=0{,}5$.`, answer: true },
        { text: String.raw`$P(B\mid A)=0{,}4$.`, answer: true },
        { text: String.raw`$A$ và $B$ độc lập.`, answer: true },
        { text: String.raw`$P(A\cup B)=0{,}9$.`, answer: false },
      ],
      explanation: String.raw`$P(A\cup B)=0{,}5+0{,}4-0{,}2=0{,}7$, không phải $0{,}9$.`,
    },
    {
      id: 'tf2',
      stem: 'Một hộp có 4 bi đỏ, 6 bi xanh, lấy lần lượt hai bi không hoàn lại.',
      items: [
        { text: String.raw`Xác suất lấy được bi đỏ ở lần 1 là $\dfrac25$.`, answer: true },
        { text: String.raw`Xác suất lấy được bi đỏ ở lần 2, biết lần 1 đã lấy bi đỏ, là $\dfrac13$.`, answer: true },
        { text: String.raw`Xác suất cả hai lần đều lấy được bi đỏ là $\dfrac{2}{15}$.`, answer: true },
        { text: String.raw`Xác suất cả hai lần đều lấy được bi đỏ là $\dfrac4{25}$.`, answer: false },
      ],
      explanation: String.raw`$P=\dfrac25\cdot\dfrac13=\dfrac2{15}$, không phải $\dfrac4{25}$ (kết quả này ứng với lấy có hoàn lại).`,
    },
    {
      id: 'tf3',
      stem: 'Các khẳng định về xác suất có điều kiện:',
      items: [
        { text: String.raw`$P(A\mid B)=\dfrac{P(AB)}{P(B)}$ với $P(B)>0$.`, answer: true },
        { text: String.raw`Nếu $A,\ B$ độc lập thì $P(AB)=P(A)P(B)$.`, answer: true },
        { text: String.raw`Nếu $A,\ B$ xung khắc thì $P(AB)=0$.`, answer: true },
        { text: String.raw`Nếu $A,\ B$ xung khắc thì $P(A\mid B)=P(A)$.`, answer: false },
      ],
      explanation: String.raw`Với $A,\ B$ xung khắc và $P(B)>0$ thì $P(A\mid B)=0$.`,
    },
  ],

  shortAnswer: [
    {
      id: 'sa1',
      question: String.raw`Cho $P(B)=0{,}5$, $P(AB)=0{,}2$. Tính $P(A\mid B)$ (nhập số thập phân).`,
      answer: '0.4',
      unit: '',
      explanation: String.raw`$P(A\mid B)=\dfrac{0{,}2}{0{,}5}=0{,}4$.`,
    },
    {
      id: 'sa2',
      question: String.raw`Cho $P(A)=0{,}6$, $P(B\mid A)=0{,}5$. Tính $P(AB)$ (nhập số thập phân).`,
      answer: '0.3',
      unit: '',
      explanation: String.raw`$P(AB)=P(B\mid A)P(A)=0{,}5\cdot0{,}6=0{,}3$.`,
    },
    {
      id: 'sa3',
      question: String.raw`Cho $P(A)=0{,}4$, $P(B\mid A)=0{,}5$, $P(B\mid\overline A)=0{,}2$. Tính $P(B)$ (nhập số thập phân).`,
      answer: '0.32',
      unit: '',
      explanation: String.raw`$P(B)=0{,}5\cdot0{,}4+0{,}2\cdot0{,}6=0{,}2+0{,}12=0{,}32$.`,
    },
    {
      id: 'sa4',
      question: String.raw`Một hộp có $3$ bi đỏ, $7$ bi xanh. Lấy lần lượt hai bi không hoàn lại. Tính xác suất cả hai bi đều đỏ (nhập phân số).`,
      answer: '1/15',
      unit: '',
      explanation: String.raw`$P=\dfrac3{10}\cdot\dfrac29=\dfrac6{90}=\dfrac1{15}$.`,
    },
  ],
}

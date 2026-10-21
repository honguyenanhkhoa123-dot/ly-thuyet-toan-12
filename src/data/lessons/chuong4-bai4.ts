import type { Lesson } from '../types'

export const chuong4Bai4: Lesson = {
  id: 'bai-4',
  chapterId: 'chuong-4',
  title: 'Bài toán lãi suất – tăng trưởng',
  summary: 'Lãi đơn, lãi kép, lãi kép liên tục và các mô hình tăng trưởng.',
  minutes: 22,

  theory: [
    {
      subtitle: 'Lãi đơn',
      content: String.raw`Gửi số tiền $A$ với lãi suất $r\%$ mỗi kì hạn theo phương thức **lãi đơn** trong $n$ kì hạn. Khi đó tổng số tiền nhận được (cả gốc và lãi) là
$$S_n=A\left(1+n\cdot r\%\right).$$`,
      formula: String.raw`S_n=A(1+nr\%)`,
      note: String.raw`Lãi đơn chỉ tính lãi trên số tiền gốc ban đầu.`,
    },
    {
      subtitle: 'Lãi kép',
      content: String.raw`Gửi số tiền $A$ với lãi suất $r\%$ mỗi kì hạn theo phương thức **lãi kép** trong $n$ kì hạn. Khi đó
$$S_n=A\left(1+r\%\right)^n.$$

Lãi kép tính lãi trên cả gốc và lãi của các kì trước.`,
      formula: String.raw`S_n=A(1+r\%)^n`,
      note: String.raw`Với cùng lãi suất và $n>1$, lãi kép cho số tiền lớn hơn lãi đơn.`,
    },
    {
      subtitle: 'Lãi kép liên tục',
      content: String.raw`Nếu tiền lãi được tính liên tục với lãi suất $r\%$ mỗi năm trong $n$ năm thì
$$S_n=A\cdot e^{n\cdot r\%},$$
trong đó $e\approx2{,}71828$.`,
      formula: String.raw`S_n=Ae^{nr\%}`,
      note: String.raw`Lãi kép liên tục là giới hạn của lãi kép khi số kì tính lãi trong một năm tăng lên vô hạn.`,
    },
    {
      subtitle: 'Mô hình tăng trưởng',
      content: String.raw`Nếu một đại lượng $A$ tăng trưởng với tỉ lệ $r\%$ trong mỗi kì thì sau $n$ kì giá trị của nó là
$$A_n=A(1+r\%)^n.$$

Mô hình này dùng cho dân số, số lượng vi khuẩn, giá trị tài sản tăng đều,…`,
      formula: String.raw`A_n=A(1+r\%)^n`,
      note: String.raw`Nếu $r\%$ là tỉ lệ giảm thì thay $1+r\%$ bằng $1-r\%$.`,
    },
    {
      subtitle: 'Bài toán tìm thời gian',
      content: String.raw`Từ công thức lãi kép $S=A(1+r\%)^n$, để tìm $n$ ta lấy logarit hai vế:
$$n=\dfrac{\ln\left(\dfrac SA\right)}{\ln(1+r\%)}.$$

Tương tự với mô hình tăng trưởng.`,
      formula: String.raw`n=\dfrac{\ln(S/A)}{\ln(1+r\%)}`,
      note: String.raw`Kết quả thường được làm tròn lên để đạt mục tiêu.`,
    },
  ],

  examples: [
    {
      id: 'vd1',
      title: 'Lãi đơn',
      prompt: String.raw`Gửi $100$ triệu đồng với lãi đơn $6\%$/năm trong $3$ năm. Tính tổng số tiền nhận được.`,
      steps: [
        String.raw`$A=100$, $r\%=6\%=0{,}06$, $n=3$.`,
        String.raw`$S_3=100(1+3\cdot0{,}06)=100\cdot1{,}18=118$.`,
      ],
      answer: String.raw`$118$ triệu đồng.`,
    },
    {
      id: 'vd2',
      title: 'Lãi kép',
      prompt: String.raw`Gửi $100$ triệu đồng với lãi kép $6\%$/năm trong $3$ năm. Tính tổng số tiền nhận được (làm tròn đến hàng phần trăm triệu).`,
      steps: [
        String.raw`$A=100$, $r\%=0{,}06$, $n=3$.`,
        String.raw`$S_3=100(1{,}06)^3=100\cdot1{,}191016=119{,}1016$.`,
      ],
      answer: String.raw`Khoảng $119{,}10$ triệu đồng.`,
    },
    {
      id: 'vd3',
      title: 'Lãi kép dài hạn',
      prompt: String.raw`Gửi $200$ triệu đồng với lãi kép $8\%$/năm trong $5$ năm. Tính tổng số tiền nhận được.`,
      steps: [
        String.raw`$S_5=200(1{,}08)^5$.`,
        String.raw`$(1{,}08)^5\approx1{,}469328$, nên $S_5\approx293{,}87$ triệu đồng.`,
      ],
      answer: String.raw`Khoảng $293{,}87$ triệu đồng.`,
    },
    {
      id: 'vd4',
      title: 'Lãi kép liên tục',
      prompt: String.raw`Gửi $100$ triệu đồng với lãi kép liên tục $7\%$/năm trong $10$ năm. Tính tổng số tiền nhận được.`,
      steps: [
        String.raw`$S_{10}=100\cdot e^{10\cdot0{,}07}=100e^{0{,}7}$.`,
        String.raw`$e^{0{,}7}\approx2{,}01375$, nên $S_{10}\approx201{,}38$ triệu đồng.`,
      ],
      answer: String.raw`Khoảng $201{,}38$ triệu đồng.`,
    },
    {
      id: 'vd5',
      title: 'Tăng trưởng dân số',
      prompt: String.raw`Dân số một tỉnh hiện là $90$ triệu người, tăng $1{,}2\%$/năm. Tính dân số sau $10$ năm.`,
      steps: [
        String.raw`$A_{10}=90(1+0{,}012)^{10}=90(1{,}012)^{10}$.`,
        String.raw`$(1{,}012)^{10}\approx1{,}12669$, nên $A_{10}\approx101{,}4$ triệu người.`,
      ],
      answer: String.raw`Khoảng $101{,}4$ triệu người.`,
    },
  ],

  exercises: [
    {
      id: 'bt1',
      prompt: String.raw`Gửi $50$ triệu đồng với lãi đơn $5\%$/năm trong $4$ năm. Tính tổng số tiền nhận được.`,
      solution: String.raw`$S_4=50(1+4\cdot0{,}05)=50\cdot1{,}2=60$ triệu đồng.`,
    },
    {
      id: 'bt2',
      prompt: String.raw`Gửi $50$ triệu đồng với lãi kép $5\%$/năm trong $4$ năm. Tính tổng số tiền nhận được (làm tròn đến hàng phần trăm triệu).`,
      solution: String.raw`$S_4=50(1{,}05)^4$.

$(1{,}05)^4\approx1{,}215506$, nên $S_4\approx60{,}78$ triệu đồng.`,
    },
    {
      id: 'bt3',
      prompt: String.raw`Gửi $100$ triệu đồng với lãi kép $6\%$/năm trong $10$ năm. Tính tổng số tiền nhận được.`,
      solution: String.raw`$S_{10}=100(1{,}06)^{10}$.

$(1{,}06)^{10}\approx1{,}790847$, nên $S_{10}\approx179{,}08$ triệu đồng.`,
    },
    {
      id: 'bt4',
      prompt: String.raw`Gửi $100$ triệu đồng với lãi kép liên tục $5\%$/năm trong $8$ năm. Tính tổng số tiền nhận được.`,
      solution: String.raw`$S_8=100e^{8\cdot0{,}05}=100e^{0{,}4}$.

$e^{0{,}4}\approx1{,}49182$, nên $S_8\approx149{,}18$ triệu đồng.`,
    },
    {
      id: 'bt5',
      prompt: String.raw`Dân số một huyện là $80$ triệu người, tăng $1\%$/năm. Tính dân số sau $20$ năm.`,
      solution: String.raw`$A_{20}=80(1{,}01)^{20}$.

$(1{,}01)^{20}\approx1{,}22019$, nên $A_{20}\approx97{,}62$ triệu người.`,
    },
    {
      id: 'bt6',
      prompt: String.raw`Gửi $200$ triệu đồng với lãi kép $7\%$/năm. Hỏi sau ít nhất bao nhiêu năm thì số tiền đạt $300$ triệu đồng?`,
      hint: String.raw`Dùng $n=\dfrac{\ln(S/A)}{\ln(1+r\%)}$.`,
      solution: String.raw`$n=\dfrac{\ln(300/200)}{\ln(1{,}07)}=\dfrac{\ln1{,}5}{\ln1{,}07}\approx5{,}99$.

Vậy cần ít nhất $6$ năm.`,
    },
  ],

  quiz: [
    {
      id: 'q1',
      question: 'Công thức lãi đơn là',
      options: [
        String.raw`$S_n=A(1+r\%)^n$`,
        String.raw`$S_n=A(1+nr\%)$`,
        String.raw`$S_n=Ae^{nr\%}$`,
        String.raw`$S_n=A+n r\%$`,
      ],
      answer: 1,
      explanation: String.raw`Lãi đơn: $S_n=A(1+nr\%)$.`,
    },
    {
      id: 'q2',
      question: 'Công thức lãi kép là',
      options: [
        String.raw`$S_n=A(1+nr\%)$`,
        String.raw`$S_n=Ae^{nr\%}$`,
        String.raw`$S_n=A(1+r\%)^n$`,
        String.raw`$S_n=A(1-r\%)^n$`,
      ],
      answer: 2,
      explanation: String.raw`Lãi kép: $S_n=A(1+r\%)^n$.`,
    },
    {
      id: 'q3',
      question: 'Công thức lãi kép liên tục là',
      options: [
        String.raw`$S_n=A(1+r\%)^n$`,
        String.raw`$S_n=A(1+nr\%)$`,
        String.raw`$S_n=Ae^{nr\%}$`,
        String.raw`$S_n=A+e^{nr\%}$`,
      ],
      answer: 2,
      explanation: String.raw`Lãi kép liên tục: $S_n=Ae^{nr\%}$.`,
    },
    {
      id: 'q4',
      question: String.raw`Gửi $100$ triệu đồng với lãi kép $10\%$/năm trong $2$ năm. Số tiền nhận được là`,
      options: ['121 triệu', '120 triệu', '110 triệu', '100 triệu'],
      answer: 0,
      explanation: String.raw`$100(1{,}1)^2=121$ triệu đồng.`,
    },
    {
      id: 'q5',
      question: String.raw`Gửi $100$ triệu đồng với lãi đơn $10\%$/năm trong $2$ năm. Số tiền nhận được là`,
      options: ['121 triệu', '110 triệu', '120 triệu', '100 triệu'],
      answer: 2,
      explanation: String.raw`$100(1+2\cdot0{,}1)=120$ triệu đồng.`,
    },
    {
      id: 'q6',
      question: 'Nếu dân số tăng $1\\%$ mỗi năm thì sau $n$ năm dân số bằng',
      options: [
        String.raw`$A(1{,}01)^n$`,
        String.raw`$A(1+n\cdot0{,}01)$`,
        String.raw`$Ae^{0{,}01n}$`,
        String.raw`$A(0{,}01)^n$`,
      ],
      answer: 0,
      explanation: String.raw`Tăng trưởng theo lãi kép: $A(1+1\%)^n=A(1{,}01)^n$.`,
    },
    {
      id: 'q7',
      question: 'Với cùng lãi suất và thời gian lớn hơn 1 kì, phương thức nào cho số tiền lớn hơn?',
      options: ['Lãi đơn', 'Bằng nhau', 'Không so sánh được', 'Lãi kép'],
      answer: 3,
      explanation: 'Lãi kép tính lãi trên cả lãi cũ nên lớn hơn lãi đơn.',
    },
    {
      id: 'q8',
      question: 'Giá trị gần đúng của $e$ là',
      options: ['2,718', '3,142', '1,618', '2,236'],
      answer: 0,
      explanation: String.raw`$e\approx2{,}71828$.`,
    },
  ],

  trueFalse: [
    {
      id: 'tf1',
      stem: String.raw`Gửi $100$ triệu đồng với lãi suất $6\%$/năm.`,
      items: [
        { text: String.raw`Lãi đơn sau $2$ năm là $112$ triệu.`, answer: true },
        { text: String.raw`Lãi kép sau $2$ năm là $112{,}36$ triệu.`, answer: true },
        { text: String.raw`Sau $2$ năm, lãi kép nhiều hơn lãi đơn.`, answer: true },
        { text: String.raw`Lãi đơn sau $2$ năm là $112{,}36$ triệu.`, answer: false },
      ],
      explanation: String.raw`Lãi đơn sau $2$ năm là $100(1+0{,}12)=112$ triệu.`,
    },
    {
      id: 'tf2',
      stem: String.raw`Gửi $100$ triệu đồng với lãi suất $5\%$/năm trong $3$ năm.`,
      items: [
        { text: String.raw`Lãi kép thu được $115{,}7625$ triệu.`, answer: true },
        { text: String.raw`Lãi đơn thu được $115$ triệu.`, answer: true },
        { text: String.raw`Lãi kép nhiều hơn lãi đơn $1{,}7625$ triệu.`, answer: false },
        { text: String.raw`Lãi kép ít hơn lãi đơn.`, answer: false },
      ],
      explanation: String.raw`$100(1{,}05)^3=115{,}7625$ và $100(1+3\cdot0{,}05)=115$, chênh lệch $0{,}7625$ triệu.`,
    },
    {
      id: 'tf3',
      stem: 'Các khẳng định về lãi kép liên tục:',
      items: [
        { text: String.raw`Công thức là $S=Ae^{n+r\%}$.`, answer: false },
        { text: String.raw`$e\approx2{,}718$.`, answer: true },
        { text: String.raw`$A$ là số tiền ban đầu.`, answer: true },
        { text: String.raw`Lãi kép liên tục luôn nhỏ hơn lãi kép rời rạc cùng lãi suất.`, answer: false },
      ],
      explanation: 'Với cùng lãi suất danh nghĩa, lãi kép liên tục cho số tiền lớn hơn.',
    },
  ],

  shortAnswer: [
    {
      id: 'sa1',
      question: String.raw`Gửi $100$ triệu đồng với lãi đơn $5\%$/năm trong $2$ năm. Tính tổng số tiền nhận được (triệu đồng).`,
      answer: '110',
      unit: 'triệu đồng',
      explanation: String.raw`$100(1+2\cdot0{,}05)=110$ triệu đồng.`,
    },
    {
      id: 'sa2',
      question: String.raw`Gửi $100$ triệu đồng với lãi kép $5\%$/năm trong $2$ năm. Tính tổng số tiền nhận được (triệu đồng).`,
      answer: '110.25',
      unit: 'triệu đồng',
      explanation: String.raw`$100(1{,}05)^2=110{,}25$ triệu đồng.`,
    },
    {
      id: 'sa3',
      question: String.raw`Gửi $100$ triệu đồng với lãi kép $10\%$/năm trong $1$ năm. Tính tổng số tiền nhận được (triệu đồng).`,
      answer: '110',
      unit: 'triệu đồng',
      explanation: String.raw`$100(1{,}1)=110$ triệu đồng.`,
    },
    {
      id: 'sa4',
      question: String.raw`Dân số $100$ triệu người, tăng $2\%$/năm. Tính dân số sau $1$ năm (triệu người).`,
      answer: '102',
      unit: 'triệu người',
      explanation: String.raw`$100(1{,}02)=102$ triệu người.`,
    },
  ],
}

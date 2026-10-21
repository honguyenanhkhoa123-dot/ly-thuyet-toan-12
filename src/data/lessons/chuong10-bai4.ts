import type { Lesson } from '../types'

export const chuong10Bai4: Lesson = {
  id: 'bai-4',
  chapterId: 'chuong-10',
  title: 'Thể tích của khối đa diện',
  summary: 'Công thức thể tích khối chóp, khối lăng trụ, tỉ số thể tích và một số công thức tính nhanh.',
  minutes: 28,

  theory: [
    {
      subtitle: 'Các công thức thể tích cơ bản',
      content: String.raw`**Khối chóp** có diện tích đáy $S$ và chiều cao $h$:
$$V=\dfrac13 S\cdot h.$$

**Khối chóp cụt đều** có diện tích đáy lớn $S$, đáy bé $S'$ và chiều cao $h$:
$$V=\dfrac13 h\left(S+S'+\sqrt{S\cdot S'}\right).$$

**Khối lăng trụ** có diện tích đáy $S$ và chiều cao $h$:
$$V=S\cdot h.$$

**Khối hộp chữ nhật** có ba kích thước $a$, $b$, $c$:
$$V=abc.$$

**Khối lập phương** cạnh $a$:
$$V=a^3.$$`,
      formula: String.raw`V=\dfrac13 S h`,
      note: String.raw`Khối chóp bằng $1/3$ khối lăng trụ có cùng đáy và chiều cao.`,
    },
    {
      subtitle: 'Phân biệt các khối đa diện cơ bản',
      content: String.raw`**Hình chóp đều** là hình chóp có đáy là đa giác đều và chân đường cao trùng với tâm của đa giác đáy.

- Hình chóp tam giác đều: đáy là tam giác đều, chân đường cao là trọng tâm đáy.
- Hình chóp tứ giác đều: đáy là hình vuông, chân đường cao là giao điểm hai đường chéo.
- Tứ diện đều: hình chóp tam giác đều có tất cả các cạnh bằng nhau.

**Hình lăng trụ.**

- Lăng trụ đứng: các cạnh bên vuông góc với đáy.
- Lăng trụ đều: lăng trụ đứng có đáy là đa giác đều.
- Hình hộp: lăng trụ có đáy là hình bình hành.
- Hình hộp đứng: lăng trụ đứng có đáy là hình bình hành.
- Hình hộp chữ nhật: lăng trụ đứng có đáy là hình chữ nhật.
- Hình lập phương: lăng trụ đứng có đáy và các mặt bên là hình vuông.`,
      formula: String.raw`V=abc,\qquad V=a^3`,
      note: String.raw`Đừng nhầm lăng trụ đứng (cạnh bên vuông góc đáy) với lăng trụ đều (đáy là đa giác đều).`,
    },
    {
      subtitle: 'Xác định chiều cao của khối chóp',
      content: String.raw`**Hình chóp có cạnh bên vuông góc với đáy:** chiều cao là cạnh bên đó.

**Hình chóp có mặt bên vuông góc với đáy:** chiều cao là đường cao của tam giác mặt bên, kẻ từ đỉnh chóp xuống giao tuyến với đáy.

Với hình chóp $S.ABC$ có mặt bên $(SAB)\perp(ABC)$, kẻ $SH\perp AB$ tại $H$, khi đó $SH$ là chiều cao.

- Nếu tam giác $SAB$ đều cạnh $AB$ thì $H$ là trung điểm $AB$ và $SH=\dfrac{AB\sqrt3}{2}$.
- Nếu tam giác $SAB$ vuông tại $S$ thì $\dfrac{1}{SH^2}=\dfrac{1}{SA^2}+\dfrac{1}{SB^2}$.
- Nếu tam giác $SAB$ vuông cân tại $S$ thì $SH=\dfrac{AB}{2}$.

**Hình chóp đều:** chiều cao $SO$ với $O$ là tâm đáy. Với hình chóp tam giác đều $S.ABC$:
$$SO=\sqrt{SA^2-\dfrac{AB^2}{3}}.$$
Với hình chóp tứ giác đều $S.ABCD$:
$$SO=\sqrt{SA^2-\dfrac{AB^2}{2}}.$$`,
      formula: String.raw`SO=\sqrt{SA^2-\dfrac{AB^2}{2}}`,
      note: String.raw`Bán kính đường tròn ngoại tiếp đáy quyết định công thức chiều cao.`,
    },
    {
      subtitle: 'Tỉ số thể tích',
      content: String.raw`**Hình chóp tam giác.** Cho hình chóp $S.ABC$, gọi $A'$, $B'$, $C'$ lần lượt thuộc các cạnh $SA$, $SB$, $SC$. Khi đó
$$\dfrac{V_{S.A'B'C'}}{V_{S.ABC}}=\dfrac{SA'}{SA}\cdot\dfrac{SB'}{SB}\cdot\dfrac{SC'}{SC}.$$

**Hình chóp tứ giác có đáy là hình bình hành.** Cho hình chóp $S.ABCD$ có đáy là hình bình hành, $A'$, $B'$, $C'$, $D'$ lần lượt thuộc $SA$, $SB$, $SC$, $SD$. Đặt
$$a=\dfrac{SA'}{SA},\quad b=\dfrac{SB'}{SB},\quad c=\dfrac{SC'}{SC},\quad d=\dfrac{SD'}{SD},$$
với $\dfrac1a+\dfrac1c=\dfrac1b+\dfrac1d$. Khi đó
$$\dfrac{V_{S.A'B'C'D'}}{V_{S.ABCD}}=\dfrac{abcd}{4}\left(\dfrac1a+\dfrac1b+\dfrac1c+\dfrac1d\right).$$

**Lăng trụ.** Một mặt phẳng cắt ba cạnh bên của lăng trụ $ABC.A'B'C'$ tại $M$, $N$, $P$ thì
$$\dfrac{V_{ABC.MNP}}{V_{ABC.A'B'C'}}=\dfrac{A'M+B'N+C'P}{AM+BN+CP}.$$`,
      formula: String.raw`\dfrac{V_{S.A'B'C'}}{V_{S.ABC}}=\dfrac{SA'}{SA}\cdot\dfrac{SB'}{SB}\cdot\dfrac{SC'}{SC}`,
      note: String.raw`Công thức tỉ số thể tích chỉ dùng cho hình chóp tam giác (tứ diện).`,
    },
    {
      subtitle: 'Một số công thức tính nhanh',
      content: String.raw`**Tứ diện vuông.** Khối chóp $S.ABC$ có $SA$, $SB$, $SC$ đôi một vuông góc với $SA=a$, $SB=b$, $SC=c$:
$$V_{S.ABC}=\dfrac{abc}{6}.$$

**Tứ diện đều** cạnh $a$:
$$V=\dfrac{a^3\sqrt2}{12}.$$

**Tứ diện có bốn mặt là tam giác bằng nhau** với $AB=CD=a$, $AC=BD=b$, $AD=BC=c$:
$$V=\dfrac{\sqrt2}{12}\sqrt{\left(a^2+b^2-c^2\right)\left(b^2+c^2-a^2\right)\left(a^2+c^2-b^2\right)}.$$

**Hình chóp tam giác đều** cạnh đáy $a$, cạnh bên $b$:
$$V=\dfrac{a^2\sqrt{3b^2-a^2}}{12}.$$

**Hình chóp tứ giác đều** cạnh đáy $a$, cạnh bên $b$:
$$V=\dfrac{a^2\sqrt{4b^2-2a^2}}{6}.$$

**Hình chóp tứ giác đều** cạnh đáy $a$, góc giữa mặt bên và mặt đáy bằng $\alpha$:
$$V=\dfrac{a^3\tan\alpha}{6}.$$

**Hình chóp tam giác đều** cạnh đáy $a$, góc giữa mặt bên và mặt đáy bằng $\alpha$:
$$V=\dfrac{a^3\tan\alpha}{24}.$$`,
      formula: String.raw`V=\dfrac{abc}{6}`,
      note: String.raw`Các công thức nhanh chỉ nên dùng để kiểm tra, vẫn cần trình bày lập luận.`,
    },
  ],

  examples: [
    {
      id: 'vd1',
      title: 'Thể tích khối chóp',
      prompt: String.raw`Cho hình chóp $S.ABC$ có $SA\perp(ABC)$, tam giác $ABC$ vuông tại $B$ với $AB=a$, $BC=2a$, $SA=a$. Tính thể tích khối chóp.`,
      steps: [
        String.raw`$SA\perp(ABC)$ nên $SA=a$ là chiều cao.`,
        String.raw`$S_{ABC}=\dfrac12\cdot AB\cdot BC=\dfrac12\cdot a\cdot2a=a^2$.`,
        String.raw`$V=\dfrac13\cdot a^2\cdot a=\dfrac{a^3}{3}$.`,
      ],
      answer: String.raw`$V=\dfrac{a^3}{3}$.`,
    },
    {
      id: 'vd2',
      title: 'Thể tích khối lăng trụ',
      prompt: String.raw`Cho lăng trụ đứng $ABC.A'B'C'$ có đáy là tam giác đều cạnh $a$, cạnh bên $2a$. Tính thể tích.`,
      steps: [
        String.raw`$S_{ABC}=\dfrac{a^2\sqrt3}{4}$.`,
        String.raw`Lăng trụ đứng nên chiều cao bằng cạnh bên: $h=2a$.`,
        String.raw`$V=\dfrac{a^2\sqrt3}{4}\cdot2a=\dfrac{a^3\sqrt3}{2}$.`,
      ],
      answer: String.raw`$V=\dfrac{a^3\sqrt3}{2}$.`,
    },
    {
      id: 'vd3',
      title: 'Thể tích tứ diện vuông',
      prompt: String.raw`Cho tứ diện $OABC$ có $OA$, $OB$, $OC$ đôi một vuông góc, $OA=2$, $OB=3$, $OC=4$. Tính thể tích.`,
      steps: [
        String.raw`Dùng công thức tứ diện vuông: $V=\dfrac{OA\cdot OB\cdot OC}{6}$.`,
        String.raw`$V=\dfrac{2\cdot3\cdot4}{6}=4$.`,
      ],
      answer: String.raw`$V=4$.`,
    },
    {
      id: 'vd4',
      title: 'Hình chóp đều',
      prompt: String.raw`Cho hình chóp tứ giác đều $S.ABCD$ có cạnh đáy $a$, cạnh bên $a\sqrt2$. Tính thể tích.`,
      steps: [
        String.raw`$AC=a\sqrt2$ nên $AO=\dfrac{a\sqrt2}{2}$.`,
        String.raw`$SO=\sqrt{SA^2-AO^2}=\sqrt{2a^2-\dfrac{a^2}{2}}=\dfrac{a\sqrt6}{2}$.`,
        String.raw`$V=\dfrac13\cdot a^2\cdot\dfrac{a\sqrt6}{2}=\dfrac{a^3\sqrt6}{6}$.`,
      ],
      answer: String.raw`$V=\dfrac{a^3\sqrt6}{6}$.`,
    },
    {
      id: 'vd5',
      title: 'Tỉ số thể tích',
      prompt: String.raw`Cho hình chóp $S.ABC$. Trên $SA$, $SB$, $SC$ lần lượt lấy $A'$, $B'$, $C'$ sao cho $\dfrac{SA'}{SA}=\dfrac12$, $\dfrac{SB'}{SB}=\dfrac13$, $\dfrac{SC'}{SC}=\dfrac14$. Tính tỉ số $\dfrac{V_{S.A'B'C'}}{V_{S.ABC}}$.`,
      steps: [
        String.raw`Áp dụng công thức tỉ số thể tích.`,
        String.raw`$\dfrac{V_{S.A'B'C'}}{V_{S.ABC}}=\dfrac12\cdot\dfrac13\cdot\dfrac14=\dfrac1{24}$.`,
      ],
      answer: String.raw`$\dfrac1{24}$.`,
    },
  ],

  exercises: [
    {
      id: 'bt1',
      prompt: String.raw`Cho hình chóp $S.ABCD$ có $SA\perp(ABCD)$, đáy là hình vuông cạnh $a$, $SA=a$. Tính thể tích.`,
      solution: String.raw`$V=\dfrac13\cdot a^2\cdot a=\dfrac{a^3}{3}$.`,
    },
    {
      id: 'bt2',
      prompt: String.raw`Cho hình lập phương cạnh $2a$. Tính thể tích.`,
      solution: String.raw`$V=(2a)^3=8a^3$.`,
    },
    {
      id: 'bt3',
      prompt: String.raw`Cho tứ diện đều cạnh $a$. Tính thể tích.`,
      solution: String.raw`$V=\dfrac{a^3\sqrt2}{12}$.`,
    },
    {
      id: 'bt4',
      prompt: String.raw`Cho hình chóp $S.ABC$ có $SA\perp(ABC)$, $SA=3$, tam giác $ABC$ đều cạnh $2$. Tính thể tích.`,
      solution: String.raw`$S_{ABC}=\sqrt3$ nên $V=\dfrac13\cdot\sqrt3\cdot3=\sqrt3$.`,
    },
    {
      id: 'bt5',
      prompt: String.raw`Cho hình chóp $S.ABCD$ có đáy là hình chữ nhật $AB=a$, $AD=2a$, $SA\perp(ABCD)$, $SA=3a$. Tính thể tích.`,
      solution: String.raw`$S_{ABCD}=2a^2$ nên $V=\dfrac13\cdot2a^2\cdot3a=2a^3$.`,
    },
    {
      id: 'bt6',
      prompt: String.raw`Cho hình chóp $S.ABC$. Gọi $M$, $N$ lần lượt là trung điểm của $SB$, $SC$. Tính tỉ số $\dfrac{V_{S.AMN}}{V_{S.ABC}}$.`,
      hint: String.raw`Dùng công thức tỉ số thể tích với $A$ trùng $A$.`,
      solution: String.raw`$\dfrac{V_{S.AMN}}{V_{S.ABC}}=\dfrac{SA}{SA}\cdot\dfrac{SM}{SB}\cdot\dfrac{SN}{SC}=1\cdot\dfrac12\cdot\dfrac12=\dfrac14$.`,
    },
  ],

  quiz: [
    {
      id: 'q1',
      question: String.raw`Thể tích khối chóp có diện tích đáy $S$ và chiều cao $h$ là`,
      options: [
        String.raw`$V=S h$`,
        String.raw`$V=\dfrac13 S h$`,
        String.raw`$V=\dfrac12 S h$`,
        String.raw`$V=\dfrac23 S h$`,
      ],
      answer: 1,
      explanation: 'Công thức thể tích khối chóp.',
    },
    {
      id: 'q2',
      question: String.raw`Thể tích khối lăng trụ có diện tích đáy $S$ và chiều cao $h$ là`,
      options: [
        String.raw`$V=S h$`,
        String.raw`$V=\dfrac13 S h$`,
        String.raw`$V=\dfrac12 S h$`,
        String.raw`$V=3S h$`,
      ],
      answer: 0,
      explanation: 'Công thức thể tích khối lăng trụ.',
    },
    {
      id: 'q3',
      question: String.raw`Khối lập phương cạnh $2a$ có thể tích`,
      options: [
        String.raw`$2a^3$`,
        String.raw`$4a^3$`,
        String.raw`$6a^3$`,
        String.raw`$8a^3$`,
      ],
      answer: 3,
      explanation: String.raw`$V=(2a)^3=8a^3$.`,
    },
    {
      id: 'q4',
      question: String.raw`Khối chóp $S.ABC$ có $SA$, $SB$, $SC$ đôi một vuông góc với $SA=2$, $SB=3$, $SC=6$ có thể tích`,
      options: [
        String.raw`$36$`,
        String.raw`$12$`,
        String.raw`$6$`,
        String.raw`$18$`,
      ],
      answer: 2,
      explanation: String.raw`$V=\dfrac{2\cdot3\cdot6}{6}=6$.`,
    },
    {
      id: 'q5',
      question: String.raw`Tứ diện đều cạnh $a$ có thể tích`,
      options: [
        String.raw`$\dfrac{a^3\sqrt2}{12}$`,
        String.raw`$\dfrac{a^3\sqrt3}{12}$`,
        String.raw`$\dfrac{a^3\sqrt6}{12}$`,
        String.raw`$\dfrac{a^3}{6}$`,
      ],
      answer: 0,
      explanation: 'Công thức thể tích tứ diện đều.',
    },
    {
      id: 'q6',
      question: String.raw`Cho hình chóp $S.ABC$, $M$ là trung điểm $SB$. Khi đó $\dfrac{V_{S.AMC}}{V_{S.ABC}}$ bằng`,
      options: [
        String.raw`$\dfrac14$`,
        String.raw`$\dfrac12$`,
        String.raw`$\dfrac13$`,
        String.raw`$\dfrac23$`,
      ],
      answer: 1,
      explanation: String.raw`Tỉ số là $\dfrac{SM}{SB}=\dfrac12$ (các tỉ số còn lại bằng 1).`,
    },
    {
      id: 'q7',
      question: String.raw`Hình chóp tứ giác đều cạnh đáy $a$, chiều cao $h$ có thể tích`,
      options: [
        String.raw`$\dfrac{a^2h}{2}$`,
        String.raw`$a^2h$`,
        String.raw`$\dfrac{a^2h}{3}$`,
        String.raw`$\dfrac{2a^2h}{3}$`,
      ],
      answer: 2,
      explanation: String.raw`Đáy là hình vuông diện tích $a^2$ nên $V=\dfrac{a^2h}{3}$.`,
    },
    {
      id: 'q8',
      question: String.raw`Cho hình chóp $S.ABCD$ có đáy là hình bình hành, $M$ là trung điểm $SA$. Mặt phẳng qua $M$ song song với đáy cắt hình chóp theo thiết diện. Tỉ số thể tích phần chứa $S$ và phần còn lại là`,
      options: [
        String.raw`$\dfrac17$`,
        String.raw`$\dfrac18$`,
        String.raw`$\dfrac19$`,
        String.raw`$\dfrac1{27}$`,
      ],
      answer: 0,
      explanation: String.raw`Thiết diện chia hình chóp thành phần chứa $S$ có tỉ số đồng dạng $\dfrac12$ nên thể tích bằng $\dfrac18$ toàn phần; phần còn lại bằng $\dfrac78$. Vậy tỉ số là $\dfrac{1/8}{7/8}=\dfrac17$.`,
    },
  ],

  trueFalse: [
    {
      id: 'tf1',
      stem: 'Các công thức thể tích:',
      items: [
        { text: String.raw`$V=\dfrac13 S h$ với khối chóp.`, answer: true },
        { text: String.raw`$V=S h$ với khối lăng trụ.`, answer: true },
        { text: String.raw`Khối lập phương cạnh $a$ có $V=a^2$.`, answer: false },
        { text: String.raw`Khối hộp chữ nhật có $V=abc$.`, answer: true },
      ],
      explanation: String.raw`Khối lập phương cạnh $a$ có $V=a^3$, không phải $a^2$.`,
    },
    {
      id: 'tf2',
      stem: 'Các khẳng định về khối đa diện:',
      items: [
        { text: 'Hình chóp đều có chân đường cao trùng với tâm của đáy.', answer: true },
        { text: 'Lăng trụ đều là lăng trụ có đáy là tam giác đều.', answer: false },
        { text: 'Tứ diện đều là hình chóp tam giác đều có tất cả các cạnh bằng nhau.', answer: true },
        { text: 'Hình hộp chữ nhật là lăng trụ đứng có đáy là hình chữ nhật.', answer: true },
      ],
      explanation: 'Lăng trụ đều là lăng trụ đứng có đáy là đa giác đều bất kì, không chỉ tam giác đều.',
    },
    {
      id: 'tf3',
      stem: 'Các khẳng định về tỉ số thể tích:',
      items: [
        { text: String.raw`$\dfrac{V_{S.A'B'C'}}{V_{S.ABC}}=\dfrac{SA'}{SA}\cdot\dfrac{SB'}{SB}\cdot\dfrac{SC'}{SC}$.`, answer: true },
        { text: String.raw`Nếu $M$ là trung điểm $SA$ thì $\dfrac{V_{S.MBC}}{V_{S.ABC}}=\dfrac12$.`, answer: true },
        { text: 'Công thức tỉ số thể tích áp dụng được cho mọi hình chóp tứ giác.', answer: false },
        { text: String.raw`Tứ diện vuông cạnh $a$, $b$, $c$ có $V=\dfrac{abc}{6}$.`, answer: true },
      ],
      explanation: 'Công thức nhân ba tỉ số chỉ đúng cho hình chóp tam giác (tứ diện).',
    },
  ],

  shortAnswer: [
    {
      id: 'sa1',
      question: String.raw`Cho hình chóp có diện tích đáy $S=9$ và chiều cao $h=4$. Tính thể tích.`,
      answer: '12',
      unit: '',
      explanation: String.raw`$V=\dfrac13\cdot9\cdot4=12$.`,
    },
    {
      id: 'sa2',
      question: String.raw`Cho khối lăng trụ có diện tích đáy $S=6$ và chiều cao $h=5$. Tính thể tích.`,
      answer: '30',
      unit: '',
      explanation: String.raw`$V=6\cdot5=30$.`,
    },
    {
      id: 'sa3',
      question: String.raw`Cho tứ diện vuông $OABC$ có $OA=2$, $OB=3$, $OC=5$. Tính thể tích.`,
      answer: '5',
      unit: '',
      explanation: String.raw`$V=\dfrac{2\cdot3\cdot5}{6}=5$.`,
    },
    {
      id: 'sa4',
      question: String.raw`Cho hình chóp $S.ABC$, $M$ là trung điểm $SA$, $N$ là trung điểm $SB$. Tỉ số $\dfrac{V_{S.MNC}}{V_{S.ABC}}$ bằng $\dfrac1k$. Tìm $k$.`,
      answer: '4',
      unit: '',
      explanation: String.raw`Tỉ số là $\dfrac12\cdot\dfrac12=\dfrac14$ nên $k=4$.`,
    },
  ],
}

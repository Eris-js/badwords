
# Từ xấu
Gói này dành cho các nhà phát triển để có thể dễ dàng tích hợp việc kiểm tra từ xấu vào dự án của họ.
Gói này có thể trả về các từ xấu ở dạng mảng hoặc biểu thức chính quy (regex).
Thưởng thức!

Bấm vào [đây]('https://github.com/Eris-js/badwords/blob/master/README_vn.md') để xem phiên bản tiếng Việt

Cài đặt
=======

```shell
# NPM
npm install badwords

# YARN
yarn add badwords
```

Nhập
=====

CommonJS (Node)

```js
const { badWords } = require('badwords');
```

ES6

```js
import { badWords } from 'badwords';
```

Cách sử dụng
=====

```js
const text = "Có làm thì mới có ăn, không làm mà đòi có ăn thì ăn con cặc.";
const lang = 'vi'; // 'en' of 'vi'

badWords(text, { validate: true, lang });
// output: Có làm thì mới có ăn, không làm mà đòi có ăn thì ăn *******.

badWords(text, { replacement: '*', lang });
// output: true

badWords(text, { replacement: '*', blacklist: (defaultList) => [...defaultList, 'có', 'làm'] });
// output: Có *** thì mới có ăn, không *** mà đòi có ăn thì ăn *******.

badWords(text, { replacement: '*', lang }, (badwordsMatch, count) => console.log(badwordsMatch, count));
// output: [ 'con cặc' ] 1
```


[![Star History Chart](https://api.star-history.com/svg?repos=Eris-js/badwords&type=Timeline)](https://star-history.com/#Eris-js/badwords&Timeline)

=======

# Đóng góp cho danh sách từ thô tục tiếng Việt

Chúng tôi hoan nghênh mọi ý kiến đóng góp, xây dựng để bộ danh sách ngày một trở nên hoàn thiện. Xin tạo Pull Request, hoặc tạo một Issue mới nếu bạn muốn đóng góp một từ thô tục mới chưa có trong danh sách.
Các từ cần được viết ở dạng chữ thường không viết hoa, và được sắp xếp theo thứ tự bảng chữ cái tiêu chuẩn của tiếng Việt.

### The following word format are accepted Các định dạng sau đây được chấp thuận
- Từ tiếng Việt nguyên bản với thanh dấu
- Các biến thể khác của từ, được viết tắt, hoặc viết theo ngôn ngữ mạng
### The following word formats might not be accepted Các định dạng sau có thể không được chấp thuận, cần xem xét
- Các cụm từ bao gồm từ đã được liệt kê trong danh sách Vd: Đã có "đụ má", chúng tôi sẽ không nhận các cụm có chứa từ "đụ má", ví dụ như: "đụ má mày"
- Đại từ nhân xưng phổ thông. Vd: "mày", "tao"
- Các từ đơn chỉ có nghĩa tục trong bối cảnh nhất định, hoặc trong một câu hoàn chỉnh. Vd: "chó", "vú"
- Các từ tiêu cực nhưng không mang hàm ý xúc phạm nặng nề. Vd: "dốt", "đần"

Chúng tôi có sử dụng nguồn từ ngữ tiếng việt của [blue-eyes-vn](https://github.com/blue-eyes-vn)
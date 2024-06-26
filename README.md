
# Bad Words
This package is for developers to be able to easily integrate bad word checking into their projects.
This package can return bad words in array or regular expression (regex) form.
Enjoy!

Click [here](https://github.com/Eris-js/badwords/blob/master/README_vn.md) for International VietNamese version

Install
=======

```shell
# NPM
npm install badwords

# YARN
yarn add badwords
```

Import
=====

CommonJS (Node)

```js
const { badWords } = require('badwords');
```

ES6

```js
import { badWords } from 'badwords';
```

Usage
=====

```js
const text = "Hey, don't be such an ass";
const lang = 'en'; // 'en' of 'vi'

badWords(text, { validate: true, lang });
// output: **** offHey, don't be such an ***

badWords(text, { replacement: '*', lang });
// output: true

badWords(text, { replacement: '*', blacklist: (defaultList) => [...defaultList, "fuck", "don't"] });
// output: **** offHey, ***** be such an ass

badWords(text, { replacement: '*', lang }, (badwordsMatch, count) => console.log(badwordsMatch, count));
// output: [ 'Fuck', 'ass' ] 2
```


[![Star History Chart](https://api.star-history.com/svg?repos=Eris-js/badwords&type=Timeline)](https://star-history.com/#Eris-js/badwords&Timeline)

=======

# Contributing to the Vietnamese Offensive Words list
We are welcome every contribution to this Vietnamese Offensive Words list. Please open a Pull Request (insert link here), or submit an issue (insert link here) if you want to contribute a new, smelly offensive word to the list. The new word must be inserted in its corresponding group (if possible).

### The following word format are accepted
- Original Vietnamese word with native accent
- Word variant written in short form, or teencode
### The following word formats might not be accepted
- For an already listed word, we might not accept word phrase that already contains it.
- E.g: Already in listing "đụ má", we might not accept "đụ má mày"
- Regular personal pronoun. E.g: "mày", "tao"
- Single word that is only offensive if used in certain context. E.g: "chó"
- Meaningful negative words does not emphasize insulting attitude. E.g: "dốt", "đần"

We use the Vietnamese word source [blue-eyes-vn](https://github.com/blue-eyes-vn)


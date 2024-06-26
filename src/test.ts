import { badWords } from './index';

const text = 'Fuck offHey, don\'t be such an ass';
const lang  = 'en';
console.log(badWords(text, { replacement: '*', lang }));
console.log(badWords(text, { validate: true, lang }));
console.log(badWords(text, { replacement: '*', blacklist: (defaultList) => [...defaultList, "fuck", "don't"] }))
console.log(badWords(text, { replacement: '*', lang }, (badwordsMatch, count) => console.log(badwordsMatch, count)));

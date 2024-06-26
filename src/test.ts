import { badWords } from './index';

const text = 'dit, dit me no, dit mẹ cái con bà mày luôn, không làm mà đòi có ăn thì ăn con cặc ăn lồn nhá nung lon rảnh lon tuổi lon ngu lon';
const lang  = 'vi'
console.log(badWords(text, { replacement: '*', lang })); // Test with replacement and lang 'en'
console.log(badWords(text, { validate: true, lang })); // Test with validate and lang 'en'
console.log(badWords(text, { replacement: '*', lang }, (badwordsMatch, count) => console.log(badwordsMatch, count))); // Test with callback

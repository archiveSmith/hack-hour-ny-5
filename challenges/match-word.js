// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac",
//i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that
//takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or
//punctuation.

// matchWord('__END______DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ]
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
  if (str.length === 0) return true;

  const stack = [];
  const words = str
    .toLowerCase()
    .replace(/[^a-z0-9]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ');

  for (let word of words) {
    const lastItemInStack = stack[stack.length - 1];
    const reversedWord = word.split('').reverse().join('');

    if (lastItemInStack === reversedWord) {
      stack.splice(stack.length - 1, 1);
    } else {
      stack.push(word);
    }
  }

  return stack.length === 0;
}

// function matchWord(str) {
//   const stack = [];
//   let word = '';

//   for (let i = 0; i <= str.length; i++) {
//     const char = str[i];

//     if (char && char.match(/[A-Za-z0-9]/)) {
//       word += char.toLowerCase();
//     } else if (word.length > 0) {
//       const reversedWord = word.split('').reverse().join('');
//       const lastItemInStack = stack[stack.length - 1];

//       if (lastItemInStack === reversedWord) {
//         stack.splice(stack.length - 1, 1);
//       } else {
//         stack.push(word);
//       }

//       word = '';
//     }
//   }

//   return stack.length === 0;
// }

console.log(matchWord('__END_DNE-----'));
console.log(matchWord('__ENDDNE__'));
console.log(matchWord('IF()()fi[]'));
console.log(matchWord('for__if__rof__fi'));
console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'));
console.log(matchWord(''));

module.exports = matchWord;

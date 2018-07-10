// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac",
//i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that
//takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or
//punctuation.

// matchWord('__END_DNE-----');  -> true
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
    .replace(/[^a-z]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ');

  for (let word of words) {
    const lastItemInStack = stack[stack.length - 1];
    const reversedWord = word
      .split('')
      .reverse()
      .join('');

    if (stack.includes(reversedWord)) {
      if (reversedWord !== lastItemInStack) return false;
      else stack.pop();
    } else {
      stack.push(word);
    }
  }

  return stack.length === 0;
}

console.log(matchWord('__END_DNE-----'));
console.log(matchWord('__ENDDNE__'));
console.log(matchWord('IF()()fi[]'));
console.log(matchWord('for__if__rof__fi'));
console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'));
console.log(matchWord(''));

module.exports = matchWord;

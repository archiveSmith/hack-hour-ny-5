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
  const stack = [];
  const reversedStringsStack = [];
  let runString = '';
  for (let i = 0; i <= str.length; i++) {
    if (i < str.length && 'abcdefghijklmnopqrstuvwxyz'.indexOf(str.charAt(i).toLowerCase()) !== -1) {
      runString += str.charAt(i).toLowerCase();
    }
    else if (runString.length > 0) {
      if (reversedStringsStack.length > 0 && reversedStringsStack[reversedStringsStack.length - 1] === runString) {
        stack.pop();
        reversedStringsStack.pop();
      }
      else {
        stack.push(runString);
        reversedStringsStack.push(runString.split('').reverse().join(''));
      }
      runString = '';
    }
  }
  return stack.length === 0;
}

module.exports = matchWord;

// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ]
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

// step 1 would be to figure out if the character is a letter -> word // could use regex to get rid of all special characters except spaces or punctuations
// if the string is equal to its reversed order && also has a space or punctuation inbetween the words

function matchWord(str) {
  let stack = [];
  let strArr = str.split("");
}

//Shanes Amazing solution
function matchWord(str) {
  if (typeof str !== "string") return "bad input";
  if (str === "") return true;

  let stack = [];
  let wordArr = str.split(/[^a-z]/gi).filter(el => el.length);
  if (wordArr % 2) return false;
  console.log("here");
  wordArr.forEach(word => {
    word
      .split("")
      .reverse()
      .join("") === stack[stack.length - 1]
      ? stack.pop()
      : stack.push(word);
  });
  return !stack.length;
}

module.exports = matchWord;

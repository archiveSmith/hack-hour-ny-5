/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true ({()})
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false(() { ())
 *
 *
 */

function balancedParens(input) {
  let newString = input.replace(/[a-zA-Z0-9&\/\\#,+$~%.'":*?<>=\s]/g, ""); // eliminates all but (), {} & []
  if (newString.length % 2 !== 0) {
    // if remaining string is not even automatic false
    return false;
  }

  let firstHalf = newString.substring(0, newString.length / 2); //   [{( | {}[

  let secondHalfreversed = newString
    .substring(newString.length / 2)
    .split("")
    .reverse()
    .join("");
  let secondHalfChanged = secondHalfreversed
    .replace(/[ } ]/g, "{")
    .replace(/[ \] ]/g, "[")
    .replace(/[ ) ]/g, "(");

  let replacedString = newString
    .replace(/[ } ]/g, "{")
    .replace(/[ \] ]/g, "[")
    .replace(/[ ) ]/g, "("); // {{(([[

  if (firstHalf === secondHalfChanged) {
    return true;
  }
  for (let i = 0; i < newString.length; i += 2) {
    if (replacedString[i] === replacedString[i + 1]) {
      return true;
    }
  }
  return false;
}
console.log(balancedParens(" var wow  = { yo: thisIsAwesome() }")); // true ({()})
console.log(balancedParens(" var hubble = function() { telescopes.awesome();"));

module.exports = balancedParens;

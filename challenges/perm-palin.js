/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function permPalin(str) {
  let strObj = {};
  let objOddCount = 0;
  let strArr = str.split('');
  for (let i = 0; i < str.length; i++) {
    if (!strObj[strArr[i]]) strObj[strArr[i]] = 0;
    strObj[strArr[i]]++;
  }
  for (key in strObj) {
    if (strObj[key] % 2 !== 0) {
      objOddCount++;
    }
    if (objOddCount > 1) {
      return false;
    }
  }
  return true;
}

module.exports = permPalin;

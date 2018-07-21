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
  const table = str.split('').reduce((a, char) => ((a[char] = !a[char]), a), {});
  const count = Object.values(table).reduce((a, value) => (value ? a + 1 : a), 0);

  return count <= 1;
}

console.log(permPalin('abab'));
console.log(permPalin('cbaba'));
console.log(permPalin('cbac'));
console.log(permPalin('a'));

module.exports = permPalin;

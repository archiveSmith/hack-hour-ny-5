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

// function permPalin(str) {
//   const stack = [];
//   const charArray = str.split('').sort();

//   for (let char of charArray) {
//     if (stack[stack.length - 1] !== char) {
//       stack.push(char);
//     } else {
//       stack.pop();
//     }
//   }

//   return stack.length <= 1;
// }

function permPalin(str) {
  const table = {};
  let count = 0;

  for (let char of str) {
    table[char] = !table[char];
  }

  for (let char in table) {
    if (table[char] && ++count > 1) {
      return false;
    }
  }

  return count <= 1;
}

// function permPalin(str) {
//   return Object.values(str.split('').reduce((a, char) => ((a[char] = !a[char]), a), {})).reduce((a, value) => (value ? a + 1 : a), 0) <= 1;
// }

console.log(permPalin('abab'));
console.log(permPalin('cbaba'));
console.log(permPalin('cbac'));
console.log(permPalin('a'));

module.exports = permPalin;

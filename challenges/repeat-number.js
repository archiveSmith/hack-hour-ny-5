/**
 * I have an array where every number in the range 1...n appears once except for
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

function repeatNumbers(array) {
  const { length } = array;
  let sumOfOneToN = 0;
  let sum = 0;
  for (let i = 0; i < length; i++) {
    if (i < length - 1) sumOfOneToN += i + 1;
    sum += array[i];
  }

  return sum - sumOfOneToN;
}

console.log(repeatNumbers([1, 2, 3, 4, 5, 6, 7, 2]));
console.log(repeatNumbers([1, 2, 3, 4, 5, 6, 7, 5]));
console.log(repeatNumbers([1, 2, 3, 4, 5, 6, 7, 4]));

module.exports = repeatNumbers;

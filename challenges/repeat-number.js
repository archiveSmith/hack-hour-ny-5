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
    let total = (array.length - 1) * (array.length) / 2;
    return array.reduce((acc, cur) => acc + cur, 0) - total;
}

console.log(repeatNumbers([1,2,3,4,4]));

module.exports = repeatNumbers;

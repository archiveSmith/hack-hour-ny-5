/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (!Array.isArray(array) || array.length < 3) return 0;

  array.sort((a, b) => a - b);

  const { length } = array;
  const productOfThreeLargest = array[length - 1] * array[length - 2] * array[length - 3];
  const productOfTwoSmallestAndLargest = array[0] * array[1] * array[length - 1];

  return Math.max(productOfThreeLargest, productOfTwoSmallestAndLargest);
}

module.exports = highestProduct;

console.log(highestProduct([3, -7, 5, 90, -30]));
console.log(highestProduct([1, 2, 3, 4]));
console.log(highestProduct([1, 2, 3, 4, 5]));
console.log(highestProduct([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4]));
console.log(highestProduct([-90, -100, -5888, 1, 2837]));

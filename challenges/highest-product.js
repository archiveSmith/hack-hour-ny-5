/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  let maxArray = [array[0], array[0], array[0]];
  let minArray = [array[0], array[0], array[0]];

  array.forEach(num => {
    if (maxArray[2] < num) maxArray[2] = num;
    if (minArray[2] > num) minArray[2] = num;
    maxArray = maxArray.sort((a, b) => a < b);
    minArray = minArray.sort((a, b) => a > b);
  });
  console.log(maxArray, minArray);
}

module.exports = highestProduct;

console.log(highestProduct([1, 2, 3]));
console.log(highestProduct([1, 2, 3, 4]));
console.log(highestProduct([1, 2, 3, 4, 5]));
console.log(highestProduct([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4]));
console.log(highestProduct([-90, -100, -5888, 1, 2837]));

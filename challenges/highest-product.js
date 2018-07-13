/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array, n = 3) {
  if (!Array.isArray(array)) return false;
  let result = 1;
  let sorted = array.sort((a, b) => {
    return b - a;
  });
  for (let i = 0; i < n; i++) {
    result *= sorted[i];
  }
  return result;
}

module.exports = highestProduct;

/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  const lookup = {};

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    const difference = n - num;
    if (lookup[difference]) return true;
    lookup[num] = true;
  }

  return false;
}

console.log(twoSum([1, 2, 3, 4, 5], 7));

module.exports = twoSum;

/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  const lookup = {};
  const { length } = arr;

  for (let i = 0; i < length; i++) {
    const num = arr[i];
    lookup[num] = true;
    const difference = target - num;
    if (lookup[difference]) return true;
  }

  return false;
}

console.log(twoSum([1, 2, 3, 4, 5], 7));

module.exports = twoSum;

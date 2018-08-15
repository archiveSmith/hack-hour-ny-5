/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

// NOT FINISHED
function maxSubarray(arr) {
  const { length } = arr;
  let max = 0;

  for (let i = 0; i < length; i++) {
    const sum = arr[i];

    if (max < sum) {
      max = sum;
    }
  }
}

module.exports = maxSubarray;

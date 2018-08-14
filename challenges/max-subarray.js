/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
    let max_live;
    let max_dead;
    for (let i = 0; i < arr.length; i++) {
        if (! max_live) {
            max_live = arr[i];
            max_dead = arr[i];
        }
        else {
            max_live = Math.max(max_live + arr[i], arr[i]);
            if (max_live > max_dead) {
                max_dead = max_live;
            }
        }
    }
    return Math.max(max_live, max_dead);
}

module.exports = maxSubarray;

/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

 // I realize what's missing in this is two pointers to show if the subarray does NOT include one of the ends and instead includes some middle chunk. I'll have to keep thinking about this one...

function maxSubarray(arr) {
    let storage = {};
    for (let i = 0; i < arr.length; i++) {
        slicedArr = arr.slice(i);
        let sum = slicedArr.reduce((acc, curr) => {
            return acc + curr;
        });
        console.log('sum: ', sum);
        storage[i] = sum;
    }
    console.log('storage: ', storage);

    for (let j = 1; j < arr.length; j++) {
        revSlicedArr = arr.slice(-j);
        console.log('revSlicedArr: ', revSlicedArr);
        let revSum = revSlicedArr.reduce((acc, curr) => {
            return acc + curr;
        });
        storage[j+`rev`] = revSum;
    }
    console.log('storage after 2nd loop: ', storage);
}

console.log(maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]));

module.exports = maxSubarray;

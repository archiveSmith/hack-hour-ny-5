/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
    const seenNumbers = {};
    for (let i = 0; i < arr.length; i++) {
        const cur_num = arr[i];
        if (seenNumbers[n - cur_num]) {
            return true;
        }
        seenNumbers[cur_num] = true;
    }
    return false;
}

module.exports = twoSum;

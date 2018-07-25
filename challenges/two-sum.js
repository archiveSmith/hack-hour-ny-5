/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

 // I realize this is O(n^2) time and am trying to think of ways to optimize it...I could prob refactor to get one less for loop at least!
// function twoSum(arr, n) {
//     //initiate sum array
//     let sumArr = [];
//     // find all the sums
//     for (let i = 0; i < arr.length; i++) {
//         let firstElem = arr[i];
//         for (let j = i + 1; j < arr.length; j++) {
//             let secondElem = arr[j];
//             sumArr.push(firstElem + secondElem);
//         }
//     }
//     for (let k = 0; k < sumArr.length; k++) {
//         if (sumArr[k] === n) {
//             return true;
//         }
//     }
//     return false;
// }

// the top version works, still messing around with this version...trying to get to O(n) time!
function twoSum(arr, n) {
    const storage = {};
    for (let i = 0; i < arr.length; i++) {
        if (!storage[i]) {
            storage[i] = arr[i];
        } 
        for (let key in storage) {
            if (storage[i] === n-arr[i]) {
                return true;
            }
        }
    }
    return false;
}

console.log(twoSum([5, 6, 7, 8], 11));

module.exports = twoSum;

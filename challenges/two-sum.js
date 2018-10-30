/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */


function twoSum(arr, n) {
  let lookup = {};
  for (let num of arr) {
    if(lookup[n - num]) {
      return true;
    } 
    lookup[num] = true;
  }
  return false;
}


// function twoSum(arr, n) {
//   let length = arr.length;
//     for (let i = 0; i < length; i++) {
//       for (let j = 0; j < length; j++) {
//         if(i !== j) {
//           if (arr[i] + arr[j] === n) return true;
//         }
//       }
//     }
//   return false;
// }
  



module.exports = twoSum;

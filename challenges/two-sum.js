/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

ffunction twoSum(arr, n) {
    let length = arr.length;
      for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
          if(i !== j) {
            if (arr[i] + arr[j] === n) return true;
          }
        }
      }
    return false;
  }
  
  console.log(twoSum([1,2,3], 6));


module.exports = twoSum;

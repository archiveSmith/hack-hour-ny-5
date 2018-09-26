/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a function to merge our arrays of orders into one sorted array.
 * These may be of different lengths.
 *
 * var my_array = [3,4,6,10,11,15,21];
 * var another_array = [1,5,8,12,14,19];
 *
 * mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
 *
 * BONUS:
 * Complete in O(n) time
 *
 */

function mergeArrays(arr1, arr2) {
  const newArray = [];
  const length1 = arr1.length;
  const length2 = arr2.length;
  let index1 = 0;
  let index2 = 0;

  while (index1 < length1 && index2 < length2) {
    const smallest = arr1[index1] < arr2[index2] ? arr1[index1++] : arr2[index2++];
    newArray.push(smallest);
  }

  while (index2 < length2) {
    newArray.push(arr2[index2++]);
  }

  while (index1 < length1) {
    newArray.push(arr1[index1++]);
  }

  return newArray;
}

var my_array = [3, 4, 6, 10, 11, 15, 21];
var another_array = [1, 5, 8, 12, 14, 19];

console.log(mergeArrays(my_array, another_array));

module.exports = mergeArrays;

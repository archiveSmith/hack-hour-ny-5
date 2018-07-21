/**
 * We have our lists of orderd numbers. They are sorted numerically already, in an array format.
 * Write a functin to merge our arrays of ordered into one sorted array.
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

// var my_array      = [3,4,6,10,11,15,21];
// var another_array = [1,5,8,12,14,19];

function mergeArrays(arr1, arr2) {
  let newArr = [];
  while (arr1.length !== 0 && arr2.length !== 0) {
    if (arr1[0] < arr2[0]) {
      newArr.push(arr1.splice(0, 1)[0]);
    } else if (arr2[0] < arr1[0]) {
      newArr.push(arr2.splice(0, 1)[0]);
    }
  }
  if (arr1.length > arr2.length) {
    newArr.concat(arr1);
  } else {
    newArr.concat(arr2);
  }

  return newArr;
}

console.log(mergeArrays(my_array, another_array));

// function mergeArrays(arr1, arr2) {
//   let combined = arr1.concat(arr2);
//   return combined.sort(function(a, b) {
//     return a - b;
//   });
// }

module.exports = mergeArrays;

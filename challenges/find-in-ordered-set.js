/*
 * How quickly could we check if a given integer is in the array?
 * Assume the array is sorted.
 * You can do better than O(n) time
 * 
 * var nums = [1, 4, 6, 7, 9, 17, 45]
 * findInOrderedSet(nums, 4);  -> true
 * findInOrderedSet(nums, 2);  -> false
 * 
 */

function findInOrderedSet(arr, target) {
  let firstIndex = 0;
  let lastIndex = arr.length - 1;

  while (firstIndex <= lastIndex) {
    let middleIndex = Math.floor((firstIndex + lastIndex) / 2);
    let num = arr[middleIndex];

    if (target === num) return true;
    if (target < num) lastIndex = middleIndex - 1;
    if (target > num) firstIndex = middleIndex + 1;
  }

  return false;
}

var nums = [1, 4, 6, 7, 9, 17, 45];
console.log(findInOrderedSet(nums, 4));
console.log(findInOrderedSet(nums, 2));

module.exports = findInOrderedSet;

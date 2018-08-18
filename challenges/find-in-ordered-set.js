/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
    let min = 0;
    let max = arr.length-1;
    while (min <= max) {
        const mid = (min + max) / 2;
        if (arr[mid] === target) {
            return true;
        }
        else if (arr[mid] < target) {
            min = mid + 1;
        }
        else {
            max = mid - 1;
        }
    }
    return false;
}


module.exports = findInOrderedSet;

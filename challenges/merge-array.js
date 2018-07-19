/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a functin to merge our arrays of orders into one sorted array.
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
    const mergedArray = [];
    let arr1_ind = 0;
    let arr2_ind = 0;
    while (arr1_ind < arr1.length && arr2_ind < arr2.length) {
        if (arr1[arr1_ind] <= arr2[arr2_ind]) {
            mergedArray.push(arr1[arr1_ind]);
            arr1_ind++;
        }
        else {
            mergedArray.push(arr2[arr2_ind]);
            arr2_ind++;
        }
    }
    let arrLeft = arr1;
    let arrLeftInd = arr1_ind;
    if (arr2_ind < arr2.length) {
        arrLeft = arr2;
        arrLeftInd = arr2_ind;
    }
    while (arrLeftInd < arrLeft.length) {
        mergedArray.push(arrLeft[arrLeftInd]);
        arrLeftInd++;
    }
    return mergedArray;
}

module.exports = mergeArrays;

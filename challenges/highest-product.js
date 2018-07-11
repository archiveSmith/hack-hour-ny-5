/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

 // [5, 1, 8, 2, 3];
 // 5 * 1 * 8
 // 5 * 8 * 2
 // 5 * 2 * 3
 
 // 1 * 8 * 2
 // 1 * 5 * 2
 // 1 * 2 * 3

 // 8 * 5 * 



function highestProduct(array) {
    // first find combinations, then push them into an array.
    // put product as key and array of vals that make up the product as val
    // loop through object and compare keys
    let storage = {};
    for (let i = 0; i < array.length; i++) {
        let currentVal = array[i];
        threeNums = array.slice(i, i + 3);
        console.log('threeNums inside for loop: ', threeNums);
        let productToCompare = threeNums[0] * threeNums[1] * threeNums[2];
        storage[productToCompare] = threeNums;
        console.log('storage: ', storage);
    }
    // console.log(threeNums);
}
module.exports = highestProduct;

console.log('highestProduct([5, 1, 8, 2, 3]): ', highestProduct([5, 1, 8, 2, 3]));
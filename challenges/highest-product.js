/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

 function highestProduct(array) {
   if(!array || !Array.isArray(array)) return undefined;
   let sums = [];
   for(let i = 0; i < array.length - 2; i++) {
     sums.push(array[i] + array[i+1] + array[i+2]);
   }
   return Math.max(...sums);
 }


module.exports = highestProduct;

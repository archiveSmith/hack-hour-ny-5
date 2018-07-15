/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

 function highestProduct(array) {
   if(!array || !Array.isArray(array) || array.length < 3) return undefined;
   let firstMin = Infinity;
   let secondMin = Infinity;
   let firstMax = -Infinity;
   let secondMax = -Infinity;
   let thirdMax = -Infinity;
   array.forEach((value) => {
     if (typeof value !== 'number') return undefined;
     if (value < firstMin) {
       secondMin = firstMin;
       firstMin = value;
     } else if (value < secondMin) {
       secondMin = value;
     }
     if (value > firstMax) {
       thirdMax = secondMax;
       secondMax = firstMax;
       firstMax = value;
     } else if (value > secondMax) {
       thirdMax = secondMax;
       secondMax = value;
     } else if (value > thirdMax) {
       thirdMax = value;
     }
   });
   let product = Math.max(firstMax * secondMax * thirdMax, firstMax * firstMin * secondMin);
   return product;
 }


module.exports = highestProduct;

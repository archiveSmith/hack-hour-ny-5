/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

 function pow(base, power) {
   if(!base || !power || typeof base !== 'number' || typeof power !== 'number') return undefined;
   let result = 1;
   let count = 0;
   while (count < power) {
   if (count < power) {
     result *= base;
     count ++;
   } else {
     pow(result, power);
   }
 }
   return result;
 }

module.exports = pow;

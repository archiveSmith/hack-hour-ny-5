/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


 function modemean(array) {
   let mean = 0, mode;
   // storing all the occurences of numbers in object, storing the sum of all elements in the array in the variable mean
   let storage = array.reduce((obj, num) => {
     mean += num;
     !obj[num] ? obj[num] = 1 : obj[num]++;
     return obj;
   }, {})
   //calculating the mean
   mean = Math.floor(mean / array.length);
   //finding the max of modes in the sorted array of storage keys
   Object.keys(storage).sort().reduce((prev, curr) =>             storage[curr] >= prev ? mode = curr : mode, 0);

   return mode == mean;
 }

module.exports = modemean;

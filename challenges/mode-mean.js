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
   const storage = {};
   let mean = 0, mode;
   for (let i = 0; i < array.length; i++) {
     mean += array[i];
     storage[array[i]] === undefined ? storage[array[i]] = 1 : storage[array[i]]++;
   }
   mean = Math.floor(mean / array.length);
   mode = Math.max(...Object.values(storage));
   return mode === mean;
 }

module.exports = modemean;

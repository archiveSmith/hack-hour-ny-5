'use strict';
/**
 * Write a function to reverse an array in place
 *
 * "In place" means "without creating a new object in memory"
 *
 * In some languages, strings are mutable (like in Ruby). In other languages,
 * such as Python and Javascript, strings are immutable, meaning they cannot
 * be changed after they're created.
 *
 * Since strings are immutable in javascript, we will be reversing an array of characters instead.
 *
 * DO NOT USE THE BUILT IN REVERSE METHOD
 */
// "Hello" --> "olleH"
function reverseInPlace(array) {
  
  for (let i = 0; i < Math.floor(array.length - (i + 1)); i++) {
    let [first, last] = [ array[i], array[array.length - (i + 1) ] ];
    [ array[i], array[array.length - (i + 1) ] ] = [last, first];
  }
  return array;
}
let arr = ['h','e','l','l','o'];
// console.log(reverseInPlace(arr))
// console.log(reverseInPlace("Hello"))
console.log(["c","a","b"].join(""));
// function reverseInPlace(array) { 
//   for (let i = 0; i < Math.floor(array.length/2); i++) {
// 	  [array[i], array[array.length - 1 - i]] = [array[array.length - 1 - i], array[i]];
//   console.log(array)
//   }
//   return array;
// }



module.exports = reverseInPlace;

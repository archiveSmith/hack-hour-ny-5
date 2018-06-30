'use strict';
/**
 * Write a function to reverse an array in place
 *
 * "In place" means "without creating a new object in memory" - no data structure - array / object
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
  if(!Array.isArray){
    console.log("Not a valid array")
  };
  for (let i = 0; i < Math.floor(array.length - (i + 1)); i++) {
    [array[array.length - (i + 1)] , array[i]] = [ array[i], array[array.length - (i + 1) ] ]
  }
  return array;
} // creates a _ref variable ? stealth variable
let arr = ['h','e','l','l','o'];
console.log(reverseInPlace(arr))
// console.log(reverseInPlace("Hello"))
// console.log(["c","a","b"].join(""));

// XOR bitwise operator
// 0 ^ 0 = 0 --> the same variable bit wise place to the same variable will be the same;
// 0 ^ 1 = 1  
// 1 ^ 0 = 1
// 1 ^ 1 = 0


module.exports = reverseInPlace;

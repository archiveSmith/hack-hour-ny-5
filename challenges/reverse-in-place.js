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

// Solution 1
function reverseInPlace(array){
  return array.reverse();
}

//Solution 2
// function reverseInPlace(array) {
//  // If input is not an array, tell user to insert array
//  if (!Array.isArray(array)) return 'Please insert array';
//  let left;
//  let right;
//  const length = array.length;
//  for (left = 0, right = length - 1; left < right; left += 1, right -= 1){
//    let temporary = array[left];
//    array[left] = array[right];
//    array[right] = temporary;
//  }
//  return array;
// }


// Solution 3
// function reverseInPlace(array) {
//  for (let i=0; i<array.length; i++){
//    array.splice(i,0,array.pop())
//  }
//  return array
// }

// Solution 4: ES6
// function reverseInPlace(array) {
//  // Loop through first half of array only since all elements will be swapped by then
//  for (let i = 0; i < array.length / 2; i++) {
//    [array[i], array[array.length - 1 - i]] = [array[array.length - 1 - i], array[i]];
//  }
//  // Return array modified in place
//  return array;
// } 

// Solution 5: Bitwise Operator
// function reverseInPlace(array) {
//  for (let i = 0; i < array.length / 2; i += 1) {
//    let left = array[i];
//    let right = array[array.length - 1 - i];
//    let temp = left ^ right;
//    array[i] = temp ^ left;
//    array[array.length - 1 - i] = temp ^ right;
//  }
//  return array
// }

// XOR bitwise operator
// 0 ^ 0 = 0 --> the same variable bit wise place to the same variable will be the same;
// 0 ^ 1 = 1  
// 1 ^ 0 = 1
// 1 ^ 1 = 0


module.exports = reverseInPlace;

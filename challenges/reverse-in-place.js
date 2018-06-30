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

<<<<<<< HEAD
 function reverseInPlace(array) {
   // handling edge case
   if(!Array.isArray(array)) return;
  // looping through the array to get indeces of the elements to swap
   for(let i = 0; i < array.length / 2; i++) {
     let insertAtIndex = array.length - 1 - i;
     let temp = array[i];
     array[i] = array[insertAtIndex];
     array[insertAtIndex] = temp;
   }
   return array;
 }
=======
function reverseInPlace(array) {

}
>>>>>>> 13bcbbaeb10577fc3a298b4d86c18eb67ac573a9

module.exports = reverseInPlace;

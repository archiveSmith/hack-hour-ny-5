'use strict';

console.log("==========================RUNNING===============================")

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

// function reverseInPlace(array) {
//     for (let i = 0; i < (Math.floor(array.length/2)); i++) {
//         for (let j = i + 1; )
//     }
// }
    

// Math.ceil(array.length/2);

function reverseInPlace(array) {
    for (let i = 0; i < Math.floor(array.length/2); i++) {
        let iterateFromStart = array[i];
        for (let j = array.length - 1; j >= (Math.ceil(array.length/2)); j--) {
            let iteratefromBack = array[j];
            console.log('array BEFORE splice: ', array);
            console.log('i: ', i);
            console.log('j: ', j);
            console.log('array[i]: ', array[i]);
            console.log('array[j]: ', array[j]);  
            array.splice(i, 1, array[j]);
            console.log('array after first splice and before second splice: ', array);
            array.splice(j, 1, array[i])
            // array.splice(j, 0, array[i]);
            console.log('array after splice: ', array);  
        }
    }
    console.log('array after for loops: ', array);  
}

// So I can tell a nested for loop isn't working (at least in the way it is currently designed here) because i = 0 is still i = 0 while j is decrementing through entire array. Maybe starting at a halfway poind and iterating out would be the way to go next?

console.log('reverseInPlace([5, 6, 7, 8]): ', reverseInPlace([5, 6, 7, 8]));

module.exports = reverseInPlace;

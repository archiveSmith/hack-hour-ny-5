// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5
// fizzbuzz(16);  -> [ 1,
//                     2,
//                     'fizz',
//                     4,
//                     'buzz',
//                     'fizz',
//                     7,
//                     8,
//                     'fizz',
//                     'buzz',
//                     11,
//                     'fizz',
//                     13,
//                     14,
//                     'fizzbuzz',
//                     16 ]

// for loop
function fizzbuzz(num) {
    let returnArr = [];
    for (let i = 1; i < num + 1; i++) {
        if (i % 15 === 0) {
            returnArr.push('fizzbuzz');
        } else if (i % 5 === 0) {
            returnArr.push('buzz');
        } else if (i % 3 === 0) {
            returnArr.push('fizz')
        } else {
            returnArr.push(i);
        }
    }
    return returnArr;
}

// while loop
// function fizzbuzz(num) {
//     let returnArr = [];
//     let x = 0;
//     while (x < num) {
//         x++;
//         if (x % 15 === 0) {
//             returnArr.push('fizzbuzz');
//         } else if (x % 5 === 0) {
//             returnArr.push('buzz');
//         } else if (x % 3 === 0) {
//             returnArr.push('fizz')
//         } else {
//             returnArr.push(x);
//         }
//     }
//     return returnArr;
// }

//recursion

// I think the way to use recursion is to call the func on each incremented num to see if 
// the number incrementing from 1 is equal to num.
// so the "unknown" is num for intents and purposes of practicig recursion
// base case-- should be when var = num + 1 so that it returns the array from num before
// recursive case-- should be everything else 
// edge cases?  
// could also potentially use array length for return array
// just trying to get a list of nums first then will add fizz/buzz logic

// function fizzbuzz(num) {
//     const returnArr = [];
//     let x = 1;
//     // x++
//     // base case
//     if (x >= num + 1) {
//         return returnArr;
//         console.log(x);

//     // recursive case
//     } else {
//         returnArr.push(x);
//         x++
//         return fizzbuzz(x);
//     }
// }

// function fizzbuzz(num) {
//     const returnArr = [];
//     let x = 1;

// // recursive case
//     if (x < num) {
//         returnArr.push(x);
//         x++
//         return fizzbuzz(x);
//     }

// // base case
//     else {
//         return returnArr;
//     }
// }

// console.log(fizzbuzz(16));


module.exports = fizzbuzz;

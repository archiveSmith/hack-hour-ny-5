/**
 * Write a function that will take an array of integers, all of which will appear exactly twice,
 * except for one integer that will appear exactly once. Return the integer that appears once.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 *
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */

 // was about to switch the if/else to get it to work hopefully!
function uniqueNumber(array) {
    let counter = 0;
    let storage = {};
    for (let i = 0; i < array.length; i++) {
        let curr = array[i];
        console.log('curr: ', curr);

        else 
            console.log('hitting else statement')
            counter++;
            storage[curr] = counter;
        }



        if (!storage[curr]) {
            console.log('meets condition no storage[curr]')
            // console.log('storage: ', storage);
            storage[curr] = counter;
            console.log('counter: ', counter);
        }

    console.log(storage);

    // for (let key in storage) {
    //     if (counter < 1) {
    //         return key;
    //     }
    // }
}

// function uniqueNumber(array) {
//     let counter = 0;
//     let storage = {};
//     for (let i = 0; i < array.length; i++) {
//         let curr = array[i];
//         console.log('curr: ', curr);
//         if (!storage[curr]) {
//             console.log('meets condition no storage[curr]')
//             // console.log('storage: ', storage);
//             storage[curr] = counter;
//             console.log('counter: ', counter);
//         } else 
//             console.log('hitting else statement')
//             counter++;
//             storage[curr] = counter;
//         }

//     console.log(storage);

//     // for (let key in storage) {
//     //     if (counter < 1) {
//     //         return key;
//     //     }
//     // }
// }

console.log(uniqueNumber([1,2,1,3,3]))

module.exports = uniqueNumber;

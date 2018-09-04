// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort

function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let pointer2 = array[i];
        let pointerInd1 = i - 1;
        while (pointerInd1 >= 0 && array[pointerInd1] > pointer2) {
            array[pointerInd1] = pointer2;
            pointerInd1--;
        }
    }
    console.log(array)
}


// function insertionSort(array) {
//     for (let i = 0; i < array.length; i++) {
//         let pointer1 = array[i];
//         for (let j = i + 1; j < array.length; j++) {
//             let pointer2 = array[j];
//             if (pointer1 > pointer2) {
            
//             }
//         }
//     }
// }

console.log(insertionSort([6, 5, 3, 1, 7, 8, 2, 4]))

module.exports = insertionSort;
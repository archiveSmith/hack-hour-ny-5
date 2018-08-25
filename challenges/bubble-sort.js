// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
    for (let i = array.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (array[j] > array[j+1]) {
                const temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return array;
}

// const arr = [];
// for (let i = 0; i < 10; i++) {
//     arr.push(Math.floor(Math.random() * 20 - 10));
// }
// console.log(arr);
// console.log(bubbleSort(arr));

module.exports = bubbleSort;

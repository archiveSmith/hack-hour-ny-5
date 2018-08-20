// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        for (let j = 0; j < i; j++) {
            if (array[i] < array[j]) {
                const newEle = array[i];
                for (let k = i; k > j; k--) {
                    array[k] = array[k-1];
                }
                array[j] = newEle;
            }
        }
    }
    return array;
}

module.exports = insertionSort;
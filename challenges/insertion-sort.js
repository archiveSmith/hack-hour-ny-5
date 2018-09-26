// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort

function insertionSort(array) {
  const { length } = array;

  for (let i = 1; i < length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (array[j] <= array[j + 1]) break;
      [array[j], array[j + 1]] = [array[j + 1], array[j]];
    }
  }

  return array;
}

const arr = [5, 6, 7, 2, 9, 0, 1];
console.log(insertionSort(arr));

module.exports = insertionSort;

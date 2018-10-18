// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort

function swapArrayElements(array, indexA, indexB) {
  const temp = array[indexA];
  array[indexA] = array[indexB];
  array[indexB] = temp;
}

// function bubbleSort(array) {
//   let { length } = array;

//   for (let i = 0; i < array.length; i++) {
//     for (let j = 1; j < length; j++) {
//       if (array[j - 1] > array[j]) {
//         swapArrayElements(array, j - 1, j);
//       }
//     }
//     length--;
//   }

//   return array;
// }

// function bubbleSort(array) {
//   for (let i = 0; i < array.length; i++) {
//     let isSorted = true;

//     for (let j = 1; j < array.length - i; j++) {
//       if (array[j - 1] > array[j]) {
//         isSorted = false;
//         swapArrayElements(array, j - 1, j);
//       }

//       if (isSorted) break;
//     }
//   }

//   return array;
// }

function bubbleSort(array) {
  let isSorted = false;
  let { length } = array;

  while (!isSorted) {
    isSorted = true;

    for (let j = 1; j < length; j++) {
      if (array[j - 1] > array[j]) {
        isSorted = false;
        swapArrayElements(array, j - 1, j);
      }
    }
    length--;
  }

  return array;
}

(function () {
  const array = [];

  for (let i = 5000; i > 0; i--) {
    array.push(i);
  }

  console.log(bubbleSort(array));
})();

module.exports = bubbleSort;

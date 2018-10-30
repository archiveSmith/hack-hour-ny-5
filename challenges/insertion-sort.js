// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
    if(!array) return undefined;
    for (let i = 1; i < array.length; i++) {
      let element = array[i];
      let index = i-1;
      while(index >= 0) {
        if(element < array[index]) {
          let temp = array[index];
          array[index] = element;
          array[index + 1] = temp;
        } 
        index--;
      }  
    }
    return array;
  }

module.exports = insertionSort;
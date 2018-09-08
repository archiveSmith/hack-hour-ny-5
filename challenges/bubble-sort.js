// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  if(!array) return undefined;
  for(let i = 0; i < array.length; i++) {
    for(let j = 1; j < array.length; j++) {
      if(array[j] < array[j-1]) {
        let temp = array[j-1];
        array[j-1] = array[j];
        array[j] = temp;
      }
    }
    
  }
  return array;
}

module.exports = bubbleSort;

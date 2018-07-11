/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length >= 3) {
    const firstThree = array.slice(0,3).sort();
    let largestNumber = firstThree[2];
    let secondLargestNumber = firstThree[1];
    let thirdLargestNumber = firstThree[0]; 
    for (let i = 3; i < array.length; i++) {
      console.log(largestNumber + ', ' + secondLargestNumber + ', ' + thirdLargestNumber);
      if (array[i] > largestNumber) {
        thirdLargestNumber = secondLargestNumber;
        secondLargestNumber = largestNumber;
        largestNumber = array[i];
      }
      else if (array[i] > secondLargestNumber) {
        thirdLargestNumber = secondLargestNumber;
        secondLargestNumber = array[i];
      }
      else if (array[i] > thirdLargestNumber) {
        thirdLargestNumber = array[i];
      }
    }
    return largestNumber * secondLargestNumber * thirdLargestNumber;
  }
}

module.exports = highestProduct;

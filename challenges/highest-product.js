/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (! array instanceof Array) {
    return 0;
  }
  else if (array.length >= 3) {
    const firstThree = array.slice(0,3).sort();
    let largestNumber = firstThree[2];
    let secondLargestNumber = firstThree[1];
    let thirdLargestNumber = firstThree[0];
    let smallestNumber = thirdLargestNumber;
    let secondSmallestNumber = secondLargestNumber;
    for (let i = 3; i < array.length; i++) {
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
      if (array[i] < smallestNumber) {
        secondSmallestNumber = smallestNumber;
        smallestNumber = array[i];
      }
      else if (array[i] < secondSmallestNumber) {
        secondSmallestNumber = array[i];
      }
    }
    const largeProd = largestNumber * secondLargestNumber * thirdLargestNumber;
    const checkNegProd = largestNumber * smallestNumber * secondSmallestNumber;
    if (largeProd > checkNegProd) {
      return largeProd;
    }
    return checkNegProd;
  }
  else {
    return 0;
  }
}

module.exports = highestProduct;

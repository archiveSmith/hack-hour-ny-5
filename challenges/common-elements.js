// given 4 arrays that may contain both numbers and strings
// return a new array with the numbers and/or strings that appear in all 4 arrays
// duplicates are only counted once;
// for example == given the following input

// var array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
// var array2  = [15,9,9,'ferret',9,26,12,12,'dog'];
// var array3 = [23,12,12,77,'ferret',9,88,100,'dog'];
// var array4 = ['ferret',12,12,45,9,66,77,78,2000];

// your output would be [ 12, 'ferret']

// if there are no common numbers or strings return the string "Nothing in Common!"

// Brute force
function commonElements(array1, array2, array3, array4) {
  let counter = {};
  let commons = [];

  let n = 0;
  while (n < arguments.length) {
    for (let i = 0; i < arguments[n].length; i++) {
      if (n === 0) counter[arguments[n][i]] = 1;
      else if (n === 1) {
        if (counter[arguments[n][i]] === 1) counter[arguments[n][i]] = 2;
      } else if (n === 2) {
        if (counter[arguments[n][i]] === 2) counter[arguments[n][i]] = 3;
      } else if (n === 3) {
        if (counter[arguments[n][i]] === 3) counter[arguments[n][i]] = 4;
      }
    }

    n += 1;
  }

  for (let element in counter) {
    if (counter[element] === 4) commons.push(element);
  }

  if (!commons) return 'Nothing in common';
  return commons;
}

// // functional solution
// function commonElements(a1, a2, a3, a4) {
//   return checkIfNothingInCommon(filterOutDuplicates(filterToCommon([a1, a2, a3, a4])));
// }

// function filterToCommon(arrOfArrs) {
//   return arrOfArrs.reduce((inCommon, nextArray) => {
//     return inCommon.filter(el => {
//       return nextArray.includes(el);
//     });
//   });
// }

// function filterOutDuplicates(arr) {
//   return arr.filter((el, i, array) => {
//     return array.indexOf(el) === i;
//   });
// }

// function checkIfNothingInCommon(arr) {
//   return arr.reduce((a, b, i, arr) => {
//     return arr;
//   }, 'Nothing in Common');
// }

// // chaining higher order functions
// function commonElements(array1, array2, array3, array4) {
//   return [array1, array2, array3, array4]
//     .reduce((inCommon, nextArray) => inCommon.filter(el => nextArray.includes(el)))
//     .filter((el, i, array) => array.indexOf(el) === i)
//     .reduce((a, b, i, arr) => arr, 'Nothing in Common!');
// }

var array1 = [1, 4, 6, 7, 'ferret', 12, 12, 99, 2000, 'dog', 'dog', 99, 1000];
var array2 = [15, 9, 9, 'ferret', 9, 26, 12, 12, 'dog'];
var array3 = [23, 12, 12, 77, 'ferret', 9, 88, 100, 'dog'];
var array4 = ['ferret', 12, 12, 45, 9, 66, 77, 78, 2000];
console.log(commonElements(array1, array2, array3, array4));

module.exports = commonElements;

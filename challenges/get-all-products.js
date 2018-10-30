/* Accepts an array of integers and returns an array of all the possible products made by
 * multiplying all but one number. In other words, find all the products of multiplying any
 * array.length-1 numbers in the array.
 *
 * ex: getProducts([1, 7, 3, 4]); ->  [84, 12, 28, 21]
 * this is done via:
 * [7*3*4, 1*3*4, 1*7*4, 1*7*3]
 *
 * do not use division, becuase zero might be in the array and you cannot divide by zero
 */

function getAllProducts(array) {
    if(!array) return undefined;
    let result = [];
    for(let i = 0; i < array.length; i++) {
      let copy = Array.from(array);
      copy.splice(i, 1);
      let product = 1;
      for(let j = 0; j < copy.length; j++) {
          product *= copy[j];
      }
      result.push(product);    
    }
    return result;
  }

console.log(getAllProducts([1, 7, 3, 4]));

module.exports = getAllProducts;

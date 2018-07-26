/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array, n = 3) {
  if (!Array.isArray(array)) return false;
  let result = 1;
  let sorted = array.sort((a, b) => {
    return b - a;
  });
  for (let i = 0; i < n; i++) {
    result *= sorted[i];
  }
  return result;
}

// function highestProduct(array) {
//   // Edge cases.
//   if (!Array.isArray(array) || array.length < 3) return 0;

//   // Possible factors to be used.
//   const low = { one: Infinity, two: Infinity };
//   const high = { one: -Infinity, two: -Infinity, three: -Infinity };

//   // Iterate through array.
//   for(let i = 0; i < array.length; i++){
//     // Collect low values.
//     if(array[i] < low.one) [low.one,low.two] = [array[i],low.one];
//     else if(array[i] < low.two) low.two = array[i];
//     // Collect high values.
//     if(array[i] > high.one) [high.one,high.two,high.three] = [array[i],high.one,high.two];
//     else if(array[i] > high.two) [high.two,high.three] = [array[i],high.two];
//     else if(array[i] > high.three) high.three = array[i];
//   }

//   // Return maximum product of either 1) all high values or 2) high.one and both low values.
//   return Math.max(
//     high.one * high.two * high.three,
//     high.one * low.one * low.two
//   );
// }

module.exports = highestProduct;

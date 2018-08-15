/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example:
  * var result = anagrams('abc');
  * console.log(result); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

function anagrams(string) {
  if (string.length === 0) {
    return [''];
  }
  if (string.length === 1) {
    return [string];
  }
  const result = [];
  const rest = anagrams(string.substring(1));
  rest.forEach(str => {
    for (let i = 0; i <= str.length; i++) {
      const curString = str.substring(0,i) + string.charAt(0) + str.substring(i);
      let newString = true;
      for (let j = 0; j < result.length; j++) {
        if (result[j] === curString) {
          newString = false;
          break;
        }
      }
      if (newString) {
        result.push(curString);
      }
    }
  });
  return result;
}

module.exports = anagrams;

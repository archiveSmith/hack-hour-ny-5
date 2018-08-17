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

function anagrams(str) {
  if (str.length <= 1) return [str];

  const first = str[0];
  const rest = str.slice(1);

  return anagrams(rest).reduce(
    (accum, perm) =>
      accum.concat(str.split('').map((char, i) => perm.slice(0, i) + first + perm.slice(i))),
    []
  );
}

console.log(anagrams('abcd'));

module.exports = anagrams;

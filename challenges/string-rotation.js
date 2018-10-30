/* Given two strings, write a function to check if the second one is a rotation of the first,
 * using only one call to isSubstring. The function isSubstring takes in two strings and returns
 * true if the second string is found in the first, false otherwise.
 *
 * h->e->l->l->o   ===   l->l-o->h->e
 * h->e->l->l->o   !==   o->l-l->h->e
 *
 * For example: stringRotation("hello", "hello") -> true
 *              stringRotation("hello", "llohe") -> true
 *              stringRotation("hello", "he") -> false
 *              stringRotation("hello", "ollhe") -> false (not a rotation, just an anagram)
 */

function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}

function stringRotation(s1, s2) {
  //handling edge cases
  if(s1.length != s2.length || typeof s1 != 'string' || typeof s2 != 'string' || !s1 || !s2) return false;
  let firstCharS1 = s1.slice(0, 1);
  let start = s2.indexOf(firstCharS1);
  //splitting 2nd string into halves and creating a new one
  let secondHalf = s2.slice(start);
  let firstHalf = s2.slice(0, start);
  let newS2 = secondHalf + firstHalf;
  let array = newS2.split('');
  //checking if s1 and new s2 have the same letters at the same index
  return array.reduce(function(prevValue, letter) {
    let index = newS2.indexOf(letter);
    return prevValue === isSubstring(s1.charAt(index), newS2.charAt(index));
  }, true);
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};

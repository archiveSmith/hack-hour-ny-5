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

function stringRotation(s1, s2, numOfCharsRotating) { // it seems this needs another parameter for how many characters are being rotated.
  // critera to be true: 
  // 1) Must be same length (length property) X
  // 2) must be a true rotation and not anagram. Chunks of the string, at least 2 consecutive chars, must be in order 

  let isRotation = false;

  if (s2.length < s1.length) { // if second string is less than the len of the primary string => false
    return isRotation;
  } 

  for (let i = 0; i < s1.length; i++) {
    if (s1.slice(i, numOfCharsRotating) !== s2.slice(numOfCharsRotating)) { // if, for example, in the case of stringRotation("hello", "llohe") -> true, if "he", the chars at indexes 0-2 of s1 === "he" the last 2 chars of s2, then it is a rotation. This seems to be consistent with my understanding of what a rotation is.
      isRotation = true;;
    }
  }
  return isRotation;
}

// console.log(stringRotation("hello", "llohe", 2));  // => true
// console.log(stringRotation("hello", "he")); // => false
console.log(stringRotation("hello", "hello")); // => true

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};

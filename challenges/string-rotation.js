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
// does capitalization matter
// ("hello", "llo")
function isSubstring(s1, s2) { // compares s2 to the s1 string. Returns true or false
  return s1.indexOf(s2) >= 0;
}
// 
// stringRotation("heello", "ellohe") true
function stringRotation(s1, s2) {
//   let lowerstr1 = s1.toLowerCase();
//   let lowerstr2 = s2.toLowerCase();
//   let consecLetterCount = 0;
    // let place = 0;
    let firstStrArr = s1.split(""); 
    for(let i = 0; i < s1.length; i++) {
       if(s1[i] === s2[0]) { // [H, e, l, l, o] === [e] // i = 1
        let newString = s1.slice(i); // "ello"
        if(s2 === newString.concat(firstStrArr.splice(0,i).join(""))) {
            return true;
        } 
       }
    }
    return false;
}

console.log(isSubstring("Heello","ello"));

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
var newString = "Hello";
console.log("hello".slice(1))
console.log(newString[0])
console.log(stringRotation("hello", "hello"));


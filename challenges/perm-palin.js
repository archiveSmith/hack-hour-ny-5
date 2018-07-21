/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function permPalin(str) {
    let numOdd = 0;
    const countObj = {};
    for (let i = 0; i < str.length; i++) {
        const curChar = str.charAt(i);
        if (countObj[curChar]) {
            countObj[curChar]++;
        }
        else {
            countObj[curChar] = 1;
        }
        if (countObj[curChar] % 2 === 1) {
            numOdd++;
        }
        else {
            numOdd--;
        }
    }
    return numOdd <= 1;
}

module.exports = permPalin;
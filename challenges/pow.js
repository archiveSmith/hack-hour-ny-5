/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
    // var to collect *= 
    // edge case
    if (power === 0) {
        return 1;
    // base case--the smallest part of the problem is when power === 1. Then, 
    } else if (power === 1) {
        return base
}

// Example:
// pow(2, 3) => returns 2 * 2 * 2;


module.exports = pow;

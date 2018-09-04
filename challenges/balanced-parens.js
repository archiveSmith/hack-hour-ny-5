/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

//STEP 1 completed below:
function balancedParens(input){
    let firstParenCounter = 0;
    let lastParenCounter = 0;
    if (typeof input === 'object' || typeof input === 'number' || typeof input === 'boolean' || typeof input === 'undefined' || typeof input === 'function') {
        return false;
    } else {
        for (let i = 0; i < input.length; i++) {
            if (input[i] === '(') {
                firstParenCounter++
            }
            if (input[i] === ')') {
                lastParenCounter++
            }
            if (firstParenCounter === lastParenCounter && input.indexOf('(') < input.indexOf(')')) {
                return true;
            }
        }   
    }
    return false;
}

console.log(balancedParens('('));  // false X
console.log(balancedParens('()')); // true X
console.log(balancedParens(')('));  // false X
console.log(balancedParens('(())'));  // true X

module.exports = balancedParens;

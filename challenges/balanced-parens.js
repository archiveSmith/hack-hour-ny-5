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

function balancedParens(input){
    const stack = [];
    const matching_obj = {
        '}':'{',
        ']':'[',
        ')':'('
    }
    for (let i = 0; i < input.length; i++) {
        const cur_char = input.charAt(i);
        const match = matching_obj[cur_char];
        if (cur_char === '{' || cur_char === '[' || cur_char === '(') {
            stack.push(cur_char);
        }
        else if (match) {
            if (stack.length === 0) {
                return false;
            }
            const last_parens = stack.pop();
            if (last_parens !== match) {
                return false;
            }
        }
    }
    if (stack.length > 0) {
        return false;
    }
    return true;
}


module.exports = balancedParens;

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

 function balancedParens(input) {
   if (input.length <= 1 || !input || typeof input != 'string') return false;
   let parents = "[]{}()";
   let storage = [];
   let character;
   for (let index = 0; character = input[index++];)  {
     let bracePosition = parents.indexOf(character);
     let braceType;
     if (!~bracePosition)
       continue;
     braceType = bracePosition % 2 ? 'closed' : 'open';
     if (braceType === 'closed') {
       if (!storage.length || parents.indexOf(storage.pop()) != bracePosition - 1)
         return false;
     } else {
       storage.push(character);
     }
   }
   return storage.length === 0;
 }

module.exports = balancedParens;

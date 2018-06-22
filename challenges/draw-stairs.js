/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.
 
 For example:     
 drawStairs(6) ->          
     *
    **
   ***
  ****
 *****
******

*/
console.log('=============RUNNING PROGRAM========')
function drawStairs(n) {
    // for loop
    // add n *'s to row (innerStr)
    // add n rows to overall return (outerStr)
    // '/n' operator to break up lines when concatenating innerStr into outerStr? 
    // now I have a right to left staircase...
    // To make L to R, add a second loop and ...
    let outerStr = '';
    let innerStr = '';
    for (let j = 1; j <= n; j++) {
        innerStr += '*';
        console.log('j: ', j);
        console.log('innerStr: ', innerStr);
        console.log('outerStr: ', outerStr);
        outerStr += innerStr;
        outerStr += '\n';
    }
    console.log('outerStr += innerStr: ', outerStr)
    return outerStr;
}

console.log(drawStairs(10));

module.exports = drawStairs;

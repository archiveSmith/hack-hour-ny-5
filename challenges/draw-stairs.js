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

function drawStairs(n) {
    for (let i = 1; i <= n; i++) {
        let current_level = '';
        // print n-i spaces
        for (let j = n; j > i; j--) {
            current_level += ' ';
        }
        // print i asterisks. n characters will always be printed per line, making the lines right-justified.
        for (let j = i; j > 0; j--) {
            current_level += '*';
        }
        console.log(current_level);
    }
}

drawStairs(12);

module.exports = drawStairs;

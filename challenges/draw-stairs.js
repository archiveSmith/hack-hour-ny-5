/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.
<<<<<<< HEAD

 For example:
 drawStairs(6) ->
=======

 For example:
 drawStairs(6) ->
>>>>>>> e1de1136f3e5bba5682659b4f6f8611f26449a8e
     *
    **
   ***
  ****
 *****
******

*/

function drawStairs(n) {
  for (i = 0; i <= n; i++) {
    console.log('*'.repeat(i).padStart(n));
  }
}


module.exports = drawStairs;

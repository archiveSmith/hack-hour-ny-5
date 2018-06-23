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

function drawStairs(n) { // n = 6
  let space = " ";
  let stairs = "*";
  let count = 1;
  let string = "";

  for(let i = n; i > 0; i--){
  	console.log(space.repeat(i-1) + stairs.repeat(count));
  	count++;
  }
}


module.exports = drawStairs;

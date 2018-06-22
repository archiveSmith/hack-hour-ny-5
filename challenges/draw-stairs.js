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
  let string = '';
  if (string === '') {
    for (i = 0; i < n -1; i++) {
      string += ' ';
    }
    string += '*';
    console.log(string);
  }
  for (let j = 0; j < n; j++) {
    if (j < n - 1) {
    string = string.slice(1, string.length);
    string += '*';
    console.log(string);
    }
  }
}


module.exports = drawStairs;

// Have the function knightjumps(str) read str which will be a
// string consisting of the location of a knight on a standard 8x8 chess board with no other pieces on the board.

// The structure of str will be the following string: "(x y)" which represents the position of the knight with x and y ranging
// from 1 to 8.

// Your function should determine the number of spaces the knight can move to from a given location.
// For example: if str is "(4 5)" then your program should output 8 because the knight can move to 8 different spaces
// from position x = 4 and y = 5.
//  example input:
// var str = "(4 5)"

function knightjumps(str) {
    const row = Number(str.charAt(1));
    const col = Number(str.charAt(3));
    const rowMovements = [row - 2, row - 2, row - 1, row - 1, row + 1, row + 1, row + 2, row + 2];
    const colMovements = [col - 1, col + 1, col - 2, col + 2, col - 2, col + 2, col - 1, col + 1];
    let timesKnightCanJump = 0;
    for (let i = 0; i < rowMovements.length; i++) {
        if (rowMovements[i] > 0 && rowMovements[i] <= 8 && colMovements[i] > 0 && colMovements[i] <= 8) {
            timesKnightCanJump++;
        }
    }
    return timesKnightCanJump;
}


module.exports = knightjumps;

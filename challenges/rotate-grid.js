/* You are given a NxN grid of elements represented by a 2D array. The ith nested array represents 
 * the ith row in the grid.
 * 
 * Write a function to rotate the grid 90 degrees clockwise. 
 *
 * For example:     sampleGrid before:  [   [1, 2, 3],
 *                                          [4, 5, 6],
 *                                          [7, 8, 9]  ]
 *                  
 *                  rotateGrid(sampleGrid, 3);
 *                  
 *                  sampleGrid after:   [   [7, 4, 1],
 *                                          [8, 5, 2],
 *                                          [9, 6, 3]  ]
 *
 * BONUS: Do this in place
 */

// This is an approach that works...however...
// this is probably terrible time complexity so I'm going to try another approach...
// function rotateGrid(grid, n) {
//     let rotatedGrid = [];
//     for (let i = n-1; i >= 0; i--) {
//         let rotatedArr = [];
//         for (let j = 0; j <= n-1; j++) {
//             rotatedArr.unshift(grid[j][i]);
//         }
//     rotatedGrid.unshift(rotatedArr);
//     }
//     console.log('rotatedGrid: ', rotatedGrid);
// }

function rotateGrid(grid, n) {
    let rotatedGrid = [];
    for (let i = 0; i <= n-1; i++) {
        let rotatedArr = [];
        for (let j = n-1; j >= 0; j--) {
            rotatedArr.push(grid[j][i]);
        }
    rotatedGrid.push(rotatedArr);
    }
    return rotatedGrid;
}




console.log(rotateGrid([[1, 2, 3],[4, 5, 6],[7, 8, 9]], 3));

module.exports = rotateGrid;

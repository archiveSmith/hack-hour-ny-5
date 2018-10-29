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

// function rotateGrid(grid, n) {
//   const newGrid = [];

//   for (let col = 0; col < n; col++) {
//     const newRow = [];

//     for (let row = n - 1; row >= 0; row--) {
//       newRow.push(grid[row][col]);
//     }

//     newGrid.push(newRow);
//   }

// }

function rotateGrid(grid, n) {
  for (let x = 0; x < Math.ceil(n / 2); x++) {
    for (let y = x; y < n - x - 1; y++) {
      let save;
      let transfer = grid[x][y];

      for (let k = 0; k < 4; k++) {
        save = grid[y][n - x - 1];
        grid[y][n - x - 1] = transfer;
        transfer = save;
        let temp = x;
        x = y;
        y = n - temp - 1;
      }
    }
  }
}



const sampleGrid2 = [[1, 2], [3, 4]];
const sampleGrid3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const sampleGrid4 = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];

rotateGrid(sampleGrid2, 2)
console.log(sampleGrid2);
rotateGrid(sampleGrid3, 3);
console.log(sampleGrid3);
rotateGrid(sampleGrid4, 4);
console.log(sampleGrid4);

module.exports = rotateGrid;

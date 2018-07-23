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

function rotateGrid(grid, n) {
    for (let layer = 0; layer < Math.floor((n + 1) / 2); layer++) {
        for (let i = 0; i < (n - (layer * 2) - 1); i++) {
            const row_indices = [layer, layer + i, n - layer - 1, n - layer - i - 1];
            const col_indices = [layer + i, n - layer - 1, n - layer - i - 1, layer];
            const temp = grid[row_indices[3]][col_indices[3]];
            for (let i = row_indices.length - 1; i > 0; i--) {
                grid[row_indices[i]][col_indices[i]] = grid[row_indices[i-1]][col_indices[i-1]];
            }
            grid[row_indices[0]][col_indices[0]] = temp;
        }
    }
}

module.exports = rotateGrid;

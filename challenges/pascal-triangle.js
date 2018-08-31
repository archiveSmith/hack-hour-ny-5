/*
  Construct Pascal's Triangle up to n levels deep, starting from n = 1. Each row
  is represented as an array of numbers.

  https://en.wikipedia.org/wiki/Pascal%27s_triangle

  e.g.
  pascalTriangle(1):
  [[1]]

  pascalTriangle(2):
  [
    [1],
    [1, 1]
  ]

  pascalTriangle(3) :
  [
    [1],
    [1,1],
    [1,2,1]
  ]

  pascalTriangle(6) :
  [
    [1],
    [1,1],
    [1,2,1],
    [1,3,3,1],
    [1,4,6,4,1],
    [1,5,10,10,5,1]
  ]
*/

function pascalTriangle(numRows) {
  const rows = [];
  for (let i = 1; i <= numRows; i++) {
    const curRow = [1];
    for (let j = 1; j < i-1; j++) {
      curRow.push(rows[i-2][j-1] + rows[i-2][j]);
    }
    if (i > 1) {
      curRow.push(1);
    }
    rows.push(curRow);
  }
  return rows;
}

// console.log(pascalTriangle(6));

module.exports = pascalTriangle;

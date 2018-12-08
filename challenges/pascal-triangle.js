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
  const triangle = [[1]];

  if (numRows === 1) {
    return triangle;
  }

  for (let i = 1; i < numRows; i++) {
    const currentRow = [1];
    const previousRow = triangle[i - 1];

    for (let j = 0; j < previousRow.length - 1; j++) {
      currentRow.push(previousRow[j] + previousRow[j + 1]);
    }

    currentRow.push(1);
    triangle.push(currentRow);
  }

  return triangle;
}

console.log(pascalTriangle(6));

module.exports = pascalTriangle;

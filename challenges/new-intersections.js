/**
 *
 * You are given an array x and an array y that represent the coordinates of several OLD points
 *
 *   - x is the array of x-coordinates and y is the array of y-coordinates
 *   - (x[i], y[i]) correspond to coordinates of the i'th OLD point
 *
 * Write an algorithm to find the number of NEW points that can be placed
 * such that there are OLD points above, below, to the left, and to the right of the NEW point
 *
 *   - 'OLD directly above NEW' means the NEW x-coordinate = OLD x-coordinate & NEW y-coordinate < OLD y-coordinate
 *
 * Constraints and Notes:
 *
 * 	 - x and y will contain the same number of elements
 *   - if a new point is bounded by old points and lands on an old point, then count it
 *
 */

function newIntersections(x, y) {
  const { length } = x;
  const exes = {};
  const whys = {};
  let counter = 0;

  for (let i = 0; i < length; i++) {
    const ex = x[i];
    const why = y[i];

    if (exes[ex] === undefined) {
      exes[ex] = {
        smallest: why,
        largest: why
      }
    } else {
      exes[ex].smallest = Math.min(exes[ex].smallest, why);
      exes[ex].largest = Math.max(exes[ex].largest, why);
    }

    if (whys[why] === undefined) {
      whys[why] = {
        smallest: ex,
        largest: ex
      }
    } else {
      whys[why].smallest = Math.min(whys[why].smallest, ex);
      whys[why].largest = Math.max(whys[why].largest, ex);
    }
  }

  for (ex in exes) {
    const { smallest, largest } = exes[ex];

    for (let i = smallest + 1; i < largest; i++) {
      if (whys[i] && whys[i].smallest < ex && whys[i].largest > ex) {
        counter++;
      }
    }
  }

  return counter;
}

console.log(newIntersections([0, 1, 2, 2, 3], [2, 3, 3, 1, 2]));

module.exports = newIntersections;

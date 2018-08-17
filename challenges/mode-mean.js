/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */

function modemean(array) {
  const sum = array.reduce((sum, num) => sum + num);
  const count = array.length;
  const mean = Math.floor(sum / count);
  const modeTable = {};
  let mode;

  array.forEach(
    num => (!modeTable[num] ? (modeTable[num] = 1) : modeTable[num]++)
  );

  for (let key in modeTable) {
    if (!mode || mode < modeTable[key]) mode = Number.parseInt(key);
  }

  return mean === mode;
}

module.exports = modemean;

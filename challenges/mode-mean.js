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
    const mean = array.reduce((acc, cur) => {
        return acc + cur;
    }, 0) / array.length;
    let current_mode;
    let current_mode_count = 0;
    const count_object = {};
    for (let i = 0; i < array.length; i++) {
        if (count_object[array[i]]) {
            count_object[array[i]]++;
        }
        else {
            count_object[array[i]] = 1;
        }
        if ((count_object[array[i]] > current_mode_count)
            || (count_object[array[i]] === current_mode_count && array[i] > current_mode)) {
                current_mode_count = count_object[array[i]];
                current_mode = array[i];
            }
    }
    return mean === current_mode;
}

module.exports = modemean;

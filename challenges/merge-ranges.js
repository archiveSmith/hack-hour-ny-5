/**
 Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */

function mergeRanges(array) {
    if (array.length === 0) return [];

    // sort array in ascending order by the first number in the subarray
    array.sort((a, b) => a[0] - b[0]);

    // initialize output array with first element in the input array
    const output = [array[0]];

    // iterate input array starting at the second element
    for (let i = 1; i < array.length; i++) {
        // grab the current subarray
        const currentRange = array[i];

        // grab the last subarray in the output array
        const previousRange = output[output.length - 1];

        if (currentRange[0] <= previousRange[1]) {
            previousRange[1] = currentRange[1];
        } else {
            output.push(currentRange);
        }
    }

    return output;
}

var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]];

console.log(mergeRanges(times));

module.exports = mergeRanges;

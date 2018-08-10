/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */


function mergeRanges(array) {
    let mergedRanges = [];
    for (let i = 0; i < array.length; i++) {
        let newMergedRanges = [];
        let curRange = array[i].slice();
        for (let j = 0; j < mergedRanges.length; j++) {
            if (mergedRanges[j][1] < curRange[0] || curRange[1] < mergedRanges[j][0]) {
                newMergedRanges.push(mergedRanges[j]);
            }
            else {
                const minRange = Math.min(curRange[0], mergedRanges[j][0]);
                const maxRange = Math.max(curRange[1], mergedRanges[j][1]);
                curRange = [minRange, maxRange];
            }
        }
        newMergedRanges.push(curRange);
        mergedRanges = newMergedRanges;
    }
    return mergedRanges;
}

module.exports = mergeRanges;

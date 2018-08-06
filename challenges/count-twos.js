// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 
// For example: countTwos(3) should be 1 because there are no 2s in the number one. There is One 2 in the number two and no 2s in the number three.
// Each 2 should be counted. For instance,  the number 2222 has four 2s. 

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
    let counter = 0;
    let stringified = num.toString();
    // console.log(stringified);
    // console.log(typeof stringified);
    for (let i = 0; i < stringified.length; i++) {
        if (stringified[i] === '2') {
            counter++;
            console.log('counter: ', counter);
        }
    }
    return counter;
}

console.log(countTwos(13));  //-> 2)

module.exports = countTwos;

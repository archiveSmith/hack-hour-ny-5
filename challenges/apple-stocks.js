/**
 *  I have an array stock_prices_yesterday where:
 *
 *    - The indices are the time in minutes past trade opening time, which was 9:30am local time
 *    - The values are the prices in dollars of Apple stock at the time
 *
 *  For example, the stock cost $500 at 10:30am, so stock_prices_yesterday[60] = 500;
 *
 *  Write an efficient algorithm for computing the best profit I could have made from 1 purchase
 *  and 1 sale of 1 Apple stock yesterday
 *
 *  Return 0 if no profit is possible OR if input is invalid.
 */

// When I left off I was trying to find a way to store the indeces and max and min vals in a way that was not causing them to be lost due to values changing inside vs. outside of the for loop. 

function bestProfit(stock_prices_yesterday) {
    if (!stock_prices_yesterday) {
        return 0;
    }
    let maxVal = 0;
    let startInd = 0;
    let startIndStorage = [];
    for (let i = 0; i < stock_prices_yesterday.length; i++) {
        if (stock_prices_yesterday[i] > maxVal && (startInd < i)) {
            maxVal = stock_prices_yesterday[i];
            startInd = i;
            startIndStorage.push(startInd);
            console.log('startIndStorage: ', startIndStorage);
        }
    }
    console.log('startIndStorage outside for loop: ', startIndStorage);
    console.log('maxVal before start: ', maxVal);
    let start = maxVal;
    let minVal = start;
    let minStartInd = 0;
    console.log('minVal before second for loop: ', minVal);
    for (let j = 0; j < stock_prices_yesterday.length; j++) {
        console.log('stock_prices_yesterday[j]: ', stock_prices_yesterday[j])
        console.log('minVal before if block: ', minVal);
        console.log('statInd before if block: ', minStartInd);
        if (stock_prices_yesterday[j] < minVal && (startIndStorage[startIndStorage.length-1] < startInd)) {
            minVal = stock_prices_yesterday[j];
            minStartInd = j;
            console.log('minStartInd: ', minStartInd);
        }
    }
    console.log('maxVal-minVal: ', maxVal-minVal);
}

// TESTS
// 9:30 = 400, 9:35 = 500, 9:40 = 600, 9:50 = 150, 10:00 = 50 
let testArr = [50, 400, 500, 600, 150, 800]; // should be 650

console.log(bestProfit(testArr));

module.exports = bestProfit;

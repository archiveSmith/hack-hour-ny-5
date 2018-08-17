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

function bestProfit(stock_prices_yesterday) {
  let min = stock_prices_yesterday[0];
  let maxProfit = 0;

  stock_prices_yesterday.forEach(curr => {
    if (min > curr) min = curr;
    const profit = curr - min;
    if (maxProfit < profit) maxProfit = profit;
  });

  return maxProfit;
}

console.log(bestProfit([9, 10, 2, 4]));
console.log(bestProfit([2, 10, 8, 9]));

module.exports = bestProfit;

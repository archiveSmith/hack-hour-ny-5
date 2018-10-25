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
  if (!Array.isArray(stock_prices_yesterday)) return 0;

  let lowestPrice = Infinity;
  let maxProfit = 0;

  for (let i = 0; i < stock_prices_yesterday.length; i++) {
    const currentPrice = stock_prices_yesterday[i];

    if (currentPrice < lowestPrice) {
      lowestPrice = currentPrice;
    } else if (currentPrice - lowestPrice > maxProfit) {
      maxProfit = profit;
    }
  }

  return maxProfit;
}

console.log(bestProfit([9, 10, 2, 4]));
console.log(bestProfit([2, 10, 8, 9]));

module.exports = bestProfit;

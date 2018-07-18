/**
 *  I have an array stock_prices_yesterday where:
 *
 *    - The indices are the time in minutes past trade opening time, which was 9:30am local time
 *    - The values are the prices in dollars of Apple stock at the time
 *
 *  For example, the stock cost $500 at 10:30am, so stock_prices_yesterday[59] = 500; // 60 minutes past opening bell
 *
 *  Write an efficient algorithm for computing the best profit I could have made from 1 purchase
 *  and 1 sale of 1 Apple stock yesterday
 *
 *  Return 0 if no profit is possible OR if input is invalid.
 */
// stock_PY = stock_prices_yesterday
function bestProfit(stock_PY) {
  let low_BP = (lowestBuyPrice = 0);
  let high_SP = (highestSellPrice = 0);
  let maxProfit = 0;
  for (let i = 0; i < stock_PY.length; i++) {
    for (let j = i; j < stock_PY.length; j++) {
      if (high_SP <= stock_PY[j] && stock_PY[j] - stock_PY[i] > maxProfit) {
        high_SP = stock_PY[j];
        low_BP = stock_PY[i];
        maxProfit = stock_PY[j] - low_BP;
      }
    }
  }
  if (maxProfit > 0) {
    return (
      'Lowest buy point was at: ' +
      low_BP +
      '/ Highest sell point was at: ' +
      high_SP +
      '/ Max profit: ' +
      maxProfit
    );
  } else {
    return 0;
  }
}

module.exports = bestProfit;

// let low_BP = lowestBuyPrice = stock_PY[0]; // 9
// let high_SP = highestSellPrice = 0;
// for (let i = 1; i < stock_PY.length; i++) {
//   if(low_BP >= stock_PY[i] && buyIndex < i) {
//     low_BP = stock_PY[i]
//     buyIndex = i;
//   }
//   if(high_SP <= stock_PY[i] && i > buyIndex ) {
//     high_SP = stock_PY[i];

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let left = 0, right = 1, totalProfit = 0;
    while(right < prices.length) {
        if (prices[left] < prices[right]) {
            totalProfit = Math.max(totalProfit, prices[right] - prices[left])
        } else {
            left = right;
        }
        right++;
    }
    return totalProfit;
};
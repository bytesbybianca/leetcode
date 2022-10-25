// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*////////////////////////////////////////
121. Best Time to Buy and Sell Stock
*/////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
*/

/* INSTRUCTIONS

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
 

Constraints:

1 <= prices.length <= 105
0 <= prices[i] <= 104

*/

// MY SOLUTION
/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
   let min, max, profits = [], originalLength = prices.length
  // loop
  for(let i = 0; i < originalLength; i++) {
    // find min
    min = Math.min(...prices)
    if(prices.indexOf(min) === prices.length - 1) {
      // if last char, pop
      prices.pop()
      if(!prices.length) profits.push(0)
    } else {
      // else find max to the right (slice index of min)
      let rightOfMin = prices.slice(prices.indexOf(min)+1)
      profits.push(Math.max(...rightOfMin) - min)
      prices.splice(prices.indexOf(min), 1)
    }
  }
  // return max profits
  return Math.max(...profits)
};
  
// TEST CASES

let input = [7,1,5,3,6,4]
let output = 5

console.log(maxProfit(input), output)

input = [7,6,4,3,1]
output = 0

console.log(maxProfit(input), output)

input = [2,4,1]
output = 2

console.log(maxProfit(input), output)

input = [3,2,6,5,0,3]
output = 4

console.log(maxProfit(input), output)

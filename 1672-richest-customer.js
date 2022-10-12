// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*////////////////////////////////////////
1672. Richest Customer Wealth
*/////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://leetcode.com/problems/richest-customer-wealth/
*/

/* INSTRUCTIONS

You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

 

Example 1:

Input: accounts = [[1,2,3],[3,2,1]]
Output: 6
Explanation:
1st customer has wealth = 1 + 2 + 3 = 6
2nd customer has wealth = 3 + 2 + 1 = 6
Both customers are considered the richest with a wealth of 6 each, so return 6.
Example 2:

Input: accounts = [[1,5],[7,3],[3,5]]
Output: 10
Explanation: 
1st customer has wealth = 6
2nd customer has wealth = 10 
3rd customer has wealth = 8
The 2nd customer is the richest with a wealth of 10.
Example 3:

Input: accounts = [[2,8,7],[7,1,3],[1,9,5]]
Output: 17
 

Constraints:

m == accounts.length
n == accounts[i].length
1 <= m, n <= 50
1 <= accounts[i][j] <= 100

*/

// MY SOLUTION
/**
 * @param {number[][]} accounts
 * @return {number}
 */

// m x n grid => nested arr => accounts[i] (customer), accounts[i][j] (customer's money in one bank)
// wealth of the richest customer => sum of richest customer's money => highest sum of next arr

var maximumWealth = function(accounts) {
    // arr of customer wealth
    let wealth = []
    // find sums of all nested arr
        // map through accounts
        // reduce
        // push sum into arr of customer wealth
    accounts.map(customer => {
        wealth.push(customer.reduce((a,b) => a + b,0))
    })
    // return highest num from arr of customer wealth
    return Math.max(...wealth)
};
  
  // TEST CASES
console.log(maximumWealth([[1,5],[7,3],[3,5]]), 10)
console.log(maximumWealth([[2,8,7],[7,1,3],[1,9,5]]), 17)
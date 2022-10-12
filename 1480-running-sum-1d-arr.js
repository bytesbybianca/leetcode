// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*////////////////////////////////////////
49. Group Anagrams
*/////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://leetcode.com/problems/running-sum-of-1d-array/
*/

/* INSTRUCTIONS

Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
Example 2:

Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
Example 3:

Input: nums = [3,1,2,10,1]
Output: [3,4,6,16,17]
 

Constraints:

1 <= nums.length <= 1000
-10^6 <= nums[i] <= 10^6

*/

// MY SOLUTION
/**
 * @param {number[]} nums
 * @return {number[]}
 */

// arr of nums only, not empty
// arr of running sum
// [1,2,3,4] => [1,3,6,10]
// [1,1,1,1] => [1,2,3,4]

var runningSum = function(nums) {
    // create an array to return
    let sums = []
    // loop through array
    for(let i = 1; i <= nums.length; i++) {
        // slice array to index
        sums.push(nums.slice(0, i)
        // reduce arr
        .reduce((a,b) => a+b, 0))
        // push to variable
    }
    // return
    return sums
};
  
  // TEST CASES
console.log(runningSum([1,2,3,4]), [1,3,6,10])
console.log(runningSum([1,1,1,1]), [1,2,3,4])
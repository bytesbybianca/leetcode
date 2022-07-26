// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Two Sum
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://leetcode.com/problems/two-sum/

/* INSTRUCTIONS

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.

PREP
P: an array of numbers and a target integer
R: the indicies of the two numbers that sum to the target in an array

*/

// MY SOLUTION
var twoSum = function(nums, target) {
    let arr
    // loop through array
    for(let i = 0; i < nums.length; i++) {
      // backtrack until target is reached
      arr = backtrack(nums, i, target)
      if(arr) {
        return arr
      }
    }
  };
  
  function backtrack(nums, i, target) {
    for(let j = i + 1; j < nums.length; j++) {
      if(nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
  
  
  // TEST CASES
  console.log(twoSum([2,7,11,15], 9), [0, 1])
  console.log(twoSum([3,2,4], 6), [1, 2])
  console.log(twoSum([3,2,3], 6), [0, 2])
  console.log(twoSum([3,3], 6), [0, 1])
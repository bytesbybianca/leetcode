// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// 217. Contains Duplicate
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://leetcode.com/problems/contains-duplicate/

/* INSTRUCTIONS

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.


Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109

*/

// MY SOLUTION
// Runtime: 118 ms, faster than 68.53% of JavaScript online submissions for Contains Duplicate.
function containsDuplicate(nums) {
    return [...new Set(nums)].length !== nums.length
};

// Runtime: 139 ms, faster than 49.19% of JavaScript online submissions for Contains Duplicate.
// function containsDuplicate(nums) {
//     return new Set(nums).size !== nums.length
// };

// Runtime: 118 ms, faster than 68.53% of JavaScript online submissions for Contains Duplicate.
// function containsDuplicate(nums) {
//     let uniqueJoined = [...new Set(nums)].join('')
//     let numsJoined = nums.join('')
//     return uniqueJoined !== numsJoined
// };

// Runtime: 7242 ms, faster than 5.01% of JavaScript online submissions for Contains Duplicate.
// function containsDuplicate(nums) {
//     return nums.map((x, i) => i === nums.lastIndexOf(x)).includes(false)
// };

// TEST CASES
let nums = [1,2,3,1]
console.log(containsDuplicate(nums), true);

nums = [1,2,3,4]
console.log(containsDuplicate(nums), false);

nums = [1,1,1,3,3,4,3,2,4,2]
console.log(containsDuplicate(nums), true);
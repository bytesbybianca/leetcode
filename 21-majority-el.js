// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// 169. Majority Element
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL

https://leetcode.com/problems/majority-element/

*/

/* INSTRUCTIONS

Given an array `nums` of size `n`, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 

Constraints:

n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109
 

Follow-up: Could you solve the problem in linear time and in O(1) space?

*/

// MY SOLUTION
/**
 * @param {number} num
 * @return {number}
 */

/* notes
array of nums
return => num === majority (appears size of array / 2) => number that appears more than 50%
majority num always exists

*/
// Boyer-Moore Voting Algorithm
var majorityElement = function(nums) {
    let candidate = nums[0], count = 0
    for(const num of nums) {
        if(candidate == num) {
            count++
        } else {
            count--
        }
        if(count === 0) {
            candidate = num
            count = 1
        }
    }
    return candidate
};

/* OTHER SOLUTIONS */
// var majorityElement = function(nums) {
//     let map = {},
//     count = 0,
//     majorityEl = nums[0]

//     for(const num of nums) {
//         map[num] = map[num] + 1 || 1
//         console.log(map)
//     }

//     for(const n in map) {
//         if(map[n] > count) {
//             count = map[n]
//             majorityEl = n
//         }
//     }

//     return majorityEl
// };

// var majorityElement = function(nums) {
//     const majority = nums.length / 2
//     let map = {}
//     for(let i = 0; i < nums.length; i++) {
//         let num = nums[i]
//         if(map[num]) {
//             map[num]++
//         } else {
//             map[num] = 1
//         }
//         if(map[num] >= majority) return num
//     }
// };

/* TEST CASES */
console.log(majorityElement([3,2,3]), 3); 
console.log(majorityElement([2,2,1,1,1,2,2]), 2); 
console.log(majorityElement([1]), 1); 
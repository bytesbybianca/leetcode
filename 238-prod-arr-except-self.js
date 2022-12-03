// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*////////////////////////////////////////
238. Product of Array Except Self
*/////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://leetcode.com/problems/product-of-array-except-self/
*/

/* INSTRUCTIONS

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
 

Constraints:

2 <= nums.length <= 105
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 

Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)

*/

// MY SOLUTION
/**
 * @param {number[]} nums
 * @return {number[]}
 */

/*
given array of nums => neg, 0, pos
return array product of all el, except nums[i]
*/

var productExceptSelf = function(nums) {
  let leftProduct = 1
  let rightProduct = 1
  let output = [1]

  for(let i = 0; i < nums.length - 1; i++) {
    output.push(nums[i] * leftProduct)
    leftProduct *= nums[i]
  }

  for(let i = nums.length - 1; i >= 0; i--) {
    output[i] *= rightProduct
    rightProduct *= nums[i]
  }

  return output
};

//  var productExceptSelf = function(nums) {
//     let results = []
//     for(let i = 0; i < nums.length; i++) {
//       let product = 1
//       for(let j = 0; j < nums.length; j++) {
//         if(j !== i) {
//           product *= nums[j]
//         }
//       }
//       results.push(product)
//     }

//     return results
// };

// TEST CASES

let input = [1, 2, 3, 4]
let output = [24, 12, 8, 6]

console.log(productExceptSelf(input), output)

input = [1, 2, 2, 3, 4]
output = [48, 24, 24, 16, 12]

console.log(productExceptSelf(input), output)

input = [-2, -1, 0, 1, 2, 3]
output = [0, 0, 12, 0, 0, 0]

console.log(productExceptSelf(input), output)

input = [-10, -5, -2, -1]
output = [-10, -20, -50, -100]

console.log(productExceptSelf(input), output)

input = [-1,1,0,-3,3]
output = [0,0,9,0,0]

console.log(productExceptSelf(input), output)
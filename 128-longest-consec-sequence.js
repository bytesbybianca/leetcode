// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// 128. Longest Consecutive Sequence
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://leetcode.com/problems/longest-consecutive-sequence/

/* INSTRUCTIONS

Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

 

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9

*/

// MY SOLUTION
/**
 * @param {number[]} nums
 * @return {number}
 */
 var longestConsecutive = function(nums) {
    let sortedUniqueNums = [... new Set(nums.sort((a, z) => a - z))]
    let length = 0
    let result = []

    for(let i = 0; i < sortedUniqueNums.length; i++) {
      let count = 1
      let consecutiveNums = []
      while(sortedUniqueNums[i + 1] - sortedUniqueNums[i] === 1) {
        i++
        count ++
        consecutiveNums.push(sortedUniqueNums[i])
      }
      
      if(count > length) {
        length = count
        result = [...consecutiveNums]
      }
    }

    return length
};

// TEST CASES
let input = [100, 4, 87, 2, 56, 1, 3]
let output = 4
let explanation = `Length of array [1, 2, 3, 4] is ${output}`

console.log(longestConsecutive(input), output, explanation)

input = [0,3,7,2,5,8,4,6,0,1]
output = 9
explanation = `Length of array [0, 1, 2, 3, 4, 5, 6, 7, 8] is ${output}`

console.log(longestConsecutive(input), output, explanation)

input = [1,2,0,1]
output = 3
explanation = `Length of array [0, 1, 2] is ${output}`

console.log(longestConsecutive(input), output, explanation)

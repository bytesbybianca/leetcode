// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*////////////////////////////////////////
347. Top K Frequent Elements
*/////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://leetcode.com/problems/top-k-frequent-elements/
*/

/* INSTRUCTIONS

Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.
 

Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

*/

// MY SOLUTION
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

/*
find freq of each el
return k most frequen elements in an array
*/

function topKFrequent(nums, k) {
  let hash = {}
  let results = []
  
  for(let i = 0; i < nums.length; i++) {
    if(hash[nums[i]]) {
      hash[nums[i]]++
    } else {
      hash[nums[i]] = 1
    }
  }

  for(const key in hash) {
    results.push([key, hash[key]])
  }

  const sorted = results.sort((a, b) => b[1] - a[1])

  let arr = []
  results.slice(0, k).map((sub) => {
    arr.push(Number(sub[0]))
  })

  return arr
};

// TEST CASES

let input = [1,1,1,2,2,3]
let k = 2

console.log(topKFrequent(input, k), [1,2])

input = [1]
k = 1

console.log(topKFrequent(input, k), [1])

input = [1, 2]
k = 2

console.log(topKFrequent(input, k), [1, 2])
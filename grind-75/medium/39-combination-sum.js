// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// 39. Combination Sum
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://leetcode.com/problems/combination-sum/

/* INSTRUCTIONS

Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

It is guaranteed that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

 

Example 1:

Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.
Example 2:

Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]
Example 3:

Input: candidates = [2], target = 1
Output: []
 

Constraints:

1 <= candidates.length <= 30
1 <= candidates[i] <= 200
All elements of candidates are distinct.
1 <= target <= 500

*/

/*

parameters
array of candidates with a length greater than 1 and less than 30
target number - greater than 1 and less than 500

return
- a list of all unique combos of candidates where the numbers sum to target
- combo in any order
- same number can be chosen unlimited number of times

*/

// MY SOLUTION
// Runtime: 153 ms, faster than 24.93% of JavaScript online submissions for Combination Sum.
function combinationSum(candidates, target) {
  // define array to return
  let combos = []
  // create a function to backtrack with parameters of target - current number, index = 0, empty array
  function backtrack(remaining = target, index = 0, arr = []) {
    // break case
    // if target is reached
    if(remaining === 0) return combos.push([...arr])
    // if candidates exceed target
    if(remaining < 0) return
    // loop to the length of candidates array
    for(let i = index; i < candidates.length; i++) {
      // push number into arr
      arr.push(candidates[i])
      // call the backtrack function with updated parameters
      backtrack(remaining - candidates[i], i, arr)
      // pop number when break cases return
      arr.pop()
    }
  }
  // call function
  backtrack()
  // return array
  return combos
}

// TEST CASES
let candidates = [2,3,6,7], target = 7
console.log(combinationSum(candidates, target), [[2,2,3],[7]]);

candidates = [2,3,5], target = 8
console.log(combinationSum(candidates, target), [[2,2,2,2],[2,3,3],[3,5]]);

candidates = [2], target = 1
console.log(combinationSum(candidates, target), []);
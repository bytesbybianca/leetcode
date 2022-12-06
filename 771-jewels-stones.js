// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// 771. Jewels and Stones
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL

https://leetcode.com/problems/jewels-and-stones/

*/

/* INSTRUCTIONS

You're given strings `jewels` representing the types of stones that are jewels, and `stones` representing the stones you have. Each character in `stones` is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".


Example 1:

Input: jewels = "aA", stones = "aAAbbbb"
Output: 3
Example 2:

Input: jewels = "z", stones = "ZZ"
Output: 0
 

Constraints:

1 <= jewels.length, stones.length <= 50
jewels and stones consist of only English letters.
All the characters of jewels are unique.

*/

/*
jewels & stones => strings
how many stones are also jewels
output number
*/

// MY SOLUTION
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
  let count = 0
  
  for(const stone of stones) {
    if(jewels.includes(stone)) {
      count++
    }
  }

  return count
};

// TEST CASES
let jewels = "aA"
let stones = "aAAbbbb"
let output = 3

console.log(numJewelsInStones(jewels, stones), output)

jewels = "z"
stones = "ZZ"
output = 0

console.log(numJewelsInStones(jewels, stones), output)
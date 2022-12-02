// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// 242. Valid Anagram
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://leetcode.com/problems/valid-anagram/

/* INSTRUCTIONS

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

*/

// MY SOLUTION December 2022
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false
    let hash = {}
    for(const letter of s) {
      if(hash[letter]) {
        hash[letter]++
      } else {
        hash[letter] = 1
      }
    }
  
    for(const letter of t) {
      if(hash[letter] > 0) {
        hash[letter]--
      } else {
        return false
      }
    }
    
    for(let letter in hash) {
      if(hash[letter] !== 0) {
        return false
      }
    }
  
    return true
  };

// MY SOLUTION July 2022
// var isAnagram = function(s, t) {
//     return s.split('').sort().join('') === t.split('').sort().join('')
// };

// TEST CASES
let s = "anagram", t = "nagaram"
console.log(isAnagram(s, t), true);

s = "rat", t = "car"
console.log(isAnagram(s, t), false);

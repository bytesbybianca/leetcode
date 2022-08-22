// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*////////////////////////////////////////
49. Group Anagrams
*/////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://leetcode.com/problems/group-anagrams/
*/

/* INSTRUCTIONS

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. 

Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.

*/

/* PREP

Parameters: an array containing strings. string may be empty
Return: an array with subarrays of anagrams grouped together

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]

*/

// MY SOLUTION
// Definition for singly-linked list.
 /**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let array = []
    // store original word and sorted word in an object
    let obj = {}
    for(let i = 0; i < strs.length; i++) {
        let sorted = strs[i].split('').sort().join('')
        if(!(sorted in obj)) {
            obj[sorted] = []
        }
        obj[sorted].push(strs[i])
    }
    // loop through object and push arrays into an array to return
    for(const key in obj) {
        array.push(obj[key])
    }
    return array
};
  
  // TEST CASES
let input = ["eat","tea","tan","ate","nat","bat"]
let output = [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams(input), output)

input = [""]
output = [[""]]
console.log(groupAnagrams(input), output)

input = ["a"]
output = [["a"]]
console.log(groupAnagrams(input), output)

/* Details

Runtime: 220 ms, faster than 40.21% of JavaScript online submissions for Group Anagrams.

Memory Usage: 55.3 MB, less than 17.42% of JavaScript online submissions for Group Anagrams.

*/
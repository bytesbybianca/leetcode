// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// 17. Letter Combinations of a Phone Number
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://leetcode.com/problems/letter-combinations-of-a-phone-number/

/* INSTRUCTIONS

Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.


 

Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
Example 2:

Input: digits = ""
Output: []
Example 3:

Input: digits = "2"
Output: ["a","b","c"]
 

Constraints:

0 <= digits.length <= 4
digits[i] is a digit in the range ['2', '9'].

*/

/*

*/

// MY SOLUTION

function letterCombinations(digits) {
  // if no digits, return empty array
  if(!digits.length) return []

  const keypad = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
  }
  
  let combos = []

  // backtracking function
  function keypadLoop(i, str) {
    // when one combo is made, push into combos array and begin backtrack. one combo = string length the same as digits length
    if(str.length == digits.length) {
      combos.push(str)
      return;
    }
      // returns all letters of one digit
      const letters = keypad[digits[i]]
      // loop through each letter
      for(let letter of letters){
        keypadLoop(i + 1, str + letter)
    }
  }

  if(digits) {
    // start with index 0 and empty string
    keypadLoop(0, '')
  }

  return combos
}

// TEST CASES
let digits = "23"
console.log(letterCombinations(digits), ["ad","ae","af","bd","be","bf","cd","ce","cf"])

digits = ""
console.log(letterCombinations(digits), [])

digits = "2"
console.log(letterCombinations(digits), ["a","b","c"])
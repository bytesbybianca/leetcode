// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*////////////////////////////////////////
125. Valid Palindrome
*/////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://leetcode.com/problems/valid-palindrome/
*/

/* INSTRUCTIONS

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 

Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.

*/

/*
a string with any type of character, may be empty
boolean - true if string is the same when reversed, after removing all non-alphanumeric chars; false if not the same

*/

// MY SOLUTION
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let l = 0, r = s.length - 1
  
  while(l < r) {
      while(l < r && !alphaNum(s[l])) {
          l++
      }
      while(r > l && !alphaNum(s[r])) {
          r--
      }
      if(s[l].toLowerCase() !== s[r].toLowerCase()) return false
      l++
      r--
  }
  return true
  
  function alphaNum(char) {
      return ((char.charCodeAt() >= ('a').codePointAt() && char.charCodeAt() <= ('z').codePointAt()) ||
              (char.charCodeAt() >= ('A').codePointAt() && char.charCodeAt() <= ('Z').codePointAt()) ||
              (char.charCodeAt() >= ('0').codePointAt() && char.charCodeAt() <= ('9').codePointAt()))
  }
};

 // TEST CASES

 console.log(isPalindrome("A man, a plan, a canal: Panama"), true)
 console.log(isPalindrome("race a car"), false)
 console.log(isPalindrome(" "), true)
 console.log(isPalindrome("12 21"), true)
 console.log(isPalindrome("0P"), false)


/*
Solution 1

var isPalindrome = function(s) {
 
 ASCII
 0-9 => 48-57
 A-Z => 65-90
 a-z => 97-122
 
 // filter string for only alphanumeric characters
 // lowercase
let filtered = s.split('').map((x, i) => {
    return x.charCodeAt(0) >= 48 && x.charCodeAt(0) <= 57 ? x :
    x.charCodeAt(0) >= 65 && x.charCodeAt(0) <= 90 ? x :
    x.charCodeAt(0) >= 97 && x.charCodeAt(0) <= 122 ? x : ''
}).join('').toLowerCase()

let reversed = filtered.split('').reverse().join('')
// return true if the same reversed
return filtered === reversed
};
*/

/*
Solution 2

 var isPalindrome = function(s) {
    
    // ASCII
    // 0-9 => 48-57
    // A-Z => 65-90
    // a-z => 97-122
    
    // filter string for only alphanumeric characters
    // lowercase
    let filtered = s.split('').map((x, i) => {
      if( (x.charCodeAt(0) >= 48 && x.charCodeAt(0) <= 57) ||
      (x.charCodeAt(0) >= 65 && x.charCodeAt(0) <= 90) ||
      (x.charCodeAt(0) >= 97 && x.charCodeAt(0) <= 122) ) {
        return x
      }
  }).join('').toLowerCase()

  let reversed = filtered.split('').reverse().join('')
  // return true if the same reversed
  return filtered === reversed
};

*/

/*
Solution 3

var isPalindrome = function(s) {
  let result = ''
  for(const char of s.toLowerCase()) {
      if(char.charCodeAt() >= 97 && char.charCodeAt() <= 122 ||
      !isNaN(parseInt(char))) result += char
  }  

  for(let i = result.length - 1; i >= 0; i--) {
      if(result[i] !== result[result.length - 1 - i]) return false
  }
  return true
};
 
*/
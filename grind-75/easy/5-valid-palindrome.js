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
     /*
     ASCII
     0-9 => 48-57
     A-Z => 65-90
     a-z => 97-122
     */
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
  
  // TEST CASES

  console.log(isPalindrome("A man, a plan, a canal: Panama"), true)
  console.log(isPalindrome("race a car"), false)
  console.log(isPalindrome(" "), true)
  console.log(isPalindrome("12 21"), true)
  console.log(isPalindrome("0P"), false)
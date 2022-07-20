// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Merge Two Sorted Lists
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://leetcode.com/problems/valid-parentheses/

/* INSTRUCTIONS

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 
Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.

PREP
P: a string of parentheses, square and curly brackets
R: true if a valid set of paired brackets, otherwise false

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false

*/

// MY SOLUTION
var isValid = function(s) {
    // create an array for checking pairs
    let arr = []
    // loop through each character to check
    for(let i = 0; i < s.length; i++) {
        // define last character
        let lastChar = arr[arr.length -1]
        if(s[i] == '(' || s[i] == '{' || s[i] == '['){
            // push opening brackets to arr
            arr.push(s[i])
        } else if(
            s[i] == ')' && lastChar == '(' || 
            s[i] == '}' && lastChar == '{' || 
            s[i] == ']' && lastChar == '[') {
            // if a closing bracket, check if paired with last character, pop from array
            arr.pop()
        } else {
            return false
        }
        // else, return false
    }    
    // return true if array is empty
    return arr.length ? false : true
};

// TEST CASES
console.log(isValid( "(" ), false);
console.log(isValid( ")" ), false);
console.log(isValid( "" ), true);
console.log(isValid( "()" ), true);
console.log(isValid( "(())((()())())" ), true);
console.log(isValid( "())" ), false);
console.log(isValid( "()))" ), false);
console.log(isValid( "[]{}()" ), true);
console.log(isValid( "[{]}()" ), false);
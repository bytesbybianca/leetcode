// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// 38. Count and Say
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://leetcode.com/problems/count-and-say/

/* INSTRUCTIONS

The count-and-say sequence is a sequence of digit strings defined by the recursive formula:

countAndSay(1) = "1"
countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.
To determine how you "say" a digit string, split it into the minimal number of substrings such that each substring contains exactly one unique digit. Then for each substring, say the number of digits, then say the digit. Finally, concatenate every said digit.

For example, the saying and conversion for digit string "3322251":


Given a positive integer n, return the nth term of the count-and-say sequence.

 

Example 1:

Input: n = 1
Output: "1"
Explanation: This is the base case.
Example 2:

Input: n = 4
Output: "1211"
Explanation:
countAndSay(1) = "1"
countAndSay(2) = say "1" = one 1 = "11"
countAndSay(3) = say "11" = two 1's = "21"
countAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211"
 

Constraints:

1 <= n <= 30

*/

// MY SOLUTION
function countAndSay(n) {
    // define starting string
    let string = '1'
    // loop until we reach n
    for(let i = 1; i < n; i++) {
        let newStr = ''
        // loop to evaluate the string of numbers
        for(let j = 0; j < string.length; j++) {
            // count how many times the number repeats starting from 1
            let count = 1
            // while the next character is the same, add to the count and index
            while(string[j] === string[j+1]){
                count++
                j++
            }
            // add the number of times the number is counted and number to the new string
            newStr += `${count}${string[j]}`
        }
        // reassign string to be the new string to be looped again or returned
        string = newStr
    }
    return string
};

// TEST CASES
console.log(countAndSay(1), 1);
console.log(countAndSay(2), 11);
console.log(countAndSay(3), 21);
console.log(countAndSay(4), 1211);
console.log(countAndSay(5), 111221);
console.log(countAndSay(6), 312211);
console.log(countAndSay(7), 13112221);
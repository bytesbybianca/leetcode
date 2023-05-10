// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*////////////////////////////////////////
2667. Create Hello World Function
*/////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL
https://leetcode.com/problems/create-hello-world-function/
*/

/* INSTRUCTIONS

Write a function createHelloWorld. It should return a new function that always returns "Hello World".
 

Example 1:

Input: args = []
Output: "Hello World"
Explanation:
const f = createHelloWorld();
f(); // "Hello World"

The function returned by createHelloWorld should always return "Hello World".
Example 2:

Input: args = [{},null,42]
Output: "Hello World"
Explanation:
const f = createHelloWorld();
f({}, null, 42); // "Hello World"

Any arguments could be passed to the function but it should still always return "Hello World".

*/

// MY SOLUTION
/**
 * @return {Function}
 */
var createHelloWorld = function() {
    return function(...args) {
        return 'Hello World'
    }
};
 
 // TEST CASES
let args = [{}]
let output = "Hello World"
console.log(createHelloWorld(args), output)
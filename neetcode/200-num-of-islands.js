// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// 200. Number of Islands
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://leetcode.com/problems/number-of-islands/

/* INSTRUCTIONS

Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 

Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 300
grid[i][j] is '0' or '1'.

*/

// MY SOLUTION
function dfs(grid, r, c) {
  // find all arguments to begin backtrack
  // current search is < 0
  // row search >= grid length
  // column search >= grid row length
  // current search === 0
  if(r < 0 || c < 0 || r >= grid.length || c >= grid[0].length || grid[r][c] === '0') {
      // end operation if any conditional is met
      return;
  }

  // redefine current search to "0" so we don't count this again
  grid[r][c] = '0'
  // call dfs function with all horizontal and vertical movements of +1
  dfs(grid, r + 1, c)
  dfs(grid, r - 1, c)
  dfs(grid, r, c + 1)
  dfs(grid, r, c - 1)
}

function numIslands(grid) {
  let count = 0
  // loop through grid length (row)
  for(let r = 0; r < grid.length; r++) {
      // loop through grid subarray (element in row)
      for(let c = 0; c < grid[0].length; c++) {
          // if element is === '1'
          if(grid[r][c] === '1') {
              // count an island
              count++
              // depth-first search
              dfs(grid, r, c)
          }
      }
  }
  return count
}

// TEST CASES
let grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
console.log(numIslands(grid), 1);

grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
console.log(numIslands(grid), 3);
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// 200. Number of Islands
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://leetcode.com/problems/number-of-islands/

/* INSTRUCTIONS

According to Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

Any live cell with fewer than two live neighbors dies as if caused by under-population.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by over-population.
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously. Given the current state of the m x n grid board, return the next state.

Constraints:

m == board.length
n == board[i].length
1 <= m, n <= 25
board[i][j] is 0 or 1.
 

Follow up:

Could you solve it in-place? Remember that the board needs to be updated simultaneously: You cannot update some cells first and then use their updated values to update other cells.
In this question, we represent the board using a 2D array. In principle, the board is infinite, which would cause problems when the active area encroaches upon the border of the array (i.e., live cells reach the border). How would you address these problems?

*/

/*
parameters
an array with subarrays containing 1s and 0s

return
the next state of the board according to these rules
- if 1 with less than two 1 neighbors => 0
- if 1 with more than three 1 neighbords => 0
- if 1 with two or three 1 neighbors => 1
- if 0 with exactly three 1 neighbords => 1

*/

// MY SOLUTION
/*
Solving in-place

Originally dead: board[row][col] <= 0
- dead now, alive later => -1 (absolute value of -1 % 2 === 1)
- dead now, dead later => 0 (absolute value of 0 % 2 === 0)

Originally alive: board[row][col] >= 1
- alive now, dead later => 2 (absolute value of 2 % 2 === 0)
- alive now, alive later => 1 (absolute value of 1 % 2 === 1)
*/

function gameOfLife(board){
  // loop through row
  for(let r = 0; r < board.length; r++) {
    // loop through columns
    for(let c = 0; c < board[0].length; c++) {
      // define a dead neighbor to be element === 0
      let deadNeighbor = board[r][c] === 0
      let count = 0
      // for each neighbor, check all neighbors
      count += explore(board, r + 1, c - 1)
      count += explore(board, r + 1, c)
      count += explore(board, r + 1, c + 1)
      count += explore(board, r, c - 1)
      count += explore(board, r, c + 1)
      count += explore(board, r - 1, c - 1)
      count += explore(board, r - 1, c)
      count += explore(board, r - 1, c + 1)
      // console.log(count)
      // if dead neighbor and count === 3, change to -1
      if(deadNeighbor) {
        if(count === 3) {
          board[r][c] = -1
        }
      } else {
        // if not a dead neighbor and count < 2 or count > 3, change to 2
        if(count < 2 || count > 3) {
          board[r][c] = 2
        }
      }
    }
  }
  // loop through board to return to 1s and 0s
    // loop through row
    for(let r = 0; r < board.length; r++) {
      // loop through columns
      for(let c = 0; c < board[0].length; c++) {
        board[r][c] = Math.abs(board[r][c] % 2)
      }
    }
  return board
}

// explore
function explore(board, r, c) {
  if(r < 0 || c < 0 || r >= board.length || c >= board[0].length || board[r][c] === -1 || board[r][c] === 0) {
    return 0;
  }
  // check neighbor
  if(board[r][c] === 1 || board[r][c] === 2) {
    // if 1, count 
    return 1
  }
}

// TEST CASES
let board = [
  [0,1,0],
  [0,0,1],
  [1,1,1],
  [0,0,0]
]
console.log(gameOfLife(board), [
  [0,0,0],
  [1,0,1],
  [0,1,1],
  [0,1,0]
]);

board = [
  [1,1],
  [1,0]
]
console.log(gameOfLife(board), [
  [1,1],
  [1,1]
]);
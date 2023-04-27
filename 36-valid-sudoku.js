// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// 36. Valid Sudoku
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* URL

https://leetcode.com/problems/valid-sudoku/

*/

/* INSTRUCTIONS

Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.

Constraints:

board.length == 9
board[i].length == 9
board[i][j] is a digit 1-9 or '.'.

*/

// MY SOLUTION
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let squareMap = {}
    let rowMap = {}
    let colMap = {}

    for(let r = 0; r < board.length; r++) {
        for(let c = 0; c < board[r].length; c++) {
            let row = board[r]
            let cellNum = row[c]
            
            if(!isNaN(parseInt(row[c]))) { 
                let squareX = Math.floor(c / 3)
                let squareY = Math.floor(r / 3)
                let square = `${squareX}, ${squareY}`
                
                if(!squareMap[square]) squareMap[square] = []
                if(squareMap[square].includes(cellNum)) return false
                squareMap[square].push(cellNum)

                if(!colMap[c]) colMap[c] = []
                if(colMap[c].includes(cellNum)) return false
                colMap[c].push(cellNum)

                if(!rowMap[r]) rowMap[r] = []
                if(rowMap[r].includes(cellNum)) return false
                rowMap[r].push(cellNum)
            }
        }
    }

    return true
};

/* TEST CASES */

let board = [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
]
let output = true

console.log(isValidSudoku(board), output);

board = [
    ["8","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
]
output = false

console.log(isValidSudoku(board), output);
/*
 * Runtime: 898 ms, faster than 60.35% of JavaScript online submissions for Design a Text Editor.
 * Memory Usage: 115.2 MB, less than 63.22% of JavaScript online submissions for Design a Text Editor.
 */

var TextEditor = function() {
    this.cursorPosition = 0
    this.leftStr = ''
    this.rightStr = ''
};

/** 
 * @param {string} text
 * @return {void}
 */
TextEditor.prototype.addText = function(text) {
    // add text to the left string
    this.leftStr += text
    // the cursor position is at the end of the left string
    this.cursorPosition = this.leftStr.length
    // console.log(`Added text "${text}" and the string is now "${this.leftStr}${this.rightStr}" and cursor position ${this.cursorPosition}`)
    return null
};

/** 
 * @param {number} k
 * @return {number}
 */
TextEditor.prototype.deleteText = function(k) {
    // length of the left string is the number of characters to the left of cursor
    let leftStrLength = this.cursorPosition
    // if the number of characters to delete is smaller the number of characters to the left of cursor, we can delete k numbers characters
    if(k < this.cursorPosition) {
        // cursor position is now the length of the original left string minus the number of characters to delete (k)
        this.cursorPosition -= k
        // to delete k number of characters, left string is sliced from 0 to its new cursor position
        this.leftStr = this.leftStr.slice(0, this.cursorPosition)
        // console.log(`Deleted ${k} characters and the string is now ${this.leftStr}${this.rightStr} with a cursor position of ${this.cursorPosition}`)
        // return the numbers of characters deleted (k)
        return k
    // if the number of characters to delete is larger than the number of characters of the left string,
    } else {
        // delete entire left string
        this.leftStr = ''
        // cursor is to the left of the right string
        this.cursorPosition = 0
        // console.log(`Deleted ${leftStrLength} characters with a cursor position of ${this.cursorPosition}`)
        // return the number of characters deleted, which is the initial length of the deleted left string
        return leftStrLength
    }
};

/** 
 * @param {number} k
 * @return {string}
 */
 TextEditor.prototype.cursorLeft = function(k) {
    // if the number of characters to move left (k) is smaller than the cursor position
    if(k < this.cursorPosition) {
        // we can move cursor k characters to the left
        this.cursorPosition -= k
        // console.log(`Cursor left fn - position moved from ${this.cursorPosition += k} to ${this.cursorPosition -= k}`)
    // if the number of characters to move left (k) is greater than the length of the left string,
    } else {
        // console.log(`Cursor moved left less than ${k} spaces from ${this.cursorPosition} to 0`)
        // we move cursor to 0
        this.cursorPosition = 0
    }
    // reassign the right string to include the portion of the left string, starting at new cursor position + original right string
    this.rightStr = this.leftStr.substring(this.cursorPosition) + this.rightStr
    // reassign the left string to be from 0 to new cursor position
    this.leftStr = this.leftStr.substring(0, this.cursorPosition)
    /* return characters from text */
    // len is the smaller of either 10 of the number of characters to the left of the cursor
    let len = Math.min(10, this.cursorPosition)
    /* 
    ** if len is the length of the left string, return the entire left * string
    ** if len is 10, return the left string starting 10 characters left of the cursor position until cursor position
    */
   // console.log(`Cursor left fn - returning ${this.leftStr.slice(this.cursorPosition - len, this.cursorPosition)}`)
    return this.leftStr.slice(this.cursorPosition - len, this.cursorPosition)
};

/** 
 * @param {number} k
 * @return {string}
 */
TextEditor.prototype.cursorRight = function(k) {
  // the end of entire string
  let endIndex = this.leftStr.length + this.rightStr.length
  // console.log(this.leftStr)
    // if the number of characters to move right (k) is smaller than the length of right string, we can move cursor k characters to the right
        if(k < this.rightStr.length) {
            // we can move cursor k characters to the right
            this.cursorPosition += k
            // console.log(`Cursor right fn - position moved ${k} spaces from ${this.cursorPosition -= k} to ${this.cursorPosition += k}`)
        // if the number of characters to move right (k) is greater than or equal to the length of the right string,
        } else {
            // console.log(`Cursor moved right less than ${k} spaces from ${this.cursorPosition} to end of string position ${endIndex}`)
            // we move cursor to the end of text length
            this.cursorPosition = endIndex
        }
    // reassign the left string to include the original left string + portion of the right string, starting at 0 to number of characters moved right
    this.leftStr = this.leftStr + this.rightStr.substring(0, k)
    // reassign the right string to start from the number of characters moved right to the end
    this.rightStr = this.rightStr.substring(k)
    /* return characters from text */
    // len is the smaller of either 10 of the number of characters to the left of the cursor
    let len = Math.min(10, this.cursorPosition)
    /* 
    ** if len is the length of the left string, return the entire left * string
    ** if len is 10, return the left string starting 10 characters left of the cursor position until cursor position
    */
    // console.log(`Cursor right fn - returning ${this.leftStr.slice(this.cursorPosition - len, this.cursorPosition)}`)
    return this.leftStr.slice(this.cursorPosition - len, this.cursorPosition)
};

/** 
 * Your TextEditor object will be instantiated and called as such:
 * var obj = new TextEditor()
 * obj.addText(text)
 * var param_2 = obj.deleteText(k)
 * var param_3 = obj.cursorLeft(k)
 * var param_4 = obj.cursorRight(k)
 */

textEditor = new TextEditor(); // The current text is "|". (The '|' character represents the cursor)
textEditor.addText("leetcode"); // The current text is "leetcode|".
textEditor.deleteText(4); // return 4
                        // The current text is "leet|". 
                        // 4 characters were deleted.
textEditor.addText("practice"); // The current text is "leetpractice|". 
textEditor.cursorRight(3); // return "etpractice"
                        // The current text is "leetpractice|". 
                        // The cursor cannot be moved beyond the actual text and thus did not move.
                        // "etpractice" is the last 10 characters to the left of the cursor.
textEditor.cursorLeft(8); // return "leet"
                        // The current text is "leet|practice".
                        // "leet" is the last min(10, 4) = 4 characters to the left of the cursor.
textEditor.deleteText(10); // return 4
                        // The current text is "|practice".
                        // Only 4 characters were deleted.
textEditor.cursorLeft(2); // return ""
                        // The current text is "|practice".
                        // The cursor cannot be moved beyond the actual text and thus did not move. 
                        // "" is the last min(10, 0) = 0 characters to the left of the cursor.
textEditor.cursorRight(6); // return "practi"
                        // The current text is "practi|ce".
                        // "practi" is the last min(10, 6) = 6 characters to the left of the cursor.

// secondEditor = new TextEditor() // null
// secondEditor.addText("jxarid") // null
// secondEditor.cursorLeft(5) // "j"
// secondEditor.cursorLeft(10) // ""
// secondEditor.addText("du") // null
// secondEditor.deleteText(20) // 8

// thirdEditor = new TextEditor() // null
// thirdEditor.addText('arnvmumatgmyw') // null
// thirdEditor.deleteText(5) // 5 // current text = "arnvmuma"
// thirdEditor.addText('zrlufuifuy') // null // current text = "arnvmumazrlufuifuy"
// thirdEditor.cursorLeft(2) // "mazrlufuif"
// thirdEditor.addText('unh') // null
// thirdEditor.deleteText(20) // 19
// thirdEditor.addText('kwwp') // null
// thirdEditor.cursorLeft(6) // ""
// thirdEditor.deleteText(9) // 0

// fourthEditor = new TextEditor() // null
// fourthEditor.addText("bxyackuncqzcqo") // null // current text = "bxyackuncqzcqo|"
// fourthEditor.cursorLeft(12) // "bx"
// fourthEditor.deleteText(3) // 2 // current text = "|yackuncqzcqo"
// fourthEditor.cursorLeft(5) // "" // current text = "|yackuncqzcqo"
// fourthEditor.addText("osdhyvqxf") // null // current text = "osdhyvqxf|yackuncqzcqo"
// fourthEditor.cursorRight(10) // "yackuncqzc" // current text = "osdhyvqxfyackuncqzc|qo"
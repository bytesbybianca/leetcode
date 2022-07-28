var TextEditor = function() {
    this.text = ''
    this.cursorPosition = 0
    // this.textLength = 0
};

/** 
 * @param {string} text
 * @return {void}
 */
TextEditor.prototype.addText = function(text) {
    // part of the string to the left of the cursor
    let leftStr = this.text.slice(0, this.cursorPosition)
    // part of the string to the right of the cursor
    let rightStr = this.text.slice(this.cursorPosition)
    // if the string is empty
    if(!this.text.length) {
        // cursor position is 0
        this.cursorPosition = 0
        console.log(`original empty string added "${text}" & original position ${this.cursorPosition}`)
        // add text to the empty string
        this.text += text
        // cursor position is now at the end of the string => "textAdded|"
        this.cursorPosition = this.text.length
    // if string is not empty
    } else {
        // add text to where the cursor is by adding to the end of the left side of string
        this.text = leftStr + text
        // update cursor position to the end of the new text
        this.cursorPosition = this.text.length
        // add the right side of the string
        this.text += rightStr
        console.log(`original text "${leftStr}${rightStr}" added "${text}". Text now "${this.text}" & position ${this.cursorPosition}`)
    }
    console.log(`added ${this.text} & new position ${this.cursorPosition}`)
};

/** 
 * @param {number} k
 * @return {number}
 */
TextEditor.prototype.deleteText = function(k) {
    // part of the string to the left of the cursor
    let leftStr = this.text.slice(0, this.cursorPosition)
    let leftStrLength = leftStr.length
    // part of the string to the right of the cursor
    let rightStr = this.text.slice(this.cursorPosition)
    // if the number of characters to delete is smaller the number of characters to the left of cursor, we can delete k numbers characters
    if(k < leftStrLength) {
        // to delete k number of characters, left string is sliced from 0 to its lenght minus k
        leftStr = leftStr.slice(0, leftStrLength - k)
        // text is now left and right strings joined
        this.text = leftStr + rightStr
        // cursor remains to the end of the now shorter left string
        this.cursorPosition = leftStr.length
        console.log(`Deleted ${leftStrLength - leftStr.length} characters`)
        // return the numbers of characters deleted - the difference between initial length of left string and new length
        return leftStrLength - leftStr.length
    // if the number of characters to delete is larger than the number of characters of the left string,
    } else {
        // delete entire left string. text is now just the right string
        this.text = rightStr
        // cursor is to the left of the right string
        this.cursorPosition = 0
        console.log(`Deleted ${leftStrLength} characters`)
        // return the number of characters deleted, which is the initial length of the deleted left string
        return leftStrLength
    }
};

/** 
 * @param {number} k
 * @return {string}
 */
 TextEditor.prototype.cursorLeft = function(k) {
    // part of the string to the left of the cursor
    let leftStr = this.text.slice(0, this.cursorPosition)
    let leftStrLength = leftStr.length
    // part of the string to the right of the cursor
    let rightStr = this.text.slice(this.cursorPosition)
    // if the number of characters to move left (k) is smaller than the length of left string,
    if(k < leftStrLength) {
        // we can move cursor k characters to the left
        this.cursorPosition -= k
        console.log(`Cursor left fn - position moved from ${this.cursorPosition += k} to ${this.cursorPosition -= k}`)
    // if the number of characters to move left (k) is greater than the length of the left string,
    } else {
        console.log(`Cursor moved left less than ${k} spaces from ${this.cursorPosition} to 0`)
        // we move cursor to 0
        this.cursorPosition = 0
    }
    // part of the string to the left of the cursor
    leftStr = this.text.slice(0, this.cursorPosition)
    leftStrLength = leftStr.length
    /* return characters from text */
    // if the length of the left string is greater than 10
    if(leftStrLength > 10) {
        // return just the 10 characters to the left of cursor position
        console.log(`Cursor left fn - returning "${leftStr.slice(leftStrLength - 10, leftStrLength)}"`)
        return leftStr.slice(leftStrLength - 10, leftStrLength)
    // if the length of the left string is less than 10
    } else {
        // return the entire left string
        console.log(`Cursor left fn - returning "${leftStr}"`)
        return leftStr
    }
};

/** 
 * @param {number} k
 * @return {string}
 */
TextEditor.prototype.cursorRight = function(k) {
    // part of the string to the right of the cursor
    let rightStr = this.text.slice(this.cursorPosition)
    console.log(`cursor right fn - right str ${rightStr}`)
    let rightStrLength = rightStr.length
    const endIndex = this.text.length
    // if the number of characters to move right (k) is smaller than the length of right string, we can move cursor k characters to the right
        if(k < rightStrLength) {
            // we can move cursor k characters to the right
            this.cursorPosition += k
            console.log(`Cursor right fn - position moved ${k} spaces from ${this.cursorPosition -= k} to ${this.cursorPosition += k}`)
        // if the number of characters to move right (k) is greater than the length of the right string,
        } else {
            console.log(`Cursor moved right less than ${k} spaces from ${this.cursorPosition} to end of string position ${endIndex}`)
            // we move cursor to the end of text length
            this.cursorPosition = endIndex
        }
    // part of the string to the left of the cursor
    let leftStr = this.text.slice(0, this.cursorPosition)
    let leftStrLength = leftStr.length
    /* return characters from text */
    // if the length of the left string is greater than 10
    if(leftStrLength > 10) {
        // return just the 10 characters to the left of cursor position
        console.log(`Cursor right fn - returning "${leftStr.slice(leftStrLength - 10, leftStrLength)}"`)
        return leftStr.slice(leftStrLength - 10, leftStrLength)
    // if the length of the left string is less than 10
    } else {
        // return the entire left string
        console.log(`Cursor right fn - returning "${leftStr}"`)
        return leftStr
    }
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
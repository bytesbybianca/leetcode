var TextEditor = function() {
    this.text = ''
    this.cursorPosition = this.text.length
    
};

/** 
 * @param {string} text
 * @return {void}
 */
TextEditor.prototype.addText = function(text) {
    let leftStr = this.text.slice(0, this.cursorPosition)
    let rightStr = this.text.slice(this.cursorPosition)
    if(!this.text.length) {
        this.cursorPosition = 0
        console.log(`original text ${this.text} & original position ${this.cursorPosition}`)
        this.text += text
        this.cursorPosition = this.text.length
    } else {
        // add text to where the cursor is
        this.text = leftStr + text
        this.cursorPosition = this.text.length
        this.text += rightStr
    }
    console.log(`added ${this.text} & new position ${this.cursorPosition}`)
};

/** 
 * @param {number} k
 * @return {number}
 */
TextEditor.prototype.deleteText = function(k) {
    const iStartDelete = this.cursorPosition - k > 0 ? this.cursorPosition - k : 0
    const textToMutate = this.text
    console.log(`In text ${this.text}, delete from index ${iStartDelete} to cursor position ${this.cursorPosition}`)
    this.text = textToMutate.slice(0,iStartDelete) + textToMutate.slice(this.cursorPosition, textToMutate.length)
    console.log(`Text after deletion is ${this.text}`)
    console.log(textToMutate.length, '-', this.text.length, '=', `${textToMutate.length - this.text.length}`)
    this.cursorPosition = iStartDelete
    console.log(`return deleted ${textToMutate.length - this.text.length} characters, cursor position ${this.cursorPosition}`)
    return textToMutate.length - this.text.length
};

/** 
 * @param {number} k
 * @return {string}
 */
 TextEditor.prototype.cursorLeft = function(k) {
     console.log(`Cursor left fn - position ${this.cursorPosition} text ${this.text}`)
    if(this.cursorPosition - k > 0) {
       this.cursorPosition -= k
    console.log(`Cursor moved left ${k} spaces from ${this.cursorPosition + k} to ${this.cursorPosition}`)
       } else {
           console.log(`Cursor moved left less than ${k} spaces from ${this.cursorPosition} to 0`)
           this.cursorPosition = 0
       }
       let leftStr = this.text.slice(0, this.cursorPosition)
       console.log(`Characters to the left ${leftStr}`)
       console.log(`return ${this.cursorPosition > 10 ? leftStr.slice(leftStr.length - 10, leftStr.length) : leftStr}`)
    return this.cursorPosition > 10 ? leftStr.slice(leftStr.length - 10, leftStr.length) : leftStr
};

/** 
 * @param {number} k
 * @return {string}
 */
TextEditor.prototype.cursorRight = function(k) {
    const endIndex = this.text.length
        if(this.cursorPosition + k < endIndex) {
       this.cursorPosition += k
    console.log(`Cursor moved right ${k} spaces from ${this.cursorPosition - k} to ${this.cursorPosition}`)
       } else {
           console.log(`Cursor moved right less than ${k} spaces from ${this.cursorPosition} to ${endIndex}`)
           this.cursorPosition = endIndex
       }
       let leftStr = this.text.slice(0, this.cursorPosition)
       console.log(`Characters to the left ${leftStr}`)
       console.log(`return ${this.cursorPosition > 10 ? leftStr.slice(leftStr.length - 10, leftStr.length) : leftStr}`)
    return this.cursorPosition > 10 ? leftStr.slice(leftStr.length - 10, leftStr.length) : leftStr
};

/** 
 * Your TextEditor object will be instantiated and called as such:
 * var obj = new TextEditor()
 * obj.addText(text)
 * var param_2 = obj.deleteText(k)
 * var param_3 = obj.cursorLeft(k)
 * var param_4 = obj.cursorRight(k)
 */

// textEditor = new TextEditor(); // The current text is "|". (The '|' character represents the cursor)
// textEditor.addText("leetcode"); // The current text is "leetcode|".
// textEditor.deleteText(4); // return 4
//                         // The current text is "leet|". 
//                         // 4 characters were deleted.
// textEditor.addText("practice"); // The current text is "leetpractice|". 
// textEditor.cursorRight(3); // return "etpractice"
//                         // The current text is "leetpractice|". 
//                         // The cursor cannot be moved beyond the actual text and thus did not move.
//                         // "etpractice" is the last 10 characters to the left of the cursor.
// textEditor.cursorLeft(8); // return "leet"
//                         // The current text is "leet|practice".
//                         // "leet" is the last min(10, 4) = 4 characters to the left of the cursor.
// textEditor.deleteText(10); // return 4
//                         // The current text is "|practice".
//                         // Only 4 characters were deleted.
// textEditor.cursorLeft(2); // return ""
//                         // The current text is "|practice".
//                         // The cursor cannot be moved beyond the actual text and thus did not move. 
//                         // "" is the last min(10, 0) = 0 characters to the left of the cursor.
// textEditor.cursorRight(6); // return "practi"
//                         // The current text is "practi|ce".
//                         // "practi" is the last min(10, 6) = 6 characters to the left of the cursor.

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

fourthEditor = new TextEditor() // null
fourthEditor.addText("bxyackuncqzcqo") // null // current text = "bxyackuncqzcqo|"
fourthEditor.cursorLeft(12) // "bx"
fourthEditor.deleteText(3) // 2 // current text = "|yackuncqzcqo"
fourthEditor.cursorLeft(5) // "" // current text = "|yackuncqzcqo"
fourthEditor.addText("osdhyvqxf") // null // current text = "osdhyvqxf|yackuncqzcqo"
fourthEditor.cursorRight(10) // "yackuncqzc" // current text = "osdhyvqxfyackuncqzc|qo"
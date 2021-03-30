// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

var isValid = function(s) {
    let stack = []
    const charObj = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    for (const char in s) {
      let ref = s[char]
      if (ref === '(' || ref === '{' || ref === '[' ) {
        stack.push(ref)
      } else if (charObj[ref] === stack[stack.length - 1]) {
        stack.pop()
      } else {return false}
    }
    if (stack.length === 0){
    return true
    }
    return false;
};
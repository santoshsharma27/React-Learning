function isValidParentheses(s) {
  const stack = [];
  const obj = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let char of s) {
    if (obj[char]) {
      // If the character is an opening bracket, push its corresponding closing bracket onto the stack
      stack.push(obj[char]);
    } else {
      // If the character is a closing bracket, check if it matches the top of the stack
      if (stack.pop() !== char) {
        return false;
      }
    }
  }

  // If the stack is empty, all brackets were properly closed and nested
  return stack.length === 0;
}

// Example usage:
console.log(isValidParentheses("()")); // Output: true
console.log(isValidParentheses("()[]{}")); // Output: true
console.log(isValidParentheses("(]")); // Output: false
console.log(isValidParentheses("([)]")); // Output: false
console.log(isValidParentheses("{[]}")); // Output: true

function isValid(s) {
  // Create a stack to keep track of opening brackets
  let stack = [];

  // Create a obj to match the corresponding closing brackets
  let matchingBrackets = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  // Iterate through each character in the string
  for (let char of s) {
    // If the character is an opening bracket, push it onto the stack
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    }
    // If the character is a closing bracket
    else if (char === ")" || char === "}" || char === "]") {
      // If the stack is empty or the top of the stack doesn't match the closing bracket, return false
      if (stack.length === 0 || stack.pop() !== matchingBrackets[char]) {
        return false;
      }
    }
  }

  // If the stack is empty, all brackets were properly matched; otherwise, return false
  return stack.length === 0;
}

// Example usage
console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([)]")); // false
console.log(isValid("{[]}")); // true

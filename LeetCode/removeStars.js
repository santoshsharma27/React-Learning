function removeStars(str) {
  let stack = [];

  for (let char of str) {
    if (char === "*") {
      // Remove the last character from the stack if there is any
      if (stack.length > 0) {
        stack.pop();
      }
    } else {
      // Add the character to the stack
      stack.push(char);
    }
  }

  return stack.join(""); // convert array to string
}

console.log(removeStars("leet**cod*e")); // Output: "lecoe"

/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
  let stack = [];

  for (let char of s) {
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

  return stack.join("");
};

console.log(removeStars("leet**cod*e"));

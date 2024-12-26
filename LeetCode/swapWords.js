function swapWords(s) {
  s = s.split(" "); // Split the string into an array of words
  let result = "";

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i]) {
      // Check if the word is not an empty string
      result += s[i];
      if (i > 0) {
        result += " "; // Add a space if it's not the last word
      }
    }
  }

  return result;
}

console.log(swapWords("Hello World")); // World Hello
console.log(swapWords(" Hello World ")); // World Hello
console.log(swapWords("Hello   is World")); // World is Hello

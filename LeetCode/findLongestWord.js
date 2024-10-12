function findLongestWord(str) {
  const words = str.split(" "); // Split the string into words
  let longestWord = ""; // Initialize an empty string for the longest word

  for (let word of words) {
    // Check if the current word is longer than the longest found so far
    if (word.length > longestWord.length) {
      longestWord = word; // Update the longest word
    }
  }

  return longestWord; // Return the longest word found
}

// Test the function
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // Output: "jumped"
console.log(findLongestWord("Hello world")); // Output: "Hello"
console.log(findLongestWord("JavaScript is awesome")); // Output: "JavaScript"

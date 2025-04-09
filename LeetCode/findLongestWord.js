function findLongestWord(str) {
  const words = str.split(" ");
  let longestWord = "";

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // Output: "jumped"
console.log(findLongestWord("JavaScript is awesome")); // Output: "JavaScript"

// Using reduce
console.log(
  "The quick brown fox jumped over the lazy dog"
    .split(" ")
    .reduce((acc, curr) => (acc.length < curr.length ? curr : acc))
); // Output: "jumped"

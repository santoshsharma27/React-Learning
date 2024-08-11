// Iterative

function vowelCount(str) {
  let count = 0;
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    // Check if the character is a vowel
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      count++;
    }
  }
  return count;
}
console.log(vowelCount("sandeep"));

// Recursive

function recursiveVowelsCount(str) {
  // Base case: If the string is empty, return 0
  if (str.length === 0) {
    return 0;
  }

  // Convert the first character to lowercase to handle case sensitivity
  let firstChar = str[0].toLowerCase();

  // Check if the first character is a vowel
  let isVowel =
    firstChar === "a" ||
    firstChar === "e" ||
    firstChar === "i" ||
    firstChar === "o" ||
    firstChar === "u"
      ? 1
      : 0;

  // Recursively count vowels in the rest of the string
  return isVowel + recursiveVowelsCount(str.slice(1));
}

console.log(recursiveVowelsCount("Hello"));

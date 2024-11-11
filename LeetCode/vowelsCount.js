// Iterative

function vowelCount(str) {
  str = str.toLowerCase();
  let count = 0;

  for (let char of str) {
    // Check if the character is a vowel
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  return count;
}
console.log(vowelCount("sandeep"));

// Second Way
function vowelCount2(str) {
  str = str.toLowerCase();
  let count = 0;
  const vowels = new Set("aeiou"); // Create a set of vowels

  for (const char of str) {
    if (vowels.has(char)) {
      // Check if the character is a vowel
      count++;
    }
  }

  return count; // Return the total count of vowels
}

console.log(vowelCount2("sandeep")); // Output: 3

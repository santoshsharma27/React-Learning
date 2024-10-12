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
  return count; // Return the total count of vowels
}
console.log(vowelCount("sandeep"));

// Second Way
function vowelCount2(str) {
  let count = 0;
  const vowels = new Set("aeiou"); // Create a set of vowels
  str = str.toLowerCase(); // Convert to lowercase

  for (const char of str) {
    if (vowels.has(char)) {
      // Check if the character is a vowel
      count++;
    }
  }

  return count; // Return the total count of vowels
}

console.log(vowelCount2("sandeep")); // Output: 3

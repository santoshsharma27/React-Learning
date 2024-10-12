function reverseWords(s) {
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

console.log(reverseWords("Hello World")); // World Hello
console.log(reverseWords(" Hello World ")); // World Hello
console.log(reverseWords("Hello   is World")); // World is Hello

// Second way

function reverseWordsInString(str) {
  return str
    .split(" ") // Split the string by spaces to get an array of words
    .map((word) => word.split("").reverse().join("")) // Reverse each word
    .join(" "); // Join the words back into a string with spaces
}

const sentence1 = "Hello World!";
const reversed1 = reverseWordsInString(sentence1);
console.log(reversed1); // Output: "olleH !dlroW"

// Second Way

function reverseLetters(str) {
  str = str.split(" ");
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let reverseWord = ""; // Reset reverseWord for each word
    const word = str[i];

    // Reverse the current word
    for (let j = word.length - 1; j >= 0; j--) {
      reverseWord += word[j];
    }

    result += reverseWord + " "; // Append the reversed word and a space
  }

  return result.trim(); // Remove the trailing space
}

console.log(reverseLetters("santosh kumar")); // hsotnas ramuk

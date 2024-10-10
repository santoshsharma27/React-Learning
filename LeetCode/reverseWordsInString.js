function reverseWordsInString(str) {
  let result = "";
  let word = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      word = str[i] + word; // Build the reversed word character by character
    } else {
      result += word + " "; // Add the reversed word to the result
      word = ""; // Reset the word for the next one
    }
  }

  // Add the last word (if there's no space at the end)
  result += word;

  return result;
}

const sentence = "Hello World!";
const reversed = reverseWordsInString(sentence);
console.log(reversed); // Output: "olleH !dlroW"

// =========================================================

function reverseWordsInString(str) {
  return str
    .split(" ") // Split the string by spaces to get an array of words
    .map((word) => word.split("").reverse().join("")) // Reverse each word
    .join(" "); // Join the words back into a string with spaces
}

const sentence1 = "Hello World!";
const reversed1 = reverseWordsInString(sentence);
console.log(reversed1); // Output: "olleH !dlroW"

// ====================================

function reverseWordOrder(str) {
  let result = "";
  let word = "";

  // Traverse the string from the end to the beginning
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] !== " ") {
      word = str[i] + word; // Build the word
    } else {
      if (word !== "") {
        result += word + " "; // Add the word to the result
        word = ""; // Reset the word
      }
    }
  }

  // Add the last word (since the loop might leave the last word out)
  if (word !== "") {
    result += word;
  }

  return result.trim(); // Trim any trailing spaces
}

const sentence3 = "Hello World!";
const reversed3 = reverseWordOrder(sentence3);
console.log(reversed3); // Output: "World! Hello"

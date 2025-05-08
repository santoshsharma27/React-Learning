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

console.log(reverseLetters("Hello World")); // "olleH dlroW"

// Second way

function reverseWordsInString(str) {
  return str
    .split(" ") // Split the string by spaces to get an array of words
    .map((word) => word.split("").reverse().join("")) // Reverse each word
    .join(" "); // Join the words back into a string with spaces
}

console.log(reverseWordsInString("Hello World!")); // Output: "olleH !dlroW"

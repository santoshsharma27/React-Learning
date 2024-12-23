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

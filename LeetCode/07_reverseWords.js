function reverseWords(s) {
  let word = s.split(" ");
  let result = "";

  for (let i = word.length - 1; i >= 0; i--) {
    if (word[i]) {
      result += (result ? " " : "") + word[i];
    }
  }

  return result;
}

console.log(reverseWords("Hello World")); // World Hello
console.log(reverseWords(" Hello World ")); // World Hello
console.log(reverseWords("Hello   is World")); // World is Hello

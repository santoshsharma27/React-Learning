function compress(chars) {
  let index = 0; // Index where we write the compressed characters
  let i = 0; // Pointer to traverse the array

  while (i < chars.length) {
    let char = chars[i];
    let count = 0;

    // Count the occurrences of the current character
    while (i < chars.length && chars[i] === char) {
      i++;
      count++;
    }

    // Write the character to the writeIndex
    chars[index] = char;
    index++;

    // If count is greater than 1, convert it to a string and write each digit
    if (count > 1) {
      let countStr = count.toString();
      for (let j = 0; j < countStr.length; j++) {
        chars[index] = countStr[j];
        index++;
      }
    }
  }

  return index; // Return the new length of the compressed array
}

// Example usage:
let chars = ["a", "a", "b", "b", "c", "c", "c"];
let newLength = compress(chars);
console.log(newLength); // Output: 6
console.log(chars.slice(0, newLength)); // Output: ["a","2","b","2","c","3"]

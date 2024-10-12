function countkeyInAarray(array, key) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == key) {
      count++;
    }
  }
  return count;
}

const arr = [1, 2, 4, 2, 4, 2, 6];
console.log(countkeyInAarray(arr, 2));

// For String

function countCharacterOccurrences(str) {
  str = str.toLowerCase();
  let charCount = {};

  for (const char of str) {
    // If the character already exists in the charCount object, increment its count
    if (charCount[char]) {
      charCount[char] += 1;
    } else {
      // Otherwise, initialize its count to 1
      charCount[char] = 1;
    }
  }
  return charCount;
}

// Example usage:

let characterCounts = countCharacterOccurrences("Santosh");
console.log("Character counts:", characterCounts); // { s: 2, a: 1, n: 1, t: 1, o: 1, h: 1 }

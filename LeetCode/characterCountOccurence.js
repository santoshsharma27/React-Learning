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
      charCount[char]++;
    } else {
      // Otherwise, initialize its count to 1
      charCount[char] = 1;
    }
  }

  // Sort the charCount object alphabetically by character
  const sortedCharCount = Object.keys(charCount)
    .sort()
    .reduce((acc, key) => {
      acc[key] = charCount[key];
      return acc;
    }, {});

  return sortedCharCount;
}

// Example usage:

let characterCounts = countCharacterOccurrences("Santosh");
console.log("Character counts:", characterCounts); // { a: 1, h: 1, n: 1, o: 1, s: 2, t: 1 }

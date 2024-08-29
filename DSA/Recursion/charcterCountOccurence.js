// [1, 2, 4, 2, 4, 2, 6]
// key = 2

function countkeyIA(array, key) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == key) {
      count++;
    }
  }
  return count;
}

const arr = [1, 2, 4, 2, 4, 2, 6];
console.log(countkeyIA(arr, 4));

function recurCountKey(array, key, index = 0) {
  if (index >= array.length) {
    return 0;
  }

  return (array[index] === key ? 1 : 0) + recurCountKey(array, key, index + 1);
}

function countCharacterOccurrences(str) {
  let charCount = {};

  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  return charCount;
}

// Example usage:
let text = "hello world";
let characterCounts = countCharacterOccurrences(text);
console.log("Character counts:", characterCounts);

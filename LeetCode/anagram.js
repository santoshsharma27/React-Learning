function areAnagrams(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  // Helper function to sort the characters of a string
  const sortString = (str) => str.split("").sort().join("");

  return sortString(str1) === sortString(str2);
}

const result = areAnagrams("abcd", "bdca");
console.log(result); // true

////////////////////////////////////

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const charCount = {};

  // Count characters in str1
  for (let char of str1) {
    charCount[char] = (charCount[char] ?? 0) + 1;
  }

  // Subtract characters using str2
  for (let char of str2) {
    if (!charCount[char]) {
      return false; // either not found or already used up
    }
    charCount[char]--;
  }

  return true;
}

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("triangle", "integral")); // true
console.log(isAnagram("apple", "pale")); // false
console.log(isAnagram("rat", "car")); // false

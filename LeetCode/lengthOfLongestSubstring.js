function lengthOfLongestSubstring(s) {
  let n = s.length;
  let maxLength = 0;
  let lastIndex = new Map();

  let start = 0;
  for (let i = 0; i < n; i++) {
    let currentChar = s[i];
    start = Math.max(start, lastIndex.get(currentChar) || 0);
    maxLength = Math.max(maxLength, i - start + 1);
    lastIndex.set(currentChar, i + 1);
  }

  return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb")); // 3

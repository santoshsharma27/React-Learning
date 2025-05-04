function lengthOfLongestSubstring(s) {
  let maxLength = 0;
  let start = 0;
  let lastSeen = new Map();

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    // Update the start if the character was seen after the current start
    if (lastSeen.has(char) && lastSeen.get(char) >= start) {
      start = lastSeen.get(char) + 1;
    }

    lastSeen.set(char, i); // Record the latest index of the character
    maxLength = Math.max(maxLength, i - start + 1);
  }

  return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb")); // 3

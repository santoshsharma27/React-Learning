function maxFreqSum(s) {
  const set = new Set("aeiou");
  const vowelsFreq = {};
  const consonantFreq = {};

  for (let char of s) {
    if (set.has(char)) {
      vowelsFreq[char] = (vowelsFreq[char] || 0) + 1;
    } else {
      consonantFreq[char] = (consonantFreq[char] || 0) + 1;
    }
  }

  const vowelsMax = Math.max(0, ...Object.values(vowelsFreq));
  const consonantMax = Math.max(0, ...Object.values(consonantFreq));

  return vowelsMax + consonantMax;
}

console.log(maxFreqSum("successes")); // 6
console.log(maxFreqSum("aeiaeia")); // 3

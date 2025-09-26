function numJewelsInStones(jewels, stones) {
  const set = new Set(jewels);
  let count = 0;
  for (let stone of stones) {
    if (set.has(stone)) {
      count++;
    }
  }
  return count;
}

console.log(numJewelsInStones("aA", "aAAbbbb")); // 3
console.log(numJewelsInStones("z", "ZZ")); // 0

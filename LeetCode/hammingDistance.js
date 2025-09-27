function hammingDistance(x, y) {
  if (x.length !== y.length) return false;
  let count = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i] !== y[i]) {
      count++;
    }
  }
  return count;
}

console.log(hammingDistance("hello", "hwllr")); // 2

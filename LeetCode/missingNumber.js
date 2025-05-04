function missing(arr) {
  const n = arr.length + 1; // Because one number is missing
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((acc, val) => acc + val, 0);
  return expectedSum - actualSum;
}

console.log(missing([1, 2, 3, 4, 5, 6, 7, 8, 10])); // Output: 9

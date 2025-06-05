function countDigits(num) {
  if (num === 0) return 1;
  num = Math.abs(num);
  let count = 0;

  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }

  return count;
}

console.log(countDigits(123)); // Output: 3
console.log(countDigits(-123)); // Output: 3

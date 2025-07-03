function powerOfTwo(num) {
  if (num === 1) return true;
  if (num < 1 || num % 2 !== 0) return false;

  return powerOfTwo(num / 2);
}

console.log(powerOfTwo(8)); // true (2^3)
console.log(powerOfTwo(16)); // true (2^4)
console.log(powerOfTwo(18)); // false
console.log(powerOfTwo(1)); // true (2^0)
console.log(powerOfTwo(0)); // false

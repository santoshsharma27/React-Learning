// Power of a given number with base and exponent

function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  }
  return base * power(base, exponent - 1);
}

console.log(power(2, 5)); // Output: 32 (2⁵)
console.log(power(3, 3)); // Output: 27 (3³)

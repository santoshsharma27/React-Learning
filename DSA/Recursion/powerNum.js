// Power of a given number with base and exponent

function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  }
  return base * power(base, exponent - 1);
}

console.log(power(2, 5));
console.log(power(3, 3));

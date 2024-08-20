function gcdNumber(a, b) {
  if (b === 0) return a;
  return gcdNumber(b, a % b);
}

console.log(gcdNumber(12, 18)); //6

// find gcd of two numbers
// input : 42 and 18
// output : 6
// 42 divisiors are 1, 2, 3, 6, 7, 14, 21, 42
// 18 divisiors are 1, 2, 3, 6, 9, 18

function gcd(num1, num2) {
  if (num1 == num2) {
    return num1; // or num2
  }

  if (num1 > num2) {
    return gcd(num1 - num2, num2);
  } else {
    return gcd(num1, num2 - num1);
  }
}

console.log(gcd(42, 18)); // 6

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

console.log(gcd(42, 18)); // 6
console.log(gcd(1000000, 2)); // 2

/*
By subtracting the smaller number from the larger one, this approach reduces the problem size with each call until both numbers 
are equal.

*/

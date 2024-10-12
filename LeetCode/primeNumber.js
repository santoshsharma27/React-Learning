function isPrime(num) {
  if (num < 2) return false;

  if (num === 2) return true; // 2 is a prime number

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

// Test the function
console.log(isPrime(11)); // Output: true
console.log(isPrime(2)); // Output: true
console.log(isPrime(1)); // Output: false
console.log(isPrime(10)); // Output: false
console.log(isPrime(13)); // Output: true
console.log(isPrime(17)); // Output: true
console.log(isPrime(25)); // Output: false

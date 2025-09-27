function reverseNumber(num) {
  // Handle negative numbers
  const isNegative = num < 0;
  num = Math.abs(num); // Work with the absolute value
  let rev = 0;
  while (num > 0) {
    let lastDigit = num % 10; // Get the last digit
    rev = rev * 10 + lastDigit;
    num = Math.floor(num / 10); // Remove the last digit from num
  }

  return isNegative ? -rev : rev; // Restore the sign if the original number was negative
}

console.log(reverseNumber(1234));
console.log(reverseNumber(-1234));

// Second way

function reverseNumber2(num) {
  // Convert the number to a string, split it, reverse it, and join it back
  const reversedStr = num.toString().split("").reverse().join("");

  // Convert the reversed string back to a number
  return Number(reversedStr);
}

console.log(reverseNumber2(12345)); // Output: 54321
console.log(reverseNumber2(-12345)); // Output: -54321

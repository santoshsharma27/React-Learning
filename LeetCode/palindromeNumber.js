function palindrome(num) {
  if (num < 0) {
    return false; // Negative numbers are not palindromes
  }

  const result = +num.toString().split("").reverse().join("");

  return result === num; // Directly return the comparison
}

console.log(palindrome(121)); // true
console.log(palindrome(1234)); // false
console.log(palindrome(333)); // true
console.log(palindrome(1)); // true

// Iterative

function palindrome2(num) {
  if (num < 0) {
    return false;
  }

  let originalNum = num; // Store the original number
  let rev = 0;

  while (num > 0) {
    let lastDigit = num % 10; // Extract the last digit
    rev = rev * 10 + lastDigit; // Append digit to reversed number
    num = Math.floor(num / 10); // Remove the last digit
  }

  // Check if the original number is the same as the reversed number
  return rev === originalNum;
}

console.log(palindrome2(121)); // true
console.log(palindrome2(1234)); // false
console.log(palindrome2(333)); // true
console.log(palindrome2(1)); // true
console.log(palindrome2(-12)); // false

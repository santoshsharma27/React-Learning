function palindrome(num) {
  if (num < 0) {
    return false; // Negative numbers are not palindromes
  }

  const result = +num.toString().split("").reverse().join("");

  return result === num; // Directly return the comparison
}

console.log(palindrome(121));
console.log(palindrome(1234));
console.log(palindrome(333));
console.log(palindrome(1));

// Iterative

function palindrome2(num) {
  if (num < 0) {
    return false; // Negative numbers are not considered palindromes
  }

  let originalNum = num; // Store the original number
  let rev = 0;

  while (num > 0) {
    let lastDigit = num % 10;
    rev = rev * 10 + lastDigit;
    num = Math.floor(num / 10);
  }

  // Check if the original number is the same as the reversed number
  return rev === originalNum;
}

console.log(palindrome2(121)); // true
console.log(palindrome2(1234)); // false
console.log(palindrome2(333)); // true
console.log(palindrome2(1)); // true
console.log(palindrome2(-12)); // false

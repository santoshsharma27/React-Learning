// Negative numbers are not palindrome

function palindrome(num) {
  if (num.length < 0) {
    return false;
  }
  const result = +num.toString().split("").reverse().join("");

  if (result === num) {
    return true;
  } else {
    return false;
  }
}

// console.log(palindrome(121));
// console.log(palindrome(1234));
// console.log(palindrome(333));
// console.log(palindrome(1));

// Iterative

function palindrome2(num) {
  if (num.length < 0) {
    return false;
  }

  let rev = 0;

  while (num > 0) {
    let lastDigit = num % 10;
    rev = rev * 10 + lastDigit;
    num = Math.floor(num / 10);
  }

  // Check if the original number is the same as the reversed number
  if (rev === num) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome(121)); // true
console.log(palindrome(1234)); // false
console.log(palindrome(333)); // true
console.log(palindrome(1)); // true
console.log(palindrome(-12)); // false

// Palindrome

function palindrome(str) {
  // Base case
  if (str.length <= 1) {
    return true;
  }
  let res = "";
  const length = str.length - 1;
  for (i = length; i >= 0; i--) {
    res += str[i];
  }

  return res === str ? true : false;
}

console.log(palindrome("madam")); // true
console.log(palindrome("santosh")); // false

// Using string methods

function palindrome2(str) {
  if (str.length <= 1) {
    return true;
  }

  const rev = str.split("").reverse().join("");
  return str === rev ? true : false;
}

console.log(palindrome2("madam")); // true
console.log(palindrome2("santosh")); // false

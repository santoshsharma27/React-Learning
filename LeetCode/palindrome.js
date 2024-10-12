function palindrome(str) {
  // Reverse the string
  let res = "";
  const length = str.length;
  for (let i = length - 1; i >= 0; i--) {
    res += str[i];
  }

  // Return true if the reversed string matches the original
  return res === str;
}

console.log(palindrome("madam")); // true
console.log(palindrome("santosh")); // false

// Using string methods

function palindrome2(str) {
  return str === str.split("").reverse().join("");
}

console.log(palindrome2("madam")); // true
console.log(palindrome2("santosh")); // false

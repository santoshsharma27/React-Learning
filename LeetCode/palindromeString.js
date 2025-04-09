function palindrome(str) {
  let res = "";
  const length = str.length;
  for (let i = length - 1; i >= 0; i--) {
    res += str[i];
  }

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

//////////////////////////

function palindrome3(str) {
  const len = str.length;

  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(palindrome3("madam")); // true
console.log(palindrome3("hello")); // false
console.log(palindrome3("racecar")); // true

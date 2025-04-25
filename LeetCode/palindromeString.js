function palindrome(str) {
  let res = "";
  const n = str.length;
  for (let i = n - 1; i >= 0; i--) {
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
  const n = str.length;

  for (let i = 0; i < n / 2; i++) {
    if (str[i] !== str[n - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(palindrome3("madam")); // true
console.log(palindrome3("hello")); // false
console.log(palindrome3("racecar")); // true

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

  if (res === str) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome("madam"));
console.log(palindrome("santosh"));

// Using string methods

function palindrome2(str) {
  if (str.length <= 1) {
    return true;
  }

  const rev = str.split("").reverse().join("");
  if (rev === str) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome2("madam"));
console.log(palindrome2("santosh"));

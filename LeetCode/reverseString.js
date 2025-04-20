function reverseString(str) {
  let reverse = "";
  let n = str.length;
  for (let i = n - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
}

console.log(reverseString("hello")); // olleh

function recursiveReverseString(str) {
  // base case
  if (str === "") {
    return "";
  }

  return recursiveReverseString(str.substring(1)) + str.charAt[0];
}

console.log(recursiveReverseString("Hello")); // olleH

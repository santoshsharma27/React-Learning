function reverseString(str) {
  let reverse = "";
  let length = str.length - 1;
  for (let i = length; i >= 0; i--) {
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

  return recursiveReverseString(str.substring(1)) + str[0];
}

console.log(recursiveReverseString("Hello")); // olleH

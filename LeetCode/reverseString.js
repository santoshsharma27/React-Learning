function reverseString(string) {
  let reverse = "";
  let length = string.length - 1;
  for (let i = length; i >= 0; i--) {
    reverse += string[i];
  }
  return reverse;
}

console.log(reverseString("hello"));

function recursiveReverseString(str) {
  // base case
  if (str === "") {
    return "";
  }

  return recursiveReverseString(str.substring(1)) + str[0];
}

console.log(recursiveReverseString("Hello"));

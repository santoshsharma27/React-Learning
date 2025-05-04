var longestCommonPrefix = function (arr) {
  if (!arr.length) return "";

  let prefix = arr[0];

  for (let i = 1; i < arr.length; i++) {
    while (!arr[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1);
      if (!prefix) return "";
    }
  }

  return prefix;
};

console.log(longestCommonPrefix(["apple", "app", "apricot"])); // "ap"
console.log(longestCommonPrefix(["dog", "cat", "rat"])); // ""

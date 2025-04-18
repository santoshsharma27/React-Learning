var longestCommonPrefix = function (strs) {
  if (!strs.length) return "";

  let prefix = strs[0];

  for (let str of strs) {
    while (!str.startsWith(prefix)) {
      prefix = prefix.slice(0, -1);
      console.log(prefix);
      if (!prefix) return "";
    }
  }

  return prefix;
};

console.log(longestCommonPrefix(["apple", "app", "apricot"])); // "ap"
console.log(longestCommonPrefix(["dog", "cat", "rat"])); // ""

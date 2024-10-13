function mergeStringAlternatively(str1, str2) {
  let merged = "";
  let i = 0;

  while (i < str1.length || i < str2.length) {
    if (i < str1.length) {
      merged += str1[i];
    }

    if (i < str2.length) {
      merged += str2[i];
    }

    i++;
  }

  return merged;
}

console.log(mergeStringAlternatively("abc", "pqr")); // apbqcr
console.log(mergeStringAlternatively("abcdef", "pqr")); //apbqcrdef

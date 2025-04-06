// task is to remove all tabs and spaces from a string. This includes the character \t and " " from a string

function removeTAS(str) {
  let result = "";
  for (let char of str) {
    if (char !== " " && char !== "\t") {
      result += char;
    }
  }
  return result;
}

console.log(removeTAS("hell o \tsantosh"));

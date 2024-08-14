// task is to remove all tabs and spaces from a string. This includes the character \t and " " from a string

function removeTAS(inputString) {
  let result = "";
  for (let i = 0; i < inputString.length; i++) {
    let char = inputString[i];
    if (char !== " " && char !== "\t") {
      result += char;
    }
  }
  return result;
}

console.log(removeTAS("hell o \tsantosh"));

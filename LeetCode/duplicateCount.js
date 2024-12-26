function duplicateCount(arr) {
  let output = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === i) {
      output.push(arr[i]);
    }
  }

  return output.length;
}

console.log(duplicateCount([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

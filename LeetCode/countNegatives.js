function countNegatives(arr) {
  let count = 0;

  for (let num of arr) {
    if (num < 0) {
      count++;
    }
  }
  return count;
}

console.log(countNegatives([2, -9, 7, -3, 4])); // 2

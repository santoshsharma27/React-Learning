function targetSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        // return [i, j]; // will return index
        return [arr[i], arr[j]]; // will return number
      }
    }
  }
  return null;
}

const arr = [2, 7, 11, 15];

console.log(targetSum(arr, 9)); // [0,1]
console.log(targetSum(arr, 13)); // [0,2]
console.log(targetSum(arr, 50)); // null

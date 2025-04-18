function targetSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      // Start j at i + 1 to avoid duplicates
      if (arr[i] + arr[j] === target) {
        return [i, j]; // will return index
        // return [arr[i], arr[j]]; // will return number
      }
    }
  }
  return null;
}

const arr = [2, 7, 11, 15];

console.log(targetSum(arr, 9)); // [0,1]
console.log(targetSum(arr, 13)); // [0,2]
console.log(targetSum(arr, 50)); // null

// Using Map
function targetSum(arr, target) {
  const map = new Map(); // value => index

  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(arr[i], i);
  }

  return null;
}

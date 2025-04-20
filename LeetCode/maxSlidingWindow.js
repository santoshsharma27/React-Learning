function maxSlidingWindow(arr, k) {
  let result = [];
  let n = arr.length;

  for (let i = 0; i <= n - k; i++) {
    let max = arr[i];
    for (let j = 1; j < k; j++) {
      if (arr[i + j] > max) {
        max = arr[i + j];
      }
    }
    result.push(max);
  }

  return result;
}

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
// Output: [3,3,5,5,6,7]

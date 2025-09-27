function kLargestElement(arr, k) {
  arr = arr.sort((a, b) => b - a);
  return arr[k - 1];
}

console.log(kLargestElement([3, 2, 1, 5, 6, 4], 2)); // 5

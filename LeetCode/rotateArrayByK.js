function rotateArray(arr, k) {
  const n = arr.length;
  if (k > n) {
    k = k % n;
  }

  if (k === 0) return arr;

  const rotatedArray = [];

  // Add the last `k` elements to the front
  for (let i = n - k; i < n; i++) {
    rotatedArray.push(arr[i]);
  }

  // Add the remaining elements
  for (let i = 0; i < n - k; i++) {
    rotatedArray.push(arr[i]);
  }

  return rotatedArray;
}

// Test the function
console.log(rotateArray([1, 2, 3, 4, 5], 2)); // Output: [4, 5, 1, 2, 3]
console.log(rotateArray([1, 2, 3, 4, 5], 7)); // Output: [4, 5, 1, 2, 3]

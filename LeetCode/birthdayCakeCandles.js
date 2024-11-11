function birthdayCakeCandles(arr) {
  let n = arr.length;
  let max = arr[0];
  let maxCount = 0;

  for (let i = 0; i < n; i++) {
    if (arr[i] > max) {
      max = arr[i];
      maxCount = 1; // Reset count to 1 for the new max
    } else if (arr[i] === max) {
      maxCount++; // Increment count if the current element equals the max
    }
  }

  return maxCount;
}

// Example usage:
const arr = [3, 2, 1, 3];
console.log(birthdayCakeCandles(arr)); // Output: 2

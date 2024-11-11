function miniMaxSum(arr) {
  let n = arr.length;
  let totalSum = 0;
  let minValue = arr[0];
  let maxValue = arr[0];

  // Calculate total sum, and find min and max values
  for (let i = 0; i < n; i++) {
    totalSum += arr[i];

    if (arr[i] < minValue) {
      minValue = arr[i];
    }
    if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }

  // Min sum is total sum minus the maximum value
  let minSum = totalSum - maxValue;
  // Max sum is total sum minus the minimum value
  let maxSum = totalSum - minValue;

  console.log(minSum, maxSum);
}

// Example usage:
const arr = [1, 3, 5, 7, 9];
miniMaxSum(arr);

// Expected Output:
// 16 24

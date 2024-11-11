function plusMinus(arr) {
  let n = arr.length;
  let positiveCount = 0;
  let negativeCount = 0;
  let zeroCount = 0;

  for (let i = 0; i < n; i++) {
    if (arr[i] > 0) {
      positiveCount++;
    } else if (arr[i] < 0) {
      negativeCount++;
    } else {
      zeroCount++;
    }
  }

  console.log((positiveCount / n).toFixed(6));
  console.log((negativeCount / n).toFixed(6));
  console.log((zeroCount / n).toFixed(6));
}

// Example usage:
const arr = [-4, 3, -9, 0, 4, 1];
plusMinus(arr);
// Output:
// 0.500000
// 0.333333
// 0.166667

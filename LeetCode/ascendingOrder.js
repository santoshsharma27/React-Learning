function ascending(arr) {
  return arr.sort((a, b) => a - b);
}

console.log(ascending([4, 3, 5, 2, 1])); // [ 1, 2, 3, 4, 5 ]

// BubbleSort

function bubbleSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

const numbers = [10, 5, 20, 8, 50, 2];
const sortedNumbers = bubbleSort(numbers);
console.log(sortedNumbers); // Output: [2, 5, 8, 10, 20, 50]

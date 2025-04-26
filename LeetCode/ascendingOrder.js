function ascending(arr) {
  return arr.sort((a, b) => a - b);
}

console.log(ascending([4, 3, 5, 2, 1])); // [ 1, 2, 3, 4, 5 ]

// BubbleSort

function bubbleSort(arr) {
  let n = arr.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Swap the elements
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}

const numbers = [10, 5, 20, 8, 50, 2];
const sortedNumbers = bubbleSort(numbers);
console.log(sortedNumbers); // Output: [2, 5, 8, 10, 20, 50]

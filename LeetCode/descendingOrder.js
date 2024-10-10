function descending(arr) {
  return arr.sort((a, b) => b - a);
}

console.log(descending([4, 3, 5, 2, 1])); // [ 5,4,3,2,1 ]

function bubbleSortDescending(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        // Swap arr[j] and arr[j + 1]
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

const numbers = [10, 5, 20, 8, 50, 2];
const sortedNumbers = bubbleSortDescending(numbers);
console.log(sortedNumbers); // Output: [50, 20, 10, 8, 5, 2]

function descending(arr) {
  return arr.sort((a, b) => b - a);
}

console.log(descending([4, 3, 5, 2, 1])); // [ 5,4,3,2,1 ]

function bubbleSortDescending(arr) {
  let n = arr.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] < arr[i + 1]) {
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
const sortedNumbers = bubbleSortDescending(numbers);
console.log(sortedNumbers); // Output: [50, 20, 10, 8, 5, 2]

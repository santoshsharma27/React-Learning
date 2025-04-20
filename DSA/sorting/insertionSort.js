function insertionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let current = arr[i];
    let j = i - 1;

    // Move elements of arr[0...i-1], that are greater than current, to one position ahead of their current position
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}

// Example usage
console.log(insertionSort([5, 2, 1, 3, 4])); // [1,2,3,4,5]

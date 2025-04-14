function bubbleSort(arr) {
  const arrLength = arr.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arrLength - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}

console.log(bubbleSort([5, 2, 1, 3, 4])); // [1,2,3,4,5]

// Time Complexity: O(n^2)

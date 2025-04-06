function bubbleSort(arr) {
  const arrLength = arr.length;
  let isSwapped;

  for (let i = 0; i < arrLength - 1; i++) {
    isSwapped = false;

    for (j = 0; j < arrLength - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap elements
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwapped = true;
      }
    }

    // If no two elements were swapped in the inner loop, array is sorted
    if (!isSwapped) {
      break;
    }
  }

  return arr;
}

console.log(bubbleSort([5, 2, 1, 3, 4])); // [1,2,3,4,5]

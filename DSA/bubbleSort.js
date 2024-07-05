function bubbleSort(arr) {
  const arrLength = arr.length;
  let isSwaped = true;

  for (let i = 0; i < arrLength; i++) {
    isSwaped = false;

    for (j = 0; j < arrLength - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap elements
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        isSwaped = true;
      }
    }

    // If no two elements were swapped in the inner loop, array is sorted
    if (!isSwaped) {
      break;
    }
  }

  return arr;
}

console.log(bubbleSort([5, 2, 1, 3, 4]));

function selectionSort(arr) {
  const arrLength = arr.length;

  for (let i = 0; i < arrLength; i++) {
    let min = i;
    for (j = i + 1; j < arrLength; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    // Swap if both index are different

    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }

  return arr;
}

console.log(selectionSort([5, 2, 1, 3, 4]));

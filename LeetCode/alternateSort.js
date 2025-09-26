function alternateSort(arr) {
  arr.sort((a, b) => a - b); // sort ascending
  let result = [];
  let i = 0,
    j = arr.length - 1;

  while (i <= j) {
    if (i !== j) {
      result.push(arr[i++]); // smallest
      result.push(arr[j--]); // largest
    } else {
      result.push(arr[i++]); // middle element (if odd length)
    }
  }

  return result;
}

console.log(alternateSortMinMax([1, 2, 3, 4, 5, 6, 7]));
// Output: [1, 7, 2, 6, 3, 5, 4]

console.log(alternateSortMinMax([10, 20, 30, 40, 50, 60]));
// Output: [10, 60, 20, 50, 30, 40]

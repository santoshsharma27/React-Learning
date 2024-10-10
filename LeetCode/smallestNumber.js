function smallestNumber(arr) {
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

console.log(smallestNumber([1, 2, 3, 4, 5]));

// Using
const arr = [1, 2, 3, 4, 5];
const min = Math.min(...arr);
console.log(min);

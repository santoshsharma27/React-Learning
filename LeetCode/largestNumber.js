function largestNumber(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(largestNumber([1, 2, 3, 4, 5])); // 5

// Using
const arr = [1, 2, 3, 4, 5];
const max = Math.max(...arr);
console.log(max); // 5

// Using reduce

const largest = arr.reduce((acc, curr) => {
  return acc < curr ? curr : acc;
});

console.log(largest); // 5

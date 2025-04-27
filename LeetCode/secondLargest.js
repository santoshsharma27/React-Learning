function secondLargest(arr) {
  arr = [...new Set(arr)];
  const sorted = arr.sort((a, b) => b - a); // Sort descending
  return sorted[1];
}

console.log(secondLargest([1, 8, 4, 5, 10, 10]));

/////////////////////////////////////

function secondLargest2(arr) {
  arr = [...new Set(arr)];
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (const num of arr) {
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest && num < largest) {
      secondLargest = num;
    }
  }

  return secondLargest;
}

console.log(secondLargest2([1, 8, 4, 5, 10, 10]));

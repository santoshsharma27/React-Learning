function secondLargest(arr) {
  arr = [...new Set(arr)];
  const sorted = arr.sort((a, b) => b - a); // Sort descending
  return sorted[1];
}

console.log(secondLargest([1, 8, 4, 5, 10, 10])); // 8

/////////////////////////////////////

function secondLargest2(arr) {
  arr = [...new Set(arr)];

  if (arr.length < 2) {
    return "Array should have at least two numbers";
  }

  let firstLargest = -Infinity;
  let secondLargest = -Infinity;

  for (const num of arr) {
    if (num > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = num;
    } else if (num > secondLargest && num !== firstLargest) {
      secondLargest = num;
    }
  }

  return secondLargest;
}

console.log(secondLargest2([1, 8, 4, 5, 10, 10])); // 8

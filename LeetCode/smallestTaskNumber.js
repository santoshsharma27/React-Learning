function smallestTaskNumber(num) {
  // Convert number to array of digits
  let arr = num.toString().split("").map(Number);

  // Sort digits in ascending order
  arr.sort((a, b) => a - b);

  // If the smallest digit is 0, place the first non-zero digit at the front
  if (arr[0] === 0) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] !== 0) {
        // Swap the first non-zero with the first element
        [arr[0], arr[i]] = [arr[i], arr[0]];
        break;
      }
    }
  }

  // Join digits to form the result
  return parseInt(arr.join(""), 10);
}

// Example usage
console.log(smallestTaskNumber(310)); // Output: 103
console.log(smallestTaskNumber(9070)); // Output: 7009
console.log(smallestTaskNumber(5301)); // Output: 1035

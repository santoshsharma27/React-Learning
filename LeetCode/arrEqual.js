function arrEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

console.log(arrEqual([1, 2, 3], [1, 2, 4])); // Output: false
console.log(arrEqual([1, 2, 3], [1, 2, 3])); // Output: true

// Second way

function arrEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  return arr1.every((val, index) => val === arr2[index]);
}

console.log(arrEqual([1, 2, 3], [1, 2, 4])); // Output: false
console.log(arrEqual([1, 2, 3], [1, 2, 3])); // Output: true

const data = [
  { name: "sandeep", age: 10 },
  { name: "Santosh", age: 20 },
  { name: "Bharat", age: 40 },
  { name: "Tara", age: 30 },
];

function customSortAndFilter(arr) {
  // Step 1: Filter age > 18 manually
  const filtered = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].age > 18) {
      filtered.push(arr[i]);
    }
  }

  // Step 2: Sort manually using Bubble Sort
  let swapped;
  do {
    swapped = false;
    for (let j = 0; j < filtered.length - 1; j++) {
      if (filtered[j].age > filtered[j + 1].age) {
        // Swap the objects
        let temp = filtered[j];
        filtered[j] = filtered[j + 1];
        filtered[j + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return filtered;
}

console.log(customSortAndFilter(data)); // [ { name: 'Santosh', age: 20 }, { name: 'Tara', age: 30 },  { name: 'Bharat', age: 40 } ]

// Second Question

function firstNonDuplicateChar(str) {
  // Step 1: Create an object to store character counts
  const charCount = {};

  // Step 2: Populate character counts
  for (let char of str) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  // Step 3: Find the first non-duplicate character
  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null; // If no non-duplicate character is found
}

console.log(firstNonDuplicateChar("stress")); // Output: t
console.log(firstNonDuplicateChar("ababab")); // Output: null

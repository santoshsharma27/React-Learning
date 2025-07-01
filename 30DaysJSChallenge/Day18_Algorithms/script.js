// Task 1 : Implement the bubble sort algorithm to sort an array of numbers in ascending order. Log the sorted array.

function bubbleSort(arr) {
  const arrLength = arr.length;
  for (let i = 0; i < arrLength - 1; i++) {
    for (let j = 0; j < arrLength - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap the elements if they are in the wrong order
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr; // Return the sorted array
}

console.log(bubbleSort([5, 2, 1, 3, 4]));

// Task 2 : Implement the selection sort algorithm to sort an array numbers in ascending order . Log the sorted array.

function selectionSort(arr) {
  const arrLength = arr.length;
  for (let i = 0; i < arrLength - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arrLength; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j; // Find the index of the minimum element
      }
    }
    // Swap the found minimum element with the first element
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr; // Return the sorted array
}

console.log(selectionSort([5, 2, 1, 3, 4]));

// Task 3 : Implement the quicksort algorithm to sort an array of numbers in ascending order . Log the sorted array .

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr; // Base case: an array of 0 or 1 elements is already sorted
  }
  const pivot = arr[arr.length - 1]; // Choose the last element as the pivot
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]); // Elements less than the pivot go to the left
    } else {
      right.push(arr[i]); // Elements greater than or equal to the pivot go to the right
    }
  }
}
// Task 4 : Implement the linear search algorithm to find a target value in array . Log the index of the target value.

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Return the index of the target value
    }
  }
  return -1; // Return -1 if the target value is not found
}

// Task 5 : Write a function to implement the binary search algorithm to find a target value in a sorted array. Log the index of the target value.

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // Return the index of the target value
    } else if (arr[mid] < target) {
      left = mid + 1; // Search in the right half
    } else {
      right = mid - 1; // Search in the left half
    }
  }

  return -1; // Return -1 if the target value is not found
}

// Task 6 :  Write a function to count the occurrences of each character in a string. Log the character counts.

function countCharacterOccurrences(str) {
  const charCount = {};

  for (let char of str) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  return charCount;
}

// Task 7 : Write a function to find the longest substring without repeating characters in a string. Log the length of the substring.

function longestSubstringWithoutRepeating(str) {
  let maxLength = 0;
  let start = 0;
  const charIndexMap = {};

  for (let i = 0; i < str.length; i++) {
    if (charIndexMap[str[i]] !== undefined && charIndexMap[str[i]] >= start) {
      start = charIndexMap[str[i]] + 1;
    }
    charIndexMap[str[i]] = i;
    maxLength = Math.max(maxLength, i - start + 1);
  }

  return maxLength;
}

// Task 8 :  Write a function to rotate an array by k positions. Log the rotated array.

function rotateArray(arr, k) {
  const n = arr.length;
  k = k % n; // Handle cases where k is greater than the array length
  return arr.slice(n - k).concat(arr.slice(0, n - k));
}

// Task 9 : Write a function to merge two sorted arrays into one sorted array. Log the merged array.

function mergeSortedArrays(arr1, arr2) {
  const mergedArray = [];
  let i = 0,
    j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }
  // Add remaining elements from arr1
  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }
  // Add remaining elements from arr2
  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }
  return mergedArray; // Return the merged sorted array
}

// Task 10 : Write a function to solve the Fibonacci sequence using dynamic programming. Log the Fibonacci numbers.

function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib.slice(0, n + 1); // Return Fibonacci numbers up to n
}

// Task 11 : Write a function to solve the knapsack problem using dynamic programming. Log the maximum value that can be obtained given a set of items, each with a weight and a value, and a maximum weight capacity.

function knapsack(weights, values, capacity) {
  const n = weights.length;
  const dp = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let w = 0; w <= capacity; w++) {
      if (weights[i - 1] <= w) {
        dp[i][w] = Math.max(
          dp[i - 1][w],
          dp[i - 1][w - weights[i - 1]] + values[i - 1]
        );
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  return dp[n][capacity]; // Return the maximum value that can be obtained
}

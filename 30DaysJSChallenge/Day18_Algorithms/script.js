// Algorithms

// Task 1 : Implement the bubble sort algorithm to sort an array of numbers in ascending order. Log the sorted array.

function bubbleSort(arr) {
  const arrLength = arr.length;
  let isSwaped = true;

  for (let i = 0; i < arrLength; i++) {
    isSwaped = false;

    for (j = 0; j < arrLength - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap elements
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        isSwaped = true;
      }
    }

    // If no two elements were swapped in the inner loop, array is sorted
    if (!isSwaped) {
      break;
    }
  }

  return arr;
}

console.log(bubbleSort([5, 2, 1, 3, 4]));

// Task 2 : Implement the selection sort algorithm to sort an array numbers in ascending order . Log the sorted array.

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

// Task 3 : Implement the quicksort algorithm to sort an array of numbers in ascending order . Log the sorted array .

function quickSort(arr) {}

// Task 4 : Implement the linear search algorithm to find a target value in array . Log the index of the target value.

// Task 5 : Write a function to implement the binary search algorithm to find a target value in a sorted array. Log the index of the target value.

// Task 6 :  Write a function to count the occurrences of each character in a string. Log the character counts.

// Task 7 : Write a function to find the longest substring without repeating characters in a string. Log the length of the substring.

// Task 8 :  Write a function to rotate an array by k positions. Log the rotated array.

// Task 9 : Write a function to merge two sorted arrays into one sorted array. Log the merged array.

// Task 10 : Write a function to solve the Fibonacci sequence using dynamic programming. Log the Fibonacci numbers.

// Task 11 : Write a function to solve the knapsack problem using dynamic programming. Log the maximum value that can be obtained given a set of items, each with a weight and a value, and a maximum weight capacity.

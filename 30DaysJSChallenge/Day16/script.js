// Recursion

// Task 1 : Write a recursive function to calculate the factorial of a number . Log the result for a few test cases.

function factorial(num) {
  if (num === 0) return 1;
  return num * factorial(num - 1);
}

console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));

// Task 2 : Write a recursive function to calculate the nth Fibonacci number . Log the result for a few test cases.

function fibonacci(num) {
  if (num < 2) {
    return num;
  }

  return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));

// Task 3 : Write a recursive function to find the sum of all elements in an array . Log the result  for a few test cases.

const arrSum = (arr) => {
  if (arr.length === 0) {
    return 0;
  } else {
    return arr[0] + arrSum(arr.slice(1));
  }
};

console.log(arrSum([1, 2, 3, 4, 5]));

// Task 4 : Write a recursive function to find the maximum element in an array. Log the result of few test cases .

const maxArray = (arr) => {
  if (arr.length === 0) {
    return 0;
  } else if (arr.length === 1) {
    return 0;
  } else {
    let maxofRest = maxArray(arr.slice(1));
    return arr[0] > maxofRest ? arr[0] : maxofRest;
  }
};

console.log(maxArray([1, 2, 34, 5, 6]));

// Task 5 : Write a resursive function to reverse a string . Log the result for few test cases.

const strReverse = (str) => {
  if (str === "") {
    return "";
  } else {
    return strReverse(str.slice(1)) + str[0];
  }
};

console.log(strReverse("Santosh"));
console.log(strReverse("Hello World"));

// Task 6 : Write a recursive function to check if a string is palindrome. Log the result for few test cases .

const isPalindrome = (str) => {
  if (str.length <= 1) {
    return true;
  }
  if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.slice(1, -1));
  }
  return false;
};

console.log(isPalindrome("madam"));
console.log(isPalindrome("chagala"));

// Task 7 : Write a recursive function to perform binary search on a sorted array. Log the index of the target element for a few test cases.

const binarySearch = (arr, target, left = 0, right = arr.length - 1) => {
  if (left > right) {
    return -1; // Target not found
  }

  const mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) {
    return mid; // Target found
  } else if (arr[mid] > target) {
    return binarySearch(arr, target, left, mid - 1); // Search left half
  } else {
    return binarySearch(arr, target, mid + 1, right); // Search right half
  }
};

// Example usage:
const arr = [4, 2, 5, 1, 3];
arr.sort((a, b) => a - b);

const targets = [1, 3, 6];
targets.forEach((target) => {
  const index = binarySearch(arr, target);
  console.log(`Target ${target} is at index: ${index}`);
});

// Task 8 : Write a recursive function to count the occurences of a target element in an array . Log the result for a few test cases.

const countOccurrences = (arr, target, index = 0) => {
  if (index >= arr.length) {
    return 0; // Base case: reached the end of the array
  }

  // Check if the current element matches the target
  const count = arr[index] === target ? 1 : 0;

  // Recursive call for the next element
  return count + countOccurrences(arr, target, index + 1);
};

// Example usage:
const array = [1, 2, 3, 4, 2, 2, 5, 2];
const target = 2;

const count = countOccurrences(array, target);
console.log(`The element ${target} occurs ${count} times in the array.`);

// Task 9 : Write a recursive function to perform an in-order traversal of a binary tree.Log the result for a few test cases.

class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function inOrderTraversal(root) {
  if (root === null) {
    return [];
  }
  return [
    ...inOrderTraversal(root.left),
    root.value,
    ...inOrderTraversal(root.right),
  ];
}

// Test cases
const testCase1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const testCase2 = new TreeNode(
  4,
  new TreeNode(2, new TreeNode(1), new TreeNode(3)),
  new TreeNode(6, new TreeNode(5), new TreeNode(7))
);
const testCase3 = new TreeNode(
  10,
  null,
  new TreeNode(20, new TreeNode(15), null)
);

console.log(inOrderTraversal(testCase1)); // Output: [2, 1, 3]
console.log(inOrderTraversal(testCase2)); // Output: [1, 2, 3, 4, 5, 6, 7]
console.log(inOrderTraversal(testCase3)); // Output: [10, 15, 20]

// Task 10 : Write a recursive function to calculate the depth of  a binary tree . Log the result few test cases .

class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function calculateDepth(root) {
  if (root === null) {
    return 0;
  }
  const leftDepth = calculateDepth(root.left);
  const rightDepth = calculateDepth(root.right);
  return 1 + Math.max(leftDepth, rightDepth);
}

// Test cases
const testCase4 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const testCase5 = new TreeNode(
  4,
  new TreeNode(2, new TreeNode(1), new TreeNode(3)),
  new TreeNode(6, new TreeNode(5), new TreeNode(7))
);
const testCase6 = new TreeNode(
  10,
  null,
  new TreeNode(20, new TreeNode(15), null)
);
const testCase7 = null; // Empty tree

console.log(calculateDepth(testCase1)); // Output: 2
console.log(calculateDepth(testCase2)); // Output: 3
console.log(calculateDepth(testCase3)); // Output: 3
console.log(calculateDepth(testCase4)); // Output: 0

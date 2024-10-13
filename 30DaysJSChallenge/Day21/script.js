// LeetCode Easy

// Task 1 function that takes an array of numbers and a target number, and returns the indices of the two numbers that add up to the target

function task1(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
        // return [arr[i], arr[j]];   // will return number
      }
    }
  }
  return null; // Return null if no two numbers sum up to the target
}

const arr = [2, 7, 11, 15];

console.log(task1(arr, 9)); // [0,1]
console.log(task1(arr, 13)); // [0,2]
console.log(task1(arr, 50)); // null

// Task 2 Reverse Integer

function task2(num) {
  if (num < 0) return null;
  let rev = 0;
  while (num > 0) {
    let lastDigit = num % 10;
    rev = rev * 10 + lastDigit;
    num = parseInt(num / 10);
  }
  return rev;
}

console.log(task2(12345)); // 54321
console.log(task2(-120)); // null
console.log(task2(4520)); // 354

function reverseNumber(num) {
  if (num < 0) return null;
  const result = num.toString().split("").reverse().join("");
  return parseInt(result);
}

console.log(reverseNumber(123)); // 321
console.log(reverseNumber(-123)); // null
console.log(reverseNumber(130)); // 31

// Task 3 Palindrome Number

function task3(num) {
  // Negative numbers are not palindromes
  if (num < 0) return false;

  let rev = 0;
  let original = num;

  while (original > 0) {
    const lastDigit = original % 10;
    rev = rev * 10 + lastDigit;
    original = Math.floor(original / 10);
  }

  return num === rev;
}
console.log(task3(-121));
console.log(task3(121));
console.log(task3(1234));

// Task 4

function mergeSortedLists(list1, list2) {
  return list1.concat(list2).sort((a, b) => a - b);
}

// Example usage:
const list1 = [1, 3, 5, 7];
const list2 = [2, 4, 6, 8];
const mergedList = mergeSortedLists(list1, list2);
console.log(mergedList); // Output: [1, 2, 3, 4, 5, 6, 7, 8]

function mergeSortedLists(list1, list2) {
  const mergedList = [];
  let i = 0,
    j = 0;

  while (i < list1.length && j < list2.length) {
    if (list1[i] < list2[j]) {
      mergedList.push(list1[i]);
      i++;
    } else {
      mergedList.push(list2[j]);
      j++;
    }
  }

  // If there are remaining elements in list1, add them to mergedList
  while (i < list1.length) {
    mergedList.push(list1[i]);
    i++;
  }

  // If there are remaining elements in list2, add them to mergedList
  while (j < list2.length) {
    mergedList.push(list2[j]);
    j++;
  }

  return mergedList;
}

// Example usage:
const list3 = [1, 3, 5, 7];
const list4 = [2, 4, 6, 8];
const mergedList2 = mergeSortedLists(list3, list4);
console.log(mergedList2); // Output: [1, 2, 3, 4, 5, 6, 7, 8]

// Task 5 Valid Parantheses

function isValidParentheses(s) {
  const stack = [];
  const map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let char of s) {
    if (map[char]) {
      // If the character is an opening bracket, push its corresponding closing bracket onto the stack
      stack.push(map[char]);
    } else {
      // If the character is a closing bracket, check if it matches the top of the stack
      if (stack.pop() !== char) {
        return false;
      }
    }
  }

  // If the stack is empty, all brackets were properly closed and nested
  return stack.length === 0;
}

// Example usage:
console.log(isValidParentheses("()")); // Output: true
console.log(isValidParentheses("()[]{}")); // Output: true
console.log(isValidParentheses("(]")); // Output: false
console.log(isValidParentheses("([)]")); // Output: false
console.log(isValidParentheses("{[]}")); // Output: true

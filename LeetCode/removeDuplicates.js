const arr = [2, 6, 4, 9, 3, 2, 7, 3, 6];

// Using set
const result = [...new Set(arr)];
console.log(result);

// Using filter

const newArray = arr.filter((a, index, arr) => arr.indexOf(a) === index);
console.log(newArray);

// Using for loop

let output = [];
for (let i = 0; i < arr.length; i++) {
  if (arr.indexOf(arr[i]) === i) {
    output.push(arr[i]);
  }
}
console.log(output);

// using reduce

const uniqueArr = arr.reduce((acc, curr) => {
  if (!acc.includes(curr)) {
    acc.push(curr);
  }
  return acc;
}, []);

console.log(uniqueArr);

// O(n) Time complexity solution is below

function removeDuplicates(arr) {
  const obj = {};
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = true;
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

function removeDuplicates(nums) {
  if (nums.length === 0) return 0;

  let x = 0; // slow pointer

  for (let i = 1; i < nums.length; i++) {
    // fast pointer
    if (nums[i] !== nums[x]) {
      x++; // move slow pointer
      nums[x] = nums[i]; // move unique element forward
    }
  }

  return x + 1; // length of array without duplicates
}

// Example
let arr1 = [1, 1, 2, 2, 3, 4, 4, 5];
let newLength = removeDuplicates(arr1);

console.log(newLength); // 5
console.log(arr1.slice(0, newLength)); // [1, 2, 3, 4, 5]

// Array

// Task 1

const arr = [1, 2, 3, 4, 5];
console.log(arr);

// Task 2

console.log(arr[0]); // 1
console.log(arr[arr.length - 1]); // 5

// Task 3
arr.push(6);
console.log(arr); // [1, 2, 3, 4, 5, 6];

// Task 4
arr.pop();
console.log(arr); // [1, 2, 3, 4, 5];

// Task 5
arr.shift();
console.log(arr); // [2, 3, 4, 5];

// Task 6

arr.unshift(10);
console.log(arr); // [10, 2, 3, 4, 5];

// Task 7

const arr2 = [1, 2, 3, 4, 5, 6];
const result = arr2.map((arr) => arr * 2);
console.log(result); // [2, 4, 6, 8, 10]

// Task 8

const even = arr2.filter((arr) => arr % 2 === 0);
console.log(even);

// Task 9

const sum = arr2.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

// Task 10

for (let i = 0; i < arr2.length; i++) {
  console.log(arr2[i]);
}

// for of
for (const element of arr2) {
  console.log(element);
}

// Task 11

const arr3 = ["Santosh", "Tara", "Bharat"];
arr3.forEach((arr) => console.log(arr));

// Task 12

const arr4 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(arr4);

// Task 13

console.log(arr4[0][1]); // 2

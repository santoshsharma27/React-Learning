// Loops

// Task 1

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Task 2

for (let i = 1; i <= 10; i++) {
  console.log(i * 5);
}

// Task 3

let sum = 0;
let num = 1;

while (num <= 10) {
  sum += num;
  num++;
}

console.log(sum);

// Task 4

// print numbers from 10 to 1
let j = 10;
while (j >= 1) {
  console.log(j);
  j--;
}

// Task 5

// prints number from 1 to 5
let score = 1;
do {
  console.log(y);
  score++;
} while (score <= 5);

// Task 6

let factorial = 1;
let number = 5;
let i = 1;
do {
  factorial *= i;
  i++;
} while (i <= number);
console.log(factorial);

// Task 7

for (let i = 1; i <= 5; i++) {
  let output = "";
  for (let j = 1; j <= i; j++) {
    output += "* ";
  }
  console.log(output);
}

// Task 8

for (let i = 1; i <= 10; i++) {
  if (i === 5) continue;
  console.log(i);
}

// Task 9

for (let i = 1; i <= 10; i++) {
  if (i === 7) break;
  console.log(i);
}

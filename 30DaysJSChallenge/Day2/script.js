// Arithmetic Operations

// Task 1 : Write a program to add two numbers and log the result to the console
function add(a, b) {
  console.log(a + b);
}

add(3, 2); // 5

// Task 2 : Write a program to substract two numbers and log the result to the console
function substract(a, b) {
  console.log(a - b);
}

substract(5, 3); // 2

// Task 3 : Write a program to substract two numbers and log the result to the console
function multiply(a, b) {
  console.log(a * b);
}

multiply(2, 3); // 6

// Task 4: Write a program to divide two numbers and log the result to the console
function divide(a, b) {
  console.log(a / b);
}

divide(10, 2); // 5

// Task 5 : Write a program to find the reminder when one number is divided by another and log the result to the console
function reminder(a, b) {
  console.log(a % b);
}

reminder(5, 2); // 1

// Assignment Operators

// Task 6 : Use the += operator to add a number to  a variable and log the result to the console

let x = 10;
x += 5;
console.log(x); // 15

// Task 7 : Use the -= operator to substract a number to  a variable and log the result to the console

let y = 10;
y -= 2;
console.log(y); // 8

// Comparison Operators

// Task 8 : Write a program to compare two numbers using > and < and log the result to the console

function hasDriverLicense(age) {
  if (age > 18) {
    console.log("You are eligible for driving lisense");
  } else if (age < 18) {
    console.log("You have to wait till you get 18 years old");
  }
}

hasDriverLicense(20);
hasDriverLicense(15);

// Task 8 : Write a program to compare two numbers using >= and <= and log the result to the console

console.log(10 >= 10);
console.log(12 <= 15);

// Task 8 : Write a program to compare two numbers using == and === and log the result to the console

console.log(5 == 5); // true
console.log(5 === "5"); // false

// Logical Operators

// Task 11 : Write a program that uses the && operator to combine two conditions and log the result to the console

function logicalAND(a, b) {
  console.log(a > 0 && b > 0);
}

logicalAND(2, 3); // True
logicalAND(1, -1); // False

// Task 12 : Write a program that uses the || operator to combine two conditions and log the result to the console

function logicalOR(a, b) {
  console.log(a > 0 || b > 0);
}

logicalOR(1, 2); // True

// Task 13 : Write a program that uses the ! operator to negate a condition and log the result to the console

function logicalNOT(a, b) {
  console.log(!(a > 0 || b > 0));
}

logicalNOT(2, 2); // False

// Ternary Operator

// Task 14 : Write a program that uses the ternary to check if a number is positive or negative and log the result to the console

function ternary(num) {
  return num > 0 ? "Number is Positive" : "Negative Number";
}

console.log(ternary(5));
console.log(ternary(-5));

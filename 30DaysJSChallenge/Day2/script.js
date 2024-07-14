// Arithmetic Operations

// Task 1
function add(a, b) {
  console.log(a + b);
}

add(3, 2);

// Task 2
function substract(a, b) {
  console.log(a - b);
}

substract(5, 3);

// Task 3
function multiply(a, b) {
  console.log(a * b);
}

multiply(2, 3);

// Task 4
function divide(a, b) {
  console.log(a / b);
}

divide(10, 2);

// Task 5
function reminder(a, b) {
  console.log(a % b);
}

reminder(5, 2);

// Assignment Operators

// Task 6

let x = 10;
x += 5;
console.log(x); // 15

// Task 7

let y = 10;
y -= 2;
console.log(y); // 8

// Comparison Operators

// Task 8

function hasDriverLicense(age) {
  if (age > 18) {
    console.log("You are eligible for driving lisense");
  } else if (age < 18) {
    console.log("You have to wait till you get 18 years old");
  }
}

hasDriverLicense(20);
hasDriverLicense(15);

// Task 9

function hasDriverLicense(age) {
  if (age >= 18) {
    console.log("You are eligible for driving lisense");
  } else if (age <= 17) {
    console.log("You have to wait till you get 18 years old");
  }
}

hasDriverLicense(20);
hasDriverLicense(15);

// Task 10

function compare(a, b) {
  if (a == b) {
    console.log("Both numbers are same");
  } else if (a === b) {
    console.log("Both numbers and their dataTypes are also same");
  }
}

compare(5, 5);
compare(2, "2");

// Logical Operators

// Task 11
function logicalAND(a, b) {
  console.log(a > 0 && b > 0);
}

logicalAND(2, 3); // True
logicalAND(1, -1); // False

// Task 12
function logicalOR(a, b) {
  console.log(a > 0 || b > 0);
}

logicalOR(1, 2); // True

// Task 13

function logicalNOT(a, b) {
  console.log(!(a > 0 || b > 0));
}

logicalNOT(2, 2); // False

// Ternary Operator

// Task 14

function ternary(num) {
  return num > 0 ? "Number is Positive" : "Negative Number";
}

console.log(ternary(5));
console.log(ternary(-5));

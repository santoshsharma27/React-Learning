// Control Structures

// Task 1

function checkNumber(num) {
  if (num < 0) {
    console.log("Its a negative number");
  } else if (num === 0) {
    console.log("Number is Zero");
  } else {
    console.log("Its a positive number");
  }
}

checkNumber(-2);
checkNumber(0);
checkNumber(5);

// Task 2

function isAdult(age) {
  if (age >= 18) {
    console.log("You are eligible to vote");
  } else console.log("You need to wait few years to vote");
}

isAdult(20);
isAdult(17);

// Task 3

function largestNumber(a, b, c) {
  if (a > b && a > c) {
    console.log("a is the largest number");
  } else if (b > c && b > a) {
    console.log("b is the largest number");
  } else {
    console.log("c is the largest number");
  }
}

largestNumber(40, 500, 80);

// Task 4

// The switch Statement
const day = 3;

switch (day) {
  case 1:
    console.log("Its a Monday");
    break;
  case 2:
    console.log("Its a Tuesday");
    break;
  case 3:
    console.log("Its a Wednesday");
    break;
  case 4:
    console.log("Its a Thursday");
    break;
  case 5:
    console.log("Its a Friday");
    break;
  case 6:
    console.log("Its a Saturday");
  case 7:
    console.log("Its Sunday");
    break;
  default:
    console.log("Not a valid day!");
}

// Task 5

function grade(marks) {
  switch (true) {
    case marks >= 90 && marks <= 100:
      console.log("You got A grade");
      break;
    case marks >= 80 && marks < 90:
      console.log("You got B grade");
      break;
    case marks >= 70 && marks < 79:
      console.log("You got C grade");
      break;
    case marks >= 60 && marks < 69:
      console.log("You got D grade");
      break;
    case marks >= 50 && marks < 59:
      console.log("You got E grade");
      break;
    default:
      console.log("You got F grade");
  }
}

grade(95);
grade(89);
grade(49);

// Task 6

function isEvenOdd(num) {
  return num % 2 === 0 ? "Even Number" : "Odd Number";
}

console.log(isEvenOdd(10));
console.log(isEvenOdd(13));

// Task 7

function leapYear(year) {
  if (year % 400 === 0) {
    console.log("Leap Year");
  } else if (year % 4 === 0) {
    console.log("Leap Year");
  } else if (year % 4 === 0) {
    console.log("Not a Leap Year");
  } else {
    console.log("Not a Leap Year");
  }
}

leapYear(2024);
leapYear(2025);

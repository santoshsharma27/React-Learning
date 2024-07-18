// Functions

// Task 1

function isEvenOdd(num) {
  if (num % 2 === 0) console.log("Even Number");
  else console.log("Odd Number");
}

isEvenOdd(5);
isEvenOdd(10);

// Task 2

function square(num) {
  return num * num;
}

console.log(square(5));

// Task 3

const max = function (a, b) {
  if (a > b) {
    console.log("a is the maximum number");
  } else {
    console.log("b is the maximum number");
  }
};

max(2, 5);

// Task 4

const addString = function () {
  console.log("Santosh" + " Sharma");
};

addString();

// Task 5

const sum = (a, b) => {
  return a + b;
};

console.log(sum(5, 10));

// Task 6

const characterCheck = (str, char) => {
  return str.includes(char) ? true : false;
};

console.log(characterCheck("Santosh", "a"));

// Task 7

function multiply(a, b = 2) {
  return a * b;
}

console.log(multiply(10, 5));

console.log(multiply(5));

// Task 8

function person(name, age = 29) {
  return `My name is ${name} and I am ${age} years old `;
}

console.log(person("Santosh Kumar"));

// Task 9

function repeatFunc(func, num) {
  for (let i = 0; i < num; i++) {
    func();
  }
}

repeatFunc(() => console.log("Hi!"), 5);

// Task 10:

function applyFunctions(func1, func2, value) {
  const result1 = func1(value);
  const result2 = func2(result1);
  return result2;
}

const addTwo = (x) => x + 2;
const multiplyByTwo = (x) => x * 2;

const initialValue = 5;
const finalResult = applyFunctions(addTwo, multiplyByTwo, initialValue);

console.log(finalResult);

//////////////////////////////

console.log(1);

setTimeout(() => console.log(2), 0);

setTimeout(() => console.log(3), 100);

new Promise((resolve, reject) => {
  console.log(5);
  resolve(5);
  console.log(6);
  reject(7);
})
  .then((value) => console.log(value))
  .then((value) => console.log(value))
  .then((value) => console.log(value))
  .catch((e) => console.log(e))
  .catch((e) => console.log(e))
  .finally(() => console.log(8));

console.log(9);

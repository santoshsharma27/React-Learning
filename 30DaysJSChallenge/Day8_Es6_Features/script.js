// ES6+ Features

// Task 1: Use template literals to create a string that includes variables for  a person's name and age, and log the string to the console.

function person(name, age) {
  return `My name is ${name} and I am ${age} years old`;
}

console.log(person("Santosh", 29));

// Task 2: Create a multi-line string using template literals and log it to the console.

const str = `Santosh
Sharma`;
console.log(str);

// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.

const arr = [1, 2, 3, 4, 5];

const [first, second] = arr;
console.log(first, second);

// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.

const book = {
  title: "Book1",
  author: "Santosh",
};

const { title, author } = book;
console.log(title, author);

// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

const num = [2, 4, 6, 8, 10];

const newArray = [...num, 12, 14, 16];
console.log(newArray);

// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

function addition(...num) {
  let sum = 0;
  for (const value of num) {
    sum += value;
  }
  return sum;
}

console.log(addition(...num));

// Task 7: Write a function that takes parameters and returns their product, with the second parameter having a default value of 1. log the result of calling this function with and without the second parameter.

function multiply(a, b = 5) {
  return a * b;
}

console.log(multiply(5, 2));
console.log(multiply(15));

// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.

const person2 = {
  firstName: "Santosh",
  lastName: "Sharma",

  fullName: function () {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};

console.log(person2);

// Task 9: Create an object with computed property names based on variables and log the object to the console.

const property = "firstName";
const name = "Santosh";

const user = {
  [property]: name,
};

console.log(user);

console.log(user.firstName);

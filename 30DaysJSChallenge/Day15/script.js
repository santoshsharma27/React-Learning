// Closure

// Task 1

function outer() {
  const a = 10;
  function inner() {
    console.log(a);
  }
  inner();
}

outer();

// Task 2

function Counter() {
  let count = 0;
  return function incrementCounter() {
    count++;
    return count;
  };
}

const counter1 = Counter();
console.log(counter1()); //1
console.log(counter1()); //2

function createCounter() {
  // Private counter variable
  let counter = 0;

  // Return an object with methods to interact with the counter
  return {
    increment: function () {
      counter++;
      return counter;
    },
    decrement: function () {
      counter--;
      return counter;
    },
    getValue: function () {
      return counter;
    },
  };
}

const myCounter = createCounter();

// console.log(myCounter.increment());
// console.log(myCounter.increment());
// console.log(myCounter.decrement());

// Task 3 : Write a function that generates unique IDs . Use a closure to keep track of the last generated ID and increment it with each call.

function generateUniqueId() {
  let lastID = 0;

  return function () {
    lastID++;
    let prefix = "NIT";
    let uniqueID = prefix + lastID;
    return uniqueID;
  };
}
let getUniqueID = generateUniqueId();
console.log(getUniqueID());
console.log(getUniqueID());
console.log(getUniqueID());

// Task 4 : Create a closure that captures a user's name and returns a function that greets the user by name .

function greet(name) {
  return function () {
    console.log(`Hello ${name}`);
  };
}

let getGreet = greet("Santosh");

getGreet();

// Task 5 : Write a loop that creates an array of functions . Each function should log its index when called . Use a closure to ensure each function logs correct index.

let arr = [];

for (let i = 0; i < 3; i++) {
  arr.push(
    (function (index) {
      return function () {
        console.log(index);
      };
    })(i)
  );
}

arr[0]();
arr[1]();

// Task 6 :Use closures to create a simple module for managing a collection of items . Implement methods to add,remove,and list items .

function itemManager() {
  let items = [];
  return {
    addItem: function (item) {
      items.push(item);
    },
    removeItem: function () {
      items.pop();
    },
    listItems: function () {
      return items;
    },
  };
}

let itemModule = itemManager();
itemModule.addItem(135);
itemModule.addItem(513);
itemModule.addItem("Santosh");
console.log(itemModule.listItems());

itemModule.removeItem();
console.log(itemModule.listItems());

// Task 7 : Write a function that memorizes the result of another function. Use a closure to store the results of previous computations .

function memoize(fn) {
  const cache = {}; // Store previous computations

  return function (...args) {
    const key = JSON.stringify(args); // Use arguments as cache key
    if (cache[key] !== undefined) {
      console.log(`Returning cached result for ${key}`);
      return cache[key]; // Return cached result if available
    } else {
      console.log(`Computing result for ${key}`);
      const result = fn(...args); // Compute result
      cache[key] = result; // Cache the result
      return result;
    }
  };
}

// Example usage:
function add(a, b) {
  return a + b;
}

const memoizedAdd = memoize(add);

console.log(memoizedAdd(1, 2)); // Outputs: Computing result for [1,2] 3
console.log(memoizedAdd(1, 2)); // Outputs: Returning cached result for [1,2] 3
console.log(memoizedAdd(2, 3)); // Outputs: Computing result for [2,3] 5
console.log(memoizedAdd(2, 3)); // Outputs: Returning cached result for [2,3] 5

// Task 8 :  Create a memorized version of a function that calculates the factorial of a number .

function memoizeFactorial() {
  const cache = {}; // Store previous computations

  function factorial(n) {
    if (n <= 1) return 1; // Base case
    if (cache[n] !== undefined) {
      console.log(`Returning cached result for ${n}`);
      return cache[n]; // Return cached result if available
    } else {
      console.log(`Computing result for ${n}`);
      cache[n] = n * factorial(n - 1); // Recursive computation with caching
      return cache[n];
    }
  }

  return factorial;
}

const memoizedFactorial = memoizeFactorial();

console.log(memoizedFactorial(5)); // Outputs: Computing result for 5, 4, 3, 2, 1
console.log(memoizedFactorial(5)); // Outputs: Returning cached result for 5
console.log(memoizedFactorial(6)); // Outputs: Computing result for 6, Returning cached result for 5
console.log(memoizedFactorial(7)); // Outputs: Computing result for 7, Returning cached result for 6, Returning cached result for 5

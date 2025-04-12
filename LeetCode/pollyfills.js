// forEach

Array.prototype.myForEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i], i, this);
  }
};

const arr = [1, 2, 3, 4, 5];

arr.myForEach((item) => {
  console.log(item);
});

// map()

Array.prototype.myMap = function (cb) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(cb(this[i], i, this));
  }
  return result;
};

const doubled = arr.myMap((item) => item * 2);
console.log(doubled); // [ 2, 4, 6, 8, 10 ]

// filter()

Array.prototype.myFilter = function (cb) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

const result = arr.myFilter((item) => item > 2);
console.log(result); // [ 3, 4, 5 ]

// Reduce()
Array.prototype.myReduce = function (cb, initialValue) {
  let acc = initialValue;
  let startIndex = 0;

  // If no initial value is provided, use the first element as the initial value
  if (acc === undefined) {
    acc = this[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < this.length; i++) {
    acc = cb(acc, this[i], i, this);
  }

  return acc;
};

const sum = arr.myReduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 15

// call()

const person = {
  firstName: "Santosh",
};

function greet(greeting, lastName) {
  console.log(`${greeting}, ${this.firstName} ${lastName}`);
}

Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error("Its not callable");
  }
  context.fn = this;
  context.fn(...args);
};

// Using our custom myCall method
greet.myCall(person, "Hello", "Sharma"); // Output: "Hello, Santosh Sharma"

// apply()
Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error("Its not callable");
  }
  context.fn = this;
  context.fn(...args);
};

// Using our custom myApply method
greet.myApply(person, ["Hello", "Sharma"]); // Output: "Hello, Santosh Sharma"

// Bind

Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error("Its not callable");
  }

  context.fn = this;
  return function (...newArgs) {
    return context.fn(...args, ...newArgs);
  };
};
let results = greet.myBind(person, "Hello");
results("Sharma"); // Output: "Hello, Santosh Sharma"

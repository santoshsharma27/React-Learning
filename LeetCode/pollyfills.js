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
console.log(doubled);

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
console.log(result);

// Reduce()
Array.prototype.myReduce = function (cb, initialValue) {
  let acc = initialValue;
  let startIndex = 0;

  // If initialValue is not provided, set the first element as the initial value and start from index 1
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

Function.prototype.myCall = function (context, ...args) {
  context.myFn = this;
  context.myFn(...args);
};

// Example usage

const person = {
  firstName: "Santosh",
};

function greet(greeting, lastName) {
  return `${greeting}, ${this.firstName} ${this.lastName}`;
}

// Using our custom myCall method
console.log(greet.myCall(person, "Hello", "Sharma")); // Output: "Hello, Santosh Sharma"

// Bind

const person1 = {
  first: "Santosh",
  last: "Sharma",
};

let printName = function (town, state) {
  console.log(this.first + " " + this.last + " " + town + " " + state);
};

Function.prototype.mybind = function (...args) {
  //printName arguments
  let obj = this; //printName
  params = args.slice(1);
  return function (...args2) {
    //printNameFinal arguments
    obj.apply(args[0], [...params, ...args2]);
  };
};
let printNameFinal = printName.mybind(person1, "Hajipur");
printNameFinal("Bihar");

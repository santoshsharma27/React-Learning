// Task1 : Declare a variable using var , assign it a number , and log the value to the console

var a = 135;
console.log(a);

//  Task2 : Declare a variable using let , assign it a string , and log the value to the console

let b = "santosh";
console.log(b);

// Task3 : Declare a variable using const , assign it a boolean value , and log the value to the console

const c = true;
console.log(c);

// Task 4: Create variables of different data types (number,string,boolean,object,array) and log each variable's type using the typeof operator

const rollNum = 10;
const name = "Sandeep";
const isStudy = true;

const person = {
  name: "Sandeep",
  age: 27,
};

const arr = [1, 2, 3, 4, 5];

console.log(typeof rollNum);
console.log(typeof name);
console.log(typeof isStudy);
console.log(typeof person);
console.log(typeof arr);

// Task 5: // Declare a variable using let , assign it an initial value , reassign a new value , and log both values to the console.

let fullName = "Santosh Sharma";
console.log(fullName);
fullName = "Santosh Kumar Sharma";
console.log(fullName);

// Task6 : Try reassigning a variable declared with const and observe the error

const age = 28;
age = 30;
console.log(age); //  TypeError: Assignment to constant variable.

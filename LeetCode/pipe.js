/*A pipe function in JavaScript allows you to compose multiple functions into a single function, where the output of each function 
is passed as the input to the next one

*/

function pipe(...fns) {
  return function (initialValue) {
    return fns.reduce((acc, fn) => fn(acc), initialValue);
  };
}

// Usage

const add = (x) => x + 1; // 5 + 1 = 6
const multiply = (x) => x * 2; // 6 * 2 = 12
const subtract = (x) => x - 3; // 12 - 3 = 9

const pipedFunction = pipe(add, multiply, subtract);
console.log(pipedFunction(5)); // Output: 9

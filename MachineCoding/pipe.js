/*A pipe function in JavaScript allows you to compose multiple functions into a single function, where the output of each function is passed as the input to 
the next one

*/

function pipe(...fns) {
  return function (initialValue) {
    return fns.reduce((acc, fn) => fn(acc), initialValue);
  };
}

// Usage

const add = (x) => x + 1;
const multiply = (x) => x * 2;
const subtract = (x) => x - 3;

const pipedFunction = pipe(add, multiply, subtract);

console.log(pipedFunction(5)); // Output: 9

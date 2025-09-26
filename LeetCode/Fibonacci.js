// Iterative
function fibonacci(num) {
  if (num < 2) {
    return num;
  }

  let n0 = 0;
  let n1 = 1;
  let temp;

  for (let i = 2; i <= num; i++) {
    temp = n0 + n1;
    n0 = n1;
    n1 = temp;
  }

  return temp;
}

console.log(fibonacci(6)); // 8

///////////////////////////////////////

function fibonacci2(n) {
  let fib = [0, 1]; // Initialize the first two numbers of the sequence

  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib;
}

console.log(fibonacci2(6)); // [ 0, 1, 1, 2, 3, 5, 8]

// Recursive is not good approach

function recursiveFibonacci(num) {
  if (num < 2) {
    return num;
  }

  return recursiveFibonacci(num - 1) + recursiveFibonacci(num - 2);
}

console.log(recursiveFibonacci(6)); // 8

// Time Complexity: O(2^n)

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

console.log(fibonacci(6));

///////////////////////////////////////

function fibonacci(n) {
  let fib = [0, 1]; // Initialize the first two numbers of the sequence

  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2]; // Compute the next number as the sum of the previous two
  }

  return fib.slice(0, n); // Return the sequence up to 'n' elements
}

// Recursive

function recursiveFibonacci(num) {
  if (num < 2) {
    return num;
  }

  return recursiveFibonacci(num - 1) + recursiveFibonacci(num - 2);
}

console.log(recursiveFibonacci(6));

// Fibonacci numbers with a time complexity of O(n)

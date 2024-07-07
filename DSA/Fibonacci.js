function fibonacci(num) {
  const fib = [0, 1];

  for (let i = 2; i < num; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib;
}

console.log(fibonacci(5));

// Recursive

function recursiveFibonacci(num) {
  if (num < 2) {
    return num;
  }

  return recursiveFibonacci(num - 1) + recursiveFibonacci(num - 2);
}

console.log(recursiveFibonacci(6));

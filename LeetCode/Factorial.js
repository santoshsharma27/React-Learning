function factorial(num) {
  if (num === 0) return 1;

  let result = 1;

  for (let i = 2; i <= num; i++) {
    result *= i;
  }

  return result;
}

console.log(factorial(5));

// Recursive

function recursiveFactorial(num) {
  if (num === 0) return 1;
  return num * recursiveFactorial(num - 1);
}

console.log(recursiveFactorial(5));

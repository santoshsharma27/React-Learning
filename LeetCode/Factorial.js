function factorial(num) {
  if (num === 0) return 1;

  let fact = 1;

  for (let i = 2; i <= num; i++) {
    fact *= i;
  }

  return fact;
}

console.log(factorial(5));

// Recursive

function recursiveFactorial(num) {
  if (num === 0) return 1;
  return num * recursiveFactorial(num - 1);
}

console.log(recursiveFactorial(5));

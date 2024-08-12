// Iterative
function fibonacci(num) {
  let n0 = 0;
  let n1 = 1;
  let temp;

  for (let i = 0; i < num; i++) {
    temp = n0 + n1;
    n0 = n1;
    n1 = temp;
  }

  return n0;
}

console.log(fibonacci(6));

// Recursive

function recursiveFibonacci(num) {
  if (num < 2) {
    return num;
  }

  return recursiveFibonacci(num - 1) + recursiveFibonacci(num - 2);
}

console.log(recursiveFibonacci(6));

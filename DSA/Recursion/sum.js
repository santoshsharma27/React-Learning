function sum(num) {
  if (num === 1) {
    return 1;
  }
  return num + sum(num - 1);
}

console.log(sum(5));

// Iterative

function sum2(num) {
  let res = 0;
  for (let i = 1; i <= num; i++) {
    res += i;
  }

  return res;
}

console.log(sum2(5));

// Using reduce

function sum3(...num) {
  return num.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum3(1, 2, 3, 4, 5));

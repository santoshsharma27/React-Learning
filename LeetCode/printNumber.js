function printNumber(min, max) {
  if (min > max) {
    return;
  }

  printNumber(min + 1, max);
  console.log(min);
}

printNumber(1, 5); // 5,4,3,2,1

console.log("================");

function printNumber2(min, max) {
  if (min > max) {
    return;
  }
  console.log(min);
  printNumber2(min + 1, max);
}

printNumber2(1, 5); // 1,2,3,4,5

function matrix(arr) {
  let leftDiagonal = 0;
  let rightDiagonal = 0;

  for (let i = 0; i < arr.length; i++) {
    leftDiagonal += arr[i][i];
    rightDiagonal += arr[i][arr.length - 1 - i];
  }

  return Math.abs(leftDiagonal - rightDiagonal);
}

const arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

console.log(matrix(arr)); // 15

/*
leftDiagonal diagonal: 11 + 5 + (-12) = 4

rightDiagonal diagonal: 4 + 5 + 10 = 19

→ Absolute difference = |4 - 19| = 15

*/

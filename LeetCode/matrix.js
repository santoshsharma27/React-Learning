function matrix(arr) {
  let leftDiagonal = 0;
  let rightDiagonal = 0;
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) {
        leftDiagonal += arr[i][j];
      }
      if (i + j === n - 1) {
        rightDiagonal += arr[i][j];
      }
    }
  }

  return Math.abs(leftDiagonal - rightDiagonal);
}

const arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

console.log(matrix(arr));

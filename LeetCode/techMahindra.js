function printNumber(n) {
  for (let i = 1; i <= n; i++) {
    let result = "";
    for (let j = n; j > n - i; j--) {
      result += j;
    }
    console.log(result);
  }
}

printNumber(5);

/*
5
54
543
5432
54321
*/

function printNumber2(n) {
  for (let i = 1; i <= n; i++) {
    let result = "";
    for (let j = 1; j <= i; j++) {
      result += j;
    }
    console.log(result);
  }
}

printNumber2(5);

/*
1
12
123
1234
12345
*/

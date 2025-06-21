function first(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row += "*";
    }
    console.log(row);
  }
}

// first(4);

/*
 ****
 ****
 ****
 ****
 */

function second(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row += "*";
    }
    console.log(row);
  }
}

// second(4);

/*

 *
 **
 ***
 ****
 */

function third(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += j;
    }
    console.log(row);
  }
}

// third(5);

/*
1
12
123
1234
12345
*/

function four(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += i;
    }
    console.log(row);
  }
}

// four(5);

/*
1
22
333
4444
55555
*/

function five(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - i; j++) {
      row += j + 1;
    }
    console.log(row);
  }
}

// five(5);

/*
12345
1234
123
12
1
*/

function six(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - i; j++) {
      row += "*";
    }
    console.log(row);
  }
}

// six(5);

/*

 *****
 ****
 ***
 **
 *
 
 */

function seven(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
      row += " ";
    }
    for (let k = 1; k <= i; k++) {
      row += "*";
    }
    console.log(row);
  }
}

seven(5);

/*

    *
   **
  ***
 ****
*****

*/

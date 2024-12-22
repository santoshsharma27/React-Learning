// Asked in TCS interview

function printTriangle(rows) {
  for (let i = 1; i <= rows; i++) {
    let spaces = "";
    let stars = "";

    // Generate spaces
    for (let j = 1; j <= rows - i; j++) {
      spaces += " ";
    }

    // Generate stars
    for (let k = 1; k <= 2 * i - 1; k++) {
      stars += "*";
    }

    console.log(spaces + stars);
  }
}

// Call the function with the desired number of rows
printTriangle(5);

/*

    *
   ***
  *****
 *******
*********

*/

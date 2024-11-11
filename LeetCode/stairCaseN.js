/*
Here's a JavaScript program to print a staircase of size n. In this staircase, each row will have spaces on the left and # 
characters on the right, forming a right-aligned staircase pattern.

*/

function staircase(n) {
  for (let i = 1; i <= n; i++) {
    // Create a string with `n - i` spaces followed by `i` hashes
    let row = " ".repeat(n - i) + "#".repeat(i);
    console.log(row);
  }
}

// Example usage:
staircase(5);
staircase(6);

// Output for n = 5:
//     #
//    ##
//   ###
//  ####
// #####

// Output for n = 6:
//      #
//     ##
//    ###
//   ####
//  #####
// ######

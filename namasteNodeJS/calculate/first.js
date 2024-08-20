console.log("Code is executed from first file");
const x = 100;

function multiply(a, b) {
  console.log(a * b);
}

module.exports = { x, multiply };

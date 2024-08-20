// const { x } = require("./calculate/first");
// const { sum } = require("./calculate/second");

// import { x } from "./first.js";
// import { sum } from "./second.js";

const { sum, multiply, x } = require("./calculate");

console.log("Hi");
const a = 10;
const b = 20;
// console.log(global);
// console.log(global === this); // false
// console.log(this); // {}
// console.log(globalThis === global); // true

console.log(x);
sum(a, b);
multiply(a, b);

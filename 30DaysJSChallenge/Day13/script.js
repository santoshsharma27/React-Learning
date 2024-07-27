// Modules

import randomNumber, { add, person } from "./other.js";
import * as All from "./other.js";

// Task 1

console.log(add(13, 5));

// Task 2

console.log(person.name);
console.log(person.greet());

// Task 4

console.log(randomNumber());

// Task 5: Import the entire module as object in another script

console.log(All.add(13, 5));

// Task 6

import cloneDeep from "lodash-es";

const state = {
  cart: [
    { product: "bread", quantity: 5 },
    { product: "pizza", quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}

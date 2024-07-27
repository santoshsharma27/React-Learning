// Exporting Module

export const person = {
  name: "Santosh Sharma",
  age: 29,
  city: "Hajipur",

  greet: function () {
    return `Good Evening ${this.name}`;
  },
};

export const add = (a, b) => a + b;
export const mul = (a, b) => a * b;
export const div = (a, b) => a / b;
export const sub = (a, b) => a - b;

export default function randomNumber() {
  return Math.floor(Math.random() * 10);
}

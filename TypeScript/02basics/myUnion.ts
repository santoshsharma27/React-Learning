// A union type in TypeScript allows a variable to hold multiple types. You define it using the | (pipe) operator.

let score: number | string = 33;
score = 44;
score = "55";

type User = {
  name: string;
  id: number;
};

type Admin = {
  userName: string;
  id: number;
};

let santosh: User | Admin = { name: "santosh", id: 334 };

santosh = { userName: "Santosh Sharma", id: 334 };

function display(value: string | number) {
  if (typeof value === "string") {
    console.log("String:", value.toUpperCase());
  } else {
    console.log("Number:", value.toFixed(2));
  }
}

display("santosh"); // Output: String: SANTOSH
display(42.567); // Output: Number: 42.57

// Array

const data: number[] = [1, 2, 3];
const data2: string[] = ["Santosh", "Kumar", "Sharma"];
const data3: (number | string | boolean)[] = [
  "Santosh",
  "Kumar",
  "Sharma",
  4,
  true,
];

let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle";
// seatAllotment = "crew" // not allowed

export {};

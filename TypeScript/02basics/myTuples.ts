// const user: (number | string)[] = ["Santosh", 1];

const user: [string, number, boolean] = ["Santosh", 1, true];

let rgb: [number, number, number] = [255, 123, 112];

type User = [number, string];

const newUser: User = [123, "Santosh"];

// const newUser: User = ["Santosh",123];

// With Optional and Rest Elements
type Person = [string, number?, ...boolean[]];

let p1: Person = ["Bob"];
let p2: Person = ["Alice", 30, true, false];

export {};

/*
Tuples allow us to define a fixed-length array with known types at each index.
*/

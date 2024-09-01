// const person = {
//   firstName: "Santosh",
//   lastName: "Sharma",
//   age: 29,
//   city: "Hajipur",
//   state: "Bihar",
//   isWorking: true,
//   fullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// console.log(person);
// console.log(person.firstName);
// console.log(person["firstName"]);

// Object using new keyword:

// const person = new Object();
// person.firstName = "Santosh";
// person.lastName = "Sharma";
// person.age = 29;
// person.city = "Hajipur";
// person.state = "Bihar";
// person.isWorking = true;
// person.fullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };
// console.log(person);

// Object using Constructor method

function Person(firstName, lastName, city, state) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.city = city;
  this.state = state;
  this.age = 21;
}

const santosh = new Person("Santosh", "Sharma", "Hajipur", "Bihar");
const sandeep = new Person("Sandeep", "Kumar", "Hajipur", "Bihar");

console.log(santosh);
console.log(sandeep);

delete santosh.age; // will delete age property from santosh object
console.log(santosh);

// Object, keys

console.log(Object.keys(sandeep));

// Object values

console.log(Object.values(sandeep));

// When we freeze any object we cannot do anything in that object: adding, deleting modifications not allowed
// Object.freeze(santosh);

// When we seal any object we cannot add and delete any property, but we can modify any property
// Object.seal(santosh);

// will prints object keys
for (const key in santosh) {
  console.log(key);
}

// will prints object values
for (const value in santosh) {
  console.log(santosh[value]);
}

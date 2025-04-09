const user = {
  name: "Santosh",
};

const b = user;

b.name = "Sandeep";

console.log(user.name); // Sandeep
console.log(b.name); // Sandeep

// Fix Using spread operator or Object.assign

const santosh = {
  city: "Bangalore",
};

const c = { ...santosh };

c.city = "Hajipur";

console.log(santosh.city); // Bangalore
console.log(c.city); // Hajipur

// Using Object.assign

const person = {
  name: "Tara",
};

const d = Object.assign({}, person);

d.name = "Sintoo";

console.log(person.name); // Tara
console.log(d.name); // Sintoo

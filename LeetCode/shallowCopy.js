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

const sandeep = { ...santosh };

sandeep.city = "Hajipur";

console.log(santosh.city); // Bangalore
console.log(sandeep.city); // Hajipur

// Using Object.assign

const person = {
  name: "Tara",
};

const final = Object.assign({}, person);

final.name = "Sintoo";

console.log(person.name); // Tara
console.log(final.name); // Sintoo

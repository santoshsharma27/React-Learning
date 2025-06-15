// INPUT

let students = [
  { name: "alix", age: 21 },
  { name: "john", age: 22 },
  { name: "dust", age: 21 },
  { name: "flae", age: 25 },
  { name: "alison", age: 22 },
];

// OUTPUT

// {
//     '21': [ { name: 'alix', age: 21 }, { name: 'dust', age: 21 } ],
//     '22': [ { name: 'john', age: 22 }, { name: 'alison', age: 22 } ],
//     '25': [ { name: 'flae', age: 25 } ]
//   }

let output = {};

for (let i = 0; i < students.length; i++) {
  if (output[students[i].age]) {
    output[students[i].age].push(students[i]);
  } else {
    output[students[i].age] = [students[i]];
  }
}

console.log(output);

// ===================================

const input = [
  { name: "jaya", score: [2, 4, 1, 2] },
  { name: "jay", score: [1, 4, 1, 2] },
  { name: "jazz", score: [1, 1, 1, 2] },
];

function calculateAverageScores(data) {
  const output = {};

  data.forEach((person) => {
    const total = person.score.reduce((acc, curr) => acc + curr, 0);
    const average = total / person.score.length;
    output[person.name] = average.toFixed(1);
  });

  return output;
}

const result = calculateAverageScores(input);

console.log([result]); // [ { jaya: '2.3', jay: '2.0', jazz: '1.3' } ]

// =====================
const arr1 = [2, 5, 3, 21];
const arr2 = [5, 3, 21, 22];
const outputArray =
  arr1.length === arr2.length && arr2.every((item) => arr1.includes(item));
console.log(outputArray);

// Capital first letter of each word

function capitalFirstLetter(str) {
  if (str.includes(" ")) {
    const output = str
      .split(" ")
      .map((word) => word.slice(0, 1).toUpperCase() + word.slice(1));
    return output.join(" ");
  } else {
    return str.slice(0, 1).toUpperCase() + str.slice(1);
  }
}

console.log(capitalFirstLetter("santosh sharma"));
console.log(capitalFirstLetter("sandeep"));

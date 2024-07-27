// Classes

// Task 1

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Good Evening ${this.name} and your age is ${this.age}`;
  }
}

const santosh = new Person("Santosh", 29);
console.log(santosh.greet());

// Task 2

Person.updateAge = function (newAge) {
  this.age = newAge;
  return `new age is ${this.age}`;
};

console.log(Person.updateAge(30));

// Task 3

class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
  }

  getStudentId() {
    return `studentId :  ${this.studentId}`;
  }
}

const ram = new Student("Ram", 21, 1234);
console.log(ram.studentId);
console.log(ram.getStudentId());

// Task 4

class Student1 extends Person {
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
  }

  getStudentId() {
    return `studentId :  ${this.studentId}`;
  }

  greet() {
    return `Good Evening ${this.name} and your age is ${this.age} and student Id is ${this.studentId}`;
  }
}

const sandeep = new Student1("Sandeep", 25, 1111);
console.log(sandeep.greet());

// Task 5

class Person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Good Evening ${this.name} and your age is ${this.age}`;
  }

  // Static method
  static hey() {
    console.log("Hey there 👋");
  }
}

Person2.hey();

// Task 6

class StudentCl {
  static studentCount = 0; // Static property to keep track of the number of students

  constructor(name, age) {
    this.name = name;
    this.age = age;
    StudentCl.studentCount++;
  }

  static getStudentCount() {
    return `Total number of students: ${StudentCl.studentCount}`;
  }
}

const shyam = new StudentCl("Shyam", 25);
const john = new StudentCl("John", 35);

console.log(StudentCl.getStudentCount());

// Task 7

class Person3 {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const tara = new Person3("Tara", "Shankar");
console.log(tara.fullName);

// Task 8

class Person4 {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(name) {
    const [firstName, lastName] = name.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const jonas = new Person4("Jonas", "Kumar");
console.log(jonas.fullName);
Person4.fullName = "Santosh Sharma";
console.log(Person4.fullName);

// Task 9

class Account {
  // private fields
  #balance;
  constructor(balance) {
    this.#balance = balance;
  }

  deposit(value) {
    this.#balance += value;
  }

  withdraw(value) {
    this.#balance -= value;
  }

  getBalance() {
    return this.#balance;
  }
}

// Task 10

const acc1 = new Account(100);

acc1.deposit(50);

console.log(acc1.getBalance());

acc1.withdraw(70);

console.log(acc1.getBalance());

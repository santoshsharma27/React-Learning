// Objects

// Task 1: Create an object representing a book with properties like, title, author and year and log the object to the console.

const book = {
  title: "My book",
  author: "Santosh",
  year: 2024,
};

console.log(book);

// Task 2: Access and log the title and author properties of the book object.

console.log(book.title);
console.log(book["author"]);

// Task 3: Add a method to the book object that return a string with the book's title and author, and log the result of calling this method.

book.details = function () {
  return `book title is ${this.title} and author is ${this.author}`;
};

console.log(book.details());

// Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.

book.updateYear = function (year) {
  book.year = year;
};

book.updateYear(2025);

console.log(book);

// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.

const library = {
  name: "My Library",
  books: [
    {
      title: "book 2",
      year: 2020,
    },
    {
      title: "book 3",
      year: 2021,
    },
    {
      title: "book 4",
      year: 2022,
    },
  ],
};

console.log(library);

// Task 6: Access and log the name of the library and the titles of all the books in the library.
console.log(library.name);

library.books.forEach((book) => console.log(book.title));

// Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.

book.detail2 = function () {
  return `book title is ${this.title} and author is ${this.year}`;
};

console.log(book.detail2());

// Task 8: Use a for...in loop  iterate over the properties of the book object and log each property and its value.

for (const key in book) {
  console.log(key, book[key]);
}

// Task 9: Use Object.keys and object.values methods to log all the keys and values of the book object.

console.log(Object.keys(book));

console.log(Object.values(book));

// Regular Expression

// Task 1: Match all occurrences of the word "JavaScript" in a string
function task1() {
  let text = "JavaScript is great. I love JavaScript!";
  let regex = /JavaScript/g;
  let matches = text.match(regex);
  console.log(matches);
}

task1();

// Task 2: Match all digits in a string

function task2() {
  let text = "There are 123 apples and 456 oranges.";
  let regex = /\d+/g;
  let matches = text.match(regex);
  console.log(matches);
}

task2();

// Task 3: Match all words starting with a capital letter

function task3() {
  let text = "This is a Test. Hello world!";
  let regex = /\b[A-Z][a-z]*\b/g;
  let matches = text.match(regex);
  console.log(matches);
}

task3();

// Task 4: Match all sequences of one or more digits

function task4() {
  let text = "123 apples, 456 oranges , and 789 bananas.";
  let regex = /\d+/g;
  let matches = text.match(regex);
  console.log(matches);
}

task4();

// Task 5: Capture the area code, central office code, and line number from a US phone number

function task5() {
  const text = "(123) 456-7890";
  let regex = /\((\d{3})\)\s(\d{3})-(\d{4})/;
  let matches = text.match(regex);
  console.log(matches);
}

task5();

// Task 6: Capture the username and domain from an email address.

function task6() {
  let text = "example@example.com";
  let regex = /(\w+)@(\w+\.\w+)/;
  let matches = text.match(regex);
  console.log(matches);
}

task6();

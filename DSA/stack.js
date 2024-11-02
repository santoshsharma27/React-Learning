// LIFO [Last In First Out]
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack is Empty";
    }
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return "Stack is Empty";
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }

  contains(element) {
    return this.items.includes(element);
  }

  reverse() {
    return this.items.reverse();
  }

  printStack() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + "\n";
    }
    return str;
  }

  display() {
    return this.items;
  }
}

// Usage

const stack = new Stack();
stack.push(5);
stack.push(6);
stack.push(7);

console.log(stack.printStack()); // Prints 5, 6, 7 each on a new line
console.log(stack.display()); // [5, 6, 7]

console.log(stack.peek()); // 7
console.log(stack.pop()); // 7
console.log(stack.reverse()); // [6, 5]
console.log(stack.isEmpty()); // false
console.log(stack.size()); // 2
console.log(stack.contains(51)); // false

stack.clear();
console.log(stack.isEmpty()); // true
console.log(stack.display()); // []

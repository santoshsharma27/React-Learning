// FIFO [First In First Out]

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(data) {
    this.items.push(data);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  front() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[0];
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }

  display() {
    return this.items;
  }

  printQueue() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
    }
    return str;
  }
}

// Usage

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.printQueue()); // 10 20 30
console.log(queue.display()); // [10, 20, 30]

queue.dequeue();
console.log(queue.printQueue()); //  20 30

queue.clear();
console.log(queue.display()); // []
console.log(queue.isEmpty()); // true

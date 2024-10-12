class PriorityQueue {
  constructor() {
    this.items = [];
  }

  enqueue(element, priority) {
    const queueElement = { element, priority };
    let added = false;
    for (let i = 0; i < this.items.length; i++) {
      if (priority < this.items[i].priority) {
        this.items.splice(i, 0, queueElement);
        added = true;
        break;
      }
    }

    if (!added) {
      this.items.push(queueElement);
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Priority Queue is empty";
    }
    return this.items.shift().element; // first item is object
  }

  front() {
    if (this.isEmpty()) {
      return "Priority Queue is empty";
    }
    return this.items[0].element;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    return this.items.length === 0;
  }

  display() {
    return this.items;
  }
}

// Usage

const priorityQueue = new PriorityQueue();
priorityQueue.enqueue("Task A", 2);
priorityQueue.enqueue("Task B", 1);
priorityQueue.enqueue("Task C", 3);

console.log(priorityQueue.display());

console.log(priorityQueue.front()); // Task B

priorityQueue.dequeue();
console.log(priorityQueue.front()); // Task A
console.log("Size", priorityQueue.size()); //2

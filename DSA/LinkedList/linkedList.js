class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Display all nodes in the list
  print() {
    if (!this.head) {
      console.log("List is empty");
      return;
    }

    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  // Method to add a new node at the beginning of the list
  insertAtBeginning(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  // Method to add a new node at the end of the list
  insertAtEnd = function (data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  };

  // Method to insert a new node at a specific index
  insert(data, index) {
    if (index < 0) {
      console.log("Index out of range");
      return;
    }

    if (index === 0) {
      this.prepend(data);
      return;
    }

    const node = new Node(data);
    let current = this.head;
    let previous = null;
    let currentIndex = 0;

    while (current && currentIndex < index) {
      previous = current;
      current = current.next;
      currentIndex++;
    }

    if (currentIndex !== index) {
      console.log("Index out of range");
      return;
    }

    node.next = current;
    previous.next = node;
  }

  // Delete the first node
  deleteFirstNode = function () {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  };

  // Delete the last node
  deleteLastNode = function () {
    if (!this.head) {
      return; // Nothing to delete because list is empty
    }

    if (!this.head.next) {
      this.head = null; // If there is only one node
      return;
    }

    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }

    current.next = null; // Remove the last node
  };

  // Reverse the list
  reverse() {
    let prev = null;
    let current = this.head;
    let next = null;

    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.head = prev;
  }
}

// Usage
const list = new LinkedList();
list.insertAtBeginning(10);
list.insertAtBeginning(20);
list.insertAtBeginning(30);

list.print(); // Output: 30, 20, 10
list.reverse();
console.log("==============");
list.print();

console.log("==============");

list.deleteFirstNode();
list.print(); // Output: 20, 10

console.log("==============");

list.deleteLastNode();
list.print(); // Output: 20

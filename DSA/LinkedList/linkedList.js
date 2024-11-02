class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
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
}

// Insert at the beginning
LinkedList.prototype.insertAtBeginning = function (data) {
  const newNode = new Node(data);
  newNode.next = this.head;
  this.head = newNode;
};

// Insert at the end
LinkedList.prototype.insertAtEnd = function (data) {
  const newNode = new Node(data);
  if (!this.head) {
    this.head = newNode;
    return;
  }
  let last = this.head;
  while (last.next) {
    last = last.next;
  }
  last.next = newNode;
};

// Insert after a given node
LinkedList.prototype.insertAfter = function (prevNode, data) {
  if (!prevNode) {
    console.log("The given prev node cannot be null");
    return;
  }

  const newNode = new Node(data, prevNode.next);
  prevNode.next = newNode;
};

// Delete the first node
LinkedList.prototype.deleteFirstNode = function () {
  if (!this.head) {
    return;
  }
  this.head = this.head.next;
};

// Delete the last node
LinkedList.prototype.deleteLastNode = function () {
  if (!this.head) {
    return; // Nothing to delete because list is empty
  }

  if (!this.head.next) {
    this.head = null; // If there is only one node
    return;
  }

  let secondLast = this.head;
  while (secondLast.next.next) {
    secondLast = secondLast.next;
  }

  secondLast.next = null; // Remove the last node
};

// Usage
const list = new LinkedList();
list.insertAtBeginning(10);
list.insertAtBeginning(20);
list.insertAtBeginning(30);

list.print(); // Output: 30, 20, 10

console.log("==============");

list.deleteFirstNode();
list.print(); // Output: 20, 10

console.log("==============");

list.deleteLastNode();
list.print(); // Output: 20

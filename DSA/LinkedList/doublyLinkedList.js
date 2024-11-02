class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Insert after a given node
  insertAfterNode(prevNode, data) {
    if (prevNode === null) {
      console.log("The given previous node cannot be null.");
      return;
    }

    const newNode = new Node(data);
    newNode.next = prevNode.next;
    newNode.prev = prevNode;

    if (prevNode.next !== null) {
      prevNode.next.prev = newNode;
    }

    prevNode.next = newNode;

    if (prevNode === this.tail) {
      this.tail = newNode; // Update tail if inserted after the last node
    }
  }

  // Insert at the beginning
  insertAtBeginning(data) {
    const newNode = new Node(data);

    if (this.head !== null) {
      newNode.next = this.head;
      this.head.prev = newNode;
    } else {
      // List is empty, so the new node is also the tail
      this.tail = newNode;
    }

    this.head = newNode;
  }

  // Insert at the end
  insertAtEnd(data) {
    const newNode = new Node(data);

    if (this.tail === null) {
      // List is empty, so the new node is both the head and tail
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode; // Update the tail pointer
    }
  }

  // Delete the first node
  deleteFirstNode() {
    if (this.head === null) {
      console.log("The list is empty. Nothing to delete.");
      return;
    }

    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
  }

  // Delete the last node
  deleteLastNode() {
    if (this.tail === null) {
      console.log("The list is empty. Nothing to delete.");
      return;
    }

    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
  }

  // Reverse the doubly linked list
  reverse() {
    let current = this.head;
    let temp = null;

    // Swap next and prev pointers for all nodes
    while (current !== null) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      current = current.prev;
    }

    // Update the head and tail pointers
    if (temp !== null) {
      this.tail = this.head;
      this.head = temp.prev;
    }
  }

  // Display the list
  print() {
    let current = this.head;
    const result = [];
    while (current !== null) {
      result.push(current.data);
      current = current.next;
    }
    console.log(result.join(" <-> ")); // Use arrows to represent links between nodes
  }
}

// Usage

const list = new DoublyLinkedList();
list.insertAtBeginning(10);
list.insertAtBeginning(20);
list.insertAtBeginning(30);
list.print(); // Output: 30 <-> 20 <-> 10
console.log("==============");

list.insertAtEnd(40);
list.insertAtEnd(50);
list.print(); // Output: 30 <-> 20 <-> 10 <-> 40 <-> 50
console.log("==============");

const node = list.head.next; // Assume we want to insert after the node with data 20
list.insertAfterNode(node, 25);
list.print(); // Output: 30 <-> 20 <-> 25 <-> 10 <-> 40 <-> 50
console.log("==============");

list.deleteFirstNode();
list.print(); // Output: 20 <-> 25 <-> 10 <-> 40 <-> 50
console.log("==============");

list.deleteLastNode();
list.print(); // Output: 20 <-> 25 <-> 10 <-> 40

list.reverse();
console.log("Reversed list:");
list.print(); // Output: 40 <-> 10 <-> 25 <-> 20

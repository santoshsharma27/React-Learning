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
  }

  // Delete the first node in the list
  deleteFirstNode() {
    if (this.head === null) {
      // If List is empty
      console.log("The list is empty. Nothing to delete.");
      return;
    }

    if (this.head === this.tail) {
      // If there is only one node in the list
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next; // Move the head pointer to the next node
      this.head.prev = null;
    }
  }

  // Delete the last node in the list
  deleteLastNode() {
    if (this.tail === null) {
      // If List is empty
      console.log("The list is empty. Nothing to delete.");
      return;
    }
    if (this.head === this.tail) {
      // If there is only one node in the list
      this.head = null;
      this.tail = null;
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

    // Update the head to point to the last node, which is now the new head
    if (temp !== null) {
      this.tail = this.head;
      this.head = temp.prev;
    }
  }

  // Display the list
  print() {
    let current = this.head;
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }
}

// Method to add a new node at the beginning of the list

DoublyLinkedList.prototype.insertAtBeginning = function (data) {
  const newNode = new Node(data);

  if (this.head !== null) {
    // List is not empty
    newNode.next = this.head; // New node becomes head
    this.head.prev = newNode; // Attach new node on previous node
  }

  // If List is empty
  this.head = newNode;

  if (this.tail === null) {
    this.tail = newNode;
  }
};

// Method to add a new node at the end of the list

DoublyLinkedList.prototype.insertAtEnd = function (data) {
  const newNode = new Node(data);

  if (this.head === null) {
    // The list is empty, so the new node becomes the head
    this.head = newNode;
  } else {
    // Traverse to the end of the list
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }

    // Update the last node's next pointer and the new node's prev pointer
    current.next = newNode;
    newNode.prev = current;
  }
};

// Usage

const list = new DoublyLinkedList();
list.insertAtBeginning(10);
list.insertAtBeginning(20);
list.insertAtBeginning(30);
list.print();
console.log("==============");
list.insertAtEnd(30);
list.insertAtEnd(40);
list.insertAtEnd(50);
list.print();
console.log("==============");

const node = list.head.next; // Assume we want to insert after the node with data 10
list.insertAfterNode(node, 15);
list.print();
console.log("==============");

list.deleteFirstNode();
list.print();
console.log("==============");
list.deleteLastNode();
list.print();

list.reverse();
console.log("==============");
list.print();

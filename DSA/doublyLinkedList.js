class Node {
  constructor(data, next = null, prev = null) {
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
  const newNode = new Node(data, this.head, null);

  if (this.head !== null) {
    newNode.next = this.head;
    this.head.prev = newNode; // Attach new node on previous node
  }

  this.head = newNode;

  if (this.tail === null) {
    this.tail = newNode;
  }
};

// Method to add a new node at the end of the list

DoublyLinkedList.prototype.insertAtEnd = function (data) {
  const newNode = new Node(data, null, this.tail);
  if (this.tail !== null) {
    newNode.prev = this.tail;
    this.tail.next = newNode;
  }

  this.tail = newNode;

  if (this.head === null) {
    this.head = newNode;
  }
};

// Usage

const list = new DoublyLinkedList();
list.insertAtBeginning(10);
list.insertAtBeginning(20);
list.insertAtBeginning(30);
list.print();
console.log("==============");
list.insertAtEnd(10);
list.insertAtEnd(20);
list.insertAtEnd(30);
list.print();

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  // Method to add a new node at the beginning of the list
  prepend(data) {
    const newNode = new Node(data);
    node.next = this.head; // The new node's next points to the old head
    this.head = newNode; // The head now points to the new node
    this.size++;
  }

  // Method to add a new node at the end of the list
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

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

    // Traverse to the desired index or the end of the list
    while (current && currentIndex < index) {
      previous = current;
      current = current.next;
      currentIndex++;
    }

    if (currentIndex !== index) {
      console.log("Index out of range");
      return;
    }

    // Insert the new node at the specified index
    node.next = current;
    previous.next = node;
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

const list = new LinkedList();
console.log(list.isEmpty());
console.log(list.getSize());
list.prepend(10);
list.prepend(20);
list.prepend(30);
list.print();
console.log(list.getSize());

list.append(10);
list.append(20);
list.append(30);
list.print(); // 10 20 30
console.log(list.getSize());

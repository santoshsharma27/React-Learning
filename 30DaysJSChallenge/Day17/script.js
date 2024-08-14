// Data Structures

// Task 1 : Implement a Node class to represent in a linked list with properties value and next.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const firstNode = new Node(5);
const secondNode = new Node(10);
firstNode.next = secondNode;

console.log(firstNode.value);
console.log(firstNode.next.value);

// Task 2 : Implement a LinkedList class with methods to add a node to the end , remove a node from the end , and display all nodes.

// Task 3 : Implement a stack class with methods push, pop and peek .

// Task 4 : Use the Stack class to reverse a string by pushing all characters onto the stack and then popping off them .

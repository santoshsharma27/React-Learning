class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Insert a node in the BST
  insert(key) {
    const newNode = new Node(key);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  // Recursive helper function to insert a node in the BST
  insertNode(node, newNode) {
    if (newNode.key < node.key) {
      // Move to the left subtree
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      // Move to the right subtree
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // Delete a node in the BST
  delete(key) {
    this.root = this.deleteNode(this.root, key);
  }

  deleteNode(node, key) {
    if (node === null) {
      return null;
    }
    if (key < node.key) {
      node.left = this.deleteNode(node.left, key);
    } else if (key > node.key) {
      node.right = this.deleteNode(node.right, key);
    } else {
      // Node to be deleted is found
      // Case 1: Node has no children (leaf node)
      if (node.left === null && node.right === null) {
        return null;
      }
      // Case 2: Node has only one child
      if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      } else {
        // Case 3: Node has two children
        let tempNode = this.findMinNode(node.right);
        node.key = tempNode.key;
        node.right = this.deleteNode(node.right, tempNode.data);
      }
    }
    return node;
  }

  // Find the minimum node in a tree (used for finding the in-order successor)
  findMinNode(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }

  // Inorder traversal to display the tree
  inorderTraversal(node) {
    if (node !== null) {
      this.inorderTraversal(node.left);
      console.log(node.key);
      this.inorderTraversal(node.right);
    }
  }

  // Method to start the traversal from the root
  inorder() {
    this.inorderTraversal(this.root);
  }
}

// Example usage
let bst = new BinarySearchTree();
bst.insert(15);
bst.insert(25);
bst.insert(10);
bst.insert(7);
bst.insert(22);
bst.insert(17);
bst.insert(13);
bst.insert(5);
bst.insert(9);
bst.insert(27);

console.log("Original tree:");
bst.inorder(); // Output: 5 7 9 10 13 15 17 22 25 27

bst.delete(15);

console.log("Tree after deleting 15:");
bst.inorder(); // Output: 5 7 9 10 13 17 22 25 27

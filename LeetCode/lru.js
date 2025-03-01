class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
    this.head = null;
    this.tail = null;
  }

  #removeNode(node) {
    if (node.prev) {
      node.prev.next = node.next;
    }
    if (node.next) {
      node.next.prev = node.prev;
    }
    if (node === this.head) {
      this.head = node.next;
    }
    if (node === this.tail) {
      this.tail = node.prev;
    }
    node.prev = null;
    node.next = null;
  }

  #addNodeToFront(node) {
    node.next = this.head;
    node.prev = null;
    if (this.head) {
      this.head.prev = node;
    }
    this.head = node;
    if (!this.tail) {
      this.tail = node;
    }
  }

  get(key) {
    if (!this.map.has(key)) {
      return -1;
    }
    const node = this.map.get(key);
    this.#removeNode(node);
    this.#addNodeToFront(node);
    return node.value;
  }

  put(key, value) {
    if (this.map.has(key)) {
      this.#removeNode(this.map.get(key));
    } else if (this.map.size >= this.capacity) {
      this.map.delete(this.tail.key);
      this.#removeNode(this.tail);
    }
    const newNode = { key, value, prev: null, next: null };
    this.#addNodeToFront(newNode);
    this.map.set(key, newNode);
  }
}

// Example usage:
const cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1)); // returns 1
cache.put(3, 3); // evicts key 2
console.log(cache.get(2)); // returns -1 (not found)
cache.put(4, 4); // evicts key 1
console.log(cache.get(1)); // returns -1 (not found)
console.log(cache.get(3)); // returns 3
console.log(cache.get(4)); // returns 4

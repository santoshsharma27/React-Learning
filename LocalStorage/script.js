const MyLocalStorage = {
  setItem: function (key, value, expiryTime) {
    const now = Date.now();
    const item = {
      value: value,
      expiry: now + expiryTime * 1000, // ttl is in seconds
    };
    localStorage.setItem(key, JSON.stringify(item));
  },

  getItem: function (key) {
    const itemStr = localStorage.getItem(key);

    // If the item doesn't exist, return null
    if (!itemStr) {
      return null;
    }

    const item = JSON.parse(itemStr);
    const now = Date.now();

    // Compare the expiry time of the item with the current time
    if (now > item.expiry) {
      // If the item has expired, remove it from storage and return null
      localStorage.removeItem(key);
      return null;
    }

    return item.value;
  },

  // Optionally, create a method to remove an item
  removeItem: function (key) {
    localStorage.removeItem(key);
  },

  // Periodic cleanup to remove expired items
  cleanup: function () {
    const now = Date.now();
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const itemStr = localStorage.getItem(key);

      if (!itemStr) {
        continue;
      }

      const item = JSON.parse(itemStr);

      if (now > item.expiry) {
        localStorage.removeItem(key);
      }
    }
  },
};

// Start a periodic cleanup every 60 seconds
setInterval(MyLocalStorage.cleanup, 60000);

// Usage example:
MyLocalStorage.setItem("foo", "bar", 10); // Sets 'foo' with value 'bar' that expires in 10 seconds
console.log(MyLocalStorage.getItem("foo")); // Retrieves 'bar' if called within 10 seconds, otherwise null

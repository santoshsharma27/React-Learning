function flattenObject(obj, parentKey = "", separator = ".") {
  const flattened = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = parentKey ? `${parentKey}${separator}${key}` : key;

      if (
        typeof obj[key] === "object" &&
        obj[key] !== null &&
        !Array.isArray(obj[key])
      ) {
        // Recursively flatten nested objects
        Object.assign(flattened, flattenObject(obj[key], newKey, separator));
      } else {
        // Assign the value to the new key
        flattened[newKey] = obj[key];
      }
    }
  }

  return flattened;
}

// Example Usage
const nestedObject = {
  user: {
    name: "John",
    address: {
      street: "123 Main St",
      city: "Springfield",
      zip: {
        code: "12345",
        plus4: "6789",
      },
    },
    age: 30,
  },
  preferences: {
    theme: "dark",
  },
};

const flattened = flattenObject(nestedObject);
console.log(flattened);

/*
{
  'user.name': 'John',
  'user.address.street': '123 Main St',
  'user.address.city': 'Springfield',
  'user.address.zip.code': '12345',
  'user.address.zip.plus4': '6789',
  'user.age': 30,
  'preferences.theme': 'dark'
}
*/

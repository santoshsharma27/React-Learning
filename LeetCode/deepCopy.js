function deepCopy(obj) {
  // Check if the input is an object or an array, otherwise return the value directly
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // Create a new object or array depending on the input type
  const copy = Array.isArray(obj) ? [] : {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      // Recursively copy each property
      copy[key] = deepCopy(obj[key]);
    }
  }
  return copy;
}

const obj = {
  fName: "Santosh",
  lName: "Sharma",
  address: {
    city: {
      cityName: "Bangalore",
      placeToVisit: ["Coorg", "Munnar"],
    },
  },
};

const deepCopiedObj = deepCopy(obj);

// Modifying the deep copy to show that it's indeed a deep copy
deepCopiedObj.address.city.cityName = "Lucknow";
deepCopiedObj.address.city.placeToVisit.push("Nainital");

// Original object remains unchanged
console.log(obj.address.city.cityName); // Output: 'Bangalore'
console.log(obj.address.city.placeToVisit); // Output: ["Coorg", "Munnar"]

// Deep copied object reflects the changes
console.log(deepCopiedObj.address.city.cityName); // Output: 'Lucknow'
console.log(deepCopiedObj.address.city.placeToVisit); // Output: [["Coorg", "Munnar", "Nainital"]
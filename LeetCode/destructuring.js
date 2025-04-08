const user = {
  name: "Santosh",
  address: {
    city: "Bangalore",
    state: "Karnataka",
    coordinates: {
      lat: 12.9716,
      long: 77.5946,
    },
  },
};

const {
  name,
  address: {
    city,
    state,
    coordinates: { lat, long },
  },
} = user;

console.log(name); // Santosh
console.log(city); // Bangalore
console.log(state); // Karnataka
console.log(lat); // 12.9716
console.log(long); // 77.5946

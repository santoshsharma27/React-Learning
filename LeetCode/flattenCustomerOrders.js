function flattenCustomerOrders(customers) {
  const result = [];

  for (const customer of customers) {
    const { username, orders } = customer;

    for (const order of orders) {
      result.push({ username, ...order });
    }
  }
  return result;
}

const customers = [
  {
    username: "Santosh",
    orders: [
      {
        item: "Laptop",
        amount: 30000,
      },
      {
        item: "Phone",
        amount: 15000,
      },
    ],
  },
  {
    username: "Kumar",
    orders: [
      {
        item: "Tablet",
        amount: 20000,
      },
    ],
  },
];

console.log(flattenCustomerOrders(customers));

/*

[
  { username: 'Santosh', item: 'Laptop', amount: 30000 },
  { username: 'Santosh', item: 'Phone', amount: 15000 },
  { username: 'Kumar', item: 'Tablet', amount: 20000 }
]

*/

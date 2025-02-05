// const User = {
//   name: "santosh",
//   email: "santosh37kr",
//   isAvtive: true,
// };

// function createUser({ name: string, isPaid: boolean }) {}

// let newUser = { name: "santosh", isPaid: false, email: "santosh37kr.com" };

// createUser(newUser);

// function createCourse(): { name: string; price: number } {
//   return { name: "reactjs", price: 399 };
// }

// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;
// };

// function createUser(user: User): User{
//     return {name: "", email: "", isActive: true}
// }

// createUser({ name: "", email: "", isActive: true });

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: number;
};

const myUser: User = {
  _id: "1245",
  name: "santosh",
  email: "santosh37.com",
  isActive: false,
};

type cardNumber = {
  cardnumber: string;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

export {};

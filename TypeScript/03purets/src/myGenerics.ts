const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

function identityThree<Type>(val: Type): Type {
  return val;
}

identityThree<boolean>(true);

function identityFour<T>(val: T): T {
  return val;
}

console.log(identityFour<number>(10)); // Returns number
console.log(identityFour<string>("Hello")); // Returns string

interface Bottle {
  brand: string;
  type: number;
}

identityFour<Bottle>({
  brand: "Milton",
  type: 1245,
});

function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

console.log(getFirstElement<string>(["Apple", "Banana"])); // "Apple"
console.log(getFirstElement<number>([10, 20, 30])); // 10

const getMoreSearchProducts = <T>(products: T[]): T => {
  //do some database operations
  const myIndex = 4;
  return products[myIndex];
};

// Generics in Interfaces
interface Box<T> {
  value: T;
}

const numberBox: Box<number> = {
  value: 100,
};

const stringBox: Box<string> = {
  value: "Hello",
};

// Generics in Classes
interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];

  addToCart(product: T): void {
    this.cart.push(product);
  }

  getItems(): T[] {
    return this.cart;
  }
}

const sellable = new Sellable<string>();
sellable.addToCart("Hello");
console.log(sellable.getItems()); // ["Hello"]

const sellable1 = new Sellable<number>();
sellable1.addToCart(100);
console.log(sellable1.getItems()); // [100]

function merge<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

const person = merge({ name: "Santosh" }, { age: 27 });
console.log(person); // { name: "Santosh", age: 27 }

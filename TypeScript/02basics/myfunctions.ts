function addTwo(num: number): number {
  return num + 2;
  // return "hello"
}

addTwo(5);

function getUpper(val: string) {
  return val.toUpperCase();
}

getUpper("santosh");

function signUpUser(name: string, email: string, password: string) {}

signUpUser("santosh", "santosh37kr@gmail.com", "12345678santosh");

const loginUser = (name: string, email: string, isPaid: boolean = false) => {};

loginUser("Santosh", "santosh37kr@gmail.com");

const getHello = (s: string): string => {
  return "";
};

const heros: string[] = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3]

heros.map((hero) => {
  return `hero is ${hero}`;
});

function consoleError(errmsg: string): void {
  console.log(errmsg);
}

function handleError(errmsg: string): never {
  throw new Error(errmsg);
}

export {};

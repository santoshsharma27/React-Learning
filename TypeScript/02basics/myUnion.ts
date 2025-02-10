let score: number | string = 33;
score = 44;
score = "55";

type User = {
  name: string;
  id: number;
};

type Admin = {
  userName: string;
  id: number;
};

let santosh: User | Admin = { name: "santosh", id: 334 };

santosh = { userName: "Santosh Sharma", id: 334 };

// function getDbId(id: number | string){
//     //making some API calls
//     console.log(`DB id is: ${id}`);

// }

getDbId(3);
getDbId("3");

function getDbId(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase();
  }
}

// Array

const data: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];
const data3: (number | string | boolean)[] = ["1", "2", "3", 4, true];

let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle";
// seatAllotment = "crew" // not allowed

export {};

enum Direction {
  North, // 0
  East, // 1
  South, // 2
  West, // 3
}

const dir: Direction = Direction.North; // 0

enum Status {
  SUCCESS = "success",
  ERROR = "error",
  LOADING = "loading",
}

const state: Status = Status.SUCCESS; // "success"

enum ChaiType {
  MASALA = "masala",
  GINGER = "ginger",
}

function makeChai(type: ChaiType) {
  console.log(`Making: ${type}`);
}

makeChai(ChaiType.GINGER); // ginger

/*
Enums are a way to define a set of named constants. They make your code more readable and prevent the use of "magic strings" or "magic numbers".
*/

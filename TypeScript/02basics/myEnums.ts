enum Direction {
  North, // 0
  East, // 1
  South, // 2
  West, // 3
}

const dir: Direction = Direction.North; // 0

enum Status {
  Success = "success",
  Error = "error",
  Loading = "loading",
}

const state: Status = Status.Success; // "success"

/*
Enums are a way to define a set of named constants. They make your code more readable and prevent the use of "magic strings" or 
"magic numbers".

*/

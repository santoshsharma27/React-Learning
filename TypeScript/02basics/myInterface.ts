interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  //   startTrail: () => string;
  startTrail(): string;
  getCoupon(couponName: string, value: number): number;
}

// Adds new property to existing interface
interface User {
  githubToken: string;
}

interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const santosh: Admin = {
  dbId: 111,
  email: "santosh37",
  userId: 123,
  startTrail: () => {
    return "Trail started";
  },
  getCoupon: (name: "santosh", off: 5) => {
    return 5;
  },
  githubToken: "github",
  role: "admin",
};

export {};

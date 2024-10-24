{
  // interface

  type User1 = {
    name: string;
    age: number;
  };

  interface User2 {
    name: string;
    age: number;
  }

  type UserWithRoll1 = User1 & { role: string };

  interface UserWithRoll2 extends User2 {
    role: string;
  }

  const user1: UserWithRoll2 = {
    name: "zesan",
    age: 25,
    role: "CEO",
  };

  type Roll1 = number[];

  interface Roll2 {
    [index: number]: number;
  }

  type Add1 = (num1: number, num2: number) => number;

  interface Add2 {
    (num1: number, num2: number): number;
  }
}

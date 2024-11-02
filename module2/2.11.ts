{
  //utility types
  //Pick

  type Person = {
    name: string;
    age: number;
    email: string;
    contactNo: number;
  };

  type NameAge = Pick<Person, "name" | "age">;
  // Omit
  type ContactInfo = Omit<Person, "name" | "age">;

  // Required
  type PersonRequired = Required<Person>;

  // Partial
  type PersonPartial = Partial<Person>;

  // ReadOnly
  type PersonReadonly = Readonly<Person>;

  const person1: PersonReadonly = {
    name: "zesan",
    age: 25,
    contactNo: 87878,
  };

  type MyObj = Record<string, string>;

  const obj1: MyObj = {
    a: "aa",
    b: "bb",
    c: "cc",
  };

  //
}

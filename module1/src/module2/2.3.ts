{
  // generic type

  type GenericArray<T> = Array<T>;

  const rollNumbers: GenericArray<number> = [2, 4, 6, 8, 10];

  const mentors: GenericArray<string> = ["Mr.", "Md.", "Mrs."];

  const boolArray: GenericArray<boolean> = [true, true, false];

  const user: GenericArray<{ name: string; age: number }> = [
    {
      name: "zesan",
      age: 25,
    },
    {
      name: "Dure Fishan",
      age: 25,
    },
  ];

  // generic tuple

  type GenericTuple<X, Y> = [X, Y];
  const manush: GenericTuple<string, string> = ["Mr. X", "Mrs. Y"];

  const userWithId: GenericTuple<number, { name: string; email: string }> = [
    234,
    { name: mezba, email: "mezba@abedin.com" },
  ];
}

{
  // function with generics

  const createArray = (param: string): string[] => {
    return [param];
  };

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const res1 = createArray("Uganda");
  const resGeneric = createArrayWithGeneric<string>("Bangladesh");

  type User = { id: number; name: string };

  const resGeneric2 = createArrayWithGeneric<User>({
    id: 333,
    name: "Mr. X",
  });

  const createArrayWithTuple = <P, Q>(param1: P, param2: Q): [P, Q] => {
    return [param1, param2];
  };

  const res11 = createArrayWithTuple<string, number>("Bash", 66);
  const res12 = createArrayWithTuple<string, { district: string }>("Asia", {
    district: "Faridpur",
  });

  const addCourseToStudent = <T>(student: T) => {
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    name: "X",
    email: "x@gmail.com",
    language: "C++",
  });

  const student2 = addCourseToStudent({
    name: "Y",
    email: "y@gmail.com",
    devType: "RBC",
  });

  //
}

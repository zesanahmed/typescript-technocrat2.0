{
  // constraints

  const addCourseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    language: string;
  }>({
    id: 222,
    name: "X",
    email: "x@gmail.com",
    language: "C++",
  });

  const student2 = addCourseToStudent({
    id: 333,
    name: "Y",
    email: "y@gmail.com",
    devType: "RBC",
  });

  //
}

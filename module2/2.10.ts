{
  //mapped types

  const arrOfNumbers: number[] = [1, 5, 10];
  //   const arrOfString : string[] = ["1","5", "10"];

  const arrOfString: string[] = arrOfNumbers.map((number) => number.toString());

  console.log(arrOfString);

  type AreaNumber = {
    height: number;
    width: number;
  };

  // keyof AreaNumber => "height" | "width";
  // T = {height : string ; width : number};
  // key["width"]

  // type AreaString = {
  //   height: string;
  //   width: string;
  // };

  type AreaString<T> = {
    [key in keyof T]: T[key];
  };

  const area1: AreaString<{ height: string; width: number }> = {
    height: "100",
    width: 100,
  };

  //
}

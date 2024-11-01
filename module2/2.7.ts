{
  //generic constraint with keyof operator

  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship"; // manually
  type Owner2 = keyof Vehicle;

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const user = {
    name: "Mr. Zesan",
    age: 26,
    address: "Faridpur",
  };

  const car = {
    brand: "BMW",
    release: 2023,
  };

  const res1 = getPropertyValue(user, "address");
  const res2 = getPropertyValue(car, "brand");

  //
}

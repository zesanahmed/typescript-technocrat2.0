{
  //
  // conditional type

  type A1 = null;
  type A2 = boolean;

  type X = A1 extends null ? true : false; // conditional type

  type Y = A1 extends number ? true : A2 extends boolean ? boolean : any;

  type Sheikh = {
    bike: string;
    car: string;
    ship: string;
  };

  // keyof Sheikh "bike" | "car" | "ship"

  // if there is a bike available | a car available | a ship available | a tractor available

  type CheckVehicle<T> = T extends keyof Sheikh ? true : false;

  //   type HasBike = CheckVehicle<"bike">;
  type HasTractor = CheckVehicle<"tractor">;

  //
}

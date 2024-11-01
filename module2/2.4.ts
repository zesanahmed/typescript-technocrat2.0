{
  // interface - generic

  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  type MiWatch = {
    brand: string;
    model: string;
    display: string;
  };

  const poorDeveloper: Developer<MiWatch, null> = {
    name: "Ahmed",
    computer: {
      brand: "Dell",
      model: "Latitude 7390",
      releaseYear: 2019,
    },
    smartWatch: {
      brand: "Mi",
      model: "2CU",
      display: "LED",
    },
  };

  interface AppleWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }

  interface REnfield {
    model: string;
    engineCapacity: string;
  }

  const richDeveloper: Developer<AppleWatch, REnfield> = {
    name: "Islam",
    computer: {
      brand: "Apple",
      model: "F-69",
      releaseYear: 2023,
    },
    smartWatch: {
      brand: "Apple",
      model: "ERT@2",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      model: "Royal Enfield",
      engineCapacity: "350cc",
    },
  };
}

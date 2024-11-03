{
  // oop  -- class

  class Animal {
    // name: string;
    // species: string;
    // sound: string;

    // parameter modifier
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {
      //   this.name = name;
      //   this.species = species;
      //   this.sound = sound;
    }

    makeSound() {
      console.log(`The ${this.name} says ${this.sound}`);
    }
  }

  const dog = new Animal("German Shepard", "Dog", "Ghew Ghew");
  const cat = new Animal("Persian", "Cat", "meaw meaw");
  dog.makeSound();
  cat.makeSound();

  //
}

class Person {
  #name; // Private field

  constructor(name) {
    this.#name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.#name}.`);
  }
}

// Creating an object (instance) of the Person class
var person1 = new Person("Marchilyn Abunda");
person1.greet();

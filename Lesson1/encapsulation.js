class Animal {
  #name;
  constructor(name) {
    this.#name = name;
  }

  setName(val) {
    this.#name = val;
  }
  getName() {
    return this.#name;
  }
}
var animal = new Animal("DOG");
animal.setName("CAT");
console.log(animal.getName());
console.log(animal.name);

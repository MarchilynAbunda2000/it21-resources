class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

class Cat extends Animal {
    speak() {
        console.log(`${this.name} meows.`);
    }
}

const animals = [new Animal('Mammal'), new Dog('Rex'), new Cat('Whiskers')];

animals.forEach(animal => {
    animal.speak();
    // Mammal makes a noise.
    // Rex barks.
    // Whiskers meows.
});
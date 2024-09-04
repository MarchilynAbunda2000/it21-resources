// Class definition
class Person {
    constructor(name, age, occupation) {
        this.name = name;
        this.age = age;
        this.occupation = occupation;
    }

    // Method to display person details
    displayInfo() {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Occupation: " + this.occupation);
    }
}

// Creating an object (instance) of the Person class
var person1 = new Person("Marchilyn Abunda", 24, "Instructor");

// Process and Output
person1.displayInfo();

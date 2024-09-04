
// Class for Car

class Car{
    constructor(color, model, year){
        // These are the Properties of a Car
        this.color = color;
        this.model = model;
        this.year = year;
    }

    // Methods
    start(){
        console.log("The car is starting");
    }

    stop(){
        console.log("The car is stopping");
    }


}

// Let's create Object from the class Car
var car1 = new Car("White", "Ford", 2024);
var car2 = new Car("Red", "Toyota", 2023);

// console.log(car1,  car2);

// car1.start();
 car2.stop();
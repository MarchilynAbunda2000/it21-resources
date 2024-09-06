const prompt = require('prompt-sync')();

// Input
var name = prompt("Enter your name:");
var age = prompt("Enter your age:");

// Output
console.log("Hello, " + name + "!");

// Condition
if(age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}

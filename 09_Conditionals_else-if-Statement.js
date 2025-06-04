// Conditional statements are used to perform different actions based on different conditions.


// else if statement

// Syntax
// if (condition) {
//     block of code to be executed if the condition is true
// }
// else if (condition) {
//     block of code to be executed if the condition is true
// }
// else {
//     block of code to be executed if all the conditions are false
// }

// Example : Write a program to check if the person is valid for driving license or not.

const prompt = require("prompt-sync")();
let age = prompt("Hey! What is  your age ? ");
if (age < 0) {
    console.log("This is the invalid age.");
} 
else if (age < 9 && age > 0) {
    console.log("You are a kid, this is not the valid age for driving license.");
}
else if (age < 18 && age > 9) {
    console.log("You are a kid, this is not the valid age for driving license, you can drive after 18.");
}
else {
    console.log("This is the valid age for driving license.");
}
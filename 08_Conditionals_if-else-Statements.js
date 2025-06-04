// Conditional statements are used to perform different actions based on different conditions.

// if-else statement

// Syntax
// if (condition) {
//     block of code to be executed if the condition is true
// }
// else {
//     block of code to be executed if the condition is false
// }

// Example : Write a program to check if the person is valid for driving license or not.

const prompt = require("prompt-sync")();
let age = prompt("Hey! What is  your age ? ");
if (age > 0) {
    console.log("This is the valid age.");
} 
else {
    console.log("This is not the valid age.");
}
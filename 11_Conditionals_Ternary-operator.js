// Conditional statements are used to perform different actions based on different conditions.

// Ternary operator

// Syntax
// condition ? statement-if-true : statement-if-false

// Example : Write a program to check if the person is valid for driving license or not.

const prompt = require("prompt-sync")();
let age = prompt("Hey! What is  your age ? ");
let result = (age >= 18) ? "This is the valid age for driving license." : "This is not the valid age for driving license.";
console.log(result)
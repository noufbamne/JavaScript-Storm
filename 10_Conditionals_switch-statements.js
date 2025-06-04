// Conditional statements are used to perform different actions based on different conditions.

// switch statement

// Syntax
// switch(expression) {
//     case x:
//         block of code to be executed if expression equals x
//         break;
//     case y:
//         block of code to be executed if expression equals y
//         break;
//     default:
//         block of code to be executed if expression doesn't match any case
// }

// Example : Write a program to check if it is week day or not.

const prompt = require("prompt-sync")();
let day = prompt("Hey! What is the day ? ");
switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        console.log("It is a week day.");
        break;
    case "Saturday":
    case "Sunday":
        console.log("It is a weekend.");
        break;
    default:
        console.log("Invalid day.");
}
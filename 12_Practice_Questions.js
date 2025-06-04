// Q.no-1. Use Logical operator to find whether the age of the perso lies between 10 and 20.
const promt = require ("prompt-sync")();
let age = promt("What is your Age?" );
age = Number.parseInt(age)
if ( age > 10 && age < 20){
    console.log("Yes! You are in the age group of 10 to 20.")
}
else{
    console.log("No! you are not in the group of 10 to 20.")
}

// Q.no-2. Demonstrate the use of switch case statements in Javascript.
const prompt = require ("prompt-sync")();
let a = prompt("What is your Age?" );

switch (a){
    case "10":
        console.log("Yes! You are 10 years old.");
        break; // break statement,if you write this statement, the cases below this will not execute.
    case "20":
        console.log("Yes! You are 20 years old.");
        break;
    default:
        console.log("No! You are not 10 or 20 years old.");
}

// Q.no-3. Write a javascript program to find if the numner is diviible by 2 or 3.
const input = require("prompt-sync")();
let number  = input("Enter the Number to find if it is divisible by 2 or 3 : ");
num = Number.parseInt(number)
if(number % 2 == 0 && number % 3 == 0){
    console.log("Yes, the given number is divisible by 2 or 3.")
}
else {
    console.log("No, the given number is not divisible by 2 or 3.")
}

// Q.no-4. Write a javascript program to find if the numner is diviible by either 2 or 3.
const userinput = require("prompt-sync")();
let num = userinput("Enter the Number to find if it is divisible by 2 or 3 : ");
num = Number.parseInt(num)
if(num % 2 == 0 || num % 3 == 0){
    console.log("Yes, the given number is divisible by 2 or 3.")
}
else {
    console.log("No, the given number is not divisible by 2 or 3.")
}

// Q.no-5. Write a javascript program to print "You can Drive" or "You cannot Drive" based on age being greater than 18 using ternary operator.
const propt = require("prompt-sync")();
let age1 = propt("Hey, What's your age? : ")
let result = ( age1 > 18 ) ? "You can Drive as you are above 18." : "You cannot Drive as you are not above 18."
console.log(result)
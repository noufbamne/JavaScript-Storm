// Q.no 1. Create a variable of tyoe string and try to add number to it.
let a = "Nouf";
let b = 5;
console.log(a + b)

// Q.no 2. use a typeof operator to find the datatype of the string in the last question.
console.log(typeof(a + b))
console.log(typeof(b))

// Q.no 3. Create a const object in Javascript. Can you chnange it to hold a number later?
const x = {
    Name : "Nouf",
    Age : 18,
    Section : "A",
    Roll : 5
}

console.log(x)

// x = 5.....Throws Erorr because x is const
// console.log(x)
// We cannot change the value of const object.

// Q.no 4. Try to add a new key to const object in Problem 3. Were you able to do it?
x['Friend'] = "Sadia"; // X is the refernce of upper x in problem 3.
console.log(x)

// Q.no 5. Write a Js program to create a word meaning dictionary of 5 words.
const dict = {
    Appreciate : "Recognise the full worth of something.",
    Atarakshia : "a state of freedom from emotional disturbance and anxiety.",
    Yakka : "work, especially hard work.",
}

console.log(dict.Yakka)
console.log(dict['Yakka']) // another syntax 

console.log(dict.Appreciate)
console.log(dict['Appreciate']) // another syntax

console.log(dict.Atarakshia)
console.log(dict['Atarakshia']) // another syntax
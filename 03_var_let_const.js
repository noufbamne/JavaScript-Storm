console.log("Javascript 03 :Var, let, const")
// Variables are used to store data values.
// Javascript variables can be declared in 4 ways : 
//  1.automatically
//  2.var 
//  3.let 
//  4.const

// 1.automatically
x = 5;
y = 6;
z = x + y;
console.log(z)

// 2.var

var a = 5;
var b = "Nouf";
var c = null;
var d = undefined;
console.log(a, b, c, d)

// 3.let

let e = 5;
// Updation of let 
e = 8;
let f = "Nouf";
let g = null;
let h = undefined;
console.log(e, f, g, h)

// The value of let can be updated in block and it will remain in that particular block.
{
    let f = "This is the redeclared value of f";
    console.log(f)
}

// 4.const

const i = 5;
const j = "Nouf";
const k = null;
const l = undefined;
console.log(i, j, k, l)

const author = "Nouf";
// let author = "This"; ... Throws an error because constant cannot be changed.
// author = "Not this";... Throws an error because constant cannot be reassigned.
console.log(author)
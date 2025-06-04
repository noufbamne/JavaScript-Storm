/*There are 7 Primitives in Javascript.
NN SS BB U - Primitives
1. Number
2. Null
3. Symbol 
4. String
5. Boolean
6. BigInt 
7. Undefined

Objects are the key-value pairs.
1.Key can be any number or string, etc.
2.Value can be any data type.

There are 7 primitives in Javascript and object is non-primitive dataype in Javascript.*/

// 1. Number
let a = 1;
let b = 2;

// 2. Null
let c = null;

// 3. Symbol
let d = Symbol("This is a nice symbol.");

// 4. String
let e = "Nouf";

// 5. Boolean
let f = true;

// 6. BigInt   
let g = BigInt("547") + BigInt("3");

// 7. Undefined
let h = undefined; //Can also be wriitten as let h;

console.log(a, b, c, d, e, f, g, h)

// Type of variable
console.log(typeof a, typeof b, typeof c, typeof d, typeof e, typeof f, typeof g, typeof h)

// Object in Js 
// Object is a collection of key-value pairs
// Object is a non-primitive data type
const item = {
    "Nouf": true,
    "Sadia": false,
    "Mahin": 67,
    "Nahal": undefined
}
console.log(item["Nouf"], item ["Sadia"], item ["Mahin"], item ["Nahal"])
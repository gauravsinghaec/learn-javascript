// console.log(y); // ReferenceError: Cannot access 'y' before initialization
console.log(s);
const y = 10;
let z = 20;
const test = true;
var s = "Hello";
console.log(typeof x); // undefined
console.log(typeof y); // number
console.log(typeof z); // number

z = "Hello World";

console.log(z, x);

console.log(typeof z); // string

console.log(typeof test); // boolean

console.log("typeof null->", typeof null); // Object

// const a; // Error -> Missing initializer in const declaration
// console.log(typeof a);
let b;
console.log(typeof b);

const arr = [1, 2, 3, 4, 5];
const obj = { a: 10, b: 12, c: 3 };
console.log(arr, typeof arr);
console.log(obj);

var x;
const y = 10;
let z = 20;
const test = true;

console.log(typeof x); // undefined
console.log(typeof y); // number
console.log(typeof z); // number

z = "Hello World";
console.log(typeof z); // string

console.log(typeof test); // boolean

console.log("typeof null->", typeof null); // Object

// const a; // Error -> Missing initializer in const declaration
// console.log(typeof a);
let b;
console.log(typeof b); 


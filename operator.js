// Todo : use w3 school or any other page which you are following as a reference
const x = 10;
const y = x + 20;
let z = x + y;

// ----- Shorthand notation -----

z += 10; // z=z+10

z /= 10; // z=z/10

z %= 3; // z=z%3

z *= 2; // z=z*2

// ----- Comparison Operators -----
// Output all of the comarision is always boolean
// O/p: true/false, x=10, y=30, z=4

console.log(x == y);
console.log(x === y);
x != y;
z !== y;
z > y;
x < y;
undefined >= y;
null <= y;

// ----- (== vs ===) OR (!= vs !==) -----
const a = "10";
const b = 10;
console.log(a == b);
console.log(a === b);

console.log(a != b);
console.log(a !== b);

// -------- Ternary Operator --------- TODO
// (condition) ? true : false
const t = x === y && z === 4 ? "hello" : "world";

if (x === y && z === 4) {
  console.log("hello");
} else {
  console.log("world");
}

// ----- Logical Operators ----- TODO

// ----- Bitwise Operators ----- TODO
//Usage1 find if an number is even or odd
const num = 40;
if (num & 1) {
  //4 = 1-0-0 && 1 = 0-0-1 =  0-0-0 => 0
  console.log("odd");
} else {
  console.log("even");
}

/*
Functions that take in other functions as arguments are called 
higher-order functions(HOF). 

Functions that are passed as arguments to other functions are called 
callback functions.
*/
// A function that takes another function as an argument
function f3() {
  console.log("I am F3");
}
function f4() {
  console.log("I am F4");
}
function f5() {
  console.log("I am F5");
}
function greet(name, callback) {
  console.log("I am F1");
  const t1 = setTimeout(callback, 10000);
  clearTimeout(t1);
  const t2 = setTimeout(f3, 3000); // IIFE
  const t3 = setTimeout(f4, 2000); // IIFE
  const t4 = setTimeout(f5, 4000); // IIFE
  console.log({ t1, t2, t3, t4 });
}

// function greet1(p1, p2) {
//   console.log("Did you understand the lecture?" + p1);
//   // do something here.. API call , 1000 lines
//   p2();
// }

// A callback function
async function sayGoodbye() {
  console.log("I am F2");
}

// greet is HOF and sayGoodbye is callback function
greet("Gaurav", sayGoodbye);

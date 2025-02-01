function start() {
  // Function Declaration/ Definition
  console.log("This is a function"); // statement 1
}

start;

// function invocation or calling the function
start(); //--> this runs line 1 in func Body, i.e statement 1
// o/p->This is a function

function stop() {
  const x = 10; // statement 1
  return x; // statement 2
}

const val1 = stop;
// the above line is equivalent to below lines

// function val1() {
//   const x = 10; // statement 1
//   return x; // statement 2
// }

const val2 = stop();

const val3 = val1(); //--> stop()

// way1 of defining a function
{
  function move() {
    console.log("hello");
  }
}

// way2(Function Expression) of defining a function --
const move = function () {
  console.log("hello");
};
// the above finction definition is equivalent to below
/* 
function move() {
    console.log("hello")
   }
*/

const x = function () {
  // This is an anonymous function
  console.log(10);
  return "Hello";
};

x(); // Function call/ Invoking the function

// IIFE - Immediately Invoked Function Expression

const myName = (function name1() {
  return "Hello";
})();

{
  function name1() {
    return "Hello";
  }

  const myName = name1();
}

// ------------------------------ //

function getName(o) {
  return o.name;
}
const n = getName("hello");
// block 1
{
  const p = { name: "Ima" };
  const n = getName(p);
  console.log("Inside block 1", n);
}
// block 2
{
  const n = getName({ name: "Yuvi" });
  console.log("Inside block 2", n);
}
// block 1 = block 2

console.log(n);

// -------------- Arrow Function ---------------- //

function getName(o) {
  return o.name;
}

const getName = function (o) {
  return o.name;
};

const getName = function somename(o) {
  return o.name;
};

const getName = (o) => {
  return o.name;
};
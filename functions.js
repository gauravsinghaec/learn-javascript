function start() {
  console.log("This is a function"); // statement 1
}

start;

start(); //--> this runs line 1 in func Body, i.e statement 1
// o/p->This is a function

function stop() {
  const x = 10; // statement 1
  return x; // statement 2
}

const val1 = stop;
// the above line is equivalent to below lines
/* 
function val1() {
     const x = 10; // statement 1
     return x; // statement 2
   }
*/

const val2 = stop();

const val3 = val1(); //--> stop()

// way1 of defining a function
// function move() {
//   console.log("hello");
// }

// way2 of defining a function
const move = function () {
  console.log("hello");
};
// the above finction definition is equivalent to below
/* 
function move() {
    console.log("hello")
   }
*/

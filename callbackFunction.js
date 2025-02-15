// A function that takes another function as an argument
// function greet(name, callback) {
//   console.log("Hello " + name);
//   callback();
// }

function greet1(p1, p2) {
  console.log("Did you understand the lecture?" + p1);
  // do something here.. API call , 1000 lines
  p2();
}

// A callback function
function sayGoodbye() {
  console.log("Goodbye!");
}

// Calling the greet function with the sayGoodbye function as a callback
greet("Gaurav", sayGoodbye);

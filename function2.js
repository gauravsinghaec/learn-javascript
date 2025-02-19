/*
 JavaScript functions can:

 - Be stored in variables.
 - Be returned from a function.
 - Be passed as arguments into another function. --> Callback
 - Be stored as property value in an Object -  Method of object

*/

import { divider } from "./moduleNamedExport.js";

divider("Regular Function");
function incrementBy(num, by) {
  return num + by;
}

console.log(incrementBy(20)); // --> NaN

// if by is not given then increment by 50

divider("With ternary operator");
// Done using condition
function incrementByV1(num, by) {
  // if (by) {
  //   return num + by;
  // }
  // return num + 50;
  return by ? num + by : num + 50;
}
console.log(incrementByV1(20, 10));

divider("With Default argument");
function incrementByV2(num, by = 50) {
  return num + by;
}

divider("ABC Function without default argument");
function abc(num) {
  console.log(num);
}
abc();
abc(50);

divider("ABC Function with default argument");
// Function with default argument 20, i.e the default value of parameter num = 20
function abcV1(num = 20) {
  console.log(num);
}

abcV1(); // num(param) value is undefined
abcV1(50);

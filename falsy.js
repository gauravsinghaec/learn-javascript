const x = undefined;
const y = null;
const z = false;
const a = 0;
const b = "";
const c = NaN;
const d = "Hello World";
const e = [];
const f = {};

if (!a) {
  console.log("a is truthy");
} else if (e) {
  console.log("e is truthy");
} else {
  console.log("a & e is falsy");
}
 // ------- TODO: Add your code here, Practice as many combinations as possible ------- //
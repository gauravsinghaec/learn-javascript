// String template literals are defined using backticks ``
const z = 20;
const y = "hello";

// Example 1-

console.log("The value of z = ", z);
console.log("The value of z = " + z);
console.log(`The value of z = ${z}`);

// Example 2-

const newStr = "The value of z = " + z + " and y = " + y;
console.log("The value of z =", z, "and y =", y);
console.log(`The value of z = ${z} and y = ${y}`);

// String interpolation
// Example 3
const candidate = ["Gaurav", "Yuvi", "Rahul", "Rohit"];
const organization = "ABC2";

console.log(`Hello ${candidate[0]}, Welcome to ${organization}!\n`);
console.log("Loops is starting");
for (let i = 0; i < candidate.length; i++) {
  const str = `Hello ${candidate[i]}, Welcome to ${organization}!`;
  console.log(str);
}

// Example 4 -- Multiline strings

console.log("string text line 1\n" + "string text line 2");

console.log(`string text line 1
    string text line 2`);

// Example 5 - We are learning arrow functions, template literal,Object,ternary operator
const isLargeScreen = () => undefined;
const item = { isCollapsed: true };

// -------
const classes1 = `header ${
  isLargeScreen() ? "" : `icon-${item.isCollapsed ? "expander" : "collapser"}`
}`;

// -------
const var1 = item.isCollapsed ? "expander" : "collapser";
const var2 = isLargeScreen() ? "" : `icon-${var1}`;
classes2 = `header ${var2}`;

// classes1 and classes2 are same

// TODO: Convert the classes1  using if else

console.log(classes);

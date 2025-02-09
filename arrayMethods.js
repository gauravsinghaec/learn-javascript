import { divider } from "./moduleNamedExport.js";

const countries = ["Finland", "Sweden", "Norway", {}, [], ""];
console.log(countries);

divider(".push()");
// push(): Adds one or more elements to the end of an array and returns the new length.
const x = countries.push("Denmark");
console.log(countries);
console.log(x);

// pop(): Removes the last element from an array and returns that element.
divider(".pop()");
countries.pop();
console.log(countries);

const poppedElem = countries.pop();
console.log(countries);
console.log({ poppedElem });

// unshift(): Adds one or more elements to the beginning of an array and returns the new length.
divider(".unshift()");
countries.unshift("Iceland");
console.log(countries);

// shift(): Removes the first element from an array and returns that element.
divider(".shift()");
countries.shift();
console.log(countries);

// indexOf() returns -1 if the element is not found
divider(".indexOf()");
const index = countries.indexOf("Norway");
console.log({ index });
const index2 = countries.indexOf("India");
console.log({ index2 });
if (countries.indexOf("India") !== -1) {
  console.log("Element is present");
}
// forEach(): Executes a provided function once for each array element.
countries.forEach((country) => {
  console.log(`Current country is ${country}`);
});
// includes(): Determines whether an array includes a certain element. it returns true or false
let arr9 = [1, 2, 3];
let hasTwo = arr9.includes(2); // hasTwo is true
if (countries.includes("India")) {
  console.log("Element is present");
}

divider("Important Methods");
// filter(): Creates a new array with all elements that pass the test implemented by the provided function.

divider(".filter()");
console.log({ countries });
const filteredCountry = countries.filter((country) => {
  return typeof country === "string";
});
console.log({ filteredCountry });
let arr5 = [1, 2, 3, 4];
let filteredArr = arr5.filter((x) => x % 2 === 0); // filteredArr is [2, 4]

// map(): Creates a new array with the results of calling a provided function on every element in the array.
divider(".map()");
const countriesWithType = countries.map((country) => {
  if (typeof country === "string") {
    return { country, type: typeof country };
  }
});
console.log({ countriesWithType });

let arr4 = [1, 2, 3];
let newArr = arr4.map((x) => x * 2); // newArr is [2, 4, 6]

// find(): Returns the first element in the array that satisfies the provided testing function.
divider(".find()");
let arr8 = [1, 2, 3, 4];
let found = arr8.find((x) => x > 2); // found is 3

// reduce(): Applies a function against an accumulator and each element in the array to reduce it to a single value.
divider(".reduce()");
let arr6 = [1, 2, 3, 4];
let sum = arr6.reduce((acc, x) => acc + x, 0); // sum is 10

// indexOf, includes, .find --> used to search element

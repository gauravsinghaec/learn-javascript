const countries = ["Finland", "Sweden", "Norway", {}, [], ""];
console.log(countries);

// push(): Adds one or more elements to the end of an array and returns the new length.
countries.push("Denmark");
console.log(countries);

// pop(): Removes the last element from an array and returns that element.
countries.pop();
console.log(countries);

// unshift(): Adds one or more elements to the beginning of an array and returns the new length.
countries.unshift("Iceland");
console.log(countries);

// shift(): Removes the first element from an array and returns that element.
countries.shift();
console.log(countries);

// indexOf() returns -1 if the element is not found
const index = countries.indexOf("Norway");
console.log("index of Sweden -> ", index);

// forEach(): Executes a provided function once for each array element.
countries.forEach((country) => {
  console.log(`Current country is ${country}`);
});

// filter(): Creates a new array with all elements that pass the test implemented by the provided function.
const filteredCountry = countries.filter((country) => {
  return typeof country === "string";
});
let arr5 = [1, 2, 3, 4];
let filteredArr = arr.filter((x) => x % 2 === 0); // filteredArr is [2, 4]

// map(): Creates a new array with the results of calling a provided function on every element in the array.
const countriesWithType = countries.map((country) => {
  return { country, type: typeof country };
});
console.log({ countriesWithType });

let arr4 = [1, 2, 3];
let newArr = arr.map((x) => x * 2); // newArr is [2, 4, 6]

// includes(): Determines whether an array includes a certain element.
let arr9 = [1, 2, 3];
let hasTwo = arr.includes(2); // hasTwo is true

// find(): Returns the first element in the array that satisfies the provided testing function.
let arr8 = [1, 2, 3, 4];
let found = arr.find((x) => x > 2); // found is 3

// reduce(): Applies a function against an accumulator and each element in the array to reduce it to a single value.
let arr6 = [1, 2, 3, 4];
let sum = arr.reduce((acc, x) => acc + x, 0); // sum is 10

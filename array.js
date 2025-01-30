const countries = ["Finland", "Sweden", "Norway", {}, [], ""];
console.log(countries);
console.log(countries[0]);
countries.push("Denmark");
console.log(countries);

countries.pop();
console.log(countries);

countries.unshift("Iceland");
console.log(countries);

countries.shift();
console.log(countries);

const index = countries.indexOf("Sweden");
console.log("index of Sweden -> ", index);
if (index !== -1) {
  countries[index] = "Sweden (Updated)";
}
console.log(countries);

const vehicle = { type: "Car", model: "Toyota", year: 2020, new: true };

const keys = Object.keys(vehicle); // ["type", "model", "year", "new"]
const values = Object.values(vehicle); // ["Car", "Toyota", 2020, true]

console.log(keys);

// Tell me the length of the countries array?
const len = countries.length;
console.log("Length of countries array -> ", len);
// Tell me the length of the keys array?

// How to print last country in the countries array?
console.log("Last country in the countries array -> ", countries[len - 4]);
// [ 'Finland', 'Sweden (Updated)', 'Norway', {}, [], '' ]

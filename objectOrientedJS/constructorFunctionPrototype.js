// Constructor functions help create multiple objects with the same structure.
import { divider } from "../moduleNamedExport.js";

// Not all functions are constructor function
divider("Constructor Function without Parameters");
function SoftwareEngineer(name) {
  this.name = name;
}

const a = new SoftwareEngineer("Gaurav");

const b = new SoftwareEngineer("Ima");

console.log(a.prototype);
console.log(b.prototype);

console.log(a.__proto__);
console.log(b.__proto__);

function Animal(name, eyes = 2) {
  this.name = name;
  this.eyes = eyes;
  this.eyesCount = function () {
    return `I have ${this.eyes} eyes`;
  };
}

// // Way1
// {
//   Animal.prototype.getName = function () {
//     return `My name is ${this.name}`;
//   };
// }

// // Way2
Animal.prototype = {
  getName: function () {
    return `My name is ${this.name}`;
  },
};

const cat = new Animal("Cat");
const dog = new Animal("Dog");

divider("Animal Prototype");
console.log(Animal.myProp);
console.log(Animal.prototype);

divider("Cat Instance");
console.log(cat.name);
console.log(cat.eyesCount());
console.log(cat.getName());

divider("Dog Instance");
console.log(dog.eyesCount());
console.log(dog.getName());

console.log("Animal.prototype -->", Animal.prototype);
console.log("cat.__proto__ -->", cat.__proto__);

console.log(cat.hasOwnProperty("eyesCount"));

import { divider } from "../moduleNamedExport.js";
/*
Inheritance in JavaScript is when an object is based on another object. 
Inheritance allows us to reuse existing code, 
having objects take on properties of other objects.

When a function is called as a constructor using the new operator, 
the function creates and returns a new object. This object is secretly 
linked to its constructor's prototype, which is just another object. 
Using this secret link allows an object to access the prototype's 
properties and methods as if it were its own. If JavaScript does 
not find a particular property within an object, it will keep looking 
up the prototype chain, eventually reaching Object() 
(top-level parent) if necessary.

We also looked at a few methods and properties that allow use to check 
the origins and references of objects and their prototypes, namely:

hasOwnProperty()
isPrototypeOf()
Object.getPrototypeOf()
.constructor

*/
divider("Prototype Chain");
const vehicle = { year: 2020, new: true };

function FourWheeler() {
  this.type = "Four Wheeler";
  this.name = "BMW";
}

FourWheeler.prototype = vehicle;

const myCar = new FourWheeler();
console.log(myCar);

console.log("myCar.__proto__ --> ", myCar.__proto__);

// Copy object using Object.assign() that copies all enumerable own properties from one or more source objects to a target object.
const vehicle1 = Object.assign({}, vehicle);
// OR Using spread operator
// const vehicle1 = { ...vehicle };

vehicle1.type = "Two Wheeler";

// Copy object using Object.create() that creates a new object with the specified prototype object and properties.
const vehicle2 = Object.create(vehicle);
console.log({ vehicle2 });

// Secret Link __proto__
console.log("vehicle2.__proto__ -->", vehicle2.__proto__);

vehicle2.engine = "Electric";
vehicle2.type = "Four Wheeler";

vehicle.color = "black";

console.log(vehicle1.color);
console.log(vehicle2.color);

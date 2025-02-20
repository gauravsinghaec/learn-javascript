// Constructor functions help create multiple objects with the same structure.
import { divider } from "../moduleNamedExport.js";


// Not all functions are constructor function
divider("Constructor Function without Parameters");
function SoftwareEngineer() {
  this.primaryLang = "C";
  console.log(this);
}

// See the use of 'new' keyword while invoking constructor function - Instantiation
const yuvi = new SoftwareEngineer();
console.log({ yuvi });
divider("Constructor Function with Parameters");
function SoftwareEngineer2(name) {
  this.primaryLang = "C";
  this.name = name;
}

const ima = new SoftwareEngineer2("Ima");
const bablu = new SoftwareEngineer2("Bablu");
console.log({ ima, yuvi });

if (yuvi instanceof SoftwareEngineer) {
  console.log("Yuvi is Software Engineer");
}
if (bablu instanceof SoftwareEngineer) {
  console.log("Bablu is Software Engineer");
} else {
  console.log("Bablu is not Software Engineer");
}
if (ima instanceof SoftwareEngineer2) {
  console.log("Ima is Software Engineer 2");
}
if (bablu instanceof SoftwareEngineer2) {
  console.log("Bablu is Software Engineer 2");
}
console.log(ima == bablu);

divider("sharing method using Prototype");
divider("sharing method using Class");

// This is not a constructor function
function vehicle(modelName) {
  return {
    type: "Car",
    model: modelName,
    year: 2025,
    new: true,
  };
}

const vehicle1 = vehicle("Toyota");
const vehicle2 = vehicle("Suzuki");
const vehicle3 = vehicle("Volkwagan");

function Vehicle(modelName) {
  //   this.type = "Car";
  this.model = modelName;
  //   this.year = 2025;
  //   this.new = true;
}

// const vehicle_1 = Vehicle("Toyota"); // This is normal function invokation
// console.log(vehicle_1);
const vehicle_2 = new Vehicle("Suzuki"); // This is constructor function invokation
const vehicle_3 = new Vehicle("Volkwagan"); // This is constructor function invokation

function Test() {}

console.log(vehicle_2 instanceof Vehicle);

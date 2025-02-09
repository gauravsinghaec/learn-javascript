import { divider } from "./moduleNamedExport.js";

let vehicle;

vehicle = { type: "Car", model: "Toyota", year: 2020, new: true };

// console.log(vehicle["type"]);
console.log(vehicle.type);

// vehicle.wheels = 4;
// vehicle.color = "Red";

// console.log(vehicle);

vehicle.type = "Motorcycle";
vehicle["wheels"] = 2;

console.log(Object.keys(vehicle)); // --> This returns array of keys/properties
console.log(Object.values(vehicle)); // --> This returns array of values

divider("Object key name same as variable name");
divider("Example 1");
let text = "Delhi Election";
console.log({ text: text });
console.log({ text });

divider("Example 2");
// if the name of property in object is same as variable name then we can omit the :
function startVehicle() {
  console.log("This is to start vehicle");
}

function stopVehicle() {
  const x = 10;
  console.log("This is to stop vehicle");
  return x;
}
const carModel = "Toyota";

const vehicle2 = {
  type: "Car",
  carModel,
  year: 2020,
  prevYear: [2019, 2018, 2017],
  new: true,
  startVehicle,
  stop: stopVehicle,
};

console.log(vehicle2);

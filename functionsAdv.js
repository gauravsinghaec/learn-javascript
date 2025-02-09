import { divider } from "./moduleNamedExport.js";

function startVehicle() {
  // Function Declaration/ Definition
  console.log("This is to start vehicle"); // statement 1
}

function stopVehicle() {
  const x = 10; // statement 1
  console.log("This is to stop vehicle"); // statement 1
  return x; // statement 2
}
const val1 = stopVehicle;
const carModel = "Toyota";

// the values in object can be a literal, variable, function, object, array
const vehicle = {
  type: "Car",
  model: carModel,
  year: 2020,
  prevYear: [2019, 2018, 2017],
  new: true,
  start: startVehicle,
  stop: function () {
    const x = 10; // statement 1
    return x; // statement 2
  },
};

// type is a property of vehicle object
// start , stop are methods of vehicle object

vehicle.start();

console.log(" tostring", vehicle.toString());

// JSON.stringify();
// <>.toString()

divider("passing a function as function parameter");

const f1 = function () {
  console.log("hello");
};

function useMemo(param1, param2) {
  console.log(param1, param2);
  param1();
}

const obj1 = useMemo(f1, []);

// Function sequence-
// Which function is defined first?
// 1 f1, 2 useMemo

// Which function is invoked first?
// 1 useMemo, 2 f1

const obj2 = useMemo(function () {
  console.log("hello");
}, []);

// here we are invoking useMemo in two places. Both the invocation are same

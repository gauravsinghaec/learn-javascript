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

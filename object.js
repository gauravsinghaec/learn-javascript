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

import { divider } from "../moduleNamedExport.js";

function startEngine() {
  console.log(this);
  console.log("started");
}

const vehicle = {
  year: 2020,
  new: true,
  start: startEngine,
  sayCongrats: function (name, company) {
    console.log(`Congratulation ${name} on securing new job at ${company}`);
    console.log(this);
  },
};

function Vehicle() {
  console.log(this);
  this.year = 2020;
  this.new = true;
}
function add(x, y) {
  console.log(this);
  return x + y;
}
divider('"this" when intantiating object with "new" Keyword');
const car = new Vehicle();

divider("'this' when calling an object's method");
vehicle.start();
vehicle.sayCongrats("Gaurav", "Accern");

divider("'this' when calling an regular function");
startEngine();
console.log(add(4, 6));

divider("setting 'this' with call() function");
const bike = { wheels: 2 };
vehicle.sayCongrats.call(bike, "Gaurav", "Accern");

divider("setting 'this' with aplly() function");
const job = { type: "new", role: "SDE-1" };
vehicle.sayCongrats.apply(job, ["Gaurav", "Accern"]);

divider("setting 'this' with bind() function");
function review(cb) {
  cb();
}
const result = {
  marks: 50,
  incrementBy10: function () {
    this.marks += 10;
  },
};
console.log(`Marks before review = ${result.marks}`);
review(result.incrementBy10.bind(result));
console.log(`Marks after review = ${result.marks}`);

const vehicle = { year: 2020, new: true };
function Vehicle() {
  console.log(this);

  this.year = 2020;
  this.new = true;
}

const car = new Vehicle();
console.log(car.year);

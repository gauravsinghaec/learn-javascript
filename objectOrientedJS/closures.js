function welcome(company) {
  function sayCongrats(name) {
    console.log(`Congratulation ${name} on securing new job at ${company}`);
  }
  return sayCongrats;
}
const greet = welcome("Accern");
greet("Gaurav");

// Saving this with annonymous closure.. refer to bind() example in this.js file
function review(callback) {
  callback();
}
const result = {
  marks: 50,
  incrementBy10: function () {
    this.marks += 10;
  },
};

console.log(`Marks before review = ${result.marks}`);
review(function () {
  result.incrementBy10();
});
console.log(`Marks after review = ${result.marks}`);

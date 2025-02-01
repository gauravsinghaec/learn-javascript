// ----- IIFE - Immediately Invoked Function Expression-----

const myName = (function name1() {
  return "Hello";
})();

{
  function name1() {
    return "Hello";
  }

  const myName = name1();
}

// Below are the examples of functions hoisting in JavaScript.

// ---------- getName1 is hoisted ------------ //
const newName1 = getName1({ name: "Gaurav" });
console.log("newName1-->", newName1);

// ---------- getName2,getName3 & getName4 is not hoisted ------------ //
const newName2 = getName2({ name: "Gaurav" }); // Error: Cannot access 'getName2' before initialization
const newName3 = getName3({ name: "Gaurav" }); // Error: Cannot access 'getName3' before initialization
const newName4 = getName4({ name: "Gaurav" }); // Error: Cannot access 'getName4' before initialization

console.log(newName2, newName3, newName4);

// -------------- Arrow Function ---------------- //

function getName1(o) {
  return o.name;
}

const getName2 = function (o) {
  return o.name;
};

const getName3 = function somename(o) {
  return o.name;
};

const getName4 = (o) => {
  return o.name;
};

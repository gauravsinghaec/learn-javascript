// Constructor functions help create multiple objects with the same structure.
import { divider } from "../moduleNamedExport.js";
/*
class is not magic
The class keyword brings with it a lot of mental constructs from other, class-based languages. It doesn't magically add this functionality to JavaScript classes.
class is a mirage over prototypal inheritance
We've said this many times before, but under the hood, a JavaScript class just uses prototypal inheritance.
Using classes requires the use of new
When creating a new instance of a JavaScript class, the new keyword must be used 
*/

// ES5 syntax
function Animal1(name, eyes = 2) {
    this.name = name;
    this.eyes = eyes;
    this.eyesCount = function () {
      return `I have ${this.eyes} eyes`;
    };
  }
  Animal1.sayMeow = function () { console.log("Meow")}  // This is a static method
Animal1.prototype = {
    getName: function () {
        return `My name is ${this.name}`;
    },
};

// ES6 Class syntax
divider("Class is syntactical sugar over const func & prototypal inheritance");
  class Animal {
    constructor(name, eyes = 2) {
      this.name = name;
      this.eyes = eyes;
      this.eyesCount = function () {
        return `I have ${this.eyes} eyes`;
      };
    }
    getName() {
      return `My name is ${this.name}`;
    }
    static sayMeow() {
      console.log("Meow");
    }
  }


console.log(typeof Animal1);
console.log(typeof Animal);

// Animal.getName(); // Error because getName is an instance method, it is available on the instance of the class

const cat = new Animal("Cat");

cat.getName();

Animal.sayMeow();

console.log(Animal.prototype);

class Cat extends Animal {}

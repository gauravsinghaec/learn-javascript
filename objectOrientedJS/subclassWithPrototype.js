function Animal(name, eyes = 2) {
  this.name = name;
  this.eyes = eyes;
  this.eyesCount = function () {
    return `I have ${this.eyes} eyes`;
  };
}
Animal.prototype = {
  getName: function () {
    return `My name is ${this.name}`;
  },
};

function Cat(name, sound) {
  Animal.call(this, name);
  this.sound = sound;
}

Cat.prototype = {
  sayMeow: function () {
    return `I say ${this.sound}`;
  },
};

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

const cat = new Cat("Cat", "Meow");
console.log(cat.name);
console.log(cat.eyesCount());
console.log(cat.getName());
console.log(cat.sayMeow());

// Object.keys(): Returns an array of a given object's own enumerable property names.
let obj1 = { a: 1, b: 2, c: 3 };
let keys = Object.keys(obj); // keys is ['a', 'b', 'c']

// Object.values(): Returns an array of a given object's own enumerable property values.
let obj2 = { a: 1, b: 2, c: 3 };
let values = Object.values(obj); // values is [1, 2, 3]

// Object.entries(): Returns an array of a given object's own enumerable property [key, value] pairs.
let obj3 = { a: 1, b: 2, c: 3 };
let entries = Object.entries(obj); // entries is [['a', 1], ['b', 2], ['c', 3]]

// Object.assign(): Copies the values of all enumerable own properties from one or more source objects to a target object.
let target = { a: 1 };
let source = { b: 2, c: 3 };
let combined = Object.assign(target, source); // combined is {a: 1, b: 2, c: 3}

// Object.freeze(): Freezes an object, preventing new properties from being added to it and existing properties from being removed.
let obj4 = { a: 1 };
Object.freeze(obj);
obj.b = 2; // Fails silently or throws an error in strict mode

// Object.seal(): Seals an object, preventing new properties from being added to it, but existing properties can still be modified.
let obj5 = { a: 1 };
Object.seal(obj);
obj.a = 2; // Works
obj.b = 3; // Fails silently or throws an error in strict mode

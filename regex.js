const str = "Hello World";

// string replace
console.log(str.replace(/o/g, "0"));

// string match
console.log(str.match(/o/g));
console.log(str.match(/o/gi));

// regex
const regex = /o/g;
console.log(str.replace(regex, "0"));
console.log(str.match(regex));

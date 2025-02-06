// string concatenation
const str = "Hello, ";
const str2 = "World!";
const str3 = str + str2;
console.log(str3);

// length of string
console.log(str.length);

// string letters can be accessed using index
console.log(str2[4]);

// string split
console.log(str2.split(""));
console.log(str2.split("o"));
console.log(str2.split("l"));

// string trim
const str4 = "   Hello, World!   ";
console.log(str4.trim());
console.log(str4.trimStart());
console.log(str4.trimEnd());

// string methods
console.log(str2.toUpperCase());
console.log(str2.toLowerCase());

// string search
console.log(str2.indexOf("o"));
console.log(str2.indexOf("o", 2));
console.log(str2.lastIndexOf("o"));
console.log(str2.startsWith("W"));
console.log(str2.endsWith("!"));
console.log(str2.includes("o"));

// string slice
const str5 = "JavaScript";
console.log(str5.slice(1, 3));
console.log(str5.slice(-3));
console.log(str5.slice(2));
console.log(str5.slice(-3, -1));

// string substring
console.log(str5.substring(1, 3));
console.log(str5.substring(3, 1));
console.log(str5.substring(2));
console.log(str5.substring(2, 4));

// string replace
console.log(str2.replace("o", "0"));
console.log(str2.replace(/o/g, "0"));

// string match
console.log(str2.match("o"));
console.log(str2.match(/o/g));
console.log(str2.match(/o/gi));

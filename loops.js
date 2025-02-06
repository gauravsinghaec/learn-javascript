const candidates = ["Gaurav", "Yuvi", "Rahul", "Rohit", "", ``];
const organization = "ABC2";

console.log("Loops is starting");

// for loop
// for (const i = 0; i < candidates.length; i++) {
//   const str = `Hello ${candidates[i]}, Welcome to ${organization}!`;
//   console.log(str);
// }

// for of loop
// for (const candidate of candidates) {
//   const str = `Hello ${candidate}, Welcome to ${organization}!`;
//   console.log(str);
// }

// for in loop
for (const i in candidates) {
  console.log(i);
  const str = `Hello ${candidates[i]}, Welcome to ${organization}!`;
  console.log(str);
}

// while (candidates.length > 0) {
//   const str = `Hello ${candidates.pop()}, Welcome to ${organization}!`;
//   console.log(str);
// }

// do {
//   const str = `Hello ${candidates.shift()}, Welcome to ${organization}!`;
//   console.log(str);
// } while (candidates.length > 0);

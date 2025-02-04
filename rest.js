function subt1(x) {
  console.log(x);
}

subt1(1);
subt1(1, 2, 3);

// ---- Rest Parameter ---- //

function subt(...x) {
  // x is an array
  console.log(x);
  console.log(x[0]);
}

subt(1);
subt(1, 2, 3);

// ---- Destructuring ---- //

const y = [2, 45];
const [t, s] = [1, "Hello"];
console.log(t);

// ---- Destructuring with Rest Operator ---- //
const [a, b, ...c] = [1, 2, 3, 4, 5];
console.log(a, b, c);

// ---- Spread Operator ---- //
function abc(a, b, ...c) {
  console.log(a, b, c);
}

abc(1, 2, 3, 4, 5);

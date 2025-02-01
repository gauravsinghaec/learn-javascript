// global scope
let x;
function test() {
  // local/block scope
  x = 20;
  console.log(x);
}

function test1() {
  let x = 30;
  console.log(x);
  function test2() {
    let x = 40;
    console.log(x);
  }
}

// let x; // Error -> Identifier 'x' has already been declared
{
  let x = 1;
  console.log(x);
}

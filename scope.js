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


// -------------- Block Scope ---------------- //

function getName(o) {
    return o.name;
  }
  const n = getName("hello");
  // block 1
  {
    const p = { name: "Ima" };
    const n = getName(p);
    console.log("Inside block 1", n);
  }
  // block 2
  {
    const n = getName({ name: "Yuvi" });
    console.log("Inside block 2", n);
  }
  // block 1 = block 2
  
  console.log(n);
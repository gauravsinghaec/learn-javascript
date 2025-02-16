import { divider } from "../moduleNamedExport.js";

// below commented codes are just for reference
// const prfunc = (resolve, reject) => {
//   resolve("asas");
//   reject("Error");
// };
// prfunc(f1, f2);

const promiseObj = new Promise((resolve, reject) => {
  let passCriteria = true;
  return passCriteria ? resolve("Hello") : reject("My Error");
});

console.log("typeof promiseObj", typeof promiseObj);

divider("Unhandled Promise"); // This will do a console.log
promiseObj.then((data) => console.log("Inside Unhandled then", data));
promiseObj.catch((err) => console.log("Inside Unhandled catch", err));

divider("Handled Promise"); // This will do a console.log
// Way 1 and way 2 are same
// Way 1
{
  const p2 = promiseObj.then((data) =>
    console.log("Inside Unhandled then", data)
  );
  console.log("typeof p2", typeof p2);
  p2.catch((err) => console.log("Inside Unhandled catch", err));
}

// Way2
promiseObj
  .then((data) => {
    console.log("1st Then");
    return "1st Then: From result of promiseObj";
  })
  .then((data) => {
    console.log("2nd Then-->", data);
    return "2nd Then error";
  })
  .then((data) => {
    throw Error(data);
  })
  .then((data) => console.log("I won't run"))
  .catch((err) => console.log("Inside Handled catch", err));
/*
const succPromiseObj = Promise.resolve("I am result of promise");
const failPromiseObj = Promise.reject("Error");
console.log(succPromiseObj, failPromiseObj);

succPromiseObj
  .then((x) => {
    console.log("Resolved");
    console.log(x);
  })
  .catch(() => {
    console.log("Rejected");
  });

failPromiseObj
  .then((o) => {
    console.log("Resolved");
    console.log(o);
  })
  .catch(() => {
    console.log("Rejected");
  });
*/

function randomText(length = 6) {
  return Math.random().toString(36).substr(2, length);
}
console.log("************* Global Scope *************");
const organization = randomText();
console.log({ organization });

const appDetails = function () {
  const name = randomText(4);
  console.log({ name });
  const appVersion = function () {
    console.log("************* Inner Execution context *************");
    const version = randomText(2);
    console.log({ version });
    console.log({ organization, name, version });
  };
  console.log("\n************* App Version call 1 *************");
  appVersion();
  console.log("\n************* App Version call 2 *************");
  appVersion();
};

console.log("\n************* Outer Execution context *************");
console.log("************* App Details call 1 *************");
appDetails();
console.log("************* App Details call 2 *************");
appDetails();

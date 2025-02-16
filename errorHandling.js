function f2() {
  throw new Error("API call failed");
}
function greet(name, callback) {
  console.log({ name });
  try {
    callback();
  } catch (error) {
    console.log("Something went wrong ", error);
  } finally {
    console.log("Finally");
  }
}
greet("Gaurav", f2);

console.log("End of Script");

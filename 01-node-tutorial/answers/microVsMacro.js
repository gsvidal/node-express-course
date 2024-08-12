console.log("First log");

const promise = new Promise((resolve) => {
  resolve("resolved");
});

promise.then((msg) => console.log(msg));

const macroTask = () => {
  setTimeout(() => {
    console.log("macro task");
  }, 2000);
};
macroTask();

console.log("last log");

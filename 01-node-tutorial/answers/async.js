const func =  () => {
  setTimeout(() => {
    console.log("hello there async");
  }, 3000);
};
console.log("start...");
func();
console.log("end...");

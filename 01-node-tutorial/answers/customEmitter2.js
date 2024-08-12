const EventEmitter = require("events");
const emitter = new EventEmitter();
const waitForEvent = () => {
  return new Promise((resolve) => {
    console.log("inside promise");
    emitter.on("happens", (msg) => resolve(msg));
  });
};
const doWait = async () => {
  const msg = await waitForEvent();
  console.log("We got an event! Here it is: ", msg);
};
doWait();
emitter.emit("happens", "hello world!");

const EventEmitter = require("events");  
const emitter = new EventEmitter();  
emitter.on("click", (msg) => console.log(msg));
emitter.emit("click", "The user clicked on a button");  
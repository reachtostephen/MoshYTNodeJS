var url = "http://mylogger.io/log";
const EventEmitter = require("events");
//xconst emitter = new EventEmitter();

//console.log(__filename);
//console.log(__dirname);
class Logger extends EventEmitter {
  log(message) {
    console.log(message);
    this.emit("messageLogged", { id: 1, url: "http://" });
  }
}

module.exports = Logger;
// module.exports.endPoint = url;

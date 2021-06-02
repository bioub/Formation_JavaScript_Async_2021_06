var saxStream = require("sax").createStream(true)
const fs = require('fs');

let lastOpenTag = '';

saxStream.on("error", function (e) {
  // unhandled errors will throw, since this is a proper node
  // event emitter.
  console.error("error!", e)
  // clear the error
  this._parser.error = null
  this._parser.resume()
})
saxStream.on("opentag", function (node) {
  lastOpenTag = node.name;
})
saxStream.on("text", function (text) {
  if (lastOpenTag === 'vendor') {
    console.log(text);
  }
})
// pipe is supported, and it's readable/writable
// same chunks coming in also go out.
fs.createReadStream("STMicroelectronics.STM32G0xx_Drivers.pdsc")
  .pipe(saxStream)
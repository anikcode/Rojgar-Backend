const bunyan = require("bunyan");

// Create a Bunyan logger with a custom format
const logger = bunyan.createLogger({
  name: "my-app",
  level: "debug",
  serializers: bunyan.stdSerializers,
  streams: [
    {
      level: "debug",
      stream: process.stdout, // Log to the console
    },
    {
      level: "error",
      path: "error.log",
    },
  ],
});

module.exports = logger;

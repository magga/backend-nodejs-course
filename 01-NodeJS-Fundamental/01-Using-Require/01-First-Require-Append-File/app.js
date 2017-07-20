console.log("Starting App");

const fs = require("fs");

fs.appendFileSync("greetings.txt", "Hello World!");
const yargs = require("yargs");
const yArgv = yargs.argv;

const room = require("./room.js");

var command = yArgv._[0];

if (command === "add") {
    var weather = room.addWeather(yArgv.tem, yArgv.hum);
    console.log(`Add Temperature : ${weather.temperature}, Humidity : ${weather.humidity}, Timestamp : ${weather.timestamp}`);
} else if (command === "list") {
    room.getAll();
} else if (command === "read") {
    room.getWeather(yArgv.time);
} else if (command === "remove") {
    room.removeWeather(yArgv.time);
} else {
    console.log("Command Not Recognized");
} 
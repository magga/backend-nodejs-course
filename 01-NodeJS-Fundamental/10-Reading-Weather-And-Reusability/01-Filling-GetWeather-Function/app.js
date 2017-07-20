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
    var weather = room.getWeather(yArgv.time);

    if (weather) {
        console.log(`Weather found. Temperature : ${weather.temperature}, Humidity : ${weather.humidity}, Timestamp : ${weather.timestamp}`);
    } else {
        console.log("No weather found");
    }
} else if (command === "remove") {
    var deleted = room.removeWeather(yArgv.time);

    if (deleted) {
        console.log("Weather successfully deleted!");
    } else {
        console.log("No weather found");
    }
} else {
    console.log("Command Not Recognized");
} 
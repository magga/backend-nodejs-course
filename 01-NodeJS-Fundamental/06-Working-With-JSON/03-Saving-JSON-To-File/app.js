const fs = require("fs");

var originalWeather = {
    temperature: 20,
    humidity: 30,
    location: "Jakarta"
}

// Convert object and then save it
var originalWeatherStr = JSON.stringify(originalWeather);
fs.writeFileSync("weather.json", originalWeatherStr);


// Read file and then convert it as an object
var weatherStr = fs.readFileSync("weather.json");
var weather = JSON.parse(weatherStr);

//Print
console.log(`Type of : ${typeof weather}`);
console.log(weather);
const fs = require("fs");

var addWeather = (tem, hum) => {
    var weatherArr = [];
    var weather = {
        temperature: tem,
        humidity: hum,
        timestamp: new Date().valueOf()
    }

    try {
        var weatherStr = fs.readFileSync("room-data.json");
        weatherArr = JSON.parse(weatherStr);
    } catch (error) {
        
    }

    weatherArr.push(weather);
    fs.writeFileSync("room-data.json", JSON.stringify(weatherArr));

    console.log(`Add Temperature : ${tem}, Humidity : ${hum}, Timestamp : ${new Date().valueOf()}`);
};

var getAll = () => {
    console.log("Getting all the weather");
};

var getWeather = (timestamp) => {
    console.log(`Getting weather with the timestamp : ${timestamp}`);
}

var removeWeather = (timestamp) => {
    console.log(`Removing weather with the timestamp : ${timestamp}`);
}

module.exports = {
    addWeather,
    getAll,
    getWeather,
    removeWeather
};
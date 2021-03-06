const fs = require("fs");

/////////////////////////////////////////////////////////

var fetchWeatherList = () => {
    try {
        var weatherStr = fs.readFileSync("room-data.json");
        return weatherArr = JSON.parse(weatherStr);
    } catch (error) {
        return [];
    }
};

var saveWeatherList = (weatherArr) => {
    fs.writeFileSync("room-data.json", JSON.stringify(weatherArr));
}

/////////////////////////////////////////////////////////

var addWeather = (tem, hum) => {
    var weatherArr = fetchWeatherList();
    var weather = {
        temperature: tem,
        humidity: hum,
        timestamp: new Date().valueOf()
    }

    weatherArr.push(weather);
    saveWeatherList(weatherArr);

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
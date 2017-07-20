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

    return weather;
};

var getAll = () => {
    console.log("Getting all the weather");
};

var getWeather = (timestamp) => {
    var weatherArr = fetchWeatherList();

    var filteredWeather = weatherArr.filter((item) => item.timestamp === timestamp);

    return filteredWeather[0];
}

var removeWeather = (timestamp) => {
    var weatherArr = fetchWeatherList();

    var filteredWeather = weatherArr.filter((item) => item.timestamp !== timestamp);

    saveWeatherList(filteredWeather);

    return weatherArr.length !== filteredWeather.length;
}

module.exports = {
    addWeather,
    getAll,
    getWeather,
    removeWeather
};
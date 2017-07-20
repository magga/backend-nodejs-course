var addWeather = (tem, hum) => {
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
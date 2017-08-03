var mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/WeatherCol");

var Weather = mongoose.model("Weather", {
    temperature: {
        type: String
    },
    humidity: {
        type: String
    }
});

var newWeather = new Weather({
    temperature: 20,
    humidity: 30
});

newWeather.save().then((doc) => {
    console.log("Saved Weather :", doc);
}, (e) => {
    console.log("Unable to save :", e);
});
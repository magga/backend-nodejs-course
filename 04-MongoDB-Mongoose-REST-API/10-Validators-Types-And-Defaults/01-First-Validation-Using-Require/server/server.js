var mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/WeatherCol");

var Weather = mongoose.model("Weather", {
    temperature: {
        type: String,
        required: true
    },
    humidity: {
        type: String,
        required: true
    }
});

var newWeather = new Weather({
    // If this line is commented, it will generate validation error
    //temperature: 20,
    humidity: 30
});

newWeather.save().then((doc) => {
    console.log("Saved Weather :", doc);
}, (e) => {
    console.log("Unable to save :", e);
});
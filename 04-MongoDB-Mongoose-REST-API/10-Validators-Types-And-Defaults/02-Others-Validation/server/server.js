var mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/WeatherCol");

var Weather = mongoose.model("Weather", {
    temperature: {
        type: Number,
        required: true,
        min: 0,
        max: 100
    },
    humidity: {
        type: Number,
        required: true,
        default: 0
    },
    information: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

var newWeather = new Weather({
    temperature: 20,
    //humidity: 30,
    information: "  test  "
});

newWeather.save().then((doc) => {
    console.log("Saved Weather :", doc);
}, (e) => {
    console.log("Unable to save :", e);
});
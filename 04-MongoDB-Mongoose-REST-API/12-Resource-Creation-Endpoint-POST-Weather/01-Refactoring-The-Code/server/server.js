var {mongoose} = require("./db/mongoose");
var {Weather} = require("./models/weather");

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
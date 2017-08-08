var express = require("express");
var bodyParser = require("body-parser");

var {mongoose} = require("./db/mongoose");
var {Weather} = require("./models/weather");

var app = express();

app.use(bodyParser.json());

app.post("/weathers", (req, res) => {
    var weather = new Weather({
        temperature: req.body.temperature,
        humidity: req.body.humidity,
        information: req.body.information
    });

    weather.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.send(e);
    });
});

app.listen(3000, () => {
    console.log("Start the app at port 3000");
});
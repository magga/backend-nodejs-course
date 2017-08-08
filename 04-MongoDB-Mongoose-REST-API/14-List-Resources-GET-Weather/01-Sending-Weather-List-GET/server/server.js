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
        res.status(201).send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get("/weathers", (req, res) => {
    Weather.find().then((weathers) => {
        // Send the response (weathers) as an object, not the weathers itself
        res.send({weathers});
    }, (e) => {
        res.status(500).send(e);
    });
});

app.listen(3000, () => {
    console.log("Start the app at port 3000");
});
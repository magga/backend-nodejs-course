var express = require("express");
var bodyParser = require("body-parser");
var hbs = require("hbs");

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
        //res.send({weathers});

        res.render("weathers.hbs", {weathers});
    }, (e) => {
        res.status(500).send(e);
    });
});

// GET /weathers/123123
app.get("/weathers/:id", (req, res) => {
    res.send(req.params);
});

app.listen(3000, () => {
    console.log("Start the app at port 3000");
});
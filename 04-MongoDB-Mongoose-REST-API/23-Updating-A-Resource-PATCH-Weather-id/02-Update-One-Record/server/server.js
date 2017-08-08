var express = require("express");
var bodyParser = require("body-parser");
var hbs = require("hbs");
var _ = require("lodash");

var {ObjectID} = require("mongodb");

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
    var id = req.params.id;

    if(!ObjectID.isValid(id)){
        res.status(400).send("ID Not Valid");
        return;
    }

    Weather.find({
        _id: id
    }).then((weathers) => {
        if(weathers.length < 1){
            res.status(404).send("Not Found");
            return;
        }

        res.send({weathers});
    }).catch((e) => {
        res.status(400).send(e);
    });
});

// DELETE /weathers/123123
app.delete("/weathers/:id", (req, res) => {
    var id = req.params.id;

    if(!ObjectID.isValid(id)){
        res.status(400).send("ID Not Valid");
        return;
    }

    // DELETE Multiple Record
    // Weather.remove({}).then((results) => {
    //     res.send(results);
    // });

    // DELETE One Record
    Weather.findOneAndRemove({
        _id: id
    }).then((weather) => {
        if(!weather){
            res.status(404).send("Not Found");
            return;
        }

        res.send({weather});
    }).catch((e) => {
        res.status(400).send(e);
    });
});


// PATCH /weathers/123123
app.patch("/weathers/:id", (req, res) => {

    var id = req.params.id;

    if(!ObjectID.isValid(id)){
        res.status(400).send("ID Not Valid");
        return;
    }
    
    // Install Lodash first
    var body = _.pick(req.body, ["temperature", "humidity", "information"]);

    // PATCH Multiple Record
    // Weather.update({ information: "info" }, {$set: body}, {new: true, multi: true})
    // .then((results) => {
    //     res.send(results);
    // });

    // PATCH One Record
    Weather.findOneAndUpdate({ _id: id}, {$set: body}, {new: true})
    .then((weather) => {
        if(!weather){
            res.status(404).send("Not Found");
            return;
        }

        res.send({weather});
    }).catch((e) => {
        res.status(400).send(e);
    });

});

app.listen(3000, () => {
    console.log("Start the app at port 3000");
});
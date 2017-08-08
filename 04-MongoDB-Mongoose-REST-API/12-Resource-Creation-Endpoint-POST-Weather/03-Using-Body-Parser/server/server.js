var express = require("express");
var bodyParser = require("body-parser");

var {mongoose} = require("./db/mongoose");
var {Weather} = require("./models/weather");

var app = express();

app.use(bodyParser.json());

// Test it on Postman
app.post("/weathers", (req, res) => {
    console.log(req.body);
});

app.listen(3000, () => {
    console.log("Start the app at port 3000");
});
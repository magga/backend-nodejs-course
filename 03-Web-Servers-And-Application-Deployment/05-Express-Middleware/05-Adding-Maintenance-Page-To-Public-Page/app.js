const express = require("express");
const hbs = require("hbs");
const fs = require("fs");

const app = express();

app.use((req, res, next) => {
    res.send("<h1>We Are Under Maintenance</h1> <p>Please come back later</p>");
});

app.use(express.static(__dirname + "/public"));

// app.use((req, res, next) => {
//     var log = "";
//     log += "============================================" + "\n";
//     log += "Timestamp : " + new Date().toString() + "\n";
//     log += "Browser : " + req.headers["user-agent"].toString() + "\n";
//     log += "Method : " + req.method.toString() + "\n";
//     log += "URL : " + req.url.toString() + "\n";
//     log += "============================================" + "\n";

//     fs.appendFile("server-log.txt", log);

//     next();
// });

app.get("/", (req, res) => {
    console.log("Get request from /");
    
    res.send({
        name: 'Magga',
        likes: [
            'Music',
            'Book',
            'Nap'
        ]
    });
});

app.get("/about", (req, res) => {
    console.log("Get request from /about");

    res.send("<h1>About Page</h1>");
});

app.get("/my-room", (req, res) => {
    console.log("Get request from /my-room");

    var room = {
        id: "12",
        results: [{
            temperature: 20,
            humidity: 30,
            timestamp: 123123123
        }, {
            temperature: 23,
            humidity: 34,
            timestamp: 123123124
        }, {
            temperature: 26,
            humidity: 33,
            timestamp: 123123125
        }]
    };

    res.render("my-room.hbs", room);
});

app.listen(3000, () => {
    console.log("Starting App");
});
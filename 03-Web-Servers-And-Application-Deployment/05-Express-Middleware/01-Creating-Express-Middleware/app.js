const express = require("express");
const hbs = require("hbs");

const app = express();

app.use(express.static(__dirname + "/public"));

app.use((req, res, next) => {
    // If we comment this out, the program won't go to the next process
    //next();
});

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
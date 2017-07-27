const express = require("express");
const hbs = require("hbs");

const app = express();

app.use(express.static(__dirname + "/public"));

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

    res.render("my-room.hbs");
});

app.listen(3000, () => {
    console.log("Starting App");
});
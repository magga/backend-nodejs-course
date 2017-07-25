const express = require("express");

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

app.listen(3000, () => {
    console.log("Starting App");
});
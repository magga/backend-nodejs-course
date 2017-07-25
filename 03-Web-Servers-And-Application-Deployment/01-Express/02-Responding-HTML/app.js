const express = require("express");

const app = express();

console.log("Starting App");

app.get("/", (req, res) => {
    console.log("Get request from /");
    res.send("<h1>Hello Express!</h1> <p>This is a pharagraph</p>");
});

app.listen(3000);
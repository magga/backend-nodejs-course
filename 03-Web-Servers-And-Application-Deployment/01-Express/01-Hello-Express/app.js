const express = require("express");

const app = express();

console.log("Starting App");

app.get("/", (req, res) => {
    console.log("Get request from /");
    res.send("Hello Express!");
});

app.listen(3000);
const request = require("request");

request({
    url: "https://maps.googleapis.com/maps/api/geocode/json?address=%22BSD%20Tangerang%22",
    json: true
}, (error, response, body) => {
    console.log(JSON.stringify(body, undefined, 2));
});
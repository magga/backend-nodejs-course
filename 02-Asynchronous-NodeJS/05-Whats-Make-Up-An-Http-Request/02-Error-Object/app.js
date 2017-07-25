const request = require("request");

request({
    url: "https://mapsgoogleapis.com/maps/api/geocode/json?address=%22BSD%20Tangerang%22",
    json: true
}, (error, response, body) => {
    console.log(JSON.stringify(error, undefined, 2));
});
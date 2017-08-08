var {mongoose} = require("./../server/db/mongoose");
var {Weather} = require("./../server/models/weather");

var weatherDefaultID = new Weather({
    temperature: 20,
    humidity: 10,
    information: "Default ID"
});

var weatherCustomID = new Weather({
    // Will make an error
    //_id: "123",
    temperature: 30,
    humidity: 15,
    information: "Custom ID"
});

weatherCustomID.save().then((doc) => {
    console.log(doc);

    console.log("Timestamp UTC", doc._id.getTimestamp());
    console.log("Timestamp Local", (new Date().getTimezoneOffset() + doc._id.getTimestamp()) );
}, (e) => {
    console.log(e);
});
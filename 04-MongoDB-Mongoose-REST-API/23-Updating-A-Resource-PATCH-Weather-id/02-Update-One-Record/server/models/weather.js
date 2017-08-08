var mongoose = require("mongoose");

var Weather = mongoose.model("Weather", {
    temperature: {
        type: Number,
        required: true,
        min: 0,
        max: 100
    },
    humidity: {
        type: Number,
        required: true,
        default: 0
    },
    information: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

module.exports = {Weather};
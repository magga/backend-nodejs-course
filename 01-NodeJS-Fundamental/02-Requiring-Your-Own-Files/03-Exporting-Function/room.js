console.log("Starting Room.js");

// // Using regular syntax
// module.exports.addWeather = function() {
//     console.log("Adding Weather");
//     return "New Weather";
// }

// Using ES6 Arrow Function
module.exports.addWeather = () => {
    console.log("Adding Weather");
    return "New Weather";
}
console.log("Starting App");

const fs = require("fs");
const os = require("os");

// // Print all of the user object
// var user = os.userInfo();
// console.log(user);


var user = os.userInfo();

// // Use regular syntax
// fs.appendFileSync("greetings.txt", "Hello " + user.username + "!");

// Use ES6 feature known as "Template String"
fs.appendFileSync("greetings.txt", `Hello ${user.username}!`);
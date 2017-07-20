var weather = {
    temperature: 20,
    humidity: 30,
    location: "Jakarta"
};

var weatherStr = JSON.stringify(weather);

console.log(`Type of weather : ${typeof weather}`);
console.log(`Type of weatherStr : ${typeof weatherStr}`);

console.log(weatherStr);
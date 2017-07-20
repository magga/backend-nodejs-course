var weatherStr = '{"temperature": 20, "humidity": 30, "location": "Jakarta", "timestamp": 123123}';

var weatherObj = JSON.parse(weatherStr);

console.log(`Type of : ${typeof weatherObj}`);
console.log(weatherObj);

console.log(weatherObj.temperature + weatherObj.humidity);
console.log(weatherObj.location);
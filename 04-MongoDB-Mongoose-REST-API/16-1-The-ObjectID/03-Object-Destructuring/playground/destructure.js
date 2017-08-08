var user = {
    name: "Gogo",
    age: 25
};

// Normal Assigning
// var name = user.name;
// var age = user.age;

// console.log("Name", name);
// console.log("Age", age);


// ES6 Destructuring
var {name} = user;
var {age} = user;

console.log("Name", name);
console.log("Age", age);
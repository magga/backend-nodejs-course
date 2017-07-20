const _ = require("lodash");

// console.log(_.isString(true));
// console.log(_.isString("true"));

var array = [1, 2, 3, 4, 2, "Magga", 4, 2, 2];
var filteredArray = _.uniq(array);

console.log(filteredArray);
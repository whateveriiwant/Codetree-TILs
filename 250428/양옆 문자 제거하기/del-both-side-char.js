let str = require("fs").readFileSync(0).toString().trim();

str = str.slice(0, 1) + str.slice(2, str.length - 2) + str.slice(str.length - 1, str.length);

console.log(str);
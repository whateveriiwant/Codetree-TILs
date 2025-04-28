let str = require("fs").readFileSync(0).toString().trim();

str = str.slice(1, 0) + str.slice(0, 1);

console.log(str);
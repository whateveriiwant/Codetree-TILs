input = require("fs").readFileSync(0).toString().split("\n");

let [a, b] = [input[0], input[1]];

console.log(a, b);
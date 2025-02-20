const [a, b] = require("fs").readFileSync(0).toString().split(" ").map(Number);

let x = a > b ? a : b;

console.log(x);
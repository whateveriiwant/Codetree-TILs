const [a, b] = require("fs").readFileSync(0).toString().split("\n").map(Number);

console.log((a+b).toFixed(2));
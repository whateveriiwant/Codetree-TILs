const [a, b] = require("fs").readFileSync(0).toString().split(" ").map(Number);

console.log(a+b, ((a+b)/2).toFixed(1));
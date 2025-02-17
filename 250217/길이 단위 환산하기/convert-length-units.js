const fs = require("fs");

n = fs.readFileSync(0).toString();
n = Number(n);

console.log((n * 30.48).toFixed(1));
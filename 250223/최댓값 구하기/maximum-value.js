const [a, b, c] = require("fs").readFileSync(0).toString().split(" ").map(Number);

let max = a;

if (max < b) max = b;
if (max < c) max = c;

console.log(max);
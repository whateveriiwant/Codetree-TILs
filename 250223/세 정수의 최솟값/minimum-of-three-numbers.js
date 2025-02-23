const [a, b, c] = require("fs").readFileSync(0).toString().split(" ").map(Number);

let min = a;

if (b < min) min = b;
if (c < min) min = c;

console.log(min);
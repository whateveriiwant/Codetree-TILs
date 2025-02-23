const [a, b, c] = require("fs").readFileSync(0).toString().split(" ").map(Number);

let min = a;

if (b < min) min = b;
if (c < min) min = c;

console.log(a === min ? "1" : "0", a === b && b === c && a === c ? "1" : "0");
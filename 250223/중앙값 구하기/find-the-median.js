const [a, b, c] = require("fs").readFileSync(0).toString().split(" ").map(Number);

let med = a;

if (med < b && b > c && med < c) med = c;
if (med < c && c > b && med < b) med = b;

console.log(med);
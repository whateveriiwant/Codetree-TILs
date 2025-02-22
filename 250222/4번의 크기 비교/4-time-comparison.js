const input = require("fs").readFileSync(0).toString().split("\n");

const a = Number(input[0]);

const [b, c, d, e] = input[1].split(" ").map(Number);

console.log(a > b ? "1" : "0");
console.log(a > c ? "1" : "0");
console.log(a > d ? "1" : "0");
console.log(a > e ? "1" : "0");
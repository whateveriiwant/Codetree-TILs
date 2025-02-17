const input = require("fs").readFileSync(0).toString().split("\n");

const [a, b] = input[0].split(" ").map(Number);
const c = input[1];

console.log(a, b, c);
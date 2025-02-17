const input = require("fs").readFileSync(0).toString().trim().split("\n");

const [s, t] = input.map(String);

console.log(t);
console.log(s);
const [a, b, c, d, e] = require("fs").readFileSync(0).toString().trim().split(" ").map(Number);

console.log(String.fromCharCode(a), String.fromCharCode(b), String.fromCharCode(c), String.fromCharCode(d), String.fromCharCode(e));
const [a, b] = require("fs").readFileSync(0).toString().trim().split("-").map(String);

console.log(a+b);